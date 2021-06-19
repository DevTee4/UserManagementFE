import { Roles } from "./roles"

export class User{
     _id = ""
     firstName: string = ""
     lastName: string = ""
     email: string = ""
     phone: string = ""
     gender: string = ""
     dateOfBirth: Date = new Date(Date.now())
     nationality: string = ""
     role = Roles.ADMINISTRATOR
     isChecked= false;
}