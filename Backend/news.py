from newspaper import fulltext
import requests
from datetime import datetime
import json
import os
from dotenv import load_dotenv
from openai import OpenAI
import MySQLdb

load_dotenv()

def timestamp() -> str:
    return datetime.now().strftime("%Y-%m-%d_%H-%M-%S")

def logging(message: str):
    print(f"[{timestamp()}] {message}")

def get_news_data(category: str, save: bool = True):

    params = {
        "country": "au",
        "category": category,
    }

    response = requests.get(f"https://newsdata.io/api/1/news?apikey={os.getenv("NEWS_DATA_IO_API_KEY")}", params=params).json()

    filename = f"response_{timestamp()}.json"

    if save:
        with open(filename, 'w') as json_file:
            json.dump(response, json_file, indent=4)
    
        logging(f"{filename} saved successfully as JSON")

    return response

def load_news_data(filename: str) -> dict:
    try:
        with open(filename, 'r') as json_file:
            data = json.load(json_file)

        logging(f"{filename} loaded successfully, returning JSON")
        return data
    except:
        logging(f"{filename} not found")
        return

def get_fulltext(link: str) -> str:
    response = requests.get(link, allow_redirects=True)

    if response.status_code != 200:
        logging("Error fetching page")
        return
    
    text = fulltext(response.text)

    return text

def summarise_text(text: str) -> str:

    client = OpenAI(
        api_key = os.getenv("OPENAI_API_KEY"),
    )

    completion = client.chat.completions.create(
        model="gpt-3.5-turbo-1106",
        messages=[
            {"role": "system", "content": "You are a dot point assistant, you are skilled in summarising given texts to 5 dot points of 10 words or less. Keep the language easy to understand yet concise. Add your own creative flair."},
            {"role": "user", "content": text}
        ]
    )

    return completion.choices[0].message.content

if __name__ == "__main__":

    num_articles = 10

    categories = ['top', 'sports', 'technology', 'business', 'science', 'entertainment', 'health', 'world', 'politics', 'environment', 'food']

    connection = MySQLdb.connect(host=os.getenv("DB_HOST"),
                             user=os.getenv("DB_USER"),
                             password=os.getenv("DB_PASS"),
                             database=os.getenv("DB_DATABASE"))

    for category in categories[:num_articles]:
        try:
            data = get_news_data(category, save=False)

            logging(f"Category: {category} | Total Results: {data["totalResults"]}")
            
            for result in data["results"]:
                text = get_fulltext(result["link"])
                logging(f"Text extracted successfully")
                summarised_text = summarise_text(text)
                logging(f"Text summarised successfully")

                if len(result["creator"]) > 1:
                    creator_string = ", ".join(result["creator"])
                else:
                    creator_string = result["creator"][0]

                logging(f"Adding data to MySQL")
                with connection.cursor() as cursor:
                    sql = "INSERT INTO news_feed (title, link, author, summarised_text, date, image_url, source_id, source_url, source_icon, country, category, language) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
                    data_to_insert = (result["title"], result["link"], creator_string, summarised_text, result["pubDate"], result["image_url"], result["source_id"], result["source_url"], result["source_icon"], result["country"][0], result["category"], result["language"])
                    cursor.execute(sql, data_to_insert)
                connection.commit()
                logging(f"Data added to MySQL successfully")
        finally:
            logging(f"All data added to MySQL. Closing connection.")
            connection.close()