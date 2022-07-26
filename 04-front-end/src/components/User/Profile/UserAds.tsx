/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-throw-literal */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../../api/api';
import IAd from '../../../models/IAd.model';
import IUser from '../../../models/IUser.model';

export interface IUserUrlParams  extends Record<string, string | undefined>{
    id: string
}

export default function UserAds() {
    const[ user, setUser] = useState<IUser | null>(null);
    const[ ads, setAd] = useState<IAd[]>([]);
    const[ errorMessage, setErrorMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    
    let params = useParams<IUserUrlParams>();

    useEffect(() => {
        setLoading(true);

        api("get", "/api/user/" + params.id, "user")
        .then(res => {
            if(res.status === "error"){
                throw {
                    message: 'Could not get user data!',
                }
            }
            setUser(res.data);
        })
        .then(() => {
            return api("get", "/api/user/" + params.id +"/ad","user")
        })
        .then(res=> {
            if(res.status === "error"){
                throw {
                    message: 'Could not get user ads!',
                }
            }
            setAd(res.data);
        })
        .catch(error => {
            setErrorMessage(error?.message ?? 'Unknown error while loading this category!');
        })
        .finally(() => {
            setLoading(false);
        });
    },[]);

    return(
        <div>
            {loading && <p>Loading...</p>}
            { errorMessage && <p>Error: {errorMessage}</p>}

            {user && (
                <div>
                    <h1>{user?.forename}<br/>{user?.surname}</h1>

                    {ads && (
                        <div className='display-inline-block'>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}