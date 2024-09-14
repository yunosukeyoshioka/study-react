import {useEffect} from 'react';

const useBgLightBlue = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "white";
    }
  //[]内の変数が実行されたときにuseEffectが実行される
  }, []); 
  return {}
}

export default useBgLightBlue;
