// document.addEventListener("DOMContentLoaded", function () {
//     var resumeForm = document.getElementById("resumeform");
//     var downloadButton = document.getElementById("download-pdf");

//     if (resumeForm) {
//         resumeForm.addEventListener("submit", function (event) {
//             event.preventDefault();

//             var profilepictureInput = document.getElementById("profilepicture");
//             var nameElement = document.getElementById("name");
//             var emailElement = document.getElementById("email");
//             var phoneElement = document.getElementById("phone");
//             var addressElement = document.getElementById("address");
//             var educationElement = document.getElementById("education");
//             var experienceElement = document.getElementById("experience");
//             var skillsElement = document.getElementById("skills");
//             var githubElement = document.getElementById("github");
//             var linkedinElement = document.getElementById("linkedin");

//             if (nameElement && emailElement && phoneElement && addressElement && profilepictureInput && educationElement && experienceElement && skillsElement && githubElement && linkedinElement) {
//                 var name = nameElement.value;
//                 var email = emailElement.value;
//                 var phone = phoneElement.value;
//                 var address = addressElement.value;
//                 var education = educationElement.value;
//                 var experience = experienceElement.value;
//                 var skills = skillsElement.value;
//                 var github = githubElement.value.trim();
//                 var linkedin = linkedinElement.value.trim();

//                 var profilepictureFile = profilepictureInput.files[0];

//                 var resumeOutputElement = document.getElementById("resumeOutput");
//                 if (resumeOutputElement) {
//                     resumeOutputElement.innerHTML = `
//                         <h2>Resume</h2>
//                         ${profilepictureFile ? `<img id="profile-img" src="${URL.createObjectURL(profilepictureFile)}" alt="Profile Picture" style="width:100px;height:100px;border-radius:50%;">` : ""}
//                         <p><strong>Name:</strong> ${name}</p>
//                         <p><strong>Email:</strong> ${email}</p>
//                         <p><strong>Phone:</strong> ${phone}</p>
//                         <p><strong>Address:</strong> ${address}</p>
//                         <h3>Education</h3>
//                         <p>${education}</p>
//                         <h3>Experience</h3>
//                         <p>${experience}</p>
//                         <h3>Skills</h3>
//                         <p>${skills}</p>
//                         ${github ? `<p><strong>GitHub:</strong> <a href="${github}" target="_blank">${github}</a></p>` : ""}
//                         ${linkedin ? `<p><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>` : ""}
//                     `;
//                 }
//             }
//         });
//     }

//     if (downloadButton) {
//         downloadButton.addEventListener("click", function () {
//             var { jsPDF } = window.jspdf;
//             var doc = new jsPDF();

//             var resumeContent = document.getElementById("resumeOutput");

//             if (!resumeContent || resumeContent.innerText.trim() === "") {
//                 alert("Please generate your resume first!");
//                 return;
//             }

//             doc.setFont("helvetica", "bold");
//             doc.setFontSize(22);
//             doc.text("Resume", 80, 20);

//             let y = 40; // Initial Y Position

//             var profilepictureInput = document.getElementById("profilepicture");
//             var profilepictureFile = profilepictureInput.files[0];

//             if (profilepictureFile) {
//                 var reader = new FileReader();
//                 reader.onload = function (e) {
//                     doc.addImage(e.target.result, "JPEG", 80, y, 50, 50);
//                     y += 60; // Move content down
//                     addResumeText();
//                 };
//                 reader.readAsDataURL(profilepictureFile);
//             } else {
//                 addResumeText();
//             }

//             function addResumeText() {
//                 doc.setFont("helvetica", "normal");
//                 doc.setFontSize(14);

//                 const textData = [
//                     { label: "Name:", value: document.getElementById("name").value },
//                     { label: "Email:", value: document.getElementById("email").value },
//                     { label: "Phone:", value: document.getElementById("phone").value },
//                     { label: "Address:", value: document.getElementById("address").value },
//                     { label: "Education:", value: document.getElementById("education").value },
//                     { label: "Experience:", value: document.getElementById("experience").value },
//                     { label: "Skills:", value: document.getElementById("skills").value },
//                     { label: "GitHub:", value: document.getElementById("github").value },
//                     { label: "LinkedIn:", value: document.getElementById("linkedin").value }
//                 ];

