import React from 'react'

const Download = (props) => {
    return (
        <div className={"row mb-5"}>
            <div className={"d-flex justify-content-end col-5"}>
                <img  src={process.env.PUBLIC_URL + 'media/device.png'} height={"238"} width={"170"} />
            </div>
            
            <div className={"col text-left mr-5 pr-5"}>
                <div className={"mt-5 pt-4"}>
                    <div><h4>All this from the convenience of your phone.</h4></div>
                    <div><h4>Download the Dunzo mobile app.</h4></div>
                </div>
                
                <div  className={"mt-3 row"}>
                    <div className={"col-3 d-flex justify-content-start"}>
                        <img src={process.env.PUBLIC_URL + 'media/playstore_btn.svg'} />    
                    </div>
                    <div className={"col d-flex justify-content-start"}>
                        <img src={process.env.PUBLIC_URL + 'media/appstore_btn.svg'} />
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Download
