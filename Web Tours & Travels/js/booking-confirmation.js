let tripType = "round-trip";
let cabType = "AC";

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

// <--=============== CAB TYPE SECTION ===============-->

function cabAc() {
    document.getElementById("cab-ac").classList.add("active");
    document.getElementById("cab-non-ac").classList.remove("active");

    document.getElementById("ac-txt").innerHTML = `
        <i class="fa-solid fa-snowflake"></i>
        AC Available
    `;

    cabType = "AC"; // <-- let hata diya
}

function cabNonAc() {
    document.getElementById("cab-ac").classList.remove("active");
    document.getElementById("cab-non-ac").classList.add("active");

    document.getElementById("ac-txt").innerHTML = `
        <i class="fa-solid fa-temperature-low"></i>
        AC Not Available
    `;

    cabType = "Non-AC"; // <-- let hata diya
}

// <--=============== TRIP TYPE SECTION ===============-->

function oneWay() {
    document.getElementById("one-way").classList.add("active");
    document.getElementById("round-trip").classList.remove("active");

    tripType = "one-way";
    document.getElementById("waiting-bg").style.display = "none";
}

function roundTrip() {
    document.getElementById("one-way").classList.remove("active");
    document.getElementById("round-trip").classList.add("active");

    tripType = "round-trip";
    document.getElementById("waiting-bg").style.display = "block";
}

// <--=============== FORM VALIDATION SECTION ===============-->

