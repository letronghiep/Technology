/* eslint-disable react/no-children-prop */
import {
  LogoutOutlined,
  PermIdentityOutlined,
  ShoppingBagOutlined,
  ShoppingCartOutlined,
  WavingHandOutlined,
} from "@mui/icons-material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { Container, Icon } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import { alpha, styled } from "@mui/material/styles";
import * as React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { onOpenLogin } from "../../hooks/useLoginModal";
import { onOpenRegister } from "../../hooks/useRegisterModal";
import { logout } from "../../services/auth";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState();
  React.useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      setCurrentUser(JSON.parse(user).user);
    }
  }, []);
  // cart
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [cartCount, setCartCount] = React.useState(0);
  React.useEffect(() => {
    if (cartItems.length > 0) {
      setCartCount(
        cartItems
          .map((item) => item.quantity)
          .reduce((currentValue, total) => total + currentValue),
        0
      );
    }
  }, [cartItems]);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const dispatch = useDispatch();
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuLogin = () => {
    setAnchorEl(null);
    dispatch(onOpenLogin(true));
  };
  const handleMenuRegister = () => {
    setAnchorEl(null);
    dispatch(onOpenRegister(true));
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const DropdownMenuItem = ({ children, title, onClick }) => (
    <div
      className="flex items-center gap-x-2 py-2 cursor-pointer hover:bg-slate-100 my-2 text-[13px]"
      onClick={onClick}
    >
      <Icon component={children} />
      <p>{title}</p>
    </div>
  );
  // handle
  const navigate = useNavigate();
  // logout
  const handleLogOut = async () => {
    try {
      localStorage.removeItem("currentUser");
      setCurrentUser(null);
      const data = await logout();
      if (data) {
        setTimeout(() => {
          toast("Đã đăng xuất");
          location.reload();
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const renderMenu = (
    <div className="absolute top-full right-0 bg-white text-black p-4 rounded-sm shadow-sm shadow-neutral-800/50">
      {currentUser ? (
        <>
          <div className="flex items-center gap-x-2 text-[14px]">
            <WavingHandOutlined sx={{ fontSize: "20px" }} />
            <h6>Xin chào, {currentUser.full_name}</h6>
          </div>
          <DropdownMenuItem
            onClick={() => navigate("/taikhoan?view=account-order")}
            children={ShoppingBagOutlined}
            title="Đơn hàng của tôi"
          />
          <DropdownMenuItem
            onClick={() => navigate("/taikhoan?view=account-profile")}
            children={PermIdentityOutlined}
            title="Thông tin cá nhân"
          />
          <DropdownMenuItem
            children={LogoutOutlined}
            title="Đăng xuất"
            onClick={handleLogOut}
          />
        </>
      ) : (
        <>
          <div className="flex items-center gap-x-2 text-[14px]">
            <WavingHandOutlined sx={{ fontSize: "20px" }} />
            <h6>Xin chào, vui lòng đăng nhập</h6>
          </div>
          <div className="text-[13px] flex items-center gap-x-2 my-5">
            <button
              className="bg-black border-neutral-800 w-[140px] border-2 rounded-md text-white px-7 py-1.5 hover:opacity-90 hover:bg-neutral-900 flex justify-center font-medium"
              onClick={handleMenuLogin}
            >
              ĐĂNG NHẬP
            </button>
            <button
              className="border-neutral-800 w-[140px] border-2 rounded-md px-7 py-1.5 hover:opacity-90 hover:bg-neutral-100 flex justify-center"
              onClick={handleMenuRegister}
            >
              ĐĂNG KÝ
            </button>
          </div>
        </>
      )}
    </div>
  );
  const handleGoToCart = () => {
    try {
      if (currentUser == null) {
        dispatch(onOpenLogin(true));
      } else {
        navigate("/cart");
      }
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/cart");
    }
  };
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return (
    <Box sx={{ flexGrow: 1, position: "relative" }}>
      <AppBar
        // position="sticky"
        sx={{
          top: 0,
          left: 0,
          right: 0,
          position: "fixed",
          bgcolor: "#e30019",
        }}
      >
        <Container>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Link to="/">Technology</Link>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                columnGap: "16px",
                alignItems: "center",
              }}
            >
              {/* <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>*/}
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={handleGoToCart}
              >
                <Badge badgeContent={cartCount} color="error">
                  <ShoppingCartOutlined />
                </Badge>
              </IconButton>
              <div onClick={handleProfileMenuOpen}>
                {currentUser ? (
                  <>
                    <div className="flex items-center gap-x-3 py-1 px-2 bg-[#be1529] rounded-md">
                      <PermIdentityOutlined />
                      <div className="text-[13px]">
                        <p>Xin chào</p>
                        <p>{currentUser.full_name}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <AccountCircle />
                )}
              </div>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
            {isMenuOpen && renderMenu}
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}
