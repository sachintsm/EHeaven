/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isIE } from './isIE';
/**
 * @param {?} axis
 * @param {?} body
 * @param {?} html
 * @param {?} computedStyle
 * @return {?}
 */
function getSize(axis, body, html, computedStyle) {
    return Math.max(((/** @type {?} */ (body)))["offset" + axis], ((/** @type {?} */ (body)))["scroll" + axis], ((/** @type {?} */ (html)))["client" + axis], ((/** @type {?} */ (html)))["offset" + axis], ((/** @type {?} */ (html)))["scroll" + axis], isIE(10)
        ? (parseInt(((/** @type {?} */ (html)))["offset" + axis], 10) +
            parseInt(computedStyle[(/** @type {?} */ ("margin" + (axis === 'Height' ? 'Top' : 'Left')))], 10) +
            parseInt(computedStyle[(/** @type {?} */ ("margin" + (axis === 'Height' ? 'Bottom' : 'Right')))], 10))
        : 0);
}
/**
 * @param {?} document
 * @return {?}
 */
export function getWindowSizes(document) {
    /** @type {?} */
    var body = document.body;
    /** @type {?} */
    var html = document.documentElement;
    /** @type {?} */
    var computedStyle = isIE(10) && getComputedStyle(html);
    return {
        height: getSize('Height', body, html, computedStyle),
        width: getSize('Width', body, html, computedStyle)
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0V2luZG93U2l6ZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL3Bvc2l0aW9uaW5nL3V0aWxzL2dldFdpbmRvd1NpemVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7Ozs7OztBQUU5QixTQUFTLE9BQU8sQ0FBQyxJQUFZLEVBQUUsSUFBaUIsRUFBRSxJQUFpQixFQUFFLGFBQWtDO0lBQ3JHLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FDYixDQUFDLG1CQUFBLElBQUksRUFBTyxDQUFDLENBQUMsV0FBUyxJQUFNLENBQUMsRUFDOUIsQ0FBQyxtQkFBQSxJQUFJLEVBQU8sQ0FBQyxDQUFDLFdBQVMsSUFBTSxDQUFDLEVBQzlCLENBQUMsbUJBQUEsSUFBSSxFQUFPLENBQUMsQ0FBQyxXQUFTLElBQU0sQ0FBQyxFQUM5QixDQUFDLG1CQUFBLElBQUksRUFBTyxDQUFDLENBQUMsV0FBUyxJQUFNLENBQUMsRUFDOUIsQ0FBQyxtQkFBQSxJQUFJLEVBQU8sQ0FBQyxDQUFDLFdBQVMsSUFBTSxDQUFDLEVBQzlCLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBQSxJQUFJLEVBQU8sQ0FBQyxDQUFDLFdBQVMsSUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQy9DLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQUEsWUFBUyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBRSxFQUFPLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDakYsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBQSxZQUFTLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFFLEVBQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hGLENBQUMsQ0FBQyxDQUFDLENBQ0osQ0FBQztBQUNKLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxRQUFhOztRQUNwQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUk7O1FBQ3BCLElBQUksR0FBRyxRQUFRLENBQUMsZUFBZTs7UUFDL0IsYUFBYSxHQUFRLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7SUFFN0QsT0FBTztRQUNMLE1BQU0sRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDO1FBQ3BELEtBQUssRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDO0tBQ25ELENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNJRSB9IGZyb20gJy4vaXNJRSc7XG5cbmZ1bmN0aW9uIGdldFNpemUoYXhpczogc3RyaW5nLCBib2R5OiBIVE1MRWxlbWVudCwgaHRtbDogSFRNTEVsZW1lbnQsIGNvbXB1dGVkU3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb24pIHtcbiAgcmV0dXJuIE1hdGgubWF4KFxuICAgIChib2R5IGFzIGFueSlbYG9mZnNldCR7YXhpc31gXSxcbiAgICAoYm9keSBhcyBhbnkpW2BzY3JvbGwke2F4aXN9YF0sXG4gICAgKGh0bWwgYXMgYW55KVtgY2xpZW50JHtheGlzfWBdLFxuICAgIChodG1sIGFzIGFueSlbYG9mZnNldCR7YXhpc31gXSxcbiAgICAoaHRtbCBhcyBhbnkpW2BzY3JvbGwke2F4aXN9YF0sXG4gICAgaXNJRSgxMClcbiAgICAgID8gKHBhcnNlSW50KChodG1sIGFzIGFueSlbYG9mZnNldCR7YXhpc31gXSwgMTApICtcbiAgICAgIHBhcnNlSW50KGNvbXB1dGVkU3R5bGVbYG1hcmdpbiR7YXhpcyA9PT0gJ0hlaWdodCcgPyAnVG9wJyA6ICdMZWZ0J31gIGFzIGFueV0sIDEwKSArXG4gICAgICBwYXJzZUludChjb21wdXRlZFN0eWxlW2BtYXJnaW4ke2F4aXMgPT09ICdIZWlnaHQnID8gJ0JvdHRvbScgOiAnUmlnaHQnfWAgYXMgYW55XSwgMTApKVxuICAgIDogMFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2luZG93U2l6ZXMoZG9jdW1lbnQ6IGFueSkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgY29uc3QgY29tcHV0ZWRTdHlsZTogYW55ID0gaXNJRSgxMCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZShodG1sKTtcblxuICByZXR1cm4ge1xuICAgIGhlaWdodDogZ2V0U2l6ZSgnSGVpZ2h0JywgYm9keSwgaHRtbCwgY29tcHV0ZWRTdHlsZSksXG4gICAgd2lkdGg6IGdldFNpemUoJ1dpZHRoJywgYm9keSwgaHRtbCwgY29tcHV0ZWRTdHlsZSlcbiAgfTtcbn1cbiJdfQ==