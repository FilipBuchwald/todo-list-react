import { useSelector, useDispatch } from "react-redux/es/exports";
import { selectTasks, toggleHideDone, setAllDone, selectHideDone } from "../tasksSlice";
import { Wrapper, Button } from "./styled";

const Buttons = () => {
    const {tasks} = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
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