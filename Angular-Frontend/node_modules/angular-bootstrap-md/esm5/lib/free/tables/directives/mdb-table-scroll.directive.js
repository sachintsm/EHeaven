/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
var MdbTableScrollDirective = /** @class */ (function () {
    function MdbTableScrollDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.scrollY = false;
        this.maxHeight = null;
        this.scrollX = false;
        this.maxWidth = null;
    }
    /**
     * @param {?} tableWrapper
     * @return {?}
     */
    MdbTableScrollDirective.prototype.wrapTableWithVerticalScrollingWrapper = /**
     * @param {?} tableWrapper
     * @return {?}
     */
    function (tableWrapper) {
        this.renderer.setStyle(tableWrapper, 'max-height', this.maxHeight + 'px');
        this.renderer.setStyle(tableWrapper, 'overflow-y', 'auto');
        this.renderer.setStyle(tableWrapper, 'display', 'block');
    };
    /**
     * @param {?} tableWrapper
     * @return {?}
     */
    MdbTableScrollDirective.prototype.wrapTableWithHorizontalScrollingWrapper = /**
     * @param {?} tableWrapper
     * @return {?}
     */
    function (tableWrapper) {
        this.renderer.setStyle(tableWrapper, 'max-width', this.maxWidth + 'px');
        this.renderer.setStyle(tableWrapper, 'overflow-x', 'auto');
        this.renderer.setStyle(tableWrapper, 'display', 'block');
    };
    /**
     * @param {?} tableWrapper
     * @return {?}
     */
    MdbTableScrollDirective.prototype.wrapTableWithHorizontalAndVerticalScrollingWrapper = /**
     * @param {?} tableWrapper
     * @return {?}
     */
    function (tableWrapper) {
        this.renderer.setStyle(tableWrapper, 'max-height', this.maxHeight + 'px');
        this.renderer.setStyle(tableWrapper, 'max-width', this.maxWidth + 'px');
        this.renderer.setStyle(tableWrapper, 'overflow-x', 'auto');
        this.renderer.setStyle(tableWrapper, 'display', 'block');
    };
    /**
     * @return {?}
     */
    MdbTableScrollDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var parent = this.el.nativeElement.parentNode;
        /** @type {?} */
        var tableWrapper = this.renderer.createElement('div');
        if (this.scrollY && this.scrollX && this.maxHeight && this.maxWidth) {
            this.wrapTableWithHorizontalAndVerticalScrollingWrapper(tableWrapper);
        }
        if (this.scrollY && this.maxHeight) {
            this.wrapTableWithVerticalScrollingWrapper(tableWrapper);
        }
        if (this.scrollX && this.maxWidth) {
            this.wrapTableWithHorizontalScrollingWrapper(tableWrapper);
        }
        this.renderer.insertBefore(parent, tableWrapper, this.el.nativeElement);
        this.renderer.removeChild(parent, this.el.nativeElement);
        this.renderer.appendChild(tableWrapper, this.el.nativeElement);
    };
    MdbTableScrollDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbTableScroll]',
                },] }
    ];
    /** @nocollapse */
    MdbTableScrollDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    MdbTableScrollDirective.propDecorators = {
        scrollY: [{ type: Input }],
        maxHeight: [{ type: Input }],
        scrollX: [{ type: Input }],
        maxWidth: [{ type: Input }]
    };
    return MdbTableScrollDirective;
}());
export { MdbTableScrollDirective };
if (false) {
    /** @type {?} */
    MdbTableScrollDirective.prototype.scrollY;
    /** @type {?} */
    MdbTableScrollDirective.prototype.maxHeight;
    /** @type {?} */
    MdbTableScrollDirective.prototype.scrollX;
    /** @type {?} */
    MdbTableScrollDirective.prototype.maxWidth;
    /**
     * @type {?}
     * @private
     */
    MdbTableScrollDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    MdbTableScrollDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLXNjcm9sbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3RhYmxlcy9kaXJlY3RpdmVzL21kYi10YWJsZS1zY3JvbGwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhGO0lBVUUsaUNBQW9CLFFBQW1CLEVBQVUsRUFBYztRQUEzQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQU50RCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGNBQVMsR0FBUSxJQUFJLENBQUM7UUFFdEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixhQUFRLEdBQVEsSUFBSSxDQUFDO0lBRW9DLENBQUM7Ozs7O0lBRW5FLHVFQUFxQzs7OztJQUFyQyxVQUFzQyxZQUF3QjtRQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7O0lBRUQseUVBQXVDOzs7O0lBQXZDLFVBQXdDLFlBQXdCO1FBQzlELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFFRCxvRkFBa0Q7Ozs7SUFBbEQsVUFBbUQsWUFBd0I7UUFDekUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7OztJQUVELDBDQUFROzs7SUFBUjs7WUFDUSxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVTs7WUFDekMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUV2RCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbkUsSUFBSSxDQUFDLGtEQUFrRCxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3ZFO1FBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLHFDQUFxQyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzFEO1FBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakMsSUFBSSxDQUFDLHVDQUF1QyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzVEO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7O2dCQWxERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtpQkFDN0I7Ozs7Z0JBSitCLFNBQVM7Z0JBQXJCLFVBQVU7OzswQkFNM0IsS0FBSzs0QkFDTCxLQUFLOzBCQUVMLEtBQUs7MkJBQ0wsS0FBSzs7SUEyQ1IsOEJBQUM7Q0FBQSxBQW5ERCxJQW1EQztTQWhEWSx1QkFBdUI7OztJQUNsQywwQ0FBeUI7O0lBQ3pCLDRDQUErQjs7SUFFL0IsMENBQXlCOztJQUN6QiwyQ0FBOEI7Ozs7O0lBRWxCLDJDQUEyQjs7Ozs7SUFBRSxxQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiVGFibGVTY3JvbGxdJyxcbn0pXG5leHBvcnQgY2xhc3MgTWRiVGFibGVTY3JvbGxEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBzY3JvbGxZID0gZmFsc2U7XG4gIEBJbnB1dCgpIG1heEhlaWdodDogYW55ID0gbnVsbDtcblxuICBASW5wdXQoKSBzY3JvbGxYID0gZmFsc2U7XG4gIEBJbnB1dCgpIG1heFdpZHRoOiBhbnkgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICB3cmFwVGFibGVXaXRoVmVydGljYWxTY3JvbGxpbmdXcmFwcGVyKHRhYmxlV3JhcHBlcjogRWxlbWVudFJlZikge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGFibGVXcmFwcGVyLCAnbWF4LWhlaWdodCcsIHRoaXMubWF4SGVpZ2h0ICsgJ3B4Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0YWJsZVdyYXBwZXIsICdvdmVyZmxvdy15JywgJ2F1dG8nKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRhYmxlV3JhcHBlciwgJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgfVxuXG4gIHdyYXBUYWJsZVdpdGhIb3Jpem9udGFsU2Nyb2xsaW5nV3JhcHBlcih0YWJsZVdyYXBwZXI6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRhYmxlV3JhcHBlciwgJ21heC13aWR0aCcsIHRoaXMubWF4V2lkdGggKyAncHgnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRhYmxlV3JhcHBlciwgJ292ZXJmbG93LXgnLCAnYXV0bycpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGFibGVXcmFwcGVyLCAnZGlzcGxheScsICdibG9jaycpO1xuICB9XG5cbiAgd3JhcFRhYmxlV2l0aEhvcml6b250YWxBbmRWZXJ0aWNhbFNjcm9sbGluZ1dyYXBwZXIodGFibGVXcmFwcGVyOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0YWJsZVdyYXBwZXIsICdtYXgtaGVpZ2h0JywgdGhpcy5tYXhIZWlnaHQgKyAncHgnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRhYmxlV3JhcHBlciwgJ21heC13aWR0aCcsIHRoaXMubWF4V2lkdGggKyAncHgnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRhYmxlV3JhcHBlciwgJ292ZXJmbG93LXgnLCAnYXV0bycpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGFibGVXcmFwcGVyLCAnZGlzcGxheScsICdibG9jaycpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgY29uc3QgdGFibGVXcmFwcGVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGlmICh0aGlzLnNjcm9sbFkgJiYgdGhpcy5zY3JvbGxYICYmIHRoaXMubWF4SGVpZ2h0ICYmIHRoaXMubWF4V2lkdGgpIHtcbiAgICAgIHRoaXMud3JhcFRhYmxlV2l0aEhvcml6b250YWxBbmRWZXJ0aWNhbFNjcm9sbGluZ1dyYXBwZXIodGFibGVXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY3JvbGxZICYmIHRoaXMubWF4SGVpZ2h0KSB7XG4gICAgICB0aGlzLndyYXBUYWJsZVdpdGhWZXJ0aWNhbFNjcm9sbGluZ1dyYXBwZXIodGFibGVXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY3JvbGxYICYmIHRoaXMubWF4V2lkdGgpIHtcbiAgICAgIHRoaXMud3JhcFRhYmxlV2l0aEhvcml6b250YWxTY3JvbGxpbmdXcmFwcGVyKHRhYmxlV3JhcHBlcik7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUocGFyZW50LCB0YWJsZVdyYXBwZXIsIHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChwYXJlbnQsIHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0YWJsZVdyYXBwZXIsIHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gIH1cbn1cbiJdfQ==