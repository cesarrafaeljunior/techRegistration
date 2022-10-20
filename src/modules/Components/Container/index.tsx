import { ReactNode } from "react";
import { ContainerDefault } from "./style";

export interface iChildrens {
  children?: ReactNode;
  text?: string;
}

export const Container = ({ children }: iChildrens) => {
  return <ContainerDefault>{children}</ContainerDefault>;
};
