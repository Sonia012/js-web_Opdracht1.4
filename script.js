
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

const button = document.querySelector("button");
console.log(button);
const day =  document.querySelector("#day");
console.log(day);
const month = document.querySelector("#month");
console.log(month);
const year = document.querySelector("#year");
console.log(year);

button.addEventListener(`click`, handleClickButton);

//Populate the day select box
for (let iDay = 2; iDay <= 31; iDay++) {
  const newOptionDay = document.createElement("option")
  newOptionDay.text = iDay;
  day.appendChild(newOptionDay);
}

//Populate the month select box
for (let iMonth = 2; iMonth <= 12; iMonth++) {
  const newOptionMonth = document.createElement("option");
  newOptionMonth.text = iMonth;
  month.appendChild(newOptionMonth)
}

//Populate the year select box
for (let iYear = 2017; iYear > 1920; iYear--) {
  const newOptionYear = document.createElement("option");
  newOptionYear.text = iYear;
  year.appendChild(newOptionYear)
}

//validation function to check whether the submitted dates make sense (= "bonus" exercise)
const validation = (bDay, bMonth, bYear) => {
  //if month is Feb, bDay should not be > 28. If bDay > 28, check if it's a leap year
  if ((bMonth == 2) && (bDay > 28)) {
    if ((bYear % 4 == 0 || bYear % 400 == 0) && (bDay > 29)) {
        alert(`You cannot have ${bDay} days in February ${bYear}`);
        return("Impossible")
    } else if ((bYear % 4 == 0 || bYear % 400 == 0) && (bDay == 29)) {
        return("ok")
    }
    alert(`You cannot have ${bDay} days in February ${bYear}`);
    return("Impossible")
    //check whether the submitted date is not 31st of April, June, September, or November, as these months only have 30 days
  } else if ((bMonth == 4 || bMonth == 6 || bMonth == 9 || bMonth == 11) && (bDay > 30)) {
    alert(`You cannot have ${bDay} days this month`);
    return("Impossible")
  }
}


//actual exercise: calculate the age via the eventListener (see line 24)
function handleClickButton() {
    //put the birth day, month, and year in a variable
    let bYear = year.value;
    let bMonth = month.value;
    let bDay = day.value;

    //define today's day, month, and year to compare with the birthdate and calculate the age
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();

    //check if the submitted date makes sense (see validation function defined above (line 47-64))
    validation(bDay, bMonth, bYear);

    //validation function returns "Impossible" if the dates don't make sense. In that case, the program stops.
    //the age is only calculated and displayed if the "validation" function didn't return the value "Impossible"
    if (validation(bDay, bMonth, bYear) != "Impossible") {
      let age = currentYear - bYear;

      if(bMonth > currentMonth) {
        age --
      } else if (bMonth == currentMonth && bDay > currentDay) {
          age --
      }
      alert(`You are ${age} years old`);
  }
}
