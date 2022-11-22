import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../../tasksSlice";
import { Button } from "../styled";

const ExampleTasksButton = () => {
  const dispatch = useDispatch();
  return (
    <Button onClick={() => dispatch(fetchExampleTasks())}>
      Pobierz przykładowe zazdania
    </Button>
  )

};

export default ExampleTasksButton;