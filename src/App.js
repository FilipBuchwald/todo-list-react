import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Author from "./features/author/Author";
import Tasks from "./features/tasks/Tasks";

const App = () => (
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/zadania">
            Zadania
          </Link>
        </li>
        <li>
          <Link to="/author">
            O autorze
          </Link>
        </li>
      </ul>
      <Routes>
        <Route path="/zadania" element={<Tasks />} />
        <Route path="/author" element={<Author />} />
      </Routes>
    </nav>
  </BrowserRouter>
);

export default App;