import {
    addNewBookToUser,
    makeHairStyle,
    maveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompany, updateCompanyTitle2,
    upgradeuserLaptop,
    UserLaptopType,
    UserType,
    UserWithBooksType, WithCompaniesType
} from "./10_01";


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
            house: 12
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


test('upgrade laptop to macbook', () => {
    let user: UserLaptopType & UserWithBooksType = {
        name: 'Vita',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'lenovo'
        },
        books: ['css', 'html', 'js', 'react']

    }
    const userCopy = moveUserToOtherHouse(user, 99)

    expect(user.hair).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)
})

test('add new book to user', () => {
    let user: UserLaptopType & UserWithBooksType = {
        name: 'Vita',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'lenovo'
        },
        books: ['css', 'html', 'js', 'react']

    }
    const userCopy = addNewBookToUser(user, "ts")

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
    expect(user.books.length).toBe(4)
})

test('add new book to user', () => {
    let user: UserLaptopType & UserWithBooksType = {
        name: 'Vita',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'lenovo'
        },
        books: ['css', 'html', 'js', 'react']

    }
    const userCopy = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
})

test('remove js book', () => {
    let user: UserLaptopType & UserWithBooksType = {
        name: 'Vita',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'lenovo'
        },
        books: ['css', 'html', 'js', 'react']

    }
    const userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('react')
})
test('update company', () => {
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
    let companies = {
        'Vita': [{id: 1, title: 'Epam'}, {id: 2, title: 'it-course'}],
        'Artem': [{id: 2, title: 'it-course'}]
    }
const copy = updateCompanyTitle2(companies,'Vita',1,'Epam')
expect(copy['Vita']).not.toBe(companies['Vita'])
    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy['Vita'][0].title).toBe('Epam')
})




test('update company a', () => {
    let user: UserLaptopType & WithCompaniesType = {
        name: 'Vita',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'lenovo'
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'it-course'}]
    }

    const userCopy = updateCompany(user, 1, 'Epam') as UserLaptopType & WithCompaniesType
    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(user.companies)
    expect(userCopy.companies[0].title).toBe('Epam')
})
