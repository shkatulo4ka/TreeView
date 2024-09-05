export interface IFolder {
    id: string;
    name: string;
    children: Array<IFolder> | undefined;
}