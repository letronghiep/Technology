import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllProducts } from "../../services/products";
import SimpleSlider from "../slider/slider";

function Banner() {
  const { page, sort, limit } = useSelector((state) => state.filter);

  const [images, setImages] = useState();

  useEffect(() => {
    async function getImages() {
      const data = await getAllProducts({ page, sort, limit });
      if (data) {
        setImages(data.metadata.data);
      }
    }
    getImages();
  }, []);

  return (
    <div className="max-h-[600px]">
      <SimpleSlider images={images} />
      {/* <Grid
        container
        spacing={1}
        sx={{
          marginTop: "10px",
          maxHeight: '300px',
          height: '300px',
          overflow: 'hidden' // Add this line
        }}
      >
        {images
          ?.filter((item) => item.promotion)
          .sort((a, b) => a.promotion - b.promotion)
          .filter((_, idx) => idx < 3)
          .map((item) => (
            <Grid
              key={item._id}
              className="h-[230px] max-h-[300px]"
              sx={{
                borderRadius: "14px",
                overflow: "hidden",
                ":hover": {
                  scale: "105%",
                  transform: "opacity",
                  opacity: "90%",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
              item
              xs={4}
            >
              <Link to={item.slug} className="">
                <img className=" object-contain" src={item.avatar} />
              </Link>
            </Grid>
          ))}
      </Grid> */}
    </div>
  );
}

export default Banner;