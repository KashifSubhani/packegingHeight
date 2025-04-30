import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface StandarSizeProps {
  productName: string;
}

// 🔧 Config-based multipliers
const dimensionMultipliers: Record<string, number> = {
  "8*6*3": 1,
  "12*10*4": 1.3,
  "16*12*8": 1.8,
};

const materialMultipliers: Record<string, number> = {
  "Rigid Stock": 1,
  "Kraft Rigid Stock": 1.2,
};

const printOptionMultipliers: Record<string, number> = {
  "outside only": 1,
  "both sides": 1.5,
};

export const StandarSize = ({ productName }: StandarSizeProps) => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    productName,
    dimension: "8*6*3",
    material: "Rigid Stock",
    quantity: "100",
    printOption: "outside only",
    price: 0,
  });

  // ✅ Scalable price calculation using config
  useEffect(() => {
    const base = 1;
    const dimensionMultiplier = dimensionMultipliers[formData.dimension] || 1;
    const materialMultiplier = materialMultipliers[formData.material] || 1;
    const printMultiplier = printOptionMultipliers[formData.printOption] || 1;
    const qtyMultiplier = Number(formData.quantity) / 100;

    const calculatedPrice =
      base *
      dimensionMultiplier *
      qtyMultiplier *
      materialMultiplier *
      printMultiplier *
      100;

    setFormData((prev) => ({ ...prev, price: calculatedPrice }));
  }, [
    formData.dimension,
    formData.material,
    formData.quantity,
    formData.printOption,
  ]);

  const onChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("orderData", JSON.stringify(formData));
    router.push("/checkout");
  };

  return (
    <div className="w-full max-w-full overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-12 gap-y-6 gap-x-4 lg:gap-6 bg-[#f1f1f1] p-5"
      >
        <div className="md:col-span-6 col-span-12">
          <label htmlFor="dimension" className="mb-1.5 block">
            Dimensions:
          </label>
          <select
            value={formData.dimension}
            onChange={(e) => onChange("dimension", e.target.value)}
            className="p-3 w-full border-b border-zinc-200 text-xs lg:text-sm outline-none bg-white"
          >
            {Object.keys(dimensionMultipliers).map((dim) => (
              <option key={dim} value={dim}>
                {dim}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-6 col-span-12">
          <label htmlFor="material" className="mb-1.5 block">
            Material:
          </label>
          <select
            value={formData.material}
            onChange={(e) => onChange("material", e.target.value)}
            className="p-3 w-full border-b border-zinc-200 text-xs lg:text-sm outline-none bg-white"
          >
            {Object.keys(materialMultipliers).map((mat) => (
              <option key={mat} value={mat}>
                {mat}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-6 col-span-12">
          <label htmlFor="quantity" className="mb-1.5 block">
            Select Quantity:
          </label>
          <select
            value={formData.quantity}
            onChange={(e) => onChange("quantity", e.target.value)}
            className="p-3 w-full border-b border-zinc-200 text-xs lg:text-sm outline-none bg-white"
          >
            {[100, 150, 250, 500].map((qty) => (
              <option key={qty} value={qty.toString()}>
                {qty}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-6 col-span-12">
          <label htmlFor="printOption" className="mb-1.5 block">
            Print:
          </label>
          <select
            value={formData.printOption}
            onChange={(e) => onChange("printOption", e.target.value)}
            className="p-3 w-full border-b border-zinc-200 text-xs lg:text-sm outline-none bg-white"
          >
            {Object.keys(printOptionMultipliers).map((print) => (
              <option key={print} value={print}>
                {print}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-12">
          <p className="text-lg font-semibold">
            Price: ${formData.price.toFixed(2)}
          </p>
        </div>

        <div className="col-span-12">
          <button
            type="submit"
            className="fw_400 h-8 lg:h-10 w-full greenBg text-xs lg:text-sm uppercase text-white"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};
