// listening for submit in form

document
  .getElementsByClassName("loan-form")
  .addEventListener("submit", function (e) {
    // hide the results
    document.getElementById("results").style.display = "none";

    //Loading img
    document.getElementById("loading-img").style.display = "block";

    setTimeout(calculateResults, 2000);
    e.preventDefault();
  });

function calculateResults() {
  // UI variables
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");

  const monthlyPayments = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principalAmount = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principalAmount * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayments.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (
      monthly * calculatedPayments -
      principalAmount
    ).toFixed(2);

    document.getElementById("results").style.display = "block";

    document.getElementById("loading-img").style.display = "none";
  } else {
    showError("Please Check ur numbers");
  }
}

function showError(error) {
  document.getElementById("results").style.display = "none";

  document.getElementById("loading-img").style.display = "none";
  // creating an div with the error popup
  const errorDiv = document.createElement("div");

  // getting the elements for the error box to be inserted
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  // adding BS class to the Div
  errorDiv.className = "alert alert-danger";

  // adding the text to the div container
  errorDiv.appendChild(document.createTextNode(error));

  // adding it in the card but before the heading
  card.insertBefore(errorDiv, heading);

  setTimeout(clearError, 3000);

  function clearError() {
    document.querySelector(".alert").remove();
  }
}
