import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faListAlt, faUser, faWindowClose, faBookmark  } from "@fortawesome/free-regular-svg-icons";
import AppStore from "../../stores/AppStore";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function MenuUser() {

    const navigate = useNavigate();

    function doUserLogout() {
        AppStore.dispatch( { type: "auth.reset" } );
        navigate("/auth/user/login");
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <Link className="navbar-brand" to="/">Hi, { AppStore.getState().auth.identity }</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/categories">
                        <FontAwesomeIcon icon={ faListAlt } /> Ads
                    </Link>

                    <Link className="nav-item nav-link" to={"/user/" + AppStore.getState().auth.id}>
                        <FontAwesomeIcon icon={ faUser } /> My profile
                    </Link>

                    <Link className="nav-item nav-link" to={"/user/"+AppStore.getState().auth.id+"/ad/add"}>
                        <FontAwesomeIcon icon={faPlus} /> Add ad
                    </Link>

                    <Link className="nav-item nav-link" to={"/user/" + AppStore.getState().auth.id + "/ad"}>
                        <FontAwesomeIcon icon={faBookmark} /> My ads
                    </Link>

                    <div className="nav-item nav-link" style={{ cursor: "pointer" }} onClick={ () => doUserLogout() }>
                        <FontAwesomeIcon icon={ faWindowClose } /> Logout
                    </div>
                </div>
            </div>
        </nav>
    )
}