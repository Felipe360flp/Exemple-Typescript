export type User ={
    name:string;
    age:number;
    occupation:string;
};

export const users: User[] = [
    {
        name: 'Wilker',
        age: 25,
        occupation: 'Backend developer'
    },
    {
        name: 'Bob',
        age: 23,
        occupation: 'Product Manager'
    }
];

export function logPerson(user: User) {
    console.log(`Name: ${user.name}, Age: ${user.age}\n`);
}

console.log('Users:');
users.forEach(logPerson);



















