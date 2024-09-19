import {dataK} from "../helper/dataK"


const CatologWomen = () => {


    return(

        // <div className="card">
        //     <h1>Women White Dress</h1>
        //     <img src={dataK[0].img_url} alt="" />
        //     <h2>Color: {dataK[0].color}</h2>
        //     <h3>Categories: {dataK[0].categoies}</h3>
        // </div> //! bu yapıyı data içerisindeki veri kadar oluşturmak gerekiyor, bu kod kalabalıklığına sebep olur, bundan dolayı dinamik hale geitrerek data içerisindeki veri kadar map() ile gezip kart yapılarını oluşturacağız, bizim datamız bir dizi olduğu için map() metodunu uygulaya biliriz


    <div>
      {
       dataK.map((item)=>{
          const {id, color, categories, img_url} = item
        return(
           <div className="dress-card"  key={id}>
            <img src={img_url} alt="dressimg" />
            <div className="">
            <h2>Color: {color}</h2>
            <h2>Categories: {categories}</h2>   
            </div>
           </div>
        )
       }
      )}
    </div>
    )
    

    
}

export default CatologWomen