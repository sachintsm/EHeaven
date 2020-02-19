/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getReferenceOffsets, setAllStyles } from './utils/index';
import { arrow, flip, preventOverflow, shift, initData } from './modifiers/index';
var Positioning = /** @class */ (function () {
    function Positioning() {
    }
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @return {?}
     */
    Positioning.prototype.position = /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @return {?}
     */
    function (hostElement, targetElement) {
        return this.offset(hostElement, targetElement);
    };
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @return {?}
     */
    Positioning.prototype.offset = /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @return {?}
     */
    function (hostElement, targetElement) {
        return getReferenceOffsets(targetElement, hostElement);
    };
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} position
     * @param {?=} _appendToBody
     * @param {?=} options
     * @return {?}
     */
    Positioning.prototype.positionElements = /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} position
     * @param {?=} _appendToBody
     * @param {?=} options
     * @return {?}
     */
    function (hostElement, targetElement, position, _appendToBody, options) {
        /** @type {?} */
        var chainOfModifiers = [flip, shift, preventOverflow, arrow];
        return chainOfModifiers.reduce((/**
         * @param {?} modifiedData
         * @param {?} modifier
         * @return {?}
         */
        function (modifiedData, modifier) { return modifier(modifiedData); }), initData(targetElement, hostElement, position, options));
    };
    return Positioning;
}());
export { Positioning };
/** @type {?} */
var positionService = new Positioning();
/**
 * @param {?} hostElement
 * @param {?} targetElement
 * @param {?} placement
 * @param {?=} appendToBody
 * @param {?=} options
 * @param {?=} renderer
 * @return {?}
 */
export function positionElements(hostElement, targetElement, placement, appendToBody, options, renderer) {
    /** @type {?} */
    var data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
    setAllStyles(data, renderer);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcG9zaXRpb25pbmcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL3Bvc2l0aW9uaW5nL25nLXBvc2l0aW9uaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFNQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFJbEY7SUFBQTtJQXVCQSxDQUFDOzs7Ozs7SUF0QkMsOEJBQVE7Ozs7O0lBQVIsVUFBUyxXQUF3QixFQUFFLGFBQTBCO1FBQzNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7O0lBRUQsNEJBQU07Ozs7O0lBQU4sVUFBTyxXQUF3QixFQUFFLGFBQTBCO1FBQ3pELE9BQU8sbUJBQW1CLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7Ozs7OztJQUVELHNDQUFnQjs7Ozs7Ozs7SUFBaEIsVUFDRSxXQUF3QixFQUN4QixhQUEwQixFQUMxQixRQUFnQixFQUNoQixhQUF1QixFQUN2QixPQUFhOztZQUVQLGdCQUFnQixHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsS0FBSyxDQUFDO1FBRTlELE9BQU8sZ0JBQWdCLENBQUMsTUFBTTs7Ozs7UUFDNUIsVUFBQyxZQUFZLEVBQUUsUUFBUSxJQUFLLE9BQUEsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUF0QixDQUFzQixHQUNsRCxRQUFRLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQ3hELENBQUM7SUFDSixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDOzs7SUFFSyxlQUFlLEdBQUcsSUFBSSxXQUFXLEVBQUU7Ozs7Ozs7Ozs7QUFFekMsTUFBTSxVQUFVLGdCQUFnQixDQUM5QixXQUF3QixFQUN4QixhQUEwQixFQUMxQixTQUFpQixFQUNqQixZQUFzQixFQUN0QixPQUFpQixFQUNqQixRQUFvQjs7UUFHZCxJQUFJLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixDQUMzQyxXQUFXLEVBQ1gsYUFBYSxFQUNiLFNBQVMsRUFDVCxZQUFZLEVBQ1osT0FBTyxDQUNSO0lBRUQsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAY29weXJpZ2h0IFZhbG9yIFNvZnR3YXJlXG4gKiBAY29weXJpZ2h0IEZlZGVyaWNvIFppdm9sbyBhbmQgY29udHJpYnV0b3JzXG4gKi9cbmltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBnZXRSZWZlcmVuY2VPZmZzZXRzLCBzZXRBbGxTdHlsZXMgfSBmcm9tICcuL3V0aWxzL2luZGV4JztcblxuaW1wb3J0IHsgYXJyb3csIGZsaXAsIHByZXZlbnRPdmVyZmxvdywgc2hpZnQsIGluaXREYXRhIH0gZnJvbSAnLi9tb2RpZmllcnMvaW5kZXgnO1xuaW1wb3J0IHsgRGF0YSwgT2Zmc2V0cywgT3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzL2luZGV4JztcblxuXG5leHBvcnQgY2xhc3MgUG9zaXRpb25pbmcge1xuICBwb3NpdGlvbihob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogT2Zmc2V0cyB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0KGhvc3RFbGVtZW50LCB0YXJnZXRFbGVtZW50KTtcbiAgfVxuXG4gIG9mZnNldChob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogT2Zmc2V0cyB7XG4gICAgcmV0dXJuIGdldFJlZmVyZW5jZU9mZnNldHModGFyZ2V0RWxlbWVudCwgaG9zdEVsZW1lbnQpO1xuICB9XG5cbiAgcG9zaXRpb25FbGVtZW50cyhcbiAgICBob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcG9zaXRpb246IHN0cmluZyxcbiAgICBfYXBwZW5kVG9Cb2R5PzogYm9vbGVhbixcbiAgICBvcHRpb25zPzogYW55XG4gICk6IERhdGEge1xuICAgIGNvbnN0IGNoYWluT2ZNb2RpZmllcnMgPSBbZmxpcCwgc2hpZnQsIHByZXZlbnRPdmVyZmxvdywgYXJyb3ddO1xuXG4gICAgcmV0dXJuIGNoYWluT2ZNb2RpZmllcnMucmVkdWNlKFxuICAgICAgKG1vZGlmaWVkRGF0YSwgbW9kaWZpZXIpID0+IG1vZGlmaWVyKG1vZGlmaWVkRGF0YSksXG4gICAgICBpbml0RGF0YSh0YXJnZXRFbGVtZW50LCBob3N0RWxlbWVudCwgcG9zaXRpb24sIG9wdGlvbnMpXG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBwb3NpdGlvblNlcnZpY2UgPSBuZXcgUG9zaXRpb25pbmcoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uRWxlbWVudHMoXG4gIGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHBsYWNlbWVudDogc3RyaW5nLFxuICBhcHBlbmRUb0JvZHk/OiBib29sZWFuLFxuICBvcHRpb25zPzogT3B0aW9ucyxcbiAgcmVuZGVyZXI/OiBSZW5kZXJlcjJcbik6IHZvaWQge1xuXG4gIGNvbnN0IGRhdGEgPSBwb3NpdGlvblNlcnZpY2UucG9zaXRpb25FbGVtZW50cyhcbiAgICBob3N0RWxlbWVudCxcbiAgICB0YXJnZXRFbGVtZW50LFxuICAgIHBsYWNlbWVudCxcbiAgICBhcHBlbmRUb0JvZHksXG4gICAgb3B0aW9uc1xuICApO1xuXG4gIHNldEFsbFN0eWxlcyhkYXRhLCByZW5kZXJlcik7XG59XG4iXX0=