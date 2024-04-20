import { Container } from "@mui/material";
import contactImg from "../../static/contactImg.jpg";
import { useState } from "react";
import { useRouter } from "next/router";
import { resetForm } from "@/services/categoriesService";
import { toast } from "react-toastify";

export const ContactFormSection = () => {
  const [finalData, setFinalData] = useState<any>({});
  const router = useRouter();

  const onchnage = (key: any, val: any) => {
    const updatedData = { ...finalData, [key]: val };
    setFinalData(updatedData);
  };

  const sendEmail = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mjvnrldz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      if (response.ok) {
        setFinalData({ ...resetForm(finalData), color: "1-Color" });
        router.push("/thank-you");
      } else {
        toast.error("Failed to send email");
      }
    } catch (error) {
      toast.error("Failed to send email");
    }
  };
  return (
    <div className="pt-14">
      <Container maxWidth="lg">
        <div>
          <div>
            <h1 className="text-4xl fw_600 text-center">Contact Us</h1>
            <p className="mt-4 text-center fw_400">
              Choose a packaging style for your custom boxes, start designing
              with us, and get your
              <br className="hidden md:block" /> boxes with the most advanced
              printing techniques.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-x-6 lg:gap-x-10 mt-14">
            <div className="col-span-12 md:col-span-6 flex items-end">
              <div>
                <h1 className="fw_600 text-xl">Let's Connect</h1>
                <p className="mt-2">
                  Don’t hesitate to contact us on also during the non-working
                  hours / weekend on whatsapp. You will still get an answer in
                  about 24 hours.
                </p>
                <form
                  onSubmit={sendEmail}
                  className="mt-8 bg-white rounded-lg p-6 lg:p-8 grid grid-cols-12 w-full mx-auto drop-shadow-xl gap-x-3 gap-y-5 sm:gap-5"
                >
                  <div className="col-span-12 sm:col-span-6">
                    <input
                      type="text"
                      required
                      value={finalData.firstName}
                      onChange={(e) => onchnage("firstName", e.target.value)}
                      placeholder="First Name"
                      className="h-10 mt-2 w-full rounded-md border border-zinc-300 px-2 text-xs outline-none"
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-6">
                    <input
                      type="text"
                      required
                      value={finalData.lastName}
                      onChange={(e) => onchnage("lastName", e.target.value)}
                      placeholder="Last Name"
                      className="h-10 mt-2 w-full rounded-md border border-zinc-300 px-2 text-xs outline-none"
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-6">
                    <input
                      type="email"
                      required
                      value={finalData.email}
                      onChange={(e) => onchnage("email", e.target.value)}
                      placeholder="Email"
                      className="h-10 mt-2 w-full rounded-md border border-zinc-300 px-2 text-xs outline-none"
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-6">
                    <input
                      type="text"
                      required
                      value={finalData.subject}
                      onChange={(e) => onchnage("subject", e.target.value)}
                      placeholder="Subject"
                      className="h-10 mt-2 w-full rounded-md border border-zinc-300 px-2 text-xs outline-none"
                    />
                  </div>
                  <div className="col-span-12">
                    <textarea
                      value={finalData.message}
                      onChange={(e) => onchnage("message", e.target.value)}
                      rows={5}
                      className="w-full rounded-md border border-zinc-300 px-3 py-2 text-xs"
                      placeholder="Write your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="greenBg fw_400 h-10 col-span-12 rounded-md text-sm uppercase text-white"
                  >
                    Get Inquiry
                  </button>
                </form>
              </div>
            </div>
            <div
              className="col-span-12 md:col-span-6 bg-center bg-cover rounded-lg hidden md:block"
              style={{ backgroundImage: `url(${contactImg.src})` }}
            ></div>
          </div>
        </div>
      </Container>
    </div>
  );
};
