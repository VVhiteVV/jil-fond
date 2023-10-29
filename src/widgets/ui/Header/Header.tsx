import React, {FC} from 'react';
import styles from "./styles.module.scss"
import {Title} from "shared/ui";

export const Header: FC = () => {
    return (
      <div className={styles.Header}>
          <Title size={"h3"} className={styles.Header__logo}>
              Жилфонд
          </Title>
          <div className={styles.Header__role}>
              Пользователь
          </div>
      </div>
    );
};