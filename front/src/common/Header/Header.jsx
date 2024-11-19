
import "./Header.css"
export const Header = () => {
    return (
        <>

            <div className="headerDesign">

                <div className="con">

                    <h3>DELICIAS</h3>
                    <p><strong>¡Bienvenidos a Delicias!</strong> Somos más que un simple lugar para comer; somos un destino
                        gastronómico donde la pasión por la buena comida se fusiona con un ambiente acogedor y un servicio
                        excepcional.
                    </p>
                    <p> En nuestro restaurante, cada plato es una obra maestra cuidadosamente elaborada con ingredientes frescos y
                        de la más alta calidad. Desde los sabores tradicionales hasta las creaciones innovadoras,
                        nuestro menú ofrece una experiencia culinaria que deleitará tus sentidos. Ya sea que nos visites para una
                        comida casual con amigos o una celebración especial, te invitamos a sumergirte en una experiencia
                        gastronómica inolvidable en Delicias.
                    </p>
                </div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar w/ text</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                                </li>
                                <li className="centrar">
                                    <form className="d-flex" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </li>
                            </ul>
                            {/* <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Iniciar Sension </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav >

                {/* <div className="container-fluid">
                        <div className="row">
                            <img src="img/imagenPrincipal2.jpg" alt="Imagen del Restaurante">

                        </div>
                    </div> */}

            </div >

        </>
    )
}