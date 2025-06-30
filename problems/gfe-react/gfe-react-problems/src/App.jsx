import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todos from "./components/Todos/Todos";
import Home from "./components/Home";
import BasicSubmitForm from "./components/BasicSubmitForm";
import HolyGrailLayout from "./components/HolyGrailLayout";
import TabsData from "./components/Tabs/TabsData";
import JobBoard from "./components/JobBoard";
import { TodoBasic } from "./components/Todos/TodosBasic";
import { TodoSimple } from "./components/Todos/TodosSimple";
import TodosLocalStorage from "./components/Todos/TodosLocalStorage";
import { LocalStorage } from "./components/LocalStorage/LocalStorage";
import AccordionParent from "./components/Accordion/AccordionParent";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/todo-list" element={<Todos />} />
          <Route path="/submit-form-basic" element={<BasicSubmitForm />} />
          <Route path="/holy-grail-layout" element={<HolyGrailLayout />} />
          <Route path="/tabs" element={<TabsData />} />
          <Route path="/job-board" element={<JobBoard />} />
          <Route path="/todo-basic" element={<TodoBasic />} />
          <Route path="/todo-simple" element={<TodoSimple />} />
          <Route path="/todos-local-storage" element={<TodosLocalStorage />} />
          <Route path="/physical-fitness-list" element={<LocalStorage />} />
          <Route path="/accordion-one" element={<AccordionParent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
