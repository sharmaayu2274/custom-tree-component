import React, { useState} from "react";
import "./node.css";

const Tree = ({ data = [],currentSelectedNode, updateCurrentSelectedNode }) =>{
  return (
    <div className="codingayu-tree">
      <ul className="codingayu-flex codingayu-tree-container flex-column">
        {data.map((tree) => (
          <TreeNode node={tree} currentSelectedNode={currentSelectedNode} updateCurrentSelectedNode={updateCurrentSelectedNode} />
        ))}
      </ul>
    </div>
  );
};

const TreeNode = ({ node, currentSelectedNode, updateCurrentSelectedNode }) => {
  const [childVisible, setChildVisiblity] = useState(node.childVisible ? node.childVisible:false);
  const hasChild = node.children ? true : false;
  const onLabelClick = (node) =>{
    updateCurrentSelectedNode(node);
  };

  return (
    <li className="codingayu-tree-node border-0">
      <div className={`container codingayu-flex ${currentSelectedNode?.id===node?.id?'node-active':''}`} >
        {hasChild ? (
          <div
            id={'treeView'}
            onClick={(e) => setChildVisiblity((v) => !v)}
            className={`codingayu-inline codingayu-tree-toggler ${
              childVisible ? "active" : ""
            }`}
          >
            <i class="arrow right"></i>
          </div>
          )
          :
          <div
            className={`codingayu-inline codingayu-tree-toggler no-child`}
          >  
            <i class="arrow right"></i>
          </div>
        }
        <div onClick={()=> onLabelClick(node)} className="codingayu-tree-head">
            <span>{node.name}</span>  
        </div>
      </div>

      {hasChild && childVisible && (
        <div className="codingayu-tree-content">
          <ul className="codingayu-flex codingayu-tree-container flex-column">
            <Tree data={node.children} currentSelectedNode={currentSelectedNode} updateCurrentSelectedNode={updateCurrentSelectedNode}/>
          </ul>
        </div>
      )}
    </li>
  );
};

export default Tree;