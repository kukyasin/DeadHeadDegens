import Image from 'next/image';

import SimpleSlider from '../Slider';

const images = Array(24).fill('/images/nft-placeholder.png'); // replace with your NFT images


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative flex-grow bg-center bg-cover h-screen" style={{backgroundImage: "url('/images/background.png')"}}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={150}
            height={150}
          />
        </div>
      </div>
      <div className="flex-grow bg-black flex flex-col justify-center items-center">
        <h1 className="text-center text-6xl font-bold py-4 font-rajdhani mt-[80px]">Roadmap</h1>
        <div className="w-1/2 px-4">
          <h2 className="text-4xl font-semibold mb-2 font-rajdhani text-center mt-8">Step 1</h2>
          <p className="mb-4 text-3xl text-center font-rajdhani">Here are the details for the first step of the roadmap.</p>
          <h2 className="text-4xl font-semibold mb-2 font-rajdhani text-center mt-8">Step 2</h2>
          <p className="mb-4 text-3xl text-center font-rajdhani">Here are the details for the second step of the roadmap.</p>
        </div>
      </div>
      <div className="w-full mt-8">
        <div className="m-[-6px] p-0">
          <SimpleSlider images={images} direction="right" />
        </div>  
        <div className="m-[-6px] p-0">
          <SimpleSlider images={images} direction="left" />
        </div>  
        <div className="m-[-6px] p-0">
          <SimpleSlider images={images} direction="right" />
        </div>  
      </div>
    </div>
  )
}
