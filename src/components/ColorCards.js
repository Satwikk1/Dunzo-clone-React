const ColorCards = (props) => {

    return ( 
        <div class="row">
            {/* <h3>hello</h3> */}
            {props.cards.map((card)=>(
                <div class="col m-0 p-0">
                    <div className={""}>
                        {card.id==1 && 
                            <div>
                                <div className={"in-div"}>
                                    <small>PAAN ITEMS AVAILABLE HERE</small>
                                </div>
                                <img className={"image-border mb-3"} height={"182"} width={"249"} src={process.env.PUBLIC_URL + card.imageSrc}  alt="card image"/>
                            </div>
                        }
                        {card.id!=1 &&
                            <img className={"image-border mb-3"} height={"182"} width={"249"} src={process.env.PUBLIC_URL + card.imageSrc}  alt="card image"/>
                        }
                        
                    </div>
                </div>
            ))}

        </div>
    )
}
<img src={process.env.PUBLIC_URL + "/media/card1.png"}></img>
export default ColorCards
