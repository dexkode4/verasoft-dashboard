export interface IUserSummary {
        id: string,
        first_name: string,
        last_name: string,
        photo_url: string,
        gender: string,
        birth_date: Date,
        home_phone: string,
        mobile_phone: string,
        work_phone: string,
        email: string,
        activity: {
            sms: number,
            email: number,
            orders: number
        },
        carrier_status: {
            since: Date,
            status: string
        }
    
}


export interface IReduxStore {
    userSummary: {
        loading: Boolean,
        user: IUserSummary,
    }
}

export interface IActivityCard {
    activityType: string,  
    activityValue: number
}