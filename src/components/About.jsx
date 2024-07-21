import React from 'react'

const About = () => {
  return (
    <div name="about" 
        className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center
        w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-50'>
                    About
                </p>
            </div>

            <p className='text-xl mt-20'>
            As a dedicated and versatile Full Stack Developer, 
            I bring a robust skill set and a deep passion for creating dynamic, 
            user-friendly web applications. 
            With a strong foundation in both front-end and back-end development, 
            I excel at designing and implementing comprehensive solutions 
            that meet complex business requirements. My expertise spans 
            a wide range of technologies including JavaScript, React, Node.js, Express, 
            and MongoDB, enabling me to deliver seamless and efficient web experiences
            </p>

            <br />

            <p className='text-xl'>
                I am passionate about building innovative, user-friendly 
                experiences and robust, scalable server-side solutions. 
                My expertise in both front-end and back-end development allows me to 
                create dynamic and responsive web applications that meet the needs of 
                a diverse range of users. I am committed to continuous learning and 
                staying up-to-date with the latest technologies and trends in the industry.
            </p>
        </div>
    </div>
  )
}

export default About