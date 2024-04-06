import { Navbar } from "@/components/shared/navbar/navbar";
import { getServerSideProps } from "@/services/categoriesService";
import { Footer } from "@/components/shared/footer/footer";
import { Container } from "@mui/material";

const Index = ({ data }: any) => {
  return (
    <div>
      <Navbar data={data} />
      <div className="py-10  px-3" style={{ background: "#F1F8F1" }}>
        <div>
          <h1 className="text-4xl fw_600 text-center">About Us</h1>
          <p className="mt-4 text-center fw_400">
            Choose a packaging style for your custom boxes, start designing with
            us, and get your
            <br className="hidden md:block" /> boxes with the most advanced
            printing techniques.
          </p>
        </div>
      </div>
      <Container maxWidth={"lg"}>
        <div className="py-10">
           <h2 className="mt-4 font-bold text-black text-xl">
            Who We Are</h2>
          <p className="mt-4 p-0 text-black">
            Packaging Height is a first-rate packaging solution platform dedicated to assisting small and large business owners with the highest quality, well-designed, and highly affordable packaging needs. Select from the largest packaging range of premium material boxes to satisfy your products’ requirements or order printed custom packaging boxes in any shape, size, color, design, and luxury finishing, we will manufacture them for you. Our in-house designing, manufacturing, and printing facilities allow us to make packaging easier for you!
          </p>
          <h2 className="mt-4 font-bold text-black text-xl">
            Our History
          </h2>
          <p className="mt-3 p-0 text-black">
            Packaging Height is a family-owned business providing eco-friendly custom packaging solutions across the USA, Canada, and surrounding areas for 15 years. Packaging Height, a Sheridan, Wyoming-based company, that has grown swiftly to rank among the top suppliers and producers in its field. Due to our strong ethos and ambition, modern technology, professionalism, and all-inclusive top-notch packaging solutions, we have been assisting businesses with packaging solutions and marking our success through our distinctive packaging in a saturated industry.
          </p>
          <h2 className="mt-4 font-bold text-black text-xl">
            What We Do
          </h2>
          <p className="mt-3 p-0 text-black">
            We are specialized in designing and manufacturing unique custom packaging solutions for businesses. Our in-house dedicated teams guide the customers as per their individual and product needs. Packaging Height teams work hard, spend the optimum amount of time on research, and develop the most modern yet aesthetically appealing boxes and make your product prominent, leading to the most loving brand in the niche. Our services include:
          </p>
          <ul className="list-disc mt-8 pl-6 flex flex-col gap-y-3">
            <li>Custom packaging FREE consultancy and design facility</li>
            <li>Packaging boxes in a wide range of eco-friendly materials</li>
            <li>Fastest turnaround time</li>
            <li>Competitive pricing</li>
            <li>Specialized CBD Boxes</li>
          </ul>

         <h2 className="mt-4 font-bold text-black text-xl">
            We Value Our Clients!
          </h2>
          <p className="mt-3 p-0 text-black">
Our customers, whom we consider members of our family, are the most crucial component of our organization. We cherish and appreciate comments, and we encourage innovation in custom boxes and packaging. The simplest order placement processes are followed by our fully controlled packaging processes. From inquiry to delivery, we ensure complete guidance and support to the buyer through exceptional customer service in order to design and prepare premium-quality packaging boxes with love and care. We never compromise our quality and offer FREE design and delivery services. Our ad hoc discounts give customers true packaging flexibility, which helps your profit margins grow.</p>

          <h2 className="mt-8 font-bold text-black text-xl">
            Personalized Packaging
          </h2>
          <p className="mt-4 p-0 text-black">
            The diverse range of effective packaging with distinctive beautiful, eye-catching, and well-crafted designs adorned with vivid colors helps businesses build or redefine their brands. We understand that care and fit matter the most. However, our custom packaging solutions are designed to meet your needs and requirements We may provide you with custom kraft boxes, window display boxes to promote your items in a fashionable and glamorous way, paper bags to ensure a clean atmosphere and appealing brand representation, or personalized pillow gift boxes to surprise your loved ones. For each and every event, product, and service, we have something to offer. If you are looking for something we are not offering, we can create and deliver them to your doorstep.</p>

          <h2 className="mt-8 font-bold text-black text-xl">
            Sustainable Solutions
          </h2>
          <p className="mt-4 p-0 text-black">
            Our mission is to protect the environment and stop the harm that the packaging business does. Our goal is to produce goods that are recyclable and sustainable while reducing our carbon footprint. They are produced with less harmful materials, fewer boxes for packaging, non-toxic materials, and the capacity to reuse the same boxes repeatedly. These environmentally friendly packaging options may have a salutary but long-lasting effect on both customers and the environment. Businesses and start-ups need to stand out through their product packaging; thus, we provide them with eco-friendly packaging options that help them establish their brand identity.</p>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export { getServerSideProps };
export default Index;
