/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const SubMenu = ({ data, title }) => {
  return (
    <Box component="div" className="absolute top-0 left-full translate-x-6">
      <h2>{title}</h2>
      {data.map((item) => (
        <Link key={item._id} to={item.slug}>{item.category_name}</Link>
      ))}
    </Box>
  );
};

export default SubMenu;
