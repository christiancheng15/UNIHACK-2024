from fastapi import FastAPI, Query, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import MySQLdb
import os
from dotenv import load_dotenv
from datetime import datetime

load_dotenv()

app = FastAPI()

def format_date(date):
    return str(date.strftime("%d %B %Y"))

app.add_middleware(
    CORSMiddleware,
    allow_origins=["localhost:5173"],
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)

db = MySQLdb.connect(host=os.getenv("DB_HOST"), user=os.getenv("DB_USER"), passwd=os.getenv("DB_PASS"), db=os.getenv("DB_DATABASE"))
cursor = db.cursor()

@app.get("/fetch-news")
async def get_data(page: int = Query(1)):
    try:
        offset = (page - 1) * 10
        cursor.execute(f"SELECT title, link, author, summarised_text, date, image_url, source_id, source_url, source_icon, country, category, language, id FROM news_feed")
        
        rows = cursor.fetchall()

        data = []
        for row in rows:
            data.append({
                "title": row[0],
                "link": row[1],
                "author": row[2],
                "summarised_text": row[3].replace("- ", "").split("\n")[:5],
                "date": format_date(row[4]),
                "image_url": row[5],
                "source_id": row[6],
                "source_url": row[7],
                "source_icon": row[8],
                "country": row[9],
                "category": row[10],
                "language": row[11],
                "id": row[12]
            })
        
        return data
    
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
