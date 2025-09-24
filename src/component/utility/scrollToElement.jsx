export const scrollToClass = (className) => {
  setTimeout(() => {
    const elements = document.getElementsByClassName(className);
    if (elements.length > 0) {
      elements[0].scrollIntoView({ behavior: "smooth" });
    }
  }, 50);
};
