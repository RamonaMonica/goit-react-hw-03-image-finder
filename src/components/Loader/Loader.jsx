import { Puff as SpinnerLoader } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
      }}
    >
      <SpinnerLoader
        className="loader"
        color="#FFBFFF"
        height={50}
        width={50}
      />
    </div>
  );
};
