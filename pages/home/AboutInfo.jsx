import React from "react";
import subtitle_icon from "../../assets/images/subtitle-icon.png";
import about_03 from "../../assets/images/about/about-03.jpg";
import about_01 from "../../assets/images/about/about-01.jpg";
import { Link } from "react-router-dom";
function AboutInfo() {
  return (
    <div>
            <section className="space-pt">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-lg-4">
              <div className="section-title mb-lg-0">
                <span className="sub-title"><img className="img-fluid" src="src/assets/images/subtitle-icon.png" alt />About Us</span>
                <h2 className="title mb-0">Your experience is everything to us</h2>
              </div>
            </div>
            <div className="col-xxl-5 col-lg-6 align-self-end algin">
              <p className="mb-0 ps-xxl-5">This is what we do, executed with perfection. Our dedication and expertise ensure every detail is flawless, setting the standard in our pursuit of excellence.</p>
            </div>
          </div>
          <div className="row justify-content-between mt-5 pt-2">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <img className="img-fluid pe-5" src="src/assets/images/about/about-07.jpg" alt />
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="about-details">
                <div className="rated-reviews-2 flex">
                  <h6>
                    <span>5<i className="fa-solid fa-star" /></span>
                    
                    <span className="review-detail">Rated 4.80 out of 5 based on over  <br />
                      
                      1000+ reviews
                      
                      </span>
                  </h6>
                </div>
                <div className="list-wrapper ">
                  <ul className="list col-xl-9 "style={{margin:"0 -138px"}}>
                    <li><img className="img-fluid" src="src/assets/images/arrow-right.png" alt />Marketing Strategy</li>
                    <li><img className="img-fluid" src="src/assets/images/arrow-right.png" alt />Paid Media</li>
                    <li><img className="img-fluid" src="src/assets/images/arrow-right.png" alt />Influencer Marketing</li>
                    <li><img className="img-fluid" src="src/assets/images/arrow-right.png" alt />Marketing Strategy</li>
                  </ul>
                </div>
                <div className="row">
                  <div className="col-xxl-9">
                    <div className="counter counter-style-1">
                      <div className="counter-number"><span className="timer mb-0" data-to={240} data-speed={2000}>240</span><span className="suffix">+</span></div>
                      <div className="counter-info"><span className="counter-title">Business Peoples</span></div>
                    </div>
                  </div>
                  <div className="col-xxl-9">
                    <div className="counter counter-style-1">
                      <div className="counter-number"><span className="timer mb-0" data-to={100} data-speed={2000}>100</span><span className="suffix">%</span></div>
                      <div className="counter-info"><span className="counter-title">Customer Satisfaction</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-5">
              <div className="about-right">
                <div className="rotate-img">
                  <img className="img-fluid  rotate  " style={{width:"300px", padding:"80px 0 0 0"}} src="src/assets/images/team/shape.png" alt />
                </div>
                <div className="d-flex justify-content-end">
                  <Link className="btn btn-effect" to="about-us">
                    <span>About Us</span>
                    <svg width={20} height={22} viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_59_256)"><path d="M19.4854 11.4293L17.0513 12.221C13.1214 13.4993 10.3036 16.9595 9.84784 21.0668C9.49371 16.981 6.71926 13.5081 2.81255 12.2604L0.210283 11.4293" stroke="white" strokeWidth={2} /><path d="M9.83594 20.8889L9.83594 0" stroke="white" strokeWidth={2} /></g><defs><clipPath id="clip0_59_256"><rect width="21.3333" height={20} fill="white" transform="translate(20) rotate(90)" /></clipPath></defs></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutInfo;

      // <section className="space-pt">
      //   <div className="container">
      //     <div className="row justify-content-between">
      //       <div className="col-lg-7 mb-5 mb-lg-0">
      //         <div className="section-title pb-0 pb-lg-4">
      //           <span className="sub-title">
      //             <img className="img-fluid" src={subtitle_icon} alt /> About Us
      //           </span>
      //           <h2 className="title"> Your experience is everything to us </h2>
      //         </div>
      //         <div className="row">
      //           <div className="col-sm-4">
      //             <img className="img-fluid" src={about_03} alt="#" />
      //           </div>
      //           <div className="col-sm-8">
      //             <p className="ps-lg-3 mt-4 mt-sm-0">
      //             We deliver personalized technology services, design new software, and deliver end-to-end projects. With our expert team and their knowledge, we help client’s business function in a smooth way. Our team is familiar with new tools and technologies that help in making work optimal without any problem. We work to achieve efficiency and speedy deliveries.
      //             </p>
      //             <div className="d-flex justify-content-center mt-5 ms-sm-5 ms-0">
      //               <Link className="btn btn-effect" to="/about-us">
      //                 <span>About Us</span>
      //                 <svg
      //                   width={20}
      //                   height={22}
      //                   viewBox="0 0 20 22"
      //                   fill="none"
      //                   xmlns="http://www.w3.org/2000/svg"
      //                 >
      //                   <g clipPath="url(#clip0_59_254)">
      //                     <path
      //                       d="M19.4854 11.4293L17.0513 12.221C13.1214 13.4993 10.3036 16.9595 9.84784 21.0668C9.49371 16.981 6.71926 13.5081 2.81255 12.2604L0.210283 11.4293"
      //                       stroke="white"
      //                       strokeWidth={2}
      //                     />
      //                     <path
      //                       d="M9.83594 20.8889L9.83594 0"
      //                       stroke="white"
      //                       strokeWidth={2}
      //                     />
      //                   </g>
      //                   <defs>
      //                     <clipPath id="clip0_59_254">
      //                       <rect
      //                         width="21.3333"
      //                         height={20}
      //                         fill="white"
      //                         transform="translate(20) rotate(90)"
      //                       />
      //                     </clipPath>
      //                   </defs>
      //                 </svg>
      //               </Link>
      //             </div>
      //           </div>
      //         </div>
      //         <div className="row mt-4 mt-sm-5">
      //           <div className="col-sm-6">
      //             <div className="counter counter-style-1">
      //               <div className="counter-number">
      //                 <span
      //                   className="timer mb-0"
      //                   data-to={240}
      //                   data-speed={2000}
      //                 >
      //                   240
      //                 </span>
                     
      //               </div>
      //               <div className="counter-info">
      //                 <span className="counter-title">Business Peoples</span>
      //               </div>
      //             </div>
      //           </div>
      //           <div className="col-sm-6">
      //             <div className="counter counter-style-1">
      //               <div className="counter-number">
      //                 <span
      //                   className="timer mb-0"
      //                   data-to={100}
      //                   data-speed={2000}
      //                 >
      //                   100
      //                 </span>
      //                 <span className="suffix">%</span>
      //               </div>
      //               <div className="counter-info">
      //                 <span className="counter-title">
      //                   Customer Satisfaction
      //                 </span>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="col-lg-5">
      //         <img className="img-fluid ps-lg-5" src={about_01} alt="#" />
      //       </div>
      //     </div>
      //   </div>
      // </section>