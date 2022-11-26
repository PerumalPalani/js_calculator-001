//---display between dates--
var start = document.getElementById("start01Id");
var end = document.getElementById("end01Id");
var opt_day = document.getElementById("days01Id");
const option = {year:"numeric", month:"numeric",day:"numeric", weekday:"long"};

function betweenDate(start, end, opt){
    const curDate = start;
    const days = [];
    const dates = [];
    while(curDate <= end){
        dates.push(new Date(curDate).toLocaleString("en-US", option));
        if(curDate.getDay() == opt){
            days.push(new Date(curDate).toLocaleString("en-US", option))
        }
        curDate.setDate(curDate.getDate() + 1);
    }
    console.log(days);
    return dates;
}

function resultFun(){
    var A = new Date(start.value);
    var B = new Date(end.value);
    var C = opt_day.value;
    console.log(`The between dates are:${betweenDate(A,B,C)}`);
}