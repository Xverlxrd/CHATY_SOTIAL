import {Dispatch, SetStateAction} from "react";
import friends from "./img/friends.png";

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
