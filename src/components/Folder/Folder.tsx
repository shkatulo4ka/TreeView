import { useState } from 'react';
import { INITIAL_DATA } from '../../assets/data';
import { IFolder } from '../../interfaces/folder.interface';

const Folders = () => {
  const [tree, setTree] = useState(INITIAL_DATA);
  const [expandedNodes, setExpandedNodes] = useState([]);

  const handleExpandCollapse = (e) => {
    !expandedNodes.includes(e.currentTarget.dataset.id) ?
    setExpandedNodes([...expandedNodes,e.currentTarget.dataset.id]) :
    setExpandedNodes(expandedNodes.filter(node => node !== e.currentTarget.dataset.id));

  }
  
  //setTree(document.querySelector('folders_tree')?.value)

  const buildTree = (tree: IFolder[]) => {
    tree.map((node) => {
      const isExpanded = expandedNodes.includes(node.id)
      return (
          <div id={node.id}>
            <img src={ isExpanded ? '../assets/openedFolder.svg' : '../assets/closedFolder.svg'} />
            {node.name}
            {node.children ? buildTree(node.children) : null}
          </div>
          
          
      )
    })
  }
  return (
    <div>
      tree.length ? buildTree(tree) : 'Нет данных';
    </div>
  )
}

export default Folders