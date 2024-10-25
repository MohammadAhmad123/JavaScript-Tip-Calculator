
document.getElementById("calculateBtn").addEventListener("click", calculateTip);
document.getElementById("tipPercentage").addEventListener("change", toggleCustomTip);

function toggleCustomTip() {
  const customTipInput = document.getElementById("customTip");
  const tipPercentage = document.getElementById("tipPercentage").value;
  customTipInput.style.display = tipPercentage === "custom" ? "block" : "none";
}

function calculateTip() {
  const billAmount = parseFloat(document.getElementById("billAmount").value);
  let tipPercentage = document.getElementById("tipPercentage").value;
  

  if (tipPercentage === "custom") {
    tipPercentage = parseFloat(document.getElementById("customTip").value);
  } else {
    tipPercentage = parseFloat(tipPercentage);
  }


  if (isNaN(billAmount) || billAmount <= 0) {
    alert("Please enter a valid bill amount.");
    return;
  }
  if (isNaN(tipPercentage) || tipPercentage <= 0) {
    alert("Please enter a valid tip percentage.");
    return;
  }



  const tipAmount = (billAmount * tipPercentage) / 100;
  const totalAmount = billAmount + tipAmount;


  document.getElementById("tipAmount").textContent = `Tip: £${tipAmount.toFixed(2)}`;
  document.getElementById("totalAmount").textContent = `Total: £${totalAmount.toFixed(2)}`;
}
