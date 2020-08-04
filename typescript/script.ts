
interface Theperson {
    FirstName: string,
    LastName: string,
    EyeColor: string,
    Age: number,
    greeting: () => string
}

var person: Theperson = {
    FirstName: "John",
    LastName: "Abueid",
    EyeColor: "Brown",
    Age: 36,
    greeting: () => { return "HI function" }
}

var person1: Theperson = {
    FirstName: "oday",
    LastName: "Abueid",
    EyeColor: "Blue",
    Age: 28,
    greeting: () => { return "hiiiiiiiiiiiii" }
}


console.log(person)
console.log(person1)

interface ArrayInterface {
    [index: number]: number
}

var array1: ArrayInterface

array1 = [9, 3, 2, 3]

console.log(array1)

interface People {
    [index: number]: string
}

var peopleArray: People
peopleArray = ["oday", "Ahmed", "Ysser", "Raaaa"]
console.log(peopleArray)

interface OtherInt {
    Name: string,
    Age: number,
    Email: string
}

var peops: OtherInt = {
    Name: "oday",
    Age: 55,
    Email: "odayavuejd"
}

console.log(peops)