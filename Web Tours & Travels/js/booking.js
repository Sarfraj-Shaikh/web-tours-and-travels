
let travelRate = 23;
let currencySymbol = "₹";
let tripType = "round-trip";
let cabType = "AC";
let minTravelDistance = 15;
let maxTravelDistance = 500;
let waNum = 9307256102;

// <--=============== TRIP TYPE ===============-->

function oneWay() {
    let one = document.getElementById("one-way");
    let round = document.getElementById("round-trip");
    let waitBg = document.getElementById("waiting-bg");

    one.classList.add("active");
    round.classList.remove("active");
    tripType = "one-way";
    waitBg.style.display = "none";

    let distant = document.getElementById("kilo-meter").value;
    if (distant.trim() !== "") {
        priceEstimator();
    }
}

function roundTrip() {
    let one = document.getElementById("one-way");
    let round = document.getElementById("round-trip");
    let waitBg = document.getElementById("waiting-bg");

    one.classList.remove("active");
    round.classList.add("active");
    tripType = "round-trip";
    waitBg.style.display = "block";

    let distant = document.getElementById("kilo-meter").value;
    if (distant.trim() !== "") {
        priceEstimator();
    }
}

// <--=============== CAB AIR CONDITION TYPE ===============-->

function cabAc() {
    let ac = document.getElementById("cab-ac");
    let nonAc = document.getElementById("cab-non-ac");
    let acTxt = document.getElementById("ac-txt");

    ac.classList.add("active");
    nonAc.classList.remove("active");
    let cabType = "AC";
    acTxt.innerHTML = `
    <i class="fa-solid fa-snowflake"></i>
    AC Available
    `;
    cabType = "AC";
}

function cabNonAc() {
    let ac = document.getElementById("cab-ac");
    let nonAc = document.getElementById("cab-non-ac");
    let acTxt = document.getElementById("ac-txt");

    ac.classList.remove("active");
    nonAc.classList.add("active");
    let cabType = "Non-AC";
    acTxt.innerHTML = `
    <i class="fa-solid fa-temperature-low"></i>
    AC Not Available
    `;
    cabType = "Non-AC";
}

// <--=============== HIRE ONLY DRIVER ===============-->

let onlyDriver = "No";

function hireDriver() {

    let tickBox = document.getElementById("only-driver");

    if (tickBox.checked == true) {

        tickBox.checked = false;
        onlyDriver = "No";

    }
    else {

        tickBox.checked = true;
        onlyDriver = "Yes";

    }
}

// <--=============== OUTSTATION TRIP ===============-->

let outTrip = "No";

function outstationTrip() {

    let tickBox = document.getElementById("outstation-trip");

    if (tickBox.checked == true) {

        tickBox.checked = false;
        outTrip = "No";

    }
    else {

        tickBox.checked = true;
        outTrip = "Yes";

    }
}

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

