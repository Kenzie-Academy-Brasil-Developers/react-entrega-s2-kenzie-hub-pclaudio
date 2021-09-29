import { Redirect } from "react-router";
import KenzieBanner from "../../components/KenzieBanner";
import { Container } from "./styles";

const Home = ({ authenticated }) => {
  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <KenzieBanner />
    </Container>
  );
};

export default Home;
