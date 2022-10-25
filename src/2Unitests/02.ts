export type CityType = {
    title: string
    countryTitle: string
}
export type AddressType = {
    streetTitle: string
    city: CityType
}
export type TechType = {
    id: number
    title: string
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}
export const student = {
    id:1,
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