/*
Find the average marks of all students in the array:

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
        { id: 3, name: "Kunal", marks: 78 }
    ];
    let totalMarks = 0
    for (let i = 0; i < students.length; i++) {
        totalMarks += students[i].marks
    }
    console.log(`Average marks of all students is: ${totalMarks / students.length}`);
}
// Using reduce method
{
    let students = [
        { id: 1, name: "Aman", marks: 85 },
        { id: 2, name: "Riya", marks: 92 },
        { id: 3, name: "Kunal", marks: 78 }
    ];
    console.log(`Average marks of all students is: ${students.reduce((acc, student) => acc + student.marks, 0) / students.length}`);
}

// Using for..of loop
{
    let students = [
        { id: 1, name: "Aman", marks: 85 },
        { id: 2, name: "Riya", marks: 92 },
        { id: 3, name: "Kunal", marks: 78 }
    ];
    let totalMarks = 0;
    for (let student of students) {
        totalMarks += student.marks;
    }
    console.log(`Average marks of all students is: ${totalMarks / students.length}`);
}
// Using forEach method
{
    let students = [
        { id: 1, name: "Aman", marks: 85 },
        { id: 2, name: "Riya", marks: 92 },
        { id: 3, name: "Kunal", marks: 78 }
    ];
    let totalMarks = 0;
    students.forEach(student => {
        totalMarks += student.marks;
    });
    console.log(`Average marks of all students is: ${totalMarks / students.length}`);
}
// Using map method
{
    let students = [
        { id: 1, name: "Aman", marks: 85 },
        { id: 2, name: "Riya", marks: 92 },
        { id: 3, name: "Kunal", marks: 78 }
    ];
    let totalMarks = students.map(student => student.marks).reduce((acc, marks) => acc + marks, 0);
    console.log(`Average marks of all students is: ${totalMarks / students.length}`);
}

// Using while loop
{
    let students = [
        { id: 1, name: "Aman", marks: 85 },
        { id: 2, name: "Riya", marks: 92 },
        { id: 3, name: "Kunal", marks: 78 }
    ];
    let totalMarks = 0;
    let i = 0;
    while (i < students.length) {
        totalMarks += students[i].marks;
        i++;
    }
    console.log(`Average marks of all students is: ${totalMarks / students.length}`);
}