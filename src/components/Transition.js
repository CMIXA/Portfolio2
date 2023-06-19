import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

const Transition = ({ children }) => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <CSSTransition
      in={inProp}
      timeout={300}
      classNames="page"
      unmountOnExit
      onExited={() => setInProp(true)}
    >
      {children}
    </CSSTransition>
  );
};

export default Transition;
