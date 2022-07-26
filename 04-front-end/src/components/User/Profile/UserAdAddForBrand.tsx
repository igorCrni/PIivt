/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-throw-literal */
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../../../api/api';
import IModel from '../../../models/IModel.model';

export interface IUserAdAddForCategoryParams extends Record<string, string | undefined> {
    uid: string
    cid: string
    bid: string
}

export default function UserAdAddForBrand() {
    const params = useParams<IUserAdAddForCategoryParams>();
    const userId = params.uid;
    const categoryId = params.cid;
    const brandId = params.bid;

    const [errorMessage, setErrorMessage] = useState<string>("");
    const [model, setModel] = useState<IModel[]>([]);

    const loadModel = () => {
        api("get", "/api/category/" + categoryId + "/brand/" + brandId + "/model")
        .then(res=>{
            if(res.status !== "ok"){
                throw {
                    message: "Could not load model!"
                }
            }
            return res.data;
        })
        .then(model => {
            setModel(model);
        })
        .catch(error=>{
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    };

    useEffect(() => {
        loadModel();
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
                                {model.map(model => (
                                    <div className='d-inline p-2'>
                                        <Link className="btn btn-primary mb-3" to={"/user/"+ userId +"/category/" + categoryId + "/brand/"+ brandId + "/model/" + model.modelId +"/ad/add"}> {model.name}</Link>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}