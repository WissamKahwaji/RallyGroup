import { useNavigate } from "react-router-dom";
const useNavigateToBook = () => {
  const navigate = useNavigate();
  const handleNavigateToBookSection = () => {
    navigate("/", { state: { scrollToSection: "bookNow" } });
  };
  return handleNavigateToBookSection;
};

export default useNavigateToBook;
