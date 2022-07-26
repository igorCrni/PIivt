import BaseService from "../../common/BaseService";
import IAdapterOptions from "../../common/IAdapterOptions.interface";
import SafetyModel from './SafetyModel.model';

class SafetyAdapterOptions implements IAdapterOptions {

}

interface AdSafetyInterface {
    ad_safety_id: number;
    ad_id: number;
    safety_id: number;
}
class SafetyService extends BaseService<SafetyModel, SafetyAdapterOptions> {
    tableName(): string {
        return "safety";
    }

    protected async adaptToModel(data: any): Promise<SafetyModel> {
        const safety: SafetyModel = new SafetyModel();

        safety.safetyId = +data?.safety_id;
        safety.name = data?.name;

        return safety;
    }

    public async getAllByAdId(adId:number, options: SafetyAdapterOptions = {}): Promise<SafetyModel[]>{
        return new Promise((resolve, reject) => {
            this.getAllFromTableByFieldNameAndValue<AdSafetyInterface>("ad_safety", "ad_id", adId)
            .then(async result => {
                const safetyIds = result.map(ae => ae.safety_id);

                const safeties: SafetyModel[] = [];

                for (let safetyId of safetyIds) {
                    const safety = await this.getById(safetyId, options);
                    safeties.push(safety);
                }

                resolve(safeties);
            })
            .catch(error => {
                reject(error);
            });
        });
    }
}

export default SafetyService;