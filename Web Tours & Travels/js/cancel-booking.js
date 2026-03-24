let currencySymbol = "₹";
let waNum = 9307256102;

// <--=============== CONSENT SECTION ===============-->

function giveConsent() {

    let tickBox = document.getElementById("consent-tickbox");
    let btn = document.getElementById("book-btn");

    if (tickBox.checked == true) {

        tickBox.checked = false;
        btn.disabled = true;

        btn.style.backgroundColor = "#F0F2F5";
        btn.style.color = "#858585";
        btn.style.cursor = "not-allowed";
    }
    else {

        tickBox.checked = true;
        btn.disabled = false;

        btn.style.backgroundColor = "#2563EA";
        btn.style.color = "#FFFFFF";
        btn.style.cursor = "pointer";
    }
}

// <--=============== TOAST MESSAGE ===============-->

function showToast(type, message) {

    const container = document.getElementById("toastContainer")

    const icons = {
        success: "fa-circle-check",
        error: "fa-circle-xmark",
        warning: "fa-triangle-exclamation",
        info: "fa-circle-info"
    }

    const toast = document.createElement("div")

    toast.className = "toast toast-" + type

    toast.innerHTML = `
    <i class="fa-solid ${icons[type]}"></i>
    <span>${message}</span>
    `

    container.appendChild(toast)

    setTimeout(() => {
        toast.remove()
    }, 4000)

}

// <--=============== FORM VALIDATION ===============-->

function formVal() {

    // <--=============== FULL NAME VALIDATION ===============-->

    let fNameInput = document.getElementById("full-name");
    let fName = document.getElementById("full-name").value;

    if (fName.trim() === "") {

        showToast('error', 'Enter Full Name');
        fNameInput.style.border = "1px solid red";
        fNameInput.style.outline = "1px solid red";

    } else {

        fNameInput.style.border = "1px solid #A7ADB8";
        fNameInput.style.outline = "2px solid #2563EA";

        // <--=============== MOBILE NUMBER VALIDATION ===============-->

        let mNumberInput = document.getElementById("mob-num");
        let mNumber = document.getElementById("mob-num").value;
        let indNum = /[7-9]/g;

        if (mNumber.trim() === "") {

            showToast('error', 'Enter Mobile Number');
            mNumberInput.style.border = "1px solid red";
            mNumberInput.style.outline = "1px solid red";

        } else if (mNumber.length < 10) {

            showToast('error', 'Minimum 10 Digits Number Required');
            mNumberInput.style.border = "1px solid red";
            mNumberInput.style.outline = "1px solid red";

        } else if (mNumber.length > 10) {

            showToast('error', 'Maximum 10 Digits Number Allowed');
            mNumberInput.style.border = "1px solid red";
            mNumberInput.style.outline = "1px solid red";

        } else if (mNumber.charAt(0).match(indNum)) {

            mNumberInput.style.border = "1px solid #A7ADB8";
            mNumberInput.style.outline = "2px solid #2563EA";

            // <--=============== EMAIL ID VALIDATION ===============-->

            let emailInput = document.getElementById("email-id");
            let email = document.getElementById("email-id").value;

            if (email.trim() === "") {

                showToast('error', 'Enter Email ID');
                emailInput.style.border = "1px solid red";
                emailInput.style.outline = "1px solid red";

            } else if (email.includes('@')) {

                if (email.match("gmail.com")) {

                    emailInput.style.border = "1px solid #A7ADB8";
                    emailInput.style.outline = "2px solid #2563EA";

                    // <--=============== REFERENCE NUMBER VALIDATION ===============-->

                    let refNumInput = document.getElementById("refNum");
                    let refNum = document.getElementById("refNum").value;
                    let remarkInput = document.getElementById("remark");
                    let remark = document.getElementById("remark").value;

                    if (refNum.trim() === "") {

                        showToast('error', 'Enter Reference Number');
                        refNumInput.style.border = "1px solid red";
                        refNumInput.style.outline = "1px solid red";

                    } else {

                        refNumInput.style.border = "1px solid #A7ADB8";
                        refNumInput.style.outline = "2px solid #2563EA";

                        // <--=============== REASON VALIDATION ===============-->

                        if (remark.trim() === "") {

                            showToast('error', 'Enter Your Reason');
                            remarkInput.style.border = "1px solid red";
                            remarkInput.style.outline = "1px solid red";

                        } else {

                            remarkInput.style.border = "1px solid #A7ADB8";
                            remarkInput.style.outline = "2px solid #2563EA";
                            submitForm();
                        }
                    }


                } else {

                    showToast('info', 'Only "gmail.com" Accepted!');
                    emailInput.style.border = "1px solid red";
                    emailInput.style.outline = "1px solid red";

                }

            } else {

                showToast('error', 'Enter Valid Email');
                emailInput.style.border = "1px solid red";
                emailInput.style.outline = "1px solid red";
            }

        } else {

            showToast('warning', 'Only Indian Number Allowed');
            mNumberInput.style.border = "1px solid red";
            mNumberInput.style.outline = "1px solid red";
        }
    }

    return false;

}


