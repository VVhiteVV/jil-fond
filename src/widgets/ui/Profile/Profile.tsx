import React, {FC, ReactNode} from 'react';
import styles from "./styles.module.scss"
import {Title} from "shared/ui";
import {useGetUserIdQuery} from "features/api";
import {useParams} from "react-router-dom";
import plug from "shared/assets/img/bigPlug.png"
import {ClipLoader} from "react-spinners";


export const Profile: FC = () => {
    const {id} = useParams()
    const {data,isLoading} = useGetUserIdQuery(id)
    if(isLoading && !data){
        return (
            <div>
                <ClipLoader />
            </div>
        )
    }
        return (
            <div className={styles.Profile}>
                <div className={styles.Profile__avatar}>
                    <img src={plug} alt=""/>
                </div>
                <div className={styles.Profile__info}>
                    <div className={styles.Profile__info_contacts}>
                        <Title size={"h4"}>
                            {data?.username}
                        </Title>
                        <div className={styles.item}>
                            <div className={styles.item__name}>email: </div>
                            <div className={styles.item__content}> {data?.email}</div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.item__name}>phone: </div>
                            <div className={styles.item__content}> {data?.phone}</div>
                        </div>
                    </div>
                    <div className={styles.Profile__info_about}>
                        <Title size={"h4"}>
                            О себе:
                        </Title>
                        <div>
                            {data?.website}
                        </div>
                    </div>
                </div>
            </div>
        );

};