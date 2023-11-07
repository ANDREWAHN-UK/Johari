

//the below code creates an array of images 
//then randomly selects one of them to be 
//the backround of the hero section, on the homepage

var hero = document.getElementById("hero"),
images =
 ["assets/images/deer-one.jpg",
"assets/images/deer.jpg",
"assets/images/deerInGrass.jpg",
"assets/images/giraffe-one.jpg",
"assets/images/giraffes.jpg",
"assets/images/house6.jpg",
"assets/images/secretaryBird.jpg",
"assets/images/sunset.jpg",
"assets/images/wildebeeste.jpg",
"assets/images/zebra.jpg"
]

var imgCount = images.length

var number = Math.floor(Math.random() * imgCount);


window.onload = function(){

    hero.style.backgroundImage = "url("+images[number]+")" 
}


//the below targets the header

// define variables
var header = document.getElementById('mainHeader');
var scrolled = false;

// listen for scroll events
window.onscroll = function() {
  // check scroll position
  if (window.pageYOffset > 50) {
    if (!scrolled) {
      header.classList.add('scrolled');
      scrolled = true;
    }
  }
  else {
    if (scrolled) {
      header.classList.remove('scrolled');
      scrolled = false;   
    }
  }
};

//the below targets the downpointer on the hero section, if using the commented out version

function scrollFunction() {
    const element = document.getElementById("jambo");
    element.scrollIntoView({ behavior: 'smooth'});
  };

//contact page

function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "andrew.ahn@hotmail.co.uk",
    Password : "2FD50335A4CE4C7316653A7667C49C36A72A",
    To : 'andrew.ahn@hotmail.co.uk',
    To : 'ahnclan@gmail.com',
    From : 'andrew.ahn@hotmail.co.uk',
    ReplyFrom: document.getElementById("email").value,
    Subject : "New message from Johari contact form",
    Body : "From: " + document.getElementById("name").value
    + "<br> Email: " + document.getElementById("email").value
    + "<br> Message:" + document.getElementById("message").value
}).then(
  message => alert("Thankyou for your message")
);
}
