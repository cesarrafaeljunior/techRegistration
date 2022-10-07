import { Logo } from "./Logo";
import { HeaderContainer } from "./style";

export const Header = ({ children }) => {
  return (
    <HeaderContainer>
      <Logo>Kenzie Hub</Logo>;{children}
    </HeaderContainer>
  );
};
