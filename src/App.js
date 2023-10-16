import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import Home from './Home';
import StudentsView from './components/students/StudentsView';
import Navbar from "./components/common/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./components/students/AddStudent";
import EditStudent from "./components/students/EditStudent";
import StudentPofile from "./components/students/StudentProfile";

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/view-students" element={<StudentsView />} />

          <Route exact path="/add-student" element={<AddStudent/>} />

          <Route exact path="/edit-student/:id" element={<EditStudent/>} />

          <Route exact path="/student-profile/:id" element={<StudentPofile/>} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
