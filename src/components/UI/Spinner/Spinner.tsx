import { FC } from 'react';
import Lottie from 'lottie-react';

import animationData from '../../../assets/lottie-animations/burger.json';

const Spinner: FC = () => {
  const style = {
    margin: '0 auto',
    width: '200px',
    height: '200px',
  };

  return <Lottie animationData={animationData} loop autoPlay style={style} />;
};

export default Spinner;
