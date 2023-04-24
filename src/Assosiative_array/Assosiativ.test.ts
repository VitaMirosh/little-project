type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType


beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Vita'},
        '1323': {id: 1323, name: 'Kolya'},    //ассицоативный массив
        '1212': {id: 1212, name: 'Tanya'},
        '1': {id: 1, name: 'Pavel'}
    }
    })


    test("should update corresponding user", () => {
        users['1'].name = 'Paulina'
        expect(users['1'].name).toBe('Paulina')
        delete users['1212']
        expect(users['1212']).toBeUndefined()
    })