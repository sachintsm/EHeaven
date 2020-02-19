/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostBinding, Input, Renderer2, ViewEncapsulation, ChangeDetectionStrategy, } from '@angular/core';
export class MDBBadgeComponent {
    /**
     * @param {?} _el
     * @param {?} _renderer
     */
    constructor(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._renderer.addClass(this._el.nativeElement, 'badge');
        if (this.color) {
            /** @type {?} */
            const customClassArr = this.color.split(' ');
            customClassArr.forEach((/**
             * @param {?} el
             * @return {?}
             */
            (el) => {
                this._renderer.addClass(this._el.nativeElement, el);
            }));
        }
    }
}
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
MDBBadgeComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWJhZGdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYm9vdHN0cmFwLW1kLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvYmFkZ2UvbWRiLWJhZGdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFFTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLHVCQUF1QixHQUN4QixNQUFNLGVBQWUsQ0FBQztBQVN2QixNQUFNLE9BQU8saUJBQWlCOzs7OztJQWM1QixZQUFvQixHQUFlLEVBQVUsU0FBb0I7UUFBN0MsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFBRyxDQUFDOzs7O0lBRXJFLFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6RCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7O2tCQUNSLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFFNUMsY0FBYyxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLEVBQVUsRUFBRSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN0RCxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7O1lBaENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsOEZBQXlDO2dCQUV6QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O1lBZkMsVUFBVTtZQUlWLFNBQVM7OztzQkFhUixLQUFLLFlBQUksV0FBVyxTQUFDLHFCQUFxQjtzQkFDMUMsS0FBSyxZQUFJLFdBQVcsU0FBQyxxQkFBcUI7c0JBQzFDLEtBQUssWUFBSSxXQUFXLFNBQUMscUJBQXFCO21CQUMxQyxLQUFLLFlBQUksV0FBVyxTQUFDLGtCQUFrQjtzQkFDdkMsS0FBSyxZQUFJLFdBQVcsU0FBQyxxQkFBcUI7cUJBQzFDLEtBQUssWUFBSSxXQUFXLFNBQUMsb0JBQW9CO21CQUN6QyxLQUFLLFlBQUksV0FBVyxTQUFDLGtCQUFrQjswQkFFdkMsS0FBSztvQkFFTCxLQUFLO29CQUNMLEtBQUs7Ozs7SUFYTixvQ0FBOEQ7O0lBQzlELG9DQUE4RDs7SUFDOUQsb0NBQThEOztJQUM5RCxpQ0FBd0Q7O0lBQ3hELG9DQUE4RDs7SUFDOUQsbUNBQTREOztJQUM1RCxpQ0FBd0Q7O0lBRXhELHdDQUE2Qjs7SUFFN0Isa0NBQXVCOztJQUN2QixrQ0FBdUI7Ozs7O0lBRVgsZ0NBQXVCOzs7OztJQUFFLHNDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLWJhZGdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21kYi1iYWRnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2JhZGdlLW1vZHVsZS5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNREJCYWRnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MuYmFkZ2UtZGVmYXVsdCcpIGRlZmF1bHQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MuYmFkZ2UtcHJpbWFyeScpIHByaW1hcnk6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MuYmFkZ2Utc3VjY2VzcycpIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MuYmFkZ2UtaW5mbycpIGluZm86IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MuYmFkZ2Utd2FybmluZycpIHdhcm5pbmc6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MuYmFkZ2UtZGFuZ2VyJykgZGFuZ2VyOiBib29sZWFuO1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmJhZGdlLXBpbGwnKSBwaWxsOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGNsYXNzSW5zaWRlOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnYmFkZ2UnKTtcbiAgICBpZiAodGhpcy5jb2xvcikge1xuICAgICAgY29uc3QgY3VzdG9tQ2xhc3NBcnIgPSB0aGlzLmNvbG9yLnNwbGl0KCcgJyk7XG5cbiAgICAgIGN1c3RvbUNsYXNzQXJyLmZvckVhY2goKGVsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgZWwpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=