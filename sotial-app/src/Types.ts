import {Dispatch, SetStateAction} from "react";
import { v4 as uuidv4 } from 'uuid';

export type TypeSetState<T> = Dispatch<SetStateAction<T>>

export interface IUser {
    _id: string,
    avatar: string,
    name: string
}
export interface IPost {
    author: IUser,
    createdData: string
    content: string
    img?: string[]
}

export interface IMassage {
    user: IUser,
    massage: string,
    createdAt: string,
}
