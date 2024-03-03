import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import chev from "../../../static/chev.svg";
import Image from "next/image";

export const FaqItem = (props: any) => {
  return (
    <Accordion
      sx={{ borderRadius: "5px" }}
      className="overflow-hidden border-none shadow-md"
    >
      <AccordionSummary
        expandIcon={<Image src={chev} alt="" width={16} height={16} />}
        className="fw_400 px-6 py-2 text-sm"
      >
        <h4>{props.item.question}</h4>
      </AccordionSummary>
      <AccordionDetails className="pt-0">
        <div className="mx-3 my-0 border-t border-zinc-200 px-0 pb-0 pt-4 text-sm">
          {props.item.answer}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
