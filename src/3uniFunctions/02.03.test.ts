import {CityType} from "../2Unitests/02.02";
import {addMoneyToBudget, repairHouse, toFireStaff} from "./03";


let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            buildedAT: 2012,
            repaired: false,
            address: {number: 100, street: {title: "White Street"}}
        },
            {
                buildedAT: 2008,
                repaired: false,
                address: {number: 100, street: {title: "Happy Street"}}
            },
            {
                buildedAT: 2020,
                repaired: false,
                address: {number: 101, street: {title: "White Street"}}
            }],
        governmentBuildings: [
            {
                type: "Hospital", budget: 200000, staffCount: 200,
                address: {
                    street: {title: "Central Str"}
                }
            },
            {
                type: "Fire-station", budget: 600000, staffCount: 400,
                address: {
                    street: {title: "Mazepa Str"}
                }
            }
        ],
        citizensNumber: 100000
    }
})
// 01.создаем в отдельном файле функцию,чтобы тесты проходили
test("Budget should be changed for HOSPITAL", () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);

    expect(city.governmentBuildings[0].budget).toBe(300000)
})
test("Budget should be changed for FIRE-STATION", () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);

    expect(city.governmentBuildings[1].budget).toBe(500000)
})

// 02.создаем функцию в отдельном файле
test("House should be repaired", () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy()

})
//03. coздать функцию
test("staff should be increased",() => {
    toFireStaff(city.governmentBuildings[0],20);

    expect(city.governmentBuildings[0].staffCount).toBe(180)
})