import { useEffect, useRef } from 'react';

// ==============================|| ELEMENT REFERENCE HOOKS  ||============================== //

const useScriptRef = () => {
  const scripted = useRef(true);

  useEffect(
    () => () => {
      scripted.current = false;
    },
    []
  );

  return (
    <div></div>
  )
};

export default useScriptRef;
