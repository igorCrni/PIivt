import AuthRouter from './components/auth/AuthRouter.router';
import CategoryRouter from './components/category/CategoryRouter.router';
import UserRouter from './components/user/UserRouter.router';
import EquipmentRouter from './components/equipment/EquipmentRouter.router';
import FuelTypeRouter from './components/fuelType/FuelTypeRouter.router';
import DriveRouter from './components/drive/DriveRouter.router';
import TransmissionRouter from './components/transmission/TransmissionRouter.router';
import DoorsRouter from './components/doors/DoorsRouter.router';
import SeatsRouter from './components/seats/SeatsRouter.router';
import SteeringWheelSideRouter from './components/steeringWheelSide/SteeringWheelSideRouter.router';
import AirConditionRouter from './components/airCondition/AirConditionRouter.router';
import DamageRouter from './components/damage/DamageRouter.router';
import OriginRouter from './components/origin/OriginRouter.router';
import SafetyRouter from './components/safety/SafetyRouter.router';
import VehicleConditionRouter from './components/vehicleCondition/VehicleConditionRouter.router';
import EmissionClassRouter from './components/emissionClass/EmissionClassRouter.router';
import InteriorMaterialRouter from './components/interiorMaterial/InteriorMaterialRouter.router';
import ReplacementRouter from './components/replacement/ReplacementRouter.router';
import CarBodyRouter from './components/carBody/CarBodyRouter.router';
import AdRouter from './components/ad/AdRouter.router';

const ApplicationtRouters =  [
    new CategoryRouter(),
    new UserRouter(),
    new AuthRouter(),
    new EquipmentRouter(),
    new FuelTypeRouter(),
    new DriveRouter(),
    new TransmissionRouter(),
    new DoorsRouter(),
    new SeatsRouter(),
    new SteeringWheelSideRouter(),
    new AirConditionRouter(),
    new DamageRouter(),
    new OriginRouter(),
    new SafetyRouter(),
    new VehicleConditionRouter(),
    new EmissionClassRouter(),
    new InteriorMaterialRouter(),
    new ReplacementRouter(),
    new CarBodyRouter(),
    new AdRouter(),
];

export default ApplicationtRouters;