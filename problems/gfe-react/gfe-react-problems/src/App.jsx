import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todos from "./components/Todos/Todos";
import Home from "./components/Home";
import BasicSubmitForm from "./components/BasicSubmitForm";
import HolyGrailLayout from "./components/HolyGrailLayout";
import TabsData from "./components/Tabs/TabsData";
import JobBoard from "./components/JobBoard";
import { TodoBasic } from './components/Todos/TodosBasic';
import { TodoSimple } from "./components/Todos/TodosSimple";


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
          <Route path="/todo-simple" element={<TodoSimple/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
