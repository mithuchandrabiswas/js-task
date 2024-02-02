// Task-1
// Access the golden rod color value in output.
/* const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
}; */
// Answer: console.log(colors["golden rod"]);


// Task-2
// For this object below add a property named passenger capacity with value 5

/* const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car["passenger capacity"] = 5; */
// Answer: console.log(car);


// Task-3
// Display the physics marks as output.
/* const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
}; */
// Answer: console.log(student.physics.marks);

// Task-4
// Count the number of properties.
/* let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
}; */
// Answer: console.log(Object.keys(student).length);  // Object.keys(objectName) diye er sokol property Name ber kora hoy
                                          // Object.values(objectName) diye er sokol property Value ber kora hoy
                                        // ar tader sathe dot lenght property use korar madhome object er property length ber kora hoy.
// Output: 4

// Task-5 (Hard)
// Loop through an object and print the key-value pairs with their types
// // Input:
//     let myObject = {
//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
//     };                           // loop er vitore object er value ber kore braket notation er maddhome
//     for (let item in myObject) {
//         console.log(`key: ${item} | type: ${typeof myObject[item]}`); // Answer:
//     }


// Output:
// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean