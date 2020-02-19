/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getReferenceOffsets, setAllStyles } from './utils/index';
import { arrow, flip, preventOverflow, shift, initData } from './modifiers/index';
export class Positioning {
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @return {?}
     */
    position(hostElement, targetElement) {
        return this.offset(hostElement, targetElement);
    }
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @return {?}
     */
    offset(hostElement, targetElement) {
        return getReferenceOffsets(targetElement, hostElement);
    }
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} position
     * @param {?=} _appendToBody
     * @param {?=} options
     * @return {?}
     */
    positionElements(hostElement, targetElement, position, _appendToBody, options) {
        /** @type {?} */
        const chainOfModifiers = [flip, shift, preventOverflow, arrow];
        return chainOfModifiers.reduce((/**
         * @param {?} modifiedData
         * @param {?} modifier
         * @return {?}
         */
        (modifiedData, modifier) => modifier(modifiedData)), initData(targetElement, hostElement, position, options));
    }
}
/** @type {?} */
const positionService = new Positioning();
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
    const data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
    setAllStyles(data, renderer);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcG9zaXRpb25pbmcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL3Bvc2l0aW9uaW5nL25nLXBvc2l0aW9uaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFNQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFJbEYsTUFBTSxPQUFPLFdBQVc7Ozs7OztJQUN0QixRQUFRLENBQUMsV0FBd0IsRUFBRSxhQUEwQjtRQUMzRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxXQUF3QixFQUFFLGFBQTBCO1FBQ3pELE9BQU8sbUJBQW1CLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7Ozs7OztJQUVELGdCQUFnQixDQUNkLFdBQXdCLEVBQ3hCLGFBQTBCLEVBQzFCLFFBQWdCLEVBQ2hCLGFBQXVCLEVBQ3ZCLE9BQWE7O2NBRVAsZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxLQUFLLENBQUM7UUFFOUQsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNOzs7OztRQUM1QixDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FDbEQsUUFBUSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUN4RCxDQUFDO0lBQ0osQ0FBQztDQUNGOztNQUVLLGVBQWUsR0FBRyxJQUFJLFdBQVcsRUFBRTs7Ozs7Ozs7OztBQUV6QyxNQUFNLFVBQVUsZ0JBQWdCLENBQzlCLFdBQXdCLEVBQ3hCLGFBQTBCLEVBQzFCLFNBQWlCLEVBQ2pCLFlBQXNCLEVBQ3RCLE9BQWlCLEVBQ2pCLFFBQW9COztVQUdkLElBQUksR0FBRyxlQUFlLENBQUMsZ0JBQWdCLENBQzNDLFdBQVcsRUFDWCxhQUFhLEVBQ2IsU0FBUyxFQUNULFlBQVksRUFDWixPQUFPLENBQ1I7SUFFRCxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQy9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBjb3B5cmlnaHQgVmFsb3IgU29mdHdhcmVcbiAqIEBjb3B5cmlnaHQgRmVkZXJpY28gWml2b2xvIGFuZCBjb250cmlidXRvcnNcbiAqL1xuaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGdldFJlZmVyZW5jZU9mZnNldHMsIHNldEFsbFN0eWxlcyB9IGZyb20gJy4vdXRpbHMvaW5kZXgnO1xuXG5pbXBvcnQgeyBhcnJvdywgZmxpcCwgcHJldmVudE92ZXJmbG93LCBzaGlmdCwgaW5pdERhdGEgfSBmcm9tICcuL21vZGlmaWVycy9pbmRleCc7XG5pbXBvcnQgeyBEYXRhLCBPZmZzZXRzLCBPcHRpb25zIH0gZnJvbSAnLi9tb2RlbHMvaW5kZXgnO1xuXG5cbmV4cG9ydCBjbGFzcyBQb3NpdGlvbmluZyB7XG4gIHBvc2l0aW9uKGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudCwgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQpOiBPZmZzZXRzIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXQoaG9zdEVsZW1lbnQsIHRhcmdldEVsZW1lbnQpO1xuICB9XG5cbiAgb2Zmc2V0KGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudCwgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQpOiBPZmZzZXRzIHtcbiAgICByZXR1cm4gZ2V0UmVmZXJlbmNlT2Zmc2V0cyh0YXJnZXRFbGVtZW50LCBob3N0RWxlbWVudCk7XG4gIH1cblxuICBwb3NpdGlvbkVsZW1lbnRzKFxuICAgIGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBwb3NpdGlvbjogc3RyaW5nLFxuICAgIF9hcHBlbmRUb0JvZHk/OiBib29sZWFuLFxuICAgIG9wdGlvbnM/OiBhbnlcbiAgKTogRGF0YSB7XG4gICAgY29uc3QgY2hhaW5PZk1vZGlmaWVycyA9IFtmbGlwLCBzaGlmdCwgcHJldmVudE92ZXJmbG93LCBhcnJvd107XG5cbiAgICByZXR1cm4gY2hhaW5PZk1vZGlmaWVycy5yZWR1Y2UoXG4gICAgICAobW9kaWZpZWREYXRhLCBtb2RpZmllcikgPT4gbW9kaWZpZXIobW9kaWZpZWREYXRhKSxcbiAgICAgIGluaXREYXRhKHRhcmdldEVsZW1lbnQsIGhvc3RFbGVtZW50LCBwb3NpdGlvbiwgb3B0aW9ucylcbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHBvc2l0aW9uU2VydmljZSA9IG5ldyBQb3NpdGlvbmluZygpO1xuXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25FbGVtZW50cyhcbiAgaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgcGxhY2VtZW50OiBzdHJpbmcsXG4gIGFwcGVuZFRvQm9keT86IGJvb2xlYW4sXG4gIG9wdGlvbnM/OiBPcHRpb25zLFxuICByZW5kZXJlcj86IFJlbmRlcmVyMlxuKTogdm9pZCB7XG5cbiAgY29uc3QgZGF0YSA9IHBvc2l0aW9uU2VydmljZS5wb3NpdGlvbkVsZW1lbnRzKFxuICAgIGhvc3RFbGVtZW50LFxuICAgIHRhcmdldEVsZW1lbnQsXG4gICAgcGxhY2VtZW50LFxuICAgIGFwcGVuZFRvQm9keSxcbiAgICBvcHRpb25zXG4gICk7XG5cbiAgc2V0QWxsU3R5bGVzKGRhdGEsIHJlbmRlcmVyKTtcbn1cbiJdfQ==