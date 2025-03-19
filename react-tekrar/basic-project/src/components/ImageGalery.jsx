import {data} from "../helper/data"

const ImageGalery = ()=>{
    return(
        <div>
          <h1>Flowers Image Galery</h1>
          <div className="contain">
            {data.map(({id,categories, color, img_url}) =>(
                <div key={id}>
                    <h1 className="header">{categories}</h1>
                    <img src={img_url} alt={categories} />
                    <h2>{color}</h2>
                </div>
            ))}
          </div>
        </div>
    )
}

export default ImageGalery;