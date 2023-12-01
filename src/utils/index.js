const handleBreakParagraphToLines = (paragraph) => {
  return paragraph.replace(/\n/g, (match) => `<br><br/>${match}`);
};
export { handleBreakParagraphToLines };
