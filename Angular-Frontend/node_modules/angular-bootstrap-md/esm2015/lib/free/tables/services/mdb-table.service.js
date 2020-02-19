/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class MdbTableService {
    constructor() {
        this._dataSource = [];
        this._dataSourceChanged = new Subject();
    }
    /**
     * @param {?} newRow
     * @return {?}
     */
    addRow(newRow) {
        this.getDataSource().push(newRow);
    }
    /**
     * @param {?} index
     * @param {?} row
     * @return {?}
     */
    addRowAfter(index, row) {
        this.getDataSource().splice(index, 0, row);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeRow(index) {
        this.getDataSource().splice(index, 1);
    }
    /**
     * @return {?}
     */
    rowRemoved() {
        /** @type {?} */
        const rowRemoved = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            observer.next(true);
        }));
        return rowRemoved;
    }
    /**
     * @return {?}
     */
    removeLastRow() {
        this.getDataSource().pop();
    }
    /**
     * @return {?}
     */
    getDataSource() {
        return this._dataSource;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    setDataSource(data) {
        this._dataSource = data;
        this._dataSourceChanged.next(this.getDataSource());
    }
    /**
     * @return {?}
     */
    dataSourceChange() {
        return this._dataSourceChanged;
    }
    /**
     * @param {?} searchKey
     * @return {?}
     */
    filterLocalDataBy(searchKey) {
        return this.getDataSource().filter((/**
         * @param {?} obj
         * @return {?}
         */
        (obj) => {
            return Object.keys(obj).some((/**
             * @param {?} key
             * @return {?}
             */
            (key) => {
                if (obj[key]) {
                    return obj[key]
                        .toString()
                        .toLowerCase()
                        .includes(searchKey);
                }
            }));
        }));
    }
    /**
     * @param {?} searchKey
     * @return {?}
     */
    searchLocalDataBy(searchKey) {
        if (!searchKey) {
            return this.getDataSource();
        }
        if (searchKey) {
            return this.filterLocalDataBy(searchKey.toLowerCase());
        }
    }
    /**
     * @param {?} searchKey
     * @return {?}
     */
    searchDataObservable(searchKey) {
        /** @type {?} */
        const observable = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            observer.next(this.searchLocalDataBy(searchKey));
        }));
        return observable;
    }
}
MdbTableService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
MdbTableService.ctorParameters = () => [];
/** @nocollapse */ MdbTableService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MdbTableService_Factory() { return new MdbTableService(); }, token: MdbTableService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    MdbTableService.prototype._dataSource;
    /**
     * @type {?}
     * @private
     */
    MdbTableService.prototype._dataSourceChanged;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3RhYmxlcy9zZXJ2aWNlcy9tZGItdGFibGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLGVBQWU7SUFHMUI7UUFGUSxnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUN0Qix1QkFBa0IsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVoQixNQUFNLENBQUMsTUFBVztRQUNoQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7OztJQUVELFdBQVcsQ0FBQyxLQUFhLEVBQUUsR0FBUTtRQUNqQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsVUFBVTs7Y0FDRixVQUFVLEdBQUcsSUFBSSxVQUFVOzs7O1FBQVUsQ0FBQyxRQUFhLEVBQUUsRUFBRTtZQUMzRCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsRUFBQztRQUNGLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLElBQVM7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxTQUFjO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLEdBQWUsRUFBRSxFQUFFO1lBQ3JELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtnQkFDeEMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ1osT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDO3lCQUNaLFFBQVEsRUFBRTt5QkFDVixXQUFXLEVBQUU7eUJBQ2IsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUN4QjtZQUNILENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLFNBQWM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxTQUFTLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUN4RDtJQUNILENBQUM7Ozs7O0lBRUQsb0JBQW9CLENBQUMsU0FBYzs7Y0FDM0IsVUFBVSxHQUFHLElBQUksVUFBVTs7OztRQUFDLENBQUMsUUFBYSxFQUFFLEVBQUU7WUFDbEQsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNuRCxDQUFDLEVBQUM7UUFDRixPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDOzs7WUF4RUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0lBRUMsc0NBQThCOzs7OztJQUM5Qiw2Q0FBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJUYWJsZVNlcnZpY2Uge1xuICBwcml2YXRlIF9kYXRhU291cmNlOiBhbnkgPSBbXTtcbiAgcHJpdmF0ZSBfZGF0YVNvdXJjZUNoYW5nZWQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGFkZFJvdyhuZXdSb3c6IGFueSkge1xuICAgIHRoaXMuZ2V0RGF0YVNvdXJjZSgpLnB1c2gobmV3Um93KTtcbiAgfVxuXG4gIGFkZFJvd0FmdGVyKGluZGV4OiBudW1iZXIsIHJvdzogYW55KSB7XG4gICAgdGhpcy5nZXREYXRhU291cmNlKCkuc3BsaWNlKGluZGV4LCAwLCByb3cpO1xuICB9XG5cbiAgcmVtb3ZlUm93KGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLmdldERhdGFTb3VyY2UoKS5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgcm93UmVtb3ZlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBjb25zdCByb3dSZW1vdmVkID0gbmV3IE9ic2VydmFibGU8Ym9vbGVhbj4oKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgIG9ic2VydmVyLm5leHQodHJ1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJvd1JlbW92ZWQ7XG4gIH1cblxuICByZW1vdmVMYXN0Um93KCkge1xuICAgIHRoaXMuZ2V0RGF0YVNvdXJjZSgpLnBvcCgpO1xuICB9XG5cbiAgZ2V0RGF0YVNvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZTtcbiAgfVxuXG4gIHNldERhdGFTb3VyY2UoZGF0YTogYW55KSB7XG4gICAgdGhpcy5fZGF0YVNvdXJjZSA9IGRhdGE7XG4gICAgdGhpcy5fZGF0YVNvdXJjZUNoYW5nZWQubmV4dCh0aGlzLmdldERhdGFTb3VyY2UoKSk7XG4gIH1cblxuICBkYXRhU291cmNlQ2hhbmdlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VDaGFuZ2VkO1xuICB9XG5cbiAgZmlsdGVyTG9jYWxEYXRhQnkoc2VhcmNoS2V5OiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5nZXREYXRhU291cmNlKCkuZmlsdGVyKChvYmo6IEFycmF5PGFueT4pID0+IHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnNvbWUoKGtleTogYW55KSA9PiB7XG4gICAgICAgIGlmIChvYmpba2V5XSkge1xuICAgICAgICAgIHJldHVybiBvYmpba2V5XVxuICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAuaW5jbHVkZXMoc2VhcmNoS2V5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzZWFyY2hMb2NhbERhdGFCeShzZWFyY2hLZXk6IGFueSkge1xuICAgIGlmICghc2VhcmNoS2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXREYXRhU291cmNlKCk7XG4gICAgfVxuXG4gICAgaWYgKHNlYXJjaEtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyTG9jYWxEYXRhQnkoc2VhcmNoS2V5LnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbiAgfVxuXG4gIHNlYXJjaERhdGFPYnNlcnZhYmxlKHNlYXJjaEtleTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgIG9ic2VydmVyLm5leHQodGhpcy5zZWFyY2hMb2NhbERhdGFCeShzZWFyY2hLZXkpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgfVxufVxuIl19