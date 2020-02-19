/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Output, EventEmitter, ElementRef } from '@angular/core';
var MdbTableRowDirective = /** @class */ (function () {
    function MdbTableRowDirective(el) {
        this.el = el;
        this.rowCreated = new EventEmitter();
        this.rowRemoved = new EventEmitter();
    }
    /**
     * @return {?}
     */
    MdbTableRowDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.rowCreated.emit({ created: true, el: this.el.nativeElement });
    };
    /**
     * @return {?}
     */
    MdbTableRowDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.rowRemoved.emit({ removed: true });
    };
    MdbTableRowDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbTableRow]'
                },] }
    ];
    /** @nocollapse */
    MdbTableRowDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MdbTableRowDirective.propDecorators = {
        rowCreated: [{ type: Output }],
        rowRemoved: [{ type: Output }]
    };
    return MdbTableRowDirective;
}());
export { MdbTableRowDirective };
if (false) {
    /** @type {?} */
    MdbTableRowDirective.prototype.rowCreated;
    /** @type {?} */
    MdbTableRowDirective.prototype.rowRemoved;
    /**
     * @type {?}
     * @private
     */
    MdbTableRowDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLXJvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3RhYmxlcy9kaXJlY3RpdmVzL21kYi10YWJsZS1yb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQXFCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRjtJQVFFLDhCQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUh4QixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNyQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUcvQyxDQUFDOzs7O0lBRUQsdUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQzs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Z0JBakJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtpQkFDMUI7Ozs7Z0JBSjRELFVBQVU7Ozs2QkFPcEUsTUFBTTs2QkFDTixNQUFNOztJQWFULDJCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FoQlksb0JBQW9COzs7SUFFL0IsMENBQStDOztJQUMvQywwQ0FBK0M7Ozs7O0lBRW5DLGtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT25EZXN0cm95LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJUYWJsZVJvd10nXG59KVxuZXhwb3J0IGNsYXNzIE1kYlRhYmxlUm93RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBPdXRwdXQoKSByb3dDcmVhdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSByb3dSZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yb3dDcmVhdGVkLmVtaXQoeyBjcmVhdGVkOiB0cnVlLCBlbDogdGhpcy5lbC5uYXRpdmVFbGVtZW50IH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5yb3dSZW1vdmVkLmVtaXQoeyByZW1vdmVkOiB0cnVlIH0pO1xuICB9XG5cbn1cbiJdfQ==