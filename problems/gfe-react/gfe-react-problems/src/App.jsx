import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/todo-list" element={<Todos />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
