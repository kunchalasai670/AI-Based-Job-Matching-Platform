# import PyPDF2
# import re

# # Sample keyword-to-job mapping
# JOB_KEYWORDS = {
#     "Python": ["Software Engineer - TechCorp", "AI Engineer - AI Innovations"],
#     "Data Analysis": ["Data Analyst - DataGen"],
#     "React": ["Frontend Developer - WebWorks"],
#     "Django": ["Software Engineer - TechCorp"],
#     "Machine Learning": ["AI Engineer - AI Innovations"],
#     "SQL": ["Data Analyst - DataGen"],
# }

# def extract_keywords_from_pdf(file_path):
#     keywords_found = []
#     try:
#         with open(file_path, 'rb') as pdf_file:
#             reader = PyPDF2.PdfReader(pdf_file)
#             text = ""
#             for page in reader.pages:
#                 text += page.extract_text() or ""

#             # Keyword extraction logic (modify patterns as needed)
#             for keyword, jobs in JOB_KEYWORDS.items():
#                 if re.search(rf"\b{re.escape(keyword)}\b", text, re.IGNORECASE):
#                     keywords_found.append(keyword)
#         return keywords_found
#     except Exception as e:
#         print(f"Error reading PDF: {e}")
#         return []
import re
from collections import Counter
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

# Sample mapping for keywords to job roles
job_roles = {
    'Python': ['Software Engineer', 'Data Scientist', 'AI Engineer'],
    'Embedded': ['Embedded Systems Engineer', 'Firmware Developer'],
    'VLSI': ['VLSI Engineer', 'ASIC Design Engineer'],
    'UI/UX': ['UI/UX Designer', 'Product Designer'],
    'SQL': ['Database Administrator', 'Data Analyst'],
}

# Extract keywords from resume text
def extract_keywords(text):
    stop_words = set(stopwords.words('english'))
    words = word_tokenize(text.lower())
    keywords = [word for word in words if word.isalnum() and word not in stop_words]
    return Counter(keywords).most_common(15)

# Suggest job roles based on extracted keywords
def suggest_job_roles(keywords):
    suggested_roles = set()
    for keyword, _ in keywords:
        if keyword in job_roles:
            suggested_roles.update(job_roles[keyword])
    return list(suggested_roles)
