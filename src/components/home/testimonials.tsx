/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, useMediaQuery } from '@mui/material';
import { useState } from 'react';

import user1 from '../../static/user1.svg';
import user2 from '../../static/user2.svg';
import user3 from '../../static/user3.svg';
import { MobileTestimonials } from './subcomponents/mobileTestimonials';
import { ReviewUser } from './subcomponents/reviewUser';

const myData = [user1, user2, user3];
export const Testimonials = () => {
  const matches = useMediaQuery('(max-width:640px)');
  const [tab, setTab] = useState(0);
  return (
    <Container maxWidth={'lg'}>
      <div className="pb-10 pt-4">
        <h1 className="fw_600 text-center text-2xl leading-tight md:text-3xl lg:text-4xl">
          Testimonials
        </h1>
        <div className="block sm:hidden">
          <MobileTestimonials />
        </div>
        <div
          className="mt-14 hidden grid-cols-12 gap-y-14 rounded-lg p-8 sm:grid sm:gap-x-10 sm:gap-y-0 sm:py-0 md:px-14 lg:gap-x-20"
          style={{
            background: '#F1F8F1',
            height: matches ? 'max-content' : '30rem',
          }}
        >
          <div className="col-span-12 flex items-center justify-end sm:col-span-6">
            <div className="flex w-full flex-col gap-y-6 md:w-max">
              {myData.map((d: any, ind: any) => (
                <ReviewUser img={d} setTab={setTab} tab={tab} value={ind} />
              ))}
            </div>
          </div>
          <div className="col-span-12 flex items-center sm:col-span-6">
            <div className="relative w-80 py-10">
              <p
                className="absolute top-0 left-0 mb-0 p-0 leading-10"
                style={{ fontSize: '8rem' }}
              >
                “
              </p>
              <h2 className="fw_600 text-sm">
                {tab === 0 &&
                  'Excellent service from the company, I like this company'}
                {tab === 1 && 'Its was a great experience'}
                {tab === 2 &&
                  "it helps me in my difficult times. It's my other brain!"}
              </h2>
              <div className="mt-2 flex items-center gap-x-1 text-yellow-500">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p className="mt-8 text-xs">
                {tab === 0 &&
                  "Since Day 1, it's been nothing but incredible. The PackMojo team has been there for us, answering ALL of our questions, concerns, and doing it with patience and efficiency. PackMojo is a fantastic brand that offers high-quality service and boxes and we couldn't be more grateful for what they have done for us so far! Definitely looking to return for more boxes for sure!"}
                {tab === 1 &&
                  "The PackMojo team has been there for us, answering ALL of our questions, concerns, and doing it with patience and efficiency. Definitely looking to return for more boxes for sure! Since Day 1, it's been nothing but incredible. PackMojo is a fantastic brand that offers high-quality service and boxes and we couldn't be more grateful for what they have done for us so far!"}
                {tab === 2 &&
                  "Definitely looking to return for more boxes for sure! The PackMojo team has been there for us, answering ALL of our questions, concerns, and doing it with patience and efficiency. PackMojo is a fantastic brand that offers high-quality service and boxes and we couldn't be more grateful for what they have done for us so far! Since Day 1, it's been nothing but incredible."}
              </p>
              <p
                className="absolute -bottom-12 right-0 mb-0 p-0 leading-3"
                style={{ fontSize: '8rem' }}
              >
                ”
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
