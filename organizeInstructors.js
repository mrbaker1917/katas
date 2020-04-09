const organizeInstructors = function (instructors) {
  let orgInstructors = {};
  //sort the array so duplicates are adjacent
  instructors.sort((a, b) => (a.course[0] > b.course[0]) ? 1 : -1);
  //keep track of current course
  let currCourse = instructors[0].course;
  //assign first key/prop of object
  orgInstructors[currCourse] = [instructors[0].name];
  //iterate through rest of array
  for (let i = 1; i < instructors.length; i++) {
    if (instructors[i].course === currCourse) {
      orgInstructors[currCourse].push(instructors[i].name);
    } else {
      currCourse = instructors[i].course;
      orgInstructors[currCourse] = [instructors[i].name];
    }
  };
  return orgInstructors;
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));
