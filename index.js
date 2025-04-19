// variable for grabbing inputs

const imageUpload = document.getElementById("image-upload");
const fullName = document.getElementById("fullname");
const mail = document.getElementById("mail");
const gitHub = document.getElementById("GitHub");

//storing form data

let formData = {
     imageData: imageUpload.value,
     fullNameData: fullName.value,
     mailData: mail.value,
     gitHubData: gitHub.value
};
     
const form = document.getElementById("main-form");

form.addEventListener("submit", function(event) {
     event.preventDefault(event);
     console.log(formData);
})
     



