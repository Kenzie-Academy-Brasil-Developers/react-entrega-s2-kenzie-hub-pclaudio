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
import { useHistory } from "react-router-dom";

const KenzieBannerNotFound = () => {
  const history = useHistory();

  const handleGoBackOnClick = () => {
    history.push("/");
  };

  return (
    <Container>
      <Logo src={KenzieLogo} alt="Kenzie Academy Logo" />

      <Line />

      <Content>
        <Title>Erro 404</Title>

        <Description>
          Ops... Ao que tudo indica, esta página não existe!
        </Description>

        <ButtonContainer>
          <Button width="90" onClick={handleGoBackOnClick}>
            Voltar
          </Button>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default KenzieBannerNotFound;
