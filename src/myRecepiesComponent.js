function MyRecepiesComponent({myRecepiesCode}){
    return(
        <div className="card">
            <h2>{myRecepiesCode.recipe.label}</h2>
            <p>{myRecepiesCode.recipe.calories.toFixed()} calories</p>
            <img className="picture" alt='img' width='300px' src={myRecepiesCode.recipe.image}/>
            <ul>
            {myRecepiesCode.recipe.ingredientLines.map((el,index)=>{
                return(
                    <li key={index}>
                        <img alt='img' src='https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_960_720.png' width='20px'/>{el}
                    </li>
                )
            })}
            </ul>
        </div>
    )
}
export default MyRecepiesComponent