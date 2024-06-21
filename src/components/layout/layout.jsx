/* eslint-disable react/prop-types */
import { Toaster } from "react-hot-toast";
import Footer from "../footer";
// import Header from "../header";
import Header from "../header/index";
import LoginModal from "../modal/loginModal";
import RegisterModal from "../modal/registerModal";
function Layout({ children }) {
  return (
    <>
      <Header />
      <LoginModal />
      <RegisterModal />
      <div className="mt-[84px]">{children}</div>
      <Toaster />
      <Footer />
    </>
  );
}

export default Layout;
