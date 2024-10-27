import Spline from '@splinetool/react-spline';

export default function Model() {
  return (
    <div className='w-[100%] h-full flex justify-center items-center bg-slate-900'>
      <Spline classname='cursor-pointer' scene="https://prod.spline.design/znzYHKkuQViQpRXZ/scene.splinecode" />
    </div>
  );
}
