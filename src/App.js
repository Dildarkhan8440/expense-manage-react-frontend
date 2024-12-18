
import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from '../src/components/Login'
import Dashboard from './components/Dashboard';
import AddExpense from './components/AddExpense';
import EditExpense from './components/Edit';
import Register from './components/Register';
function App() {
  const navigate=useNavigate();
      return (
        <div className="App">
            <div className="">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/addExpense" element={<AddExpense />} />
                <Route path="/editExpense/:id" element={<EditExpense />} />
              </Routes>
            </div>
        </div>
      );
}

export default App;
