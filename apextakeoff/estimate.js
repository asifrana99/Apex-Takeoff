const sqft = document.getElementById("sqft");
const sqftValue = document.getElementById("sqftValue");
const projectType = document.getElementById("projectType");
const totalCost = document.getElementById("totalCost");
const rateDisplay = document.getElementById("rate");
const calculateBtn = document.getElementById("calculateBtn");
const complexityButtons = document.querySelectorAll(".complexity-btn");
const timelineRadios = document.querySelectorAll("input[name='timeline']");

let baseRate = 0.45; // default Residential
let multiplier = 1;
let timelineFactor = 1;

sqft.addEventListener("input", () => {
  sqftValue.textContent = sqft.value;
});

projectType.addEventListener("change", () => {
  baseRate = projectType.value === "residential" ? 0.45 : 0.75;
  rateDisplay.textContent = `$${baseRate.toFixed(2)}/sq ft`;
});

complexityButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    complexityButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    multiplier = parseFloat(btn.dataset.multiplier);
  });
});

timelineRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    timelineFactor = parseFloat(radio.value);
  });
});

calculateBtn.addEventListener("click", () => {
  const area = parseFloat(sqft.value);
  const cost = area * baseRate * multiplier * timelineFactor;
  totalCost.textContent = `$${cost.toFixed(2)}`;
});

