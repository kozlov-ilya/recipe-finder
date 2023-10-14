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

const addPopupHandlers = (popupElem) => {
  const popupContentElem = popupElem.querySelector(".popup__content");
  const popupOverlayElem = popupElem.querySelector(".popup__overlay");

  const popupContentElemHeight = getPopupContentHeight(popupContentElem);
  // console.log(popupContentElemHeight);

  const hammer = new Hammer(popupElem);

  hammer.add(
    new Hammer.Pan({
      direction: Hammer.DIRECTION_VERTICAL,
      threshold: 0,
    })
  );

  hammer.on("panup pandown", (event) => {
    if (event.deltaY > 0) {
      const translateY = (event.deltaY / popupContentElemHeight) * 100;

      makePopupTransformFaster(popupContentElem, popupOverlayElem);

      setPopupContentTranslateY(popupContentElem, `${translateY}%`);
      setPopupOverlayOpacity(popupOverlayElem, 1 - translateY / 100);
    }
  });

  hammer.on("panend", (event) => {
    if (event.velocityY > 0.3 && event.distance > 10) {
      /* Swiped */
      clearPopupInlineStyles(popupContentElem, popupOverlayElem);
      closePopup(popupElem);
    } else {
      clearPopupInlineStyles(popupContentElem, popupOverlayElem);
    }
  });
};

export const addHandlersToAllPopups = () => {
  const popupElems = document.querySelectorAll(".popup");

  popupElems.forEach((popupElem) => {
    addPopupHandlers(popupElem);
  });
};
