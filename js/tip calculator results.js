var TipCalculatorResults = function () {
    
    var html = "<div id='tipDiv'></div>"
        +"<p></p>"
        + "<button id='clear'>CLEAR</button>";

    var container;
    var tip;

    var initModule = function ($container, params) {
        container = $container;
        tip = params.tip;
        document.getElementById("results").innerHTML = html;
        showTip();
        document.getElementById("clear").addEventListener("click", clearAll);
    }

    function clearAll(){
        document.getElementById("billInput").value = "";
        document.getElementById("service").value = "";
        document.getElementById("peopleAmount").value = "";
        document.getElementById("results").innerHTML = "";
    }

    function showTip() {
        document.getElementById("tipDiv").innerHTML = "Your tip is " + tip.toFixed(2) + "$";
    }

    return { initModule: initModule };

}();
