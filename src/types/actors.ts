import { Image } from "./multimedia"

// Actors types
export type Actor = {
    id: string,
    name: string,
    created_at: Date,
    //image?: Image
}
export type Person = Actor & {
    lastName: string,
    email: string,
}
export type Pet = Actor & {
    ownerId: string,
    fatherId: string,
    motherId: string,
    breed: Breed
    sex: Sex,
    dateBirth: Date,
}
export type Breed = {
    id: string,
    specie: Species,
    name: string
}

//enums
export enum Species {
    CAT = "cat",
    DOG = "dog"
}
export enum Sex {
    MALE = "male",
    FEMALE = "female"
}