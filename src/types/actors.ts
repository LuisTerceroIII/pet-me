// Actors types
export type Person = {
    id: string,
    name: string,
    lastName: string,
    created_date: Date,
    email: string,
    imageURL: string
}
export enum Species {
    CAT = "cat",
    DOG = "dog"
  }
export type Breed = {
    id: string,
    specie: Species,
    name: string
}
export enum Sex {
    MALE = "male",
    FEMALE = "female"
}
export type Pet = {
    id: string,
    ownerId: string,
    fatherId: string,
    motherId: string,
    breed: Breed
    name: string,
    sex: Sex,
    dateBirth: Date,
    register_date: Date,
    imageURL: string
}