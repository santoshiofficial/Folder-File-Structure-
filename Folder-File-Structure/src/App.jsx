import React from 'react'
import Explorer from './data/folderData'
import { useState } from 'react'
import Folder from './components/folder'
import './App.css'
import userTraverseTree from './hooks/useTraverse'

export default function App() {
   const [ExplorerData, setExploereData] = useState(Explorer);
   
   const {insertNode} = userTraverseTree();

   const handleInsertNode = (folderId, item, isFolder) =>{
     const finaleTree = insertNode(ExplorerData,folderId,item,isFolder);

     setExploereData(finaleTree);
   }
   
  return (
    <>
      <Folder handleInsertNode={handleInsertNode} 
      explorer={ExplorerData}/>
    </>
  )
}
