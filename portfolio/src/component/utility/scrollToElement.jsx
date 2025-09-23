import { useNavigate } from "react-router-dom";
export const scrollToClass = (className) => {
  const navigate = useNavigate;
  const elements = document.getElementsByClassName(className);
  if (elements.length > 0) {
    elements[0].scrollIntoView({ behavior: "smooth" });
  }
};
