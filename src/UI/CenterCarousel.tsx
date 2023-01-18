import Carousel from "react-material-ui-carousel";
import { ArrowBackIosRounded, ArrowForwardIosRounded } from "@mui/icons-material";

interface CarouselProps {
  children: React.ReactNode;
  nextItem: (next: number | undefined) => void;
  prevItem: (next: number | undefined) => void;
}

const CenterCarousel: React.FC<CarouselProps> = ({ nextItem, prevItem, children }) => {
  return (
    <Carousel
      NextIcon={<ArrowForwardIosRounded sx={{ color: "#feda4a" }} />}
      PrevIcon={<ArrowBackIosRounded sx={{ color: "#feda4a" }} />}
      navButtonsProps={{ style: { backgroundColor: "transparent" } }}
      navButtonsAlwaysVisible={true}
      indicators={false}
      autoPlay={false}
      next={(next) => nextItem(next)}
      prev={(next) => prevItem(next)}
      sx={{
        width: "500px",
        marginTop: "1rem",
        backgroundColor: "#1f1f1f",
        border: "1px solid yellow",
      }}
    >
      {children}
    </Carousel>
  );
};

export default CenterCarousel;
