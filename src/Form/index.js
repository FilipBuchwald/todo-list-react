import { useState } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent === "") {
            return;
        };
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                autoFocus
                onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <Button>
                Dodaj zadanie
            </Button>
        </StyledForm>
    );
};

export default Form;