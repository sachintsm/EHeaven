/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 */
import { getBoundaries } from './getBoundaries';
/**
 * @param {?} __0
 * @return {?}
 */
function getArea(_a) {
    var width = _a.width, height = _a.height;
    return width * height;
}
/**
 * @param {?} placement
 * @param {?} refRect
 * @param {?} target
 * @param {?} host
 * @param {?=} allowedPositions
 * @param {?=} boundariesElement
 * @param {?=} padding
 * @return {?}
 */
export function computeAutoPlacement(placement, refRect, target, host, allowedPositions, boundariesElement, padding) {
    if (allowedPositions === void 0) { allowedPositions = ['top', 'left', 'bottom', 'right']; }
    if (boundariesElement === void 0) { boundariesElement = 'viewport'; }
    if (padding === void 0) { padding = 0; }
    if (placement.indexOf('auto') === -1) {
        return placement;
    }
    /** @type {?} */
    var boundaries = getBoundaries(target, host, padding, boundariesElement);
    /** @type {?} */
    var rects = {
        top: {
            width: boundaries.width,
            height: refRect.top - boundaries.top
        },
        right: {
            width: boundaries.right - refRect.right,
            height: boundaries.height
        },
        bottom: {
            width: boundaries.width,
            height: boundaries.bottom - refRect.bottom
        },
        left: {
            width: refRect.left - boundaries.left,
            height: boundaries.height
        }
    };
    /** @type {?} */
    var sortedAreas = Object.keys(rects)
        .map((/**
     * @param {?} key
     * @return {?}
     */
    function (key) { return (tslib_1.__assign({ key: key }, rects[key], { area: getArea(rects[key]) })); }))
        .sort((/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) { return b.area - a.area; }));
    /** @type {?} */
    var filteredAreas = sortedAreas.filter((/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var width = _a.width, height = _a.height;
        return width >= target.clientWidth && height >= target.clientHeight;
    }));
    filteredAreas = allowedPositions
        .reduce((/**
     * @param {?} obj
     * @param {?} key
     * @return {?}
     */
    function (obj, key) {
        var _a;
        return tslib_1.__assign({}, obj, (_a = {}, _a[key] = filteredAreas[key], _a));
    }), {});
    /** @type {?} */
    var computedPlacement = filteredAreas.length > 0
        ? filteredAreas[0].key
        : sortedAreas[0].key;
    /** @type {?} */
    var variation = placement.split(' ')[1];
    target.className = target.className.replace(/auto/g, computedPlacement);
    return computedPlacement + (variation ? "-" + variation : '');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcHV0ZUF1dG9QbGFjZW1lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL3Bvc2l0aW9uaW5nL3V0aWxzL2NvbXB1dGVBdXRvUGxhY2VtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUlBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7QUFFaEQsU0FBUyxPQUFPLENBQUMsRUFBNEM7UUFBMUMsZ0JBQUssRUFBRSxrQkFBTTtJQUM5QixPQUFPLEtBQUssR0FBRyxNQUFNLENBQUM7QUFDeEIsQ0FBQzs7Ozs7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLFNBQWlCLEVBQ2pCLE9BQVksRUFDWixNQUFtQixFQUNuQixJQUFpQixFQUNqQixnQkFBNEQsRUFDNUQsaUJBQThCLEVBQzlCLE9BQVc7SUFGWCxpQ0FBQSxFQUFBLG9CQUEyQixLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7SUFDNUQsa0NBQUEsRUFBQSw4QkFBOEI7SUFDOUIsd0JBQUEsRUFBQSxXQUFXO0lBRVgsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ3BDLE9BQU8sU0FBUyxDQUFDO0tBQ2xCOztRQUVLLFVBQVUsR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsaUJBQWlCLENBQUM7O1FBRXBFLEtBQUssR0FBUTtRQUNqQixHQUFHLEVBQUU7WUFDSCxLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUs7WUFDdkIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUc7U0FDckM7UUFDRCxLQUFLLEVBQUU7WUFDTCxLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSztZQUN2QyxNQUFNLEVBQUUsVUFBVSxDQUFDLE1BQU07U0FDMUI7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUs7WUFDdkIsTUFBTSxFQUFFLFVBQVUsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU07U0FDM0M7UUFDRCxJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUUsT0FBTyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSTtZQUNyQyxNQUFNLEVBQUUsVUFBVSxDQUFDLE1BQU07U0FDMUI7S0FDRjs7UUFFSyxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbkMsR0FBRzs7OztJQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsb0JBQ1YsR0FBRyxLQUFBLElBQ0EsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUNiLElBQUksRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQ3pCLEVBSlUsQ0FJVixFQUFDO1NBQ0YsSUFBSTs7Ozs7SUFBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQWYsQ0FBZSxFQUFDOztRQUU5QixhQUFhLEdBQVUsV0FBVyxDQUFDLE1BQU07Ozs7SUFDM0MsVUFBQyxFQUFpQjtZQUFmLGdCQUFLLEVBQUUsa0JBQU07UUFDZCxPQUFBLEtBQUssSUFBSSxNQUFNLENBQUMsV0FBVyxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsWUFBWTtJQUE1RCxDQUE0RCxFQUMvRDtJQUVELGFBQWEsR0FBRyxnQkFBZ0I7U0FDN0IsTUFBTTs7Ozs7SUFBQyxVQUFDLEdBQUcsRUFBRSxHQUFHOztRQUNmLDRCQUFZLEdBQUcsZUFBRyxHQUFHLElBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFHO0lBQy9DLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQzs7UUFFSCxpQkFBaUIsR0FBVyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUM7UUFDeEQsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHO1FBQ3RCLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRzs7UUFFaEIsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXpDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFFeEUsT0FBTyxpQkFBaUIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBSSxTQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2hFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFV0aWxpdHkgdXNlZCB0byB0cmFuc2Zvcm0gdGhlIGBhdXRvYCBwbGFjZW1lbnQgdG8gdGhlIHBsYWNlbWVudCB3aXRoIG1vcmVcbiAqIGF2YWlsYWJsZSBzcGFjZS5cbiAqL1xuaW1wb3J0IHsgZ2V0Qm91bmRhcmllcyB9IGZyb20gJy4vZ2V0Qm91bmRhcmllcyc7XG5cbmZ1bmN0aW9uIGdldEFyZWEoeyB3aWR0aCwgaGVpZ2h0IH06IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0pIHtcbiAgcmV0dXJuIHdpZHRoICogaGVpZ2h0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQoXG4gIHBsYWNlbWVudDogc3RyaW5nLFxuICByZWZSZWN0OiBhbnksXG4gIHRhcmdldDogSFRNTEVsZW1lbnQsXG4gIGhvc3Q6IEhUTUxFbGVtZW50LFxuICBhbGxvd2VkUG9zaXRpb25zOiBhbnlbXSA9IFsndG9wJywgJ2xlZnQnLCAnYm90dG9tJywgJ3JpZ2h0J10sXG4gIGJvdW5kYXJpZXNFbGVtZW50ID0gJ3ZpZXdwb3J0JyxcbiAgcGFkZGluZyA9IDBcbikge1xuICBpZiAocGxhY2VtZW50LmluZGV4T2YoJ2F1dG8nKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gcGxhY2VtZW50O1xuICB9XG5cbiAgY29uc3QgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXModGFyZ2V0LCBob3N0LCBwYWRkaW5nLCBib3VuZGFyaWVzRWxlbWVudCk7XG5cbiAgY29uc3QgcmVjdHM6IGFueSA9IHtcbiAgICB0b3A6IHtcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLndpZHRoLFxuICAgICAgaGVpZ2h0OiByZWZSZWN0LnRvcCAtIGJvdW5kYXJpZXMudG9wXG4gICAgfSxcbiAgICByaWdodDoge1xuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMucmlnaHQgLSByZWZSZWN0LnJpZ2h0LFxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmhlaWdodFxuICAgIH0sXG4gICAgYm90dG9tOiB7XG4gICAgICB3aWR0aDogYm91bmRhcmllcy53aWR0aCxcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5ib3R0b20gLSByZWZSZWN0LmJvdHRvbVxuICAgIH0sXG4gICAgbGVmdDoge1xuICAgICAgd2lkdGg6IHJlZlJlY3QubGVmdCAtIGJvdW5kYXJpZXMubGVmdCxcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5oZWlnaHRcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc29ydGVkQXJlYXMgPSBPYmplY3Qua2V5cyhyZWN0cylcbiAgICAubWFwKGtleSA9PiAoe1xuICAgICAga2V5LFxuICAgICAgLi4ucmVjdHNba2V5XSxcbiAgICAgIGFyZWE6IGdldEFyZWEocmVjdHNba2V5XSlcbiAgICB9KSlcbiAgICAuc29ydCgoYSwgYikgPT4gYi5hcmVhIC0gYS5hcmVhKTtcblxuICBsZXQgZmlsdGVyZWRBcmVhczogYW55W10gPSBzb3J0ZWRBcmVhcy5maWx0ZXIoXG4gICAgKHsgd2lkdGgsIGhlaWdodCB9KSA9PlxuICAgICAgd2lkdGggPj0gdGFyZ2V0LmNsaWVudFdpZHRoICYmIGhlaWdodCA+PSB0YXJnZXQuY2xpZW50SGVpZ2h0XG4gICk7XG5cbiAgZmlsdGVyZWRBcmVhcyA9IGFsbG93ZWRQb3NpdGlvbnNcbiAgICAucmVkdWNlKChvYmosIGtleSkgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4ub2JqLCBba2V5XTogZmlsdGVyZWRBcmVhc1trZXldIH07XG4gICAgfSwge30pO1xuXG4gIGNvbnN0IGNvbXB1dGVkUGxhY2VtZW50OiBzdHJpbmcgPSBmaWx0ZXJlZEFyZWFzLmxlbmd0aCA+IDBcbiAgICA/IGZpbHRlcmVkQXJlYXNbMF0ua2V5XG4gICAgOiBzb3J0ZWRBcmVhc1swXS5rZXk7XG5cbiAgY29uc3QgdmFyaWF0aW9uID0gcGxhY2VtZW50LnNwbGl0KCcgJylbMV07XG5cbiAgdGFyZ2V0LmNsYXNzTmFtZSA9IHRhcmdldC5jbGFzc05hbWUucmVwbGFjZSgvYXV0by9nLCBjb21wdXRlZFBsYWNlbWVudCk7XG5cbiAgcmV0dXJuIGNvbXB1dGVkUGxhY2VtZW50ICsgKHZhcmlhdGlvbiA/IGAtJHt2YXJpYXRpb259YCA6ICcnKTtcbn1cbiJdfQ==