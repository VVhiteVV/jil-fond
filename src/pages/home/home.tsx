import React, {FC} from 'react';
import {SideBar} from "widgets/ui";
import {Outlet} from "react-router-dom";
import styles from "./styles.module.scss"

export const HomePage: FC = () => {
    return (
        <div className={styles.HomePage}>
            <SideBar/>
            <div className={styles.HomePage__content}>
                <Outlet/>
            </div>
        </div>
    );
};