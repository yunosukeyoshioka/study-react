import {useEffect, useMemo} from 'react';
import { useRouter } from 'next/router';

export const useBgLightBlue = () => {
  const router = useRouter(); 

  const bgColor = useMemo(() => {
    return router.pathname === "/" ? "lightblue" : "white";
  }, [router.pathname]);
  
//url(bgColor)が変更されるとuseEffectが実行される
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    return () => {
      document.body.style.backgroundColor = "white";
    }
  //[]内の変数が実行されたときにuseEffectが実行される
  }, [bgColor]); 
  return {}
}

export default useBgLightBlue;
