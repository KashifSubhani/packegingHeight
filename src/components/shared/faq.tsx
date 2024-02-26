import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

export const Faq = () => {
  return (
    <Container maxWidth={'lg'}>
      <div className="py-10">
        <h1 className="fw_600 text-center text-2xl leading-tight md:text-3xl lg:text-4xl">
          Frequently Asked Question
        </h1>
        <p className="mt-2 text-center text-sm leading-5 opacity-70">
          Here are some common question about our company
        </p>
        <div
          className="mt-14 grid grid-cols-12 gap-y-3 rounded-lg p-4 sm:p-8 md:gap-y-0 md:gap-x-5 lg:gap-x-10 lg:p-14"
          style={{ background: '#F1F8F1' }}
        >
          <div className="col-span-12 flex flex-col gap-y-3 md:col-span-6">
            <Accordion
              sx={{ borderRadius: '5px' }}
              className="overflow-hidden border-none shadow-md"
            >
              <AccordionSummary
                expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
                className="fw_400 px-6 py-2 text-sm"
              >
                Can you design my custom boxes?
              </AccordionSummary>
              <AccordionDetails className="pt-0">
                <div className="mx-3 my-0 border-t border-zinc-200 px-0 pb-0 pt-4 text-sm">
                  Yes! We continue to handle projects requiring two-sided full
                  color printing. After you order custom boxes, we can print on
                  onw side of the box’s exterior and on two sides of its
                  interior. Two-sided printing may entail additional fees, so
                  discuss any plans for this type of printing when you speak
                  with our excellent customer services team about these
                  customization options.
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ borderRadius: '5px' }}
              className="overflow-hidden border-none shadow-md"
            >
              <AccordionSummary
                className="fw_400 px-6 py-2 text-sm"
                expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
              >
                Do you offer discount for large bulk orders? How can I reduce my
                unit price?
              </AccordionSummary>
              <AccordionDetails className="pt-0">
                <div className="mx-3 my-0 border-t border-zinc-200 px-0 pb-0 pt-4 text-sm">
                  Yes! We continue to handle projects requiring two-sided full
                  color printing. After you order custom boxes, we can print on
                  onw side of the box’s exterior and on two sides of its
                  interior. Two-sided printing may entail additional fees, so
                  discuss any plans for this type of printing when you speak
                  with our excellent customer services team about these
                  customization options.
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ borderRadius: '5px' }}
              className="overflow-hidden border-none shadow-md"
            >
              <AccordionSummary
                className="fw_400 px-6 py-2 text-sm"
                expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
              >
                When will I received my order? What is your typical turnaround
                time per project?
              </AccordionSummary>
              <AccordionDetails className="pt-0">
                <div className="mx-3 my-0 border-t border-zinc-200 px-0 pb-0 pt-4 text-sm">
                  Yes! We continue to handle projects requiring two-sided full
                  color printing. After you order custom boxes, we can print on
                  onw side of the box’s exterior and on two sides of its
                  interior. Two-sided printing may entail additional fees, so
                  discuss any plans for this type of printing when you speak
                  with our excellent customer services team about these
                  customization options.
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ borderRadius: '5px' }}
              className="overflow-hidden border-none shadow-md"
            >
              <AccordionSummary
                className="fw_400 px-6 py-2 text-sm"
                expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
              >
                How do I place my order? What happens after I’ve placed my
                order?
              </AccordionSummary>
              <AccordionDetails className="pt-0">
                <div className="mx-3 my-0 border-t border-zinc-200 px-0 pb-0 pt-4 text-sm">
                  Yes! We continue to handle projects requiring two-sided full
                  color printing. After you order custom boxes, we can print on
                  onw side of the box’s exterior and on two sides of its
                  interior. Two-sided printing may entail additional fees, so
                  discuss any plans for this type of printing when you speak
                  with our excellent customer services team about these
                  customization options.
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="col-span-12 flex flex-col gap-y-3 md:col-span-6">
            <Accordion
              sx={{ borderRadius: '5px' }}
              defaultExpanded
              className="overflow-hidden border-none shadow-md"
            >
              <AccordionSummary
                className="fw_400 px-6 py-2 text-sm"
                expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
              >
                Can you print artwork on the inside and outside of my packaging
                box?
              </AccordionSummary>
              <AccordionDetails className="pt-0">
                <div className="mx-3 my-0 border-t border-zinc-200 px-0 pb-0 pt-4 text-sm">
                  Yes! We continue to handle projects requiring two-sided full
                  color printing. After you order custom boxes, we can print on
                  onw side of the box’s exterior and on two sides of its
                  interior. Two-sided printing may entail additional fees, so
                  discuss any plans for this type of printing when you speak
                  with our excellent customer services team about these
                  customization options.
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ borderRadius: '5px' }}
              className="overflow-hidden border-none shadow-md"
            >
              <AccordionSummary
                className="fw_400 px-6 py-2 text-sm"
                expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
              >
                How do I get a quote for my project? How long will it take to
                get a quote?
              </AccordionSummary>
              <AccordionDetails className="pt-0">
                <div className="mx-3 my-0 border-t border-zinc-200 px-0 pb-0 pt-4 text-sm">
                  Yes! We continue to handle projects requiring two-sided full
                  color printing. After you order custom boxes, we can print on
                  onw side of the box’s exterior and on two sides of its
                  interior. Two-sided printing may entail additional fees, so
                  discuss any plans for this type of printing when you speak
                  with our excellent customer services team about these
                  customization options.
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ borderRadius: '5px' }}
              className="overflow-hidden border-none shadow-md"
            >
              <AccordionSummary
                className="fw_400 px-6 py-2 text-sm"
                expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
              >
                How will I Know what my custom box will look like before
                finalizing my order? will I get a proof before printing?
              </AccordionSummary>
              <AccordionDetails className="pt-0">
                <div className="mx-3 my-0 border-t border-zinc-200 px-0 pb-0 pt-4 text-sm">
                  Yes! We continue to handle projects requiring two-sided full
                  color printing. After you order custom boxes, we can print on
                  onw side of the box’s exterior and on two sides of its
                  interior. Two-sided printing may entail additional fees, so
                  discuss any plans for this type of printing when you speak
                  with our excellent customer services team about these
                  customization options.
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </Container>
  );
};
