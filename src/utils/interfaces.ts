import React from 'react'
export interface IUserSummary {
        id: number | string,
        first_name: string,
        last_name: string,
        photo_url: string | null,
        gender: string,
        birth_date: string,
        home_phone: string,
        mobile_phone: string,
        work_phone: string,
        email: string,
        activity?: {
            sms: number ,
            email: number,
            orders: number
        },
        carrier_status?: {
            since:  string,
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
    activityValue: number | string | Date,
    style?: any
}


export interface ICarrierStatusCard {
    date: Date, 
    status: string, 
    title: string
}

export interface ITab {
    title: string,
    value : string
}


export interface ITable {
    schema: ITableSchema[],
	data: Record<any, any>,
	onViewRowDetail?: (data: Record<any, any>) => any,
    header?:() => React.ReactNode
}


export type ITableSchema = {
        name: string,
        accessor?: string,
        render?: (data: any) => React.ReactNode
}

export interface IResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}


export interface IAppState {
    userSummary :{
        loading:  boolean,
        user: IUserSummary
    }
}

export interface IUserReducer {
    loading: boolean,
    data: IUserSummary
}