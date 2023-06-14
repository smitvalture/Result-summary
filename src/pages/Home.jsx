import React from 'react'
import reactionImg from '../assets/images/icon-reaction.svg'
import memoryImg from '../assets/images/icon-memory.svg'
import verbalImg from '../assets/images/icon-verbal.svg'
import visualImg from '../assets/images/icon-visual.svg'

const Home = () => {

  const data = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ]


  return (

    <>
      {/* **************** Desktop & Tablet view **************** */}
      <section className='hidden w-full min-h-screen h-full md:flex justify-center items-center font-Hanken'>
        <div className='w-[680px] h-[480px] grid grid-cols-2 shadow-xl rounded-3xl overflow-hidden'>

          {/* ************* Left ***************** */}
          <div className='min-h-full min-w-full flex flex-col gap-6 justify-center items-center bg-gradient-to-b from-[#7661ec] via-[#4534de] to-[#4333d9] rounded-3xl'>
            <h1 className='text-white/50 font-bold text-lg'>Your Result</h1>
            <div className='w-[170px] h-[170px] flex flex-col justify-center items-center bg-[#4333d9] rounded-full'>
              <h1 className='text-white text-6xl font-extrabold'>76</h1>
              <p className='text-white/50'>of 100</p>
            </div>
            <h1 className='text-white font-bold text-4xl'>Great</h1>
            <p className='text-white/50 w-56 text-center leading-5'>You scored higher than 65% of the people who have taken these tests.</p>
          </div>


          {/* ****************** Right ******************* */}
          <div className='min-h-full min-w-full px-8 flex flex-col gap-6 justify-center'>
            <h1 className='font-bold text-xl'>Summary</h1>

            <div className='flex flex-col gap-4'>

              <div className='flex justify-between items-center gap-2 py-3 px-3 font-bold text-[#c96c68] bg-red-50 rounded-md'>
                <img src={reactionImg} alt="Icon Reaction Test" />
                <p className='w-full'>{data[0].category}</p>
                <p className='text-black/50 w-full text-right'><span className='text-black'>{data[0].score}</span> / 100</p>
              </div>

              <div className='flex justify-between items-center gap-2 py-3 px-3 font-bold text-[#dbb869] bg-yellow-50 rounded-md'>
                <img src={memoryImg} alt="Icon Reaction Test" />
                <p className='w-full'>{data[0].category}</p>
                <p className='text-black/50 w-full text-right'><span className='text-black'>{data[1].score}</span> / 100</p>
              </div>

              <div className='flex justify-between items-center gap-2 py-3 px-3 font-bold text-[#4f9f82] bg-green-50 rounded-md'>
                <img src={verbalImg} alt="Icon Reaction Test" />
                <p className='w-full'>{data[0].category}</p>
                <p className='text-black/50 w-full text-right'><span className='text-black'>{data[2].score}</span> / 100</p>
              </div>

              <div className='flex justify-between items-center gap-2 py-3 px-3 font-bold text-[#3f409e] bg-purple-50 rounded-md'>
                <img src={visualImg} alt="Icon Reaction Test" />
                <p className='w-full'>{data[0].category}</p>
                <p className='text-black/50 w-full text-right'><span className='text-black'>{data[3].score}</span> / 100</p>
              </div>

            </div>

            <button className='w-full mt-8 text-white font-medium py-3 rounded-full bg-[#353d57] hover:bg-gradient-to-b from-[#755ff3] to-[#3932e5] hover:shadow-xl' type="submit">Continue</button>
          </div>
        </div>
      </section>


      {/* ******************** Mobile View ************************ */}
      <section className='md:hidden w-full min-h-screen h-full flex justify-center items-center font-Hanken'>
        <div className='w-full h-screen flex flex-col'>

          {/* ************* Left ***************** */}
          <div className='flex flex-col pt-4 pb-8 gap-4 justify-center items-center bg-gradient-to-b from-[#7661ec] via-[#4534de] to-[#4333d9] rounded-b-3xl'>
            <h1 className='text-white/50 font-bold text-lg'>Your Result</h1>
            <div className='w-[170px] h-[170px] flex flex-col justify-center items-center bg-[#4333d9] rounded-full'>
              <h1 className='text-white text-6xl font-extrabold'>76</h1>
              <p className='text-white/50'>of 100</p>
            </div>
            <h1 className='text-white font-bold text-4xl'>Great</h1>
            <p className='text-white/50 px-16 text-center leading-5'>You scored higher than 65% of the people who have taken these tests.</p>
          </div>


          {/* ****************** Right ******************* */}
          <div className='w-full h-full px-8 py-10 flex flex-col gap-6 justify-between'>
            <div className='flex flex-col gap-6'>
              <h1 className='font-bold text-xl'>Summary</h1>

              <div className='flex flex-col gap-4'>

                <div className='flex justify-between items-center gap-2 py-3 px-3 font-bold text-[#c96c68] bg-red-50 rounded-md'>
                  <img src={reactionImg} alt="Icon Reaction Test" />
                  <p className='w-full'>{data[0].category}</p>
                  <p className='text-black/50 w-full text-right'><span className='text-black'>{data[0].score}</span> / 100</p>
                </div>

                <div className='flex justify-between items-center gap-2 py-3 px-3 font-bold text-[#dbb869] bg-yellow-50 rounded-md'>
                  <img src={memoryImg} alt="Icon Reaction Test" />
                  <p className='w-full'>{data[0].category}</p>
                  <p className='text-black/50 w-full text-right'><span className='text-black'>{data[1].score}</span> / 100</p>
                </div>

                <div className='flex justify-between items-center gap-2 py-3 px-3 font-bold text-[#4f9f82] bg-green-50 rounded-md'>
                  <img src={verbalImg} alt="Icon Reaction Test" />
                  <p className='w-full'>{data[0].category}</p>
                  <p className='text-black/50 w-full text-right'><span className='text-black'>{data[2].score}</span> / 100</p>
                </div>

                <div className='flex justify-between items-center gap-2 py-3 px-3 font-bold text-[#3f409e] bg-purple-50 rounded-md'>
                  <img src={visualImg} alt="Icon Reaction Test" />
                  <p className='w-full'>{data[0].category}</p>
                  <p className='text-black/50 w-full text-right'><span className='text-black'>{data[3].score}</span> / 100</p>
                </div>

              </div>
            </div>

            <button className='w-full mt-8 text-white font-medium py-3 rounded-full bg-[#353d57] hover:bg-gradient-to-b from-[#755ff3] to-[#3932e5] hover:shadow-xl' type="submit">Continue</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home