export const preventBodyScrolling = () => {
  const body = document.querySelector("body");

  const scrollPosition = window.scrollY;

  body.style.top = -scrollPosition + "px";

  body.classList.add("prevent-scrolling");
};

export const allowBodyScrolling = () => {
  const body = document.querySelector("body");
  body.classList.remove("prevent-scrolling");

  const topPosition = Math.abs(parseFloat(body.style.top));

  if (topPosition) {
    window.scrollTo(0, topPosition);
  }
};
