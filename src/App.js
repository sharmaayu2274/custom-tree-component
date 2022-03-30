import logo from './logo.svg';
import './App.css';
import Tree from './customized-treenode/node';
import React,{useState, useEffect} from 'react';
import TreeNodeDetail from './customized-treenode/nodeDetail';

const TestDetail = ({node}) =>{
  return <div>
      test Detail {node?.name}
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

let treeObj_1 = {
  defaultNode: false,
  id: "08255d01-5188-4fbf-8d69-112ce05a9bed",
  name: "S100",
  toggled: true,
  type: "site",
  active: true,
  children: [
      {
        id: "31342a06-61ef-4ec3-a3ac-98740c435b89",
        name: "B100",
        toggled: true,
        type: "building",
        children:[
          {
            id: "5535bf73-19f8-416d-97d4-c597cb562abc",
            name: "F100",
            toggled: true,
            type: "floor",
            children: [
              {
                id: "bb19164a-afe6-419a-a309-93782f60c17d",
                name: "R100",
                type: "room",
              }
            ]
          }
        ]
      },
      {
          name: 'Areas',
          id:'areaSet',
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
  setCurrentNode(treeObj_1)
},[]);
  return (
    <div style={{display:'flex'}}>
      <Tree 
        currentSelectedNode={currentNode} 
        updateCurrentSelectedNode={updateCurrentSelectedNode} 
        data={[treeObj_1]}
      />
      <TreeNodeDetail 
      currentNode={currentNode}
      detailComponent={<TestDetail node={currentNode}/>}
      />
    </div>
      
  );
}

export default App;
