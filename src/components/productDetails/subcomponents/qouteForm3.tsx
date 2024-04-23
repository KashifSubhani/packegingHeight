import { resetForm } from "@/services/categoriesService";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const QouteForm3 = (props: any) => {
  const [finalData, setFinalData] = useState<any>({
    color: "1-Color",
    productName: props.productName,
  });
  const router = useRouter();
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
        <div className="col-span-6 sm:col-span-4">
          <input
            type="number"
            required
            value={finalData.length}
            onChange={(e) => onchnage("length", e.target.value)}
            placeholder="Length"
            className="pb-1 w-full border-b border-zinc-200 px-0 text-xs lg:text-sm outline-none"
          />
        </div>
        <div className="col-span-6 sm:col-span-4">
          <input
            type="number"
            required
            value={finalData.width}
            onChange={(e) => onchnage("width", e.target.value)}
            placeholder="Width"
            className="pb-1 w-full border-b border-zinc-200 px-0 text-xs lg:text-sm outline-none"
          />
        </div>
        <div className="col-span-6 sm:col-span-4">
          <input
            type="number"
            required
            value={finalData.depth}
            onChange={(e) => onchnage("depth", e.target.value)}
            placeholder="Depth"
            className="pb-1 w-full border-b border-zinc-200 px-0 text-xs lg:text-sm outline-none"
          />
        </div>
        <div className="col-span-6 sm:col-span-4">
          <select
            required
            value={finalData.unit}
            onChange={(e) => onchnage("unit", e.target.value)}
            className="pb-1 w-full border-b border-zinc-200 px-0 text-xs lg:text-sm outline-none"
          >
            <option>Inches</option>
            <option>CM</option>
            <option>MM</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-4">
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
        <div className="col-span-6 sm:col-span-4">
          <select
            required
            value={finalData.stock}
            onChange={(e) => onchnage("stock", e.target.value)}
            className="pb-1 w-full border-b border-zinc-200 px-0 text-xs lg:text-sm outline-none"
          >
            <option>12 PT</option>
            <option>14 PT</option>
            <option>16 PT</option>
            <option>18 PT</option>
            <option>20 PT</option>
            <option>Kraft Stock</option>
            <option>Corrugated Stock</option>
            <option>Rigid</option>
            <option>Stock</option>
          </select>
        </div>
        <div className="col-span-12">
          <textarea
            rows={1}
            value={finalData.message}
            onChange={(e) => onchnage("message", e.target.value)}
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
