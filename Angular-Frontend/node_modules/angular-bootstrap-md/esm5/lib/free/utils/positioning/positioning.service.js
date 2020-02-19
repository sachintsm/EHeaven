/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, ElementRef, RendererFactory2, Inject, PLATFORM_ID, NgZone, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { positionElements } from './ng-positioning';
import { fromEvent, merge, of, animationFrameScheduler, Subject } from 'rxjs';
/**
 * @record
 */
export function PositioningOptions() { }
if (false) {
    /**
     * The DOM element, ElementRef, or a selector string of an element which will be moved
     * @type {?|undefined}
     */
    PositioningOptions.prototype.element;
    /**
     * The DOM element, ElementRef, or a selector string of an element which the element will be attached to
     * @type {?|undefined}
     */
    PositioningOptions.prototype.target;
    /**
     * A string of the form 'vert-attachment horiz-attachment' or 'placement'
     * - placement can be "top", "bottom", "left", "right"
     * not yet supported:
     * - vert-attachment can be any of 'top', 'middle', 'bottom'
     * - horiz-attachment can be any of 'left', 'center', 'right'
     * @type {?|undefined}
     */
    PositioningOptions.prototype.attachment;
    /**
     * A string similar to `attachment`. The one difference is that, if it's not provided,
     * `targetAttachment` will assume the mirror image of `attachment`.
     * @type {?|undefined}
     */
    PositioningOptions.prototype.targetAttachment;
    /**
     * A string of the form 'vert-offset horiz-offset'
     * - vert-offset and horiz-offset can be of the form "20px" or "55%"
     * @type {?|undefined}
     */
    PositioningOptions.prototype.offset;
    /**
     * A string similar to `offset`, but referring to the offset of the target
     * @type {?|undefined}
     */
    PositioningOptions.prototype.targetOffset;
    /**
     * If true component will be attached to body
     * @type {?|undefined}
     */
    PositioningOptions.prototype.appendToBody;
}
var PositioningService = /** @class */ (function () {
    function PositioningService(rendererFactory, platformId, _ngZone) {
        var _this = this;
        this._ngZone = _ngZone;
        this.update$$ = new Subject();
        this.positionElements = new Map();
        if (isPlatformBrowser(platformId)) {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                merge(fromEvent(window, 'scroll'), fromEvent(window, 'resize'), 
                // tslint:disable-next-line: deprecation
                of(0, animationFrameScheduler), _this.update$$).subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.positionElements.forEach((/**
                     * @param {?} positionElement
                     * @return {?}
                     */
                    function (positionElement) {
                        positionElements(_getHtmlElement(positionElement.target), _getHtmlElement(positionElement.element), positionElement.attachment, positionElement.appendToBody, _this.options, rendererFactory.createRenderer(null, null));
                    }));
                }));
            }));
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    PositioningService.prototype.position = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.addPositionElement(options);
    };
    /**
     * @param {?} options
     * @return {?}
     */
    PositioningService.prototype.addPositionElement = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.positionElements.set(_getHtmlElement(options.element), options);
    };
    /**
     * @return {?}
     */
    PositioningService.prototype.calcPosition = /**
     * @return {?}
     */
    function () {
        this.update$$.next();
    };
    /**
     * @param {?} elRef
     * @return {?}
     */
    PositioningService.prototype.deletePositionElement = /**
     * @param {?} elRef
     * @return {?}
     */
    function (elRef) {
        this.positionElements.delete(_getHtmlElement(elRef));
    };
    /**
     * @param {?} options
     * @return {?}
     */
    PositioningService.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.options = options;
    };
    PositioningService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PositioningService.ctorParameters = function () { return [
        { type: RendererFactory2 },
        { type: Number, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: NgZone }
    ]; };
    return PositioningService;
}());
export { PositioningService };
if (false) {
    /** @type {?} */
    PositioningService.prototype.options;
    /**
     * @type {?}
     * @private
     */
    PositioningService.prototype.update$$;
    /**
     * @type {?}
     * @private
     */
    PositioningService.prototype.positionElements;
    /**
     * @type {?}
     * @private
     */
    PositioningService.prototype._ngZone;
}
/**
 * @param {?} element
 * @return {?}
 */
