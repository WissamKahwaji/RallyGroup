import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "react-alice-carousel/lib/alice-carousel.css";
const CarouselComponent = ({ items, mobileViewItems }) => {
  return (
    <AliceCarousel
      animationType="fadeout"
      items={items}
      autoPlay
      autoPlayInterval={1000} // Specify the interval for autoplay in milliseconds
      disableButtonsControls // Disable next and previous buttons
      infinite // Enable infinite loop
      autoPlayControls={false}
      responsive={{
        0: { items: mobileViewItems ? mobileViewItems : 3 },
        600: { items: mobileViewItems ? mobileViewItems : 3 },
        900: { items: mobileViewItems ? mobileViewItems : 3 },
        1024: { items: 3 },
        1100: { items: 3 },
        1200: { items: 3 },
        1400: { items: 3 },
      }}
    />
  );
};

export default CarouselComponent;
