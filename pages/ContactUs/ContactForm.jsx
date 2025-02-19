import { useState } from "react";
import subtitleIcon from "/src/assets/images/subtitle-icon.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("Please fill in all required fields.");
      return;
    }

    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("Your message has been sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus("There was an error, please try again.");
      }
    } catch (error) {
      setSubmitStatus("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="pt-5 ellipse-top bg-black">
      <div className="space-pb ellipse-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="section-title text-center">
                <span className="sub-title d-flex justify-content-center">
                  <img
                    className="img-fluid"
                    src={subtitleIcon}
                    alt="Subtitle Icon"
                  />
                  contact us
                </span>
                <h2 className="title">Need assistance?</h2>
              </div>
              <div className="form-wrapper">
                <form
                  className="contact-form form-style-border border-white-1100"
                  onSubmit={handleSubmit}
                >
                  <div className="row ">
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        placeholder="Name"
                        aria-label="Name"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        placeholder="Email"
                        aria-label="Email"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        placeholder="Phone"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-lg-12">
                      <textarea
                        className="form-control"
                        rows="6"
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="btn btn-effect">
                        {isLoading ? (
                          <span>Sending...</span>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <svg
                              width="20"
                              height="22"
                              viewBox="0 0 20 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_59_253)">
                                <path
                                  d="M19.4854 11.4293L17.0513 12.221C13.1214 13.4993 10.3036 16.9595 9.84784 21.0668C9.49371 16.981 6.71926 13.5081 2.81255 12.2604L0.210283 11.4293"
                                  stroke="white"
                                  strokeWidth="2"
                                />
                                <path
                                  d="M9.83594 20.8889L9.83594 0"
                                  stroke="white"
                                  strokeWidth="2"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_59_253">
                                  <rect
                                    width="21.3333"
                                    height="20"
                                    fill="white"
                                    transform="translate(20) rotate(90)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
                {submitStatus && (
                  <div className="submit-status mt-3">
                    <p className="!text-green-300">{submitStatus}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
