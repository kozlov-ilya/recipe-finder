export const preventBodyScrolling = () => {
  document.querySelector("body").classList.add("prevent-scrolling");
};

export const allowBodyScrolling = () => {
  document.querySelector("body").classList.remove("prevent-scrolling");
};
