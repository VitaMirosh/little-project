import {StudentType} from "../2Unitests/02";
import {addSkill, makeStudentActive} from "./03";
import {findAllByTitle} from "@testing-library/react";

let student: StudentType;
beforeEach(() => {
    student = {
        id:1,
        name: "Vitaliia",
        age: 30,
        isActive: false,
        address: {
            streetTitle: "Cupala 2",
            city: {
                title: "Molodechno",
                countryTitle: "Belarus",
            },
        },
        technologies: [
            {
                id: 1,
                title: "HTML",
            },
            {
                id: 2,
                title: "CSS",
            },
            {
                id: 3,
                title: "React",
            },
        ],
    }
})
test("student should be active",()=>{
  expect(student.isActive).toBe(false);

  makeStudentActive(student);

   expect(student.isActive).toBe(true);

})