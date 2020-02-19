/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @param {?} data
 * @return {?}
 */
export function shift(data) {
    var _a, _b;
    /** @type {?} */
    var placement = data.placement;
    /** @type {?} */
    var basePlacement = placement.split(' ')[0];
    /** @type {?} */
    var shiftvariation = placement.split(' ')[1];
    if (shiftvariation) {
        var _c = data.offsets, host = _c.host, target = _c.target;
        /** @type {?} */
        var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
        /** @type {?} */
        var side = isVertical ? 'left' : 'top';
        /** @type {?} */
        var measurement = isVertical ? 'width' : 'height';
        /** @type {?} */
        var shiftOffsets = {
            left: (_a = {}, _a[side] = host[side], _a),
            right: (_b = {},
                _b[side] = host[side] + host[measurement] - host[measurement],
                _b)
        };
        data.offsets.target = tslib_1.__assign({}, target, ((/** @type {?} */ (shiftOffsets)))[shiftvariation]);
    }
    return data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpZnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL3Bvc2l0aW9uaW5nL21vZGlmaWVycy9zaGlmdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQSxNQUFNLFVBQVUsS0FBSyxDQUFDLElBQVU7OztRQUN4QixTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVM7O1FBQzFCLGFBQWEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFDdkMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTlDLElBQUksY0FBYyxFQUFFO1FBQ1osSUFBQSxpQkFBK0IsRUFBN0IsY0FBSSxFQUFFLGtCQUF1Qjs7WUFDL0IsVUFBVSxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7O1lBQzVELElBQUksR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSzs7WUFDbEMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFROztZQUU3QyxZQUFZLEdBQUc7WUFDbkIsSUFBSSxZQUFJLEdBQUMsSUFBSSxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBRTtZQUM1QixLQUFLO2dCQUNILEdBQUMsSUFBSSxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzttQkFDM0Q7U0FDRjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSx3QkFBUSxNQUFNLEVBQUssQ0FBQyxtQkFBQSxZQUFZLEVBQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFFLENBQUM7S0FDL0U7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vbW9kZWxzL2luZGV4JztcblxuZXhwb3J0IGZ1bmN0aW9uIHNoaWZ0KGRhdGE6IERhdGEpOiBEYXRhIHtcbiAgY29uc3QgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG4gIGNvbnN0IGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJyAnKVswXTtcbiAgY29uc3Qgc2hpZnR2YXJpYXRpb24gPSBwbGFjZW1lbnQuc3BsaXQoJyAnKVsxXTtcblxuICBpZiAoc2hpZnR2YXJpYXRpb24pIHtcbiAgICBjb25zdCB7IGhvc3QsIHRhcmdldCB9ID0gZGF0YS5vZmZzZXRzO1xuICAgIGNvbnN0IGlzVmVydGljYWwgPSBbJ2JvdHRvbScsICd0b3AnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcbiAgICBjb25zdCBzaWRlID0gaXNWZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnO1xuICAgIGNvbnN0IG1lYXN1cmVtZW50ID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcblxuICAgIGNvbnN0IHNoaWZ0T2Zmc2V0cyA9IHtcbiAgICAgIGxlZnQ6IHsgW3NpZGVdOiBob3N0W3NpZGVdIH0sXG4gICAgICByaWdodDoge1xuICAgICAgICBbc2lkZV06IGhvc3Rbc2lkZV0gKyBob3N0W21lYXN1cmVtZW50XSAtIGhvc3RbbWVhc3VyZW1lbnRdXG4gICAgICB9XG4gICAgfTtcblxuICAgIGRhdGEub2Zmc2V0cy50YXJnZXQgPSB7IC4uLnRhcmdldCwgLi4uKHNoaWZ0T2Zmc2V0cyBhcyBhbnkpW3NoaWZ0dmFyaWF0aW9uXSB9O1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iXX0=