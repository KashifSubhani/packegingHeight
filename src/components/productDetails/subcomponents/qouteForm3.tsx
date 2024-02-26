export const QouteForm3 = () => {

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100%",
      }}
      className="overflow-hidden mt-5"
    >
      <div className={`grid grid-cols-12 gap-y-6 gap-x-4 lg:gap-6 bg-white`}>
        <div className="col-span-6">
          <input
            type="text"
            placeholder="Name"
            className="pb-1 w-full border-b border-zinc-200 px-0 text-xs lg:text-sm outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="email"
            placeholder="Email"
            className="pb-1 w-full border-b border-zinc-200 px-0 text-xs lg:text-sm outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="tel"
            placeholder="Phone number"
            className="pb-1 w-full border-b border-zinc-200 px-0 text-xs lg:text-sm outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="text"
            placeholder="Quantity"
            className="pb-1 w-full border-b border-zinc-200 px-0 text-xs lg:text-sm outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="text"
            placeholder="Select Box Type"
            className="pb-1 w-full border-b border-zinc-200 px-0 text-xs lg:text-sm outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="text"
            placeholder="Description"
            className="pb-1 w-full border-b border-zinc-200 px-0 text-xs lg:text-sm outline-none"
          />
        </div>
        <div className="col-span-12">
          <textarea
            rows={1}
            className="w-full rounded-md border-b border-zinc-200 px-2 py-1 text-xs lg:text-sm outline-none shadow-none"
            placeholder="Write your message"
          ></textarea>
        </div>
        <div className="col-span-12">
          <button
            className="fw_400 h-8 lg:h-10 w-full greenBg rounded-md text-xs lg:text-sm uppercase text-white"
          >
            Get Inquiry
          </button>
        </div>
      </div>
    </div>
  );
};
