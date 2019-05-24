// @flow
import React from 'react';
import styles from './message.css';

const Message = ({ text }: { text: string }) => <div className={styles.message_text}>{text}</div>;

export default Message;
