let talkingCalendar = function (date) {
  date = date.split('/');
  let year = date[0];
  let month = date[1];
  let day = date[2];
  if (day[0] === '0') {
    day = day[1];
  }

  switch (month) {
    case "01":
      month = "January";
      break;
    case "02":
      month = "February";
      break;
    case "03":
      month = "March";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "June";
      break;
    case "07":
      month = "July";
      break;
    case "08":
      month = "August";
      break;
    case "09":
      month = "September";
      break;
    case "10":
      month = "October";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "December";
      break;
  };

  if (day === '1' || day === '21' || day === '31') {
    return `${month} ${day}st, ${year}`;
  } else if (day === '2' || day === '22') {
    return `${month} ${day}nd, ${year}`;
  } else if (day === '3' || day === '23') {
    return `${month} ${day}rd, ${year}`;
  } else {
    return `${month} ${day}th, ${year}`;
  }
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/05/31"));
