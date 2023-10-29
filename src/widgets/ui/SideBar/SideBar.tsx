import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import styles from "./styles.module.scss"
import {Card, Input, Title} from "shared/ui";
import {useLazyGetUsersQuery} from "features/api";
import _default from "react-redux/es/components/connect";
import {NavLink, useNavigate} from "react-router-dom";
import {clearSearchText} from "widgets/ui/SideBar/lib";
import {ClipLoader} from "react-spinners";

export const SideBar: FC = () => {
    const [searchStr,setSearch] = useState<string>("")
    const navigate = useNavigate()
    const [fetch,state] = useLazyGetUsersQuery()
    const isNotFound = !state.isFetching && !Boolean(state.data?.length) && searchStr
    const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        if(!event.target.value.length){
            navigate("/")
        }
        setSearch(event.target.value)
    }
    useEffect(() => {
        fetch(clearSearchText(searchStr))
    }, [searchStr]);

    return (
        <div className={styles.SideBar}>
            <div className={styles.SideBar__search}>
                <Title size={"h4"}>
                    Поиск острудников
                </Title>
                <Input defaultValue={searchStr} onChange={handleChangeSearch} />
            </div>
            <div className={styles.SideBar__result}>
                <Title size={"h4"}>
                    Результаты
                </Title>
                <div className={styles.SideBar__list}>
                    <div>
                        {state.data && state.data.map((item, index) => (
                            <Card key={index} name={item.username} email={item.email} to={`${item.id}`}  />
                        ))}
                        {state.isFetching && (
                            <div className={styles.SideBar__loader}>
                                <ClipLoader />
                            </div>
                        )}
                        {isNotFound && "ничего не найдено"}
                    </div>
                </div>
            </div>
        </div>
    );
};