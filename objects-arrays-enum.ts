// const person: {
//     name: string;
//     age: number;
//     }
// const person: {
//         name: string;
//         age: number;
//         hobbies: string[];
//         role: [number, string];
//     } = {
//         name: 'Jonathan',
//         age: 30,
//         hobbies: ['Volleyball', 'Games'],
//         role: [2, 'programmer']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 3;

enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR'}; // Great for identifiers that are human readable

const person = {
    name: 'Jonathan',
    age: 30,
    hobbies: ['Volleyball', 'Games'],
    role: Role.ADMIN
};

//person.role.push('admin'); PUSH cannot be caught by typescript
//person.role[1] = 10;

//person.role = [0, 'admin'];

let favoriteActivities: string[];
favoriteActivities = ['Football'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    //console.log(hobby.map()); // Now allowed due to being string not dictionary
}

if (person.role === Role.ADMIN) {
    console.log('is admin');
}