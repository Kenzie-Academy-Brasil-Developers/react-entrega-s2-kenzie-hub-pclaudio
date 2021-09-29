import { Redirect } from "react-router";
import Banner from "../../components/Banner";
import SignUpForm from "../../components/SignUpForm";
import {
  BannerContent,
  Container,
  Content,
  CustomTypography,
  FormContent,
  Frame,
} from "./styles";
import SignUpImage from "../../assets/images/signup.svg";

const SignUp = ({ authenticated }) => {
  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Frame>
        <CustomTypography variant="h2" component="h1" align="center">
          Cadastro de usuário
        </CustomTypography>
        <Content>
          <BannerContent>
            <Banner image={SignUpImage} />
          </BannerContent>

          <FormContent>
            <SignUpForm />
          </FormContent>
        </Content>
      </Frame>
    </Container>
  );
};

export default SignUp;
