import React from 'react';


const TreeNodeDetail = ({currentNode,detailComponent}) =>{
    console.log("🚀 ~ file: nodeDetail.js ~ line 5 ~ TreeNodeDetail ~ currentNode", currentNode)
    return (
        <>{detailComponent}</>
    )
}

export default TreeNodeDetail