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

type Person = User | Admin;

export const persons: Person[] = [
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

export function logPerson(person: Person) {
    let additionalInformation: string | undefined;
    if (person.role) {
        additionalInformation = person.role;
    } else {
        additionalInformation = person.occupation;
    }
    console.log(` Name: ${person.name} - Age: ${person.age} - Additional Information: ${additionalInformation}\n`);
}

console.log("Persons:\n")
persons.forEach(logPerson,);