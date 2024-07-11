import Head from 'next/head'
import React from 'react'

const page = () => {
  
    

  return (
    <section className=' p-6'>
      <Head>
      <title>About Us</title>
    </Head>
       <div className='flex gap-10 justify-center items-center flex-col'>
        <h1 className='text-4xl text-extrabold'>About Us</h1>

        <div className='grid gap-8   justify-center items-center px-6'>
        <p>Welcome to Thought Glow, your gateway to transformative learning experiences in the world of technology and programming. Founded with a vision to empower individuals to reach their fullest potential, we are dedicated to providing top-tier education in programming languages, data structures and algorithms.</p>
        <p>ThoughtGlow is founded by <span className='text-bold'>Rajeev Kumar </span>, a software engineer with two decades of experience at companies like Microsoft, Amazon, and various startups in India and the USA. Driven by the growing demand for programmers in India, he decided to teach programming and help more people enter programming roles.</p>
        <p>What sets us apart is our commitment to excellence in education. Our courses are meticulously crafted by industry experts and delivered through a cutting-edge online platform, ensuring that you receive the highest quality instruction no matter where you are in the world. With Thought Glow, you’ll have access to engaging video lectures, interactive exercises, and personalized guidance from our team of experienced instructors</p>
        <p>But Thought Glow is more than just a learning platform – it’s a community. A community of passionate learners, dedicated educators, and industry professionals coming together to share knowledge, support one another, and inspire growth. When you join Thought Glow, you’re not just enrolling in a course – you’re joining a movement towards a brighter, more empowered future</p>
        <p>Join us at Thought Glow and embark on a transformative learning journey that will shape the trajectory of your career and your life. Together, let’s illuminate the path to success.</p>
       
        </div>

      
       </div>

    </section>
  )
}

export default page
