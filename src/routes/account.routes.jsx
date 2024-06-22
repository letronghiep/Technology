import { Route, Routes, useLocation } from "react-router-dom";
import AccountOrder from "../components/account/account-order";
import AccountProfile from "../components/account/account-profile";
import AccountSettings from "../components/account/account-settings";
import OrderDetail from "../pages/OrderDetail";

const AccountRoute = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const view = query.get("view");

  let element;

  if (view === "account-order") {
    element = <AccountOrder />;
  } else if (view === "account-profile") {
    element = <AccountProfile />;
  } else if (view === "account-settings") {
    element = <AccountSettings />;
  } else if (view && view.startsWith("account-order/")) {
    const id = view.split("/")[1];
    element = <OrderDetail id={id} />;
  } else {
    element = <h1>Page Not Found</h1>;
  }

  return (
    <Routes>
      <Route path="/" element={element} />;
    </Routes>
  );
};

export default AccountRoute;
