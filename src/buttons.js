import { useState } from "react"
import { data } from "./buttonsData"

function Buttons({setMySearch,setShowToggle} ){
    const [arr,setArr]=useState([])
    const [btnColor, setBtnColor] = useState(false);

    const add=(food)=>{
        food.status=!food.status
        setBtnColor(!btnColor)

        let newObj={nameNew:food.name,idNew:food.id,imageNew:food.image}
        const found = arr.some(el => el.idNew === food.id);

        if (!found){
            let arrConcat=arr.concat(newObj)
            setArr(arrConcat)
            let arrProduct=arrConcat.map((product=>product.nameNew))
            setMySearch(arrProduct.join(' '))
        } 

        else{
        const newArr=arr.filter(product=>product.idNew !==food.id)
        let newArrProduct=newArr.map((product=>product.nameNew))
        setArr(newArr)
        setMySearch(newArrProduct.join(' '))
        }
        return arr;
    }

    return(
        <div>
            <div className={setShowToggle ? "showBlock" : 'showNone'} >
            <div className="containerRow">
                {data.map(((food,index)=>{
                const {image,status} = food
                return(
                    <div  key={index}>
                        <button className={status ? "btnAdd" : 'btnAddClick'}  onClick={()=>add(food)}><img alt='png' width='26px' src={image}/></button>
                    </div>
                )
                }))
                }
            </div>
            </div>
        </div>
    )
}
export default Buttons







