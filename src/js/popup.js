const getPopupContentHeight = (popupContentElem) => {
  return popupContentElem.offsetHeight;
};

const clearPopupInlineStyles = (popupContentElem, popupOverlayElem) => {
  popupContentElem.style = "";
  popupOverlayElem.style = "";
};

const setPopupContentTranslateY = (popupContentElem, translateValue) => {
  popupContentElem.style.transform = `translateY(${translateValue})`;
};

const setPopupOverlayOpacity = (popupOverlayElem, opacityValue) => {
  popupOverlayElem.style.opacity = opacityValue;
};

const makePopupTransformFaster = (popupContentElem, popupOverlayElem) => {
  popupContentElem.style.transition = `transform var(--transition-popup-open)`;
  popupOverlayElem.style.transition = `opacity var(--transition-popup-open)`;
};

export const openPopup = (popupElem) => {
  popupElem.classList.add("popup_opened");
};

const closePopup = (popupElem) => {
  popupElem.classList.remove("popup_opened");
};

const addPopupTouchHandlers = (popupElem) => {
  const popupContentElem = popupElem.querySelector(".popup__content");
  const popupOverlayElem = popupElem.querySelector(".popup__overlay");

  const popupContentHeight = getPopupContentHeight(popupContentElem);

  let startTouchData = {};
  let popupSwiped = false;

  const handlePopupTouchstart = (event) => {
    event.preventDefault();

    popupSwiped = false;

    startTouchData.startY = event.touches[0].clientY;
    startTouchData.startTime = Date.now();

    popupElem.addEventListener("touchmove", handlePopupTouchmove);
  };

  const handlePopupTouchmove = (event) => {
    event.preventDefault();

    makePopupTransformFaster(popupContentElem, popupOverlayElem);

    const currentY = event.touches[0].clientY;

    const deltaY = currentY - startTouchData.startY;
    const deltaTime = Date.now() - startTouchData.startTime;
    const touchVelocity = deltaY / deltaTime;

    if (deltaY >= 0) {
      let contentTranslate = (deltaY / popupContentHeight) * 100;

      setPopupContentTranslateY(popupContentElem, `${contentTranslate}%`);
      setPopupOverlayOpacity(popupOverlayElem, 1 - contentTranslate / 100);
    }

    if (touchVelocity > 0.5) {
      popupSwiped = true;
    }
  };

  const handlePopupTouchend = (event) => {
    event.preventDefault();

    const endY = event.changedTouches[0].clientY;

    const deltaY = endY - startTouchData.startY;

    if (popupSwiped || deltaY > popupContentHeight * 0.7) {
      closePopup(popupElem);
    }

    clearPopupInlineStyles(popupContentElem, popupOverlayElem);

    popupElem.removeEventListener("touchmove", handlePopupTouchmove);
  };

  popupElem.addEventListener("touchstart", handlePopupTouchstart);
  popupElem.addEventListener("touchend", handlePopupTouchend);
};

export const addHandlersToAllPopups = () => {
  const popupElems = document.querySelectorAll(".popup");

  popupElems.forEach((popupElem) => {
    addPopupTouchHandlers(popupElem);
  });
};
