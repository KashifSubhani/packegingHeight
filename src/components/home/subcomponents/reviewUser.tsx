import Image from 'next/image';

export const ReviewUser = (props: any) => {
  return (
    <div
      onClick={() => props.setTab(props.value)}
      className="flex h-20 w-full cursor-pointer items-center gap-x-4 rounded-lg px-5 md:w-80"
      style={{
        background: '#F8F8F8',
        boxShadow:
          props.tab === props.value ? '0px 0px 15px 8px #E7E4E4' : '0px 0px 8px 1px #E7E4E4',
      }}
    >
      <Image src={props.img} alt="user" />
      <div>
        <h2 className="fw_600 text-sm">MY ATHLETE BOX</h2>
        <p className="text-xs">Designation Name</p>
      </div>
    </div>
  );
};
