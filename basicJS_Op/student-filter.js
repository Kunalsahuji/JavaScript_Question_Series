/*
Array of Objects
You have this array of objects:
let students = [
  { id: 1, name: "Aman", marks: 85 },
  { id: 2, name: "Riya", marks: 92 },
  { id: 3, name: "Kunal", marks: 78 }
];

Write a function that returns the names of students who scored more than 80 marks.
*/

{
    let students = [
        { id: 1, name: "Aman", marks: 85 },
        { id: 2, name: "Riya", marks: 92 },
        { id: 3, name: "Kunal", marks: 78 }
    ];
    let topStudents = students.filter(student => student.marks > 80).map(student => student.name)
    console.log(topStudents); // Output: ["Aman", "Riya"]
}

// with function
{
    let students = [
        { id: 1, name: "Aman", marks: 85 },
        { id: 2, name: "Riya", marks: 92 },
        { id: 3, name: "Kunal", marks: 78 }
    ];
    function getTopStudents(students) {
        let topStudents = [];
        for (let i = 0; i < students.length; i++) {
            if (students[i].marks > 80) {
                topStudents.push(students[i].name);
            }
        }
        return topStudents;
    }
    console.log(getTopStudents(students)); // Output: ["Aman", "Riya"]
}

// with for of loop
{
    let students = [
        { id: 1, name: "Aman", marks: 85 },
        { id: 2, name: "Riya", marks: 92 },
        { id: 3, name: "Kunal", marks: 78 }
    ];
    let topStudents = [];
    for (let student of students) {
        if (student.marks > 80) {
            topStudents.push(student.name);
        }
    }
    console.log(topStudents); // Output: ["Aman", "Riya"]
}
// with forEach loop
{

    let students = [
        { id: 1, name: "Aman", marks: 85 },
        { id: 2, name: "Riya", marks: 92 },
        { id: 3, name: "Kunal", marks: 78 }
    ];
    let topStudents = [];
    students.forEach(student => {
        if (student.marks > 80) {
            topStudents.push(student.name);
        }
    });
    console.log(topStudents); // Output: ["Aman", "Riya"]
}