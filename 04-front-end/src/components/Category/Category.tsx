/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-throw-literal */
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import IBrand from '../../models/IBrand.model';
import { api } from '../../api/api';
import IAd from '../../models/IAd.model';
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Config } from '../../config';
import { motion } from 'framer-motion';

export interface ICategoryUrlParams  extends Record<string, string | undefined>{
    cid: string
}

export default function Category() {
    const[brands , setBrands] = useState <IBrand[]>([]);
    const[ads , setAds] = useState <IAd[]>([]);
    const[ errorMessage, setErrorMessage] = useState<string>("");

    
    let params = useParams<ICategoryUrlParams>();

    const loadBrand = () => {
        api("get", "/api/category/" + params.cid + "/brand")
        .then(res=>{
            if(res.status !== "ok"){
                throw {
                    message: "Could not load brand!"
                }
            }
            return res.data;
        })
        .then(brands => {
            setBrands(brands);
        })
        .catch(error=>{
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    };
    const loadAds = () => {
        api("get", "/api/category/" + params.cid + "/ad")
        .then(res=>{
            if(res.status !== "ok"){
                throw {
                    message: "Could not load ads!"
                }
            }
            return res.data;
        })
        .then(ads => {
            setAds(ads);
        })
        .catch(error=>{
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    };

    useEffect(() => {
        loadBrand();
        loadAds();
    },[params.cid]);
    
    return(
        <div>
            { errorMessage && <p>Error: {errorMessage}</p>}
            <div className='card w-50' style={{margin:'0 auto'}}>
                <div className='card-body'>
                    <div className='card-title text-center'>
                        <h3 className='h4'>Search ads</h3>
                    </div>
                    <div className='card-text text-center'>
                        <h6>Brands:</h6>
                        {brands.map(brand=> (
                            <Link className='btn btn-primary me-2' to={'/search/category/'+params.cid+'/brand/'+brand.brandId}>{brand.name}</Link>
                        ))}
                    </div>
                </div>
            </div>
            <motion.div
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
                delay: 0.15,
            }}
            >
                <h3>Result for all categories</h3>
            {ads.map(ad=>(      
                <Link to={"/ad/"+ ad.adId} key={ad.adId} style={{textDecoration:"none", color:"black"}}>                  
                    <div className="card d-inline-block me-3 mt-5" style={{width:"13.8rem", height:"180px", boxShadow:"5px 10px 15px #BEBEBE"}}>
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
    )
}