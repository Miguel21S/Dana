
import { useLocation, useNavigate } from "react-router-dom"
import "./Home.css"
import { useEffect } from "react";

export const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if(location.pathname !== "/"){
            navigate("/")
        }
    }, [navigate, location.pathname]);

    return (
        <>
            <div className="homeDesign">
                <div className="containerHome">

                    <div className="card text-center">
                        <div className="card-header">
                            <ul className="nav nav-pills card-header-pills">
                                <li className="nav-item">
                                    <a className="nav-link active" id="card-home" href="#">Active</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" id="card-home" href="#">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" id="card-home" href="#">Disabled</a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">

                            <div className="cardFirst">
                                <div className="card" style={{width: "18rem"}}>
                                    <img src="..." className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>

                            </div>

                            <div className="cardSecundary">

                                <div className="row row-cols-1 row-cols-md-2 g-4">
                                    <div className="col">
                                        <div className="card">
                                            <img src="..." className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <img src="..." className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <img src="..." className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <img src="..." className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}