/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2, } from '@angular/core';
import { fromEvent } from 'rxjs';
import { window } from '../utils/facade/browser';
import { distinctUntilChanged, filter, map, pairwise, share, skip, throttleTime, } from 'rxjs/operators';
/** @enum {string} */
var Direction = {
    Up: 'Up',
    Down: 'Down',
};
var StickyHeaderDirective = /** @class */ (function () {
    function StickyHeaderDirective(_renderer, _el) {
        this._renderer = _renderer;
        this._el = _el;
        this.animationDuration = 200;
        this.transitionEnd = new EventEmitter();
    }
    /**
     * @return {?}
     */
    StickyHeaderDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var scroll$ = fromEvent(window, 'scroll').pipe(throttleTime(10), map((/**
         * @return {?}
         */
        function () { return window.pageYOffset; })), pairwise(), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), y1 = _b[0], y2 = _b[1];
            return (y2 < y1 ? Direction.Up : Direction.Down);
        })), distinctUntilChanged(), share());
        this.scrollUp$ = scroll$.pipe(filter((/**
         * @param {?} direction
         * @return {?}
         */
        function (direction) { return direction === Direction.Up; })));
        this.scrollDown$ = scroll$.pipe(filter((/**
         * @param {?} direction
         * @return {?}
         */
        function (direction) { return direction === Direction.Down; })));
        this._renderer.setStyle(this._el.nativeElement, 'position', 'fixed');
        this._renderer.setStyle(this._el.nativeElement, 'top', '0');
        this._renderer.setStyle(this._el.nativeElement, 'width', '100%');
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.scrollUp$.pipe(skip(0)).subscribe((/**
             * @return {?}
             */
            function () {
                _this._renderer.setStyle(_this._el.nativeElement, 'transition', "all " + _this.animationDuration + "ms ease-in");
                _this._renderer.setStyle(_this._el.nativeElement, 'transform', 'translateY(0%)');
                _this.transitionEnd.emit({ state: 'Visible' });
            }));
            _this.scrollDown$.pipe(skip(0)).subscribe((/**
             * @return {?}
             */
            function () {
                _this._renderer.setStyle(_this._el.nativeElement, 'transition', "all " + _this.animationDuration + "ms ease-in");
                _this._renderer.setStyle(_this._el.nativeElement, 'transform', 'translateY(-100%)');
                _this.transitionEnd.emit({ state: 'Hidden' });
            }));
        }), 0);
    };
    StickyHeaderDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbStickyHeader]',
                    exportAs: 'mdbStickyHeader',
                },] }
    ];
    /** @nocollapse */
    StickyHeaderDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    StickyHeaderDirective.propDecorators = {
        animationDuration: [{ type: Input }],
        transitionEnd: [{ type: Output }]
    };
    return StickyHeaderDirective;
}());
export { StickyHeaderDirective };
if (false) {
    /** @type {?} */
    StickyHeaderDirective.prototype.animationDuration;
    /** @type {?} */
    StickyHeaderDirective.prototype.transitionEnd;
    /**
     * @type {?}
     * @private
     */
    StickyHeaderDirective.prototype.scrollDown$;
    /**
     * @type {?}
     * @private
     */
    StickyHeaderDirective.prototype.scrollUp$;
    /**
     * @type {?}
     * @private
     */
    StickyHeaderDirective.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    StickyHeaderDirective.prototype._el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpY2t5LWhlYWRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3N0aWNreS1oZWFkZXIvc3RpY2t5LWhlYWRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDakQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sR0FBRyxFQUNILFFBQVEsRUFDUixLQUFLLEVBQ0wsSUFBSSxFQUNKLFlBQVksR0FDYixNQUFNLGdCQUFnQixDQUFDOzs7SUFHdEIsSUFBSyxJQUFJO0lBQ1QsTUFBTyxNQUFNOztBQUdmO0lBV0UsK0JBQW9CLFNBQW9CLEVBQVUsR0FBZTtRQUE3QyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQU54RCxzQkFBaUIsR0FBRyxHQUFHLENBQUM7UUFDdkIsa0JBQWEsR0FBb0MsSUFBSSxZQUFZLEVBQXFCLENBQUM7SUFLN0IsQ0FBQzs7OztJQUVyRSwrQ0FBZTs7O0lBQWY7UUFBQSxpQkFxQ0M7O1lBcENPLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDOUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUNoQixHQUFHOzs7UUFBQyxjQUFNLE9BQUEsTUFBTSxDQUFDLFdBQVcsRUFBbEIsQ0FBa0IsRUFBQyxFQUM3QixRQUFRLEVBQUUsRUFDVixHQUFHOzs7O1FBQUMsVUFBQyxFQUFRO2dCQUFSLDBCQUFRLEVBQVAsVUFB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b3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHdpbmRvdyB9IGZyb20gJy4uL3V0aWxzL2ZhY2FkZS9icm93c2VyJztcbmltcG9ydCB7XG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgcGFpcndpc2UsXG4gIHNoYXJlLFxuICBza2lwLFxuICB0aHJvdHRsZVRpbWUsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZW51bSBEaXJlY3Rpb24ge1xuICBVcCA9ICdVcCcsXG4gIERvd24gPSAnRG93bicsXG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJTdGlja3lIZWFkZXJdJyxcbiAgZXhwb3J0QXM6ICdtZGJTdGlja3lIZWFkZXInLFxufSlcbmV4cG9ydCBjbGFzcyBTdGlja3lIZWFkZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgYW5pbWF0aW9uRHVyYXRpb24gPSAyMDA7XG4gIEBPdXRwdXQoKSB0cmFuc2l0aW9uRW5kOiBFdmVudEVtaXR0ZXI8eyBzdGF0ZTogc3RyaW5nIH0+ID0gbmV3IEV2ZW50RW1pdHRlcjx7IHN0YXRlOiBzdHJpbmcgfT4oKTtcblxuICBwcml2YXRlIHNjcm9sbERvd24kOiBhbnk7XG4gIHByaXZhdGUgc2Nyb2xsVXAkOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IHNjcm9sbCQgPSBmcm9tRXZlbnQod2luZG93LCAnc2Nyb2xsJykucGlwZShcbiAgICAgIHRocm90dGxlVGltZSgxMCksXG4gICAgICBtYXAoKCkgPT4gd2luZG93LnBhZ2VZT2Zmc2V0KSxcbiAgICAgIHBhaXJ3aXNlKCksXG4gICAgICBtYXAoKFt5MSwgeTJdKTogRGlyZWN0aW9uID0+ICh5MiA8IHkxID8gRGlyZWN0aW9uLlVwIDogRGlyZWN0aW9uLkRvd24pKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICBzaGFyZSgpXG4gICAgKTtcblxuICAgIHRoaXMuc2Nyb2xsVXAkID0gc2Nyb2xsJC5waXBlKGZpbHRlcihkaXJlY3Rpb24gPT4gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uVXApKTtcbiAgICB0aGlzLnNjcm9sbERvd24kID0gc2Nyb2xsJC5waXBlKGZpbHRlcihkaXJlY3Rpb24gPT4gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uRG93bikpO1xuXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ3Bvc2l0aW9uJywgJ2ZpeGVkJyk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ3RvcCcsICcwJyk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgJzEwMCUnKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zY3JvbGxVcCQucGlwZShza2lwKDApKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICd0cmFuc2l0aW9uJyxcbiAgICAgICAgICBgYWxsICR7dGhpcy5hbmltYXRpb25EdXJhdGlvbn1tcyBlYXNlLWluYFxuICAgICAgICApO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkoMCUpJyk7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkVuZC5lbWl0KHsgc3RhdGU6ICdWaXNpYmxlJyB9KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zY3JvbGxEb3duJC5waXBlKHNraXAoMCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgJ3RyYW5zaXRpb24nLFxuICAgICAgICAgIGBhbGwgJHt0aGlzLmFuaW1hdGlvbkR1cmF0aW9ufW1zIGVhc2UtaW5gXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgtMTAwJSknKTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRW5kLmVtaXQoeyBzdGF0ZTogJ0hpZGRlbicgfSk7XG4gICAgICB9KTtcbiAgICB9LCAwKTtcbiAgfVxufVxuIl19