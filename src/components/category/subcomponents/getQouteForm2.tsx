import { useMediaQuery } from "@mui/material";

export const GetQouteForm2 = () => {
  const matches = useMediaQuery("(max-width:1280px)");
  const matches2 = useMediaQuery("(max-width:850px)");
  const matches3 = useMediaQuery("(max-width:767px)");

  return (
    <div
      style={{
        width: matches ? matches2? matches3? "100%" : "22rem" : "28rem" : "34rem",
        maxWidth: matches ? matches2? matches3? "100%" : "22rem" : "28rem" : "34rem",
      }}
      className="overflow-hidden rounded-xl drop-shadow-xl"
    >
      <div className="greenBg flex h-12 md:h-14 items-center justify-center text-white">
        <p className="fw_600 m-0 p-0 text-xl">Get Custom Quote</p>
      </div>
      <div className={`grid grid-cols-12 ${matches2? "gap-3" : "gap-6"} bg-white p-3 lg:p-5`}>
        <div className="col-span-6">
          <input
            type="text"
            placeholder="Name"
            className="h-10 lg:h-12 w-full rounded-md border border-zinc-200 px-2 text-xs lg:text-sm outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="email"
            placeholder="Email"
            className="h-10 lg:h-12 w-full rounded-md border border-zinc-200 px-2 text-xs lg:text-sm outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="tel"
            placeholder="Phone number"
            className="h-10 lg:h-12 w-full rounded-md border border-zinc-200 px-2 text-xs lg:text-sm outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="text"
            placeholder="Quantity"
            className="h-10 lg:h-12 w-full rounded-md border border-zinc-200 px-2 text-xs lg:text-sm outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="text"
            placeholder="Select Box Type"
            className="h-10 lg:h-12 w-full rounded-md border border-zinc-200 px-2 text-xs lg:text-sm outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="text"
            placeholder="Description"
            className="h-10 lg:h-12 w-full rounded-md border border-zinc-200 px-2 text-xs lg:text-sm outline-none"
          />
        </div>
        <div className="col-span-12">
          <textarea
            rows={6}
            className="w-full rounded-md border border-zinc-200 px-2 py-1 text-xs lg:text-sm outline-none shadow-none"
            placeholder="Write your message"
          ></textarea>
        </div>
        <div className="col-span-12">
          <button
            style={{ background: "#808F91" }}
            className="fw_400 h-8 lg:h-10 w-full rounded-md text-xs lg:text-sm uppercase text-white"
          >
            Get Inquiry
          </button>
        </div>
      </div>
    </div>
  );
};
