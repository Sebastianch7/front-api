import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Create from "../Pages/Create";
import Accion from "../Pages/Accion";

const RoutesApp = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/accion/:id/:type" element={<Accion />} />
            
        </Routes>
    </BrowserRouter>
)

export default RoutesApp;