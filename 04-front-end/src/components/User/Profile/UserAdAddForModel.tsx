/* eslint-disable rest-spread-spacing */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-throw-literal */
import { useState, useEffect, useReducer } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api, apiForm } from '../../../api/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons';
import IEquipment from '../../../models/IEquipment.model';
import IFuelType from '../../../models/IFuelType.model';
import IDrive from '../../../models/IDrive.model';
import ITransmission from '../../../models/ITransmission.model';
import IDoors from '../../../models/IDoors.model';
import ISeats from '../../../models/ISeats.model';
import ISteeringWheelSide from '../../../models/ISteeringWheelSide.model';
import IAirCondition from '../../../models/IAirConditionmodel';
import IDamage from '../../../models/IDamage.model';
import IOrigin from '../../../models/IOrigin.model';
import ISafety from '../../../models/ISafety.model';
import IVehicleCondition from '../../../models/IVehicleCondition.model';
import IEmissionClass from '../../../models/IEmissionClass.model';
import IInteriorMaterial from '../../../models/IInteriorMaterial.model';
import IReplacement from '../../../models/IReplacement.model';
import ICarBody from '../../../models/ICarBody.model';

export interface IUserAdAddForModelParams extends Record<string, string | undefined> {
    uid: string
    cid: string
    bid: string
    mid: string
}

interface IAddAdFormState {
    title: string;
    price: number;
    year: string;
    cm3: string;
    kw: string;
    ks: string;
    mileage: string;
    color: string;
    interiorColor: string;
    registrationUntil:string;
    description: string;
    carBodyId:number;
    equipmentIds: number[];
    fuelTypeId:number;
    driveId:number;
    transmissionId: number;
    doorsId:number;
    seatsId:number;
    steeringWheelSideId:number;
    airConditionId: number;
    damageId:number;
    originId: number;
    safetyIds:number[];
    vehicleConditionIds:number[];
    emissionClassId:number;
    interiorMaterialId:number;
    replacementId:number;
};

type TSetTitle = {type: "addAdForm/setTitle", value: string};
type TSetPrice = {type: "addAdForm/setPrice", value: number};
type TSetYear = {type: "addAdForm/setYear", value: string};
type TSetCm3 = {type: "addAdForm/setCm3", value: string};
type TSetKw = {type: "addAdForm/setKw", value: string};
type TSetKs = {type: "addAdForm/setKs", value: string};
type TSetMileage = {type: "addAdForm/setMileage", value: string};
type TSetColor = {type: "addAdForm/setColor", value: string};
type TSetInteriorColor = {type: "addAdForm/setInteriorColor", value: string};
type TSetRegistrationUntil = {type: "addAdForm/setRegistrationUntil", value: string};
type TSetDescription   = { type: "addAdForm/setDescription",   value: string };
type TAddCarBody   = { type: "addAdForm/addCarBody",   value: number };
type TAddEquipment    = { type: "addAdForm/addEquipment",    value: number };
type TRemoveEquipment = { type: "addAdForm/removeEquipment", value: number };
type TAddFuelType   = { type: "addAdForm/addFuelType",   value: number };
type TAddDrive   = { type: "addAdForm/addDrive",   value: number };
type TAddTransmission  = { type: "addAdForm/addTransmission",   value: number };
type TAddDoors  = { type: "addAdForm/addDoors",   value: number };
type TAddSeats  = { type: "addAdForm/addSeats",   value: number };
type TAddSteeringWheelSide  = { type: "addAdForm/addSteeringWheelSide",   value: number };
type TAddAirCondition  = { type: "addAdForm/addAirCondition",   value: number };
type TAddDamage  = { type: "addAdForm/addDamage",   value: number };
type TAddOrigin  = { type: "addAdForm/addOrigin",   value: number };
type TAddSafety  = { type: "addAdForm/addSafety",   value: number };
type TRemoveSafety = { type: "addAdForm/removeSafety", value: number };
type TAddVehicleCondition  = { type: "addAdForm/addVehicleCondition",   value: number };
type TRemoveVehicleCondition  = { type: "addAdForm/removeVehicleCondition",   value: number };
type TAddEmissionClass  = { type: "addAdForm/addEmissionClass",   value: number };
type TAddInteriorMaterial  = { type: "addAdForm/addInteriorMaterial",   value: number };
type TAddReplacement  = { type: "addAdForm/addReplacement",   value: number };

