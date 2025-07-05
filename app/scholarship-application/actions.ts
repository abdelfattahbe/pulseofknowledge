"use server"

interface ScholarshipApplicationData {
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  nationality: string
  currentCountry: string
  city: string
  address: string
  currentEducationLevel: string
  currentInstitution: string
  fieldOfStudy: string
  gpa: string
  graduationYear: string
  englishProficiency: string
  preferredDestination: string
  preferredUniversity: string
  preferredProgram: string
  intakeYear: string
  intakeSemester: string
  familyIncome: string
  scholarshipPercentage: string
  canPayRemaining: string
  motivationLetter: string
  careerGoals: string
  whyDeserveScholarship: string
  extracurriculars: string
  workExperience: string
  languages: string
  hasPassport: string
  emergencyContactName: string
  emergencyContactRelation: string
  emergencyContactPhone: string
  agreeToTerms: boolean
  agreeToContact: boolean
}

export async function submitScholarshipApplication(data: ScholarshipApplicationData) {
  try {
    // Create email content
    const emailContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>New Scholarship Application</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: linear-gradient(135deg, #00D4D4, #FF6B47); color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .section { margin-bottom: 25px; padding: 15px; border-left: 4px solid #00D4D4; background: #f9f9f9; }
        .section h3 { color: #00D4D4; margin-top: 0; }
        .field { margin-bottom: 10px; }
        .field strong { color: #333; }
        .highlight { background: #fff3cd; padding: 10px; border-radius: 5px; margin: 10px 0; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🎓 New Scholarship Application</h1>
        <p>Pulse OF Knowledge - Study Abroad Program</p>
    </div>
    
    <div class="content">
        <div class="highlight">
            <strong>Application submitted on:</strong> ${new Date().toLocaleString()}
        </div>

        <div class="section">
            <h3>👤 Personal Information</h3>
            <div class="field"><strong>Full Name:</strong> ${data.firstName} ${data.lastName}</div>
            <div class="field"><strong>Email:</strong> ${data.email}</div>
            <div class="field"><strong>Phone:</strong> ${data.phone}</div>
            <div class="field"><strong>Date of Birth:</strong> ${data.dateOfBirth}</div>
            <div class="field"><strong>Nationality:</strong> ${data.nationality}</div>
            <div class="field"><strong>Current Location:</strong> ${data.city}, ${data.currentCountry}</div>
            <div class="field"><strong>Address:</strong> ${data.address}</div>
        </div>

        <div class="section">
            <h3>🎓 Academic Information</h3>
            <div class="field"><strong>Current Education Level:</strong> ${data.currentEducationLevel}</div>
            <div class="field"><strong>Current Institution:</strong> ${data.currentInstitution}</div>
            <div class="field"><strong>Field of Study:</strong> ${data.fieldOfStudy}</div>
            <div class="field"><strong>GPA/Grade:</strong> ${data.gpa}</div>
            <div class="field"><strong>Graduation Year:</strong> ${data.graduationYear}</div>
            <div class="field"><strong>English Proficiency:</strong> ${data.englishProficiency}</div>
        </div>

        <div class="section">
            <h3>🌍 Study Preferences</h3>
            <div class="field"><strong>Preferred Destination:</strong> ${data.preferredDestination}</div>
            <div class="field"><strong>Preferred University:</strong> ${data.preferredUniversity}</div>
            <div class="field"><strong>Preferred Program:</strong> ${data.preferredProgram}</div>
            <div class="field"><strong>Intake:</strong> ${data.intakeSemester} ${data.intakeYear}</div>
            <div class="field"><strong>Desired Scholarship:</strong> ${data.scholarshipPercentage}%</div>
            <div class="field"><strong>Can Pay Remaining:</strong> ${data.canPayRemaining}</div>
        </div>

        <div class="section">
            <h3>💰 Financial Information</h3>
            <div class="field"><strong>Family Income:</strong> ${data.familyIncome || "Not specified"}</div>
        </div>

        <div class="section">
            <h3>📝 Essays & Motivation</h3>
            <div class="field">
                <strong>Motivation Letter:</strong><br>
                <p style="background: white; padding: 10px; border-radius: 5px;">${data.motivationLetter}</p>
            </div>
            <div class="field">
                <strong>Why Deserve Scholarship:</strong><br>
                <p style="background: white; padding: 10px; border-radius: 5px;">${data.whyDeserveScholarship}</p>
            </div>
        </div>

        <div class="section">
            <h3>🏆 Additional Information</h3>
            <div class="field"><strong>Extracurricular Activities:</strong> ${data.extracurriculars || "None specified"}</div>
            <div class="field"><strong>Work Experience:</strong> ${data.workExperience || "None specified"}</div>
        </div>

        <div class="section">
            <h3>🚨 Emergency Contact</h3>
            <div class="field"><strong>Name:</strong> ${data.emergencyContactName}</div>
            <div class="field"><strong>Relationship:</strong> ${data.emergencyContactRelation}</div>
            <div class="field"><strong>Phone:</strong> ${data.emergencyContactPhone}</div>
        </div>

        <div class="section">
            <h3>✅ Agreements</h3>
            <div class="field"><strong>Agreed to Terms:</strong> ${data.agreeToTerms ? "Yes" : "No"}</div>
            <div class="field"><strong>Agreed to Contact:</strong> ${data.agreeToContact ? "Yes" : "No"}</div>
        </div>
    </div>
</body>
</html>
    `

    // In a real application, you would use a service like Resend, SendGrid, or Nodemailer
    // For now, we'll simulate the email sending
    console.log("Scholarship application received for abdelfattahbentamdia@gmail.com:", {
      applicant: `${data.firstName} ${data.lastName}`,
      email: data.email,
      destination: data.preferredDestination,
      program: data.preferredProgram,
      scholarship: `${data.scholarshipPercentage}%`,
    })

    // Here you would integrate with your email service
    // Example with a hypothetical email service:
    /*
    await sendEmail({
      to: 'abdelfattahbentamdia@gmail.com',
      subject: `New Scholarship Application - ${data.firstName} ${data.lastName}`,
      html: emailContent
    })
    */

    return { success: true, message: "Application submitted successfully!" }
  } catch (error) {
    console.error("Error submitting scholarship application:", error)
    return { success: false, message: "Failed to submit application. Please try again." }
  }
}
