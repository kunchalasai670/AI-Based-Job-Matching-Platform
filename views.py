# import PyPDF2
# from  PyPDF2 import PdfReader 
# import re
# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# from django.core.files.storage import default_storage

# # Sample job listings for matching
# JOBS = [
#     {"title": "Software Engineer", "skills": ["Python", "Django", "API"]},
#     {"title": "Data Analyst", "skills": ["SQL", "Excel", "PowerBI"]},
#     {"title": "UI/UX Designer", "skills": ["Figma", "Adobe", "Prototyping"]},
#     {"title": "DevOps Engineer", "skills": ["AWS", "Docker", "Kubernetes"]},
# ]

# def extract_keywords(text):
#     # Sample keywords list (expandable)
#     keyword_list = ["Python", "Django", "SQL", "AWS", "React", "Figma", "Machine Learning", "PowerBI"]
#     return [word for word in keyword_list if re.search(rf"\b{word}\b", text, re.IGNORECASE)]

# def match_jobs(keywords):
#     matched_jobs = [job for job in JOBS if any(skill in keywords for skill in job["skills"])]
#     return matched_jobs

# @csrf_exempt
# def upload_resume(request):
#     if request.method == 'POST' and request.FILES.get('resume'):
#         uploaded_file = request.FILES['resume']

#         # Save the uploaded file temporarily
#         file_path = default_storage.save(f"resumes/{uploaded_file.name}", uploaded_file)
        
#         with default_storage.open(file_path, 'rb') as pdf_file:
#             reader = PyPDF2.PdfFileReader(pdf_file)
#             text = ""
#             for page_num in range(reader.numPages):
#                 text += reader.getPage(page_num).extract_text()

#         keywords = extract_keywords(text)
#         matched_jobs = match_jobs(keywords)

#         return JsonResponse({
#             "keywords": keywords,
#             "matched_jobs": matched_jobs
#         })
    
#     return JsonResponse({"error": "Invalid request"}, status=400)
import PyPDF2
from PyPDF2 import PdfReader
import re
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
from .utils import extract_keywords, suggest_job_roles
import json

def suggest_jobs(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        text = data.get('text', '')
        keywords = extract_keywords(text)
        roles = suggest_job_roles(keywords)
        return JsonResponse({'suggestedRoles': roles})

# Updated sample job listings for better matching
JOBS = [
    {"title": "Software Engineer", "skills": ["Python", "Django", "API", "Flask", "JavaScript"]},
    {"title": "Data Analyst", "skills": ["SQL", "Excel", "PowerBI", "Tableau", "Python"]},
    {"title": "UI/UX Designer", "skills": ["Figma", "Adobe XD", "Prototyping", "Wireframing"]},
    {"title": "DevOps Engineer", "skills": ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]},
]

# Improved keyword extraction logic
def extract_keywords(text):
    keyword_list = [
        "Python", "Django", "SQL", "AWS", "React", "Figma",
        "Machine Learning", "PowerBI", "Docker", "Kubernetes",
        "Flask", "JavaScript", "CI/CD", "Wireframing", "Prototyping"
    ]

    # Extract potential keywords from the text
    found_keywords = set()
    for word in keyword_list:
        if word.lower() in text.lower():
            found_keywords.add(word)
    
    return list(found_keywords)

# Improved job matching logic based on keywords
def match_jobs(keywords):
    matched_jobs = [
        job for job in JOBS if any(skill in keywords for skill in job["skills"])
        # print("Matched Jobs:", matched_jobs)  # Debugging job matching logic
    ]
    return matched_jobs


@csrf_exempt
def upload_resume(request):
    if request.method == 'POST' and request.FILES.get('resume'):
        uploaded_file = request.FILES['resume']
        print("Extracted Text from PDF:\n", text)  # Debugging PDF content


        # Ensure only PDFs are accepted
        if not uploaded_file.name.endswith('.pdf'):
            return JsonResponse({"error": "Invalid file type. Please upload a PDF."}, status=400)

        # Save and read the uploaded file
        file_path = default_storage.save(f"resumes/{uploaded_file.name}", uploaded_file)
        
        text = ""
        try:
            with default_storage.open(file_path, 'rb') as pdf_file:
                reader = PdfReader(pdf_file)
                text = ""
                for page in reader.pages:
                    text += page.extract_text() or ""

                for page_num in range(reader.numPages):
                    text += reader.getPage(page_num).extract_text() or ""  # Handle None values
        except Exception as e:
            return JsonResponse({"error": "Failed to read the PDF content."}, status=400)

        # Extract keywords and match relevant job roles
        keywords = extract_keywords(text)
        matched_jobs = match_jobs(keywords)

        if not keywords:
            return JsonResponse({
                "keywords": [],
                "matched_jobs": [],
                "message": "No relevant keywords found in the resume."
            })

        return JsonResponse({
            "keywords": keywords,
            "matched_jobs": matched_jobs
        })

    return JsonResponse({"error": "Invalid request"}, status=400)
