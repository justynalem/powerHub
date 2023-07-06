import { ReactNode } from "react";

export type StyledListProps = {
  open: boolean;
};

export type DrawerListContainerProps={
  open?: boolean
}
export type DrawerListItem = {
  label: string;
  icon: ReactNode;
};

export type DrawerListProps = {
  open: boolean;
  listItems: DrawerListItem[];
};

export type DrawerProps = {
  navList: DrawerListItem[];
};
