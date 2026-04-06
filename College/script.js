function applyNow() {
  alert("Application feature coming soon!");
}

function showDetails(course) {
  alert(course + " details page coming soon!");
}

function submitForm(event) {
  event.preventDefault();
  alert("Form submitted successfully!");
}



// login scripts 

function login(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // simple check (demo purpose)
  if (email === "admin@gmail.com" && password === "1234") {

    // save login status
    localStorage.setItem("isLoggedIn", "true");

    // redirect to main page
    window.location.href = "index.html";

  } else {
    alert("Invalid Login!");
  }
}