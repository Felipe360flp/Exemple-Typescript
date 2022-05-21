interface User {
    name:string;
    age:number;
    occupation:string;
    role?:string;
}

interface Admin {
    name:string;
    age:number;
    occupation?:string;
    role:string;
}

export type Person = User | Admin;

export const persons: Person[] /* <- Person[] */ = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(Person:Person) {
    console.log(` - ${Person.name}, ${Person.age}`);
}

persons.forEach(logPerson);