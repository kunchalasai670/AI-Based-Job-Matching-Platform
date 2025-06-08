class Candidate:
    def __init__(self, candidateId, candidateFirstName, candidateMiddleName, candidateLastName, candidateEmail, candidatePassword, candidateHeadline, candidateExperience, candidateSkills, candidateEducationHistory, candidatePreferences, candidateJobDomain, candidateResumeLocation, candidateProfilePictureLocation, candidateMessages, candidateSWOT, candidateJobLists, candidateSavedJobs):
        self.candidateId = candidateId
        self.candidateFirstName = candidateFirstName
        self.candidateMiddleName = candidateMiddleName
        self.candidateLastName = candidateLastName
        self.candidateEmail = candidateEmail
        self.candidatePassword = candidatePassword
        self.candidateHeadline = candidateHeadline
        self.candidateExperience = candidateExperience
        self.candidateSkills = candidateSkills
        self.candidateEducationHistory = candidateEducationHistory
        self.candidatePreferences = candidatePreferences
        self.candidateJobDomain = candidateJobDomain
        self.candidateResumeLocation = candidateResumeLocation
        self.candidateProfilePictureLocation = candidateProfilePictureLocation
        self.candidateMessages = candidateMessages
        self.candidateSWOT = candidateSWOT
        self.candidateJobLists = candidateJobLists
        self.candidateSavedJobs = candidateSavedJobs

# Model for Recruiters
class Recruiters:
    def __init__(self, recruiterFirstName, recruiterMiddleName, recruiterLastName, recruiterJobs, recruiterCompany, recruiterId, recruiterEmail, recruiterPassword):
        self.recruiterFirstName = recruiterFirstName
        self.recruiterMiddleName = recruiterMiddleName
        self.recruiterLastName = recruiterLastName
        self.recruiterJobs = recruiterJobs
        self.recruiterCompany = recruiterCompany
        self.recruiterId = recruiterId
        self.recruiterEmail = recruiterEmail
        self.recruiterPassword = recruiterPassword


        


# Model for Jobs
class Jobs:
    def __init__(self,jobId, jobTitle, jobDescription, company, jobPostedDate, locations, jobCompensation):
        self.jobId=jobId
        self.jobTitle=jobTitle
        self.jobDescription=jobDescription
        self.company=company
        self.jobPostedDate=jobPostedDate
        self.locations=locations
        self.jobCompensation=jobCompensation
