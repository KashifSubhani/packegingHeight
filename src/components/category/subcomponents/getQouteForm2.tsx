import { resetForm } from "@/services/categoriesService";
import { sendContactForm } from "@/services/emailService";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const GetQouteForm2 = (props: any) => {
  const matches = useMediaQuery("(max-width:1280px)");
  const matches2 = useMediaQuery("(max-width:850px)");
  const matches3 = useMediaQuery("(max-width:767px)");
  const router = useRouter();
  const [finalData, setFinalData] = useState<any>({
    color: "1-Color",
    productName: props.productName,
  });

  useEffect(() => {
    if (props.productName) {
      setFinalData({ ...finalData, productName: props.productName });
    }
  }, []);
  const onchnage = (key: any, val: any) => {
    const updatedData = { ...finalData, [key]: val };
    setFinalData(updatedData);
  };

  const sendEmail = async (e: any) => {
    e.preventDefault();
    try {
      await sendContactForm(finalData);
      setFinalData({ ...resetForm(finalData), color: "1-Color" });
      toast.success("Email sent successfully");
      router.push("/thank-you")
    } catch (error) {
      toast.error("Failed to send message");
    }
  };

  return (
    <div
      style={{
        width: matches
          ? matches2
            ? matches3
              ? "100%"
              : "22rem"
            : "28rem"
          : "34rem",
        maxWidth: matches
          ? matches2
            ? matches3
              ? "100%"
              : "22rem"
            : "28rem"
          : "34rem",
      }}
      className="overflow-hidden rounded-xl drop-shadow-xl"
    >
      <div className="greenBg flex h-12 md:h-14 items-center justify-center text-white">
        <p className="fw_600 m-0 p-0 text-xl">Get Custom Quote</p>
      </div>
      <form
        onSubmit={sendEmail}
        className={`grid grid-cols-12 ${
          matches2 ? "gap-3" : "gap-6"
        } bg-white p-3 lg:p-5`}
      >
        <div className="col-span-6">
          <input
            type="text"
            required
            value={finalData.name}
            onChange={(e) => onchnage("name", e.target.value)}
            placeholder="Name"
            className="h-10 lg:h-12 w-full rounded-md border border-zinc-200 px-2 text-xs lg:text-sm outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="email"
            required
            value={finalData.email}
            onChange={(e) => onchnage("email", e.target.value)}
            placeholder="Email"
            className="h-10 lg:h-12 w-full rounded-md border border-zinc-200 px-2 text-xs lg:text-sm outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="tel"
            required
            value={finalData.phone}
            onChange={(e) => onchnage("phone", e.target.value)}
            placeholder="Phone number"
            className="h-10 lg:h-12 w-full rounded-md border border-zinc-200 px-2 text-xs lg:text-sm outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="number"
            required
            value={finalData.quantity}
            onChange={(e) => onchnage("quantity", e.target.value)}
            placeholder="Quantity"
            className="h-10 lg:h-12 w-full rounded-md border border-zinc-200 px-2 text-xs lg:text-sm outline-none"
          />
        </div>
        <div className="col-span-6">
          <select
            required
            value={finalData.color}
            onChange={(e) => onchnage("color", e.target.value)}
            className="h-10 lg:h-12 w-full rounded-md border border-zinc-200 px-2 text-xs lg:text-sm outline-none"
          >
            <option>1-Color</option>
            <option>2-Color</option>
            <option>3-Color</option>
            <option>4-Color</option>
            <option>4/1-Color</option>
            <option>4/2-Color</option>
            <option>4/3-Color</option>
            <option>4/4-Color</option>
          </select>
        </div>
        <div className="col-span-6">
          <input
            type="text"
            required
            value={finalData.shortDescription}
            onChange={(e) => onchnage("shortDescription", e.target.value)}
            placeholder="Description"
            className="h-10 lg:h-12 w-full rounded-md border border-zinc-200 px-2 text-xs lg:text-sm outline-none"
          />
        </div>
        <div className="col-span-12">
          <textarea
            rows={6}
            required
            value={finalData.description}
            onChange={(e) => onchnage("description", e.target.value)}
            className="w-full rounded-md border border-zinc-200 px-2 py-1 text-xs lg:text-sm outline-none shadow-none"
            placeholder="Write your message"
          ></textarea>
        </div>
        <div className="col-span-12">
          <button
            type="submit"
            style={{ background: "#808F91" }}
            className="fw_400 h-8 lg:h-10 w-full rounded-md text-xs lg:text-sm uppercase text-white"
          >
            Get Inquiry
          </button>
        </div>
      </form>
    </div>
  );
};
