export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "Andrey Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitriy Sidorov", age: 18},
]


const Transform = (man: ManType) => ({

    stack: ["css,html", "js", "tdd", "react"],
    firsName: man.name.split("")[0],
    lastName: man.name.split("")[1]
})
//способ №1 вызвать каждый обьект
const devs = [
    {
        stack: ["css,html", "js", "tdd", "react"],
        firstName: "Andrey", lastName: "Ivanov"
    },
    {
        stack: ["css,html", "js", "tdd", "react"],
        firstName: "Alexander", lastName: "Petrov"
    },
    {
        stack: ["css,html", "js", "tdd", "react"],
        firstName: "Dmitriy", lastName: "Sidorov"
    },

]
//способ №2 вызвать функцию каждого обьекта
const devs2 = [
    Transform(people[0]),
    Transform(people[1]),
    Transform(people[2]),
]
//способ №3 с помощью map
const devs3 = people.map(Transform)

//способ №4 с помощью
const devs4 = people.map(man => ({

    stack: ["css,html", "js", "tdd", "react"],
    firsName: man.name.split("")[0],
    lastName: man.name.split("")[1]
}))


const message = people.map(man => 'Hello ${man.name.split("")[0]}. Welcome to NY')

export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to NY`)

}
