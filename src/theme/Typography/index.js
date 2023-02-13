import "./style.css";

const Fonts = {
  heading: "Portfolio-SuperHeading",
  black: "Portfolio-Black",
  bold: "Portfolio-Bold",
  regular: "Portfolio",
};

export default {
  Family: {
    heading: "Portfolio",
    navigation: "Portfolio"
  },
  Weight: {
    h1: 700,
    navigationLink: 400,
    medium: 500,
    bold: 700,
    regular: 400
  },
  h1: Fonts.heading,
  footers: Fonts.black,
  button: Fonts.black,
  paragraph: Fonts.regular
};
