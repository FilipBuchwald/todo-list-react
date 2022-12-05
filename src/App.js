import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage";
import { Li, StyledNavLink, Ul } from "./styled";

const App = () => (
  <BrowserRouter>
    <nav>
      <Ul>
        <Li>
          <StyledNavLink to="/zadania">
            Zadania
          </StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="/author">
            O autorze
          </StyledNavLink>
        </Li>
      </Ul>
      <Routes>
        <Route path="/zadania/:id" element={<TaskPage />} />
        <Route path="/zadania" element={<TasksPage />} />
        <Route path="/author" element={<AuthorPage />} />
        <Route path="*" element={<Navigate replace to="/zadania" />}>
        </Route>
      </Routes>
    </nav>
  </BrowserRouter>
);

export default App;