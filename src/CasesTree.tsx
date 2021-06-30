import React from "react";
import {
    Tree,
    TreeNodeInfo
} from "@blueprintjs/core";

export interface CasesProps {}

export const CasesTree: React.FC<CasesProps> = () => {
  return (
    <Tree className='cases-tree' contents={treeNodes}/>
  );
};

var treeNodes: TreeNodeInfo[] = [
    {
        id: 0,
        icon: "folder-close",
        label: 'Test'
    }, 
];