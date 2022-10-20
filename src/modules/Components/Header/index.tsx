import { iChildrens } from "../Container";
import { Logo } from "./Logo";
import { HeaderContainer } from "./style";

export const Header = ({ children }: iChildrens) => {
  return (
    <HeaderContainer>
      <Logo>Kenzie Hub</Logo>
      {children}
    </HeaderContainer>
  );
};
