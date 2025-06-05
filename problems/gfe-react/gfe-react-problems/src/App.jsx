import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Home from "./components/Home";
import BasicSubmitForm from "./components/BasicSubmitForm";
import HolyGrailLayout from "./components/HolyGrailLayout";
import TabsData from "./components/Tabs/TabsData";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
