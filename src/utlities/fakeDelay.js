const fakeDelay = (delay = 2000) => {
  return new Promise((resolve) => setTimeout(() => resolve(), delay));
};

export default fakeDelay;
