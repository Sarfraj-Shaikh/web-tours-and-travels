// =============== LOADER ===============

window.addEventListener("load", function () {

    setTimeout(function () {

        document.getElementById("loader").style.display = "none";
        document.querySelector(".container").style.display = "block";

    }, 800);

});

// =============== SIDEBAR - DRAWER ===============

function openSidebar() {
    let sidebarBg = document.getElementById("sidebar-bg");
    let sidebar = document.getElementById("sidebar");
    sidebar.style.display = "block";
    sidebarBg.style.display = "block";
}

function closeSidebar() {
    let sidebarBg = document.getElementById("sidebar-bg");
    let sidebar = document.getElementById("sidebar");
    sidebar.style.display = "none";
    sidebarBg.style.display = "none";
}