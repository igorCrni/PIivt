import { faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Config } from '../../config';
import IAd from '../../models/IAd.model';

const Ads = (props: {ad: IAd}) => {
    const {ad}=props;

    return (
             
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
        
    )
    
}

export default Ads