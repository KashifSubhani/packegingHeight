import { Navbar } from "@/components/shared/navbar/navbar";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { resetForm } from "@/services/categoriesService";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

interface OrderData {
    productName: string;
    dimension: string;
    material: string;
    quantity: string;
    printOption: string;
    price: number;
}

const Index = ({ data, boxProducts, shapeProducts }: any) => {
    const [orderData, setOrderData] = useState<OrderData | null>(null);
    const [finalData, setFinalData] = useState<any>({});
    const router = useRouter();

    useEffect(() => {
        const stored = localStorage.getItem("orderData");
        if (stored) {
            const parsed: OrderData = JSON.parse(stored);
            setOrderData(parsed);
            setFinalData((prev: any) => ({
                ...prev,
                ...parsed, // Merge all order details
            }));
        }
    }, []);

    const onChange = (key: string, val: any) => {
        setFinalData((prev: any) => ({
            ...prev,
            [key]: val,
        }));
    };

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
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
                setFinalData({ ...resetForm(finalData) });
                router.push("/thank-you");
            } else {
                toast.error("Failed to send email");
            }
        } catch (error) {
            toast.error("Failed to send email");
        }
    };

    if (!orderData) {
        return <p className="text-center mt-10">Loading order summary...</p>;
    }
    return (
        <>
            <Navbar
                data={data}
                boxProducts={boxProducts}
                shapeProducts={shapeProducts}
            />
            <div className="pt-14">
                <Container maxWidth="lg">
                    <h1 className="text-4xl fw_600 text-center">Order Summary</h1>
                    <p className="mt-4 text-center fw_400">
                        Please provide your email, shipping, and billing details, then click the "Checkout" button to proceed with your purchase.
                    </p>
                </Container>
            </div>
            <div className="py-14">
                <Container className="md:max-w-full max-w-[250px] overflow-y-hidden md:overflow-x-hidden overflow-x-scroll bg-white drop-shadow-xl md:p-6 p-4 rounded-lg">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="greenBg md:p-3 p-2 md:text-base text-xs text-black border border-[#dee2e6] border-b-2">
                                    Name
                                </th>
                                <th className="greenBg md:p-3 p-2 md:text-base text-xs text-black border border-[#dee2e6] border-b-2">
                                    Dimensions
                                </th>
                                <th className="greenBg md:p-3 p-2 md:text-base text-xs text-black border border-[#dee2e6] border-b-2">
                                    Material
                                </th>
                                <th className="greenBg md:p-3 p-2 md:text-base text-xs text-black border border-[#dee2e6] border-b-2">
                                    Quantity
                                </th>
                                <th className="greenBg md:p-3 p-2 md:text-base text-xs text-black border border-[#dee2e6] border-b-2">
                                    Print
                                </th>
                                <th className="greenBg md:p-3 p-2 md:text-base text-xs text-black border border-[#dee2e6] border-b-2">
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="md:p-3 p-2 md:text-base text-xs text-center border border-[#dee2e6] bg-[#f9f9f9] text-black">
                                    {orderData.productName}
                                </td>
                                <td className="md:p-3 p-2 md:text-base text-xs text-center border border-[#dee2e6] bg-[#f9f9f9] text-black">
                                    {orderData.dimension}
                                </td>
                                <td className="md:p-3 p-2 md:text-base text-xs text-center border border-[#dee2e6] bg-[#f9f9f9] text-black">
                                    {orderData.material}
                                </td>
                                <td className="md:p-3 p-2 md:text-base text-xs text-center border border-[#dee2e6] bg-[#f9f9f9] text-black">
                                    {orderData.quantity}
                                </td>
                                <td className="md:p-3 p-2 md:text-base text-xs text-center border border-[#dee2e6] bg-[#f9f9f9] text-black">
                                    {orderData.printOption}
                                </td>
                                <td className="md:p-3 p-2 md:text-base text-xs text-center border border-[#dee2e6] bg-[#f9f9f9] text-black">
                                    ${orderData.price.toFixed(2)}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Container>
            </div>
            <div className="py-14">
                <Container className="bg-white drop-shadow-xl md:p-6 p-4 rounded-lg">
                    <div>
                        <h2 className="text-4xl fw_600 text-center mb-14">
                            Shipping Details
                        </h2>
                    </div>
                    <form onSubmit={sendEmail}
                        className="grid md:grid-cols-2 grid-cols-1 gap-5">
                        <div>
                            <label htmlFor="fname" className="mb-1.5 block font-semibold">
                                First Name
                            </label>
                            <input
                                type="text"
                                required
                                onChange={(e) => onChange("fname", e.target.value)}
                                placeholder="First Name"
                                className="p-3 w-full border border-zinc-200 text-xs lg:text-sm outline-none bg-white" />
                        </div>
                        <div>
                            <label htmlFor="lname" className="mb-1.5 block font-semibold">
                                Last Name
                            </label>
                            <input
                                type="text"
                                required
                                onChange={(e) => onChange("lname", e.target.value)}
                                placeholder="Last Name"
                                className="p-3 w-full border border-zinc-200 text-xs lg:text-sm outline-none bg-white" />
                        </div>
                        <div>
                            <label htmlFor="email" className="mb-1.5 block font-semibold">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                onChange={(e) => onChange("email", e.target.value)}
                                placeholder="Email"
                                className="p-3 w-full border border-zinc-200 text-xs lg:text-sm outline-none bg-white" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="mb-1.5 block font-semibold">
                                Phone
                            </label>
                            <input
                                type="tel"
                                required
                                onChange={(e) => onChange("phone", e.target.value)}
                                placeholder="Phone"
                                className="p-3 w-full border border-zinc-200 text-xs lg:text-sm outline-none bg-white" />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="address" className="mb-1.5 block font-semibold">
                                Street Address
                            </label>
                            <input
                                type="text"
                                required
                                onChange={(e) => onChange("address", e.target.value)}
                                placeholder="address"
                                className="p-3 w-full border border-zinc-200 text-xs lg:text-sm outline-none bg-white" />
                        </div>
                        <div className="col-span-2 grid md:grid-cols-3 gap-5">
                            <div>
                                <label htmlFor="city" className="mb-1.5 block font-semibold">
                                    City
                                </label>
                                <input
                                    type="text"
                                    required
                                    onChange={(e) => onChange("city", e.target.value)}
                                    placeholder="City"
                                    className="p-3 w-full border border-zinc-200 text-xs lg:text-sm outline-none bg-white" />
                            </div>
                            <div>
                                <label htmlFor="state" className="mb-1.5 block font-semibold">
                                    State
                                </label>
                                <input
                                    type="text"
                                    required
                                    onChange={(e) => onChange("state", e.target.value)}
                                    placeholder="State"
                                    className="p-3 w-full border border-zinc-200 text-xs lg:text-sm outline-none bg-white" />
                            </div>
                            <div>
                                <label htmlFor="zipcode" className="mb-1.5 block font-semibold">
                                    ZIP Code
                                </label>
                                <input
                                    type="text"
                                    required
                                    onChange={(e) => onChange("zipcode", e.target.value)}
                                    placeholder="ZIP Code"
                                    className="p-3 w-full border border-zinc-200 text-xs lg:text-sm outline-none bg-white" />
                            </div>
                        </div>
                        <div className="col-span-2 mt-10">
                            <button
                                type="submit"
                                className="capitalize fw_400 h-8 lg:h-10 w-fit md:px-10 px-5 mx-auto block greenBg text-xs lg:text-sm text-white"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </form>
                </Container>
            </div>
        </>
    );
}
export default Index;