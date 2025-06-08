from pymongo import MongoClient
from dotenv import load_dotenv
import os
import warnings

warnings.filterwarnings("ignore")

load_dotenv() #Loading the .env file

mongo_uri = os.getenv("MONGO_URI")

if not mongo_uri:
    raise ValueError("MongoDB URI is missing in the .env file.")

client = MongoClient(mongo_uri) # Establishing the connection to the database

db = client.get_database() # Fetching the database

collection = db["Users"] # Accessing the Users collection

# Method to get all the candidates from the database

def getCandidates():
    data = collection.find_one({},{"Candidates"})

    if data and "Candidates" in data:
        collections = data.get("Candidates", [])
        
        for element in collections:
            print(element)
    else:
        print("No valid 'Collections' field found or document is empty.")

# Method to get all the recruiters from the database

def getRecruiters():
    data = collection.find_one({},{"Recruiters"})

    if data and "Recruiters" in data:
        collections = data.get("Recruiters", [])
        
        for element in collections:
            print(element)
    else:
        print("No valid 'Collections' field found or document is empty.")


# Method to get all the jobs from the database

def getJobs():
    data = collection.find_one({},{"Jobs"})

    if data and "Jobs" in data:
        collections = data.get("Jobs", [])
        
        for element in collections:
            print(element)
    else:
        print("No valid 'Collections' field found or document is empty.")
