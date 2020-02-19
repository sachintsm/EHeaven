/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
var MdbBreadcrumbItemComponent = /** @class */ (function () {
    function MdbBreadcrumbItemComponent(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    MdbBreadcrumbItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._renderer.addClass(this._el.nativeElement, 'breadcrumb-item');
    };
    MdbBreadcrumbItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-breadcrumb-item',
                    template: "<li class=\"list-inline-item breadcrumb-item font-weight-{{fontWeight}}\">\n  <ng-content></ng-content>\n</li>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".breadcrumb-item{cursor:pointer}.breadcrumb-item.active{color:#6c757d!important}.breadcrumb-item.active>.breadcrumb-item{cursor:default}.light-font .breadcrumb-item:before{color:#fff}.light-font .breadcrumb-item.active{color:#cfd8dc!important}.light-font .breadcrumb-item.active>.breadcrumb-item{cursor:default}.dark-font .breadcrumb-item:before{color:#000}.dark-font .breadcrumb-item.active{color:#455a64!important}.dark-font .breadcrumb-item.active>.breadcrumb-item{cursor:default}"]
                }] }
    ];
    /** @nocollapse */
    MdbBreadcrumbItemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdbBreadcrumbItemComponent.propDecorators = {
        fontWeight: [{ type: Input }]
    };
    return MdbBreadcrumbItemComponent;
}());
export { MdbBreadcrumbItemComponent };
if (false) {
    /** @type {?} */
    MdbBreadcrumbItemComponent.prototype.fontWeight;
    /**
     * @type {?}
     * @private
     */
    MdbBreadcrumbItemComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    MdbBreadcrumbItemComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWJyZWFkY3J1bWItaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL2JyZWFkY3J1bWJzL21kYi1icmVhZGNydW1iLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5HO0lBU0Usb0NBQW9CLEdBQWUsRUFBVSxTQUFvQjtRQUE3QyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUFHLENBQUM7Ozs7SUFFckUsNkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUNyRSxDQUFDOztnQkFiRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsNEhBQW1EO29CQUVuRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7O2dCQVBtQixVQUFVO2dCQUFpQixTQUFTOzs7NkJBU3JELEtBQUs7O0lBT1IsaUNBQUM7Q0FBQSxBQWRELElBY0M7U0FSWSwwQkFBMEI7OztJQUNyQyxnREFBNEI7Ozs7O0lBRWhCLHlDQUF1Qjs7Ozs7SUFBRSwrQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLWJyZWFkY3J1bWItaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZGItYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vX2JyZWFkY3J1bWJzLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTWRiQnJlYWRjcnVtYkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmb250V2VpZ2h0OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2JyZWFkY3J1bWItaXRlbScpO1xuICB9XG59XG4iXX0=