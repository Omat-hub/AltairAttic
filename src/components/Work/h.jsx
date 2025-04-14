// // src/App.js
// import React from 'react';
// import './h.css';

// function App() {
//   return (
//     <main className="main">
//       <section className="page-title" style={{ backgroundImage: "url('/images/background/page-title.jpg')" }}>
//         <div className="auto-container">
//           <div className="title-outer text-center">
//             <h1 className="title">Services Details</h1>
//             <ul className="page-breadcrumb">
//               <li><a href="/">Home</a></li>
//               <li>Services Details</li>
//             </ul>
//           </div>
//         </div>
//       </section>
//       <section className="services-details">
//         <div className="container">
//           <div className="row">
//             <div className="col-xl-4 col-lg-4">
//               <div className="service-sidebar">
//                 <div className="sidebar-widget service-sidebar-single">
//                   <div className="service-list">
//                     <ul>
//                       <li><a className="current" href="/page-service-details"><i className="fas fa-angle-right"></i><span>Digital Marketing</span></a></li>
//                       <li className="current"><a href="/page-service-details"><i className="fas fa-angle-right"></i><span>UI/UX Designing</span></a></li>
//                       <li><a href="/page-service-details"><i className="fas fa-angle-right"></i><span>Product Development</span></a></li>
//                       <li><a href="/page-service-details"><i className="fas fa-angle-right"></i><span>Data Analysis</span></a></li>
//                       <li><a href="/page-service-details"><i className="fas fa-angle-right"></i><span>Security System</span></a></li>
//                       <li><a href="/page-service-details"><i className="fas fa-angle-right"></i><span>Data Visualization</span></a></li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="sidebar-widget banner-widget">
//                   <div className="widget-content" style={{ backgroundImage: "url('/images/resource/contact.jpg')" }}>
//                     <div className="shape" style={{ backgroundImage: "url('/images/resource/overlay-shape.png')" }}></div>
//                     <div className="content-box">
//                       <div className="icon-box"><i className="lnr lnr-icon-pie-chart"></i></div>
//                       <h3>Be healthy &amp; eat only fresh</h3>
//                       <a className="theme-btn btn-style-one" href="/page-contact"><span className="btn-title">Contact us</span></a>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="sidebar-widget service-sidebar-single mt-4">
//                   <div className="service-sidebar-single-btn wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1200m">
//                     <a className="theme-btn btn-style-one d-grid" href="/page-service-details#"><span className="btn-title"><span className="fas fa-file-pdf"></span> download pdf file</span></a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-xl-8 col-lg-8">
//               <div className="services-details__content">
//                 <img src="/images/resource/service-details.jpg" alt="" />
//                 <h2 className="mt-4">Service Overview</h2>
//                 <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//                 <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
//                 <div className="content">
//                   <div className="text">
//                     <h3>Service Center</h3>
//                     <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
//                   </div>
//                   <div className="feature-list">
//                     <div className="row clearfix">
//                       <div className="col-lg-6 col-md-6 col-sm-12 column">
//                         <div className="single-item">
//                           <div className="icon-box"><i className="fas fa-check-circle"></i></div>
//                           <h6 className="title">Fast home delivery</h6>
//                         </div>
//                       </div>
//                       <div className="col-lg-6 col-md-6 col-sm-12 column">
//                         <div className="single-item">
//                           <div className="icon-box"><i className="fas fa-check-circle"></i></div>
//                           <h6 className="title">Secure Payments</h6>
//                         </div>
//                       </div>
//                       <div className="col-lg-6 col-md-6 col-sm-12 column">
//                         <div className="single-item">
//                           <div className="icon-box"><i className="fas fa-check-circle"></i></div>
//                           <h6 className="title">Delivering best products</h6>
//                         </div>
//                       </div>
//                       <div className="col-lg-6 col-md-6 col-sm-12 column">
//                         <div className="single-item">
//                           <div className="icon-box"><i className="fas fa-check-circle"></i></div>
//                           <h6 className="title">Food Inspections</h6>
//                         </div>
//                       </div>
//                       <div className="col-lg-6 col-md-6 col-sm-12 column">
//                         <div className="single-item">
//                           <div className="icon-box"><i className="fas fa-check-circle"></i></div>
//                           <h6 className="title">Generator Systems</h6>
//                         </div>
//                       </div>
//                       <div className="col-lg-6 col-md-6 col-sm-12 column">
//                         <div className="single-item">
//                           <div className="icon-box"><i className="fas fa-check-circle"></i></div>
//                           <h6 className="title">Assessments</h6>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="">
//                   <h3>Frequently Asked Question</h3>
//                   <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
//                   <ul className="accordion-box wow fadeInRight">
//                     <li className="accordion block">
//                       <div className="acc-btn">Is my technology allowed on tech?<div className="icon fa fa-plus"></div></div>
//                       <div className="acc-content">
//                         <div className="content">
//                           <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
//                         </div>
//                       </div>
//                     </li>
//                     <li className="accordion block active-block">
//                       <div className="acc-btn active">How to soft launch your business?<div className="icon fa fa-plus"></div></div>
//                       <div className="acc-content current">
//                         <div className="content">
//                           <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
//                         </div>
//                       </div>
//                     </li>
//                     <li className="accordion block">
//                       <div className="acc-btn">How to turn visitors into contributors<div className="icon fa fa-plus"></div></div>
//                       <div className="acc-content">
//                         <div className="content">
//                           <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
//                         </div>
//                       </div>
//                     </li>
//                     <li className="accordion block">
//                       <div className="acc-btn">How can i find my solutions?<div className="icon fa fa-plus"></div></div>
//                       <div className="acc-content">
//                         <div className="content">
//                           <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
//                         </div>
//                       </div>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default App;
