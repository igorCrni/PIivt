/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { api } from "../../../api/api";
import IUser from "../../../models/IUser.model";
import AppStore from "../../../stores/AppStore";
import UserDetailsEditor from "./UserDetailsEditor";
import IAd from '../../../models/IAd.model';
import { Config } from "../../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function UserProfile() {
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [ user, setUser ] = useState<IUser>();
    const [ ad, setAd ] = useState<IAd[]>([]);

    function loadUserData() {
        api("get", "/api/user/" + AppStore.getState().auth.id)
        .then(res => {
            if (res.status !== 'ok') {
                throw new Error("Coudl not fetch this data. Reason: " + JSON.stringify(res.data));
            }

            return res.data;
        })
        .then(user => {
            setUser(user);
        })
        .catch(error => {
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    };

    function loadAd() {
        api("get", "/api/user/" + AppStore.getState().auth.id +"/ad", )
        .then(res => {
            if (res.status !== 'ok') {
                throw new Error("Coudl not load ad");
            }

            return res.data;
        })
        .then(ad => {
            setAd(ad);
        })
        .catch(error => {
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    };


    useEffect(() => {
        loadUserData();
        loadAd();
    },[]);

    return (
        <div className="card">
            <div className="card-body">
                <div className="card-title mb-3">
                    <h1 className="h5">My profile</h1>
                </div>
                <div className="card-text">
                    {errorMessage && <div className="alert alert-danger mb-3">{errorMessage}</div>}
                    <div className="row mb-4">
                        <div className="col col-12 col-lg-6">
                            { user && <UserDetailsEditor   user={ user } onDataChanged={ user => setUser(user) } /> }
                        </div>
                        <motion.div className="col col-12 col-lg-6" 
                                initial={{
                                position: "relative",
                                top: 20,
                                scale: 0.75,
                                opacity: 0,
                            }}
                            animate={{
                                top: 0,
                                scale: 1,
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.25,
                            }}>
                            {ad.map(ad => (
                                <Link to={"/user/"+user?.userId+"/ad/edit/"+ad.adId} style={{textDecoration:"none", color:"black"}}>
                                    <div className="card d-inline-block me-3 mt-2" style={{width:"13.8rem", height:"180px", boxShadow:"5px 10px 15px #808080"}}>
                                        <div className="card-body">
                                            <div className="card-title mb-3">
                                                <h1 className="h6">{ad.title}</h1>
                                            </div>
                                            <div className="card-text">
                                                <img src={Config.API_PATH + "/assets/" + ad.photos[0].filePath} 
                                                    alt={ad.title}
                                                    className="card-img-top"
                                                    style={{height:"90px"}} 
                                                />
                                                <div className="row mt-2">
                                                    <div className="col-sm-6 fw-bold ">{ad.price} <FontAwesomeIcon icon={faEuroSign}/></div>
                                                    <div className="col-sm-6 fw-light" style={{fontSize:"13px"}}>{ad.year}&nbsp;.year</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );

    
}