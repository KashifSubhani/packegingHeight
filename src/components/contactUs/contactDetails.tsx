import { Container } from "@mui/material";
import contactBg from "../../static/contactBg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
export const ContactDetails = () => {
  return (
    <div className="py-14">
      <Container maxWidth="lg">
        <div
          className="py-4 sm:py-8 w-full bg-right sm:bg-left lg:bg-center bg-cover rounded-lg flex justify-end px-4 sm:px-10"
          style={{ backgroundImage: `url(${contactBg.src})` }}
        >
          <div className="w-full sm:w-1/2 py-4">
            <h1 className="fw_600 greenText text-3xl">Live Support</h1>
            <p className="text-base mt-3">
              Looking for a packaging whizz for your business needs? Let’s have
              a talk!
            </p>
            <h2 className="text-black fw_600 mt-8">Toll-free Call Center</h2>
            <div className="mt-6 flex flex-col gap-y-3">
              <a
                title="Click for call me"
                href={`tel:+1(307) 429 2922`}
                className="flex items-center gap-x-3 sm:gap-x-5 text-zinc-600 border-none hover:text-lime-500 no-underline"
              >
                <svg viewBox="0 0 512 512" width="16" height="16" fill="currentColor">
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
                <span>+1(307) 429 2922</span>
              </a>

              {/* <a
                title="Click for call me"
                href={`tel:+1(307) 429 2922`}
                className="flex items-center gap-x-3 sm:gap-x-5 text-zinc-600 hover:text-lime-500 no-underline border-none"
              >
                <FontAwesomeIcon icon={faPhone} />
                <span>+1(307) 429 2922</span>
              </a> */}
              <a
                title="Click for mail me"
                href={`mailto:info@packagingheight.com`}
                className="flex items-center gap-x-3 sm:gap-x-5 text-zinc-600 hover:text-lime-500 no-underline border-none"
              >
                <FontAwesomeIcon icon={faEnvelope} size="1x" />
                <span className="whitespace-normal">
                  info@packagingheight.com
                </span>
              </a>
              {/* <div className="flex items-center gap-x-3 sm:gap-x-5">
                <FontAwesomeIcon icon={faCalendar} />
                <span>24/7</span>
              </div> */}
              <div className="flex items-center gap-x-3 sm:gap-x-5">
                <FontAwesomeIcon icon={faLocationDot} size="1x" />
                <span>
                  <span className="fw_400">Head Office:</span> 30 N Gould St ste
                  R Sheridan, WY 82801
                </span>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-black fw_600">Follow Us:</h2>
              <div className="mt-4 flex items-center gap-x-12 text-xl greenText">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  size="sm"
                  className="cursor-pointer hover:scale-110"
                />
                <FontAwesomeIcon
                  icon={faFacebookF}
                  size="sm"
                  className="cursor-pointer hover:scale-110"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="sm"
                  className="cursor-pointer hover:scale-110"
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="sm"
                  className="cursor-pointer hover:scale-110"
                />
                <FontAwesomeIcon
                  icon={faPinterestP}
                  size="sm"
                  className="cursor-pointer hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
