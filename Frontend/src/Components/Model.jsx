import Spline from '@splinetool/react-spline';

export default function Model() {
  return (
    <div className='w-fit h-full flex justify-center items-center bg-slate-900 self-end'>
      <div className='absolute backdrop-blur-md bg-gray-700/70 w-1/3 h-fit p-5 font-poppins bottom-16 left-8 rounded-3xl'>
        <span className='text-[#0983C8] text-4xl'>Take a look at</span>
        <p className='text-[#e6eff1] text-3xl'> SNAPD Automatic parking System </p>
      </div>
      <Spline className='w-1/2 h-full custom-cursor' scene="https://prod.spline.design/znzYHKkuQViQpRXZ/scene.splinecode" />
    </div>
  );
}
