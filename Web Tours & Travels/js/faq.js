// <--=============== FAQ TOGGLE SECTION ===============-->

function faqToggle(element) {

    let faq = element.closest(".info");
    let txt = document.getElementById("faq-msg");

    if (faq.classList.contains("open")) {

        faq.classList.remove("open");
        faq.classList.add("close");
        txt.classList.remove("animate__animated", "animate__fadeIn");

    } else {

        faq.classList.add("open");
        faq.classList.remove("close");
        txt.classList.add("animate__animated", "animate__fadeIn");

    }
}
