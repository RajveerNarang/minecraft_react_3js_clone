import { useEffect, useState } from "react";
export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    texture1: false,
    texture2: false,
    texture3: false,
    texture4: false,
    texture5: false,
  });

  const handelKeyDown = useCallback((e) => {}, []);

  useEffect(() => {
    document.addEventListener("keydown", handelKeyDown);
    document.addEventListener("keyup", handelKeyUp);
    return () => {
      document.removeEventListener("keydown", handelKeyDown);
      document.removeEventListener("keyup", handelKeyUp);
    };
  });
};
