import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AllRoutes };
