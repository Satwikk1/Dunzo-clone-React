import  { 
    Navbar,
    Nav, 
    Form, 
    FormControl, 
    Button,
    NavDropdown, 
    Container 
} from 'react-bootstrap';
import {BiBold, BiCart, BiNoEntry} from "react-icons/bi";
import {MdLocationOn} from 'react-icons/md'
import {IconContext} from "react-icons";
import '../css/common.css'



const navbar = (props) => {
    // console.log(process.env.PUBLIC_URL)
    return (
        <Navbar style={navbarStyle} bg="light" expand="md">
            <Navbar className={"container"} expand="lg">


                <Navbar.Brand href="#home">
                    <img
                        src={process.env.PUBLIC_URL + '/media/logo_dunzo.png'}
                        width="145"
                        height="32"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>

                <Nav className="mr-auto">
                    <IconContext.Provider value={{ style: {fontSize: '20px', color: "rgb(0, 210, 148)"}}}>
                        <div>
                            <MdLocationOn /> <small>Set Location</small>
                        </div>
                    </IconContext.Provider>
                </Nav>


                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">
                            <a href="#" className={"text-decoration-none navbar-text navbarTextStyle"}>Dunzo for Partners</a>
                        </Nav.Link>

                        <Nav.Link href="#link">
                            <a href="#" className={"text-decoration-none navbar-text navbarTextStyle"}>Need Delivery Partners?</a>
                        </Nav.Link>

                        <Nav.Link href="#link">
                            <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(0, 0, 0)"}}}>
                                <div>
                                    <BiCart />
                                </div>
                            </IconContext.Provider>
                        </Nav.Link>

                        <Nav.Link href="#link">
                            <Button style={buttonStyle} className={"rounded-pill"} variant="primary">Sign in</Button>{' '}
                        </Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Navbar>
    )
}

const buttonStyle={
    fontSize: 14 + "px",
    backgroundColor: 'rgb(0, 210, 148)',
    border: 0+"px",
    width: 100 +"px",
    height: 40 +"px",
}

const navbarStyle={
    padding: 0+"px",
    margin: 0+"px",
}

export default navbar
