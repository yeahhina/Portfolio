import CV from "./../../assets/CV_Mumtahina.pdf";

export const downloadCV = () => {
  const link = document.createElement("a");
  link.href = CV;
  link.download = "CV_Mumtahina.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
