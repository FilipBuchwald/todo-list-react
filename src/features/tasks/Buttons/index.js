import { useSelector, useDispatch } from "react-redux/es/exports";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";
import { Wrapper, Button } from "./styled";

const Buttons = () => {
    const { tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        (
            tasks.length > 0 && (
                <Wrapper>
                    <Button
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        disabled={tasks.every(task => task.done)}
                        onClick={() => dispatch(setAllDone())}
                    >
                        Ukończ wszystkie
                    </Button>
                </Wrapper>
            )
        )
    )
};

export default Buttons;