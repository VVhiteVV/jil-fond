import React, {FC} from 'react';
import {type CardProps} from "./types";
import styles from "./styles.module.scss"
import {Link, NavLink} from "react-router-dom";
import plug from "shared/assets/img/plug.png"
import cl from "classnames";

export const Card: FC<CardProps> = (props) => {
    const {name, email, avatar, ...other} = props
    return (
        <NavLink {...other} className={({isActive}) => cl(styles.Card,{[styles.active]: isActive})}>
            <div className={styles.Card__avatar} >
                <img src={avatar || plug } alt=""/>
            </div>
            <div className={styles.Card__info}>
                <div className={styles.Card__info_name}>
                    {name}
                </div>
                <div className={styles.Card__info_email}>
                    {email}
                </div>
            </div>
        </NavLink>
    );
};