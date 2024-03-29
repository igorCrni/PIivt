/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-throw-literal */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../api/api';
import { Config } from '../../config';
import IAd from '../../models/IAd.model';
import IUser from '../../models/IUser.model';
import IBrand from '../../models/IBrand.model';
import ICategory from '../../models/ICategory.model';
import IModel from '../../models/IModel.model';
import IAirCondition from '../../models/IAirConditionmodel';
import ICarBody from '../../models/ICarBody.model';
import IDamage from '../../models/IDamage.model';
import IDoors from '../../models/IDoors.model';
import IDrive from '../../models/IDrive.model';
import IEmissionClass from '../../models/IEmissionClass.model';
import IFuelType from '../../models/IFuelType.model';
import IInteriorMaterial from '../../models/IInteriorMaterial.model';
import IOrigin from '../../models/IOrigin.model';
import IReplacement from '../../models/IReplacement.model';
import ISeats from '../../models/ISeats.model';
import ISteeringWheelSide from '../../models/ISteeringWheelSide.model';
import ITransmission from '../../models/ITransmission.model';
import './adpreview.sass';

export interface IAdPreviewParams extends Record<string, string | undefined> {
    id: string
}
export default function AdPreview() {
    const params = useParams<IAdPreviewParams>();
    const aid = params.id;

    const[ errorMessage, setErrorMessage] = useState<string>("");
    const[ad , setAd] = useState <IAd>();

    function loadAd() {
        api("get", "/api/ad/" + aid )
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

    useEffect(loadAd, []);

    const [user, setUser] = useState<IUser>();
    const [category, setCategory] = useState<ICategory>();
    const [brand, setBrand] = useState<IBrand>();
    const [model, setModel] = useState<IModel>();
    const [fuel, setFuel] = useState<IFuelType>();
    const [drive, setDrive] = useState<IDrive>();
    const [transmission, setTransmission] = useState<ITransmission>();
    const [doors, setDoors] = useState<IDoors>();
    const [seats, setSeats] = useState<ISeats>();
    const [sws, setSws] = useState<ISteeringWheelSide>();
    const [airCondition, setAirCondition] = useState<IAirCondition>();
    const [damage, setDamage] = useState<IDamage>();
    const [origin, setOrigin] = useState<IOrigin>();
    const [ec, setEc] = useState<IEmissionClass>();
    const [im, setIm] = useState<IInteriorMaterial>();
    const [replacement, setReplacement] = useState<IReplacement>();
    const [carBody, setCarBody] = useState<ICarBody>();
    

    function loadUser(){
        api("get", "/api/user/" +ad?.userId)
        .then(res => {
            // if (res.status !== 'ok') {
            //     throw new Error("Coudl not load user");
            // }

            return res.data;
        })
        .then(user => {
            setUser(user);
        })
        .catch(error => {
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    }
    function loadCategory(){
        api("get", "/api/category/" +ad?.categoryId)
        .then(res => {
            // if (res.status !== 'ok') {
            //     throw new Error("Coudl not load category");
            // }

            return res.data;
        })
        .then(category => {
            setCategory(category);
        })
        .catch(error => {
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    }
    function loadBrand(){
        api("get", "/api/category/" +ad?.categoryId +"/brand/" +ad?.brandId)
        .then(res => {
            // if (res.status !== 'ok') {
            //     throw new Error("Coudl not load category");
            // }

            return res.data;
        })
        .then(brand => {
            setBrand(brand);
        })
        .catch(error => {
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    }
    function loadModel(){
        api("get", "/api/category/" +ad?.categoryId +"/brand/" +ad?.brandId+"/model/"+ad?.modelId)
        .then(res => {
            // if (res.status !== 'ok') {
            //     throw new Error("Coudl not load category");
            // }

            return res.data;
        })
        .then(model => {
            setModel(model);
        })
        .catch(error => {
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    }
    const loadFuel = () => {
        api("get", "/api/fuelType/" +ad?.fuelTypeId)
        .then(res=>{
            // if(res.status !== "ok"){
            //     throw {
            //         message: "Could not load fuel type!"
            //     }
            // }
            return res.data;
        })
        .then(fuel => {
            setFuel(fuel);
        })
        .catch(error=>{
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    };
    const loadDrive = () => {
        api("get", "/api/drive/" +ad?.driveId)
        .then(res=>{
            // if(res.status !== "ok"){
            //     throw {
            //         message: "Could not load drive!"
            //     }
            // }
            return res.data;
        })
        .then(drive => {
            setDrive(drive);
        })
        .catch(error=>{
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    };
    const loadTransmission = () => {
        api("get", "/api/transmission/" +ad?.transmissionId)
        .then(res=>{
            // if(res.status !== "ok"){
            //     throw {
            //         message: "Could not load transmission!"
            //     }
            // }
            return res.data;
        })
        .then(transmission => {
            setTransmission(transmission);
        })
        .catch(error=>{
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    };
    const loadDoors = () => {
        api("get", "/api/doors/" +ad?.doorsId)
        .then(res=>{
            // if(res.status !== "ok"){
            //     throw {
            //         message: "Could not load doors!"
            //     }
            // }
            return res.data;
        })
        .then(doors => {
            setDoors(doors);
        })
        .catch(error=>{
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    };
    const loadSeats = () => {
        api("get", "/api/seats/" +ad?.seatsId)
        .then(res=>{
            // if(res.status !== "ok"){
            //     throw {
            //         message: "Could not load seats!"
            //     }
            // }
            return res.data;
        })
        .then(seats => {
            setSeats(seats);
        })
        .catch(error=>{
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    };
    const loadSws = () => {
        api("get", "/api/steeringWheelSide/" +ad?.steeringWheelSideId)
        .then(res=>{
            // if(res.status !== "ok"){
            //     throw {
            //         message: "Could not load steering wheel side!"
            //     }
            // }
            return res.data;
        })
        .then(sws => {
            setSws(sws);
        })
        .catch(error=>{
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    };
    const loadAirCondition = () => {
        api("get", "/api/airCondition/" +ad?.airConditionId)
        .then(res=>{
            // if(res.status !== "ok"){
            //     throw {
            //         message: "Could not load air condition!"
            //     }
            // }
            return res.data;
        })
        .then(airCondition => {
            setAirCondition(airCondition);
        })
        .catch(error=>{
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    };
    const loadDamage = () => {
        api("get", "/api/damage/" +ad?.damageId)
        .then(res=>{
            // if(res.status !== "ok"){
            //     throw {
            //         message: "Could not load damage!"
            //     }
            // }
            return res.data;
        })
        .then(damage => {
            setDamage(damage);
        })
        .catch(error=>{
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    };
    const loadOrigin = () => {
        api("get", "/api/origin/" +ad?.originId)
        .then(res=>{
            // if(res.status !== "ok"){
            //     throw {
            //         message: "Could not load origin!"
            //     }
            // }
            return res.data;
        })
        .then(origin => {
            setOrigin(origin);
        })
        .catch(error=>{
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    };
    const loadEc = () => {
        api("get", "/api/emissionClass/" +ad?.emissionClassId)
        .then(res=>{
            // if(res.status !== "ok"){
            //     throw {
            //         message: "Could not load Emission class!"
            //     }
            // }
            return res.data;
        })
        .then(ec => {
            setEc(ec);
        })
        .catch(error=>{
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    };
    const loadIm = () => {
        api("get", "/api/interiorMaterial/" +ad?.interiorMaterialId)
        .then(res=>{
            // if(res.status !== "ok"){
            //     throw {
            //         message: "Could not load Interior material!"
            //     }
            // }
            return res.data;
        })
        .then(im => {
            setIm(im);
        })
        .catch(error=>{
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    };
    const loadReplacement = () => {
        api("get", "/api/replacement/" +ad?.replacementId)
        .then(res=>{
            // if(res.status !== "ok"){
            //     throw {
            //         message: "Could not load replacement !"
            //     }
            // }
            return res.data;
        })
        .then(replacement => {
            setReplacement(replacement);
        })
        .catch(error=>{
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    };
    const loadCarBody = () => {
        api("get", "/api/carBody/" +ad?.carBodyId)
        .then(res=>{
            // if(res.status !== "ok"){
            //     throw {
            //         message: "Could not load car body !"
            //     }
            // }
            return res.data;
            
            
        })
        .then(carBody => {
            setCarBody(carBody);
        })
        .catch(error=>{
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    };
    useEffect(() => {
        loadUser();
        loadCategory();
        loadBrand();
        loadModel();
        loadFuel();
        loadDrive();
        loadTransmission();
        loadDoors();
        loadSeats();
        loadSws();
        loadAirCondition();
        loadDamage();
        loadOrigin();
        loadEc();
        loadIm();
        loadReplacement();
        loadCarBody();
    },[ ad?.userId,
        ad?.categoryId,
        ad?.brandId,
        ad?.modelId,
        ad?.fuelTypeId,
        ad?.driveId,
        ad?.transmissionId,
        ad?.doorsId,
        ad?.seatsId,
        ad?.steeringWheelSideId,
        ad?.airConditionId,
        ad?.damageId,
        ad?.originId,
        ad?.emissionClassId,
        ad?.interiorMaterialId,
        ad?.replacementId,
        ad?.carBodyId
    ]); 

    const userName = user?.forename;
    const userSurName = user?.surname;
    const userPhone = user?.phoneNumber;


    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col col-lg-4">
                <img src={Config.API_PATH + "/assets/" + ad?.photos[0].filePath} 
                            alt={ad?.title}
                            className=""
                            style={{height:"250px", width:'400px'}} 
                        />
                </div>
            </div>
            <div className="row justify-content-md-center mt-2">
                <div className="col col-lg-3">
                    <span className='fw-bold'>Owner:</span>
                    <span> {userName} {userSurName}</span>
                    <br />
                    <span className='fw-bold'>Phone number:</span>
                    <a href={"tel:"+ userPhone} className='text-decoration-none'> {userPhone}</a>
                </div>
            </div>
            <hr className='mb-4 w-50 m-auto mt-3' />
            <div className="row justify-content-center">
                <div className="col col-md-3">
                    <span className='fw-bold'>Brand:</span>
                    <span className='ms-2'>{brand?.name}</span>
                </div>
                <div className="col col-md-2">
                    <span className='fw-bold'>Cub:</span>
                    <span className='ms-2'>{ad?.cm3} cm<sup>3</sup></span>
                </div>
            </div>
            <hr className='adhr' />
            <div className="row justify-content-center mt-2">
                <div className="col col-md-3 ">
                    <span className='fw-bold'>Year:</span>
                    <span className='ms-2'>{ad?.year}</span>
                </div>
                <div className="col col-md-2">
                    <span className='fw-bold'>Mileage:</span>
                    <span className='ms-2'>{ad?.mileage} km</span>
                </div>
            </div>
            <hr className='adhr' />
            <div className="row justify-content-center mt-2">
                <div className="col col-md-3">
                    <span className='fw-bold'>Car body:</span>
                    <span className='ms-2'>{carBody?.name}</span>
                </div>
                <div className="col col-md-2 ">
                    <span className='fw-bold'>Fuel:</span>
                    <span className='ms-2'>{fuel?.name}</span>
                </div>
            </div>
            <hr className='adhr' />
            <div className="row justify-content-center mt-2">
                <div className="col col-md-3">
                    <span className='fw-bold'>Cub:</span>
                    <span className='ms-2'>{ad?.cm3} cm<sup>3</sup></span>
                </div>
                <div className="col col-md-2 ">
                    <span className='fw-bold'>Power:</span>
                    <span className='ms-2'>{ad?.kw}/{ad?.ks} (KW/KS)</span>
                </div>
            </div>
            <hr className='adhr' />
            <div className="row justify-content-center mt-2">
                <div className="col col-md-3">
                    <span className='fw-bold'>Replacemnet:</span>
                    <span className='ms-2'>{replacement?.name}</span>
                </div>
                <div className="col col-md-2 ">
                    <span className='fw-bold'>Damage:</span>
                    <span className='ms-2'>{damage?.name}</span>
                </div>
            </div>

            <hr className='mb-4 w-50 m-auto mt-3' />

            <div className="row justify-content-center mt-2">
                <div className="col col-md-3">
                    <span className='fw-bold'>Emission class:</span>
                    <span className='ms-2'>{ec?.name}</span>
                </div>
                <div className="col col-md-2 ">
                    <span className='fw-bold'>Drive:</span>
                    <span className='ms-2'>{drive?.name}</span>
                </div>
            </div>
            <hr className='adhr' />
            <div className="row justify-content-center mt-2">
                <div className="col col-md-3">
                    <span className='fw-bold'>Transmission:</span>
                    <span className='ms-2'>{transmission?.name}</span>
                </div>
                <div className="col col-md-2 ">
                    <span className='fw-bold'>Number of doors:</span>
                    <span className='ms-2'>{doors?.name}</span>
                </div>
            </div>
            <hr className='adhr' />
            <div className="row justify-content-center mt-2">
                <div className="col col-md-3">
                    <span className='fw-bold'>Number of seats:</span>
                    <span className='ms-2'>{seats?.name}</span>
                </div>
                <div className="col col-md-2 ">
                    <span className='fw-bold'>Air condition:</span>
                    <span className='ms-2'>{airCondition?.name}</span>
                </div>
            </div>
            <hr className='adhr' />
            <div className="row justify-content-center mt-2">
                <div className="col col-md-3">
                    <span className='fw-bold'>Steering wheel side:</span>
                    <span className='ms-2'>{sws?.name}</span>
                </div>
                <div className="col col-md-2 ">
                    <span className='fw-bold'>Color:</span>
                    <span className='ms-2'>{ad?.color}</span>
                </div>
            </div>
            <hr className='adhr' />
            <div className="row justify-content-center mt-2">
                <div className="col col-md-3">
                    <span className='fw-bold'>Interior material:</span>
                    <span className='ms-2'>{im?.name}</span>
                </div>
                <div className="col col-md-2 ">
                    <span className='fw-bold'>Interior color:</span>
                    <span className='ms-2'>{ad?.interiorColor}</span>
                </div>
            </div>
            <hr className='adhr' />
            <div className="row justify-content-center mt-2">
                <div className="col col-md-3">
                    <span className='fw-bold'>Registration until:</span>
                    <span className='ms-2'>{ad?.registrationUntil}</span>
                </div>
                <div className="col col-md-2 ">
                    <span className='fw-bold'>Origin:</span>
                    <span className='ms-2'>{origin?.name}</span>
                </div>
            </div>

            <hr className='mb-4 w-50 m-auto mt-3' />

            <div className="row justify-content-center mt-2">
                <div className="col col-md-3">
                    <h4 className='text-center h3 mb-4'>Equipments</h4>
                </div>
            </div>
            <div className="row justify-content-center mt-2">
                <div className="col text-center">
                    {ad?.equipments.map(equipment => (
                        <span className='me-3'>{equipment.name}</span>
                    ))}
                </div>
            </div>

            <hr className='mb-4 w-50 m-auto mt-4' />

            <div className="row justify-content-center mt-2">
                <div className="col col-md-3">
                    <h4 className='text-center h3 mb-4'>Safety</h4>
                </div>
            </div>
            <div className="row justify-content-center mt-2">
                <div className="col text-center">
                    {ad?.safeties.map(safety => (
                        <span className='me-3'>{safety.name}</span>
                    ))}
                </div>
            </div>

            <hr className='mb-4 w-50 m-auto mt-4' />

            <div className='card w-75 m-auto' style={{borderRadius: '15px', boxShadow:'2.5px 5px 5px #cccc'}}>
                    <div className='card-title text-center mt-4'>
                        <h4>Description</h4>
                    </div>
                <div className='card-body'>
                    <div className='card-text'>
                        <p style={{minHeight: "4rem",marginLeft:'20px'}}>{ad?.description}</p>
                    </div>
                </div>
            </div>

            <hr className='mb-4 m-auto mt-4' />
        </div>
    );
}