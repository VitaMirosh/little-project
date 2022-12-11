const ages = [18,50,14,100,90];

const predicate = (age: number) => {
    return age > 90
}

const oldAges = [100, ];
type CourseType={
    title:string,
    price:number
}

const courses = [
    {title:"CSS",price:110},
    {title:"JS",price:200},
    {title:"REACT",price:150}
]
const cheapPredicate  = (course:CourseType)=>{
    return course.price<160
}