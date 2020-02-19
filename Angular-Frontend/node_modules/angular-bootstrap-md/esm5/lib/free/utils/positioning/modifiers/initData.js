/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { computeAutoPlacement, getReferenceOffsets, getTargetOffsets } from '../utils/index';
/**
 * @param {?} targetElement
 * @param {?} hostElement
 * @param {?} position
 * @param {?} options
 * @return {?}
 */
export function initData(targetElement, hostElement, position, options) {
    /** @type {?} */
    var hostElPosition = getReferenceOffsets(targetElement, hostElement);
    /** @type {?} */
    var placementAuto = !!position.match(/auto/g);
    // support old placements 'auto left|right|top|bottom'
    /** @type {?} */
    var placement = !!position.match(/auto\s(left|right|top|bottom)/g)
        ? position.split(' ')[1] || ''
        : position;
    /** @type {?} */
    var targetOffset = getTargetOffsets(targetElement, hostElPosition, placement);
    placement = computeAutoPlacement(placement, hostElPosition, targetElement, hostElement);
    return {
        options: options,
        instance: {
            target: targetElement,
            host: hostElement,
            arrow: null
        },
        offsets: {
            target: targetOffset,
            host: hostElPosition,
            arrow: null
        },
        positionFixed: false,
        placement: placement,
        placementAuto: placementAuto
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdERhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL3Bvc2l0aW9uaW5nL21vZGlmaWVycy9pbml0RGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2pCLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7O0FBSXhCLE1BQU0sVUFBVSxRQUFRLENBQ3RCLGFBQTBCLEVBQUUsV0FBd0IsRUFBRSxRQUFnQixFQUFFLE9BQWdCOztRQUdsRixjQUFjLEdBQUcsbUJBQW1CLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQzs7UUFDaEUsYUFBYSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzs7O1FBRzNDLFNBQVMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQztRQUNoRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO1FBQzlCLENBQUMsQ0FBQyxRQUFROztRQUVOLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsY0FBYyxFQUFFLFNBQVMsQ0FBQztJQUMvRSxTQUFTLEdBQUcsb0JBQW9CLENBQUMsU0FBUyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFFeEYsT0FBTztRQUNMLE9BQU8sU0FBQTtRQUNQLFFBQVEsRUFBRTtZQUNSLE1BQU0sRUFBRSxhQUFhO1lBQ3JCLElBQUksRUFBRSxXQUFXO1lBQ2pCLEtBQUssRUFBRSxJQUFJO1NBQ1o7UUFDRCxPQUFPLEVBQUU7WUFDUCxNQUFNLEVBQUUsWUFBWTtZQUNwQixJQUFJLEVBQUUsY0FBYztZQUNwQixLQUFLLEVBQUUsSUFBSTtTQUNaO1FBQ0QsYUFBYSxFQUFFLEtBQUs7UUFDcEIsU0FBUyxXQUFBO1FBQ1QsYUFBYSxlQUFBO0tBQ2QsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjb21wdXRlQXV0b1BsYWNlbWVudCxcbiAgZ2V0UmVmZXJlbmNlT2Zmc2V0cyxcbiAgZ2V0VGFyZ2V0T2Zmc2V0c1xufSBmcm9tICcuLi91dGlscy9pbmRleCc7XG5cbmltcG9ydCB7IERhdGEsIE9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbHMvaW5kZXgnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdERhdGEoXG4gIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsIHBvc2l0aW9uOiBzdHJpbmcsIG9wdGlvbnM6IE9wdGlvbnNcbik6IERhdGEge1xuXG4gIGNvbnN0IGhvc3RFbFBvc2l0aW9uID0gZ2V0UmVmZXJlbmNlT2Zmc2V0cyh0YXJnZXRFbGVtZW50LCBob3N0RWxlbWVudCk7XG4gIGNvbnN0IHBsYWNlbWVudEF1dG8gPSAhIXBvc2l0aW9uLm1hdGNoKC9hdXRvL2cpO1xuXG4gIC8vIHN1cHBvcnQgb2xkIHBsYWNlbWVudHMgJ2F1dG8gbGVmdHxyaWdodHx0b3B8Ym90dG9tJ1xuICBsZXQgcGxhY2VtZW50ID0gISFwb3NpdGlvbi5tYXRjaCgvYXV0b1xccyhsZWZ0fHJpZ2h0fHRvcHxib3R0b20pL2cpXG4gICAgPyBwb3NpdGlvbi5zcGxpdCgnICcpWzFdIHx8ICcnXG4gICAgOiBwb3NpdGlvbjtcblxuICBjb25zdCB0YXJnZXRPZmZzZXQgPSBnZXRUYXJnZXRPZmZzZXRzKHRhcmdldEVsZW1lbnQsIGhvc3RFbFBvc2l0aW9uLCBwbGFjZW1lbnQpO1xuICBwbGFjZW1lbnQgPSBjb21wdXRlQXV0b1BsYWNlbWVudChwbGFjZW1lbnQsIGhvc3RFbFBvc2l0aW9uLCB0YXJnZXRFbGVtZW50LCBob3N0RWxlbWVudCk7XG5cbiAgcmV0dXJuIHtcbiAgICBvcHRpb25zLFxuICAgIGluc3RhbmNlOiB7XG4gICAgICB0YXJnZXQ6IHRhcmdldEVsZW1lbnQsXG4gICAgICBob3N0OiBob3N0RWxlbWVudCxcbiAgICAgIGFycm93OiBudWxsXG4gICAgfSxcbiAgICBvZmZzZXRzOiB7XG4gICAgICB0YXJnZXQ6IHRhcmdldE9mZnNldCxcbiAgICAgIGhvc3Q6IGhvc3RFbFBvc2l0aW9uLFxuICAgICAgYXJyb3c6IG51bGxcbiAgICB9LFxuICAgIHBvc2l0aW9uRml4ZWQ6IGZhbHNlLFxuICAgIHBsYWNlbWVudCxcbiAgICBwbGFjZW1lbnRBdXRvXG4gIH07XG59XG4iXX0=