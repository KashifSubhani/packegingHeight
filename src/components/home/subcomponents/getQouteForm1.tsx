import { useMediaQuery } from '@mui/material';

export const GetQouteForm1 = () => {
  const matches = useMediaQuery('(max-width:1000px)');

  return (
    <div
      style={{
        width: matches ? '100%' : '26rem',
        minWidth: matches ? '100%' : '26rem',
      }}
      className="overflow-hidden rounded-xl shadow-xl"
    >
      <div className="greenBg flex h-14 items-center justify-center text-white">
        <p className="fw_600 m-0 p-0 text-xl">Get Custom Quote</p>
      </div>
      <div className="grid grid-cols-12 gap-3 bg-white p-3">
        <div className="col-span-3">
          <input
            type="number"
            placeholder="Width"
            className="h-8 w-full rounded-md border border-zinc-200 px-2 text-xs outline-none"
          />
        </div>
        <div className="col-span-3">
          <input
            type="number"
            placeholder="Depth"
            className="h-8 w-full rounded-md border border-zinc-200 px-2 text-xs outline-none"
          />
        </div>
        <div className="col-span-3">
          <input
            type="number"
            placeholder="Length"
            className="h-8 w-full rounded-md border border-zinc-200 px-2 text-xs outline-none"
          />
        </div>
        <div className="col-span-3">
          <input
            type="number"
            placeholder="Inch"
            className="h-8 w-full rounded-md border border-zinc-200 px-2 text-xs outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="text"
            placeholder="Product Name"
            className="h-10 w-full rounded-md border border-zinc-200 px-2 text-xs outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="text"
            placeholder="Select Color"
            className="h-10 w-full rounded-md border border-zinc-200 px-2 text-xs outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="text"
            placeholder="Quantity"
            className="h-10 w-full rounded-md border border-zinc-200 px-2 text-xs outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="text"
            placeholder="Enter your name"
            className="h-10 w-full rounded-md border border-zinc-200 px-2 text-xs outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="tel"
            placeholder="+1 123-123-1234"
            className="h-10 w-full rounded-md border border-zinc-200 px-2 text-xs outline-none"
          />
        </div>
        <div className="col-span-6">
          <input
            type="email"
            placeholder="Email"
            className="h-10 w-full rounded-md border border-zinc-200 px-2 text-xs outline-none"
          />
        </div>
        <div className="col-span-12">
          <label className="fw_400 text-xs">Attach Your Design:</label>
          <label className="flex h-10 rounded-md border border-zinc-200">
            <p className="mb-0 flex h-full items-center bg-zinc-200 px-2 text-xs">
              Choose File
            </p>
            <p className="flex h-full items-center px-4 text-xs">
              No file choosen
            </p>
            <input
              type="file"
              placeholder="Width"
              className="hidden h-8 w-full rounded-md border border-zinc-200 px-2 text-xs"
            />
          </label>
        </div>
        <div className="col-span-12">
          <textarea
            rows={4}
            className="w-full rounded-md border border-zinc-200 px-2 py-1 text-xs"
            placeholder="Write your message"
          ></textarea>
        </div>
        <div className="col-span-12">
          <button
            style={{ background: '#808F91' }}
            className="fw_400 h-8 w-full rounded-md text-xs uppercase text-white"
          >
            Get Inquiry
          </button>
        </div>
      </div>
    </div>
  );
};
