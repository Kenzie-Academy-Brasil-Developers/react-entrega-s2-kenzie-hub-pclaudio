import { Redirect } from "react-router";
import Banner from "../../components/Banner";
import {
  BannerContent,
  Container,
  Content,
  CustomTypography,
  FormContent,
  Frame,
} from "./styles";
import LoginImage from "../../assets/images/login.svg";
import LoginForm from "../../components/LoginForm";

const Login = ({ authenticated, setAuthenticated }) => {
  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Frame>
        <CustomTypography variant="h2" component="h1" align="center">
          Login
        </CustomTypography>

        <Content>
          <FormContent>
            <LoginForm setAuthenticated={setAuthenticated} />
          </FormContent>

          <BannerContent>
            <Banner alignment="right" image={LoginImage} />
          </BannerContent>
        </Content>
      </Frame>
    </Container>
  );
};

export default Login;
