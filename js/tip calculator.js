var TipCalculator = function () {

    var initModule = function () {
        document.getElementById("calculate").addEventListener("click", clickListener)
    };

    var clickListener = function () {
        var billAmount = document.getElementById("billInput").value;
        var serviceRate = document.getElementById("service").value;
        var peopleAmount = document.getElementById("peopleAmount").value;
        var isValid = validate(billAmount, serviceRate, peopleAmount);
    };

    function validate(billAmount, serviceRate, peopleAmount) {

        var fillRequieredMessage = "Please fill all fields";

        if (billAmount == "") {
            alert(fillRequieredMessage);
            return false;
        }

        if (parseFloat(billAmount) <= 0) {
            alert("Please enter positive bill");
            return false;
        }
        
        if (serviceRate == "") {
            alert("Please choose an option");
            return false;
        }

        if (peopleAmount=="") {
            alert(fillRequieredMessage);
            return false;
        }

        if (peopleAmount != parseInt(peopleAmount)) {
            alert("Please enter integer num of people");
            return false;
        }

        peopleAmount = parseInt(peopleAmount);
        if (peopleAmount <= 0) {
            alert("Please enter positive number of people")
            return false;
        }

        return true;
    }

    return { initModule: initModule };

}();