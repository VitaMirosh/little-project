function increaseAge(u: UserType) {
    u.age++;
}

type UserType = {
    name: string,
    age: number
}
test('big test', () => {
    let user = {
        name: 'Vitah',
        age: 31
    }
    increaseAge(user);

    expect(user.age).toBe(32)
})
test('array test', () => {
    let users = [
        {
            name: 'Vika',
            age: '28',
        },
        {
            name: 'Nina',
            age: 41
        }
    ]
    let admin = users
    admin.push({name: 'Bodia', age: 11})

    expect(users[2]).toEqual({name: 'Bodia', age: 11})
})

