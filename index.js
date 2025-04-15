const dropArea = document.getElementById("drop-area");
const imageUpload = document.getElementById("image-upload");
const imageView = document.getElementById("image-view");

imageUpload.addEventListener("change", uploadImage);

function uploadImage() {
     let imgLink = URL.createObjectURL(imageUpload.files[0])
}



// document.addEventListener("DOMContentLoaded", () => {
        

// const form = document.querySelector("form");

//   form.addEventListener("submit", saveData); 
//   function saveData(event) {
//     event.preventDefault(); 

//     const fullname = document.getElementById("fullname"); 
//     const email = document.getElementById("mail"); 
//     const github = document.getElementById("GitHub");


//     const fullNameValue = fullname.value.trim();
//     const emailValue = email.value.trim();
//     const githubValue = github.value.trim();

//     const userData = {
//       fullNameValue,
//       emailValue,
//       githubValue,
//     };

//     const queryString = new URLSearchParams(userData).toString();
//     window.location.href = `./ticket.html?${queryString}`;
// }

// const params = new URLSearchParams(window.location.search);

// const fullname = params.get("fullname") || "Guest";
// const email = params.get("email") || "No email provided";
// const github = params.get("github") || "Not provided";

// document.getElementById("conf-name").textContent = fullname;
// document.getElementById("conf-email").textContent = email;
// })


