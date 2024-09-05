import { IFolder } from "../../interfaces/folder.interface"

export function Folder(id: string, name: string, children: Array<IFolder> | undefined) {
    return <div id={id}>
        <img src="../../assets/openedFolder.svg" alt="Иконка папки"/>
        {name}</div>
}