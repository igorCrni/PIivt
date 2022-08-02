/* eslint-disable no-throw-literal */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ICategory from '../../models/ICategory.model';
import { api } from '../../api/api';

export default function Search() {
    const [ categories, setCategories] = useState<ICategory[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>("");

    useEffect(() => {
        api("get", "/api/category","user")
        .then(apiResonse => {
            if(apiResonse.status === "ok") {
                return setCategories(apiResonse.data);
            }

            throw{
                message: 'Unknown error while loading categories...',
            }
        })
        .catch(error => {
            setErrorMessage(error?.message ?? 'Unknown error while loading categories...');
        });
    }, []);

    return (
        <div className='text-center'>
            {errorMessage && <p>Error: {errorMessage}</p>}
            <h3 className='mb-5'>Search</h3>
                    {categories.map(category => (
                        <Link className='btn btn-primary' to={"/search/category/" + category.categoryId}>{category.name}</Link>
                        
                    ))}
            
        </div>
    )
}