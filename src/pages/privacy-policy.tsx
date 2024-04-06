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
          <h1 className="text-4xl fw_600 text-center">Privacy Policy</h1>
          <p className="mt-4 text-center fw_400">
            Protecting Your Products, Respecting Your Privacy
            <br className="hidden md:block" /> Packaging Height's Commitment to Secure and Confidential Handling of Your Information.
          </p>
        </div>
      </div>
      <Container maxWidth={"lg"}>
        <div className="py-10">
          <p className="mt-4 p-0 text-black">
            Visiting our website <a href="packagingheight.com">packagingheight.com</a> is an acceptance of agreement to the privacy policy described on our website. Refine Packaging knows well and is managing the privacy of users of the website strictly. It is assured that any information which is collected for processing of the order or any other query will not be shared or revealed to any third party user, and will cautiously be used only for customer service, fulfilling shipping request and for contacting the customers for feedback.
<br>
Please understand we will reveal your information when required by law or to protect our interests and safety and those of other visitors to our website, or when you allow us to do so. Your information can also be disclosed when we have a good-faith belief that it is necessary to abide by a current judicial proceeding, a court order or legal process served on our website.
          </p>
          <h1 className="mt-4 font-bold text-black text-xl">
            What Is a Terms of Service Agreement?
          </h1>
          <p className="mt-3 p-0 text-black">
            A terms of service sets all user rules, restrictions, and prohibited
            behaviors, and outlines your company’s liability limitations,
            property rights, and dispute resolutions.
          </p>
          <p className="mt-3 p-0 text-black">
            You’ve probably seen some alternative titles for a terms of service
            agreement, like:
          </p>
          <ul className="list-disc mt-8 pl-6 flex flex-col gap-y-3">
            <li>Terms of Use</li>
            <li>Terms and Conditions</li>
            <li>ToS Agreement</li>
            <li>General Terms</li>
            <li>Terms</li>
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
