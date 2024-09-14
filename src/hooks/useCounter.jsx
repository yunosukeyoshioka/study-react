import { useCallback, useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(false);
  const handleClick = useCallback(() => {
    if(count < 10) {
      setCount((prev_count) => prev_count + 1)
    }
  }, [count]);

  const handleShow = useCallback(() => {
    setIsShow((prev_isShow) => !prev_isShow)
  }, [isShow])
  //使用する物を返す
  return {count, isShow, handleClick, handleShow}
}

export default useCounter;