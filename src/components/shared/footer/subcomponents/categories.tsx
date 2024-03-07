import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";

export const Categories = (props: any) => {
  const matches = useMediaQuery("(max-width:640px)");
  const router = useRouter();
  return (
    <div>
      <p className="fw_600 text-sm text-black sm:text-base">{props.title}</p>
      <ul className="mt-5 flex flex-col gap-y-3">
        {props.list.map((data: any, ind: any) => (
          <li
            onClick={() => router.push(data.link)}
            key={ind + 1}
            style={{ fontSize: matches ? "10px" : "13px" }}
            className="fw_400 cursor-pointer text-black underline"
          >
            {data.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
