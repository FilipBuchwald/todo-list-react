import { useSelector, useDispatch } from "react-redux/es/exports";
import { selectTasks, toggleHideDone } from "../tasksSlice";
import { Wrapper, Button } from "./styled";

const Buttons = ({ setAllDone }) => {
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
                        onClick={setAllDone}
                    >
                        Ukończ wszystkie
                    </Button>
                </Wrapper>
            )
        )
    )
};

export default Buttons;