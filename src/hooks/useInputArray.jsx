import { useCallback, useState } from "react";

const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);
  const handleChange = useCallback((e) => {
    // if(e.target.value.length >= 5){
    //   alert("5文字以内入力してください");
  // }
    setText(e.target.value)
  }, [text])

  const handleAdd = useCallback(() => {
    setArray((prev_array) => {
      if(prev_array.some(item => item === text)){
        alert("同じ値は追加できません");
        return prev_array;
      }
      return [...prev_array, text];
    })
  }, [text])


  return {text, array, handleChange, handleAdd}
}

export default useInputArray;