import {CityType} from "../2Unitests/02.02";
import {createmessages, getStreetsTitlesOfGovernmentsBuildings} from "./05_02";


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

test("list of streets titles of governments buildings", () => {
    let streetsNames = getStreetsTitlesOfGovernmentsBuildings(
        city.governmentBuildings
    );

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe("Central Str");
    expect(streetsNames[1]).toBe("Mazepa Str")
})

test("create greeting message for people", () => {
    let message = createmessages(city.houses);

    expect(message.length).toBe(3);
    expect(message[0]).toBe("Hello guys from White Street");
    expect(message[1]).toBe("Hello guys from Happy Street");
    expect(message[2]).toBe("Hello guys from White Street")
})