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
        <div className='container'>
            <div className='card w-100' style={{margin:'0 auto'}}>
                <div className='card-title text-center'>
                    <h1>{ad?.title}</h1>
                </div>
                <div className='card-body'>
                    { errorMessage && <p>Error: {errorMessage}</p>}
                    <div className='card-text'>
                        <img src={Config.API_PATH + "/assets/" + ad?.photos[0].filePath} 
                            alt={ad?.title}
                            className="card-img-top"
                            style={{height:"250px", width:'400px', marginLeft:'30%'}} 
                        />
                        <div>
                        <p>Owner: {userName} {userSurName}</p>
                        <a href={"tel:"+ userPhone} className='text-decoration-none'>{userPhone}</a>
                        </div>
                        <hr />
                        
                        <div className='card w-75 m-auto' style={{borderRadius: '15px', boxShadow:'2.5px 5px 5px #cccc'}}>
                            <div className='card-body'>
                                <div style={{marginLeft:'15%'}}>
                                    <div className='d-table-cell' style={{width:'50%'}}>
                                        <div className='row'>
                                            <div className='row'>
                                                <div className='col d-inline-flex'>
                                                    <p>Brand: &nbsp;  </p>
                                                    <p className='fw-bold'>{brand?.name}</p>
                                                </div>
                                            </div>
                                            <hr className='w-75' />
                                            <div className='row'>
                                                <div className='col d-inline-flex'>
                                                    <p>Model: &nbsp; </p>
                                                    <p className='fw-bold'>{model?.name}</p>
                                                </div>
                                            </div>
                                            <hr className='w-75' />
                                            <div className='row'>
                                                <div className='col d-inline-flex'>
                                                    <p>Year: &nbsp; </p>
                                                    <p className='fw-bold'>{ad?.year}</p>
                                                </div>
                                            </div>
                                            <hr className='w-75' />
                                            <div className='row'>
                                                <div className='col d-inline-flex'>
                                                    <p>Mileage: &nbsp;</p>
                                                    <p className='fw-bold'>{ad?.mileage} km</p>
                                                </div>
                                            </div>
                                            <hr className='w-75' />
                                            <div className='row'>
                                                <div className='col d-inline-flex'>
                                                    <p>Car body: &nbsp;</p>
                                                    <p className='fw-bold'>{carBody?.name}</p>
                                                </div>
                                            </div>
                                            <hr className='w-75' />
                                            <div className='row'>
                                                <div className='col d-inline-flex'>
                                                    <p>Fuel: &nbsp;</p>
                                                    <p className='fw-bold'>{fuel?.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='d-table-cell'>
                                        <div className='row'>
                                            <div className='row'>
                                                <div className='col d-inline-flex'>
                                                    <p>Cub: &nbsp;  </p>
                                                    <p className='fw-bold'>{ad?.cm3} cm<sup>3</sup></p>
                                                </div>
                                            </div>
                                            <hr className='w-75' />
                                            <div className='row'>
                                                <div className='col d-inline-flex'>
                                                    <p>Power: &nbsp; </p>
                                                    <p className='fw-bold'>{ad?.kw}/{ad?.ks} (KW/KS)</p>
                                                </div>
                                            </div>
                                            <hr className='w-75' />
                                            <div className='row'>
                                                <div className='col d-inline-flex'>
                                                    <p>Replacemnet: &nbsp; </p>
                                                    <p className='fw-bold'>{replacement?.name}</p>
                                                </div>
                                            </div>
                                            <hr className='w-75' />
                                            <div className='row'>
                                                <div className='col d-inline-flex'>
                                                    <p>Damage: &nbsp; </p>
                                                    <p className='fw-bold'>{damage?.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='card w-75 m-auto' style={{borderRadius: '15px', boxShadow:'2.5px 5px 5px #cccc'}}>
                            <div className='card-body'>
                                <div style={{marginLeft:'15%'}}>
                                    <div className='d-table-cell' style={{width:'50%'}}>
                                        <div className='row'>
                                            <div className='row'>
                                                <div className='col d-inline-flex'>
                                                    <p>Emission class: &nbsp;  </p>
                                                    <p className='fw-bold'>{ec?.name}</p>
                                                </div>
                                            </div>
                                            <hr className='w-75' />
                                            <div className='row'>
                                                <div className='col d-inline-flex'>
                                                    <p>Drive: &nbsp; </p>
                                                    <p className='fw-bold'>{drive?.name}</p>
                                                </div>
                                            </div>
                                            <hr className='w-75' />
                                            <div className='row'>
                                                <div className='col d-inline-flex'>
                                                    <p>Transmission: &nbsp; </p>
                                                    <p className='fw-bold'>{transmission?.name}</p>
                                                </div>
                                            </div>
                                            <hr className='w-75' />
                                            <div className='row'>
                                                <div className='col d-inline-flex'>
                                                    <p>Number of doors: &nbsp;</p>
                                                    <p className='fw-bold'>{doors?.name}</p>
                                                </div>
                                            </div>
                                            <hr className='w-75' />
                                            <div className='row'>
                                                <div className='col d-inline-flex'>
                                                    <p>Number of seats: &nbsp;</p>
                                                    <p className='fw-bold'>{seats?.name}</p>
                                                </div>
                                            </div>
                                            <hr className='w-75' />
                                            <div className='row'>
                                                <div className='col d-inline-flex'>
                                                    <p>Steering wheel side:&nbsp;</p>
                                                    <p className='fw-bold'>{sws?.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-table-cell'>
                                        <div className='row'>
                                            <div className='row'>
                                                <div className='col d-inline-flex'>
                                                    <p>Air condition: &nbsp;  </p>
                                                    <p className='fw-bold'>{airCondition?.name}</p>
                                                </div>
                                            </div>
                                            <hr className='w-75' />
                                            <div className='row'>
                                                <div className='col d-inline-flex'>
                                                    <p>Color: &nbsp; </p>
                                                    <p className='fw-bold'>{ad?.color}</p>
                                                </div>
                                            </div>
                                            <hr className='w-75' />
                                            <div className='row'>
                                                <div className='col d-inline-flex'>
                                                    <p>Interior material: &nbsp; </p>
                                                    <p className='fw-bold'>{im?.name}</p>
                                                </div>
                                            </div>
                                            <hr className='w-75' />
                                            <div className='row'>
                                                <div className='col d-inline-flex'>
                                                    <p>Interior color: &nbsp; </p>
                                                    <p className='fw-bold'>{ad?.interiorColor}</p>
                                                </div>
                                            </div>
                                            <hr className='w-75' />
                                            <div className='row'>
                                                <div className='col d-inline-flex'>
                                                    <p>Registration until: &nbsp;</p>
                                                    <p className='fw-bold'>{ad?.registrationUntil}</p>
                                                </div>
                                            </div>
                                            <hr className='w-75' />
                                            <div className='row'>
                                                <div className='col d-inline-flex'>
                                                    <p>Origin: &nbsp;</p>
                                                    <p className='fw-bold'>{origin?.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='d-inline'>
                            <div className='card w-75 m-auto' style={{borderRadius: '15px', boxShadow:'2.5px 5px 5px #cccc'}}>
                                    <div className='card-title text-center mt-4'>
                                        <h4>Equipments</h4>
                                    </div>
                                <div className='card-body'>
                                    <div className='card-text'>
                                        <div className='d-inline-flex' style={{width:'75%', marginLeft:'80px'}}>
                                            {ad?.equipments.map(equipment => (
                                                <p className='me-3'>{equipment.name}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <hr />
                        <div className='d-inline'>
                            <div className='card w-75 m-auto' style={{borderRadius: '15px', boxShadow:'2.5px 5px 5px #cccc'}}>
                                    <div className='card-title text-center mt-4'>
                                        <h4>Safety</h4>
                                    </div>
                                <div className='card-body'>
                                    <div className='card-text'>
                                        <div className='d-inline-flex' style={{width:'75%', marginLeft:'80px'}}>
                                            {ad?.safeties.map(safety => (
                                                <p className='me-3'>{safety.name}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
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
                    </div>
                </div>
            </div>
        </div>
    );
}