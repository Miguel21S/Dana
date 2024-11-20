
// import { useNavigate } from "react-router-dom"
// import { useDispatch } from "react-redux";
import "./Login.css"
import { useState } from "react";
import { LoginUser } from "../../services/root";

export const Login = () => {
    // const navigate = useNavigate();
    // const dispatch = useDispatch()

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const inptHandler = (e) => {
        setUser(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))

        // setUser({...user, [e.target.name]: e.target.value })
    }

    const LogiU = async() => {
        try {
            const fetched = await LoginUser(user);
            setUser(fetched)
            // if(fetched && fetched.token){
            //     setUser(fetched)
            // } else {
            //     console.log("ERROR CON FETCHED", fetched)
            // }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="loginDesign">
                <h1>ESTE ES LA CLASE LOGIN</h1>
                <div className="form-floating mb-3">
                    <input type="email" name="email" value={user.email || ""} onChange={inptHandler} className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label form="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" name="password" value={user.password || ""} onChange={inptHandler} className="form-control" id="floatingPassword" placeholder="Password" />
                    <label form="floatingPassword">Password</label>
                </div>
                <button className="btn btn-primary" onClick={LogiU}>Login</button>
            </div>
        </>
    )
}