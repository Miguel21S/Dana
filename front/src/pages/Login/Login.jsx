
import "./Login.css"

export const Login = () => {
    return (
        <>
            <div className="loginDesign">
                <h1>ESTE ES LA CLASE LOGIN</h1>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label form="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label form="floatingPassword">Password</label>
                </div>
            </div>
        </>
    )
}