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
            Packaging Height is a family-owned business providing eco-friendly custom packaging solutions across the USA, Canada, and surrounding areas for 15 years. The company is the subsidiary company of the well-known Oasis Packaging Inc. Packaging Height, a Sheridan, Wyoming-based company, that has grown swiftly to rank among the top suppliers and producers in its field. Due to our strong ethos and ambition, modern technology, professionalism, and all-inclusive top-notch packaging solutions, we have been assisting businesses with packaging solutions and marking our success through our distinctive packaging in a saturated industry.
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

          <p className="mt-8 p-0 text-black">
            Despite the different names, these agreements are all the same.
          </p>
          <p className="mt-4 p-0 text-black">
            No matter what you choose to call it, a generic terms of service
            policy can help protect your business from users who might break the
            law or cause harm to your website, app, or other users.
          </p>

          <p className="mt-4 p-0 text-black">
            You can customize our free terms of service template below,
            including the title, so it works for you no matter if your own a:
          </p>

          <ul className="list-disc mt-8 pl-6 flex flex-col gap-y-3">
            <li>Dropshipping businesses</li>
            <li>Marketplace shop</li>
            <li>Retail store</li>
            <li>Ecommerce website or app</li>
            <li>Blog</li>
            <li>Forum</li>
            <li>Subscription-based platform</li>
          </ul>

          <h1 className="mt-8 font-bold text-black text-xl">
            Why You Need a Terms of Service for Your Website or App
          </h1>
          <p className="mt-4 p-0 text-black">
            While a ToS agreement is not required by law, you need to post one
            on your website or app to help:
          </p>

          <ul className="list-disc mt-8 pl-6 flex flex-col gap-y-3">
            <li>Set your users’ expectations</li>
            <li>Protect your business from legal liabilities</li>
            <li>Maintain rights over your intellectual property</li>
            <li>Minimizes Disputes</li>
            <li>Establish trust and transparency with your users</li>
          </ul>

          <h1 className="mt-8 font-bold text-black text-xl">
            Terms of Service Set Your Users’ Expectations
          </h1>
          <p className="mt-4 p-0 text-black">
            One of the purposes of a terms of service policy is to explain the
            rules and guidelines your users must follow while accessing your
            services, which helps set their expectations.
          </p>
          <p className="mt-4 p-0 text-black">
            By clearly communicating what’s allowed and prohibited on your
            website or app and explaining to your users the consequences of
            breaking those rules, you make it easier for your business to
            prevent users from abusing your services or causing harm to others.
          </p>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export { getServerSideProps };
export default Index;
