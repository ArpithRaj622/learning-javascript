const salary = 30000;
const creditScore = 900;
const hasExistingLoan = false;

if (salary >= 30000 && creditScore >= 700 && !hasExistingLoan) {
    console.log("Loan Approved");
} else {
    console.log("Loan Rejected");
}