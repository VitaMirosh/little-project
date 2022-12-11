import {GovernmentBuildingsType, HouseType} from "../2Unitests/02.02";

export const getStreetsTitlesOfGovernmentsBuildings = (buildings: Array<GovernmentBuildingsType>) =>{
    return buildings.map(b => b.address.street.title)
}

export function createmessages(houses: Array<HouseType>) {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}