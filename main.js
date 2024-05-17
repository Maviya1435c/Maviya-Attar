// Typing effect
var text = "Hi, I am Keran.
I am the personal assistant of
 Maviya.
";
var index = 0;

function type() {
 if (index < text.length) {
  if (text.charAt(index) === '
   ') {
   document.getElementById("text")
   .innerHTML +=
   "<br>"; // Add line break
  }
  else {
   document.getElementById("text")
    .textContent += text.charAt(
     index);
  }
  speak(text.charAt(
  index)); // Speak the current character
  index++;
  setTimeout(type, 100);
 }
}

// Automatically start typing animation when the page loads
window.onload = function() {
 type();
};

function speak(text) {
 var utterance =
  new SpeechSynthesisUtterance(
   text);
 speechSynthesis.speak(utterance);
}

function showAboutInfo() {
 // Hide main page buttons
 document.getElementById(
   "main-page").style.display =
  "none";
 // Show about page buttons
 document.querySelector(
   "#about-page .button-row")
  .style.display = "flex";
 // Change text in the box
 document.getElementById("text")
  .textContent =
  "Here is information about Maviya";
 // Speak the text
 speak(
  "Here is information about Maviya"
  );
 // Show about page
 document.getElementById(
   "about-page").style.display =
  "flex";
}

function showContactInfo() {
 // Hide main page buttons
 document.getElementById(
   "main-page").style.display =
  "none";
 // Show contact page buttons
 document.querySelector(
   "#contact-page .button-row")
  .style.display = "flex";
 // Change text in the box
 document.getElementById("text")
  .textContent =
  "Phone number: 9999999999";
 // Speak the text
 speak(
 "Phone number: 9999999999");
 // Show contact page
 document.getElementById(
   "contact-page").style.display =
  "flex";
}

function showResidencyInfo() {
 // Hide main page buttons
 document.getElementById(
   "main-page").style.display =
  "none";
 // Show residency page buttons
 document.querySelector(
   "#residency-page .button-row")
  .style.display = "flex";
 // Change text in the box
 document.getElementById("text")
  .textContent =
  "Maviya lives in Solapur";
 // Speak the text
 speak("Maviya lives in Solapur");
 // Show residency page
 document.getElementById(
   "residency-page").style
  .display = "flex";
}

function showSocialMediaInfo() {
 // Hide main page buttons
 document.getElementById(
   "main-page").style.display =
  "none";
 // Show social media page buttons
 document.querySelector(
  "#social-media-page .button-row"
  ).style.display = "flex";
 // Change text in the box
 document.getElementById("text")
  .textContent =
  "Follow me on social media:";
 // Speak the text
 speak(
  "Follow me on social media");
 // Show social media page
 document.getElementById(
   "social-media-page").style
  .display = "flex";
}

function followInstagram() {
 window.open(
  "https://www.instagram.com/maviya_706?igshid=bGttOXdjdWhhdDR0",
  "_blank");
}

function followLinkedIn() {
 window.open(
  "https://www.linkedin.com/in/maviya-attar-59b619293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  "_blank");
}

function showMainPage() {
 // Reset text in the box
 document.getElementById("text")
  .textContent = text;
 // Speak the main message text
 speak(text);
 // Hide all other pages
 document.getElementById(
   "about-page").style.display =
  "none";
 document.getElementById(
   "residency-page").style
  .display = "none";
 document.getElementById(
   "contact-page").style.display =
  "none";
 document.getElementById(
   "social-media-page").style
  .display = "none";
 // Show main page
 document.getElementById(
   "main-page").style.display =
  "flex";
}

function copyContact() {
 var phoneNumber = "9999999999";
 navigator.clipboard.writeText(
  phoneNumber).then(function() {
  // Show copied message
  document.getElementById(
    "text").textContent =
   "Phone number copied!";
  // Speak the text
  speak("Phone number copied");
 }, function(err) {
  console.error(
   'Could not copy text: ', err
   );
 });
}