// Prompt the user to enter benefits and basic salary, converting the input to floating-point numbers
const benefits = parseFloat(prompt("Enter Benefits:"));
const basicSalary = parseFloat(prompt("Enter Basic Salary:"));

// Tax rates based on income levels
const TAX_RATES = [
  { limit: 24000, rate: 10 },
  { limit: 32333, rate: 25 },
  { limit: 500000, rate: 30 },
  { limit: 800000, rate: 32.5 },
  { limit: Infinity, rate: 35 },
];

// NHIF rates based on gross salary
const NHIF_RATES = [
  { limit: 5999, deduction: 150 },
  { limit: 7999, deduction: 300 },
  { limit: 11999, deduction: 400 },
  { limit: 14999, deduction: 500 },
  { limit: 19999, deduction: 600 },
  { limit: 24999, deduction: 750 },
  { limit: 29999, deduction: 850 },
  { limit: 34999, deduction: 900 },
  { limit: 39999, deduction: 1000 },
  { limit: 44999, deduction: 1100 },
  { limit: 49999, deduction: 1200 },
  { limit: 59999, deduction: 1300 },
  { limit: 69999, deduction: 1400 },
  { limit: 79999, deduction: 1500 },
  { limit: 89999, deduction: 1600 },
  { limit: Infinity, deduction: 1700 },
];

const NSSF_RATE = 6; // NSSF deduction rate
const HOUSING_LEVY_RATE = 1.5; // Housing levy deduction rate

// Calculate gross salary by adding basic salary and benefits
const grossSalary = basicSalary + benefits;

// Calculate PAYE (Tax)
let taxableIncome = grossSalary - 24000; // Initial tax relief
let tax = 0;
TAX_RATES.forEach(({ limit, rate }) => {
  if (taxableIncome <= 0) return;
  const taxableAmount = Math.min(taxableIncome, limit - 24000); // Consider tax relief
  tax += taxableAmount * (rate / 100);
  taxableIncome -= taxableAmount;
});

// Calculate NHIF deductions based on gross salary
let nhifDeductions = 0;
NHIF_RATES.some(({ limit, deduction }) => {
  if (grossSalary <= limit) {
    nhifDeductions = deduction;
    return true;
  }
  return false;
});

// Calculate NSSF deductions based on basic salary
const nssfDeductions = Math.min(basicSalary * (NSSF_RATE / 100), 200);

// Calculate housing levy deductions
const housingLevy = grossSalary * (HOUSING_LEVY_RATE / 100);

// Calculate net salary by subtracting taxes and deductions from gross salary
const netSalary =
  grossSalary - tax - nhifDeductions - nssfDeductions - housingLevy;

// Output the net salary
console.log("Net Salary: " + netSalary.toFixed(2)); // Fixed to 2 decimal places
