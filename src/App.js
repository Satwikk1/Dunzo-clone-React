import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import './App.css';
import {BiRightArrowAlt} from 'react-icons/bi'
import {IconContext} from 'react-icons';
import ColorCards from './components/ColorCards'
import { useState } from 'react'
import FoodType from './components/FoodType';
import TopPicks from './components/TopPicks';
import Download from './components/Download';
import AboveFooter from './components/AboveFooter';
import Footer from './components/Footer';

function App() {

  const [cards, setCards] = useState([
      {
        id: 1,
        imageSrc: '/media/card1.png',
      },
      {
        id: 2,
        imageSrc: '/media/card2.png',
      },
      {
        id: 3,
        imageSrc:  '/media/card3.jpeg',
      },
      {
        id: 4,
        imageSrc:  '/media/card4.png',
      }
    ]
  )

  const [topPicks, settopPicks] = useState([
    {
      id: 1,
      imageSrc: '/media/img1.jpeg',
    },
    {
      id: 2,
      imageSrc: '/media/img2.jpeg',
    },
    {
      id: 3,
      imageSrc:  '/media/img3.jpeg',
    },
    {
      id: 4,
      imageSrc:  '/media/img4.jpeg',
    }
  ])

  const [foodTypes, setfoodTypes] = useState([
    {
        id: 1,
        imageSrc: '/media/icon1.jpeg',
        text: "Meat and Fish",
    },
    {
      id: 2,
      imageSrc: '/media/icon2.jpeg',
      text: "Pet Supplies",
    },
    {
      id: 3,
      imageSrc: '/media/icon3.png',
      text: "Paan Shop",
    },
    {
      id: 4,
      imageSrc: '/media/icon4.png',
      text: "Any store in the City",
    },
  ])
  

  return (
    <div className="App">
      <Navbar />
      


      {/* below navbar div */}
      <div className={"pt-4 pb-4 container location-indicator-header"}>
        <div className={"d-flex justify-content-start"}>
            <a href="#" className={"location-indicator text-decoration-none d-inline text-center"}>Home</a>

            <div className={"d-inline text-center p-0 m-0"}>
              <IconContext.Provider value={{ style: {color: "rgb(201, 204, 217)", fontSize: '17px', width: '30px', padding: 0, margin: 0}}}>
                  <BiRightArrowAlt />
              </IconContext.Provider>
            </div>

            <a href="#" className={"location-indicator text-decoration-none d-inline"}>New Delhi</a>
        </div>
      </div>

      {/* next div */}
      <div className={"container text-left mb-5"}>
          <div className={"d-flex justify-content-start location-header mb-3"}>
            <h1>New Delhi</h1>
          </div>
          <div className={"text-wrap lh-sm location-detail"}>
            <p>
                Why step out when you can get everything delivered 
                home with the tap of a button? New Delhi’s favourite 
                delivery app gets you Food, Grocery, Medicine, Pet Supplies, 
                Fruits & Vegetables, Meat & Fish, Health & Wellness, Gifts and 
                Send Packages from one end of the city to the other. From your 
                local kirana stores to your favourite brands, grocery shopping to 
                your forgotten charger, we are always on the move for you. Why worry 
                about your chores, when you can get it all Dun!
            </p>
          </div>
      </div>

      {/* CardView */}
      <div className={'container'}>
          <ColorCards cards={cards} />
      </div>

      <div className={"container"}>
          <FoodType foodTypes={foodTypes} />
      </div>

      <div className={"container mt-5 mb-5 pb-5"}>
          <TopPicks topPicks={topPicks}/>
      </div>
      
      <div style={{backgroundImage: "linear-gradient(to top, rgb(235, 237, 235) 50%, rgb(255, 255, 255) 85%)"}} className={"container"}>
          <Download />
      </div>


      <AboveFooter />

      <div className={"footer"}>
        <Footer />
      </div>

    </div>
  );
}

export default App;
