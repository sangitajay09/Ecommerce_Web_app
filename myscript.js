
document.addEventListener('DOMContentLoaded', function() {
    let time = document.getElementById("current-time");
    setInterval(function() {
        let d = new Date();
        time.innerHTML = d.toLocaleDateString('en-us') + " " + d.toLocaleTimeString('en-us');
    }, 1000);

    var changedColor = localStorage.getItem("bgcolor");
    var article = document.getElementsByTagName('article');
    article[0].style.backgroundColor = changedColor;
});


function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phoneNum").value;
    var comment = document.getElementById("comment").value;

    // Regular expression patterns
    var namePattern = /^[A-Z][a-z]+$/;
    var emailPattern = /^\S+@\S+\.\S+$/;
    var phonePattern = /^\(\d{3}\) \d{3}-\d{4}/;

    // Check first name
    if (!namePattern.test(firstName)) {
      window.alert("Invalid first name. Please enter only alphabetical characters and enter first letter in Capital");
      return false;
    }

    // Check last name
    if (!namePattern.test(lastName)) {
      window.alert("Invalid last name. Please enter only alphabetical characters and enter first letter in Capital");
      return false;
    }

    if(firstName === lastName){
        window.alert("First name and last name can't be same");
      return false;
    }

    // Check email
    if (!emailPattern.test(email)) {
      window.alert("Invalid email. Please enter a valid email address.");
      return false;
    }

    // Check comment
    if (comment.trim().length < 10) {
        window.alert("Invalid comment. Please enter comment of atleast 10 characters");
        return false;
      }

    // Check phone
    if (!phonePattern.test(phone)) {
        window.alert("Invalid phone no. Please enter a valid phone number (###) ###-####.");
        return false;
      }
    return true;
}

function clearLocalStorageOnLogout() {
        localStorage.clear();
    }

