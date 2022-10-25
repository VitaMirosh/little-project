import {student, StudentType} from "../2Unitests/02";

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