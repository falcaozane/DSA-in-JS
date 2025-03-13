/*

PROBLEM

Create an array with 5 students names, after that create a function which takes 2 parameters (allStudents & studentName) 
and iterate over all students and find that specific user "studentName".

*/


const allStudents = ['Hux', 'Tut', 'Hamdy', 'Abdullah', 'Husam'];

function findStudent(allStudents, studentName) {
    for (let i = 0; i < allStudents.length; i++) {
        if (allStudents[i] === studentName) {
            console.log(`Found student at ${studentName} at index ${i}`);
        }
    }
    console.log("not found")
}

/*

optimized solution 

indexOf(studentName): This method searches the array for the first occurrence of studentName and returns its index.

function findStudent(allStudents, studentName) {
    const index = allStudents.indexOf(studentName);

    if (index !== -1) {
        console.log(`Found student ${studentName} at index ${index}`);
    } else {
        console.log("Student not found");
    }
}

*/


//findStudent(allStudents, 'Zane');

findStudent(allStudents, 'Tut');