/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Renderer2, ViewEncapsulation, ChangeDetectionStrategy, } from '@angular/core';
var MdbCardBodyComponent = /** @class */ (function () {
    function MdbCardBodyComponent(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    Object.defineProperty(MdbCardBodyComponent.prototype, "cascade", {
        set: /**
         * @param {?} cascade
         * @return {?}
         */
        function (cascade) {
            if (cascade) {
                this._r.addClass(this._el.nativeElement, 'card-body-cascade');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdbCardBodyComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._r.addClass(this._el.nativeElement, 'card-body');
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
    MdbCardBodyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-card-body',
                    template: "<ng-content></ng-content>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    MdbCardBodyComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdbCardBodyComponent.propDecorators = {
        class: [{ type: Input }],
        cascade: [{ type: Input }]
    };
    return MdbCardBodyComponent;
}());
export { MdbCardBodyComponent };
if (false) {
    /** @type {?} */
    MdbCardBodyComponent.prototype.class;
    /**
     * @type {?}
     * @private
     */
    MdbCardBodyComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    MdbCardBodyComponent.prototype._r;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWNhcmQtYm9keS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL2NhcmRzL21kYi1jYXJkLWJvZHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUVULGlCQUFpQixFQUNqQix1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUFFdkI7SUFlRSw4QkFBb0IsR0FBZSxFQUFVLEVBQWE7UUFBdEMsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVc7SUFBRyxDQUFDO0lBTjlELHNCQUFhLHlDQUFPOzs7OztRQUFwQixVQUFxQixPQUFnQjtZQUNuQyxJQUFJLE9BQU8sRUFBRTtnQkFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO2FBQy9EO1FBQ0gsQ0FBQzs7O09BQUE7Ozs7SUFJRCx1Q0FBUTs7O0lBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3RELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLE9BQVk7Z0JBQ3pDLEtBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3BELENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztnQkF4QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qix1Q0FBNkM7b0JBQzdDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBWkMsVUFBVTtnQkFDVixTQUFTOzs7d0JBYVIsS0FBSzswQkFFTCxLQUFLOztJQWdCUiwyQkFBQztDQUFBLEFBekJELElBeUJDO1NBbkJZLG9CQUFvQjs7O0lBQy9CLHFDQUF1Qjs7Ozs7SUFRWCxtQ0FBdUI7Ozs7O0lBQUUsa0NBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1jYXJkLWJvZHknLFxuICB0ZW1wbGF0ZVVybDogJy4vbWRiLWNhcmQtYm9keS5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJDYXJkQm9keUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgc2V0IGNhc2NhZGUoY2FzY2FkZTogYm9vbGVhbikge1xuICAgIGlmIChjYXNjYWRlKSB7XG4gICAgICB0aGlzLl9yLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdjYXJkLWJvZHktY2FzY2FkZScpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnY2FyZC1ib2R5Jyk7XG4gICAgaWYgKHRoaXMuY2xhc3MpIHtcbiAgICAgIHRoaXMuY2xhc3Muc3BsaXQoJyAnKS5mb3JFYWNoKChlbGVtZW50OiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5fci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19