import { resetForm } from "@/services/categoriesService";
import { sendContactForm } from "@/services/emailService";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const QouteForm3 = (props: any) => {
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
    } catch (error) {
      toast.error("Failed to send message");
    }
  };
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100%",
      }}
      className="overflow-hidden mt-5"
    >
      <form
        onSubmit={sendEmail}
        className={`grid grid-cols-12 gap-y-6 gap-x-4 lg:gap-6 bg-white`}
      >
        <div className="col-span-6">
          <input
            type="text"
            required
            value={finalData.name}
            onChange={(e) => onchnage("name", e.target.value)}
            placeholder="Name"
            className="pb-1 w-full border-b border-zinc-200 px-0 text-xs lg:text-sm outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="email"
            required
            value={finalData.email}
            onChange={(e) => onchnage("email", e.target.value)}
            placeholder="Email"
            className="pb-1 w-full border-b border-zinc-200 px-0 text-xs lg:text-sm outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="tel"
            required
            value={finalData.phone}
            onChange={(e) => onchnage("phone", e.target.value)}
            placeholder="Phone number"
            className="pb-1 w-full border-b border-zinc-200 px-0 text-xs lg:text-sm outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="number"
            required
            value={finalData.quantity}
            onChange={(e) => onchnage("quantity", e.target.value)}
            placeholder="Quantity"
            className="pb-1 w-full border-b border-zinc-200 px-0 text-xs lg:text-sm outline-none"
          />
        </div>
        <div className="col-span-6">
          <select
            required
            value={finalData.color}
            onChange={(e) => onchnage("color", e.target.value)}
            className="pb-1 w-full border-b border-zinc-200 px-0 text-xs lg:text-sm outline-none"
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
            className="pb-1 w-full border-b border-zinc-200 px-0 text-xs lg:text-sm outline-none"
          />
        </div>
        <div className="col-span-12">
          <textarea
            rows={1}
            required
            value={finalData.description}
            onChange={(e) => onchnage("description", e.target.value)}
            className="w-full rounded-md border-b border-zinc-200 px-2 py-1 text-xs lg:text-sm outline-none shadow-none"
            placeholder="Write your message"
          ></textarea>
        </div>
        <div className="col-span-12">
          <button
            type="submit"
            className="fw_400 h-8 lg:h-10 w-full greenBg rounded-md text-xs lg:text-sm uppercase text-white"
          >
            Get Inquiry
          </button>
        </div>
      </form>
    </div>
  );
};
