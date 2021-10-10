import React, { useState } from "react";
import MyDatePicker from "../MyDatePicker";

import styles from "./TransactionsExpForm.module.scss";

const TransactionsExpForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <form className={styles.form}>
      <div className={styles.form__input_wrapper}>
        <MyDatePicker
          selectedDate={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <div className={styles.form_input}>
          <input type="text" placeholder="Описание товара" />
          <input type="text" placeholder="Категория товара" />
          <input type="text" placeholder="0,00" />
        </div>
      </div>

      <div className={styles.form__btn}>
        <button className={styles.form__btn_enter}>Ввод</button>
        <button className={styles.form__btn_clear}>Очистить</button>
      </div>
    </form>
  );
};

export default TransactionsExpForm;