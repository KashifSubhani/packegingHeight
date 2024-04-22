import { Navbar } from "@/components/shared/navbar/navbar";
import { getServerSideProps } from "@/services/categoriesService";
import { Footer } from "@/components/shared/footer/footer";
import { Container } from "@mui/material";

const Index = ({ data, boxProducts, shapeProducts }: any) => {
  return (
    <div>
      <Navbar
        data={data}
        boxProducts={boxProducts}
        shapeProducts={shapeProducts}
      />
      <div className="py-10  px-3" style={{ background: "#F1F8F1" }}>
        <div>
          <h1 className="text-4xl fw_600 text-center">Privacy Policy</h1>
          <p className="mt-4 text-center fw_400">
            Protecting Your Products, Respecting Your Privacy
            <br className="hidden md:block" /> Packaging Height's Commitment to
            Secure and Confidential Handling of Your Information.
          </p>
        </div>
      </div>
      <Container maxWidth={"lg"}>
        <div className="py-10">
          <p className="mt-4 p-0 text-black">
            Visiting our website{" "}
            <a href="https://packagingheight.com/">packagingheight.com</a> is an
            acceptance of agreement to the privacy policy described on our
            website. Packaging Height knows well and is managing the privacy of
            users of the website strictly. It is assured that any information
            that is collected for the processing of the order or any other query
            will not be shared or revealed to any third-party user, and will
            cautiously be used only for customer service, fulfilling shipping
            requests, and contacting the customers for feedback.
            <br />
            <br />
            Please understand we will reveal your information when required by
            law or to protect our interests and safety and those of other
            visitors to our website, or when you allow us to do so. Your
            information can also be disclosed when we have a good-faith belief
            that it is necessary to abide by a current judicial proceeding, a
            court order or legal process served on our website.
          </p>
          <h2 className="mt-4 font-bold text-black text-xl">
            Information Collection
          </h2>
          <p className="mt-3 p-0 text-black">
            We collect information from you when you register on the site, place
            an order, respond to a survey or communication such as e-mail, or
            participate in another site feature. When ordering or registering,
            we may ask you for your name, e-mail address, mailing address, phone
            number or other information. You may, however, visit our site
            anonymously. Like many websites, we use “cookies” to enhance your
            experience and gather information about visitors and visits to our
            websites. Please refer to the “cookies” section below for
            information about cookies and how we use them.
          </p>

          <h2 className="mt-8 font-bold text-black text-xl">
            Uses of Information
          </h2>
          <p className="mt-4 p-0 text-black">
            We may use the information we collect from you when you register,
            purchase products, enter a contest or promotion, respond to a survey
            or marketing communication, surf the website, or use certain other
            site features in the following ways: To personalize your site
            experience and to allow us to deliver the type of content and
            product offerings in which you are most interested. To allow us to
            better service you in responding to your customer service requests.
            To quickly process your transactions. To administer a contest,
            promotion, survey or other site feature. If you have opted-in to
            receive our e-mail newsletter, we may send you periodic e-mails. If
            you would no longer like to receive promotional e-mails from us,
            please refer to the “How can you opt-out, remove or modify
            information you have provided to us?” section below. If you have not
            opted-in to receive e-mail newsletters, you will not receive these
            e-mails. Visitors who register or participate in other site features
            such as marketing programs and ‘members-only’ content will be given
            a choice whether they would like to be on our e-mail list and
            receive e-mail communications from us.
            <br />
            <br />
            We do not provide, distribute or sell our website users and
            customers’ information to any other party. The website users and
            customers’ information can be used for marketing and improvement of
            the packagingheight.com website, products, services and promotional
            offers. Please note we also use this information, to contact you
            regarding important updates on our website and other information we
            think may be useful and of interest to you.
          </p>

          <h2 className="mt-8 font-bold text-black text-xl">
            Information Protection
          </h2>
          <p className="mt-4 p-0 text-black">
            The security of our website users and customer's information is of
            high priority to us. We take all reasonable measures against
            unauthorized access or use of your personal and business information
            online and offline. Access to website users and customers’
            information is restricted in our offices. Our site uses the Secure
            Socket Layer (SSL) encryption, which is the highest form of data
            security system when information is sent or received over the
            internet. Although SSL encryption verifies the integrity of
            information and security of sending/receiving servers, information
            is not 100% safe over the internet. We therefore cannot warrant the
            security of the information you send us over the Internet.
          </p>
          <h2 className="mt-8 font-bold text-black text-xl">Cookies</h2>
          <p className="mt-4 p-0 text-black">
            Do we use cookies? Yes!
            <br />
            <br />A cookie is actually set of data programmed and stored on your
            computer for an extended period of time by our website. A cookie
            will permit you to use our website as a specific individual and
            relate to your information in our servers/records. Cookies need to
            be enabled in order to use packagingheight.com website. You can
            remove cookies by following instructions in your web browser. Each
            browser is a little different, so look at your browser Help menu to
            learn the correct way to modify your cookies. If you turn cookies
            off, you won’t have access to many features that make your site
            experience more efficient and some of our services will not function
            properly. However, you can still use many features of our website.
          </p>

          <div className="py-10  px-3" style={{ background: "#F1F8F1" }}>
            <div>
              <h2 className="mt-8 font-bold text-black text-xl">Contact US</h2>
              <p className="mt-4 text-left fw_400">
                <strong>
                  If there are any questions regarding this privacy policy,
                  please call +1(307) 429 2922 or email info@packagingheight.com
                  for assistance.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export { getServerSideProps };
export default Index;
