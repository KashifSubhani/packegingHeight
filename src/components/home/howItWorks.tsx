/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import { Container } from '@mui/material';
import Image from 'next/image';

import workImg from '../../static/workImg.svg';
import workImg2 from '../../static/workImg2.svg';
import workImg3 from '../../static/workImg3.svg';

const howWorksData = [
  {
    name: 'Tiny minimums. No maximums.',
    desc: [
      'No matter the size of your custom packaging',
      <br className="hidden sm:block md:hidden xl:block" />,
      ' order, you’ll get the best boxes at prices',
      <br className="hidden sm:block md:hidden xl:block" />,
      ' to match.',
    ],
    img: workImg,
  },
  {
    name: 'Instant quotes',
    desc: [
      'Pick your style, design your boxes, and get',
      <br className="hidden sm:block md:hidden xl:block" />,
      'an instant quote.',
    ],
    img: workImg2,
  },
  {
    name: 'Fast turnarounds',
    desc: [
      'Eligible orders may ship within 10 days or less',
      <br className="hidden sm:block md:hidden xl:block" />,
      ' with priority turnaround options.',
    ],
    img: workImg3,
  },
];
export const HowItWorks = () => {
  return (
    <Container maxWidth={'lg'}>
      <div className="pb-10 pt-5">
        <h1 className="fw_600 text-center text-2xl leading-tight md:text-3xl lg:text-4xl">
          How it works
        </h1>
        <p className="mt-2 text-center text-sm leading-5 opacity-70">
          Select a packaging style, quantity, and choose from custom or stock
          sizes – then start designing your custom boxes. Add{' '}
          <br className="hidden sm:block" />
          customization options like images, text, and any color your brand
          requires. As you design you'll see an instant quote so you{' '}
          <br className="hidden sm:block" />
          know exactly what your final order will come to.
        </p>
        <div
          className={`grid grid-cols-12 mt-14 gap-y-4 md:gap-y-0 md:gap-x-3 lg:gap-x-8`}
        >
          {howWorksData.map((data: any, ind: any) => (
            <div
              key={ind + 1}
              className="grayBg col-span-12 flex flex-col items-center overflow-hidden rounded-md px-4 py-5 md:col-span-4 md:h-72"
            >
              <div className="flex h-32 items-center justify-center">
                <Image src={data.img} alt="data.img" />
              </div>
              <h2 className="fw_600 mt-3 text-center text-sm lg:text-base">
                {data.name}
              </h2>
              <p className="mt-2 text-center text-xs opacity-70 lg:text-sm">
                {data.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
