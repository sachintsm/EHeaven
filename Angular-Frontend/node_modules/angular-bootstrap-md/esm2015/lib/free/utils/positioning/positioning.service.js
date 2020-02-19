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
export class PositioningService {
    /**
     * @param {?} rendererFactory
     * @param {?} platformId
     * @param {?} _ngZone
     */
    constructor(rendererFactory, platformId, _ngZone) {
        this._ngZone = _ngZone;
        this.update$$ = new Subject();
        this.positionElements = new Map();
        if (isPlatformBrowser(platformId)) {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                merge(fromEvent(window, 'scroll'), fromEvent(window, 'resize'), 
                // tslint:disable-next-line: deprecation
                of(0, animationFrameScheduler), this.update$$).subscribe((/**
                 * @return {?}
                 */
                () => {
                    this.positionElements.forEach((/**
                     * @param {?} positionElement
                     * @return {?}
                     */
                    (positionElement) => {
                        positionElements(_getHtmlElement(positionElement.target), _getHtmlElement(positionElement.element), positionElement.attachment, positionElement.appendToBody, this.options, rendererFactory.createRenderer(null, null));
                    }));
                }));
            }));
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    position(options) {
        this.addPositionElement(options);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    addPositionElement(options) {
        this.positionElements.set(_getHtmlElement(options.element), options);
    }
    /**
     * @return {?}
     */
    calcPosition() {
        this.update$$.next();
    }
    /**
     * @param {?} elRef
     * @return {?}
     */
    deletePositionElement(elRef) {
        this.positionElements.delete(_getHtmlElement(elRef));
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.options = options;
    }
}
PositioningService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PositioningService.ctorParameters = () => [
    { type: RendererFactory2 },
    { type: Number, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: NgZone }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb25pbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYm9vdHN0cmFwLW1kLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdXRpbHMvcG9zaXRpb25pbmcvcG9zaXRpb25pbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFVBQVUsRUFDVixVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2hCLE1BQU0sRUFDTixXQUFXLEVBQ1gsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXBELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSx1QkFBdUIsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFHOUUsd0NBK0JDOzs7Ozs7SUE3QkMscUNBQWM7Ozs7O0lBR2Qsb0NBQWE7Ozs7Ozs7OztJQVNiLHdDQUFpQjs7Ozs7O0lBS2pCLDhDQUEwQjs7Ozs7O0lBSzFCLG9DQUFnQjs7Ozs7SUFHaEIsMENBQXNCOzs7OztJQUd0QiwwQ0FBdUI7O0FBSXpCLE1BQU0sT0FBTyxrQkFBa0I7Ozs7OztJQUs3QixZQUNFLGVBQWlDLEVBQ1osVUFBa0IsRUFDL0IsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFOakIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDL0IscUJBQWdCLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQU9uQyxJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2xDLEtBQUssQ0FDSCxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxFQUMzQixTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztnQkFDM0Isd0NBQXdDO2dCQUN4QyxFQUFFLENBQUMsQ0FBQyxFQUFFLHVCQUF1QixDQUFDLEVBQzlCLElBQUksQ0FBQyxRQUFRLENBQ2QsQ0FBQyxTQUFTOzs7Z0JBQUMsR0FBRyxFQUFFO29CQUNmLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPOzs7O29CQUFDLENBQUMsZUFBbUMsRUFBRSxFQUFFO3dCQUNwRSxnQkFBZ0IsQ0FDZCxlQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUN2QyxlQUFlLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxFQUN4QyxlQUFlLENBQUMsVUFBVSxFQUMxQixlQUFlLENBQUMsWUFBWSxFQUM1QixJQUFJLENBQUMsT0FBTyxFQUNaLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUMzQyxDQUFDO29CQUNKLENBQUMsRUFBQyxDQUFDO2dCQUNMLENBQUMsRUFBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLE9BQTJCO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLE9BQTJCO1FBQzVDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxLQUFpQjtRQUNyQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE9BQWdCO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7OztZQXJERixVQUFVOzs7O1lBN0NULGdCQUFnQjt5Q0FxRGIsTUFBTSxTQUFDLFdBQVc7WUFsRHJCLE1BQU07Ozs7SUE0Q04scUNBQWlCOzs7OztJQUNqQixzQ0FBdUM7Ozs7O0lBQ3ZDLDhDQUFxQzs7Ozs7SUFLbkMscUNBQXVCOzs7Ozs7QUErQzNCLFNBQVMsZUFBZSxDQUFDLE9BQTBDO0lBQ2pFLGtDQUFrQztJQUNsQyxJQUFJLE9BQU8sSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7UUFDMUMsT0FBTyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3hDO0lBRUQsSUFBSSxPQUFPLFlBQVksVUFBVSxFQUFFO1FBQ2pDLE9BQU8sT0FBTyxDQUFDLGFBQWEsQ0FBQztLQUM5QjtJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlckZhY3RvcnkyLFxuICBJbmplY3QsXG4gIFBMQVRGT1JNX0lELFxuICBOZ1pvbmUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBwb3NpdGlvbkVsZW1lbnRzIH0gZnJvbSAnLi9uZy1wb3NpdGlvbmluZyc7XG5cbmltcG9ydCB7IGZyb21FdmVudCwgbWVyZ2UsIG9mLCBhbmltYXRpb25GcmFtZVNjaGVkdWxlciwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzL2luZGV4JztcblxuZXhwb3J0IGludGVyZmFjZSBQb3NpdGlvbmluZ09wdGlvbnMge1xuICAvKiogVGhlIERPTSBlbGVtZW50LCBFbGVtZW50UmVmLCBvciBhIHNlbGVjdG9yIHN0cmluZyBvZiBhbiBlbGVtZW50IHdoaWNoIHdpbGwgYmUgbW92ZWQgKi9cbiAgZWxlbWVudD86IGFueTtcblxuICAvKiogVGhlIERPTSBlbGVtZW50LCBFbGVtZW50UmVmLCBvciBhIHNlbGVjdG9yIHN0cmluZyBvZiBhbiBlbGVtZW50IHdoaWNoIHRoZSBlbGVtZW50IHdpbGwgYmUgYXR0YWNoZWQgdG8gICovXG4gIHRhcmdldD86IGFueTtcblxuICAvKipcbiAgICogQSBzdHJpbmcgb2YgdGhlIGZvcm0gJ3ZlcnQtYXR0YWNobWVudCBob3Jpei1hdHRhY2htZW50JyBvciAncGxhY2VtZW50J1xuICAgKiAtIHBsYWNlbWVudCBjYW4gYmUgXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIlxuICAgKiBub3QgeWV0IHN1cHBvcnRlZDpcbiAgICogLSB2ZXJ0LWF0dGFjaG1lbnQgY2FuIGJlIGFueSBvZiAndG9wJywgJ21pZGRsZScsICdib3R0b20nXG4gICAqIC0gaG9yaXotYXR0YWNobWVudCBjYW4gYmUgYW55IG9mICdsZWZ0JywgJ2NlbnRlcicsICdyaWdodCdcbiAgICovXG4gIGF0dGFjaG1lbnQ/OiBhbnk7XG5cbiAgLyoqIEEgc3RyaW5nIHNpbWlsYXIgdG8gYGF0dGFjaG1lbnRgLiBUaGUgb25lIGRpZmZlcmVuY2UgaXMgdGhhdCwgaWYgaXQncyBub3QgcHJvdmlkZWQsXG4gICAqIGB0YXJnZXRBdHRhY2htZW50YCB3aWxsIGFzc3VtZSB0aGUgbWlycm9yIGltYWdlIG9mIGBhdHRhY2htZW50YC5cbiAgICovXG4gIHRhcmdldEF0dGFjaG1lbnQ/OiBzdHJpbmc7XG5cbiAgLyoqIEEgc3RyaW5nIG9mIHRoZSBmb3JtICd2ZXJ0LW9mZnNldCBob3Jpei1vZmZzZXQnXG4gICAqIC0gdmVydC1vZmZzZXQgYW5kIGhvcml6LW9mZnNldCBjYW4gYmUgb2YgdGhlIGZvcm0gXCIyMHB4XCIgb3IgXCI1NSVcIlxuICAgKi9cbiAgb2Zmc2V0Pzogc3RyaW5nO1xuXG4gIC8qKiBBIHN0cmluZyBzaW1pbGFyIHRvIGBvZmZzZXRgLCBidXQgcmVmZXJyaW5nIHRvIHRoZSBvZmZzZXQgb2YgdGhlIHRhcmdldCAqL1xuICB0YXJnZXRPZmZzZXQ/OiBzdHJpbmc7XG5cbiAgLyoqIElmIHRydWUgY29tcG9uZW50IHdpbGwgYmUgYXR0YWNoZWQgdG8gYm9keSAqL1xuICBhcHBlbmRUb0JvZHk/OiBib29sZWFuO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUG9zaXRpb25pbmdTZXJ2aWNlIHtcbiAgb3B0aW9uczogT3B0aW9ucztcbiAgcHJpdmF0ZSB1cGRhdGUkJCA9IG5ldyBTdWJqZWN0PG51bGw+KCk7XG4gIHByaXZhdGUgcG9zaXRpb25FbGVtZW50cyA9IG5ldyBNYXAoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogbnVtYmVyLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lXG4gICkge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgbWVyZ2UoXG4gICAgICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Njcm9sbCcpLFxuICAgICAgICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKSxcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXG4gICAgICAgICAgb2YoMCwgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIpLFxuICAgICAgICAgIHRoaXMudXBkYXRlJCRcbiAgICAgICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucG9zaXRpb25FbGVtZW50cy5mb3JFYWNoKChwb3NpdGlvbkVsZW1lbnQ6IFBvc2l0aW9uaW5nT3B0aW9ucykgPT4ge1xuICAgICAgICAgICAgcG9zaXRpb25FbGVtZW50cyhcbiAgICAgICAgICAgICAgX2dldEh0bWxFbGVtZW50KHBvc2l0aW9uRWxlbWVudC50YXJnZXQpLFxuICAgICAgICAgICAgICBfZ2V0SHRtbEVsZW1lbnQocG9zaXRpb25FbGVtZW50LmVsZW1lbnQpLFxuICAgICAgICAgICAgICBwb3NpdGlvbkVsZW1lbnQuYXR0YWNobWVudCxcbiAgICAgICAgICAgICAgcG9zaXRpb25FbGVtZW50LmFwcGVuZFRvQm9keSxcbiAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgICByZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcG9zaXRpb24ob3B0aW9uczogUG9zaXRpb25pbmdPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5hZGRQb3NpdGlvbkVsZW1lbnQob3B0aW9ucyk7XG4gIH1cblxuICBhZGRQb3NpdGlvbkVsZW1lbnQob3B0aW9uczogUG9zaXRpb25pbmdPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5wb3NpdGlvbkVsZW1lbnRzLnNldChfZ2V0SHRtbEVsZW1lbnQob3B0aW9ucy5lbGVtZW50KSwgb3B0aW9ucyk7XG4gIH1cblxuICBjYWxjUG9zaXRpb24oKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGUkJC5uZXh0KCk7XG4gIH1cblxuICBkZWxldGVQb3NpdGlvbkVsZW1lbnQoZWxSZWY6IEVsZW1lbnRSZWYpOiB2b2lkIHtcbiAgICB0aGlzLnBvc2l0aW9uRWxlbWVudHMuZGVsZXRlKF9nZXRIdG1sRWxlbWVudChlbFJlZikpO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zOiBPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxufVxuXG5mdW5jdGlvbiBfZ2V0SHRtbEVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmIHwgc3RyaW5nKTogYW55IHtcbiAgLy8gaXQgbWVhbnMgdGhhdCB3ZSBnb3QgYSBzZWxlY3RvclxuICBpZiAoZWxlbWVudCAmJiB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcbiAgfVxuXG4gIGlmIChlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudFJlZikge1xuICAgIHJldHVybiBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbiJdfQ==