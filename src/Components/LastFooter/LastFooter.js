import React from "react";
import Container from "../UI/Container";

const LastFooter = () => {
  const date = new Date();
  const thisYear = date.getFullYear();
  return (
    <Container className={`flex items-center justify-center border-t`}>
      <a
        href="https://siimedia.net/"
        target="_blank"
        className={`underline font-semibold text-sm mt-2 md:mt-0 py-4 `}
        rel="noreferrer"
      >
        Copyright © {thisYear} | Powered by Sii Media.
      </a>
    </Container>
  );
};

export default LastFooter;
