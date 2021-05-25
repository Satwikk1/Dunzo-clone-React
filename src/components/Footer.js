import React from 'react'

const Footer = () => {
    return (
        <div className={"container text-left"}>
            <div className={"sub-footer mb-5 pb-5"}>
                <h5 style={{color: "white"}}>You can’t stop time, but you can save it!</h5>
                <small style={{color: "rgb(183, 185, 196)", fontSize: "0.9em"}} className={"muted"}>Living in the city, there is never enough time 
                    to shop for groceries, pick-up supplies, grab 
                    food and wade through traffic on the way back home. 
                    How about we take care of all of the above for you? 
                    What if we can give you all that time back? Send packages 
                    across the city and get everything from food, groceries, 
                    medicines and pet supplies delivered right to your doorstep.
                     From any store to your door, just make a list and we’ll make 
                     it disappear. Just Dunzo It!</small>
            </div>
            
            <div style={{color: "white"}} className={"row"}>
                <div className={"col-1"}>
                    <img src={process.env.PUBLIC_URL + "media/dunzo_icon.png"} width={"75"} height={"75"} />
                </div>
                <div className={"col-7 ml-4"}>
                    <div className={"row"}>
                        <p className={"col"}>DUNZO</p>
                        <p className={"col"}>SERVICEABLE CITIES</p>
                        <p className={"col"}>GET IN TOUCH</p>
                    </div>
                    <>
                        <div className={"row"}>
                            <a className={"col text-white mb-3 small"} href="#">About</a>
                            <a className={"col text-white mb-3 small"} href="#">Bangalore</a>
                            <a className={"col text-white mb-3 small"} href="#">Email</a>
                        </div>
                        <div className={"row"}>
                            <a className={"col text-white mb-3 small"} href="#">Jobs</a>
                            <a className={"col text-white mb-3 small"} href="#">Pune</a>
                            <a className={"col text-white mb-3 small"} href="#">Twitter</a>
                        </div>
                        <div className={"row"}>
                            <a className={"col text-white mb-3 small"} href="#">Contact</a>
                            <a className={"col text-white mb-3 small"} href="#">Gurgaon</a>
                            <a className={"col text-white mb-3 small"} href="#">Facebook</a>
                        </div>
                        <div className={"row"}>
                            <a className={"col text-white mb-3 small"} href="#">Terms & Conditions</a>
                            <a className={"col text-white mb-3 small"} href="#">Hyderabad</a>
                            <a className={"col text-white mb-3 small"} href="#">Instagram</a>
                        </div>
                        <div className={"row"}>
                            <a className={"col text-white mb-3 small"} href="#">Privacy Policy</a>
                            <a className={"col text-white mb-3 small"} href="#">New Delhi</a>
                            <a className={"col text-white mb-3 small"} href="#">Linkedin</a>
                        </div>
                        <div className={"row"}>
                            <a className={"col text-white mb-3 small"} href="#">Dunzo for partner</a>
                            <a className={"col text-white mb-3 small"} href="#">Chennai</a>
                            <a className={"col text-white mb-3 small"} href="#"></a>
                        </div>
                        <div className={"row"}>
                            <a className={"col text-white mb-3 small"} href="#">Dunzo for business</a>
                            <a className={"col text-white mb-3 small"} href="#">Mumbai</a>
                            <a className={"col text-white mb-3 small"} href="#"></a>
                        </div>
                    </>
                    
                </div>
                <div className={"col-3"}>
                    <img  src={process.env.PUBLIC_URL + "media/scooter_guy.png"} width={"260"} height={"215"} />
                </div>
            </div>
        </div>
    )
}

export default Footer
