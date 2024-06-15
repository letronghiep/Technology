/* eslint-disable react/prop-types */
import Footer from "../footer";
// import Header from "../header";
import Header from '../header/index'
function Layout({ children }) {
  return (
    <>
      <Header />
      <>{children}</>
      <Footer />
    </>
  );
}

export default Layout;