type AddAdFormAction = TSetTitle 
                     | TSetPrice 
                     | TSetYear
                     | TSetCm3
                     | TSetKw
                     | TSetKs
                     | TSetMileage
                     | TSetColor
                     | TSetInteriorColor
                     | TSetRegistrationUntil
                     | TSetDescription
                     | TAddCarBody
                     | TAddEquipment 
                     | TRemoveEquipment
                     | TAddFuelType
                     | TAddDrive
                     | TAddTransmission
                     | TAddDoors
                     | TAddSeats
                     | TAddSteeringWheelSide
                     | TAddAirCondition
                     | TAddDamage
                     | TAddOrigin
                     | TAddSafety
                     | TRemoveSafety
                     | TAddVehicleCondition
                     | TRemoveVehicleCondition
                     | TAddEmissionClass
                     | TAddInteriorMaterial
                     | TAddReplacement ;

function AddAdFormReducer(oldState: IAddAdFormState, action: AddAdFormAction): IAddAdFormState {
    switch(action.type){
        case "addAdForm/setTitle": {
            return {
                ...oldState,
                equipmentIds: [ ...oldState.equipmentIds ],
                safetyIds: [ ...oldState.safetyIds ],
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ],
                // This changes:
                title: action.value,
            }
        }

        case "addAdForm/setPrice": {
            return {
                ...oldState,
                equipmentIds: [ ...oldState.equipmentIds ],
                safetyIds: [ ...oldState.safetyIds ],
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ],
                // This changes:
                price: action.value,
            }
        }

        case "addAdForm/setYear": {
            return {
                ...oldState,
                equipmentIds: [ ...oldState.equipmentIds ],
                safetyIds: [ ...oldState.safetyIds ],
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ],
                // This changes:
                year: action.value,
            }
        }

        case "addAdForm/setCm3": {
            return {
                ...oldState,
                equipmentIds: [ ...oldState.equipmentIds ],
                safetyIds: [ ...oldState.safetyIds ],
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ],
                // This changes:
                cm3: action.value,
            }
        }

        case "addAdForm/setKw": {
            return {
                ...oldState,
                equipmentIds: [ ...oldState.equipmentIds ],
                safetyIds: [ ...oldState.safetyIds ],
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ],
                // This changes:
                kw: action.value,
            }
        }

        case "addAdForm/setKs": {
            return {
                ...oldState,
                equipmentIds: [ ...oldState.equipmentIds ],
                safetyIds: [ ...oldState.safetyIds ],
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ],
                // This changes:
                ks: action.value,
            }
        }

        case "addAdForm/setMileage": {
            return {
                ...oldState,
                equipmentIds: [ ...oldState.equipmentIds ],
                safetyIds: [ ...oldState.safetyIds ],
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ],
                // This changes:
                mileage: action.value,
            }
        }

        case "addAdForm/setColor": {
            return {
                ...oldState,
                equipmentIds: [ ...oldState.equipmentIds ],
                safetyIds: [ ...oldState.safetyIds ],
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ],
                // This changes:
                color: action.value,
            }
        }

        case "addAdForm/setInteriorColor": {
            return {
                ...oldState,
                equipmentIds: [ ...oldState.equipmentIds ],
                safetyIds: [ ...oldState.safetyIds ],
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ],
                // This changes:
                interiorColor: action.value,
            }
        }

        case "addAdForm/setRegistrationUntil": {
            return {
                ...oldState,
                equipmentIds: [ ...oldState.equipmentIds ],
                safetyIds: [ ...oldState.safetyIds ],
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ],
                // This changes:
                registrationUntil: action.value,
            }
        }

        case "addAdForm/setDescription": {
            return {
                ...oldState,
                equipmentIds: [ ...oldState.equipmentIds ],
                safetyIds: [ ...oldState.safetyIds ],
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ],
                // This changes:
                description: action.value,
            }
        }

        case "addAdForm/addCarBody": {
            return {
                ...oldState,
                equipmentIds: [ ...oldState.equipmentIds ],
                safetyIds: [ ...oldState.safetyIds ],
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ],
                // This changes:
                carBodyId: action.value,
            }
        }
        
        case "addAdForm/addEquipment":{
            if (oldState.equipmentIds.includes(action.value)) {
                return oldState;
            }
            
            return {
                ... oldState,
                safetyIds: [ ...oldState.safetyIds ],
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ],
                
                equipmentIds:[... oldState.equipmentIds, action.value],
                
            }
        }

        case "addAdForm/removeEquipment": {
            if (!oldState.equipmentIds.includes(action.value)) {
                return oldState;
            }

            return {
                ...oldState,
                safetyIds: [ ...oldState.safetyIds ],
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ],
                // This changes:
                equipmentIds: [ ...oldState.equipmentIds ].filter( equipment => equipment !== action.value ),
            }
        }

        case "addAdForm/addFuelType": {
            return {
                ...oldState,
                equipmentIds: [ ...oldState.equipmentIds ],
                safetyIds: [ ...oldState.safetyIds ],
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ],
                // This changes:
                fuelTypeId: action.value,
            }
        }

        case "addAdForm/addDrive": {
            return {
                ...oldState,
                equipmentIds: [ ...oldState.equipmentIds ],
                safetyIds: [ ...oldState.safetyIds ],
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ],
                // This changes:
                driveId: action.value,
            }
        }

        case "addAdForm/addTransmission": {
            return {
                ...oldState,
                equipmentIds: [ ...oldState.equipmentIds ],
                safetyIds: [ ...oldState.safetyIds ],
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ],
                // This changes:
                transmissionId: action.value,
            }
        }

        case "addAdForm/addDoors": {
            return {
                ...oldState,
                equipmentIds: [ ...oldState.equipmentIds ],
                safetyIds: [ ...oldState.safetyIds ],
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ],
                // This changes:
                doorsId: action.value,
            }
        }

        case "addAdForm/addSeats": {
            return {
                ...oldState,
                equipmentIds: [ ...oldState.equipmentIds ],
                safetyIds: [ ...oldState.safetyIds ],
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ],
                // This changes:
                seatsId: action.value,
            }
        }

        case "addAdForm/addSteeringWheelSide": {
            return {
                ...oldState,
                equipmentIds: [ ...oldState.equipmentIds ],
                safetyIds: [ ...oldState.safetyIds ],
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ],
                // This changes:
                steeringWheelSideId: action.value,
            }
        }

        case "addAdForm/addAirCondition": {
            return {
                ...oldState,
                equipmentIds: [ ...oldState.equipmentIds ],
                safetyIds: [ ...oldState.safetyIds ],
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ],
                // This changes:
                airConditionId: action.value,
            }
        }

        case "addAdForm/addDamage": {
            return {
                ...oldState,
                equipmentIds: [ ...oldState.equipmentIds ],
                safetyIds: [ ...oldState.safetyIds ],
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ],
                // This changes:
                damageId: action.value,
            }
        }

        case "addAdForm/addOrigin": {
            return {
                ...oldState,
                equipmentIds: [ ...oldState.equipmentIds ],
                safetyIds: [ ...oldState.safetyIds ],
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ],
                // This changes:
                originId: action.value,
            }
        }

        case "addAdForm/addSafety":{
            if (oldState.safetyIds.includes(action.value)) {
                return oldState;
            }
            
            return {
                ... oldState,
                equipmentIds: [ ...oldState.equipmentIds ],
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ],
                safetyIds:[... oldState.safetyIds, action.value],
                
            }
        }

        case "addAdForm/removeSafety": {
            if (!oldState.safetyIds.includes(action.value)) {
                return oldState;
            }

            return {
                ...oldState,
                equipmentIds: [ ...oldState.equipmentIds ],
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ],
                // This changes:
                safetyIds: [ ...oldState.safetyIds ].filter( safety => safety !== action.value ),
            }
        }

        case "addAdForm/addVehicleCondition":{
            if (oldState.vehicleConditionIds.includes(action.value)) {
                return oldState;
            }
            
            return {
                ... oldState,
                equipmentIds: [ ...oldState.equipmentIds ],
                safetyIds: [ ...oldState.safetyIds ],

                vehicleConditionIds:[... oldState.vehicleConditionIds, action.value],
                
            }
        }

        case "addAdForm/removeVehicleCondition": {
            if (!oldState.vehicleConditionIds.includes(action.value)) {
                return oldState;
            }

            return {
                ...oldState,
                equipmentIds: [ ...oldState.equipmentIds ],
                safetyIds: [ ...oldState.safetyIds ],
                // This changes:
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ].filter( vehicleCondition => vehicleCondition !== action.value ),
            }
        }

        case "addAdForm/addEmissionClass": {
            return {
                ...oldState,
                equipmentIds: [ ...oldState.equipmentIds ],
                safetyIds: [ ...oldState.safetyIds ],
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ],
                // This changes:
                emissionClassId: action.value,
            }
        }

        case "addAdForm/addInteriorMaterial": {
            return {
                ...oldState,
                equipmentIds: [ ...oldState.equipmentIds ],
                safetyIds: [ ...oldState.safetyIds ],
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ],
                // This changes:
                interiorMaterialId: action.value,
            }
        }

        case "addAdForm/addReplacement": {
            return {
                ...oldState,
                equipmentIds: [ ...oldState.equipmentIds ],
                safetyIds: [ ...oldState.safetyIds ],
                vehicleConditionIds: [ ...oldState.vehicleConditionIds ],
                // This changes:
                replacementId: action.value,
            }
        }

        default: return oldState;
    }
}

