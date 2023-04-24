export const usersObj = {
    '0': 'Vita',
    '1': 'Kolya',
    '2': 'Tanya',
    '3': 'Pavel'
}
type UsersType = {
    [key:string]: {id: number, name:string}
}

export const users: UsersType = {
    '101': {id: 101, name: 'Vita'},
    '1323': {id: 1323, name: 'Kolya'},    //ассицоативный массив
    '1212': {id: 1212, name: 'Tanya'},
    '1': {id: 1, name: 'Pavel'}
}
//users[1]  выдаст users c id 1 моментально быстро
var user = { id: 100500, name:'Igor'}       //добавляем нового пользователя в данный массив,если такой пользователь с таким ID уже был он просто перезатрется и в массиве не будет двух одинаковых дубликата
users[user.id] = user;                      // если хотим добавить дубликат ,тогда используем метод PUSH.
delete users [user.id]                      // удаляем пользователя по iD МОМЕНТАЛЬНО БЫСТРО
users[user.id].name = 'Vitya'               // здесь мы перезатерли имя Игорь на Витю


export const usersArray = [
    {id: 101, name: 'Vita'},
    {id: 1323, name: 'Kolya'},       //простой массив
    {id: 1212, name: 'Tanya'},
    {id: 1, name: 'Pavel'}
]
//usersArray.findIndex()         // то же что и find
usersArray.find(u => u.id === 1)  //в этом случае метод find будет пробегать по массиву и сравнивать и это пробегание зависит от того на сколько у нас большой массив
//var usersCopy = [...usersArray.filter(),user] в этом случае добавляем нового пользователя
//var usersArray = usersArray.filter(u =>u.id !== user.id}  пропускае всех чуваков у которых ID не равна тому чуваку которого надо удалить