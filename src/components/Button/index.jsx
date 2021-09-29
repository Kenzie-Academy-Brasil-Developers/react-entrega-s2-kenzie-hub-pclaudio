import { ButtonStyled } from "./styles";

const Button = ({ children, width, ...rest }) => {
  return (
    <ButtonStyled width={width} {...rest}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
