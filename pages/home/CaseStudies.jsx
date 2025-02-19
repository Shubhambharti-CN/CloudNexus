import React from 'react'
import subtitleIcon from '../../assets/images/subtitle-icon.png'
import caseStudy1 from '../../assets/images/case-studies/01.png'
import caseStudy2 from '../../assets/images/case-studies/02.png'
import caseStudy3 from '../../assets/images/case-studies/03.png'
import brandIcon1 from '../../assets/images/client-logo/brand-icon1.png'
import brandIcon2 from '../../assets/images/client-logo/brand-icon2.png'
import brandIcon3 from '../../assets/images/client-logo/brand-icon3.png'
import brandIcon4 from '../../assets/images/client-logo/brand-icon4.png'
import brandIcon5 from '../../assets/images/client-logo/brand-icon5.png'

function CaseStudies() {
  return (
    <div>
   <section className="space-ptb z-index-2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-5 col-lg-5">
                  <div className="section-title mb-4 mb-lg-0">
                    <span className="sub-title"><img className="img-fluid" src={subtitleIcon} alt /> Case Studies</span>
                    <h2 className="title"> Projects For Our Amazing Clients</h2>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-4">
                  <p>We create innovative, high-quality solutions tailored to our clients' needs, delivering excellence, creativity, and lasting impact in every project.</p>
                </div>
                {/* <div className="col-xl-2 col-lg-3 text-end">
                  <a className="btn btn-effect" href="/about-us">
                    <span>About Us</span>
                    <svg width={20} height={22} viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_59_255)"><path d="M19.4854 11.4293L17.0513 12.221C13.1214 13.4993 10.3036 16.9595 9.84784 21.0668C9.49371 16.981 6.71926 13.5081 2.81255 12.2604L0.210283 11.4293" stroke="white" strokeWidth={2} /><path d="M9.83594 20.8889L9.83594 0" stroke="white" strokeWidth={2} /></g><defs><clipPath id="clip0_59_255"><rect width="21.3333" height={20} fill="white" transform="translate(20) rotate(90)" /></clipPath></defs></svg>
                  </a>
                </div> */}
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="case-studies-wrapper case-studies-style-2">
                    <div className="case-studies-item">
                      <div className="item-inner ">
                        <h3 className="case-studies-title">AutoTicketMigrator
                        </h3>
                        <div className="case-studies-description  "style={{width: "60%"}}>Implemented a comprehensive security framework for a React website using SonarQube for SAST, Snyk for SCA, and StackHawk for DAST.</div>

                        {/* <div className="case-studies-action"><a className="btn-arrow" href="#"><svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_923_139)"><path d="M8.70801 0.959961L9.29825 2.7665C10.2512 5.68321 12.8308 7.77453 15.8928 8.1128C12.8468 8.37564 10.2578 10.4348 9.3276 13.3343L8.70801 15.2657" stroke="inherit" strokeWidth={2} /><path d="M15.7602 8.12158H0.1875" stroke="inherit" strokeWidth={2} /></g><defs><clipPath id="clip0_923_139"><rect width="15.904" height="14.8437" fill="inherit" transform="translate(0.1875 0.578125)" /></clipPath></defs></svg></a></div> */}
                      </div>
                      <div className="case-studies-image"><img className="img-fluid gsap-img-animation" src={caseStudy1} alt style={{scale: 'none', transform: 'translate(-50%, -50%) translate(746px, 498px)', opacity: 0, visibility: 'hidden'}} /></div>
                      <div className="marquee-wrapper">
                        <div className="marquee-inner">
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon1} alt /></span>
                            <span className="title">Data Science</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon2} alt /></span>
                            <span className="title">System Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon3} alt /></span>
                            <span className="title">UI/UX Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon4} alt /></span>
                            <span className="title">Big Data</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon5} alt /></span>
                            <span className="title">App Development</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon1} alt /></span>
                            <span className="title">Web Development</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon2} alt /></span>
                            <span className="title">UI/UX Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon3} alt /></span>
                            <span className="title">Cloud & DevOps</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon4} alt /></span>
                            <span className="title">Cybersecurity</span>
                          </div>
                          {/* <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon5} alt /></span>
                            <span className="title"></span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="case-studies-item">
                      <div className="item-inner">
                        <h3 className="case-studies-title">ReactSecOps</h3>
                        <div className="case-studies-description  "style={{width: "60%"}}>Implemented a comprehensive security framework for a React website using SonarQube for SAST, Snyk for SCA, and StackHawk for DAST.</div>
                        {/* <div className="case-studies-action"><a className="btn-arrow" href="#"><svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_923_140)"><path d="M8.70801 0.959961L9.29825 2.7665C10.2512 5.68321 12.8308 7.77453 15.8928 8.1128C12.8468 8.37564 10.2578 10.4348 9.3276 13.3343L8.70801 15.2657" stroke="inherit" strokeWidth={2} /><path d="M15.7602 8.12158H0.1875" stroke="inherit" strokeWidth={2} /></g><defs><clipPath id="clip0_923_140"><rect width="15.904" height="14.8437" fill="inherit" transform="translate(0.1875 0.578125)" /></clipPath></defs></svg></a></div> */}
                      </div>
                      <div className="case-studies-image"><img className="img-fluid gsap-img-animation" src={caseStudy2} alt style={{scale: 'none', transform: 'translate(-50%, -50%) translate(746px, 498px)', opacity: 0, visibility: 'hidden'}} /></div>
                      <div className="marquee-wrapper">
                        <div className="marquee-inner">
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon1} alt /></span>
                            <span className="title">Data Science</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon2} alt /></span>
                            <span className="title">System Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon3} alt /></span>
                            <span className="title">UI/UX Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon4} alt /></span>
                            <span className="title">Big Data</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon5} alt /></span>
                            <span className="title">App Development</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon1} alt /></span>
                            <span className="title">Web Development</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon2} alt /></span>
                            <span className="title">UI/UX Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon3} alt /></span>
                            <span className="title">Cloud & DevOps</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon4} alt /></span>
                            <span className="title">Cybersecurity</span>
                          </div>
                          {/* <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon5} alt /></span>
                            <span className="title"></span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="case-studies-item">
                      <div className="item-inner">
                        <h3 className="case-studies-title">AutoHANAFailover
                     </h3>
                        <div className="case-studies-description" style={{width: "60%"}}>HANA Auto-Failover Simulation tests SAP HANA's high-availability setup by replicating failures and ensuring seamless switchover to a secondary server.</div>
                        {/* <div className="case-studies-action"><a className="btn-arrow" href="#"><svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_923_141)"><path d="M8.70801 0.959961L9.29825 2.7665C10.2512 5.68321 12.8308 7.77453 15.8928 8.1128C12.8468 8.37564 10.2578 10.4348 9.3276 13.3343L8.70801 15.2657" stroke="inherit" strokeWidth={2} /><path d="M15.7602 8.12158H0.1875" stroke="inherit" strokeWidth={2} /></g><defs><clipPath id="clip0_923_141"><rect width="15.904" height="14.8437" fill="inherit" transform="translate(0.1875 0.578125)" /></clipPath></defs></svg></a></div> */}
                      </div>
                      <div className="case-studies-image"><img className="img-fluid gsap-img-animation" src={caseStudy3} alt style={{scale: 'none', transform: 'translate(-50%, -50%) translate(746px, 498px)', opacity: 0, visibility: 'hidden'}} /></div>
                      <div className="marquee-wrapper">
                        <div className="marquee-inner">
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon1} alt /></span>
                            <span className="title">Data Science</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon2} alt /></span>
                            <span className="title">System Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon3} alt /></span>
                            <span className="title">UI/UX Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon4} alt /></span>
                            <span className="title">Big Data</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon5} alt /></span>
                            <span className="title">App Development</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon1} alt /></span>
                            <span className="title">Web Development</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon2} alt /></span>
                            <span className="title">UI/UX Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon3} alt /></span>
                            <span className="title">Cloud & DevOps</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon4} alt /></span>
                            <span className="title">Cybersecurity</span>
                          </div>
                          {/* <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon5} alt /></span>
                            <span className="title"></span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="case-studies-item">
                      <div className="item-inner">
                        <h3 className="case-studies-title">AutoSecPR</h3>
                        <div className="case-studies-description" style={{width: "60%"}}>Developed an automated pull request (PR) security and compliance pipeline in Azure DevOps, integrating multiple security tools to ensure robust code and container security.</div>
                        {/* <div className="case-studies-action"><a className="btn-arrow" href="#"><svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_923_142)"><path d="M8.70801 0.959961L9.29825 2.7665C10.2512 5.68321 12.8308 7.77453 15.8928 8.1128C12.8468 8.37564 10.2578 10.4348 9.3276 13.3343L8.70801 15.2657" stroke="inherit" strokeWidth={2} /><path d="M15.7602 8.12158H0.1875" stroke="inherit" strokeWidth={2} /></g><defs><clipPath id="clip0_923_142"><rect width="15.904" height="14.8437" fill="inherit" transform="translate(0.1875 0.578125)" /></clipPath></defs></svg></a></div> */}
                      </div>
                      <div className="case-studies-image"><img className="img-fluid gsap-img-animation" src={caseStudy1} alt style={{scale: 'none', transform: 'translate(-50%, -50%) translate(746px, 498px)', opacity: 0, visibility: 'hidden'}} /></div>
                      <div className="marquee-wrapper">
                        <div className="marquee-inner">
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon1} alt /></span>
                            <span className="title">Data Science</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon2} alt /></span>
                            <span className="title">System Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon3} alt /></span>
                            <span className="title">UI/UX Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon4} alt /></span>
                            <span className="title">Big Data</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon5} alt /></span>
                            <span className="title">App Development</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon1} alt /></span>
                            <span className="title">Web Development</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon2} alt /></span>
                            <span className="title">UI/UX Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon3} alt /></span>
                            <span className="title">Cloud & DevOps</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon4} alt /></span>
                            <span className="title">Cybersecurity</span>
                          </div>
                          {/* <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon5} alt /></span>
                            <span className="title"></span>
                          </div> */}
                        </div>
                      </div>
                    </div> 
                    <div className="case-studies-item">
                      <div className="item-inner">
                        <h3 className="case-studies-title">Jenkins-JFrog CI</h3>
                        <div className="case-studies-description" style={{width: "60%"}}>Implemented a Jenkins CI pipeline to automate building, scanning, and deploying container images to JFrog Artifactory.</div>
                        {/* <div className="case-studies-action"><a className="btn-arrow" href="#"><svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_923_143)"><path d="M8.70801 0.959961L9.29825 2.7665C10.2512 5.68321 12.8308 7.77453 15.8928 8.1128C12.8468 8.37564 10.2578 10.4348 9.3276 13.3343L8.70801 15.2657" stroke="inherit" strokeWidth={2} /><path d="M15.7602 8.12158H0.1875" stroke="inherit" strokeWidth={2} /></g><defs><clipPath id="clip0_923_143"><rect width="15.904" height="14.8437" fill="inherit" transform="translate(0.1875 0.578125)" /></clipPath></defs></svg></a></div> */}
                      </div>
                      <div className="case-studies-image"><img className="img-fluid gsap-img-animation" src={caseStudy2} alt style={{scale: 'none', transform: 'translate(-50%, -50%) translate(746px, 498px)', opacity: 0, visibility: 'hidden'}} /></div>
                      <div className="marquee-wrapper">
                        <div className="marquee-inner">
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon1} alt /></span>
                            <span className="title">Data Science</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon2} alt /></span>
                            <span className="title">System Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon3} alt /></span>
                            <span className="title">UI/UX Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon4} alt /></span>
                            <span className="title">Big Data</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon5} alt /></span>
                            <span className="title">App Development</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon1} alt /></span>
                            <span className="title">Web Development</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon2} alt /></span>
                            <span className="title">UI/UX Design</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon3} alt /></span>
                            <span className="title">Cloud & DevOps</span>
                          </div>
                          <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon4} alt /></span>
                            <span className="title">Cybersecurity</span>
                          </div>
                          {/* <div className="marquee-item">
                            <span className="icon"><img className="img-fluid" src={brandIcon5} alt /></span>
                            <span className="title"></span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> 
    </div>
  )
}

export default CaseStudies

{/* <section className="space-pt ellipse-top bg-black z-index-2">
<div className="space-pb ellipse-bottom">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="section-title text-center">
          <span className="sub-title justify-content-center"><img className="img-fluid" src="src/assets/images/subtitle-icon.png" alt /> Case Studies</span>
          <h2 className="title"> What's next? our latest client stories</h2>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid g-md-0">
    <div className="row g-0">
      <div className="col-lg-12">
        <div className="case-study-fancy-wrapper">
          <div className="case-studies-wrapper case-studies-style-1">
            <div className="case-studies-img">
              <img className="img-fluid" src="src/assets/images/case-studies/04.png" alt />
              <a href="#" className="category">Finance</a>
            </div>
            <div className="case-studies-info">
              <div className="case-studies-info-inner">
                <h3 className="case-studies-title"><a href="#">Financeoont</a></h3>
                <div className="case-studies-content">
                  <div className="case-studies-description">It must come from within as the natural product of your desire to achieve something and your belief that you are capable.</div>
                </div>
                <div className="case-study-link">
                  <a className="btn-arrow" href="#"><svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_923_136)"><path d="M8.70801 0.959961L9.29825 2.7665C10.2512 5.68321 12.8308 7.77453 15.8928 8.1128C12.8468 8.37564 10.2578 10.4348 9.3276 13.3343L8.70801 15.2657" stroke="inherit" strokeWidth={2} /><path d="M15.7602 8.12158H0.1875" stroke="inherit" strokeWidth={2} /></g><defs><clipPath id="clip0_923_136"><rect width="15.904" height="14.8437" fill="inherit" transform="translate(0.1875 0.578125)" /></clipPath></defs></svg></a>
                </div>
              </div>
            </div>
          </div>
          <div className="case-studies-wrapper case-studies-style-1">
            <div className="case-studies-img">
              <img className="img-fluid" src="src/assets/images/case-studies/01.png" alt />
              <a href="#" className="category">Music</a>
            </div>
            <div className="case-studies-info">
              <div className="case-studies-info-inner">
                <h3 className="case-studies-title"><a href="#">Gozzby</a></h3>
                <div className="case-studies-content">
                  <div className="case-studies-description">It must come from within as the natural product of your desire to achieve something and your belief that you are capable.</div>
                </div>
                <div className="case-study-link">
                  <a className="btn-arrow" href="#"><svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_923_137)"><path d="M8.70801 0.959961L9.29825 2.7665C10.2512 5.68321 12.8308 7.77453 15.8928 8.1128C12.8468 8.37564 10.2578 10.4348 9.3276 13.3343L8.70801 15.2657" stroke="inherit" strokeWidth={2} /><path d="M15.7602 8.12158H0.1875" stroke="inherit" strokeWidth={2} /></g><defs><clipPath id="clip0_923_137"><rect width="15.904" height="14.8437" fill="inherit" transform="translate(0.1875 0.578125)" /></clipPath></defs></svg></a>
                </div>
              </div>
            </div>
          </div>
          <div className="case-studies-wrapper case-studies-style-1 active">
            <div className="case-studies-img">
              <img className="img-fluid" src="src/assets/images/case-studies/02.png" alt />
              <a href="#" className="category">Education</a>
            </div>
            <div className="case-studies-info">
              <div className="case-studies-info-inner">
                <h3 className="case-studies-title"><a href="#">Petfluent</a></h3>
                <div className="case-studies-content">
                  <div className="case-studies-description">It must come from within as the natural product of your desire to achieve something and your belief that you are capable.</div>
                </div>
                <div className="case-study-link">
                  <a className="btn-arrow" href="#"><svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_923_138)"><path d="M8.70801 0.959961L9.29825 2.7665C10.2512 5.68321 12.8308 7.77453 15.8928 8.1128C12.8468 8.37564 10.2578 10.4348 9.3276 13.3343L8.70801 15.2657" stroke="inherit" strokeWidth={2} /><path d="M15.7602 8.12158H0.1875" stroke="inherit" strokeWidth={2} /></g><defs><clipPath id="clip0_923_138"><rect width="15.904" height="14.8437" fill="inherit" transform="translate(0.1875 0.578125)" /></clipPath></defs></svg></a>
                </div>
              </div>
            </div>
          </div>
          <div className="case-studies-wrapper case-studies-style-1">
            <div className="case-studies-img">
              <img className="img-fluid" src="src/assets/images/case-studies/03.png" alt />
              <a href="#" className="category">Pet Care</a>
            </div>
            <div className="case-studies-info">
              <div className="case-studies-info-inner">
                <h3 className="case-studies-title"><a href="#">Mobifluent</a></h3>
                <div className="case-studies-content">
                  <div className="case-studies-description">It must come from within as the natural product of your desire to achieve something and your belief that you are capable.</div>
                </div>
                <div className="case-study-link">
                  <a className="btn-arrow" href="#"><svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_923_139)"><path d="M8.70801 0.959961L9.29825 2.7665C10.2512 5.68321 12.8308 7.77453 15.8928 8.1128C12.8468 8.37564 10.2578 10.4348 9.3276 13.3343L8.70801 15.2657" stroke="inherit" strokeWidth={2} /><path d="M15.7602 8.12158H0.1875" stroke="inherit" strokeWidth={2} /></g><defs><clipPath id="clip0_923_139"><rect width="15.904" height="14.8437" fill="inherit" transform="translate(0.1875 0.578125)" /></clipPath></defs></svg></a>
                </div>
              </div>
            </div>
          </div>
          <div className="case-studies-wrapper case-studies-style-1">
            <div className="case-studies-img">
              <img className="img-fluid" src="images/case-studies/05.png" alt />
              <a href="#" className="category">Traveling</a>
            </div>
            <div className="case-studies-info">
              <div className="case-studies-info-inner">
                <h3 className="case-studies-title"><a href="#">Educatgenix</a></h3>
                <div className="case-studies-content">
                  <div className="case-studies-description">It must come from within as the natural product of your desire to achieve something and your belief that you are capable.</div>
                </div>
                <div className="case-study-link">
                  <a className="btn-arrow" href="#"><svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_923_140)"><path d="M8.70801 0.959961L9.29825 2.7665C10.2512 5.68321 12.8308 7.77453 15.8928 8.1128C12.8468 8.37564 10.2578 10.4348 9.3276 13.3343L8.70801 15.2657" stroke="inherit" strokeWidth={2} /><path d="M15.7602 8.12158H0.1875" stroke="inherit" strokeWidth={2} /></g><defs><clipPath id="clip0_923_140"><rect width="15.904" height="14.8437" fill="inherit" transform="translate(0.1875 0.578125)" /></clipPath></defs></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center mt-5 pt-4">
      <a className="btn btn-effect" href="#">
        <span>All Case Study</span>
        <svg width={20} height={22} viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_59_257)"><path d="M19.4854 11.4293L17.0513 12.221C13.1214 13.4993 10.3036 16.9595 9.84784 21.0668C9.49371 16.981 6.71926 13.5081 2.81255 12.2604L0.210283 11.4293" stroke="white" strokeWidth={2} /><path d="M9.83594 20.8889L9.83594 0" stroke="white" strokeWidth={2} /></g><defs><clipPath id="clip0_59_257"><rect width="21.3333" height={20} fill="white" transform="translate(20) rotate(90)" /></clipPath></defs></svg>
      </a>
    </div>
  </div>
</div>
</section> */}