function _getHtmlElement(element) {
    // it means that we got a selector
    if (element && typeof element === 'string') {
        return document.querySelector(element);
    }
    if (element instanceof ElementRef) {
        return element.nativeElement;
    }
    return element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb25pbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYm9vdHN0cmFwLW1kLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdXRpbHMvcG9zaXRpb25pbmcvcG9zaXRpb25pbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFVBQVUsRUFDVixVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2hCLE1BQU0sRUFDTixXQUFXLEVBQ1gsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXBELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSx1QkFBdUIsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFHOUUsd0NBK0JDOzs7Ozs7SUE3QkMscUNBQWM7Ozs7O0lBR2Qsb0NBQWE7Ozs7Ozs7OztJQVNiLHdDQUFpQjs7Ozs7O0lBS2pCLDhDQUEwQjs7Ozs7O0lBSzFCLG9DQUFnQjs7Ozs7SUFHaEIsMENBQXNCOzs7OztJQUd0QiwwQ0FBdUI7O0FBR3pCO0lBTUUsNEJBQ0UsZUFBaUMsRUFDWixVQUFrQixFQUMvQixPQUFlO1FBSHpCLGlCQTJCQztRQXhCUyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBTmpCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQy9CLHFCQUFnQixHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFPbkMsSUFBSSxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQjs7O1lBQUM7Z0JBQzdCLEtBQUssQ0FDSCxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxFQUMzQixTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztnQkFDM0Isd0NBQXdDO2dCQUN4QyxFQUFFLENBQUMsQ0FBQyxFQUFFLHVCQUF1QixDQUFDLEVBQzlCLEtBQUksQ0FBQyxRQUFRLENBQ2QsQ0FBQyxTQUFTOzs7Z0JBQUM7b0JBQ1YsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU87Ozs7b0JBQUMsVUFBQyxlQUFtQzt3QkFDaEUsZ0JBQWdCLENBQ2QsZUFBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFDdkMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFDeEMsZUFBZSxDQUFDLFVBQVUsRUFDMUIsZUFBZSxDQUFDLFlBQVksRUFDNUIsS0FBSSxDQUFDLE9BQU8sRUFDWixlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FDM0MsQ0FBQztvQkFDSixDQUFDLEVBQUMsQ0FBQztnQkFDTCxDQUFDLEVBQUMsQ0FBQztZQUNMLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7OztJQUVELHFDQUFROzs7O0lBQVIsVUFBUyxPQUEyQjtRQUNsQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCwrQ0FBa0I7Ozs7SUFBbEIsVUFBbUIsT0FBMkI7UUFDNUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7SUFFRCx5Q0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsa0RBQXFCOzs7O0lBQXJCLFVBQXNCLEtBQWlCO1FBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7SUFFRCx1Q0FBVTs7OztJQUFWLFVBQVcsT0FBZ0I7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQzs7Z0JBckRGLFVBQVU7Ozs7Z0JBN0NULGdCQUFnQjs2Q0FxRGIsTUFBTSxTQUFDLFdBQVc7Z0JBbERyQixNQUFNOztJQWdHUix5QkFBQztDQUFBLEFBdERELElBc0RDO1NBckRZLGtCQUFrQjs7O0lBQzdCLHFDQUFpQjs7Ozs7SUFDakIsc0NBQXVDOzs7OztJQUN2Qyw4Q0FBcUM7Ozs7O0lBS25DLHFDQUF1Qjs7Ozs7O0FBK0MzQixTQUFTLGVBQWUsQ0FBQyxPQUEwQztJQUNqRSxrQ0FBa0M7SUFDbEMsSUFBSSxPQUFPLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1FBQzFDLE9BQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUN4QztJQUVELElBQUksT0FBTyxZQUFZLFVBQVUsRUFBRTtRQUNqQyxPQUFPLE9BQU8sQ0FBQyxhQUFhLENBQUM7S0FDOUI7SUFFRCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXJGYWN0b3J5MixcbiAgSW5qZWN0LFxuICBQTEFURk9STV9JRCxcbiAgTmdab25lLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgcG9zaXRpb25FbGVtZW50cyB9IGZyb20gJy4vbmctcG9zaXRpb25pbmcnO1xuXG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBvZiwgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuL21vZGVscy9pbmRleCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zaXRpb25pbmdPcHRpb25zIHtcbiAgLyoqIFRoZSBET00gZWxlbWVudCwgRWxlbWVudFJlZiwgb3IgYSBzZWxlY3RvciBzdHJpbmcgb2YgYW4gZWxlbWVudCB3aGljaCB3aWxsIGJlIG1vdmVkICovXG4gIGVsZW1lbnQ/OiBhbnk7XG5cbiAgLyoqIFRoZSBET00gZWxlbWVudCwgRWxlbWVudFJlZiwgb3IgYSBzZWxlY3RvciBzdHJpbmcgb2YgYW4gZWxlbWVudCB3aGljaCB0aGUgZWxlbWVudCB3aWxsIGJlIGF0dGFjaGVkIHRvICAqL1xuICB0YXJnZXQ/OiBhbnk7XG5cbiAgLyoqXG4gICAqIEEgc3RyaW5nIG9mIHRoZSBmb3JtICd2ZXJ0LWF0dGFjaG1lbnQgaG9yaXotYXR0YWNobWVudCcgb3IgJ3BsYWNlbWVudCdcbiAgICogLSBwbGFjZW1lbnQgY2FuIGJlIFwidG9wXCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJcbiAgICogbm90IHlldCBzdXBwb3J0ZWQ6XG4gICAqIC0gdmVydC1hdHRhY2htZW50IGNhbiBiZSBhbnkgb2YgJ3RvcCcsICdtaWRkbGUnLCAnYm90dG9tJ1xuICAgKiAtIGhvcml6LWF0dGFjaG1lbnQgY2FuIGJlIGFueSBvZiAnbGVmdCcsICdjZW50ZXInLCAncmlnaHQnXG4gICAqL1xuICBhdHRhY2htZW50PzogYW55O1xuXG4gIC8qKiBBIHN0cmluZyBzaW1pbGFyIHRvIGBhdHRhY2htZW50YC4gVGhlIG9uZSBkaWZmZXJlbmNlIGlzIHRoYXQsIGlmIGl0J3Mgbm90IHByb3ZpZGVkLFxuICAgKiBgdGFyZ2V0QXR0YWNobWVudGAgd2lsbCBhc3N1bWUgdGhlIG1pcnJvciBpbWFnZSBvZiBgYXR0YWNobWVudGAuXG4gICAqL1xuICB0YXJnZXRBdHRhY2htZW50Pzogc3RyaW5nO1xuXG4gIC8qKiBBIHN0cmluZyBvZiB0aGUgZm9ybSAndmVydC1vZmZzZXQgaG9yaXotb2Zmc2V0J1xuICAgKiAtIHZlcnQtb2Zmc2V0IGFuZCBob3Jpei1vZmZzZXQgY2FuIGJlIG9mIHRoZSBmb3JtIFwiMjBweFwiIG9yIFwiNTUlXCJcbiAgICovXG4gIG9mZnNldD86IHN0cmluZztcblxuICAvKiogQSBzdHJpbmcgc2ltaWxhciB0byBgb2Zmc2V0YCwgYnV0IHJlZmVycmluZyB0byB0aGUgb2Zmc2V0IG9mIHRoZSB0YXJnZXQgKi9cbiAgdGFyZ2V0T2Zmc2V0Pzogc3RyaW5nO1xuXG4gIC8qKiBJZiB0cnVlIGNvbXBvbmVudCB3aWxsIGJlIGF0dGFjaGVkIHRvIGJvZHkgKi9cbiAgYXBwZW5kVG9Cb2R5PzogYm9vbGVhbjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uaW5nU2VydmljZSB7XG4gIG9wdGlvbnM6IE9wdGlvbnM7XG4gIHByaXZhdGUgdXBkYXRlJCQgPSBuZXcgU3ViamVjdDxudWxsPigpO1xuICBwcml2YXRlIHBvc2l0aW9uRWxlbWVudHMgPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IG51bWJlcixcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIG1lcmdlKFxuICAgICAgICAgIGZyb21FdmVudCh3aW5kb3csICdzY3JvbGwnKSxcbiAgICAgICAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJyksXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvblxuICAgICAgICAgIG9mKDAsIGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyKSxcbiAgICAgICAgICB0aGlzLnVwZGF0ZSQkXG4gICAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uRWxlbWVudHMuZm9yRWFjaCgocG9zaXRpb25FbGVtZW50OiBQb3NpdGlvbmluZ09wdGlvbnMpID0+IHtcbiAgICAgICAgICAgIHBvc2l0aW9uRWxlbWVudHMoXG4gICAgICAgICAgICAgIF9nZXRIdG1sRWxlbWVudChwb3NpdGlvbkVsZW1lbnQudGFyZ2V0KSxcbiAgICAgICAgICAgICAgX2dldEh0bWxFbGVtZW50KHBvc2l0aW9uRWxlbWVudC5lbGVtZW50KSxcbiAgICAgICAgICAgICAgcG9zaXRpb25FbGVtZW50LmF0dGFjaG1lbnQsXG4gICAgICAgICAgICAgIHBvc2l0aW9uRWxlbWVudC5hcHBlbmRUb0JvZHksXG4gICAgICAgICAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgICAgcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHBvc2l0aW9uKG9wdGlvbnM6IFBvc2l0aW9uaW5nT3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMuYWRkUG9zaXRpb25FbGVtZW50KG9wdGlvbnMpO1xuICB9XG5cbiAgYWRkUG9zaXRpb25FbGVtZW50KG9wdGlvbnM6IFBvc2l0aW9uaW5nT3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMucG9zaXRpb25FbGVtZW50cy5zZXQoX2dldEh0bWxFbGVtZW50KG9wdGlvbnMuZWxlbWVudCksIG9wdGlvbnMpO1xuICB9XG5cbiAgY2FsY1Bvc2l0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlJCQubmV4dCgpO1xuICB9XG5cbiAgZGVsZXRlUG9zaXRpb25FbGVtZW50KGVsUmVmOiBFbGVtZW50UmVmKTogdm9pZCB7XG4gICAgdGhpcy5wb3NpdGlvbkVsZW1lbnRzLmRlbGV0ZShfZ2V0SHRtbEVsZW1lbnQoZWxSZWYpKTtcbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9uczogT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2dldEh0bWxFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZiB8IHN0cmluZyk6IGFueSB7XG4gIC8vIGl0IG1lYW5zIHRoYXQgd2UgZ290IGEgc2VsZWN0b3JcbiAgaWYgKGVsZW1lbnQgJiYgdHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCk7XG4gIH1cblxuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnRSZWYpIHtcbiAgICByZXR1cm4gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iXX0=