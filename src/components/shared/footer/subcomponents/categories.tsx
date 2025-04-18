import { useMediaQuery } from "@mui/material";
import Link from "next/link";


export const Categories = (props: any) => {
  const matches = useMediaQuery("(max-width:640px)");
 
  return (
    <div>
      <p className="fw_600 text-sm text-black sm:text-base">{props.title}</p>
      <ul className="mt-5 flex flex-col gap-y-3">
        {props.list.map((data: any, ind: any) => (
          <li            
            key={ind + 1}
            style={{ fontSize: matches ? "10px" : "13px" }}
           
          >
            <Link href={data.link}  className="fw_400 cursor-pointer text-black hover:underline" >{data.name}</Link>
            
          </li>
        ))}
      </ul>
    </div>
  );
};
