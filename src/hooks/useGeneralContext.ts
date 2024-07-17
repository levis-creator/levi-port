import { GeneralContext } from "@/context/Provider";
import { useContext } from "react";

const useGeneralContext = () => {
  const context = useContext(GeneralContext);
  if (!context) {
    throw Error(
      "useGeneralContext should be used inside General Provider environment"
    );
  }
  return context;
};
export default useGeneralContext;
