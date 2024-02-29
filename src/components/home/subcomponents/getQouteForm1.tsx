import { resetForm } from "@/services/categoriesService";
import { sendContactForm } from "@/services/emailService";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";

export const GetQouteForm1 = () => {
  const matches = useMediaQuery("(max-width:1000px)");
  const [finalData, setFinalData] = useState<any>({ color: "1-Color", unit: "Inches" });
  const onchnage = (key: any, val: any) => {
    const updatedData = { ...finalData, [key]: val };
    setFinalData(updatedData);
  };

  // const handleUpload = async (file: any) => {
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   try {
  //     const response = await fetch("/api/upload", {
  //       method: "POST",
  //       body: formData,
  //     });
  //     let res = await response.json();
  //     onchnage("file", { name: res.name, path: res.path });
  //   } catch (error) {
  //     toast.error("Error in uploading file!");
  //   }
  // };
  const sendEmail = async (e: any) => {
    e.preventDefault();
    try {
      await sendContactForm(finalData);
      setFinalData({ ...resetForm(finalData), color: "1-Color", unit: "Inches" });
      toast.success("Email sent successfully");
    } catch (error) {
      toast.error("Failed to send message");
    }
  };
  return (
    <div
      style={{
        width: matches ? "100%" : "26rem",
        minWidth: matches ? "100%" : "26rem",
      }}
      className="overflow-hidden rounded-xl shadow-xl"
    >
      <div className="greenBg flex h-14 items-center justify-center text-white">
        <p className="fw_600 m-0 p-0 text-xl">Get Custom Quote</p>
      </div>
      <form
        onSubmit={sendEmail}
        className="grid grid-cols-12 gap-3 bg-white p-3"
      >
        <div className="col-span-3">
          <input
            type="number"
            required
            value={finalData.width}
            onChange={(e) => onchnage("width", e.target.value)}
            placeholder="Width"
            className="h-10 w-full rounded-md border border-zinc-200 px-2 text-xs outline-none"
          />
        </div>
        <div className="col-span-3">
          <input
            type="number"
            required
            value={finalData.depth}
            onChange={(e) => onchnage("depth", e.target.value)}
            placeholder="Depth"
            className="h-10 w-full rounded-md border border-zinc-200 px-2 text-xs outline-none"
          />
        </div>
        <div className="col-span-3">
          <input
            type="number"
            required
            value={finalData.length}
            onChange={(e) => onchnage("length", e.target.value)}
            placeholder="Length"
            className="h-10 w-full rounded-md border border-zinc-200 px-2 text-xs outline-none"
          />
        </div>
        <div className="col-span-3">
          <select
            required
            value={finalData.unit}
            onChange={(e) => onchnage("unit", e.target.value)}
            className="h-10 w-full rounded-md border border-zinc-200 px-2 text-xs outline-none"
          >
            <option>Inches</option>
            <option>MM</option>
            <option>CM</option>
          </select>
        </div>
        <div className="col-span-6">
          <input
            type="text"
            required
            value={finalData.productName}
            onChange={(e) => onchnage("productName", e.target.value)}
            placeholder="Product Name"
            className="h-10 w-full rounded-md border border-zinc-200 px-2 text-xs outline-none"
          />
        </div>
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
            value={finalData.description}
            onChange={(e) => onchnage("description", e.target.value)}
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
