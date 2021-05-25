import React from 'react'

const TopPicks = (props) => {
    return (
        <div>
            <div className={"text-left ml-1"}>
                <h4>Top picks for you</h4>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="64px" height="7px" display="block" fill="#25D366" viewBox="0 0 57 4" class="sc-64ptou-0 fRuWqJ">
                <rect width="39" height="4" rx="2"></rect>
                <rect x="43" width="14" height="4" rx="2"></rect>
            </svg>
            <div className={"row mt-4"}>
                {props.topPicks.map((data)=>(
                    <div className={"col mt-2"}>
                        <img  src={process.env.PUBLIC_URL + data.imageSrc} height={"165"} width={"246"} />
                    </div>
                    
                ))}
            </div>
        </div>
    )
}

export default TopPicks
