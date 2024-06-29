import { useState } from "react";

const useToogle = () => {
  const [isTrue, setIsTrue] = useState(false);

  const toggle = () => {
    setIsTrue((prev) => !isTrue);
  };

  return { isTrue, setIsTrue, toggle };
};

export default useToogle;
