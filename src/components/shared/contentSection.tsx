/* eslint-disable no-nested-ternary */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import { Container, useMediaQuery } from '@mui/material';
import Image from 'next/image';

import contentImg from '../../static/contentImg.svg';

export const ContentSection = () => {
  const matches = useMediaQuery('(max-width:1024px)');
  const matches2 = useMediaQuery('(max-width:400px)');
  return (
    <Container maxWidth={'lg'}>
      <div style={{ background: '#F1F8F1' }}>
        <div className="flex flex-col-reverse gap-y-6 gap-x-0 rounded-lg py-5 sm:py-10 px-3 sm:px-4 md:flex-row md:gap-y-0 md:gap-x-10 md:py-14 xl:px-14">
          <div className="scrollDiv h-80 overflow-y-auto pl-3 md:pl-5 lg:h-96">
            <div className="scrollItem">
              <h2 className="fw_600 text-lg">What is Lorem Ipsum?</h2>
              <p className="scrollItem mb-0 mt-4 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <h2 className="fw_600 mt-6 text-lg">What is Lorem Ipsum?</h2>
              <p className="mb-0 mt-4 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <h2 className="fw_600 mt-6 text-lg">What is Lorem Ipsum?</h2>
              <p className="mb-0 mt-4 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <h2 className="fw_600 mt-6 text-lg">What is Lorem Ipsum?</h2>
              <p className="mb-0 mt-4 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <h2 className="fw_600 mt-6 text-lg">What is Lorem Ipsum?</h2>
              <p className="mb-0 mt-4 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div
            className={`mx-auto flex ${
              matches2 ? 'h-full' : 'h-80 lg:h-96'
            } md:mx-0 `}
            style={{
              width: matches ? (matches2 ? '100%' : '20rem') : '24rem',
              minWidth: matches ? (matches2 ? '100%' : '20rem') : '24rem',
            }}
          >
            <Image src={contentImg} alt="contentImg" />
          </div>
        </div>
      </div>
    </Container>
  );
};
