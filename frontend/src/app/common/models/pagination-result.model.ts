export class PaginationResultModel<T>{
    datas: T;
    pageNumber: number = 1;
    pageSize: number = 1;
    isFirstPage: boolean = true;
    isLastPage: boolean = false;
    totalPageCount: number = 0;
}