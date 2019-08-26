import React from 'react';
import { Link } from "react-router-dom"; 

import styles from './Button.module.scss';

export const Button = ({to, text}) => <Link className={styles.button} to={to}>{text}</Link>