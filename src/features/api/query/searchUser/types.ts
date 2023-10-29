
export interface UserAddressI {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string
    }
}
export interface UserI {
    id: number,
    name: string,
    username: string,
    email: string,
    address: UserAddressI
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

export interface SearchParams{
    type: "id" | "username",
    value: string[]
}