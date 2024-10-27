import Spline from '@splinetool/react-spline';

export default function Model() {
  return (
    <div className='w-full h-full flex justify-center items-center bg-slate-900'>
      <Spline className='w-[95%] h-auto custom-cursor' scene="https://prod.spline.design/znzYHKkuQViQpRXZ/scene.splinecode" />
    </div>
  );
}
