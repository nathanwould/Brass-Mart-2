import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { IProductImage } from '../../types'

interface Props {
  photos: IProductImage[];
};

function ImageCarousel({ photos }: Props) {
  const settings = {
    autoplay: true,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <Box
      maxW="40rem"
      minW="18rem"
      p={8}
    >
      <Slider {...settings}>
        {photos && photos.map((photo: IProductImage) => (
          <Box>
            <Image cursor="pointer" src={photo.image.publicUrlTransformed} alt={photo.altText}/>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default ImageCarousel;