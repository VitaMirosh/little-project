export type StreetType = {
    title:string
}
export type AddressType = {
    number?:number
    street: StreetType
}
export type HouseType = {
    buildedAT:number
    repaired:boolean
    address: AddressType
}
export type GovernmentBuildingsType = {
    type: "Hospital" |"Fire-station"
    budget:number
    staffCount:number
    address: AddressType
}
export type CityType = {
    title:string
    houses:Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}