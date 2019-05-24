// @flow
import React from 'react';
import styles from './search-input.css';

type Props = {
  title: string,
  value: string,
};

export default function CustomInput({ title, value }: Props) {
  return (
    <div className={styles.search_field}>
      <div className={styles.search_field_title}>{title}</div>
      <input className={styles.search_field_input} defaultValue={value}></input>
    </div>
  );
}
