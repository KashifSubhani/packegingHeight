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
          <h1 className="text-4xl fw_600 text-center">Terms & Conditions</h1>
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
          <p className="mt-4 p-0 text-black">
           By using this website, you are agreeing to the below terms and conditions of the website usage. Packaging Height holds all the rights to make amendments to these terms and conditions without any prior notice at any time. Therefore, we encourage you to visit this page regularly to stay updated about possible changes to the Terms and Conditions. Packaging Height owns all the literature and materials used in manufacturing the custom boxes. We do not give or sell these boxes to any other party and reserve all the rights of distributing free samples of the boxes and also using them for our website display.
          </p>
          <h2 className="mt-4 font-bold text-black text-xl">
            Copyright Notice
          </h2>
          <p className="mt-3 p-0 text-black">
           By using this website you are agreeing and acknowledging that all the content on this website including data, text, images, graphics, illustrations, designs, maps, icons, software, and all other materials which are collectively called “Our Website Contents'' are the sole property of Packaging Height and third-party service providers. Copying, storing, republishing, modifying, or otherwise, distributing our website contents are legally prohibited without our written consent.
          </p>
          <h2 className="mt-4 font-bold text-black text-xl">
            User’s Conduct on Packaging Height
          </h2>
          <p className="mt-3 p-0 text-black">
            Users are solely accountable for the content they send, post, upload, or otherwise transmit to or via our website. While using this website, you agree that any kind of material or data that you send, upload, or transmit to or via our website or in connection with our website contents will not include any images, text, trademark, service mark, design, or work copyrighted by any third party unless you have the written authorization or consent from the respective owners.</p>
<p className="mt-4 p-0 text-black">
You also agree and warrant that you will not upload, send, or transmit to or via our website any contents that are indecent, unlawful, infringe the intellectual property rights of our website or any third-party, or that restrict other users from using Packaging Height.</p>
<p className="mt-4 p-0 text-black">
We will not be accountable for the accuracy, quality, or integrity of content posted by our clients or users of our website. And under no circumstances, we will be liable to you for any content you may be exposed to or find offensive, objectionable, or indecent in any way.</p>
<p className="mt-4 p-0 text-black">
You must also know that Packaging Height and its authorized designers have the right but not the obligation to remove any content that violates terms of services or is objectionable otherwise, in their sole discretion. We can protect and disclose your content if needed by law or in case it is essential to comply with the legal procedures, for enforcing terms of service or responding to claims of third parties for violating intellectual rights, or for protecting property, personal safety, and the rights of our website and its users.</p>
<p className="mt-4 p-0 text-black">
It is up to users for providing the most accurate and latest information for the processing of their orders and requests. Our website is for humans and is not meant to be accessed or used by any automated means or robots. The fraudulent use of the content on our website not conforming to these terms and conditions is liable for legal action.</p>
<p className="mt-4 p-0 text-black">
While using our website and placing an order on it, you are warranting that you are legally permitted and have the authority to place an order. In this process, you also authorize Packaging Height to manufacture products on your behalf. In addition, you also have to warrant that you are of legal age before placing an order on our website for binding the legal obligation for any sort of liabilities that you may incur as a result of using our website.</p>
<p className="mt-4 p-0 text-black">
It is solely the user’s responsibility to protect their passwords and control access to their registered account. By using the Packaging Height website, you agree that you will be responsible for all orders placed through your registered account. At the time, when you or anybody who has the access to your account places an order by using your account and password, you are allowing us royalty-free and non-exclusive license to use, modify, publish, adapt, sub-license, display, and create derivative works from your content on our website or the final product for storing design or processing the orders.</p>
<p className="mt-4 p-0 text-black">
To access some segments of our website require users to have registered emails and names as well as passwords for future access. We have the right to ask for more business and personal information before registering your account.</p>
<p className="mt-4 p-0 text-black">
The user is the only responsible entity for protecting the privacy of their password and account credentials and should not be disclosing them to any other individual. In case of any unauthorized use of password-protected areas of our website, users have to agree that they shall be liable for all the consequences of such use.</p>
<p className="mt-4 p-0 text-black">
Your use of Packaging Height constitutes the agreement to use and collection of your information as explained in our Privacy Policy. You can read and acknowledge the explanation of our privacy policy and the usage and collection of your personal and business information.
          </p>
          <h2 className="mt-8 font-bold text-black text-xl">
            Rules of Liability and Indemnification
          </h2>
          <p className="mt-4 p-0 text-black">
            By using Packaging Height, you are agreeing to indemnify, defend, and protect the website including, its representatives, members, directors, suppliers, vendors, subcontractors, and affiliates against and from any damages and claims if any charge, claim, arbitration, demand, or action is made against us. These claims can be based upon, arising from, and relating to wrongful acts of buyers, or issues to the printing products manufactured by us and ordered by customers:
          </p>
          <ul className="list-disc mt-8 pl-6 flex flex-col gap-y-3">
            <li>It infringes any patent, copyright, or other intellectual property rights of any person</li>
            <li>It contains material that is scandalous, obscene, defamatory, libelous, or slanderous</li>
            <li>Is the result of any unauthorized access to our websites password-protected areas</li>
            </ul>
              <p className="mt-8 p-0 text-black">
            You shall indemnify us and hold us harmless from and against any damages, losses, expenses, and costs that may arise out of or due to claims which may 
             include:
                </p>
           <ul className="list-disc mt-8 pl-6 flex flex-col gap-y-3">
            <li>Defend us against such a claim
             </li>
            <li>Paying any award or judgment</li>
             <li>And reimbursing us for legal costs that may incur in responding</li>
             </ul>

          <p className="mt-8 p-0 text-black">
            Under no conditions Packaging Height or its employees, members, directors, vendors, representatives, affiliates, subcontractors, and suppliers are responsible for any death, injury, damage, loss, claim, the act of God, delay, accident, or any punitive, special, consequential, or incidental damages regardless of their nature, whether they are in contract, tort, or not.
          </p>
          <p className="mt-4 p-0 text-black">
            We are also not liable for damages that may take place in any way connected to any use of Packaging Height, or any delays or inabilities to use this website, and for any data, information, software, products, and services obtained via our website, even if the other part has advised about the possibility of such damages or troubles. Under no circumstances Packaging Height is totally liable to you for losses, damages, and causes of action including but not limited to negligence or arising from this contract or use of our website exceeding the paid amounts by customers to the company for their orders and requests.
          </p>
          <h2 className="mt-8 font-bold text-black text-xl">
            Return and Refund Policy
          </h2>
          <p className="mt-4 p-0 text-black">
            According to our refund policy, in case you find any defects in the product, or the delivered boxes are not as per your ordered specifications then you need to inform us within 3 working days after receiving the order. Though we do not issue a credit or refund to you, you can get a reprinting of the whole order. However, the reprinting of your original order is subject to the determination of the defect or faults with the delivery. If you find ordered products defective, you are required to submit digital proof of defection.
            </p>
           <p className="mt-4 p-0 text-black">
