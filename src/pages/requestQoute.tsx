import { Footer } from "@/components/shared/footer/footer";
import { Navbar } from "@/components/shared/navbar/navbar";
import { Container } from "@mui/material";
import qouteBg from "../static/qouteBg.svg";
import { getServerSideProps } from "@/services/categoriesService";
const Index = ({ data }: any) => {
  return (
    <div>
      <Navbar data={data} />
      <div className="sm:px-6 sm:pt-6 pb-14">
        <div
          className="bg-center bg-cover w-full pt-20 px-5"
          style={{ backgroundImage: `url(${qouteBg.src})`, height: "30rem" }}
        >
          <h1 className="fw_400 text-center text-2xl leading-tight md:text-3xl lg:text-4xl text-white">
            Request a Quote
          </h1>
          <p className="mt-2 text-center text-sm leading-5 opacity-70 text-white">
            Fill the form below and we reply with a custom quote for your needs.
          </p>
        </div>
        <Container maxWidth="lg" className="-mt-72">
          <form className="bg-white rounded-lg p-6 sm:p-8 grid grid-cols-12 w-full md:w-5/6 lg:w-3/4 mx-auto shadow-xl gap-x-3 gap-y-5 sm:gap-5">
            <div className="col-span-12 sm:col-span-6">
              <label className="text-sm sm:text-base">Enter your Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="h-10 mt-2 w-full rounded-md border border-zinc-300 px-2 text-xs outline-none"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label className="text-sm sm:text-base">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="h-10 mt-2 w-full rounded-md border border-zinc-300 px-2 text-xs outline-none"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label className="text-sm sm:text-base">Product Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="h-10 mt-2 w-full rounded-md border border-zinc-300 px-2 text-xs outline-none"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label className="text-sm sm:text-base">Select Code</label>
              <input
                type="text"
                placeholder="Full Name"
                className="h-10 mt-2 w-full rounded-md border border-zinc-300 px-2 text-xs outline-none"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label className="text-sm sm:text-base">Quantity</label>
              <input
                type="text"
                placeholder="Full Name"
                className="h-10 mt-2 w-full rounded-md border border-zinc-300 px-2 text-xs outline-none"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label className="text-sm sm:text-base">Phone Number</label>
              <input
                type="text"
                placeholder="Full Name"
                className="h-10 mt-2 w-full rounded-md border border-zinc-300 px-2 text-xs outline-none"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <input
                type="number"
                placeholder="Width"
                className="h-10 w-full rounded-md border border-zinc-300 px-2 text-xs outline-none"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <input
                type="number"
                placeholder="Depth"
                className="h-10 w-full rounded-md border border-zinc-300 px-2 text-xs outline-none"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <input
                type="number"
                placeholder="Length"
                className="h-10 w-full rounded-md border border-zinc-300 px-2 text-xs outline-none"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <input
                type="number"
                placeholder="Inch"
                className="h-10 w-full rounded-md border border-zinc-300 px-2 text-xs outline-none"
              />
            </div>
            <div className="col-span-12 flex flex-col gap-y-2">
              <label>Attach Your Design:</label>
              <label className="flex h-10 rounded-md border border-zinc-300">
                <p className="mb-0 flex h-full items-center bg-zinc-200 px-2 text-xs">
                  Choose File
                </p>
                <p className="flex h-full items-center px-4 text-xs">
                  No file choosen
                </p>
                <input
                  type="file"
                  placeholder="Width"
                  className="hidden h-8 w-full rounded-md border border-zinc-300 px-2 text-xs"
                />
              </label>
            </div>
            <div className="col-span-12">
              <textarea
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
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export { getServerSideProps };
export default Index;
