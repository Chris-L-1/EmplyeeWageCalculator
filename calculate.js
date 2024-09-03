/*Function to calcuala the salary of the Manager and the cashier*/
function calculateSalary() {
    var managerHours = document.getElementById('manager-hours').value;
    var managerRate = document.getElementById('manager-rate').value;

    var cashierHours = document.getElementById('cashier-hours').value;
    var cashierRate = document.getElementById('cashier-rate').value;

    if (vadilationInput(managerHours,managerRate,cashierHours,cashierRate) == true) {
        var managerSalary = parseFloat(managerHours) * parseFloat(managerRate);
        var cashierSalary = parseFloat(cashierHours) * parseFloat(cashierRate);

        document.getElementById('manager-salary').innerText = 'Manager Salary: R' + managerSalary.toFixed(2);
        document.getElementById('cashier-salary').innerText = 'Cashier Salary: R' + cashierSalary.toFixed(2);
    }
}

function vadilationInput( managerHours , managerRate ,cashierHours , cashierRate ){
    if (managerHours == "") {
        alert("INPUT MANAGER WORK HOUR");
        return false;
    } else if (managerRate == "") {
        alert("INPUT MANAGER RATE");
        return false;
    } else  if (cashierHours == "") {
        alert("INPUT CASHIER WORK HOUR");
        return false;
    } else if (cashierRate == "") {
        alert("INPUT CASHIER RATE");
        return false;
     } else {
        return true;
    }
}