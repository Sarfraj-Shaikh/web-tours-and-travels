// <--=============== GET IN TOUCH SECTION ===============-->

let phone = 9307256102;
let email = "ctces29@gmail.com";

function clickLocation() {
    window.open("https://maps.app.goo.gl/LwP5UH9NxcmhNbtM8", "_blank");
}

function clickPhone() {
    window.location.href = "tel:" + phone;
}

function clickEmail() {
    window.location.href = "mailto:" + email;
}

// <--=============== FORM VALIDATION SECTION ===============-->


function formValidator() {

        let fullNameInput = document.getElementById("full-name");
    let mobileNumberInput = document.getElementById("mobile-number");
            let emailIdInput = document.getElementById("email-id");
    let userMessageInput = document.getElementById("user-message");
    let subjectInput = document.getElementById("subject");

    let fullName = document.getElementById("full-name").value;
    let mobileNumber = document.getElementById("mobile-number").value;
    let emailId = document.getElementById("email-id").value;
    let subject = document.getElementById("subject").value;
    let userMessage = document.getElementById("user-message").value;


    // <--=============== FULL NAME VALIDATION ===============-->

    if (fullName.trim() === "") {

        showToast('error', 'Enter Full Name');
        fullNameInput.style.border = "1px solid red";
        fullNameInput.style.outline = "1px solid red";

    } else {

        fullNameInput.style.border = "1px solid #DFE5EC";
        fullNameInput.style.outline = "2px solid #d7d7d7";

        // <--=============== MOBILE NUMBER VALIDATION ===============-->

        let indNum = /[7-9]/g;

        if (mobileNumber.trim() === "") {

            showToast('error', 'Enter Mobile Number');
            mobileNumberInput.style.border = "1px solid red";
            mobileNumberInput.style.outline = "1px solid red";

        } else {

            if (mobileNumber.length < 10) {

                showToast('error', 'Enter Minimum 10 Digit Number');
                mobileNumberInput.style.border = "1px solid red";
                mobileNumberInput.style.outline = "1px solid red";

            } else {

                if (mobileNumber.length > 10) {

                    showToast('error', 'Maximum 10 Digit Number Allowed');
                    mobileNumberInput.style.border = "1px solid red";
                    mobileNumberInput.style.outline = "1px solid red";

                } else {

                    if (mobileNumber.charAt(0).match(indNum)) {

                        mobileNumberInput.style.border = "1px solid #DFE5EC";
                        mobileNumberInput.style.outline = "2px solid #d7d7d7";

                        // <--=============== EMAIL ID VALIDATION ===============-->

                        if (emailId.trim() === "") {

                            showToast('error', 'Enter Email ID');
                            emailIdInput.style.border = "1px solid red";
                            emailIdInput.style.outline = "1px solid red";
                        } else {

                            if (emailId.includes('@')) {

                                if (emailId.match("gmail.com")) {

                                    emailIdInput.style.border = "1px solid #DFE5EC";
                                    emailIdInput.style.outline = "2px solid #d7d7d7";

                                    // <--=============== SUBJECT VALIDATION ===============-->

                                    if (subject.trim() === "") {

                                        showToast('error', 'Enter Subject');
                                        subjectInput.style.border = "1px solid red";
                                        subjectInput.style.outline = "1px solid red";

                                    } else {

                                        subjectInput.style.border = "1px solid #DFE5EC";
                                        subjectInput.style.outline = "2px solid #d7d7d7";

                                        // <--=============== MESSAGE VALIDATION ===============-->

                                        if (userMessage.trim() === "") {

                                            showToast('error', 'Enter Your Message');
                                            userMessageInput.style.border = "1px solid red";
                                            userMessageInput.style.outline = "1px solid red";

                                        } else {

                                            userMessageInput.style.border = "1px solid #DFE5EC";
                                            userMessageInput.style.outline = "2px solid #d7d7d7";
                                            submitForm();

                                        }

                                    }


                                } else {
                                    showToast('info', 'Only "gmail.com" Accepted!');
                                    emailIdInput.style.border = "1px solid red";
                                    emailIdInput.style.outline = "1px solid red";
                                }

                            } else {

                                showToast('warning', 'Enter Valid Email');
                                emailIdInput.style.border = "1px solid red";
                                emailIdInput.style.outline = "1px solid red";
                            }
                        }


                    } else {

                        showToast('warning', 'Only Indian Number Allowed');
                        mobileNumberInput.style.border = "1px solid red";
                        mobileNumberInput.style.outline = "1px solid red";

                    }

                }

            }

        }

    }

    return false;

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

// <--=============== SUBMIT FORM AND SEND EMAIL ===============-->

function submitForm() {

    let fullName = document.getElementById("full-name").value;
    let mobileNumber = document.getElementById("mobile-number").value;
    let emailId = document.getElementById("email-id").value;
    let subject = document.getElementById("subject").value;
    let userMessage = document.getElementById("user-message").value;

    let emailMessage =
        "𝗛𝗲𝗹𝗹𝗼 👋🏻 𝗪𝗲𝗯 𝗧𝗼𝘂𝗿𝘀 𝗮𝗻𝗱 𝗧𝗿𝗮𝘃𝗲𝗹𝘀, \n" +
        "I hope you are doing well. \n\n" +
        "𝗜 𝗮𝗺 𝘄𝗿𝗶𝘁𝗶𝗻𝗴 𝘁𝗼 𝘆𝗼𝘂 𝗿𝗲𝗴𝗮𝗿𝗱𝗶𝗻𝗴: " + subject + "\n\n" +
        "𝗞𝗶𝗻𝗱𝗹𝘆 𝗳𝗶𝗻𝗱 𝗺𝘆 𝗰𝗼𝗻𝘁𝗮𝗰𝘁 𝗱𝗲𝘁𝗮𝗶𝗹𝘀 𝗯𝗲𝗹𝗼𝘄 𝗳𝗼𝗿 𝘆𝗼𝘂𝗿 𝗿𝗲𝗳𝗲𝗿𝗲𝗻𝗰𝗲: \n\n" +
        "𝗡𝗮𝗺𝗲: " + fullName + "\n" +
        "𝗠𝗼𝗯𝗶𝗹𝗲 𝗡𝘂𝗺𝗯𝗲𝗿: " + mobileNumber + "\n" +
        "𝗘𝗺𝗮𝗶𝗹 𝗜𝗗: " + emailId + "\n\n" +
        "I request you to review my query and provide the necessary assistance at the earliest. \n\n" +
        "𝗗𝗲𝘁𝗮𝗶𝗹𝘀 𝗼𝗳 𝗺𝘆 𝗶𝗻𝗾𝘂𝗶𝗿𝘆 𝗮𝗿𝗲 𝗮𝘀 𝗳𝗼𝗹𝗹𝗼𝘄𝘀: \n" + userMessage + "\n\n" +
        "Thank you for your time. I look forward to your response. \n\n" +
        "𝗕𝗲𝘀𝘁 𝗿𝗲𝗴𝗮𝗿𝗱𝘀, \n" + fullName + "\n\n";

    let link = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailMessage)}`;

    window.location.href = link;
}
