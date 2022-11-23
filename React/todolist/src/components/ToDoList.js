import Task from "./task";
import styles from './ToDoList.module.css';

const ToDoList = ({tasks}) => {

    return ( 
        <div className={styles.center}>
            <div className={styles.container}>
                {tasks.map((task, index) => (
                    <Task key={index} title={task.name} isDone={task.done}/>
                ))}
            </div>
        </div>
     );
}

export default ToDoList;