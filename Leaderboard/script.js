// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCpjJ2Y2mL4kXJgXTNMp0FDGAvygLNf1hI",
    authDomain: "chistmas-pub-crawl-leaderboard.firebaseapp.com",
    projectId: "chistmas-pub-crawl-leaderboard",
    storageBucket: "chistmas-pub-crawl-leaderboard.appspot.com",
    messagingSenderId: "1074052258834",
    appId: "1:1074052258834:web:792f31788bc90c16c24ccb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

var username = " "

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

document.getElementById("yourname").addEventListener("change", getName);

function getName() {
  var x = document.getElementById("yourname");
  username = x.value
  createUser(username);
}

function createUser() {
    
    db.collection("users").doc(username).set({
        name: username,
        points: 0,
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });

    document.getElementById("myForm").style.display = "none";
}

var positionNum = 1;
var positionEnd = " ";
var positionNumAdmin = 1;
var positionEndAdmin = " ";

function displayUser() {
    var userDiv = document.createElement("div");
    userDiv.id = "place";
    
    userDiv.innerHTML = "<h2><i class='fas fa-holly-berry'></i>" + positionNum + positionEnd + "<i class='fas fa-holly-berry'></i></h2><div id='user'><img src='https://i.pravatar.cc/300' class='avatar'><div class='text'><h3>" + usersName + "</h3><div class='points'><h4>Points:</h4><h4>" + userpoints + "</h4></div></div></div>";

    usersSection = document.getElementById('users-section');
    usersSection.insertBefore(userDiv, usersSection.lastElementChild);

    document.getElementById("myForm").style.display = "none";

}
function query() {
    db.collection("users").orderBy("points", "desc").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            if (positionNum % 20 === 1 && positionNum != 11) {
                positionEnd = "st";
            } else if (positionNum % 10 === 2 && positionNum != 12) {
                positionEnd = "nd";
            } else if (positionNum % 10 === 3 && positionNum != 13) {
                positionEnd = "rd";
            } else {
                positionEnd = "th";
            }
            usersName = String(doc.data().name);
            userpoints = parseFloat(doc.data().points);
            displayUser();   
            console.log(doc.id, " => ", doc.data());
            ++ positionNum;
        });
    });
}


function addyDisplay() {
    var userDiv = document.createElement("div");
    userDiv.id = "place";
    
    userDiv.innerHTML = "<h2><i class='fas fa-holly-berry'></i>" + positionNumAdmin + positionEndAdmin + "<i class='fas fa-holly-berry'></i></h2><div id='user'><img src='https://i.pravatar.cc/300' class='avatar'><div class='text'><h3>" + usersName + "</h3><div class='points'><h4>Points:</h4><h4>" + userpoints + "</h4></div></div></div>";

    usersSection = document.getElementById('users-section');
    usersSection.insertBefore(userDiv, usersSection.lastElementChild);
}

function adminQuery() {

    db.collection("users").orderBy("points", "desc").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            if (positionNumAdmin % 20 === 1 && positionNumAdmin != 11) {
                positionEndAdmin = "st";
            } else if (positionNumAdmin % 10 === 2 && positionNumAdmin != 12) {
                positionEndAdmin = "nd";
            } else if (positionNumAdmin % 10 === 3 && positionNumAdmin != 13) {
                positionEndAdmin = "rd";
            } else {
                positionEndAdmin = "th";
            }
            usersName = String(doc.data().name);
            userpoints = parseFloat(doc.data().points);
            console.log(doc.id, " => ", doc.data());
            addyDisplay();
            ++positionNumAdmin;
        });
    }); 
}

function getImage() {

}

function openNav() {
document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
document.getElementById("myNav").style.width = "0%";
}

function openRules() {
document.getElementById("rules").style.width = "100%";
}

function closeRules() {
document.getElementById("rules").style.width = "0%";
}

function openMap() {
document.getElementById("map").style.width = "100%";
}

function closeMap() {
document.getElementById("map").style.width = "0%";
}

function openContact() {
document.getElementById("contact").style.width = "100%";
}

function closeContact() {
document.getElementById("contact").style.width = "0%";
}


// Password + Alarm
function myPassword() {
var password = prompt("What's the password?");
if (password === "jell13$") {
    window.location.href="admin.html"
} else {
    document.getElementById('xyz').play();
    alert("Warning: Virus downloading...")
}

}

// ADMIN SIDE
// Increment point buttons
jQuery(document).ready(function() {
    // This button will increment the value
    $('.qtyplus').click(function(e) {
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      fieldName = $(this).attr('field');
      // Get its current value
      var currentVal = parseInt($('input[name=' + fieldName + ']').val());
      // If is not undefined
      if (!isNaN(currentVal)) {
        // Increment
        $('input[name=' + fieldName + ']').val(currentVal + 1);
      } else {
        // Otherwise put a 0 there
        $('input[name=' + fieldName + ']').val(0);
      }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      fieldName = $(this).attr('field');
      // Get its current value
      var currentVal = parseInt($('input[name=' + fieldName + ']').val());
      // If it isn't undefined or its greater than 0
      if (!isNaN(currentVal) && currentVal > 0) {
        // Decrement one
        $('input[name=' + fieldName + ']').val(currentVal - 1);
      } else {
        // Otherwise put a 0 there
        $('input[name=' + fieldName + ']').val(0);
      }
    });
  });

