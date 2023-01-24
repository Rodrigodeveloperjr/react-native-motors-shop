import { Route, Routes } from "react-router-dom";
import { SignIn } from "../screens/SignIn";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export { AllRoutes };
