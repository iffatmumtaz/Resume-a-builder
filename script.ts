document.getElementById('resumeform')?.addEventListener('submit', function(event) {
  event?.preventDefault();

  const nameElement = document.getElementById('name') as HTMLInputElement;
  const emailElement = document.getElementById('email') as HTMLInputElement;
  const phoneElement = document.getElementById('phone') as HTMLInputElement;
  const addressElement = document.getElementById('address') as HTMLInputElement;
  const educationElement = document.getElementById('education') as HTMLInputElement;
  const experienceElement = document.getElementById('experience') as HTMLInputElement;
  const skillsElement = document.getElementById('skills') as HTMLInputElement;
  const githubElement = document.getElementById('github') as HTMLInputElement;
  const linkedinElement = document.getElementById('linkedin') as HTMLInputElement;

  if (
    nameElement && emailElement && phoneElement && addressElement &&
    educationElement && experienceElement && skillsElement &&
    githubElement && linkedinElement
  ) {
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const address = addressElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;
    const github = githubElement.value;
    const linkedin = linkedinElement.value;

    const resumeOutput = `
      <h2>Editable Resume</h2>
      <p><strong>Name:</strong> <span contenteditable="true">${name}</span></p>
      <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
      <p><strong>Phone:</strong> <span contenteditable="true">${phone}</span></p>
      <p><strong>Address:</strong> <span contenteditable="true">${address}</span></p>
      <h3>Education</h3>
      <p contenteditable="true">${education}</p>
      <h3>Experience</h3>
      <p contenteditable="true">${experience}</p>
      <h3>Skills</h3>
      <p contenteditable="true">${skills}</p>
      <h3>Social Links</h3>
      <p><strong>GitHub:</strong> <a href="${github}" target="_blank">${github}</a></p>
      <p><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>
    `;

    const resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeOutput;
    } else {
      console.error('The resume output element is missing');
    }
  } else {
    console.error('One or more input elements are missing');
  }
});
