/*
You have an array of objects with student names and subjects:
let students = [
  { name: "Aman", subject: "Math" },
  { name: "Riya", subject: "Science" },
  { name: "Kunal", subject: "Math" },
  { name: "Sneha", subject: "English" }
];

Group the students by their subject, output should look like:
{
  Math: ["Aman", "Kunal"],
  Science: ["Riya"],
  English: ["Sneha"]
}
  */
{
    let students = [
        { name: "Aman", subject: "Math" },
        { name: "Riya", subject: "Science" },
        { name: "Kunal", subject: "Math" },
        { name: "Sneha", subject: "English" }
    ];

    let grouped = students.reduce((acc, student) => {
        (acc[student.subject] = acc[student.subject] || []).push(student.name);
        return acc;
    }, {});

    console.log(grouped);
}
//for..of loop
{
    let students = [
        { name: "Aman", subject: "Math" },
        { name: "Riya", subject: "Science" },
        { name: "Kunal", subject: "Math" },
        { name: "Sneha", subject: "English" }
    ];

    let grouped = {};
    for (let student of students) {
        (grouped[student.subject] = grouped[student.subject] || []).push(student.name);
    }

    console.log(grouped);
}
//forEach loop
{
    let students = [
        { name: "Aman", subject: "Math" },
        { name: "Riya", subject: "Science" },
        { name: "Kunal", subject: "Math" },
        { name: "Sneha", subject: "English" }
    ];

    students.forEach(student => {
        (grouped[student.subject] = grouped[student.subject] || []).push(student.name);
    });

    console.log(grouped);
}

//for loop
{
    let students = [
        { name: "Aman", subject: "Math" },
        { name: "Riya", subject: "Science" },
        { name: "Kunal", subject: "Math" },
        { name: "Sneha", subject: "English" }
    ];

    let grouped = {};
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        (grouped[student.subject] = grouped[student.subject] || []).push(student.name);
    }

    console.log(grouped);
}