import React from 'react'

const FoodType = (props) => {
    return (
        <div class="row ml-1 mt-4">
            {props.foodTypes.map((food)=>(
                <div className={"shadow p-3 mb-5 bg-body rounded mr-4 p-5"}>
                    {food.id==3 &&
                        <div style={{position: "relative"}}>
                                <small className={"lower-in-div"}>LIVE</small>
                        </div>
                        
                    }
                    <img src={process.env.PUBLIC_URL + food.imageSrc} width={"40"} height={"40"} />
                    <small className={"d-flex mt-2"}>{food.text}</small>
                </div>
            ))}
        </div>
        
    )
}

export default FoodType
