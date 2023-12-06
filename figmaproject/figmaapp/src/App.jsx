
import './App.css';
import { Route, Routes } from "react-router-dom"
import MainLayout from './MainLayout';
import Homepage from './Pages/Home';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}/> {/* 👈 Renders at /app/ */}
      </Routes>
    </div>
  );
}

export default App;
