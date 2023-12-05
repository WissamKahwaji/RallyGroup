const handleBreakParagraphToLines = (paragraph) => {
  return paragraph.replace(/\n/g, (match) => `<br><br/>${match}`);
};
const handleDecideDocumentDirection = (lng) => {
  return lng === "en" ? "ltr" : "rtl";
};
export { handleBreakParagraphToLines, handleDecideDocumentDirection };
