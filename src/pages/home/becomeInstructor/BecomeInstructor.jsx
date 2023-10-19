import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import ButtonWide from '../../../components/buttons/ButtonWide';

const BecomeInstructor = () => {
  return (
    <div className="flex flex-col md:flex-row items-center w-[80%] lg:w-[60%] mx-auto mt-10">
      <div>
        <Player
          autoplay
          loop
          src="https://lottie.host/e61f7add-8eb9-4571-830f-5a2e16f8fc37/GGCzm28TIU.json"
          className="w-80 h-80 md:w-[450px] md:h-[450px]"
        ></Player>
      </div>

      <div className="space-y-4 md:w-2/5 mx-auto text-center md:text-start">
        <h2 className="text-2xl md:text-4xl font-bold">Become an instructor</h2>

        <p className="font-semibold">
          Instructors from around the world teach millions of learners on
          Alphabetor. We provide the tools and skills to teach what you love.
        </p>

        <ButtonWide>Start Teaching Today</ButtonWide>
      </div>
    </div>
  );
};

export default BecomeInstructor;
