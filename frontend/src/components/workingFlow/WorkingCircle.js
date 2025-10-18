import React from 'react'

export default function WorkingCircle() {
  return (
    <div className="relative mx-20 h-[600px]">
      <div className="absolute top-0 left-0 w-full flex justify-between">
        {/* Left circle */}
        <div
          className="bg-primary rounded-full h-[360px] w-[360px] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out hover:scale-110"
          style={{
            background: "radial-gradient(circle, #93B5FF 0%, #84A5ED 95%)",
            boxShadow: "8px 8px 70px rgba(147, 181, 255, 0.5)",
          }}
        >
          <div className="font-para text-5xl font-semibold bg-white text-primary px-6 py-4 rounded-2xl mb-4">
            1.
          </div>
          <h1 className='font-para text-center text-white text-2xl font-semibold mb-2'>
            Choose a Free Resume Template
          </h1>
          <p className='text-white text-center text-sm leading-snug'>
            Keep the sections that you like <br/> and can remove the rest
          </p>
        </div>

        {/* Right circle */}
        <div
          className="bg-primary rounded-full h-[360px] w-[360px] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out hover:scale-110"
          style={{
            background: "radial-gradient(circle, #EDF1FA 19%, #8C8F94 300%)",
            boxShadow: "8px 8px 70px rgba(237, 241, 250, 0.5)",
          }}
        >
          <div className="font-para text-5xl font-semibold bg-white px-6 py-4 rounded-2xl mb-4">
            3.
          </div>
          <h1 className='font-para text-center text-black text-2xl font-semibold mb-2'>
            Share as <br/>PDF and Download
          </h1>
          <p className='text-paragraph text-center text-sm leading-snug'>
            After filling the details in the<br/> section form, download it
          </p>
        </div>
      </div>

      {/* Center circle */}
      <div
        className="absolute top-[250px] left-1/2 transform -translate-x-1/2 bg-primary rounded-full h-[360px] w-[360px] flex flex-col items-center justify-center z-10
        transition-transform duration-500 ease-in-out hover:scale-110"
        style={{
          background: "radial-gradient(circle, #D7E3FD 12%, rgba(128, 135, 151, 0.5) 300%)",
          boxShadow: "8px 8px 70px rgba(188, 209, 255, 0.5)",
        }}
      >
        <div className="font-para text-5xl font-semibold bg-white px-6 py-4 rounded-2xl mb-4">
          2.
        </div>
        <h1 className='font-para text-center text-black text-2xl font-semibold mb-2'>
          Fill your Latest <br/>Information in fields
        </h1>
        <p className='text-paragraph text-center text-sm leading-snug'>
          Make your own Resume quickly <br/>by filling the details in sections
        </p>
      </div>
    </div>
  )
}
