/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostBinding, Input, Renderer2, ViewEncapsulation, ChangeDetectionStrategy, } from '@angular/core';
var MDBBadgeComponent = /** @class */ (function () {
    function MDBBadgeComponent(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    MDBBadgeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderer.addClass(this._el.nativeElement, 'badge');
        if (this.color) {
            /** @type {?} */
            var customClassArr = this.color.split(' ');
            customClassArr.forEach((/**
             * @param {?} el
             * @return {?}
             */
            function (el) {
                _this._renderer.addClass(_this._el.nativeElement, el);
            }));
        }
    };
    MDBBadgeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-badge',
                    template: "<span class=\"{{class}} {{classInside}}\">\n  <ng-content></ng-content>\n</span>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".badge{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);border-radius:.125rem;color:#fff!important}.badge-pill{border-radius:10rem;padding-right:.6rem;padding-left:.6rem}.badge-primary{background-color:#4285f4!important;color:#fff!important}.badge-danger{background-color:#ff3547!important;color:#fff!important}.badge-warning{background-color:#fb3!important;color:#fff!important}.badge-success{background-color:#00c851!important;color:#fff!important}.badge-info{background-color:#33b5e5!important;color:#fff!important}.badge-default{background-color:#2bbbad!important;color:#fff!important}.badge-secondary{background-color:#a6c!important;color:#fff!important}.badge-dark{background-color:#212121!important;color:#fff!important}.badge-light{background-color:#e0e0e0!important;color:#000!important}"]
                }] }
    ];
    /** @nocollapse */
    MDBBadgeComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MDBBadgeComponent.propDecorators = {
        default: [{ type: Input }, { type: HostBinding, args: ['class.badge-default',] }],
        primary: [{ type: Input }, { type: HostBinding, args: ['class.badge-primary',] }],
        success: [{ type: Input }, { type: HostBinding, args: ['class.badge-success',] }],
        info: [{ type: Input }, { type: HostBinding, args: ['class.badge-info',] }],
        warning: [{ type: Input }, { type: HostBinding, args: ['class.badge-warning',] }],
        danger: [{ type: Input }, { type: HostBinding, args: ['class.badge-danger',] }],
        pill: [{ type: Input }, { type: HostBinding, args: ['class.badge-pill',] }],
        classInside: [{ type: Input }],
        color: [{ type: Input }],
        class: [{ type: Input }]
    };
    return MDBBadgeComponent;
}());
export { MDBBadgeComponent };
if (false) {
    /** @type {?} */
    MDBBadgeComponent.prototype.default;
    /** @type {?} */
    MDBBadgeComponent.prototype.primary;
    /** @type {?} */
    MDBBadgeComponent.prototype.success;
    /** @type {?} */
    MDBBadgeComponent.prototype.info;
    /** @type {?} */
    MDBBadgeComponent.prototype.warning;
    /** @type {?} */
    MDBBadgeComponent.prototype.danger;
    /** @type {?} */
    MDBBadgeComponent.prototype.pill;
    /** @type {?} */
    MDBBadgeComponent.prototype.classInside;
    /** @type {?} */
    MDBBadgeComponent.prototype.color;
    /** @type {?} */
    MDBBadgeComponent.prototype.class;
    /**
     * @type {?}
     * @private
     */
    MDBBadgeComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    MDBBadgeComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWJhZGdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYm9vdHN0cmFwLW1kLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvYmFkZ2UvbWRiLWJhZGdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFFTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLHVCQUF1QixHQUN4QixNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQXFCRSwyQkFBb0IsR0FBZSxFQUFVLFNBQW9CO1FBQTdDLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXO0lBQUcsQ0FBQzs7OztJQUVyRSxvQ0FBUTs7O0lBQVI7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTs7Z0JBQ1IsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUU1QyxjQUFjLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsRUFBVTtnQkFDaEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdEQsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O2dCQWhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLDhGQUF5QztvQkFFekMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7Z0JBZkMsVUFBVTtnQkFJVixTQUFTOzs7MEJBYVIsS0FBSyxZQUFJLFdBQVcsU0FBQyxxQkFBcUI7MEJBQzFDLEtBQUssWUFBSSxXQUFXLFNBQUMscUJBQXFCOzBCQUMxQyxLQUFLLFlBQUksV0FBVyxTQUFDLHFCQUFxQjt1QkFDMUMsS0FBSyxZQUFJLFdBQVcsU0FBQyxrQkFBa0I7MEJBQ3ZDLEtBQUssWUFBSSxXQUFXLFNBQUMscUJBQXFCO3lCQUMxQyxLQUFLLFlBQUksV0FBVyxTQUFDLG9CQUFvQjt1QkFDekMsS0FBSyxZQUFJLFdBQVcsU0FBQyxrQkFBa0I7OEJBRXZDLEtBQUs7d0JBRUwsS0FBSzt3QkFDTCxLQUFLOztJQWNSLHdCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0ExQlksaUJBQWlCOzs7SUFDNUIsb0NBQThEOztJQUM5RCxvQ0FBOEQ7O0lBQzlELG9DQUE4RDs7SUFDOUQsaUNBQXdEOztJQUN4RCxvQ0FBOEQ7O0lBQzlELG1DQUE0RDs7SUFDNUQsaUNBQXdEOztJQUV4RCx3Q0FBNkI7O0lBRTdCLGtDQUF1Qjs7SUFDdkIsa0NBQXVCOzs7OztJQUVYLGdDQUF1Qjs7Ozs7SUFBRSxzQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1iYWRnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZGItYmFkZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9iYWRnZS1tb2R1bGUuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTURCQmFkZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmJhZGdlLWRlZmF1bHQnKSBkZWZhdWx0OiBib29sZWFuO1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmJhZGdlLXByaW1hcnknKSBwcmltYXJ5OiBib29sZWFuO1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmJhZGdlLXN1Y2Nlc3MnKSBzdWNjZXNzOiBib29sZWFuO1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmJhZGdlLWluZm8nKSBpbmZvOiBib29sZWFuO1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmJhZGdlLXdhcm5pbmcnKSB3YXJuaW5nOiBib29sZWFuO1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmJhZGdlLWRhbmdlcicpIGRhbmdlcjogYm9vbGVhbjtcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYWRnZS1waWxsJykgcGlsbDogYm9vbGVhbjtcblxuICBASW5wdXQoKSBjbGFzc0luc2lkZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2JhZGdlJyk7XG4gICAgaWYgKHRoaXMuY29sb3IpIHtcbiAgICAgIGNvbnN0IGN1c3RvbUNsYXNzQXJyID0gdGhpcy5jb2xvci5zcGxpdCgnICcpO1xuXG4gICAgICBjdXN0b21DbGFzc0Fyci5mb3JFYWNoKChlbDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGVsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19