import { Typography } from "@material-ui/core";
import styled from "styled-components";
import BackgroundImage from "../../assets/images/background.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 10px;
  background-image: url(${BackgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Frame = styled.div`
  background-color: rgba(241, 250, 238, 0.35);
  border-radius: 8px;
  width: 100%;
  padding: 10px;

  @media (min-width: 768px) {
    padding: 40px 5%;
    width: 80%;
  }
`;

export const CustomTypography = styled(Typography)`
  color: var(--primary-dark);

  &.MuiTypography-root {
    margin-bottom: 40px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BannerContent = styled.div`
  @media (min-width: 768px) {
    width: 60%;
  }
`;

export const FormContent = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 40%;
  }
`;
