const getXYValues = (direction) => {
  let xValue, yValue;

  if (direction === "left") {
    xValue = 100;
    yValue = 0;
  } else if (direction === "right") {
    xValue = -100;
    yValue = 0;
  } else if (direction === "up") {
    xValue = 0;
    yValue = 100;
  } else if (direction === "down") {
    xValue = 0;
    yValue = -100;
  } else {
    xValue = 0;
    yValue = 0;
  }

  return { xValue, yValue };
};

export const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    };
  };
  
  export const fadeIn = (direction, type, delay, duration) => {
    const { xValue, yValue } = getXYValues(direction);
    return {
      hidden: {
        x: xValue,
        y: yValue,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const zoomIn = (delay, duration) => {
    return {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const slideIn = (direction, type, delay, duration) => {
    const { xValue, yValue } = getXYValues(direction);
    return {
      hidden: {
        x: xValue,
        y: yValue,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };