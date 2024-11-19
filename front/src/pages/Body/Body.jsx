
import { Routes, Route, Navigate} from "react-router-dom"
import { Home } from "../Home/home"

export const Body = () => {
    return (
        <Routes>
            <Route path="*" element={<Navigate to = {"/"} replace />} />
            <Route path="/" element={<Home />} />
        </Routes>
    )
}