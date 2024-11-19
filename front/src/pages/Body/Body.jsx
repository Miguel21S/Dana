
import { Routes, Route, Navigate} from "react-router-dom"
import { Home } from "../Home/home"
import { Login } from "../Login/Login"

export const Body = () => {
    return (
        <Routes>
            <Route path="*" element={<Navigate to = {"/"} replace />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}