function validateFullForm() {

    function setError(input, msg) {
        showToast("error", msg);
        input.style.border = "1px solid red";
        input.style.outline = "1px solid red";
        input.focus();
        return false;
    }

    function setSuccess(input) {
        input.style.border = "1px solid #A7ADB8";
        input.style.outline = "2px solid #2563EA";
        return true;
    }

    let indNum = /^[6-9][0-9]{9}$/;

    // Full Name
    let fullNameInput = document.getElementById("full-name");
    if (fullNameInput.value.trim() === "") return setError(fullNameInput, "Enter Customer Name");
    setSuccess(fullNameInput);

    // Mobile
    let mobInput = document.getElementById("mob-num");
    if (mobInput.value.trim() === "") return setError(mobInput, "Enter Customer Mobile Number");
    if (!indNum.test(mobInput.value.trim())) return setError(mobInput, "Enter Valid Indian Mobile Number");
    setSuccess(mobInput);

    // Email
    let emailInput = document.getElementById("email-id");
    if (emailInput.value.trim() === "") return setError(emailInput, "Enter Customer Email ID");
    if (!emailInput.value.includes("@")) return setError(emailInput, "Enter Valid Email");
    setSuccess(emailInput);

    // Pickup
    let pickupInput = document.getElementById("pick-up");
    if (pickupInput.value.trim() === "") return setError(pickupInput, "Enter Pickup Address");
    setSuccess(pickupInput);

    // Drop
    let dropInput = document.getElementById("drop-add");
    if (dropInput.value.trim() === "") return setError(dropInput, "Enter Drop Address");
    setSuccess(dropInput);

    // Date
    let dateInput = document.getElementById("travel-date");
    if (dateInput.value.trim() === "") return setError(dateInput, "Select Travel Date");
    setSuccess(dateInput);

    // Time
    let timeInput = document.getElementById("travel-time");
    if (timeInput.value.trim() === "") return setError(timeInput, "Select Travel Time");
    setSuccess(timeInput);

    // Requested For
    let requestedForInput = document.getElementById("requestedFor");
    if (requestedForInput.value.trim() === "") return setError(requestedForInput, "Enter Requested For");
    setSuccess(requestedForInput);

    // Request Status
    let requestStatusInput = document.getElementById("requestStatus");
    if (requestStatusInput.value.trim() === "") return setError(requestStatusInput, "Enter Request Status");
    setSuccess(requestStatusInput);

    // Toll Tax
    let tollTaxInput = document.getElementById("tollTax");
    if (tollTaxInput.value.trim() === "") return setError(tollTaxInput, "Enter Toll Tax Charges");
    setSuccess(tollTaxInput);

    // Parking
    let parkingInput = document.getElementById("parkingCharges");
    if (parkingInput.value.trim() === "") return setError(parkingInput, "Enter Parking Charges");
    setSuccess(parkingInput);

    // Old Ref
    let oldRefInput = document.getElementById("oldRefNumber");
    if (oldRefInput.value.trim() === "") return setError(oldRefInput, "Enter Old Reference Number");
    setSuccess(oldRefInput);

    // New Ref
    let newRefInput = document.getElementById("newRefNumber");
    if (newRefInput.value.trim() === "") return setError(newRefInput, "Enter New Reference Number");
    setSuccess(newRefInput);

    // Driver Name
    let driverNameInput = document.getElementById("allotedDriver");
    if (driverNameInput.value.trim() === "") return setError(driverNameInput, "Enter Driver Name");
    setSuccess(driverNameInput);

    // Driver Number
    let driverNumInput = document.getElementById("driverNumber");
    if (driverNumInput.value.trim() === "") return setError(driverNumInput, "Enter Driver Mobile Number");
    if (!indNum.test(driverNumInput.value.trim())) return setError(driverNumInput, "Enter Valid Driver Mobile Number");
    setSuccess(driverNumInput);

    // Additional Charges
    let additionalChargesInput = document.getElementById("additionalCharges");
    if (additionalChargesInput.value.trim() === "") return setError(additionalChargesInput, "Enter Additional Charges");
    setSuccess(additionalChargesInput);

    // Payment Process
    let paymentProcessInput = document.getElementById("paymentProcess");
    if (paymentProcessInput.value.trim() === "") return setError(paymentProcessInput, "Enter Payment Process");
    setSuccess(paymentProcessInput);

    // Advance Payment
    let advanceInput = document.getElementById("advancePayment");
    if (advanceInput.value.trim() === "") return setError(advanceInput, "Enter Advance Payment");
    setSuccess(advanceInput);

    // Remaining Payment
    let remainingInput = document.getElementById("remainingPayment");
    if (remainingInput.value.trim() === "") return setError(remainingInput, "Enter Remaining Payment");
    setSuccess(remainingInput);

    // Total Amount
    let totalAmtInput = document.getElementById("totalAmount");
    if (totalAmtInput.value.trim() === "") return setError(totalAmtInput, "Enter Total Amount");
    setSuccess(totalAmtInput);

    // Payment Status
    let paymentStatusInput = document.getElementById("paymentStatus");
    if (paymentStatusInput.value.trim() === "") return setError(paymentStatusInput, "Enter Payment Status");
    setSuccess(paymentStatusInput);

    // Per Km
    let perKmInput = document.getElementById("perKmCharges");
    if (perKmInput.value.trim() === "") return setError(perKmInput, "Enter Per Km Charges");
    setSuccess(perKmInput);

    // Distance
    let totalDistanceInput = document.getElementById("totalDistance");
    if (totalDistanceInput.value.trim() === "") return setError(totalDistanceInput, "Enter Total Distance");
    setSuccess(totalDistanceInput);

    // Trip Status
    let tripStatusInput = document.getElementById("tripStatus");
    if (tripStatusInput.value.trim() === "") return setError(tripStatusInput, "Enter Trip Status");
    setSuccess(tripStatusInput);

    // Waiting Time if Round Trip
    let waitingInput = document.getElementById("waiting-time");
    if (tripType === "round-trip") {
        if (waitingInput.value.trim() === "") return setError(waitingInput, "Enter Waiting Time for Round Trip");
        setSuccess(waitingInput);
    }

    // Trip Type validation
    if (tripType !== "one-way" && tripType !== "round-trip") {
        showToast("error", "Select Trip Type");
        return false;
    }

    // Cab Type validation
    if (cabType !== "AC" && cabType !== "Non-AC") {
        showToast("error", "Select Cab Type");
        return false;
    }

    // Remark
    let remarkInput = document.getElementById("remark");
    if (remarkInput.value.trim() === "") return setError(remarkInput, "Enter Remarks/Reason");
    setSuccess(remarkInput);

    // Consent
    let consent = document.getElementById("consent-tickbox");
    if (!consent.checked) {
        showToast("warning", "Please accept consent");
        return false;
    }

    return true;
}

// ================= PRINT FUNCTION =================
function printFormData() {

    if (validateFullForm()) {
        window.print();
    }

}