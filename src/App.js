import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage";
import { StyledNavLink } from "./styled";

const App = () => (
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <StyledNavLink to="/zadania">
            Zadania
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/author">
            O autorze
          </StyledNavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/zadania/:id" element={<TaskPage />} />
        <Route path="/zadania" element={<TasksPage />} />
        <Route path="/author" element={<AuthorPage />} />
        <Route path="/todo-list-react" element={<Navigate replace to="/zadania" />}>
        </Route>
      </Routes>
    </nav>
  </BrowserRouter>
);

export default App;