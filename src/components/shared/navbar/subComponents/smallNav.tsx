import { linksData } from "@/demoData/navLinksData";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { faClose } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SmallNav = (props: any) => {
  const pathname = usePathname();

  return (
    <div
      style={{ background: "#F1F1F2" }}
      className={`fixed h-full w-full z-50 left-0 right-0 flex flex-col gap-y-14 items-center justify-center ${props.show ? "top-0" : "-top-full"
        } duration-300`}
    >
      <button
        onClick={() => props.setShow(false)}
        className="absolute top-5 right-5 text-2xl mt-5"
      >
        <div className="pt-[1px] bg-black w-7 rotate-45" />
        <div className="pt-[1px] bg-black w-7 -rotate-45" />
      </button>
      <ul className="flex flex-col items-center gap-y-10">
        {linksData.map((d: any, ind: any) => (
          <li
            key={ind + 1}
          >
            <Link href={`${d.path}`} className={`text-[#606062] cursor-pointer fw_400 text-sm whitespace-nowrap ${pathname === `${d.path}/` ? "activeLink" : "inactiveLink"}`}>
              {d.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-x-2 sm:gap-x-8">
        <Link href="/contact-us"
          className={`text-[#606062] text-xs fw_600 greenText bg-transparent greenBorder py-2 w-40 buttonBorderRadius block text-center`}
        >
          Request a sample pack
        </Link>
        <Link href="/request-quote"
          className="text-[#606062] text-xs fw_600 greenText bg-transparent greenBorder py-2 w-36 sm:w-40 buttonBorderRadius block text-center"
        >
          Get a Free Quote
        </Link>
      </div>
    </div>
  );
};
