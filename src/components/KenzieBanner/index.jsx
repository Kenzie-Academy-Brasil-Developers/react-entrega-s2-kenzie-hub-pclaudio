import { useHistory } from "react-router-dom";
import {
  ButtonContainer,
  Container,
  Content,
  Description,
  Line,
  Logo,
  Title,
} from "./styles";
import KenzieLogo from "../../assets/images/kenzie.svg";
import Button from "../Button";

const KenzieBanner = () => {
  const history = useHistory();

  const handleSignUpOnClick = () => {
    history.push("/signup");
  };

  const handleLoginOnClick = () => {
    history.push("/login");
  };

  return (
    <Container>
      <Logo src={KenzieLogo} alt="Kenzie Academy Logo" />

      <Line />

      <Content>
        <Title>KenzieHub</Title>

        <Description>
          KenzieHub é um hub de portfólios de programadores da Kenzie Academy
          Brasil.
        </Description>

        <ButtonContainer>
          <Button onClick={handleSignUpOnClick} width="45">
            Cadastre-se
          </Button>
          <Button onClick={handleLoginOnClick} width="45">
            Login
          </Button>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default KenzieBanner;
