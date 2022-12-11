import {createGreetingMessage, ManType} from "./05-01";

let people: Array<ManType> = []

beforeEach(() => {
    people = [
        {name: "Andrey Ivanov", age: 33},
        {name: "Alexander Petrov", age: 24},
        {name: "Dmitriy Sidorov", age: 18}
    ]
})
//
test ("should get array of greeting message",()=>{

    const message = createGreetingMessage(people);

    expect(message.length).toBe(3);
    expect(message[0]).toBe("Hello Andrey. Welcome to NY")
    expect(message[1]).toBe("Hello Alexander. Welcome to NY")
    expect(message[2]).toBe("Hello Dmitriy. Welcome to NY")

})