function moniesCalc() {
    var tuitionArea = document.getElementById("tuitOut");
    var wagesArea = document.getElementById("wagesOut");
    var outputArea = document.getElementById("earnedOut");
    tuitionArea.innerHTML = "Tuition Paid = ";
    wagesArea.innerHTML = "Possible Wages = ";
    outputArea.innerHTML = "Money Earned = ";

    var loc = document.getElementById("state").value;
    var years = document.getElementById("years").value;

    var numberYears = parseInt(years);
    var wages = Math.floor(minW[loc]*52*40*numberYears/100);

    var tuit = tuition[document.getElementById("school").value]*numberYears;

    var moneyLost = wages + tuit;

    tuitionArea.innerHTML = "$" + tuit;
    wagesArea.innerHTML = "$" + wages;
    outputArea.innerHTML = "-$" + moneyLost;
};

window.onload = function() {
    for (x in minW) {
        document.getElementById("state").innerHTML += "<option value=\""+x+"\">"+x+"</option>\n";
    }
};

function pickSchool() {
    var list = {}
    var loc = document.getElementById("state").value;

    for (univ in schools[loc]) {
        list += "<option value=\""+schools[loc][univ]+"\">"+schools[loc][univ]+"</option>\n";
    }
    document.getElementById("school").innerHTML = list;
}

function schoolLogo() {
    var univ = document.getElementById("school").value;
    document.getElementById("fground").style.background = "url(\'CollegeLogos/" + logos[univ] + "\') no-repeat center";
    document.getElementById("fground").style.opacity = 0.1;
}


