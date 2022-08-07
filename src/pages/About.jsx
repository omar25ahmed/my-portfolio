/* eslint-disable max-len */

const About = () => (
  <div className="transition duration-500 h-auto bg-gray-200 dark:bg-gray-700" id="about">
    <div className="flex flex-col items-center justify-start" data-aos="fade-right">
      <h1 className="transition duration-500 text-3xl font-bold text-center after:bg-purple-700 dark:after:bg-purple-800 after:content-[''] after:block after:h-1 after:my-3 after:mx-auto after:w-32 dark:text-gray-300 font-Finger-Paint">About</h1>
      <div className="transition duration-500 container bg-[#f5f5f5] dark:bg-gray-600 dark:text-gray-300 rounded-2xl p-4 my-6 w-[80%] text-[1rem] md:text-[1.2rem] font-Poppins">
        <p className="text-center w-[80%] my-4 mx-auto">
          Hello, my name is
          {' '}
          <span className="transition duration-500 font-Finger-Paint text-[#8424aa] dark:text-purple-800">Omar</span>
          , I’m a
          {' '}
          <span className="transition duration-500 font-Finger-Paint text-[#8424aa] dark:text-purple-800">full-stack web developer</span>
          {' '}
          who is familiar with JavaScript, React, Redux, and Rails and am open to any new opportunity,
          {' '}
          I have finished my online school Bootcamp while doing that remotely without having any previous experience so that’s indicate overcoming stress and managing time skills,
        </p>
        <p className="text-center w-[80%] my-4 mx-auto">
          I have
          passed 5 modules of intensive and various programming topics and each module got
          subprojects like ruby on rails projects, react projects and a final capstone using all the skills that I have learned, also I have done all of that in pair programming so that I’m a great team player.
        </p>
        <p className="text-center w-[80%] my-4 mx-auto">
          {' '}
          I hope these pieces of information will help you to understand me better and I hope you enjoy my portfolio.
        </p>
      </div>
    </div>
  </div>
);

export default About;
