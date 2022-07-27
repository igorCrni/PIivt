import { faFileImage, faSquareMinus } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { api, apiForm } from "../../../api/api";
import { Config } from "../../../config";
import IPhoto from '../../../models/IPhoto.model';

interface IUserAdPhotosProperties {
    id: number;
    aId: number;
}

export default function UserAdPhotos(props: IUserAdPhotosProperties) {
    const [ errorMessage, setErrorMessage ] = useState<string>("");
    const [ photos, setPhotos ] = useState<IPhoto[]>([]);

    const reload = () => {
        api("get", "/api/user/" + props.id + "/ad/" + props.aId)
        .then(res => {
            if (res.status !== "ok") {
                throw new Error("Could not load this ad details!");
            }

            return res.data;
        })
        .then(ad => {
            setPhotos(ad.photos);
        })
        .catch(error => {
            setErrorMessage(error?.message ?? "Unknown error!");
        });
    };

    useEffect(() => {
        reload();
    }, [ ]);

    const fileInputRef = React.createRef<HTMLInputElement>();

    function uploadPhoto() {
        setErrorMessage('');

        if (!fileInputRef.current?.files?.length) {
            return setErrorMessage('You must select a file to upload!');
        }

        const data = new FormData();
        data.append("image", fileInputRef.current?.files[0]);
        apiForm("post", "/api/user/" + props.id + "/ad/" + props.aId + "/photo", data)
        .then(res => {
            if (res.status !== "ok") {
                throw new Error("Could not upload ad photo!");
            }
        })
        .then(() => {
            setErrorMessage('');
            reload();

            (fileInputRef.current as HTMLInputElement).value = '';
        })
        .catch(error => {
            setErrorMessage(error?.message ?? "Error uploading file!");
        });
    }

    function removePhoto(photoId: number) {
        api("delete", "/api/user/" + props.id + "/ad/" + props.aId + "/photo/" + photoId)
        .then(res => {
            if (res.status !== "ok") {
                throw new Error("Could not remove ad photo!");
            }
        })
        .then(() => {
            setErrorMessage('');
            reload();
        })
        .catch(error => {
            setErrorMessage(error?.message ?? "Error removing file!");
        });
    }

    return (
        <>
            { errorMessage && <p className="alert alert-danger">{ errorMessage }</p> }

            <div className="photos row mb-4">
                { photos.map(photo => (
                    <div key={ photo.photoId } className="col col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img className="card-img-top" src={ Config.API_PATH + "/assets/" + photo.filePath } alt={ photo.name } />

                            <div className="card-body">
                                <div className="card-text">
                                    <div className="d-grid">
                                        <button className="btn btn-danger w-100"
                                            onClick={ () => removePhoto( photo.photoId )}>
                                            <FontAwesomeIcon icon={ faSquareMinus } /> Remove
                                        </button>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                )) }
            </div>

            <div className="row">
                <div className="form-group">
                    <div className="input-group">
                        <input type="file" className="form-control" ref={ fileInputRef } accept=".png,.jpg" multiple={ false } />

                        <button className="btn btn-primary input-group-btn"
                            onClick={ () => uploadPhoto() }>
                            <FontAwesomeIcon icon={ faFileImage } /> Upload
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
