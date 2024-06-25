import { useNavigate } from "react-router-dom";

export const useRedirect = () => {
  const navigate = useNavigate();

  const redirect = (path) => {
    if (path) return navigate(path);
    return navigate(-1);
  };
  return redirect;
};
