import { linksData } from "@/demoData/navLinksData";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

export const SmallNav = (props: any) => {
  const router = useRouter();

  const isActive = (p: any) => {
    if (router.pathname.includes(p)) {
      return true;
    }
    return false;
  };

  return (
    <div
      style={{ background: "#F1F1F2" }}
      className={`fixed h-full w-full z-50 left-0 right-0 flex flex-col gap-y-14 items-center justify-center ${
        props.show ? "top-0" : "-top-full"
      } duration-300`}
    >
      <button
        onClick={() => props.setShow(false)}
        className="absolute top-5 right-5 text-2xl"
      >
        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none">
          <g stroke="#000000" stroke-linecap="round" stroke-width="2">
            <path d="M6 18L18 6"/>
            <path d="M18 18L6 6"/>
          </g>
        </svg>
      </button>
      <ul className="flex flex-col items-center gap-y-10">
        {linksData.map((d: any, ind: any) => (
          <li
            onClick={() => router.push(d.path)}
            className={`cursor-pointer fw_400 text-sm whitespace-nowrap ${
              isActive(d.active) ? "activeLink" : "inactiveLink"
            }`}
            key={ind + 1}
          >
            {d.name}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-x-2 sm:gap-x-8">
        <button
          onClick={() => router.push("/contact-us")}
          className={`text-xs fw_600 greenText bg-transparent greenBorder py-2 w-40 buttonBorderRadius`}
        >
          Request a sample pack
        </button>
        <button
          onClick={() => router.push("/request-quote")}
          className="text-xs fw_600 greenText bg-transparent greenBorder py-2 w-36 sm:w-40 buttonBorderRadius"
        >
          Get a Free Quote
        </button>
      </div>
    </div>
  );
};
