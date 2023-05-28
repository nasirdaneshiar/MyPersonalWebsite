import React from "react";
import Slider from "react-slick";
import ClientSlider from "./ClientSlider"
import { Slide} from "react-awesome-reveal"

let clients = [
    /* {
        name : "John Michel",
        position : "web developer",
        img_url : "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars : 3,
        disc : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
    }, */
   
]


const Clients = ()=>{
    let clientDisc = "";
    var settings = {
        className:"center",
        centerMode: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              centerMode:false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    clientDisc = clients.map((item,i) => (
        <ClientSlider items={item} key={i}/>
    ))
    return(
        <div className="clientContainer" id="testimonials">
          <Slide direction="left">
            <span className="green">testimonials</span>
            <h1>what clients say</h1>
          </Slide>
            
            <div className="Testimonials">
                <Slider {...settings}>
                    {clientDisc}
                </Slider>
            </div>
        </div>
    )
}

export default Clients