// <--=============== FORM SUBMIT ===============-->

function submitForm() {

    let userName = document.getElementById("full-name").value;
    let userNumber = document.getElementById("mob-num").value;
    let userEmail = document.getElementById("email-id").value;

    let userRemark = document.getElementById("remark").value;
    let refNum = document.getElementById("refNum").value;

    let userMob = userNumber.toString().slice(-4);

    let d = new Date();
    let year = d.getFullYear();
    let date = d.getDate();
    let mon = d.getMonth() + 1;
    let time = d.toLocaleTimeString();
    let userFirstName = userName.charAt(0);
    let refNumber = userFirstName + year + mon + date + userMob;

    let text =
        "𝗗𝗲𝗮𝗿 ⚝ 𝗪𝗲𝗯 𝗧𝗼𝘂𝗿𝘀 𝗮𝗻𝗱 𝗧𝗿𝗮𝘃𝗲𝗹𝘀,\n" +
        "⋆✦⋆ Booking Cancellation Request​ ⋆✦⋆\n\n" +
        "I want to cancel my travel. I have read all the rules, regulations, and guidelines mentioned on the cancel travel booking page form, and I agree to them.\n\n" +
        "All my details are mentioned below. Please confirm the cancellation of travel booking details \n\n" +
        "𝗡𝗮𝗺𝗲: " + userName + "\n" +
        "𝗠𝗼𝗯𝗶𝗹𝗲 𝗡𝘂𝗺𝗯𝗲𝗿: " + userNumber + "\n" +
        "𝗘𝗺𝗮𝗶𝗹 𝗜𝗗: " + userEmail + "\n" +
        "𝗡𝗲𝘄 𝗥𝗲𝗳𝗲𝗿𝗲𝗻𝗰𝗲 𝗡𝘂𝗺𝗯𝗲𝗿: " + refNumber + "\n\n" +
        "𝗧𝗿𝗮𝘃𝗲𝗹 𝗕𝗼𝗼𝗸𝗶𝗻𝗴 𝗖𝗮𝗻𝗰𝗲𝗹𝗹𝗮𝘁𝗶𝗼𝗻 𝗥𝗲𝗾𝘂𝗲𝘀𝘁 𝗼𝗻 " + date + "-" + mon + "-" + year + " 𝗮𝘁 " + time + "\n\n" +
        "Additional Details are mentioned below: \n" +
        "𝗢𝗹𝗱 𝗥𝗲𝗳𝗲𝗿𝗲𝗻𝗰𝗲 𝗡𝘂𝗺𝗯𝗲𝗿: " + refNum + "\n" +
        "𝗥𝗲𝗮𝘀𝗼𝗻: " + userRemark + "\n\n" +
        "I confirm that I agree to the 𝐁𝐨𝐨𝐤𝐢𝐧𝐠 𝐏𝐨𝐥𝐢𝐜𝐲 and have reviewed the 𝐭𝐫𝐚𝐯𝐞𝐥 𝐫𝐚𝐭𝐞𝐬. I also acknowledge that I have read and understood the 𝐓𝐞𝐫𝐦𝐬 & 𝐂𝐨𝐧𝐝𝐢𝐭𝐢𝐨𝐧𝐬, 𝐏𝐫𝐢𝐯𝐚𝐜𝐲 𝐏𝐨𝐥𝐢𝐜𝐲, 𝐑𝐞𝐟𝐮𝐧𝐝 & 𝐂𝐚𝐧𝐜𝐞𝐥𝐥𝐚𝐭𝐢𝐨𝐧 𝐏𝐨𝐥𝐢𝐜𝐲, and have taken note of the 𝐃𝐢𝐬𝐜𝐥𝐚𝐢𝐦𝐞𝐫. \n\n" +
        "𝗧𝗵𝗮𝗻𝗸 𝗬𝗼𝘂,\n" + userName;

    let whatsappURL = "https://wa.me/+91" + waNum + "?text=" + encodeURIComponent(text);
    window.open(whatsappURL, "_blank");
}