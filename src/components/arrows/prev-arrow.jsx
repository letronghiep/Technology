import { ArrowBackIosNew } from "@mui/icons-material";
import { Box } from "@mui/material";

function PreviousArrows({ onClick }) {
  return (
    <Box
      className="w-12 h-12 rounded-r-full text-white bg-neutral-800/20 hover:bg-opacity-100 cursor-pointer duration-300 flex justify-center items-center absolute left-[0] translate-x-[2px] top-1/2 -translate-y-1/2 hover:scale-110 z-[999]"
      component="div"
      onClick={onClick}
    >
      <Box component="span" className="text-xl">
        <ArrowBackIosNew />
      </Box>
    </Box>
  );
}
 
export default PreviousArrows;
