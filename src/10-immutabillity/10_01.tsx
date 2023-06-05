export type UserType = {
    name: string,
    hair: number,
    address: { city: string, house?: number }
}


export type LaptopType = {
    title: string
}
export type UserWithBooksType = UserType & {
    books:Array<string>
}
type CompanyType={id:number,title:string}
export type WithCompaniesType = {
    companies:Array<CompanyType>
}



export type UserLaptopType = UserType & {
    laptop: LaptopType
}

export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }

    return copy
}

export function maveUser(u: UserLaptopType, city: string) {
  return {
        ...u,
        address: {
            ...u.address,
            city: city
        },
    }
    // copy.address = {
    //     ...copy.address,city:city
    // }

}

export function moveUserToOtherHouse(u: UserLaptopType & UserWithBooksType,house:number){
    return{
        ...u,
            address:{
            ...u.address,
              house:house
        }
    }
}
export function upgradeuserLaptop(u: UserLaptopType, title: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: title,
        }
    }
}
export function addNewBookToUser(u: UserLaptopType &  UserWithBooksType, newBooks:string ) {
  return {
      ...u,
      books:[...u.books,newBooks]

  }
}
export function updateBook(u: UserLaptopType &  UserWithBooksType,oldBook:string,
                           newBooks:string ) {
   return  {
        ...u,
        books: u.books.map(b => b === oldBook ? newBooks:b)
    }
}
export function removeBook(u: UserLaptopType &  UserWithBooksType, removeString:string) {
    return  {
        ...u,
        books:u.books.filter(b=>b !== removeString )

    }
}
export const updateCompany = (user:WithCompaniesType,idCompany:number,newTitle:string ) =>{
const copy:WithCompaniesType={
    ...user,
    companies: user.companies.map(c =>c.id ===idCompany?{...c,title:newTitle} :c)
}

return copy
}

export const updateCompanyTitle2=(companies:{[key:string]:Array<CompanyType>},userName:string,companyId:number,newTitle:string)=>{
    let companyCopy={...companies}
    companyCopy[userName]=companyCopy[userName].map(c=>c.id===companyId?{...c,title:newTitle}:c)


    return companyCopy;
}