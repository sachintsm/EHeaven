/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Renderer2, ChangeDetectionStrategy } from '@angular/core';
var MdbCardHeaderComponent = /** @class */ (function () {
    function MdbCardHeaderComponent(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    /**
     * @return {?}
     */
    MdbCardHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._r.addClass(this._el.nativeElement, 'card-header');
        if (this.class) {
            this.class.split(' ').forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                _this._r.addClass(_this._el.nativeElement, element);
            }));
        }
    };
    MdbCardHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-card-header',
                    template: "<ng-content></ng-content>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    MdbCardHeaderComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdbCardHeaderComponent.propDecorators = {
        class: [{ type: Input }]
    };
    return MdbCardHeaderComponent;
}());
export { MdbCardHeaderComponent };
if (false) {
    /** @type {?} */
    MdbCardHeaderComponent.prototype.class;
    /**
     * @type {?}
     * @private
     */
    MdbCardHeaderComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    MdbCardHeaderComponent.prototype._r;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWNhcmQtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYm9vdHN0cmFwLW1kLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvY2FyZHMvbWRiLWNhcmQtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsVUFBVSxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RztJQVFJLGdDQUFvQixHQUFlLEVBQVUsRUFBYTtRQUF0QyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBVztJQUFJLENBQUM7Ozs7SUFFL0QseUNBQVE7OztJQUFSO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN4RCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxPQUFZO2dCQUN2QyxLQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUN0RCxDQUFDLEVBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQzs7Z0JBakJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixxQ0FBK0M7b0JBQy9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNsRDs7OztnQkFOa0MsVUFBVTtnQkFBRSxTQUFTOzs7d0JBU25ELEtBQUs7O0lBV1YsNkJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQVpZLHNCQUFzQjs7O0lBQy9CLHVDQUF1Qjs7Ozs7SUFDWCxxQ0FBdUI7Ozs7O0lBQUUsb0NBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbWRiLWNhcmQtaGVhZGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbWRiLWNhcmQtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIE1kYkNhcmRIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3I6IFJlbmRlcmVyMikgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnY2FyZC1oZWFkZXInKTtcbiAgICAgICAgaWYgKHRoaXMuY2xhc3MpIHtcbiAgICAgICAgICAgIHRoaXMuY2xhc3Muc3BsaXQoJyAnKS5mb3JFYWNoKChlbGVtZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=