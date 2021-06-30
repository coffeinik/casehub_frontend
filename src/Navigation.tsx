import React from "react";
import {
  Alignment,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
} from "@blueprintjs/core";

export interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
  return (
    <Navbar className={Classes.DARK}>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>Casehub</NavbarHeading>
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <NavbarHeading>Profile</NavbarHeading>
      </NavbarGroup>
    </Navbar>
  );
};