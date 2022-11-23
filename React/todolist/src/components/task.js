import React, { useState } from 'react';
import styles from './task.module.css';
import {IoIosCloseCircleOutline } from "react-icons/io";

const Task = ({title}, {isDone}) => {

    return ( 
        <div className={styles.task}>
            <div>{title}</div>
            <div>{isDone}</div>
            <div><IoIosCloseCircleOutline className={styles.icon}/></div>
        </div>
     );
}

export default Task;