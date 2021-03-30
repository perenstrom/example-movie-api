export const delay = (callback, delayParam) => {
  switch (delayParam) {
    case "nodelay":
    case "0":
      callback();
      break;
    default:
      const parsedDelay = parseInt(delayParam, 10);
      if (isNaN(parsedDelay) || parsedDelay < 0) {
        callback();
      } else {
        setTimeout(() => callback(), parsedDelay);
      }
      break;
  }
};
