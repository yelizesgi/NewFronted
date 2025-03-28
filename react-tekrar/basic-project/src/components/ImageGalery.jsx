import {data} from "../helper/data"

const ImageGalery = ()=>{
    return(
        <div className="container  text-center border border-secondary-subtle ">
          <h1 className="m-2 p-4 fst-italic bg-secondary-subtle rounded-3 ">Flowers Image Galery</h1>
          <div className="contain --bs-light-bg-subtle row  row-cols-2 ">
            {data.map(({id,categories, color, img_url}) =>(
                <div key={id}>
                    <h1 className="header border-bottom border-danger text-bg-light">{categories}</h1>
                    <img className="m-4 rounded-5 w-75 h-50" src={img_url} alt={categories} />
                    <h2 className="text-success bg-light rounded-3">{color}</h2>
                </div>
            ))}
          </div>
        </div>
    )
}

export default ImageGalery;