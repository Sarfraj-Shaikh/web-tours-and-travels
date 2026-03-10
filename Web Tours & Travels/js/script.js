// =============== LOADER ===============

window.addEventListener("load", function () {

    setTimeout(function () {

        document.getElementById("loader").style.display = "none";
        document.querySelector(".container").style.display = "block";

    }, 800);

});

// =============== SIDEBAR - DRAWER ===============

function openSidebar() {
    let sidebarBg = document.getElementById("sidebarBg");
    // sidebarBg.style.display = "block";
    sidebarBg.style.transform = "translateX(0)";

    let sidebar = document.getElementById("sidebar");
    sidebar.style.transform = "translateX(0)";
    sidebar.style.transition = "transform 0.3s ease-in";
}

function closeSidebar() {
    let sidebar = document.getElementById("sidebar");
    sidebar.style.transform = "translateX(-100%)";
    sidebar.style.transition = "transform 0.3s ease-in";

    let sidebarBg = document.getElementById("sidebarBg");
    // sidebarBg.style.display = "none";
    sidebarBg.style.transform = "translateX(-100%)";


}

// =============== FOOTER SECTION ===============

const d = new Date();
let year = d.getFullYear();
let company = "Web Tours and Travels";
let companyCredit = document.getElementById("com-credit-txt");

companyCredit.innerHTML = `${year} ${company}. All rights reserved.`;