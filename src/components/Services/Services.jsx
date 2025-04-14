// // src/components/Services.js
// import React from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import "swiper/css";
// import "./Services.css";
// import data from "../../utils/slider.json";
// import { sliderSettings } from "../../utils/common";

// const Services = () => {
//   return (
//     <div id="Services" className="s-wrapper">
//       <div className="paddings innerWidth s-container">
//         <div className="flexColStart s-head">
//           <span className="primaryText">
//             <u className="under">Our Subsidiary</u>
//           </span>
//           {/* <div className="orange-underline"></div> */}
//         </div>

//         <Swiper {...sliderSettings}>
//           <SlideNextButton />
//           {data.map((card, index) => (
//             <SwiperSlide key={index}>
//               <Link to={`/service/${index}`} className="flexColStart s-card">
//                 <img src={card.image} alt={card.name} />
//                 <span className="primaryText">{card.name}</span>
//                 <span className="secondaryText">{card.detail}</span>
//               </Link>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// const SlideNextButton = () => {
//   const swiper = useSwiper();
//   return (
//     <div className="flexCenter s-buttons">
//       <button onClick={() => swiper.slidePrev()} className="s-prevButton">
//         &lt;
//       </button>
//       <button onClick={() => swiper.slideNext()} className="s-nextButton">
//         &gt;
//       </button>
//     </div>
//   );
// };

// export default Services;
