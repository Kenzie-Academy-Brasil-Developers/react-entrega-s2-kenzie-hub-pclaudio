import { Container } from "./styles";

const Banner = ({ alignment = "left", image }) => {
  return (
    <Container alignment={alignment}>
      <img src={image} alt="Logo" />
    </Container>
  );
};

export default Banner;
