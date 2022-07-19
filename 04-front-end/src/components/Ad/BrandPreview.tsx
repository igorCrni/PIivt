import IBrand from '../../models/IBrand.model';

export interface IBrandPreviewProperties {
    brand: IBrand;
}

export default function BrandPreview(props: IBrandPreviewProperties) {
    return (
        <div>
            <h2>{props.brand.name}</h2>
            {/* <p>
                {props.brand.models.map(model => <span className='d-inline-block px-2' key={"model-" + props.brand.brandId + "-" + model.modelId}>{model.name}</span>)}
            </p> */}
        </div>
    );
}