import { renderDescription } from "@/services/descriptionService";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "@mui/material";

export const DetailsContent = (props: any) => {
  return (
    <Container maxWidth="lg">
      <div className="py-10">
        <div className="drop-shadow-md h-10 w-80 items-center gap-x-3 rounded-md bg-white px-3 flex">
          <FontAwesomeIcon icon={faSearch} className="text-sm" />
          <input
            type="text"
            placeholder="Search"
            className="w-full border-none bg-white text-xs shadow-none outline-none"
          />
        </div>

        <h1 className="text-3xl fw_600 mt-8">Description</h1>
        <p className="mt-10 text-sm">
          {renderDescription(props.product.description)}
        </p>
{/*         <ul className="mt-10 flex flex-col gap-y-2">
          <li className="text-xs flex items-center gap-x-2">
            <p className="w-16">Client:</p>{" "}
            <span className="greenText">Beams Collective</span>
          </li>
          <li className="text-xs flex items-center gap-x-2">
            <p className="w-16">Industry:</p>{" "}
            <span className="greenText">Food & Beverage</span>
          </li>
          <li className="text-xs flex items-center gap-x-2">
            <p className="w-16">Location:</p>{" "}
            <span className="">Hong Kong & Australia</span>
          </li>
          <li className="text-xs flex items-center gap-x-2">
            <p className="w-16">Category:</p>{" "}
            <span className="greenText">Mailer Boxes</span>
          </li>
          <li className="text-xs flex items-center gap-x-2">
            <p className="w-16">Type:</p>{" "}
            <span className="">Stander Mailer Box</span>
          </li>
        </ul> */}
      </div>
    </Container>
  );
};
