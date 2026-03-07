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
}

function closeSidebar() {
    let sidebarBg = document.getElementById("sidebarBg");
    // sidebarBg.style.display = "none";
    sidebarBg.style.transform = "translateX(-100%)";

    let sidebar = document.getElementById("sidebar");
    sidebar.style.transform = "translateX(-100%)";
}