import cityShanghai from "/src/assets/images/city-shanghai.png";
const CTA = () => {
  return (
    <section className="space-pt z-index-2">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-5">
            <div className="section-title is-sticky">
              <span className="sub-title">
                <img
                  className="img-fluid"
                  src="images/subtitle-icon.png"
                  alt=""
                />
                Our Direction
              </span>
              <h2 className="title">
                Get in Touch with{" "}
                <span className="  text-[#3663D8]">CloudNexus</span> to Empower
                Your Business with Smart Solutions
              </h2>
              <p>
                Take the first step by connecting with us, and together we’ll
                bring your vision to life!
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            <div className="location-items grid-wrapper grid-xl-2 grid-lg-2 grid-md-2 grid-sm-2 grid-xs-1 ">
              <div className="location-wrapper location-style-1 bg-black ">
                <div className="location-inner">
                  <div className="location-info">
                    <div className="city-image">
                      <img className="img-fluid" src={cityShanghai} alt="" />
                    </div>
                    <div className="city-info">
                      <h5 className="city-name">
                        <a href="#">Bengaluru</a>
                      </h5>
                      <div className="city-location">
                        <div className="location-item">
                          <i className="icon">
                            <img
                              className="img-fluid"
                              src="images/icon-location.png"
                              alt=""
                            />
                          </i>
                          <div className="list-label">
                          2nd Stage BTM Layout, Bengaluru, Karnataka 560076, IN
                          </div>
                        </div>
                        <div className="location-item">
                          <i className="icon">
                            <img
                              className="img-fluid"
                              src="images/icon-phone-call.png"
                              alt=""
                            />
                          </i>
                          <div className="list-label">+(91) 8793830447</div>
                        </div>
                        <div className="location-item">
                          <i className="icon">
                            <img
                              className="img-fluid"
                              src="images/icon-email.png"
                              alt=""
                            />
                          </i>
                          <div className="list-label">work@cloudnexus.in</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="location-wrapper location-style-1 bg-black ">
                <div className="location-inner">
                  <div className="location-info">
                    <div className="city-image">
                      <img className="img-fluid" src={cityShanghai} alt="" />
                    </div>
                    <div className="city-info">
                      <h5 className="city-name">
                        <a href="#">Bhopal</a>
                      </h5>
                      <div className="city-location">
                        <div className="location-item">
                          <i className="icon">
                            <img
                              className="img-fluid"
                              src="images/icon-location.png"
                              alt=""
                            />
                          </i>
                          <div className="list-label">
                          Plot No 20 , Kasturi Orched , Barrai, Bhopal, MP - 462043
                          
                          </div>
                        </div>
                        <div className="location-item">
                          <i className="icon">
                            <img
                              className="img-fluid"
                              src="images/icon-phone-call.png"
                              alt=""
                            />
                          </i>
                          <div className="list-label">+(91) 9201004208</div>
                        </div>
                        <div className="location-item">
                          <i className="icon">
                            <img
                              className="img-fluid"
                              src="images/icon-email.png"
                              alt=""
                            />
                          </i>
                          <div className="list-label">work@cloudnexus.in</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