//                 textData.forEach(item => {
//                     if (item.value.trim() !== "") {
//                         doc.setFont("helvetica", "bold");
//                         doc.text(item.label, 10, y);
//                         doc.setFont("helvetica", "normal");
//                         doc.text(item.value, 50, y);
//                         y += 10;
//                     }
//                 });

//                 doc.save("resume.pdf");
//             }
//         });
//     }
// });
document.addEventListener("DOMContentLoaded", function () {
    var resumeForm = document.getElementById("resumeform");
    var downloadButton = document.getElementById("download-pdf");
    var shareableContainer = document.getElementById("shareable-link-container");

    if (resumeForm) {
        resumeForm.addEventListener("submit", function (event) {
            event.preventDefault();

            var profilepictureInput = document.getElementById("profilepicture");
            var nameElement = document.getElementById("name");
            var emailElement = document.getElementById("email");
            var phoneElement = document.getElementById("phone");
            var addressElement = document.getElementById("address");
            var educationElement = document.getElementById("education");
            var experienceElement = document.getElementById("experience");
            var skillsElement = document.getElementById("skills");
            var githubElement = document.getElementById("github");
            var linkedinElement = document.getElementById("linkedin");

            var name = nameElement.value.trim();
            var email = emailElement.value.trim();
            var phone = phoneElement.value.trim();
            var address = addressElement.value.trim();
            var education = educationElement.value.trim();
            var experience = experienceElement.value.trim();
            var skills = skillsElement.value.trim();
            var github = githubElement.value.trim();
            var linkedin = linkedinElement.value.trim();

            var profilepictureFile = profilepictureInput.files[0];

            var resumeOutputElement = document.getElementById("resumeOutput");
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = `
                    <h2>Resume</h2>
                    ${profilepictureFile ? `<img id="profile-img" src="${URL.createObjectURL(profilepictureFile)}" alt="Profile Picture" style="width:100px;height:100px;border-radius:50%;">` : ""}
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Address:</strong> ${address}</p>
                    <h3>Education</h3>
                    <p>${education}</p>
                    <h3>Experience</h3>
                    <p>${experience}</p>
                    <h3>Skills</h3>
                    <p>${skills}</p>
                    ${github ? `<p><strong>GitHub:</strong> <a href="${github}" target="_blank">${github}</a></p>` : ""}
                    ${linkedin ? `<p><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>` : ""}
                `;

                // Show download button & shareable link section
                shareableContainer.style.display = "block";
            }
        });
    }

    if (downloadButton) {
        downloadButton.addEventListener("click", function () {
            var { jsPDF } = window.jspdf;
            var doc = new jsPDF();

            var resumeContent = document.getElementById("resumeOutput");

            if (!resumeContent || resumeContent.innerText.trim() === "") {
                alert("Please generate your resume first!");
                return;
            }

            doc.setFont("helvetica", "bold");
            doc.setFontSize(22);
            doc.text("Resume", 80, 20);

            let y = 40; // Initial Y Position

            var profilepictureInput = document.getElementById("profilepicture");
            var profilepictureFile = profilepictureInput.files[0];

            if (profilepictureFile) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    doc.addImage(e.target.result, "JPEG", 80, y, 50, 50);
                    y += 60; // Move content down
                    addResumeText();
                };
                reader.readAsDataURL(profilepictureFile);
            } else {
                addResumeText();
            }

            function addResumeText() {
                doc.setFont("helvetica", "normal");
                doc.setFontSize(14);

                const textData = [
                    { label: "Name:", value: document.getElementById("name").value },
                    { label: "Email:", value: document.getElementById("email").value },
                    { label: "Phone:", value: document.getElementById("phone").value },
                    { label: "Address:", value: document.getElementById("address").value },
                    { label: "Education:", value: document.getElementById("education").value },
                    { label: "Experience:", value: document.getElementById("experience").value },
                    { label: "Skills:", value: document.getElementById("skills").value },
                    { label: "GitHub:", value: document.getElementById("github").value },
                    { label: "LinkedIn:", value: document.getElementById("linkedin").value }
                ];

                textData.forEach(item => {
                    if (item.value.trim() !== "") {
                        doc.setFont("helvetica", "bold");
                        doc.text(item.label, 10, y);
                        doc.setFont("helvetica", "normal");
                        doc.text(item.value, 50, y);
                        y += 10;
                    }
                });

                doc.save("resume.pdf");
            }
        });
    }
});
