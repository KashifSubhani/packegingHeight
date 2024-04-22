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
          <h1 className="text-4xl fw_600 text-center">Why Us</h1>
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
            Why 1000s of Businesses Trust Packaging Height
          </h2>
          <p className="mt-4 p-0 text-black">
            We're the best-kept secret of the world's top brands. Let’s face it,
            perfect branding takes hard work. That's why Packaging Height only
            offers the very best when it comes to making your custom boxes—a
            seasoned design team, hi-tech printing technologies, and prompt
            delivery. Join thousands of brands that already benefit from this
            winning combination–from small startups to Fortune 500 brands alike.
          </p>
          <h2 className="mt-4 font-bold text-black text-xl">
            Fast & Reliable Custom Packaging Boxes
          </h2>
          <p className="mt-3 p-0 text-black">
            We're on a mission to help companies, large and small, harness the
            potential of custom packaging. We firmly believe that creative
            packaging can do way more than just protect your products. It can be
            a conversation starter for your brand.
            <br />
            <br />
            Get high-quality custom printed boxes that you can customize from
            corner to corner: the shape, color, artwork, texture and size. With
            a low minimum quantity starting from 100 boxes, your custom box
            order will be shipped flat and arrive within 8-10 business days or
            sooner with expedited shipping.
            <br />
            <br />
            Together, we'll revolutionize your custom printed box strategy - at
            a price you'll love. Let your creative streak run wild and unbox
            your brand's latest asset with custom boxes. No matter the idea,
            logo, artwork, shape or size of your box, nothing is out of reach.
          </p>
          <h2 className="mt-4 font-bold text-black text-xl">
            We Make It Easy To Unbox Your Brand's Latest Asset
          </h2>
          <p className="mt-3 p-0 text-black">
            Packaging doesn’t need to be so difficult. We're on a mission to
            help companies, large and small, harness the potential of
            personalized packaging. Together, we'll revolutionize your packaging
            strategy - at a price that suits you. With low minimums, free design
            expertise, super fast delivery and unlimited customization, we'll
            help you create eye-catching packaging that stands out from the
            crowd. When it comes to custom packaging, we're experts in the art
            of making difficult things look simple. Read on to see how we
            consistently produce exceptional boxes.
          </p>
          <h3 className="mt-8 font-bold text-black text-xl">
            Hi-Tech Manufacturing
          </h3>
          <p className="mt-4 p-0 text-black">
            As a leading packaging manufacturer, we oversee and control every
            aspect of production. No part of the process is outsourced, whether
            you order the minimum 100 pieces or 10,000. This allows us to stay
            on top of quality assurance–from preparing your designs to shipping
            your order.
            <br />
            <br />
            Our facility is equipped with world-class machinery for CMYK offset
            printing (for packaging designs with multi-colored graphics) and
            spot color from PMS (for one to three-color jobs). We make sure that
            only the highest quality raw materials, ink, and coating substances
            go through our machines.
          </p>

          <h3 className="mt-8 font-bold text-black text-xl">
            Full Spectrum of Packaging Products and Services
          </h3>
          <p className="mt-4 p-0 text-black">
            Packaging Height can customize your box, from folding cartons and
            corrugated boxes to luxury packaging—whatever its size or shape. Our
            team ensures that its structure and material will suit your product
            and support your branding. We also offer 100% free design support
            and mockups to ensure the style of the final product perfectly
            matches your vision.
          </p>
          <h3 className="mt-8 font-bold text-black text-xl">
            Easy Ordering Process
          </h3>
          <p className="mt-4 p-0 text-black">
            Browse our website and you’ll find the whole gamut of box types,
            industries we serve, and specialization services. Once you’ve chosen
            a type of box or have an original concept for mass production, you
            can easily contact our team via website live chat, requesting a free
            quote through one of our online forms, or give us a call at +1(307)
            429 2922 to speak with a custom box packaging expert.
          </p>
          <h3 className="mt-8 font-bold text-black text-xl">
            Committed and Experienced Specialist Team
          </h3>
          <p className="mt-4 p-0 text-black">
            Our team values respect, accountability, integrity, and
            relationships. We keep in touch with you to make sure we're in sync
            from the time you send us a quote request until you’ve received your
            order.
            <br />
            <br />
            We're also transparent about pricing and delivery. We can help you
            select your box type, sizing, paper stock, and printing to come up
            with a final price that fits your budget and finish date that’s
            within your deadline. We’re upfront about costs so you won’t have to
            worry about being charged any hidden fees in the end.
            <br />
            <br />
            When you choose to work with us, you're enlisting the help of
            seasoned designers and customer care professionals.
          </p>
          <h3 className="mt-8 font-bold text-black text-xl">
            Affordability Meets Quality
          </h3>
          <p className="mt-4 p-0 text-black">
            We source quality materials at competitive prices to give you
            high-quality but affordable packaging. Let us know when you find a
            better price elsewhere—we'll work to beat that price. Moreover, we
            ship boxes to our clients entirely for free.
          </p>
          <h3 className="mt-8 font-bold text-black text-xl">
            Lightning-Fast Delivery
          </h3>
          <p className="mt-4 p-0 text-black">
            Custom orders arrive within 8-10 business days or sooner with
            expedited shipping depending on the quantity of your order, the
            intricacy of your design, and your chosen finishing. If your project
            is urgent, let us know so we can work out an earlier delivery date.
          </p>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export { getServerSideProps };
export default Index;
