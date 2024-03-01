from newspaper import fulltext
import requests
from datetime import datetime
import json

def timestamp() -> str:
    return datetime.now().strftime("%Y-%m-%d_%H-%M-%S")

def logging(message: str) -> str:
    return f"[{timestamp()}] {message}"

def get_news_data(category: str, save: bool = True):
    assert category in ['top', 'sports', 'technology', 'business', 'science', 'entertainment', 'health', 'world', 'politics', 'environment', 'food']

    params = {
        "country": "au",
        "category": category,
    }

    response = requests.get("https://newsdata.io/api/1/news?apikey=pub_3920552a9be4849fd501b6c71e23e65a1d060", params=params).json()

    filename = f"response_{timestamp()}.json"

    if save:
        with open(filename, 'w') as json_file:
            json.dump(response, json_file, indent=4)
    
    logging(f"{filename} saved successfully as JSON")

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

if __name__ == "__main__":
    data = load_news_data("response_2024-03-01_22-58-09.json")

    logging(f"Total Results: {data["totalResults"]}")

    results = data["results"]

    sample_result = results[0]

    print(sample_result)

    text = get_fulltext(sample_result["link"])

    if text:
        print(text)