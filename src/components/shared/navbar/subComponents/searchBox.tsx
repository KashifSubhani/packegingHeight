import Image from "next/image";
import searchIcon from "../../../../static/searchIcon.svg";
export const SearchBox = (props: any) => {
  return (
    <div
      className={`rounded-full border bg-white flex items-center gap-x-3 px-3 ${
        props.height ? props.height : "h-10"
      }`}
      style={{ boxShadow: "0 0 10px -3px lightGrey" }}
    >
      <Image src={searchIcon} alt="searchIcon" width={16} height={17} />
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={(e: any) => {
          props.onChange(e.target.value);
        }}
        className="w-full traking-wider font-thin text-sm h-full"
        style={{ border: "none", outline: "none", boxShadow: "none" }}
      />
      <input type="submit" style={{ display: "none" }} />
    </div>
  );
};
