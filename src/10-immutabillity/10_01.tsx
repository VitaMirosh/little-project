export type UserType = {
    name: string,
    hair: number,
    address: { city: string, house?: number }
}


export type LaptopType = {
    title: string
}
export type UserLaptopType = UserType & {
    laptop: LaptopType
}

export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }

    return copy
}

export function maveUser(u: UserLaptopType, city: string) {
  return {
        ...u,
        address: {
            ...u.address,
            city: city
        },
    }
    // copy.address = {
    //     ...copy.address,city:city
    // }

}
export function upgradeuserLaptop(u: UserLaptopType, title: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: title,
        }
    }
}