export default function UserAdAddForModel() {
    const params = useParams<IUserAdAddForModelParams>();
    const userId = params.uid;
    const categoryId = params.cid;
    const brandId = params.bid;
    const modelId = params.mid;

    const navigate = useNavigate();

    
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [equipment, setEquipment] = useState<IEquipment[]>([]);
    const [fuel, setFuel] = useState<IFuelType[]>([]);
    const [drive, setDrive] = useState<IDrive[]>([]);
    const [transmission, setTransmission] = useState<ITransmission[]>([]);
    const [doors, setDoors] = useState<IDoors[]>([]);
    const [seats, setSeats] = useState<ISeats[]>([]);
    const [sws, setSws] = useState<ISteeringWheelSide[]>([]);
    const [airCondition, setAirCondition] = useState<IAirCondition[]>([]);
    const [damage, setDamage] = useState<IDamage[]>([]);
    const [origin, setOrigin] = useState<IOrigin[]>([]);
    const [safety, setSafety] = useState<ISafety[]>([]);
    const [vc, setVc] = useState<IVehicleCondition[]>([]);
    const [ec, setEc] = useState<IEmissionClass[]>([]);
    const [im, setIm] = useState<IInteriorMaterial[]>([]);
    const [replacement, setReplacement] = useState<IReplacement[]>([]);
    const [carBody, setCarBody] = useState<ICarBody[]>([]);
    const [file, setFile] =useState<File>();

    const [ formState, dispatchFormStateAction ] = useReducer(AddAdFormReducer, {
        title: "",
        price: NaN,
        year: "",
        cm3: "",
        kw: "",
        ks: "",
        mileage: "",
        color: "",
        interiorColor: "",
        registrationUntil:"",
        description: "",
        carBodyId:NaN,
        equipmentIds: [],
        fuelTypeId:NaN,
        driveId:NaN,
        transmissionId: NaN,
        doorsId:NaN,
        seatsId:NaN,
        steeringWheelSideId: NaN,
        airConditionId: NaN,
        damageId:NaN,
        originId: NaN,
        safetyIds:[],
        vehicleConditionIds:[],
        emissionClassId:NaN,
        interiorMaterialId:NaN,
        replacementId:NaN,
    });

    const loadEquipment = () => {
        api("get", "/api/equipment")
        .then(res=>{
            if(res.status !== "ok"){
                throw {
                    message: "Could not load equipment!"
                }
            }
            return res.data;
        })
        .then(equipment => {
            setEquipment(equipment);
        })
        .catch(error=>{
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    };

    const loadFuel = () => {
        api("get", "/api/fuelType")
        .then(res=>{
            if(res.status !== "ok"){
                throw {
                    message: "Could not load fuel type!"
                }
            }
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
        api("get", "/api/drive")
        .then(res=>{
            if(res.status !== "ok"){
                throw {
                    message: "Could not load drive!"
                }
            }
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
        api("get", "/api/transmission")
        .then(res=>{
            if(res.status !== "ok"){
                throw {
                    message: "Could not load transmission!"
                }
            }
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
        api("get", "/api/doors")
        .then(res=>{
            if(res.status !== "ok"){
                throw {
                    message: "Could not load doors!"
                }
            }
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
        api("get", "/api/seats")
        .then(res=>{
            if(res.status !== "ok"){
                throw {
                    message: "Could not load seats!"
                }
            }
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
        api("get", "/api/steeringWheelSide")
        .then(res=>{
            if(res.status !== "ok"){
                throw {
                    message: "Could not load steering wheel side!"
                }
            }
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
        api("get", "/api/airCondition")
        .then(res=>{
            if(res.status !== "ok"){
                throw {
                    message: "Could not load air condition!"
                }
            }
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
        api("get", "/api/damage")
        .then(res=>{
            if(res.status !== "ok"){
                throw {
                    message: "Could not load damage!"
                }
            }
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
        api("get", "/api/origin")
        .then(res=>{
            if(res.status !== "ok"){
                throw {
                    message: "Could not load origin!"
                }
            }
            return res.data;
        })
        .then(origin => {
            setOrigin(origin);
        })
        .catch(error=>{
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    };
    const loadSafety = () => {
        api("get", "/api/safety")
        .then(res=>{
            if(res.status !== "ok"){
                throw {
                    message: "Could not load safety!"
                }
            }
            return res.data;
        })
        .then(safety => {
            setSafety(safety);
        })
        .catch(error=>{
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    };
    const loadVc = () => {
        api("get", "/api/vehicleCondition")
        .then(res=>{
            if(res.status !== "ok"){
                throw {
                    message: "Could not load Vehicle condition!"
                }
            }
            return res.data;
        })
        .then(vc => {
            setVc(vc);
        })
        .catch(error=>{
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    };
    const loadEc = () => {
        api("get", "/api/emissionClass")
        .then(res=>{
            if(res.status !== "ok"){
                throw {
                    message: "Could not load Emission class!"
                }
            }
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
        api("get", "/api/interiorMaterial")
        .then(res=>{
            if(res.status !== "ok"){
                throw {
                    message: "Could not load Interior material!"
                }
            }
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
        api("get", "/api/replacement")
        .then(res=>{
            if(res.status !== "ok"){
                throw {
                    message: "Could not load replacement !"
                }
            }
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
        api("get", "/api/carBody")
        .then(res=>{
            if(res.status !== "ok"){
                throw {
                    message: "Could not load car body !"
                }
            }
            return res.data;
        })
        .then(carBody => {
            setCarBody(carBody);
        })
        .catch(error=>{
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    };

    const doUpload = () => {
        api("post","/api/user/"+userId+"/category/"+categoryId+"/brand/"+brandId+"/model/"+modelId+"/ad", formState)
        .then(res => {
            if(res.status !== "ok"){
                throw {
                    message: "Could not add this ad!"
                }
            }
            return res.data;
        })
        .then(ad => {
            if(!ad?.adId){
                throw new Error("Could not fetch new ad data!");
            }
            return ad;
        })
        .then(ad => {
            if (!file) {
                throw new Error("No ad photo selected!");
            }

            return {
                file,
                ad
            };
        })
        .then(({ file, ad }) => {
            const data = new FormData();
            data.append("photo", file);
            return apiForm("post", "/api/user/"+userId+"/ad/"+ad?.adId+"/photo", data)
        })
        .then(res => {
            if (res.status !== "ok") {
                throw new Error("Could not upload ad photo!");
            }

            return res.data;
        })
        .then(() => {
            navigate("/user/" + userId , {
                replace: true,
            });
        })
        .catch(error=>{
            setErrorMessage(error?.message ?? "Uknown error!");
        });
    }

    useEffect(() => {
        loadEquipment();
        loadFuel();
        loadDrive();
        loadTransmission();
        loadDoors();
        loadSeats();
        loadSws();
        loadAirCondition();
        loadDamage();
        loadOrigin();
        loadSafety();
        loadVc();
        loadEc();
        loadIm();
        loadReplacement();
        loadCarBody();
    },[]);

    return(
        <div>
            <div className="card">
                <div className="card-body">
                    <div className="card-title text-center">
                        <h1>Add ad</h1>
                    </div>
                    <div className="card-text">
                        {errorMessage && <div className="alert alert-danger mb-3">{errorMessage}</div>}
                        <div className="form-group mb-3">
                            <label className='me-3'>Car Body:</label>
                                    <select className='form-select-sm me-5' value={formState.carBodyId} onChange={e => dispatchFormStateAction({type:"addAdForm/addCarBody", value: +e.target.value})}>
                                    <option>Select car body</option>
                                    {carBody.map(carBody => (
                                        
                                        <option value={carBody.carBodyId}>{carBody.name}</option>
                                        
                                    ))}
                                    </select>
                        </div>
                        <div className='form-group mb-3'>
                            <div className='row'>
                                <div className='col col-5'>
                                    <div className='input-group input-group-sm mb-4'>
                                        <span className='input-group-text'>Title</span>
                                        <input type="text" className='form-control form-control-sm' 
                                                value={formState.title}
                                                onChange={e => dispatchFormStateAction({type:"addAdForm/setTitle", value: e.target.value})}
                                                />
                                    </div>
                                </div>
                                <div className='col col-3'>
                                    <div className='input-group input-group-sm'>
                                        <span className='input-group-text'>Price</span>
                                        <input type="number" min={0.01} step={0.01} className='form-control form-control-sm' 
                                                value={formState.price}
                                                onChange={e => dispatchFormStateAction({type:"addAdForm/setPrice", value: +e.target.value})}
                                                />
                                        <span className='input-group-text'>€</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <label className='mb-3'>Equipment:</label>
                        <div className="form-group mb-5">
                            
                               {equipment.map(equipment => (
                                    <div className='d-inline-block mx-2'>
                                        {
                                        formState.equipmentIds.includes(equipment.equipmentId)
                                        ? <FontAwesomeIcon onClick={ () => dispatchFormStateAction({type:"addAdForm/removeEquipment", value: equipment.equipmentId})} icon={faCheckSquare} />
                                        : <FontAwesomeIcon onClick={ () => dispatchFormStateAction({type:"addAdForm/addEquipment", value: equipment.equipmentId})} icon={faSquare} />
                                        } {equipment.name}
                                    </div>
                                ))}
                        </div>
                        <div className="form-group mb-5">
                            <div className='row'>
                                <div className='col col-3'>
                                    <label className='me-2'>Fuel type:</label>
                                    <select className='form-select-sm' value={formState.fuelTypeId} onChange={e => dispatchFormStateAction({type:"addAdForm/addFuelType", value: +e.target.value})}>
                                            <option>Select fuel type</option>
                                                {fuel.map(fuel => (
                                            
                                            <option value={fuel.fuelTypeId}>{fuel.name}</option>
                                            
                                            ))}
                                        </select>
                                </div>
                                <div className='col col-3'>
                                    <label className='me-2'>Drive type:</label>
                                        <select className='form-select-sm' value={formState.driveId} onChange={e => dispatchFormStateAction({type:"addAdForm/addDrive", value: +e.target.value})}>
                                        <option>Select drive type</option>
                                        {drive.map(drive => (
                                            
                                            <option value={drive.driveId}>{drive.name}</option>
                                            
                                        ))}
                                        </select>
                                </div>
                                <div className='col col-4'>
                                    <label className='me-3'>Transmission type:</label>
                                        <select className='form-select-sm me-5' value={formState.transmissionId} onChange={e => dispatchFormStateAction({type:"addAdForm/addTransmission", value: +e.target.value})}>
                                        <option>Select transmission type</option>
                                        {transmission.map(transmission => (
                                            
                                            <option value={transmission.transmissionId}>{transmission.name}</option>
                                            
                                        ))}
                                        </select>
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-5">
                            <div className='row'>
                                <div className='col col-3'>
                                    <label className='me-3'>Doors:</label>
                                    <select className='form-select-sm me-5'value={formState.doorsId} onChange={e => dispatchFormStateAction({type:"addAdForm/addDoors", value: +e.target.value})}>
                                    <option>Select number of doors</option>
                                    {doors.map(doors => (
                                        
                                        <option value={doors.doorsId}>{doors.name}</option>
                                        
                                    ))}
                                    </select>
                                </div>
                                <div className='col col-3'>
                                    <label className='me-3'>Seats:</label>
                                    <select className='form-select-sm me-5' value={formState.seatsId} onChange={e => dispatchFormStateAction({type:"addAdForm/addSeats", value: +e.target.value})}>
                                    <option>Select number of seats</option>
                                    {seats.map(seats => (
                                        
                                        <option value={seats.seatsId}>{seats.name}</option>
                                        
                                    ))}
                                    </select>
                                </div>
                                <div className='col col-4'>
                                    <label className='me-3'>Steering wheel side:</label>
                                    <select className='form-select-sm me-5' value={formState.steeringWheelSideId} onChange={e => dispatchFormStateAction({type:"addAdForm/addSteeringWheelSide", value: +e.target.value})}>
                                    <option>Select Steering wheel side</option>
                                    {sws.map(sws => (
                                        
                                        <option value={sws.steeringWheelSideId}>{sws.name}</option>
                                        
                                    ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-5">
                            <div className='row'>
                                <div className='col col-4'>
                                    <label className='me-3'>Air condition:</label>
                                    <select className='form-select-sm me-5' value={formState.airConditionId} onChange={e => dispatchFormStateAction({type:"addAdForm/addAirCondition", value: +e.target.value})}>
                                    <option>Select Air condition</option>
                                    {airCondition.map(airCondition => (
                                        
                                        <option value={airCondition.airConditionId}>{airCondition.name}</option>
                                        
                                    ))}
                                    </select>
                                </div>
                                <div className='col col-4'>
                                    <label className='me-3'>Damage:</label>
                                    <select className='form-select-sm me-5' value={formState.damageId} onChange={e => dispatchFormStateAction({type:"addAdForm/addDamage", value: +e.target.value})} >
                                    <option>Damage condition</option>
                                    {damage.map(damage => (
                                        
                                        <option value={damage.damageId}>{damage.name}</option>
                                        
                                    ))}
                                    </select>
                                </div>
                                <div className='col col-3'>
                                    <label className='me-3'>Origin:</label>
                                    <select className='form-select-sm me-5' value={formState.originId} onChange={e => dispatchFormStateAction({type:"addAdForm/addOrigin", value: +e.target.value})}>
                                    <option>Slecet origin</option>
                                    {origin.map(origin => (
                                        
                                        <option value={origin.originId}>{origin.name}</option>
                                        
                                    ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <label className='mb-1'>Safety:</label>
                        <div className="form-group mb-3">
                            
                               {safety.map(safety => (
                                    <div className='d-inline-block mx-2'>
                                        {
                                        formState.safetyIds.includes(safety.safetyId)
                                        ? <FontAwesomeIcon onClick={ () => dispatchFormStateAction({type:"addAdForm/removeSafety", value: safety.safetyId})} icon={faCheckSquare} />
                                        : <FontAwesomeIcon onClick={ () => dispatchFormStateAction({type:"addAdForm/addSafety", value: safety.safetyId})} icon={faSquare} />
                                        } {safety.name}
                                    </div>
                                ))}
                        </div>
                        <label className='mb-1'>Vehicle Condition:</label>
                        <div className="form-group mb-4">
                            
                               {vc.map(vc => (
                                    <div className='d-inline-block mx-2'>
                                        {
                                        formState.vehicleConditionIds.includes(vc.vehicleConditionId)
                                        ? <FontAwesomeIcon onClick={ () => dispatchFormStateAction({type:"addAdForm/removeVehicleCondition", value: vc.vehicleConditionId})} icon={faCheckSquare} />
                                        : <FontAwesomeIcon onClick={ () => dispatchFormStateAction({type:"addAdForm/addVehicleCondition", value: vc.vehicleConditionId})} icon={faSquare} />
                                        } {vc.name}
                                    </div>
                                ))}
                        </div>
                        <div className='form-group mb-5'>
                                <label className='me-3 mt-4'>Emission class:</label>
                                <select className='form-select-sm me-5' value={formState.emissionClassId} onChange={e => dispatchFormStateAction({type:"addAdForm/addEmissionClass", value: +e.target.value})}>
                                <option>Select emission class</option>
                                {ec.map(ec => (
                                    
                                       <option value={ec.emissionClassId}>{ec.name}</option>
                                    
                                ))}
                                </select>
                                <label className='me-3 mt-4'>Interior material:</label>
                                <select className='form-select-sm me-5' value={formState.interiorMaterialId} onChange={e => dispatchFormStateAction({type:"addAdForm/addInteriorMaterial", value: +e.target.value})}>
                                <option>Select Interior material</option>
                                {im.map(im => (
                                    
                                       <option value={im.interiorMaterialId}>{im.name}</option>
                                    
                                ))}
                                </select>
                                <label className='me-3 mt-4'>Replacement:</label>
                                <select className='form-select-sm me-5' value={formState.replacementId} onChange={e => dispatchFormStateAction({type:"addAdForm/addReplacement", value: +e.target.value})}>
                                <option>Select</option>
                                {replacement.map(replacement => (
                                    
                                       <option value={replacement.replacementId}>{replacement.name}</option>
                                    
                                ))}
                                </select>
                        </div>
                        <div className='form-group mb-3'>
                            <div className='row'>
                                <div className='col col-4'>
                                    <div className='input-group input-group-sm mb-3'>
                                        <span className='input-group-text'>First registration</span>
                                        <input type="text" className='form-control form-control-sm me-5' 
                                            value={formState.year}
                                            onChange={e => dispatchFormStateAction({type:"addAdForm/setYear", value: e.target.value})}
                                        />
                                    </div>
                                </div>
                                <div className='col col-4'>
                                    <div className='input-group input-group-sm mb-3'>
                                        <span className='input-group-text'>CM3</span>
                                        <input type="text" className='form-control form-control-sm me-5'
                                            value={formState.cm3}
                                            onChange={e => dispatchFormStateAction({type:"addAdForm/setCm3", value: e.target.value})} 
                                        />
                                    </div>
                                </div>
                                <div className='col col-4'>
                                    <div className='input-group input-group-sm mb-3'>
                                        <span className='input-group-text'>KW</span>
                                        <input type="text" className='form-control form-control-sm' 
                                            value={formState.kw}
                                            onChange={e => dispatchFormStateAction({type:"addAdForm/setKw", value: e.target.value})}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='form-group mb-3'>
                            <div className='row'>
                                <div className='col col-4'>
                                    <div className='input-group input-group-sm mb-3'>
                                        <span className='input-group-text'>KS</span>
                                        <input type="text" className='form-control form-control-sm me-5' 
                                            value={formState.ks}
                                            onChange={e => dispatchFormStateAction({type:"addAdForm/setKs", value: e.target.value})}
                                        />
                                    </div>
                                </div>
                                <div className='col col-4'>
                                    <div className='input-group input-group-sm mb-3'>        
                                        <span className='input-group-text'>Mileage</span>
                                        <input type="text" className='form-control form-control-sm me-5' 
                                            value={formState.mileage}
                                            onChange={e => dispatchFormStateAction({type:"addAdForm/setMileage", value: e.target.value})}
                                        />
                                    </div>
                                </div>
                                <div className='col col-4'>
                                    <div className='input-group input-group-sm mb-3'>
                                        <span className='input-group-text'>Color</span>
                                        <input type="text" className='form-control form-control-sm' 
                                            value={formState.color}
                                            onChange={e => dispatchFormStateAction({type:"addAdForm/setColor", value: e.target.value})}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='form-group mb-3'>
                            <div className='row'>
                                <div className='col col-6'>
                                    <div className='input-group input-group-sm mb-3'>
                                        <span className='input-group-text'>Interior color</span>
                                        <input type="text" className='form-control form-control-sm me-5' 
                                            value={formState.interiorColor}
                                            onChange={e => dispatchFormStateAction({type:"addAdForm/setInteriorColor", value: e.target.value})}
                                        />
                                    </div>
                                </div>
                                <div className='col col-6'>
                                    <div className='input-group input-group-sm mb-3'>
                                        <span className='input-group-text'>Registration until</span>
                                        <input type="text" className='form-control form-control-sm' 
                                            value={formState.registrationUntil}
                                            onChange={e => dispatchFormStateAction({type:"addAdForm/setRegistrationUntil", value: e.target.value})}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <label>Description</label>
                            <div className="input-group">
                                <textarea className="form-control form-control-sm" rows={ 5 }
                                    value={formState.description}
                                    onChange={e => dispatchFormStateAction({type:"addAdForm/setDescription", value: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <label>Pictures</label>
                            <div className='input-group'>
                                <input type="file" accept=".jpg,.png" className="form-control form-control-sm" 
                                    onChange={e => {
                                        if (e.target.files){
                                            setFile(e.target.files[0])
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div className='form-group mb-3'>
                            <button className='btn btn-primary' onClick={()=> doUpload()}>
                                Upload
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}