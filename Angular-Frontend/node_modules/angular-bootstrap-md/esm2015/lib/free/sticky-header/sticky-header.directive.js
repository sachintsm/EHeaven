/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2, } from '@angular/core';
import { fromEvent } from 'rxjs';
import { window } from '../utils/facade/browser';
import { distinctUntilChanged, filter, map, pairwise, share, skip, throttleTime, } from 'rxjs/operators';
/** @enum {string} */
const Direction = {
    Up: 'Up',
    Down: 'Down',
};
export class StickyHeaderDirective {
    /**
     * @param {?} _renderer
     * @param {?} _el
     */
    constructor(_renderer, _el) {
        this._renderer = _renderer;
        this._el = _el;
        this.animationDuration = 200;
        this.transitionEnd = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const scroll$ = fromEvent(window, 'scroll').pipe(throttleTime(10), map((/**
         * @return {?}
         */
        () => window.pageYOffset)), pairwise(), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([y1, y2]) => (y2 < y1 ? Direction.Up : Direction.Down))), distinctUntilChanged(), share());
        this.scrollUp$ = scroll$.pipe(filter((/**
         * @param {?} direction
         * @return {?}
         */
        direction => direction === Direction.Up)));
        this.scrollDown$ = scroll$.pipe(filter((/**
         * @param {?} direction
         * @return {?}
         */
        direction => direction === Direction.Down)));
        this._renderer.setStyle(this._el.nativeElement, 'position', 'fixed');
        this._renderer.setStyle(this._el.nativeElement, 'top', '0');
        this._renderer.setStyle(this._el.nativeElement, 'width', '100%');
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.scrollUp$.pipe(skip(0)).subscribe((/**
             * @return {?}
             */
            () => {
                this._renderer.setStyle(this._el.nativeElement, 'transition', `all ${this.animationDuration}ms ease-in`);
                this._renderer.setStyle(this._el.nativeElement, 'transform', 'translateY(0%)');
                this.transitionEnd.emit({ state: 'Visible' });
            }));
            this.scrollDown$.pipe(skip(0)).subscribe((/**
             * @return {?}
             */
            () => {
                this._renderer.setStyle(this._el.nativeElement, 'transition', `all ${this.animationDuration}ms ease-in`);
                this._renderer.setStyle(this._el.nativeElement, 'transform', 'translateY(-100%)');
                this.transitionEnd.emit({ state: 'Hidden' });
            }));
        }), 0);
    }
}
StickyHeaderDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbStickyHeader]',
                exportAs: 'mdbStickyHeader',
            },] }
];
/** @nocollapse */
StickyHeaderDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
StickyHeaderDirective.propDecorators = {
    animationDuration: [{ type: Input }],
    transitionEnd: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpY2t5LWhlYWRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3N0aWNreS1oZWFkZXIvc3RpY2t5LWhlYWRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLE1BQU0sRUFDTixHQUFHLEVBQ0gsUUFBUSxFQUNSLEtBQUssRUFDTCxJQUFJLEVBQ0osWUFBWSxHQUNiLE1BQU0sZ0JBQWdCLENBQUM7OztJQUd0QixJQUFLLElBQUk7SUFDVCxNQUFPLE1BQU07O0FBT2YsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUFPaEMsWUFBb0IsU0FBb0IsRUFBVSxHQUFlO1FBQTdDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBTnhELHNCQUFpQixHQUFHLEdBQUcsQ0FBQztRQUN2QixrQkFBYSxHQUFvQyxJQUFJLFlBQVksRUFBcUIsQ0FBQztJQUs3QixDQUFDOzs7O0lBRXJFLGVBQWU7O2NBQ1AsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUM5QyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQ2hCLEdBQUc7OztRQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUMsRUFDN0IsUUFBUSxFQUFFLEVBQ1YsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQWEsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQ3ZFLG9CQUFvQixFQUFFLEVBQ3RCLEtBQUssRUFBRSxDQUNSO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU07Ozs7UUFBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTTs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBRW5GLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRWpFLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztZQUFDLEdBQUcsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUN0QixZQUFZLEVBQ1osT0FBTyxJQUFJLENBQUMsaUJBQWlCLFlBQVksQ0FDMUMsQ0FBQztnQkFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztnQkFDL0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUNoRCxDQUFDLEVBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztZQUFDLEdBQUcsRUFBRTtnQkFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUN0QixZQUFZLEVBQ1osT0FBTyxJQUFJLENBQUMsaUJBQWlCLFlBQVksQ0FDMUMsQ0FBQztnQkFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztnQkFDbEYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUMvQyxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7OztZQWxERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLGlCQUFpQjthQUM1Qjs7OztZQXRCQyxTQUFTO1lBSlQsVUFBVTs7O2dDQTRCVCxLQUFLOzRCQUNMLE1BQU07Ozs7SUFEUCxrREFBaUM7O0lBQ2pDLDhDQUFpRzs7Ozs7SUFFakcsNENBQXlCOzs7OztJQUN6QiwwQ0FBdUI7Ozs7O0lBRVgsMENBQTRCOzs7OztJQUFFLG9DQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB3aW5kb3cgfSBmcm9tICcuLi91dGlscy9mYWNhZGUvYnJvd3Nlcic7XG5pbXBvcnQge1xuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgZmlsdGVyLFxuICBtYXAsXG4gIHBhaXJ3aXNlLFxuICBzaGFyZSxcbiAgc2tpcCxcbiAgdGhyb3R0bGVUaW1lLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmVudW0gRGlyZWN0aW9uIHtcbiAgVXAgPSAnVXAnLFxuICBEb3duID0gJ0Rvd24nLFxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiU3RpY2t5SGVhZGVyXScsXG4gIGV4cG9ydEFzOiAnbWRiU3RpY2t5SGVhZGVyJyxcbn0pXG5leHBvcnQgY2xhc3MgU3RpY2t5SGVhZGVyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGFuaW1hdGlvbkR1cmF0aW9uID0gMjAwO1xuICBAT3V0cHV0KCkgdHJhbnNpdGlvbkVuZDogRXZlbnRFbWl0dGVyPHsgc3RhdGU6IHN0cmluZyB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8eyBzdGF0ZTogc3RyaW5nIH0+KCk7XG5cbiAgcHJpdmF0ZSBzY3JvbGxEb3duJDogYW55O1xuICBwcml2YXRlIHNjcm9sbFVwJDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBzY3JvbGwkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Njcm9sbCcpLnBpcGUoXG4gICAgICB0aHJvdHRsZVRpbWUoMTApLFxuICAgICAgbWFwKCgpID0+IHdpbmRvdy5wYWdlWU9mZnNldCksXG4gICAgICBwYWlyd2lzZSgpLFxuICAgICAgbWFwKChbeTEsIHkyXSk6IERpcmVjdGlvbiA9PiAoeTIgPCB5MSA/IERpcmVjdGlvbi5VcCA6IERpcmVjdGlvbi5Eb3duKSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgc2hhcmUoKVxuICAgICk7XG5cbiAgICB0aGlzLnNjcm9sbFVwJCA9IHNjcm9sbCQucGlwZShmaWx0ZXIoZGlyZWN0aW9uID0+IGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLlVwKSk7XG4gICAgdGhpcy5zY3JvbGxEb3duJCA9IHNjcm9sbCQucGlwZShmaWx0ZXIoZGlyZWN0aW9uID0+IGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkRvd24pKTtcblxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdwb3NpdGlvbicsICdmaXhlZCcpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICd0b3AnLCAnMCcpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsICcxMDAlJyk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsVXAkLnBpcGUoc2tpcCgwKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAndHJhbnNpdGlvbicsXG4gICAgICAgICAgYGFsbCAke3RoaXMuYW5pbWF0aW9uRHVyYXRpb259bXMgZWFzZS1pbmBcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVZKDAlKScpO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25FbmQuZW1pdCh7IHN0YXRlOiAnVmlzaWJsZScgfSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2Nyb2xsRG93biQucGlwZShza2lwKDApKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICd0cmFuc2l0aW9uJyxcbiAgICAgICAgICBgYWxsICR7dGhpcy5hbmltYXRpb25EdXJhdGlvbn1tcyBlYXNlLWluYFxuICAgICAgICApO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkoLTEwMCUpJyk7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkVuZC5lbWl0KHsgc3RhdGU6ICdIaWRkZW4nIH0pO1xuICAgICAgfSk7XG4gICAgfSwgMCk7XG4gIH1cbn1cbiJdfQ==