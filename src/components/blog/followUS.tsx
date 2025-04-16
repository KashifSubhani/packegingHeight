import Image from "next/image";
import blackInstagram from "../../static/blackInstagram.svg";
import blackFacebook from "../../static/blackFacebook.svg";
import blackIinkedin from "../../static/blackIinkedin.svg";
import blackTwitter from "../../static/blackTwitter.svg";
import blackYoutube from "../../static/blackYoutube.svg";
import Link from "next/link";

export const FollowUS = () => {
  return (
    <div className="w-full ">
      <h1 className="fw_600 text-2xl primaryText text-[#6fc957]">Follow Us:</h1>
      <div
        style={{ background: "#EFFCF9" }}
        className="w-full flex flex-col gap-y-3 p-3 mt-3 rounded-xl"
      >
        <div className="bg-white rounded-xl px-6 py-5 flex items-center gap-x-5">
          <Link className="no-underline" href="#" target="_blank"><Image src={blackInstagram} alt="blackInstagram" width={30} /></Link>
          <Link className="no-underline" href="#" target="_blank"><Image src={blackFacebook} alt="blackFacebook" width={30} /></Link>
          <Link className="no-underline" href="#" target="_blank"><Image src={blackIinkedin} alt="blackIinkedin" width={30} /></Link>
          <Image src={blackTwitter} alt="blackTwitter" width={30} />
          <Image src={blackYoutube} alt="blackYoutube" width={30} />
        </div>
        <div className="bg-white rounded-xl px-6 py-5">
          <p className="fw_600 text-center primaryText text-xl">
            Want{" "}
            <span className="text-[#6fc957]">
              10% off
            </span>{" "}
            your first order?
          </p>
          <p className="text-center text-sm mt-3">
            Type your email address and we’ll send you the discount code
            directly to your inbox.
          </p>
          <div className="flex items-center mt-5">
            <input
              type="email"
              className="bg-white w-full"
              placeholder="Email Address"
            />
            <button
              
              className="rounded-tr-xl text-white px-4 h-12 greenBg text-sm ml-2 whitespace-nowrap"
            >
              Get Code
            </button>
          </div>
          <p
            className="mt-8 text-blue-800 fw_600 text-center"
            style={{ fontSize: "10px" }}
          >
            JOIN 10000S OF OTHER. Yes, IT’S COMPLETELY FREE.
          </p>
          <p
            className="mt-5 text-blue-800 fw_600 text-center"
            style={{ fontSize: "10px" }}
          >
            By submitting this form you agree to our{" "}
            <Link href="/terms-&-conditions"
              className="underline text-[#606062]"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy"
              className="underline text-[#606062]"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
