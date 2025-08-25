resultLeapYearElmt = document.querySelector("#resultLeapYear")
yearInputElmt = document.querySelector('#year')
displayHideElmt = document.querySelector('..coustomDisplayHide')


function checkLeapYear(){
    resultLeapYearElmt.style.display ="block"
    const getYear = parseInt(yearInputElmt.value);

     if ((getYear % 4 == 0 && getYear % 100 != 0) || (getYear % 400 == 0)){
        resultLeapYearElmt.textContent = getYear + "year is leap year"
     }
     else{
        resultLeapYearElmt.textContent = getYear + "year is not leap year"
     }
 }