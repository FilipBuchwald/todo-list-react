import { useEffect, useState } from "react";

export const useTasks = () => {

    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    // const removeTask = (id) => {
    //     setTasks(tasks => tasks.filter(tasks => tasks.id !== id));
    // };
    
    // const toggleTaskDone = (id) => {
    //     setTasks(tasks => tasks.map(task => task.id === id ?
    //         {
    //             ...task,
    //             done: !task.done
    //         }
    //         : task));
    // };
    
    // const setAllDone = () => {
    //     setTasks(tasks => tasks.map(task => ({
    //         ...task,
    //         done: true,
    //     })));
    // };
    
    // const addNewTask = (content) => {
    //     setTasks(tasks => [
    //         ...tasks,
    //         {
    //             content,
    //             done: false,
    //             id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
    //         }])
    // };

    return {tasks
        // , removeTask, toggleTaskDone, setAllDone, addNewTask
    };
};