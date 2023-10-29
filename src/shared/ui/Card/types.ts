import {HTMLAttributes} from "react";
import {LinkProps} from "react-router-dom";

export interface CardProps extends LinkProps{
    name: string
    email: string
    avatar?: string

}