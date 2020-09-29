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
    }

    function showTip() {
        document.getElementById("tipDiv").innerHTML = "Your tip is " + tip + "$";
    }

    return { initModule: initModule };

}();
