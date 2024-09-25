
import { dataK } from "../helper/dataK"

const WomenDress = () => {


    return(
        <div>
        {
            dataK.map(({id, color, categories, img_url})=>(
                <div key={id}>
                    <input type="saerch" />
                    <img src={img_url} alt="dressimg" />
                    <h2>Color: {color}</h2>
                    <h2>Categories: {categories}</h2>
                </div>

            ))
        }
        </div>
    )
}

export default WomenDress