Our team of experts will be determining whether the defect came from us or is due to any misinformation by the clients. If it is proved on the company side, we will be reprinting your original order. But, if it is on the client's side, all the expenses of reprinting will be paid by the client. You are also bound to return the whole order within seven working days of order delivery to avail of this entitlement.
          </p>
          <h2 className="mt-8 font-bold text-black text-xl">
Terms and Conditions for Order Placement, Payment, and Cancellations
          </h2>
          <p className="mt-4 p-0 text-black">
            All prices for our products on this website are in US dollars (USD). Therefore, all the payments for orders will be made in the same currency. Owing to the custom nature of our printing and packaging products and other services we offer, we do not start working on your orders for printing and packaging jobs until you make a full payment that includes all charges, shipping and handling fees, and taxes through our approved payment modes. As a part of the order placement process, we need users and buyers to approve the electronic proof of their custom boxes.</p>
          <p className="mt-4 p-0 text-black">
As soon as you approve the proof, we send the printing jobs to the press department. Once you approve the proof and the job is sent to the press, you are not allowed to make changes to the artwork files and job specifications. You have a very limited time of 4 hours to cancel your order after the proof is approved. Such annulment will cost a fee of 5% of the total order sum earlier the order is negated. We do not guarantee the cancellation of your orders beyond the 24-hour limit.
          </p>

          <h2 className="mt-8 font-bold text-black text-xl">
            Design Orders
          </h2>
          <p className="mt-4 p-0 text-black">
           Packaging Height does not issue any refunds or credits for any design service. All orders for designing are non-refundable.
          </p>
          <h2 className="mt-8 font-bold text-black text-xl">
            Sales Tax Policy
          </h2>
          <p className="mt-4 p-0 text-black">
            We charge our clients with sales tax on all kinds of orders. However, if you are entitled to tax exemption, please make sure to provide your tax exemption certificate when you place the order.
          </p>
          <h2 className="mt-8 font-bold text-black text-xl">
            Terms of Artwork/Files Submission
          </h2>
          <p className="mt-4 p-0 text-black">
            Our creative design team makes electronic and hard copy proofs from the artwork provided by the customers. We ask you to submit artwork with a resolution of at least 300 dpi in the final format and CMYK format. In case you fail to provide artwork in CMYK format and at least 300 dpi resolution, we will not be answerable for blurred, contorted, or pixilated printing and color changes when it comes to converting your files into the CMYK format. </p>
 <p className="mt-4 p-0 text-black">
