import { Container, useMediaQuery } from '@mui/material';
import Image from 'next/image';

import steps from '../../static/steps.svg';
import { GetQouteForm1 } from './subcomponents/getQouteForm1';

export const GetQoute = () => {
  const matches = useMediaQuery('(max-width:880px)');
  return (
    <Container maxWidth={'lg'}>
      <div className="pb-10 pt-5">
        <h1 className="fw_600 text-center text-2xl leading-tight md:text-3xl lg:text-4xl">
          Get a Quote
        </h1>
        <p className="mt-2 text-center text-sm leading-5 opacity-70">
          We work closely with our clients, getting to know what they need
        </p>
        <div
          className={`mt-14 grid grid-cols-11 gap-y-8 rounded-lg py-5 px-3 sm:px-5 md:gap-y-0 ${
            matches ? 'gap-x-0 md:gap-x-10' : 'gap-x-14'
          } md:py-10 lg:p-14 xl:grid-cols-12`}
          style={{ background: '#F1F8F1' }}
        >
          <div className="col-span-11 flex justify-end md:col-span-6">
            <GetQouteForm1 />
          </div>
          <div className="col-span-11 flex items-center md:col-span-5 xl:col-span-6">
            <div className="flex items-center gap-x-4 lg:gap-x-8">
              {!matches && (
                <div className="hidden md:block">
                  <Image src={steps} alt="steps" height={400} />
                </div>
              )}
              <div className="flex flex-col gap-y-6">
                <div className="flex h-24 items-start gap-x-4 md:h-auto">
                  <div
                    style={{
                      width: '2.2rem',
                      minWidth: '2.2rem',
                      height: '2.2rem',
                    }}
                    className={`greenBg ${
                      matches ? 'flex' : 'hidden'
                    } items-center justify-center rounded-full text-lg text-white`}
                  >
                    1
                  </div>
                  <div>
                    <h1 className="fw_600 mb-2 text-sm">Request A process</h1>
                    <p
                      className="fw_400 m-0 p-0 text-xs"
                      style={{ color: '#024E77' }}
                    >
                      Easy and simple way to request a quote or
                      <br className={matches ? 'hidden' : 'block'} />
                      order directly through our website.
                    </p>
                  </div>
                </div>
                <div className="flex h-24 items-start gap-x-4 md:h-auto">
                  <div
                    style={{
                      width: '2.2rem',
                      minWidth: '2.2rem',
                      height: '2.2rem',
                    }}
                    className={`greenBg ${
                      matches ? 'flex' : 'hidden'
                    } items-center justify-center rounded-full text-lg text-white`}
                  >
                    2
                  </div>
                  <div>
                    <h1 className="fw_600 mb-2 text-sm">Choose Design</h1>
                    <p
                      className="fw_400 m-0 p-0 text-xs"
                      style={{ color: '#024E77' }}
                    >
                      Come up with your design or choose a layout,
                      <br className={matches ? 'hidden' : 'block'} />
                      logo, fonts, color, etc., from our designing sections.
                    </p>
                  </div>
                </div>
                <div className="flex h-24 items-start gap-x-4 md:h-auto">
                  <div
                    style={{
                      width: '2.2rem',
                      minWidth: '2.2rem',
                      height: '2.2rem',
                    }}
                    className={`greenBg ${
                      matches ? 'flex' : 'hidden'
                    } items-center justify-center rounded-full text-lg text-white`}
                  >
                    3
                  </div>
                  <div>
                    <h1 className="fw_600 mb-2 text-sm">Confirmation</h1>
                    <p
                      className="fw_400 m-0 p-0 text-xs"
                      style={{ color: '#024E77' }}
                    >
                      You will get an email or call once your design
                      <br className={matches ? 'hidden' : 'block'} />
                      is approved.
                    </p>
                  </div>
                </div>
                <div className="flex h-24 items-start gap-x-4 md:h-auto">
                  <div
                    style={{
                      width: '2.2rem',
                      minWidth: '2.2rem',
                      height: '2.2rem',
                    }}
                    className={`greenBg ${
                      matches ? 'flex' : 'hidden'
                    } items-center justify-center rounded-full text-lg text-white`}
                  >
                    4
                  </div>
                  <div>
                    <h1 className="fw_600 mb-2 text-sm">
                      Manufacturing Process
                    </h1>
                    <p
                      className="fw_400 m-0 p-0 text-xs"
                      style={{ color: '#024E77' }}
                    >
                      After that, we manufacture custom designs
                      <br className={matches ? 'hidden' : 'block'} />
                      boxes with approved design options.
                    </p>
                  </div>
                </div>
                <div className="flex h-24 items-start gap-x-4 md:h-auto">
                  <div
                    style={{
                      width: '2.2rem',
                      minWidth: '2.2rem',
                      height: '2.2rem',
                    }}
                    className={`greenBg ${
                      matches ? 'flex' : 'hidden'
                    } items-center justify-center rounded-full text-lg text-white`}
                  >
                    5
                  </div>
                  <div>
                    <h1 className="fw_600 mb-2 text-sm">Delivery</h1>
                    <p
                      className="fw_400 m-0 p-0 text-xs"
                      style={{ color: '#024E77' }}
                    >
                      You will get the order delivered within 8-10
                      <br className={matches ? 'hidden' : 'block'} />
                      days after manufacturing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
