import { resetForm } from "@/services/categoriesService";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const GetQouteForm1 = (props: any) => {
  const matches = useMediaQuery("(max-width:1000px)");
  const [finalData, setFinalData] = useState<any>({
    color: "1-Color",
    unit: "Inches",
  });

  useEffect(() => {
    if (props.products && props.products.length > 0)
      setFinalData({ ...finalData, productName: props.products[0].name });
  }, [props.products]);
  const onchnage = (key: any, val: any) => {
    const updatedData = { ...finalData, [key]: val };
    setFinalData(updatedData);
  };

  const router = useRouter();
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
        width: matches ? "100%" : "26rem",
        minWidth: matches ? "100%" : "26rem",
      }}
      className="overflow-hidden rounded-xl shadow-xl h-max"
    >
      <div className="greenBg flex h-14 items-center justify-center text-white">
        <p className="fw_600 m-0 p-0 text-xl">Get Custom Quote</p>
      </div>
      <form
        onSubmit={sendEmail}
        className="grid grid-cols-12 gap-3 bg-white p-3"
      >
        <div className="col-span-4">
          <input
            type="number"
            required
            value={finalData.length}
            onChange={(e) => onchnage("length", e.target.value)}
            placeholder="Length"
            className="h-10 w-full rounded-md border border-zinc-200 px-2 text-xs outline-none"
          />
        </div>
        <div className="col-span-4">
          <input
            type="number"
            required
            value={finalData.width}
            onChange={(e) => onchnage("width", e.target.value)}
            placeholder="Width"
            className="h-10 w-full rounded-md border border-zinc-200 px-2 text-xs outline-none"
          />
        </div>
        <div className="col-span-4">
          <input
            type="number"
            required
            value={finalData.depth}
            onChange={(e) => onchnage("depth", e.target.value)}
            placeholder="Depth"
            className="h-10 w-full rounded-md border border-zinc-200 px-2 text-xs outline-none"
          />
        </div>

        <div className="col-span-6">
          <select
            required
            value={finalData.unit}
            onChange={(e) => onchnage("unit", e.target.value)}
            className="h-10 w-full rounded-md border border-zinc-200 px-2 text-xs outline-none"
          >
            <option>Inches</option>
            <option>CM</option>
            <option>MM</option>
          </select>
        </div>
        <div className="col-span-6">
          <input
            type="date"
            required
            min={new Date().toISOString().split("T")[0]}
            value={finalData.deadline}
            onChange={(e) => onchnage("deadline", e.target.value)}
            placeholder="Depth"
            className="h-10 w-full rounded-md border border-zinc-200 px-2 text-xs outline-none"
          />
        </div>
        {props.products && props.products.length > 0 && (
          <div className="col-span-6">
            <select
              required
              value={finalData.productName}
              onChange={(e) => onchnage("productName", e.target.value)}
              className="h-10 w-full rounded-md border border-zinc-200 px-2 text-xs outline-none"
            >
              {props.products.map((product: any, index: any) => (
                <option key={index + 1}>{product.name}</option>
              ))}
            <option>Other</option>
            </select>
          </div>
        )}
        <div className="col-span-6">
          <select
            required
            value={finalData.color}
            onChange={(e) => onchnage("color", e.target.value)}
            className="h-10 w-full rounded-md border border-zinc-200 px-2 text-xs outline-none"
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
            type="number"
            required
            value={finalData.quantity}
            onChange={(e) => onchnage("quantity", e.target.value)}
            placeholder="Quantity"
            className="h-10 w-full rounded-md border border-zinc-200 px-2 text-xs outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="text"
            required
            value={finalData.name}
            onChange={(e) => onchnage("name", e.target.value)}
            placeholder="Enter your name"
            className="h-10 w-full rounded-md border border-zinc-200 px-2 text-xs outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="tel"
            required
            value={finalData.phone}
            onChange={(e) => onchnage("phone", e.target.value)}
            placeholder="+1 123-123-1234"
            className="h-10 w-full rounded-md border border-zinc-200 px-2 text-xs outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="email"
            required
            value={finalData.email}
            onChange={(e) => onchnage("email", e.target.value)}
            placeholder="Email"
            className="h-10 w-full rounded-md border border-zinc-200 px-2 text-xs outline-none"
          />
        </div>
        {/* <div className="col-span-12">
          <label className="fw_400 text-xs">Attach Your Design:</label>
          <label className="flex h-10 rounded-md border border-zinc-200">
            <p className="mb-0 flex h-full items-center bg-zinc-200 px-2 text-xs">
              Choose File
            </p>
            <p className="flex h-full items-center px-4 text-xs">
              {finalData && finalData.file && finalData.file.name
                ? finalData.file.name
                : "No file choosen"}
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={(e: any) => {
                handleUpload(e.target.files[0]);
              }}
              className="hidden h-8 w-full rounded-md border border-zinc-200 px-2 text-xs"
            />
          </label>
        </div> */}
        <div className="col-span-12">
          <textarea
            rows={5}
            required
            value={finalData.message}
            onChange={(e) => onchnage("message", e.target.value)}
            className="w-full rounded-md border border-zinc-200 px-2 py-1 text-xs"
            placeholder="Write your message"
          ></textarea>
        </div>
        <div className="col-span-12">
          <button
            type="submit"
            style={{ background: "#808F91" }}
            className="fw_400 h-10 w-full rounded-md text-xs uppercase text-white"
          >
            Get Inquiry
          </button>
        </div>
      </form>
    </div>
  );
};
