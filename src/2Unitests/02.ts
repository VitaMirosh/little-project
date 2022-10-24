type CityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: CityType
}
type TechType = {
    id: number
    title: string
}
type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    technologies: Array<TechType>
}
const student = {
    name: "Vitaliia",
    age: 30,
    isActive: false,
    address: {
        streetTitle: "Cupala 2",
        city: {
            title: "Molodechno",
            countryTitle: "Belarus",
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML",
        },
        {
            id: 2,
            title: "CSS",
        },
        {
            id: 3,
            title: "React",
        },
    ]
}

console.log(student.address.city.title)
console.log(student.technologies[2].title)