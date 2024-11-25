const downloadButton = document.getElementById("downloadBtn");

downloadButton.addEventListener("click", (event) => {
  event.preventDefault();
  const newWindow = window.open("", "_blank");
  if (newWindow) {
    newWindow.location.href = "images/GazzehiWala_CV.pdf";
  } else {
    alert("Please allow pop-ups for this website to view the file.");
  }

  const link = document.createElement("a");
  link.href = "images/GazzehiWala_CV.pdf";
  link.download = "GazzehiWala_CV.pdf";
});

const downloadButtonn = document.getElementById("downloadBtn1");

downloadButtonn.addEventListener("click", (event) => {
  event.preventDefault();

  const newWindow = window.open("", "_blank");
  if (newWindow) {
    newWindow.location.href = "images/GazzehiWala_CV.pdf";
  } else {
    alert("Please allow pop-ups for this website to view the file.");
  }

  const link = document.createElement("a");
  link.href = "images/GazzehiWala_CV.pdf";
  link.download = "GazzehiWala_CV.pdf";
});
function sendEmail(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && subject && message) {
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Your message has been successfully sent.",
    });

    document.getElementById("contact-form").reset();
  } else {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Please fill out all fields.",
    });
  }
}
