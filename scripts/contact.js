// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// define vars
let submitMessage = document.getElementById("submit-button");
let contactUsPage = document.getElementById("contact-page");

// when user clicks submit, display a thank you msg
submitMessage.addEventListener("click", function() {
    contactUsPage.style.fontSize = "24px";
    contactUsPage.innerHTML = "<p>Thank you for your message</p>";
})
