const goUp = {
  initial: {
    y: 16,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
};

const slideToRight = {
  initial: {
    x: 16,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
};

const slideToLeft = {
  initial: {
    x: -16,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
};

const goDown = {
  initial: {
    y: -16,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
};

const reveal = {
  initial: {
    filter: "blur(8px)",
    opacity: 0,
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
  },
};

const transitions = {
  goUp,
  reveal,
  goDown,
  slideToLeft,
  slideToRight,
};

export default transitions;
