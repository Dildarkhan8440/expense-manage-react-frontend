import { Link, useNavigate } from "react-router-dom";

export default function Nav(){
    const navigate = useNavigate();
    const handdleClick = async (e) => {
        navigate('/', { replace: true });
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        {/* <!-- Container wrapper --> */}
        <div className="container-fluid">
            {/* <!-- Navbar brand --> */}
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
                <h5 className="pt-1">MDB</h5>
            </a>
            {/* <!-- Toggle button --> */}
            <button data-mdb-button-init class="navbar-toggler" type="button" data-mdb-collapse-init data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
            </button>

            {/* <!-- Collapsible wrapper --> */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {/* <!-- Left links --> */}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link btn border" to={'/dashboard'}>Dashboard</Link>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#">Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Projects</a>
                    </li> */}
                </ul>
                {/* <!-- Left links --> */}

                {/* <!-- Right elements --> */}
                <div className="d-flex align-items-center justify-content-start">
                    {/* <!-- Icon --> */}
                    {/* <a class="text-reset me-3" href="#">
                        <i class="fas fa-shopping-cart text-white"></i>
                    </a> */}
                    <div className="dropdown">
                        <a data-mdb-dropdown-init class="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuAvatar" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" height="25" alt="Black and White Portrait of a Man" loading="lazy" />
                        </a>
                        {/* <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                            <li>
                                <a class="dropdown-item" href="#">My profile</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Settings</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Logout</a>
                            </li>
                        </ul> */}
                    </div>
                    {/* <!-- Notifications --> */}
                    <div className="dropdown">
                            <button className="btn btn-primary border" onClick={handdleClick}>Logout</button>
                        {/* <a data-mdb-dropdown-init class="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                            <i class="fas fa-bell text-white"></i>
                            <span class="badge rounded-pill badge-notification bg-danger">1</span>
                        </a> */}
                        {/* <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <a class="dropdown-item" href="#">Some news</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Another news</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </li>
                        </ul> */}
                    </div>
                    {/* <!-- Avatar --> */}
                    
                </div>
                {/* <!-- Right elements --> */}
            </div>
            {/* <!-- Collapsible wrapper --> */}
        </div>
        {/* <!-- Container wrapper --> */}
    </nav>
    )
}