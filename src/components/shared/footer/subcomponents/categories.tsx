import { useMediaQuery } from '@mui/material';

export const Categories = (props: any) => {
  const matches = useMediaQuery('(max-width:640px)');
  return (
    <div>
      <h2 className="fw_600 text-sm text-black sm:text-base">{props.title}</h2>
      <ul className="mt-5 flex flex-col gap-y-3">
        {props.list.map((data: any, ind: any) => (
          <li
            key={ind + 1}
            style={{ fontSize: matches ? '10px' : '13px' }}
            className="fw_400 cursor-pointer text-black underline"
          >
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
};
