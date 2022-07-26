/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-throw-literal */
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import IBrand from '../../../models/IBrand.model';
import { api } from '../../../api/api';

export interface IUserAdAddForCategoryParams extends Record<string, string | undefined> {
    uid: string
    cid: string
}

export default function UserAdAddForCategory() {
    const params = useParams<IUserAdAddForCategoryParams>();
    const userId = params.uid;
    const categoryId = params.cid;

    const [errorMessage, setErrorMessage] = useState<string>("");
    const [brand, setBrand] = useState<IBrand[]>([]);

    const loadBrand = () => {
        api("get", "/api/category/" + categoryId + "/brand")
        .then(res=>{
            if(res.status !== "ok"){
                throw {
                    message: "Could not load brand!"
                }
            }
            return res.data;
        })
        .then(brand => {
            setBrand(brand);
        })
        .catch(error=>{
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    };

    useEffect(() => {
        loadBrand();
    },[]);


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
                                {brand.map(brand => (
                                    <div className='d-inline p-2'>
                                        <Link className="btn btn-primary mb-3" to={"/user/"+ userId +"/category/" + categoryId + "/brand/"+ brand.brandId +"/ad/add"}> {brand.name}</Link>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}