function stepOne() {

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

                    // <--=============== PICKUP LOCATION VALIDATION ===============-->

                    let pickLocationInput = document.getElementById("pick-up");
                    let pickLocation = document.getElementById("pick-up").value;

                    if (pickLocation.trim() === "") {

                        showToast('error', 'Enter Pickup Address');
                        pickLocationInput.style.border = "1px solid red";
                        pickLocationInput.style.outline = "1px solid red";

                    } else {

                        pickLocationInput.style.border = "1px solid #A7ADB8";
                        pickLocationInput.style.outline = "2px solid #2563EA";

                        // <--=============== DROP LOCATION VALIDATION ===============-->

                        let dropLocationInput = document.getElementById("drop-add");
                        let dropLocation = document.getElementById("drop-add").value;

                        if (dropLocation.trim() === "") {

                            showToast('error', 'Enter Drop Address');
                            dropLocationInput.style.border = "1px solid red";
                            dropLocationInput.style.outline = "1px solid red";

                        } else {

                            dropLocationInput.style.border = "1px solid #A7ADB8";
                            dropLocationInput.style.outline = "2px solid #2563EA";

                            // <--=============== TRAVEL DATE VALIDATION ===============-->

                            let tDateInput = document.getElementById("travel-date");
                            let tDate = document.getElementById("travel-date").value;

                            if (tDate.trim() === "") {

                                showToast('error', 'Select Travel Date');
                                tDateInput.style.border = "1px solid red";
                                tDateInput.style.outline = "1px solid red";

                            } else {

                                tDateInput.style.border = "1px solid #A7ADB8";
                                tDateInput.style.outline = "2px solid #2563EA";

                                // <--=============== TRAVEL TIME VALIDATION ===============-->

                                let tTimeInput = document.getElementById("travel-time");
                                let tTime = document.getElementById("travel-time").value;

                                if (tTime.trim() === "") {

                                    showToast('error', 'Select Travel Time');
                                    tTimeInput.style.border = "1px solid red";
                                    tTimeInput.style.outline = "1px solid red";

                                } else {

                                    tTimeInput.style.border = "1px solid #A7ADB8";
                                    tTimeInput.style.outline = "2px solid #2563EA";

                                    let fNameBg = document.getElementById("fNameBg");
                                    let mNumberBg = document.getElementById("mNumBg");
                                    let emailBg = document.getElementById("emailBg");
                                    let pickLocationBg = document.getElementById("pickupBg");
                                    let dropLocationBg = document.getElementById("dropBg");
                                    let tDateBg = document.getElementById("tDateBg");
                                    let tTimeBg = document.getElementById("tTimeBg");
                                    let btnOne = document.getElementById("btnOne");

                                    let tripBg = document.getElementById("tripBg");
                                    let waitingBg = document.getElementById("waiting-bg");
                                    let cabBg = document.getElementById("cabBg");
                                    let driverBg = document.getElementById("driverBg");
                                    let outBg = document.getElementById("outstationBg");
                                    let btnTwo = document.getElementById("stepTwo");
                                    let priceBg = document.getElementById("priceBg");

                                    tripBg.style.display = "block";
                                    waitingBg.style.display = "block";
                                    cabBg.style.display = "block";
                                    driverBg.style.display = "block";
                                    outBg.style.display = "block";
                                    btnTwo.style.display = "flex";

                                    fNameBg.style.display = "none";
                                    mNumberBg.style.display = "none";
                                    emailBg.style.display = "none";
                                    pickLocationBg.style.display = "none";
                                    dropLocationBg.style.display = "none";
                                    tDateBg.style.display = "none";
                                    tTimeBg.style.display = "none";
                                    btnOne.style.display = "none";
                                    priceBg.style.display = "flex";

                                }

                            }
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
}

function preStepTwo() {

    let mNumberBg = document.getElementById("mNumBg");
    let emailBg = document.getElementById("emailBg");
    let pickLocationBg = document.getElementById("pickupBg");
    let dropLocationBg = document.getElementById("dropBg");
    let tDateBg = document.getElementById("tDateBg");
    let tTimeBg = document.getElementById("tTimeBg");
    let btnOne = document.getElementById("btnOne");
    let btnTwo = document.getElementById("stepTwo");

    let tripBg = document.getElementById("tripBg");
    let waitingBg = document.getElementById("waiting-bg");
    let cabBg = document.getElementById("cabBg");
    let driverBg = document.getElementById("driverBg");
    let outBg = document.getElementById("outstationBg");
    let priceBg = document.getElementById("priceBg");

    tripBg.style.display = "none";
    waitingBg.style.display = "none";
    cabBg.style.display = "none";
    driverBg.style.display = "none";
    outBg.style.display = "none";
    btnTwo.style.display = "none";
    priceBg.style.display = "none";

    fNameBg.style.display = "block";
    mNumberBg.style.display = "block";
    emailBg.style.display = "block";
    pickLocationBg.style.display = "block";
    dropLocationBg.style.display = "block";
    tDateBg.style.display = "block";
    tTimeBg.style.display = "block";
    btnOne.style.display = "block";
}

function nextStepTwo() {

    // <--=============== WAITING TIME VALIDATION ===============-->

    let userWaitInput = document.getElementById("waiting-time");
    let userWait = document.getElementById("waiting-time").value;

    if (tripType === "round-trip") {

        if (userWait === "") {

            showToast('error', 'Enter Waiting Duration');
            userWaitInput.style.border = "1px solid red";
            userWaitInput.style.outline = "1px solid red";

        } else {

            userWaitInput.style.border = "1px solid #A7ADB8";
            userWaitInput.style.outline = "2px solid #2563EA";

        }

    }

    // <--=============== PRICE ESTIMATOR VALIDATION ===============-->

    let kmInput = document.getElementById("kilo-meter");
    let km = document.getElementById("kilo-meter").value;
    kmInput.disabled = false;

    if (km.trim() === "") {

        showToast('error', 'Enter Approx. Distance (km)');
        kmInput.style.border = "1px solid red";
        kmInput.style.outline = "1px solid red";

    } else {

        kmInput.style.border = "1px solid #A7ADB8";
        kmInput.style.outline = "2px solid #2563EA";
        priceEstimator();

        let tripBg = document.getElementById("tripBg");
        let waitingBg = document.getElementById("waiting-bg");
        let cabBg = document.getElementById("cabBg");
        let driverBg = document.getElementById("driverBg");
        let outBg = document.getElementById("outstationBg");
        let btnTwo = document.getElementById("stepTwo");
        let priceBg = document.getElementById("priceBg");

        let vehicleBg = document.getElementById("vehicleBg");
        let remarkBg = document.getElementById("remarkBg");
        let consentBg = document.getElementById("consentBg");
        let bookBtn = document.getElementById("book-btn");

        tripBg.style.display = "none";
        waitingBg.style.display = "none";
        cabBg.style.display = "none";
        driverBg.style.display = "none";
        outBg.style.display = "none";
        btnTwo.style.display = "none";
        priceBg.style.display = "none";

        vehicleBg.style.display = "flex";
        remarkBg.style.display = "block";
        consentBg.style.display = "block";
        bookBtn.style.display = "block";

    }
}

// <--=============== PRICE ESTIMATOR CALCULATION ===============-->
function priceEstimator() {

    let distantInput = document.getElementById("kilo-meter");
    let distant = document.getElementById("kilo-meter").value;
    let amt = document.getElementById("amount");

    if (distant < minTravelDistance) {

        showToast('error', `Minimum ${minTravelDistance}Km Required`);
        distantInput.style.border = "1px solid red";
        distantInput.style.outline = "1px solid red";
        amt.innerHTML = `-`;

    } else if (distant > maxTravelDistance) {

        showToast('error', `Maximum ${maxTravelDistance}Km Allowed`);
        distantInput.style.border = "1px solid red";
        distantInput.style.outline = "1px solid red";
        amt.innerHTML = `-`;


    } else if (tripType === "one-way") {

        let totalAmt = distant * travelRate;
        amt.innerHTML = `${currencySymbol}${totalAmt}`;

        distantInput.style.border = "1px solid #A7ADB8";
        distantInput.style.outline = "2px solid #2563EA";

    } else {

        let totalAmt = (distant * travelRate) * 2;
        amt.innerHTML = `${currencySymbol}${totalAmt}`;

        distantInput.style.border = "1px solid #A7ADB8";
        distantInput.style.outline = "2px solid #2563EA";
    }

}

// <--=============== FORM SUBMIT ===============-->

function submitForm() {

    let userName = document.getElementById("full-name").value;
    let userNumber = document.getElementById("mob-num").value;
    let userEmail = document.getElementById("email-id").value;

    let userPickup = document.getElementById("pick-up").value;
    let userDrop = document.getElementById("drop-add").value;

    let userDate = document.getElementById("travel-date").value;
    let parts = userDate.split("-");

    userDate = parts[2] + "-" + parts[1] + "-" + parts[0];

    let userTime = document.getElementById("travel-time").value;

    function convertTime(time) {
        let [hours, minutes] = time.split(":");
        hours = parseInt(hours);

        let ampm = hours >= 12 ? "PM" : "AM";

        hours = hours % 12;
        hours = hours ? hours : 12;

        return hours + ":" + minutes + " " + ampm;
    }

    userTime = convertTime(userTime);

    let userDistance = document.getElementById("kilo-meter").value;
    let userAmt = document.getElementById("amount").innerHTML;
    let userRemark = document.getElementById("remark").value;
    let userWait = document.getElementById("waiting-time").value;

    let userTrip;
    let userDriver;
    let waitMsg;

    if (tripType === "one-way") {

        userTrip = "One Way";
        waitMsg = "No Waiting Time, Beacuse Its One Way Trip";

    } else {

        userTrip = "Round Trip";
        waitMsg = userWait;

    }

    if (onlyDriver === "No") {

        userDriver = "No";

    } else {

        userDriver = "Yes, Only Driver (I have my own car)";

    }

    if (userRemark === "") {

        userRemark = "I dont have any specific or additional requirement.";

    }

    let userMob = userNumber.toString().slice(-4);

    let d = new Date();
    let year = d.getFullYear();
    let date = d.getDate();
    let mon = d.getMonth() + 1;
    let time = d.toLocaleTimeString();
    let userFirstName = userName.charAt(0);
    let refNumber = userFirstName + year + mon + date + userMob;

    let text =
        "𝗛𝗲𝗹𝗹𝗼 ⚝ 𝗪𝗲𝗯 𝗧𝗼𝘂𝗿𝘀 𝗮𝗻𝗱 𝗧𝗿𝗮𝘃𝗲𝗹𝘀,\n" +
        "⋆✦⋆ Car Travel Booking Request​ ⋆✦⋆\n\n" +
        "I would like to use your car travel services. I have read all the rules, regulations, and guidelines mentioned on the booking page form, and I agree to them.\n\n" +
        "All my booking details are mentioned below. Please confirm the booking. I look forward to your response. \n\n" +
        "𝗡𝗮𝗺𝗲: " + userName + "\n" +
        "𝗠𝗼𝗯𝗶𝗹𝗲 𝗡𝘂𝗺𝗯𝗲𝗿: " + userNumber + "\n" +
        "𝗘𝗺𝗮𝗶𝗹 𝗜𝗗: " + userEmail + "\n" +
        "𝗥𝗲𝗳𝗲𝗿𝗲𝗻𝗰𝗲 𝗡𝘂𝗺𝗯𝗲𝗿: " + refNumber + "\n\n" +
        "Travel journey details are mentioned below: \n\n" +
        "𝗣𝗶𝗰𝗸𝘂𝗽 𝗟𝗼𝗰𝗮𝘁𝗶𝗼𝗻: " + userPickup + "\n" +
        "𝗗𝗿𝗼𝗽 𝗟𝗼𝗰𝗮𝘁𝗶𝗼𝗻: " + userDrop + "\n" +
        "𝗧𝗿𝗮𝘃𝗲𝗹 𝗗𝗮𝘁𝗲: " + userDate + "\n" +
        "𝗧𝗿𝗮𝘃𝗲𝗹 𝗧𝗶𝗺𝗲: " + userTime + "\n" +
        "𝗧𝗿𝗶𝗽 𝗧𝘆𝗽𝗲: " + userTrip + "\n" +
        "𝗢𝘂𝘁𝘀𝘁𝗮𝘁𝗶𝗼𝗻 𝗧𝗿𝗶𝗽: " + outTrip + "\n" +
        "𝗧𝗼𝗹𝗹 𝗧𝗮𝘅 𝗮𝗻𝗱 𝗣𝗮𝗿𝗸𝗶𝗻𝗴 𝗖𝗵𝗮𝗿𝗴𝗲𝘀: " + "Kindly wait for confirmation from 𝗪𝗲𝗯 𝗧𝗼𝘂𝗿𝘀 𝗮𝗻𝗱 𝗧𝗿𝗮𝘃𝗲𝗹𝘀" + "\n" +
        "𝗪𝗮𝗶𝘁𝗶𝗻𝗴 𝗧𝗶𝗺𝗲: " + waitMsg + "\n" +
        "𝗥𝗲𝗾𝘂𝗶𝗿𝗲𝗱 𝗢𝗻𝗹𝘆 𝗗𝗿𝗶𝘃𝗲𝗿: " + userDriver + "\n" +
        "𝗕𝗼𝗼𝗸𝗶𝗻𝗴 𝗥𝗲𝗾𝘂𝗲𝘀𝘁𝗲𝗱 𝗼𝗻 " + date + "-" + mon + "-" + year + " 𝗮𝘁 " + time + "\n\n" +
        "Vehicle details are mentioned below: \n\n" +
        "𝗩𝗲𝗵𝗶𝗰𝗹𝗲: " + "Maruti Suzuki Wagonr" + "\n" +
        "𝗖𝗮𝗯 𝗧𝘆𝗽𝗲: " + cabType + "\n" +
        "𝗠𝗼𝗱𝗲𝗹: " + "Tours H3" + "\n" +
        "𝗦𝗲𝗮𝘁𝘀: " + "4" + "\n\n" +
        "Price Estimator details are mentioned below: \n\n" +
        "𝗔𝗽𝗽𝗿𝗼𝘅. 𝗗𝗶𝘀𝘁𝗮𝗻𝗰𝗲: " + userDistance + " Km " + "\n" +
        "𝗘𝘀𝘁𝗶𝗺𝗮𝘁𝗲𝗱 𝗣𝗿𝗶𝗰𝗲: " + userAmt + "\n" +
        "𝗥𝗲𝗺𝗮𝗿𝗸𝘀: " + userRemark + "\n\n" +
        "I confirm that I agree to the 𝐁𝐨𝐨𝐤𝐢𝐧𝐠 𝐏𝐨𝐥𝐢𝐜𝐲 and have reviewed the 𝐭𝐫𝐚𝐯𝐞𝐥 𝐫𝐚𝐭𝐞𝐬. I also acknowledge that I have read and understood the 𝐓𝐞𝐫𝐦𝐬 & 𝐂𝐨𝐧𝐝𝐢𝐭𝐢𝐨𝐧𝐬, 𝐏𝐫𝐢𝐯𝐚𝐜𝐲 𝐏𝐨𝐥𝐢𝐜𝐲, 𝐑𝐞𝐟𝐮𝐧𝐝 & 𝐂𝐚𝐧𝐜𝐞𝐥𝐥𝐚𝐭𝐢𝐨𝐧 𝐏𝐨𝐥𝐢𝐜𝐲, and have taken note of the 𝐃𝐢𝐬𝐜𝐥𝐚𝐢𝐦𝐞𝐫. \n\n" +
        "𝗧𝗵𝗮𝗻𝗸 𝗬𝗼𝘂,\n" + userName;

    let whatsappURL = "https://wa.me/+91" + waNum + "?text=" + encodeURIComponent(text);
    window.open(whatsappURL, "_blank");
}