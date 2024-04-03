import { Container } from "@mui/material";
import contactBg from "../../static/contactBg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
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
                <FontAwesomeIcon icon={faPhone} />
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
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="whitespace-normal">
                  info@packagingheight.com
                </span>
              </a>
              {/* <div className="flex items-center gap-x-3 sm:gap-x-5">
                <FontAwesomeIcon icon={faCalendar} />
                <span>24/7</span>
              </div> */}
              <div className="flex items-center gap-x-3 sm:gap-x-5">
                <FontAwesomeIcon icon={faLocationDot} />
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
                  className="cursor-pointer hover:scale-110"
                />
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="cursor-pointer hover:scale-110"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="cursor-pointer hover:scale-110"
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="cursor-pointer hover:scale-110"
                />
                <FontAwesomeIcon
                  icon={faPinterestP}
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
