import { useSelector, useDispatch } from "react-redux/es/exports";
import { toggleHideDone, setAllDone, selectHideDone, fetchExampleTasks, selectAreTasksEmpty, selectIsEveryTaskDone, } from "../../tasksSlice";
import { Wrapper, Button } from "./styled";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

  const dispatch = useDispatch();
  return (
    // (
    //     tasks.length > 0 && (
    <Wrapper>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zazdania
      </Button>
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
    //     )
    // )
  )
};

export default Buttons;