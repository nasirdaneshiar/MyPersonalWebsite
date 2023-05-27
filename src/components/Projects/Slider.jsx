import React from "react";
import Slider from "react-slick";
import Project from "./Project";


let data = [
  {
      /* img : "../../images/todolist.jpg", */
      img:"https://drive.google.com/uc?id=1AwQT2WH2S8rQWmMWvwysH1aA-S29HdVn",
      disc : "This is the infinity to do list project , you can login and register with your google account or with email and password and plan for your works.",
      codelink:"https://github.com/nasirdaneshiar/ToDoList",
      demolink:"https://infinitytodolist.onrender.com/",
      videolink:"https://drive.google.com/uc?id=1hWu0wOjAOvrdcLG1XlRWfYjc6I-GKTO6",
      frontdemo:false
  },
  {
      img : "https://drive.google.com/uc?id=1zCPwAF2i8FRM4nWV_DUfPSJO9cOZo763",
      disc : "This is the mailchimp news signup , the mailchimp api has been used to store your email address on my mailchimp account and if you sign up I will send you awsome contents about technology, blockchain, AI and ...",
      codelink:"https://github.com/nasirdaneshiar/mailchimpNewsLetterSignUp",
      demolink:"https://mailchimpnewslettersignup.onrender.com/",
      videolink:"",
      frontdemo:false
      
  },
  {
      img : "https://drive.google.com/uc?id=155rVUG76_CYA4-4e0S-sNV6PvSVv31LL",
      disc : "This is a decentralized keeper app, frontend is with reactjs, ICP blockchain is used to store and manage data. This project simply shows how the blockchain network can be used to manage our data.",
      codelink:"https://github.com/nasirdaneshiar/decentralizedKeeper",
      demolink:"https://keeperappnasir.onrender.com/",
      videolink:"",
      frontdemo:true
  },
  {
      img : "https://drive.google.com/uc?id=1F2F7j92pK2axHrkVcqWW80EDs1nc_Svu",
      disc : "This project is a descentralized App written in Motoko and deployed on ICP blockchain you can get danesh tokens freely and also transfer it to another account ",
      codelink: "https://github.com/nasirdaneshiar/DaneshToken",
      demolink:"https://gqdon-uyaaa-aaaao-ahq3q-cai.raw.ic0.app/",
      frontdemo:false
  },
  {
      img : "https://drive.google.com/uc?id=1tIe5RdaAqMZiWuQBZbN_hMfUIXSouFd1",
      disc : "",
      videolink:"https://drive.google.com/uc?id=1vxv80y8LJvIRysDQ7vdNpKjdi5UME_Sh",
      frontdemo:false
  }
];
var settings = {
    className:"center",
    centerMode: true,
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

const SliderComp= ()=>{
  let sliderProject = "";
  sliderProject = data.map((item,i)=>(
    <Project item={item} key={i} />
  ))

  return(
      <div className="">
          <Slider {...settings}>
              {sliderProject}
          </Slider>
      </div>
  )
}
  

export default SliderComp
