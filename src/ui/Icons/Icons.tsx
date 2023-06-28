import { ReactNode } from "react";
import { StyledIconButton } from "./Icons.styles";

type IconButtonProps = {
  children: ReactNode;
  onClick: VoidFunction
};

export const IconButton = ({ children, onClick }: IconButtonProps) => {
  return <StyledIconButton onClick={onClick}>{children}</StyledIconButton>;
};
