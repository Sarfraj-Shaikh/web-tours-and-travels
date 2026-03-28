let waNum = 9307256102;

// <--=============== UPI ID COPY SECTION ===============-->
function copyToClipboard() {
    const upiId = document.getElementById('upiId').innerText;
    navigator.clipboard.writeText(upiId).then(() => {
        const icon = document.getElementById('copyIcon');
        icon.className = 'fa-solid fa-check text-green-500 text-xl';
        setTimeout(() => {
            icon.className = 'fa-regular fa-copy text-xl';
        }, 2000);
    });
}

// <--=============== QR CODE IMAGE DOWNLOADER SECTION ===============-->
async function downloadQR() {
    const qrImg = document.getElementById("qrImage");

    if (!qrImg || !qrImg.src) {
        alert("QR Image not found!");
        return;
    }

    try {
        const response = await fetch(qrImg.src);
        const blob = await response.blob();

        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "qr-code.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        window.URL.revokeObjectURL(url);

    } catch (error) {
        console.log(error);
        alert("Download failed! CORS issue ho sakta hai.");
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

    const senderName = document.getElementById("senderName").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const utr = document.getElementById("utr").value;
    const amount = document.getElementById("amount").value;
    const payDate = document.getElementById("payDate").value;
    const payTime = document.getElementById("payTime").value;
    let indNum = /[7-9]/g;

    const senderNameInput = document.getElementById("senderName");
    const emailInput = document.getElementById("email");
    const mobileInput = document.getElementById("mobile");
    const utrInput = document.getElementById("utr");
    const amountInput = document.getElementById("amount");
    const payDateInput = document.getElementById("payDate");
    const payTimeInput = document.getElementById("payTime");

    // <--=============== SENDER NAME VALIDATION ===============-->

    if (senderName.trim() === "") {

        showToast('error', 'Enter Sender Name');
        senderNameInput.style.border = "1px solid red";
        senderNameInput.style.outline = "1px solid red";

    } else {

        senderNameInput.style.border = "1px solid #DFE5EC";
        senderNameInput.style.outline = "2px solid #d7d7d7";

        // <--=============== EMAIL VALIDATION ===============-->

        if (email.trim() === "") {

            showToast('error', 'Enter Email ID');
            emailInput.style.border = "1px solid red";
            emailInput.style.outline = "1px solid red";

        } else {

            if (!email.includes('@')) {

                showToast('warning', 'Enter Valid Email');
                emailInput.style.border = "1px solid red";
                emailInput.style.outline = "1px solid red";

            } else {

                if (!email.match("gmail.com")) {

                    showToast('info', 'Only "gmail.com" Allowed');
                    emailInput.style.border = "1px solid red";
                    emailInput.style.outline = "1px solid red";

                } else {

                    emailInput.style.border = "1px solid #DFE5EC";
                    emailInput.style.outline = "2px solid #d7d7d7";

                    // <--=============== Mobile VALIDATION ===============-->

                    if (mobile.trim() === "") {

                        showToast('error', 'Enter Mobile Number');
                        mobileInput.style.border = "1px solid red";
                        mobileInput.style.outline = "1px solid red";

                    } else {

                        if (mobile.length < 10) {

                            showToast('error', 'Minimum 10 Digits Number Required');
                            mobileInput.style.border = "1px solid red";
                            mobileInput.style.outline = "1px solid red";

                        } else {

                            if (mobile.length > 10) {

                                showToast('error', 'Maximum 10 Digits Number Allowed');
                                mobileInput.style.border = "1px solid red";
                                mobileInput.style.outline = "1px solid red";

                            } else {

                                if (!mobile.charAt(0).match(indNum)) {

                                    showToast('error', 'Only Indian Number Allowed');
                                    mobileInput.style.border = "1px solid red";
                                    mobileInput.style.outline = "1px solid red";

                                } else {

                                    mobileInput.style.border = "1px solid #DFE5EC";
                                    mobileInput.style.outline = "2px solid #d7d7d7";

                                    // <--=============== UTR NUMBER VALIDATION ===============-->

                                    if (utr.trim() === "") {

                                        showToast('error', 'Enter UTR Number');
                                        utrInput.style.border = "1px solid red";
                                        utrInput.style.outline = "1px solid red";

                                    } else {

                                        utrInput.style.border = "1px solid #DFE5EC";
                                        utrInput.style.outline = "2px solid #d7d7d7";

                                        // <--=============== PAYED AMOUNT VALIDATION ===============-->

                                        if (amount.trim() === "") {

                                            showToast('info', 'Enter Paided Amount');
                                            amountInput.style.border = "1px solid red";
                                            amountInput.style.outline = "1px solid red";

                                        } else {

                                            amountInput.style.border = "1px solid #DFE5EC";
                                            amountInput.style.outline = "2px solid #d7d7d7";

                                            // <--=============== PAYMENT DATE VALIDATION ===============-->

                                            if (payDate.trim() === "") {

                                                showToast('error', 'Select Payment Date');
                                                payDateInput.style.border = "1px solid red";
                                                payDateInput.style.outline = "1px solid red";

                                            } else {

                                                payDateInput.style.border = "1px solid #DFE5EC";
                                                payDateInput.style.outline = "2px solid #d7d7d7";

                                                // <--=============== PAYMENT TIME VALIDATION ===============-->

                                                if (payTime.trim() === "") {

                                                    showToast('error', 'Select Payment Time');
                                                    payTimeInput.style.border = "1px solid red";
                                                    payTimeInput.style.outline = "1px solid red";

                                                } else {

                                                    payTimeInput.style.border = "1px solid #DFE5EC";
                                                    payTimeInput.style.outline = "2px solid #d7d7d7";
                                                    submitForm();

                                                }
                                            }
                                        }

                                    }

                                }

                            }

                        }
                    }

                }
            }

        }
    }

    return false;
}

function submitForm() {

    const senderName = document.getElementById("senderName").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const utr = document.getElementById("utr").value;
    const amount = document.getElementById("amount").value;
    const payDate = document.getElementById("payDate").value;
    const payTime = document.getElementById("payTime").value;

    function toAMPM(time) {
        let [h, m] = time.split(":");
        h = parseInt(h);

        let ampm = h >= 12 ? "PM" : "AM";
        h = h % 12 || 12;

        return `${h}:${m} ${ampm}`;
    }

    formattedPayTime = toAMPM(payTime);

    let userMob = mobile.toString().slice(-4);
    let userFirstName = senderName.charAt(0);

    let d = new Date();
    let year = d.getFullYear();
    let date = d.getDate();
    let mon = d.getMonth() + 1;
    let time = d.toLocaleTimeString();

    let refNumber = userFirstName + year + mon + date + userMob;

    let text =
        "𝗛𝗲𝗹𝗹𝗼 ⚝ 𝗪𝗲𝗯 𝗧𝗼𝘂𝗿𝘀 𝗮𝗻𝗱 𝗧𝗿𝗮𝘃𝗲𝗹𝘀,\n" +
        "⋆✦⋆ Online Payment Details​ ⋆✦⋆\n\n" +
        "I have made the online payment through the website. Kindly verify the payment and share the confirmation along with the receipt.\n\n" +
        "All payments details are mentioned below.\n" +
        "𝗦𝗲𝗻𝗱𝗲𝗿 (𝗣𝗮𝘆𝗲𝗿) 𝗡𝗮𝗺𝗲: " + senderName + "\n" +
        "𝗘𝗺𝗮𝗶𝗹 𝗜𝗗: " + email + "\n" +
        "𝗠𝗼𝗯𝗶𝗹𝗲 𝗡𝘂𝗺𝗯𝗲𝗿: " + mobile + "\n" +
        "𝗣𝗮𝘆𝗺𝗲𝗻𝘁 𝗗𝗮𝘁𝗲: " + payDate + "\n" +
        "𝗣𝗮𝘆𝗺𝗲𝗻𝘁 𝗧𝗶𝗺𝗲: " + formattedPayTime + "\n" +
        "𝗔𝗺𝗼𝘂𝗻𝘁: ₹" + amount + "\n" +
        "𝗧𝗿𝗮𝗻𝘀𝗮𝗰𝘁𝗶𝗼𝗻 𝗜𝗗 𝗼𝗿 𝗨𝗧𝗥 𝗡𝘂𝗺𝗯𝗲𝗿: " + utr + "\n" +
        "𝗣𝗮𝘆𝗺𝗲𝗻𝘁 𝗱𝗲𝘁𝗮𝗶𝗹𝘀 𝘄𝗲𝗿𝗲 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝗲𝗱 𝗼𝗻 " + date + "-" + mon + "-" + year + " 𝗮𝘁 " + time + "\n\n" +
        "Additional Details are mentioned below: \n" +
        "𝗣𝗮𝘆𝗺𝗲𝗻𝘁 𝗥𝗲𝗳𝗲𝗿𝗲𝗻𝗰𝗲 𝗡𝘂𝗺𝗯𝗲𝗿: " + refNumber + "\n\n" +
        "I confirm that I agree to the 𝐑𝐞𝐟𝐮𝐧𝐝 𝐏𝐨𝐥𝐢𝐜𝐲 & 𝐂𝐚𝐧𝐜𝐞𝐥𝐥𝐚𝐭𝐢𝐨𝐧 𝐏𝐨𝐥𝐢𝐜𝐲 and i have reviewed the 𝐭𝐫𝐚𝐯𝐞𝐥 𝐫𝐚𝐭𝐞𝐬. I also acknowledge that I have read and understood the 𝐓𝐞𝐫𝐦𝐬 & 𝐂𝐨𝐧𝐝𝐢𝐭𝐢𝐨𝐧𝐬, 𝐏𝐫𝐢𝐯𝐚𝐜𝐲 𝐏𝐨𝐥𝐢𝐜𝐲, 𝐁𝐨𝐨𝐤𝐢𝐧𝐠 𝐏𝐨𝐥𝐢𝐜𝐲 and have taken note of the 𝐃𝐢𝐬𝐜𝐥𝐚𝐢𝐦𝐞𝐫. \n\n" +
        "𝗧𝗵𝗮𝗻𝗸 𝗬𝗼𝘂,\n" + senderName;

    let whatsappURL = "https://wa.me/+91" + waNum + "?text=" + encodeURIComponent(text);
    window.open(whatsappURL, "_blank");

}