You are liable for providing accurate print-ready artwork including any modifications in the alignment or orientation of the pages of your submitted files. Although we take all precautionary measures to avoid the loss of your submitted artwork, we are not responsible for any loss or damage to your artwork files in the process. </p>
 <p className="mt-4 p-0 text-black">
By uploading your artwork to our website, you are agreeing that you have the ownership of all the materials or you have the written consent to use the data from the respective entities. </p>
 <p className="mt-4 p-0 text-black">
We reserve the right to refuse any order that we perceive as illegal or have infringed the copyrights of any third party. You are the one to accept responsibility for the content or material you provide for the procession of your orders. We also have the right to deny an order without mentioning any reasons. It is noteworthy that we will not accept any offensive, improper, or indecent material for printing.
          </p>
          <h2 className="mt-8 font-bold text-black text-xl">
             Proofs and Color Accuracy
          </h2>
          <p className="mt-4 p-0 text-black">
            Packaging Height requires users and buyers to approve the proof of their printing products or services they order for. We do not send any custom box to the press without the client’s approval. Therefore, customers are responsible for checking the provided proofs by logging in to their accounts. We are not responsible for delays that may occur due to late or non-approval of digital or hard copy proofs. Please keep in mind that the turnaround time that we offer on our website starts when you approve the proof. </p>
       <p className="mt-4 p-0 text-black">
It is your obligation to make sure that you have reviewed the proof thoroughly before approving it. You must be checking it against the original file you have submitted to validate and check for possible issues in copy, spacing, font style, final text, bleeds, punctuation, image placement, or layout. The digital proofs do not show transparency, color changes from RGB or Pantone to CMYK or print issues. Also, the application of UV lamination may affect the appearance of the printed colors. Therefore, we are not liable for any such change in prints or colors for the laminated items. Customers are fully liable for all things contained in their final approved proofs. </p>
          <p className="mt-4 p-0 text-black">
We will reproduce the colors of the submitted graphic files as accurately as possible, but we cannot guarantee that they match in color and density. Due to inherent limitations in the printing methods and image ink requirements, the accuracy of color reproduction cannot be ensured. We make our best efforts to match the color density. However, we take no responsibility for color differences in the final product and the graphic files sent. Under no circumstances will we entertain any reprints for color variations that may occur during the printing process.
             </p>
          <h2 className="mt-8 font-bold text-black text-xl">
            Gang Printing
          </h2>
           <p className="mt-4 p-0 text-black">
             We at Packaging Height do not use gang printing for most of our printing products. At times, based on the client’s requirements we may choose the printing method that we see best suited for printing the particular printing product.
            </p>
          <h2 className="mt-8 font-bold text-black text-xl">
            Overruns and Underruns
          </h2>
           <p className="mt-4 p-0 text-black">
             Normally, we try to deliver the exact amount of the asked products with an additional amount without charging any additional costs. In case, you receive fewer items than the ordered amount, we will bill for the amount you received only. However, we strictly follow the general trade practice of delivering 5% extra of the ordered quantity.
            </p>
          <h2 className="mt-8 font-bold text-black text-xl">
            Changes to our Website and Terms and Conditions
          </h2>
           <p className="mt-4 p-0 text-black">
             We hold the right to change any portion of our website or Terms and Conditions at any time with or without prior notice to the customers and users of our website. The revisions to our website and Terms and conditions will be uploaded on our website and will be applicable immediately. Your continuous usage of our website after possible changes are live will indicate your agreement with them.
            </p>
          <div className="py-10  px-3" style={{ background: "#F1F8F1" }}>
        <div>
          <h2 className="text-4xl fw_600 text-left">How to Contact US?</h2>
          <p className="mt-4 text-left fw_400">
            You can contact us via email at +1(307) 429 2922 or mail us at info@packagingheight.com
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
