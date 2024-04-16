// // tablinks=document.getElementsByClassName("tab-links")
// // tabcontents=document.getElementsByClassName("tab-contents")
// // function opentab(tabname){
// //     for(tablink of tablinks){
// //         tablink.classl=List.remove("active-link")
// //     }
// //     for(tabcontent of tabcontents){
// //         tabcontent.classList.remove("active-tab")
// //     }
// // }
// tablinks = document.getElementsByClassName("tab-links");
// tabcontents = document.getElementsByClassName("tab-contents");

// function opentab(tabname) {
//     for (tablink of tablinks) {
//         tablink.classList.remove("active-link");
//     }
//     for (tabcontent of tabcontents) {
//         tabcontent.classList.remove("active-tab");
//     }
//     event.currentTarget.classList.add("active-link");
//     document.getElementById(tabname).classList.add("active-tab");
//     // event.currentTarget.classList.add("active-link");
// }
// sidemenu=document.getElementById("sidemenu")
// function openmenu(){
//     sidemenu.style.right="0"

// }
// function closemenu(){
//     sidemenu.style.right="-200"
    
// }
// JavaScript file: portfolio.js

// Define function to open side menu
function openmenu() {
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "0";
}

// Define function to close side menu
function closemenu() {
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-200px";
}

// Define function to switch between tabs
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// JavaScript code for mobile view
var menuOpen = false;
var sideMenu = document.getElementById("sidemenu");
var barsIcon = document.querySelector(".fa-bars");
var closeIcon = document.querySelector(".fa-hexagon-xmark");

barsIcon.addEventListener("click", function() {
    if (!menuOpen) {
        sideMenu.style.right = "0";
        menuOpen = true;
    } else {
        sideMenu.style.right = "-200px";
        menuOpen = false;
    }
});

closeIcon.addEventListener("click", function() {
    sideMenu.style.right = "-200px";
    menuOpen = false;
});
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


//   const scriptURL = 'https://script.google.com/macros/s/AKfycbzI4XKFUyLrp7I5FxZ0QhB7bgI78eXvR0322Fu3JqvUTj2vH6xaZUtTd4X7kp8teITP/exec'
//   const form = document.forms['submit-to-google-sheet']

//   form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//       .then(response => console.log('Success!', response))
//       .catch(error => console.error('Error!', error.message))
//   })
// Google Apps Script code
function doPost(e) {
    var sheet = SpreadsheetApp.openById('AKfycbwTRYWNVA3gXJuf1emb-GsPyccgGS3Sewu92E8b70JgE-DWf_JcAAlwqgENxg9zjOnG').getActiveSheet();
    var newRow = sheet.getLastRow() + 1;
    var rowData = [];
    rowData.push(new Date());
    rowData.push(e.parameter.Name);
    rowData.push(e.parameter.Email);
    rowData.push(e.parameter.Message);
    sheet.getRange(newRow, 1, 1, rowData.length).setValues([rowData]);
    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
  }
  