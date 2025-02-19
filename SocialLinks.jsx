import { Link } from "react-router-dom";

export const SocialLinks = ({ customStyle = "", scale = "" }) => (
  <div className={`team-social  `}>
    <ul className={` ${customStyle}`}>
      {/* <li className={`${scale}`}>
        <Link to="#">
          <i className="fab fa-facebook-f" />
        </Link>
      </li> */}
      <li className={`${scale}`}>
        <Link to="https://www.instagram.com/cloudnexus.in?igsh=dHZzczFiMjByMXU3">
          <i className="fab fa-instagram text-3xl" />
        </Link>
      </li>
      {/* <li className={`${scale}`}>
        <Link to="#">
          <i className="fab fa-twitter" />
        </Link>
      </li> */}
      <li className={`${scale}`}>
        <Link to="https://www.linkedin.com/company/cloudnexusorg/about/">
          <i className="fab fa-linkedin text-3xl" />
        </Link>
      </li>
    </ul>
  </div>
);
