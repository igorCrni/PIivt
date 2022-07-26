/* eslint-disable no-throw-literal */
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import ICategory from '../../../models/ICategory.model';
import { api } from '../../../api/api';
import IUser from "../../../models/IUser.model";
import AppStore from "../../../stores/AppStore";

export default function UserAdAdd(){
    const [ user, setUser ] = useState<IUser>();
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [category, setCategory] = useState<ICategory[]>([]);

    const loadCategory = () => {
        api("get", "/api/category/")
        .then(res => {
            if (res.status !== "ok") {
                throw new Error("Could not load this category!");
            }

            return res.data;
        })
        .then(category => {
            setCategory(category);
        })
        .catch(error => {
            setErrorMessage(error?.message ?? "Unknown error!");
        });
    };

    function loadUserData() {
        api("get", "/api/user/" + AppStore.getState().auth.id, "user")
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

        });
    };

    useEffect(() => {
        loadCategory();
        loadUserData();
    },[])

    return(
        <div>
            <div className="card text-center">
                <div className="card-body">
                    <div className="card-title mb-5">
                        <h1>Add ad</h1>
                    </div>
                    <div className="card-text">
                        {errorMessage && <div className="alert alert-danger mb-3">{errorMessage}</div>}
                        <div className="form-group mb-3">
                                <div>{category?.map(category => (
                                <div className="d-inline p-3">
                                    <Link className="btn btn-primary mb-3" to={"/user/"+ user?.userId +"/category/" + category.categoryId + "/ad/add"}> {category.name}</Link>
                                </div>
                            ))}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}