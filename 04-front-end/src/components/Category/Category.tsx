/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-throw-literal */
import { useState, useEffect } from 'react';
import ICategory from '../../models/ICategory.model';
import { useParams } from 'react-router-dom';
import IBrand from '../../models/IBrand.model';
import { api } from '../../api/api';
import BrandPreview from '../Brand/BrandPreview';

export interface ICategoryUrlParams  extends Record<string, string | undefined>{
    id: string
}

export default function Category() {
    const[ category, setCategory] = useState<ICategory | null>(null);
    const[brands , setBrands] = useState <IBrand[]>([]);
    const[ errorMessage, setErrorMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    
    let params = useParams<ICategoryUrlParams>();

    useEffect(() => {
        setLoading(true);

        api("get", "/api/category/" + params.id, "user")
        .then(res => {
            if(res.status === "error"){
                throw {
                    message: 'Could not get category data!',
                }
            }
            setCategory(res.data);
        })
        .then(() => {
            return api("get", "/api/category/" + params.id +"/brand","user")
        })
        .then(res=> {
            if(res.status === "error"){
                throw {
                    message: 'Could not get category brands!',
                }
            }
            setBrands(res.data);
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

            {category && (
                <div className='mb-4'>
                    <h1>{category?.name}</h1>

                    {brands && (
                        <div className='text-center'>
                            {brands.map (brand => <BrandPreview key={"brand-" + brand.brandId} brand={brand}/>)}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}