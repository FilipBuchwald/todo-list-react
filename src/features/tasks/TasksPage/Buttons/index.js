import { useSelector, useDispatch } from "react-redux/es/exports";
import { toggleHideDone, setAllDone, selectHideDone, selectAreTasksEmpty, selectIsEveryTaskDone } from "../../tasksSlice";
import { Button } from "../styled";
import { Wrapper } from "./styled";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

  const dispatch = useDispatch();
  return (
    <Wrapper>
     
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            disabled={isEveryTaskDone}
            onClick={() => dispatch(setAllDone())}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Wrapper>
  )
};

export default Buttons;