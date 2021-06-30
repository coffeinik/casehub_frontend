import React from "react";
import {
  ButtonGroup,
  Button,
  Icon
} from "@blueprintjs/core";


export interface VerticalNavigationProps {}


export const VerticalNavigation: React.FC<VerticalNavigationProps> = () => {
  return (
    <ButtonGroup minimal={true} large={true} vertical={true}>
        <Button className="vertical-menu-button"><Icon icon='align-left' iconSize={25}/></Button>
        <Button className="vertical-menu-button"><Icon icon='search' iconSize={25}/></Button>
        <Button className="vertical-menu-button"><Icon icon='build' iconSize={25}/></Button>
        <Button className="vertical-menu-button"><Icon icon='code' iconSize={25}/></Button>
        <Button className="vertical-menu-button"><Icon icon='comment' iconSize={25}/></Button>
        <Button className="vertical-menu-button"><Icon icon='export' iconSize={25}/></Button>
    </ButtonGroup>
  );
};