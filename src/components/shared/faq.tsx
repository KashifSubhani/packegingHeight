import { Container } from "@mui/material";
import { FaqItem } from "./subcomponents/faqItem";

export const Faq = (props: any) => {
  return props.faqs && props.faqs.length > 0 ? (
    <Container maxWidth={"lg"}>
      <div className="py-10">
        <h3 className="fw_600 text-center text-2xl leading-tight md:text-3xl lg:text-4xl">
          Frequently Asked Question
        </h3>
        <p className="mt-2 text-center text-sm leading-5 opacity-70">
          Here are some common question about our company
        </p>
        <div
          className="mt-14 grid grid-cols-12 gap-y-3 rounded-lg p-4 sm:p-8 md:gap-x-5 lg:gap-x-10 lg:p-14 flex-shrink"
          style={{ background: "#F1F8F1" }}
        >
          {props.faqs.map((item: any, ind: any) => (
            <div className="col-span-12 md:col-span-6 h-max">
              <FaqItem key={ind + 1} item={item} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  ) : (
    <div className="pt-10"></div>
  );
};
