
export interface MenuItem {
    href?: string
    label: string
    children?: MenuItem[]
}

//type of commonMenu and treeMenu
export type MenuItemList = MenuItem[]