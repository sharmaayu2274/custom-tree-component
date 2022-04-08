# codingayu-tree-node
This is custom component to render Tree in React.

 ```
 npm install codingayu-tree-node
 ```
 ### Features
 1) Renders interactive tree node
 2) Renders Node Details
 4) can costimze Node details with using custom component.
### Description
module contains two component 
1) to render tree
```   <Tree 
      currentSelectedNode={currentSelectedNode} 
      updateCurrentSelectedNode={updateCurrentSelectedNode} 
      data={nodeList}
   >
```
- currentSelectedNode :- it is the currently selected node object
- updateCurrentSelectedNode :- it is function which updates the selected tree node
- data :- an array/list of tree node

2) to render tree detail
```
   <TreeNodeDetail 
      currentNode={currentNode}
      detailComponent={<CustomComponent node={currentNode} />}
   />
```
- currentNode :- it is the current selected node
- detailComponent :- props to pass custom component to render details
### Usage
After installation just import the module in your react component
```
import {Tree, TreeDetail} from 'codingayu-tree-node'
```
and use the component to render tree like 
```
import {Tree, TreeNodeDetail} from 'codingayu-tree-node';
import {useEffect,useState} from 'react';

const TestDetail = ({node}) =>{
  return <div>
      Node Detail {JSON.stringify(node)}
  </div>
}

function App() {
  const [currentNode, setCurrentNode] = useState(null);
  let treeObj = {
    defaultNode: false,
    id: "uuid_1",
    name: "a",
    toggled: true,
    type: "a",
    active: true,
    children: [
        {
            name: 'b',
            id:'uuid_b',
            children: [
              {
                id: "uuid_2",
                name: "d",
                toggled: true,
                type: "d",
                children:[
                  {
                    id: "uuid_3",
                    name: "e",
                    toggled: true,
                    type: "e",
                    children: [
                      {
                        id: "uuid_4",
                        name: "f",
                        type: "f",
                      }
                    ]
                  }
                ]
              }
            ]
        },
        {
            name: 'c',
            id:'uuid_c',
            children: []
        }
    ]
}

const updateCurrentSelectedNode = (node) =>{
  if(node.id){
  }
  setCurrentNode(node);
}

useEffect(()=>{
  setCurrentNode(treeObj)
},[]);
  return (
    <div style={{display:'flex'}}>
      <Tree 
        currentSelectedNode={currentNode} 
        updateCurrentSelectedNode={updateCurrentSelectedNode} 
        data={[treeObj]}
      />
      <TreeNodeDetail 
      currentNode={currentNode}
      detailComponent={<TestDetail node={currentNode}/>}
      />
    </div>
  );
}
```

