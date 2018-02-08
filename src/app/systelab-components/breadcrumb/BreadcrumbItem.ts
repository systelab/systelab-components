export class BreadcrumbSubItem{
    constructor(public id: string,
        public text: string,
        public url: string,
        public action?: any) {
    }
} 
export class BreadcrumbItem {

    constructor(public id: string,
        public text: string,
        public isActive: boolean,
        public url: string,
        public subItems?: Array<BreadcrumbSubItem>,
        public action?: any) {
    }

}