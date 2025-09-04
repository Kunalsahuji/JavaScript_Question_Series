/*
find the student with the highest marks and print their name.
let students = [
  { id: 1, name: "Aman", marks: 85 },
  { id: 2, name: "Riya", marks: 92 },
  { id: 3, name: "Kunal", marks: 78 }
];
*/
{
    let students = [
        { id: 1, name: "Aman", marks: 85 },
        { id: 2, name: "Riya", marks: 92 },
        { id: 3, name: "Kunal", marks: 98 }
    ];
    let topStudent = students.reduce((max, student) => max.marks > student.marks ? max : student);
    console.log(`Student with the highest marks is: ${topStudent.name}`);
}
// with for loop
{
    let students = [
        { id: 1, name: "Aman", marks: 85 },
        { id: 2, name: "Riya", marks: 92 },
        { id: 3, name: "Kunal", marks: 98 }
    ];
    let highestMarks = 0;
    let topStudent = "";

    for (let i = 0; i < students.length; i++) {
        if (students[i].marks > highestMarks) {
            highestMarks = students[i].marks;
            topStudent = students[i].name
        }
    }

    console.log(`Student with the highest marks is: ${topStudent}`);
}
// with for of loop
{
    let students = [
        { id: 1, name: "Aman", marks: 85 },
        { id: 2, name: "Riya", marks: 92 },
        { id: 3, name: "Kunal", marks: 98 }
    ];
    let highestMarks = 0;
    let topStudent = "";
    for (let student of students) {
        if (student.marks > highestMarks) {
            highestMarks = student.marks;
            topStudent = student.name;
        }
    }
    console.log(`Student with the highest marks is: ${topStudent}`);
}
// with forEach loop
{
    let students = [    
        { id: 1, name: "Aman", marks: 85 },
        { id: 2, name: "Riya", marks: 92 },
        { id: 3, name: "Kunal", marks: 98 }
    ];
    let highestMarks = 0;
    let topStudent = "";
    students.forEach(student => {
        if (student.marks > highestMarks) {
            highestMarks = student.marks;
            topStudent = student.name;
        }
    });
    console.log(`Student with the highest marks is: ${topStudent}`);
}