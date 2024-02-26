export const backToTop = (to = 0) => {
  window.scrollTo({
    top: `${0 + to}`,
    behavior: "auto",
  });
};
export default backToTop;
