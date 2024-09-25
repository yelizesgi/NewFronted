
import { dataK } from "../helper/dataK"

const DressDetails = () => {


    return(
        <div className="card-details">
        {
            dataK.map(({details})=>(
                <p>{details}</p>
            ))
        }
        </div>
    )
}

export default DressDetails