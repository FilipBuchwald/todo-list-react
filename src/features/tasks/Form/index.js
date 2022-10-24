import { useRef, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);
    
    const focusInput = () => {
        inputRef.current.focus();
    };

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent === "") {
            return;
        };
        dispatch(addTask({
            content: newTaskContent.trim(),
            done : false,
            id : nanoid(),
        }))

        // addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };


    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={(event) => setNewTaskContent(event.target.value)}
                ref={inputRef}
            />
            <Button onClick={focusInput}>
                Dodaj zadanie
            </Button>
        </StyledForm>
    );
};

export default Form;