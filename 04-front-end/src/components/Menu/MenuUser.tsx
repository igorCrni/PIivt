import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faListAlt, faUser, faWindowClose, faBookmark  } from "@fortawesome/free-regular-svg-icons";
import AppStore from "../../stores/AppStore";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from 'react';
import IUser from '../../models/IUser.model';
import { api } from "../../api/api";

export default function MenuUser() {

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState<string>("");
    const[user, setUser] = useState<IUser>();

    function doUserLogout() {
        AppStore.dispatch( { type: "auth.reset" } );
        navigate("/");
    }

    const loadUser = () => {
        api("get", "/api/user/" + AppStore.getState().auth.id)
        .then(res => {
            if (res.status !== "ok") {
                throw new Error("Could not load this user!");
            }

            return res.data;
        })
        .then(user => {
            setUser(user);
        })
        .catch(error => {
            setErrorMessage(error?.message ?? "Unknown error!");
        });
    }

    useEffect(() => {
        loadUser();
    },[]);


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4" >
            {errorMessage && <div className="alert alert-danger mb-3">{errorMessage}</div>}
            <Link className="navbar-brand ms-3" to="/">Hi, {user?.forename}&nbsp;{user?.surname}</Link>

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

                    <div className="nav-item nav-link" style={{ cursor: "pointer" }} onClick={ () => doUserLogout() }>
                        <FontAwesomeIcon icon={ faWindowClose } /> Logout
                    </div>
                </div>
            </div>
        </nav>
    )
}