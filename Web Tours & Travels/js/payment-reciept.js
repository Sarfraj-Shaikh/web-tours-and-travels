// <--=============== FORM VALIDATION ===============-->

function invoiceFormVal() {

    const receivedFrom = document.getElementById("receivedFrom").value;
    const receivedTo = document.getElementById("receivedTo").value;
    const refNumber = document.getElementById("refNumber").value;
    const customerEmail = document.getElementById("customerEmail").value;
    const customerNumber = document.getElementById("customerNumber").value;
    const payDate = document.getElementById("payDate").value;
    const payTime = document.getElementById("payTime").value;
    const utr = document.getElementById("utr").value;
    const paidBy = document.getElementById("paidBy").value;
    const amount = document.getElementById("amount").value;
    const status = document.getElementById("status").value;

    let indNum = /^[7-9]/;

    const receivedFromInput = document.getElementById("receivedFrom");
    const receivedToInput = document.getElementById("receivedTo");
    const refNumberInput = document.getElementById("refNumber");
    const customerEmailInput = document.getElementById("customerEmail");
    const customerNumberInput = document.getElementById("customerNumber");
    const payDateInput = document.getElementById("payDate");
    const payTimeInput = document.getElementById("payTime");
    const utrInput = document.getElementById("utr");
    const paidByInput = document.getElementById("paidBy");
    const amountInput = document.getElementById("amount");
    const statusInput = document.getElementById("status");

    // ===== RECEIVED FROM =====
    if (receivedFrom.trim() === "") {
        showToast('error', 'Enter Payment Received From');
        receivedFromInput.style.border = "1px solid red";
        receivedFromInput.style.outline = "1px solid red";
        return false;
    }
    receivedFromInput.style.border = "1px solid #DFE5EC";
    receivedFromInput.style.outline = "2px solid #d7d7d7";

    // ===== RECEIVED TO =====
    if (receivedTo.trim() === "") {
        showToast('error', 'Enter Payment Received To');
        receivedToInput.style.border = "1px solid red";
        receivedToInput.style.outline = "1px solid red";
        return false;
    }
    receivedToInput.style.border = "1px solid #DFE5EC";
    receivedToInput.style.outline = "2px solid #d7d7d7";

    // ===== REF NUMBER =====
    if (refNumber.trim() === "") {
        showToast('error', 'Enter Reference Number');
        refNumberInput.style.border = "1px solid red";
        refNumberInput.style.outline = "1px solid red";
        return false;
    }
    refNumberInput.style.border = "1px solid #DFE5EC";
    refNumberInput.style.outline = "2px solid #d7d7d7";

    // ===== EMAIL =====
    if (customerEmail.trim() === "") {
        showToast('error', 'Enter Email ID');
        customerEmailInput.style.border = "1px solid red";
        customerEmailInput.style.outline = "1px solid red";
        return false;
    }

    if (!customerEmail.includes('@')) {
        showToast('warning', 'Enter Valid Email');
        customerEmailInput.style.border = "1px solid red";
        customerEmailInput.style.outline = "1px solid red";
        return false;
    }

    if (!customerEmail.endsWith("@gmail.com")) {
        showToast('info', 'Only "gmail.com" Allowed');
        customerEmailInput.style.border = "1px solid red";
        customerEmailInput.style.outline = "1px solid red";
        return false;
    }

    customerEmailInput.style.border = "1px solid #DFE5EC";
    customerEmailInput.style.outline = "2px solid #d7d7d7";

    // ===== MOBILE =====
    if (customerNumber.trim() === "") {
        showToast('error', 'Enter Mobile Number');
        customerNumberInput.style.border = "1px solid red";
        customerNumberInput.style.outline = "1px solid red";
        return false;
    }

    if (customerNumber.length < 10) {
        showToast('error', 'Minimum 10 Digits Number Required');
        customerNumberInput.style.border = "1px solid red";
        customerNumberInput.style.outline = "1px solid red";
        return false;
    }

    if (customerNumber.length > 10) {
        showToast('error', 'Maximum 10 Digits Number Allowed');
        customerNumberInput.style.border = "1px solid red";
        customerNumberInput.style.outline = "1px solid red";
        return false;
    }

    if (!customerNumber.match(indNum)) {
        showToast('error', 'Only Indian Number Allowed');
        customerNumberInput.style.border = "1px solid red";
        customerNumberInput.style.outline = "1px solid red";
        return false;
    }

    customerNumberInput.style.border = "1px solid #DFE5EC";
    customerNumberInput.style.outline = "2px solid #d7d7d7";

    // ===== PAYMENT DATE =====
    if (payDate.trim() === "") {
        showToast('error', 'Select Payment Date');
        payDateInput.style.border = "1px solid red";
        payDateInput.style.outline = "1px solid red";
        return false;
    }
    payDateInput.style.border = "1px solid #DFE5EC";
    payDateInput.style.outline = "2px solid #d7d7d7";

    // ===== PAYMENT TIME =====
    if (payTime.trim() === "") {
        showToast('error', 'Select Payment Time');
        payTimeInput.style.border = "1px solid red";
        payTimeInput.style.outline = "1px solid red";
        return false;
    }
    payTimeInput.style.border = "1px solid #DFE5EC";
    payTimeInput.style.outline = "2px solid #d7d7d7";

    // ===== UTR =====
    if (utr.trim() === "") {
        showToast('error', 'Enter UTR Number');
        utrInput.style.border = "1px solid red";
        utrInput.style.outline = "1px solid red";
        return false;
    }
    utrInput.style.border = "1px solid #DFE5EC";
    utrInput.style.outline = "2px solid #d7d7d7";

    // ===== PAID BY =====
    if (paidBy.trim() === "") {
        showToast('error', 'Enter Payment Method');
        paidByInput.style.border = "1px solid red";
        paidByInput.style.outline = "1px solid red";
        return false;
    }
    paidByInput.style.border = "1px solid #DFE5EC";
    paidByInput.style.outline = "2px solid #d7d7d7";

    // ===== AMOUNT =====
    if (amount.trim() === "") {
        showToast('info', 'Enter Paid Amount');
        amountInput.style.border = "1px solid red";
        amountInput.style.outline = "1px solid red";
        return false;
    }
    amountInput.style.border = "1px solid #DFE5EC";
    amountInput.style.outline = "2px solid #d7d7d7";

    // ===== STATUS =====
    if (status.trim() === "") {
        showToast('error', 'Enter Payment Status');
        statusInput.style.border = "1px solid red";
        statusInput.style.outline = "1px solid red";
        return false;
    }
    statusInput.style.border = "1px solid #DFE5EC";
    statusInput.style.outline = "2px solid #d7d7d7";

    // ✅ ALL OK
    window.print();
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

