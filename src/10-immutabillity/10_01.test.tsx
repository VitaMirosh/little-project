import {makeHairStyle, maveUser, upgradeuserLaptop, UserLaptopType, UserType} from "./10_01";


test('reference type test', () => {
    let user: UserType = {
        name: 'Vita',
        hair: 32,
        address: {
            city: 'Minsk'

        }
    }
    const handsomeUser = makeHairStyle(user, 2)

    expect(user.hair).toBe(32)
    expect(handsomeUser.hair).toBe(16)
    expect(handsomeUser.address).toBe(user.address)
})


test('change  address type test', () => {
    let user: UserLaptopType = {
        name: 'Vita',
        hair: 32,
        address: {
            city: 'Minsk',
            house:12
        },
        laptop: {
            title: 'lenovo'
        }

    }
    const movedUser = maveUser(user, 'Kyiv')

    expect(user.hair).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.address.city).toBe('Kyev')
    expect(movedUser.laptop).toBe(movedUser.laptop)
})

test('upgrade laptop to macbook', () => {
    let user: UserLaptopType = {
        name: 'Vita',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'lenovo'
        }

    }
    const userCopy = upgradeuserLaptop(user, 'Macbook')

    expect(user.hair).not.toBe(userCopy)
    expect(userCopy.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('Macbook')
})