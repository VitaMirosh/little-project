import {CityType} from "./02.02";

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

test("test city should contains 3 houses", () => {
    expect(city.houses.length).toBe(3)

    expect(city.houses[0].buildedAT).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe("White Street");

    expect(city.houses[1].buildedAT).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe("Happy Street");

    expect(city.houses[2].buildedAT).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(101);
    expect(city.houses[2].address.street.title).toBe("White Street");
})


test("test city should contains hospital and station", () => {
    expect(city.governmentBuildings.length).toBe(2)

    expect(city.governmentBuildings[0].type).toBe("Hospital");
    expect(city.governmentBuildings[0].budget).toBe(200000);
    expect(city.governmentBuildings[0].staffCount).toBe(200);
    expect(city.governmentBuildings[0].address.street.title).toBe("Central Str");


    expect(city.governmentBuildings[1].type).toBe("Fire-station");
    expect(city.governmentBuildings[1].budget).toBe(600000);
    expect(city.governmentBuildings[1].staffCount).toBe(400);
    expect(city.governmentBuildings[1].address.street.title).toBe("Mazepa Str");

})