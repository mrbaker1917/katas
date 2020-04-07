const instructorWithLongestName = function (instructors) {
  let longestName = 0;
  let longestNameInstructor;
  for (const i of instructors) {
    if (i.name.length > longestName) {
      longestName = i.name.length;
      longestNameInstructor = i;
    }
  }
  return longestNameInstructor;
};

console.log(instructorWithLongestName([
  { name: "Samuel Johnson", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donaldalia", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));
