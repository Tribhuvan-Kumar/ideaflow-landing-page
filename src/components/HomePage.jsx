import React from 'react';
import HeroImg from '../assets/heroImg.png';
import FirstRoundImg from '../assets/firstRoundImg.png';
import EightVCImg from '../assets/8vcImg.png';
import StartXImg from '../assets/startXImg.png';
import Trial1 from '../assets/trial1.png';
import Trial2 from '../assets/trial2.png';
import TestiPerson1 from '../assets/testiPerson1.png';
import TestiPerson2 from '../assets/testiPerson2.png';
import TestiPerson3 from '../assets/testiPerson3.png';
import '../styles/home.css';


const HomePage = () => {

  window.addEventListener('scroll', reveal);

  function reveal() {
    let reveals = document.querySelectorAll('.reveal');
    let tiltAnimation = document.querySelectorAll('.tiltAnimation');

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 150;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }




  return (
    <>
      <div className='py-28 bg-black text-white h-full homepage-content'>

        {/* Home Page Hero Div  */}

        <div className='mx-20 flex justify-between main-content'>
          <div className='w-7/12 mt-16 hero-sec-text'>
            <h1 className='text-5xl mt-10 hero-sec-text-n1'>The Intelligence Amplification Company</h1>
            <p className='text-xl mt-5 hero-sec-text-n2'>At our core, we envision a synergy between humans and technology, united to tackle our world's greatest issues. Our journey commences with a unique notebook, designed to enhance your cognitive abilities and elevate your problem-solving skills.</p>
            <button className='mt-10 border-solid border-2 rounded-lg font-bold py-2 px-5 border-white hover:border-black hover:bg-white hover:text-black hover:font-bold hover:underline'>Try Ideaflow Notes</button>
          </div>
          <div>
            <img className='homepage-hero-img' src={HeroImg} alt=" " />
          </div>
        </div>


        {/* Home Page Partners Div  */}

        <div className='mx-20 mt-32 mb-20 flex flex-col'>
          <div className='flex justify-center mb-10'>
            <h3 className='text-4xl partners-text-custom'>Backed by world-class investors and partners</h3>
          </div>
          <div className='flex justify-between items-center partners-sec-custom reveal'>
            <div className='some-div'><img src={FirstRoundImg} alt="First Round" /></div>
            <div className='some-div'><img src={EightVCImg} alt="8VC" /></div>
            <div className='some-div'><img src={StartXImg} alt="StartX" /></div>
            <div className='some-div'><p className='text-6xl me-5 more-33-section'>+33 more</p></div>
          </div>
        </div>


        {/* Home Page Feature 1 */}

        <div className='mx-20 mb-16 flex justify-between items-center feature-n1-custom'>
          <div><img src={Trial1} className='tiltAnimation' alt=" " /></div>
          <div className='w-5/12 feature-n1-n2 reveal'>
            <h4 className='text-4xl'>Connecting people with matching puzzle pieces</h4>
            <p className='text-xl mt-10'>There are millions of scientists trying to cure the likes of AIDS and Alzheimer’s. Maybe the cure is currently separated in different people’s heads. How can we design the web so that these half-formed solutions can come together?</p>
            <p className='text-sm mt-3'>- Sir Tim Berners-Lee, Creator of the Web</p>
          </div>
        </div>


        {/* Home Page Feature 2 */}

        <div className='mx-20 flex justify-between items-center feature-n2-custom'>
          <div className='w-5/12 feature-n2-n1 reveal'>
            <h4 className='text-4xl'>The auto-suggest layer for human thinking</h4>
            <p className='text-xl mt-10'>- Connect fragments of information from siloed sources faster than ever before.</p>
            <p className='text-xl mt-3'>- Your organization's collective memory at your fingertips.</p>
            <button className='mt-10 border-solid border-2 rounded-lg font-bold py-2 px-5 border-white hover:border-black hover:bg-white hover:text-black hover:font-bold hover:underline'>Learn More</button>
          </div>
          <div><img src={Trial2} className='tiltAnimation' alt=" " /></div>
        </div>



        {/* Home Page Testimonial  */}


        <div className='my-28'>
          <div className='mx-20 mb-16 flex justify-center reveal'>
            <h4 className='text-4xl testimonial-header-custom'>We have worked with thousands of amazing people</h4>
          </div>

          <div className='flex mx-20 justify-around all-testimonial-custom'>

            {/* Testimonial Person 1 */}

            <div className='w-3/12 h-64 flex flex-col justify-between border px-7 py-5 rounded-xl hover:text-black hover:bg-white testimonial-card-custom reveal delay-75 some-div'>
              <div>
                <p className='text-lg'>“A key step to realizing the potential of the Web as a medium for collective intelligence.”</p>
              </div>
              <div className='flex items-center'>
                <div><img className='w-16' src={TestiPerson1} alt=" " /></div>
                <div className='ms-2'>
                  <p className='font-black'>Marty Weiner</p>
                  <p className='text-sm'>Former CTO, Reddit Ideaflow Advisor</p>
                </div>
              </div>
            </div>



            {/* Testimonial Person 2 */}

            <div className='w-3/12 h-64 flex flex-col justify-between border px-7 py-5 rounded-xl hover:text-black hover:bg-white testimonial-card-custom reveal delay-200 some-div'>
              <div>
                <p className='text-lg'>“Ideaflow is the force multiplier for business productivity in this new normal.”</p>
              </div>
              <div className='flex items-center'>
                <div><img className='w-16' src={TestiPerson2} alt=" " /></div>
                <div className='ms-2'>
                  <p className='font-black'>John Devadoss</p>
                  <p className='text-sm'>Founding Director, Microsoft Digital Consulting</p>
                </div>
              </div>
            </div>


            {/* Testimonial Person 3 */}

            <div className='w-3/12 h-64 flex flex-col justify-between border px-7 py-5 rounded-xl hover:text-black hover:bg-white testimonial-card-custom reveal delay-300 some-div'>
              <div>
                <p className='text-lg'>“The amount of value that can be unlocked by connecting the right people and ideas together is incredible. I’m very excited for what Ideaflow is building”.</p>
              </div>
              <div className='flex items-center'>
                <div><img className='w-16' src={TestiPerson3} alt=" " /></div>
                <div className='ms-2'>
                  <p className='font-black'>Tim Draper</p>
                  <p className='text-sm'>Founder, DFJ Ideaflow Investor</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Home Page Hiring Section  */}

        <div className='mt-48 flex flex-col items-center hiring-sec-custom reveal'>
          <h4 className='text-4xl hiring-sec-text-custom'>We're Hiring Key Roles</h4>
          <p className='text-xl mt-2'>Help us extend the human mind.</p>
          <button className='mt-3 border-solid border-2 rounded-lg font-bold py-2 px-5 border-white hover:border-black hover:bg-white hover:text-black hover:font-bold hover:underline'>Join us or refer someone!</button>
        </div>


      </div>
    </>
  )
}

export default HomePage