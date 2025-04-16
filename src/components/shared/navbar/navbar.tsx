// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import chev from "../../../static/chev.svg";
import logo from "../../../static/logo.png";
import { SmallNav } from "./subComponents/smallNav";
import { useRouter } from "next/router";
import { linksData } from "@/demoData/navLinksData";
import IndustriesDropdown from "./subComponents/industriesDropdown";
import { SearchBox } from "./subComponents/searchBox";
import BoxDropdown from "./subComponents/boxDropdown";
import searchIcon from "../../../static/searchIcon.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = (props: any) => {
  const [tab, setTab] = useState("Industries");
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showBoxDropdown, setShowBoxDropdown] = useState(false);
  const [showShapeDropdown, setShowShapeDropdown] = useState(false);
  const [fullNav, setFullNav] = useState(true);
  const [searchVal, setSearchVal] = useState("");
  const pathname = usePathname();
  const bbm = [
    {
      slug: "cardboard-boxes",
      name: "Cardboard Boxes",
    },
    {
      name: "Rigid Boxes",
      slug: "rigid-boxes",
    },
    {
      slug: "kraft-boxes",
      name: "Kraft Boxes",
    },
    {
      name: "Corrugated Boxes",
      slug: "corrugated-boxes",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setFullNav(false);
      } else {
        setFullNav(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleSearch = (e: any) => {
    e.preventDefault();
    router.push(`/search?name=${searchVal}`);
  };

  // useEffect(() => {
  //   const query2A = `*[_type == "category" && box_by_material == true]`;
  //   (async () => {
  //     const dataBoxByMaterial = await client.fetch(query2A);
  //     setBBM(dataBoxByMaterial);
  //   })();
  // }, []);

  return (
    <div
      className={`pb-3 md:pb-0 pt-3 xl:px-10 sticky duration-300 ${fullNav ? "top-0" : "top-0 md:-top-14"
        } z-40`}
      style={{
        background: "#F1F1F2",
        boxShadow: "inset 0px -4px 4px 3px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Container maxWidth={"xl"}>
        <div
          className={`flex w-full justify-between gap-x-10 ${fullNav ? "" : "md:invisible"
            }`}
        >
          <div className="flex items-center gap-x-10 xl:gap-x-20">
            <Link href="/">
              <Image
                src={logo}
                alt={"logo"}
                width={130}
                height={50}
                className="cursor-pointer"
                style={{ minWidth: "130" }}
              /></Link>
          </div>
          <button
            onClick={() => setShowNav(true)}
            className="block text-lg md:hidden"
          >
            <div className="h-[1.5px] bg-black w-7" />
            <div className="h-[1.5px] bg-black w-7 my-2" />
            <div className="h-[1.5px] bg-black w-7" />
          </button>
          <SmallNav
            show={showNav}
            setShow={setShowNav}
            tab={tab}
            setTab={setTab}
          />
          <div className="hidden items-start gap-x-10 md:flex lg:mb-0 lg:gap-x-28 xl:gap-x-40">
            <div className="flex flex-col items-center">
              <p className="fw_400 whitespace-nowrap text-sm">
                Talk to our packaging expert
              </p>
              <Link
                target="_blank"
                title="Click for call me"
                href={`tel:+1(307)4292922`}
                className="greenText fw_400 border-none"
              >
                +1(307) 429 2922
              </Link>
            </div>
            <Link target="_blank"
              title="Click for mail me"
              href={`mailto:info@packagingheight.com`}
              className="fw_400 hidden text-sm text-green-300 lg:block lg:text-zinc-700 border-none hover:text-lime-500"
            >
              info@packagingheight.com
            </Link>
          </div>
        </div>
        <form onSubmit={handleSearch} className="w-full mt-4 block sm:hidden">
          <SearchBox
            placeholder="Search"
            onChange={(val: any) => setSearchVal(val)}
          />
        </form>
        <div
          className={`mt-2 hidden ${fullNav ? "items-end" : "items-center"
            } duration-300 justify-between gap-x-5 md:flex relative`}
        >
          <ul className="flex items-center gap-x-6 lg:gap-x-10 xl:gap-x-14">
            {linksData.map((d: any, ind: any) => (
              <li
                key={ind + 1}
                className={`pb-3`}
                onMouseEnter={() =>
                  d.name === "Industries"
                    ? setShowDropdown(true)
                    : d.name === "Box by Material"
                      ? setShowBoxDropdown(true)
                      : d.name === "Shape & Styles" && setShowShapeDropdown(true)
                }
                onMouseLeave={() => {
                  setShowDropdown(false);
                  setShowBoxDropdown(false);
                  setShowShapeDropdown(false);
                }}

              >
                <Link href={`${d.path}`}
                  className={`${pathname === `${d.path}/` ? "activeLink" : "inactiveLink"} text-[#606062] cursor-pointer fw_600 text-xs lg:text-sm whitespace-nowrap flex items-center gap-x-2
                        ${!["Industries", "Box by Material", "Shape & Styles"].includes(d.name)
                      ? "hover:scale-95 duration-300"
                      : ""
                    }
                        ${["Box by Material", "Shape & Styles"].includes(d.name) ? "relative" : ""}`} >
                  {d.name}
                  {(d.name === "Industries" ||
                    d.name === "Shape & Styles" ||
                    d.name === "Box by Material") && (
                      <Image src={chev} alt="" width={14} height={14} />
                    )}
                  {showDropdown && d.name === "Industries" && (

                    <IndustriesDropdown
                      list={props.data}
                      setShowDropdown={setShowDropdown}
                    />
                  )}
                  {showBoxDropdown && d.name === "Box by Material" && (
                    <BoxDropdown
                      list={bbm}
                      setShowDropdown={setShowBoxDropdown}
                      basepath="/category"
                    />
                  )}
                  {showShapeDropdown && d.name === "Shape & Styles" && (
                    <BoxDropdown
                      list={props.shapeProducts}
                      setShowDropdown={setShowShapeDropdown}
                    />
                  )}
                </Link>
              </li>
            ))}
            <li className="cursor-pointer pb-3 duration-300 hover:scale-105">
              <Link href="/search">
                <Image src={searchIcon} alt="searchIcon" />
              </Link>
            </li>
          </ul>

          <div className="hidden items-center gap-x-4 lg:flex lg:gap-x-8 md:pb-3">
            <Link href="/request-sample-pack"
              className={`text-xs fw_600 greenText bg-transparent greenBorder py-2 w-36 lg:w-40 buttonBorderRadius block text-center`}
            >
              Request a sample pack
            </Link>
            <Link href="/request-quote"
              className="fw_600 greenText greenBorder buttonBorderRadius w-36 bg-transparent py-2 text-xs lg:w-40 block text-center"
            >
              Get a Free Quote
            </Link>
          </div>
          <a
            title="Click for mail me"
            href={`mailto:info@packagingheight.com`}
            className="fw_400 block text-sm text-green-500 lg:hidden lg:text-zinc-700 mb-3"
          >
            info@packagingheight.com
          </a>
        </div>
      </Container>
    </div>
  );
};
