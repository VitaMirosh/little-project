import {student, StudentType} from "../2Unitests/02";
import {GovernmentBuildingsType, HouseType} from "../2Unitests/02.02";

export const sum = (a : number,b:number) => {
return a + b;
}
export const addSkill = (student: StudentType, skill:string) => {
   student.technologies.push({
       id: new Date().getTime(),
       title: skill
   })
}
export function  makeStudentActive(s:StudentType){
    s.isActive = true
}
export const doesStudentLiveIN = (s:StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
    building.budget += budget
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingsType, staffCountToFire: number) => {
building.staffCount -= staffCountToFire;
}