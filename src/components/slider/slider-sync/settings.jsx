import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

export const SLIDER_SYNCING_SETTINGS = (props) => {
  const {
    arrowsFor = false,
    arrowsModal = false,
    arrowsNav = false,
    dots = false,
    focusOnSelect = false,
    infinite = false,
    nextArrow,
    prevArrow,
    slidesToScroll = 1,
    slidesToShow = 1,
    swipeToSlide = false,
    speed = 500,
  } = props;

  const settings = {
    dots,
    focusOnSelect,
    slidesToScroll,
    speed,
    swipeToSlide,
  };

  return {
    settingsForModal: {
      ...settings,
      arrows: arrowsModal,
      className: "SliderForModal",
      infinite,
      nextArrow: arrowsModal ? (
        <ArrowForwardIos  />
      ) : (
        nextArrow
      ),
      prevArrow: arrowsModal ? (
        <ArrowBackIos />
      ) : (
        prevArrow
      ),
      slidesToShow,
    },
    settingsFor: {
      ...settings,
      arrows: arrowsFor,
      className: "SliderSyncing-For",
      nextArrow: arrowsFor ? (
        <ArrowForwardIos />
      ) : (
        nextArrow
      ),
      prevArrow: arrowsFor ? (
        <ArrowBackIos />
      ) : (
        prevArrow
      ),
    },
    settingsNav: {
      ...settings,
      arrows: arrowsNav,
      centerMode: true,
      className: "SliderSyncing-Nav",
      slidesToShow: 3,
      variableWidth: false,
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 2,
            centerMode: true,
          },
        },
      ],
    },
  };
};
