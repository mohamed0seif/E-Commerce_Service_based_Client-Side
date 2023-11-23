export interface IRequestData{
    id: number,
    requestText:string ,
    date: Date,
    status: string,
    serviceDetails: {
        id: number,
        name: string
    },
    providerDetails: {
        providerName: string
    },
    userDetails: {
        userName: string
    }
}

