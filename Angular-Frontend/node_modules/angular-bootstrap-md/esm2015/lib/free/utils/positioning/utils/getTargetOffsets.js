/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Get offsets to the target
 */
import { getOppositePlacement } from './getOppositePlacement';
import { getOuterSizes } from './getOuterSizes';
/**
 * @param {?} target
 * @param {?} hostOffsets
 * @param {?} position
 * @return {?}
 */
export function getTargetOffsets(target, hostOffsets, position) {
    /** @type {?} */
    const placement = position.split(' ')[0];
    // Get target node sizes
    /** @type {?} */
    const targetRect = getOuterSizes(target);
    // Add position, width and height to our offsets object
    /** @type {?} */
    const targetOffsets = {
        width: targetRect.width,
        height: targetRect.height
    };
    // depending by the target placement we have to compute its offsets slightly differently
    /** @type {?} */
    const isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    /** @type {?} */
    const mainSide = isHoriz ? 'top' : 'left';
    /** @type {?} */
    const secondarySide = isHoriz ? 'left' : 'top';
    /** @type {?} */
    const measurement = isHoriz ? 'height' : 'width';
    /** @type {?} */
    const secondaryMeasurement = !isHoriz ? 'height' : 'width';
    ((/** @type {?} */ (targetOffsets)))[mainSide] =
        hostOffsets[mainSide] +
            hostOffsets[measurement] / 2 -
            targetRect[measurement] / 2;
    ((/** @type {?} */ (targetOffsets)))[secondarySide] = placement === secondarySide
        ? hostOffsets[secondarySide] - targetRect[secondaryMeasurement]
        : ((/** @type {?} */ (hostOffsets)))[getOppositePlacement(secondarySide)];
    return targetOffsets;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0VGFyZ2V0T2Zmc2V0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYm9vdHN0cmFwLW1kLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdXRpbHMvcG9zaXRpb25pbmcvdXRpbHMvZ2V0VGFyZ2V0T2Zmc2V0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7O0FBR2hELE1BQU0sVUFBVSxnQkFBZ0IsQ0FDOUIsTUFBbUIsRUFDbkIsV0FBZ0IsRUFDaEIsUUFBZ0I7O1VBRVYsU0FBUyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7VUFHbEMsVUFBVSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUM7OztVQUdsQyxhQUFhLEdBQUc7UUFDcEIsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLO1FBQ3ZCLE1BQU0sRUFBRSxVQUFVLENBQUMsTUFBTTtLQUMxQjs7O1VBR0ssT0FBTyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7O1VBQ3JELFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTTs7VUFDbkMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLOztVQUN4QyxXQUFXLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU87O1VBQzFDLG9CQUFvQixHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU87SUFFMUQsQ0FBQyxtQkFBQSxhQUFhLEVBQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUM5QixXQUFXLENBQUMsUUFBUSxDQUFDO1lBQ3JCLFdBQVcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO1lBQzVCLFVBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFOUIsQ0FBQyxtQkFBQSxhQUFhLEVBQU8sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLFNBQVMsS0FBSyxhQUFhO1FBQ2pFLENBQUMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEdBQUcsVUFBVSxDQUFDLG9CQUFvQixDQUFDO1FBQy9ELENBQUMsQ0FBQyxDQUFDLG1CQUFBLFdBQVcsRUFBTyxDQUFDLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUU5RCxPQUFPLGFBQWEsQ0FBQztBQUN2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBHZXQgb2Zmc2V0cyB0byB0aGUgdGFyZ2V0XG4gKi9cbmltcG9ydCB7IGdldE9wcG9zaXRlUGxhY2VtZW50IH0gZnJvbSAnLi9nZXRPcHBvc2l0ZVBsYWNlbWVudCc7XG5pbXBvcnQgeyBnZXRPdXRlclNpemVzIH0gZnJvbSAnLi9nZXRPdXRlclNpemVzJztcbmltcG9ydCB7IE9mZnNldHMgfSBmcm9tICcuLi9tb2RlbHMvaW5kZXgnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFyZ2V0T2Zmc2V0cyhcbiAgdGFyZ2V0OiBIVE1MRWxlbWVudCxcbiAgaG9zdE9mZnNldHM6IGFueSxcbiAgcG9zaXRpb246IHN0cmluZ1xuKTogT2Zmc2V0cyB7XG4gIGNvbnN0IHBsYWNlbWVudCA9IHBvc2l0aW9uLnNwbGl0KCcgJylbMF07XG5cbiAgLy8gR2V0IHRhcmdldCBub2RlIHNpemVzXG4gIGNvbnN0IHRhcmdldFJlY3QgPSBnZXRPdXRlclNpemVzKHRhcmdldCk7XG5cbiAgLy8gQWRkIHBvc2l0aW9uLCB3aWR0aCBhbmQgaGVpZ2h0IHRvIG91ciBvZmZzZXRzIG9iamVjdFxuICBjb25zdCB0YXJnZXRPZmZzZXRzID0ge1xuICAgIHdpZHRoOiB0YXJnZXRSZWN0LndpZHRoLFxuICAgIGhlaWdodDogdGFyZ2V0UmVjdC5oZWlnaHRcbiAgfTtcblxuICAvLyBkZXBlbmRpbmcgYnkgdGhlIHRhcmdldCBwbGFjZW1lbnQgd2UgaGF2ZSB0byBjb21wdXRlIGl0cyBvZmZzZXRzIHNsaWdodGx5IGRpZmZlcmVudGx5XG4gIGNvbnN0IGlzSG9yaXogPSBbJ3JpZ2h0JywgJ2xlZnQnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuICBjb25zdCBtYWluU2lkZSA9IGlzSG9yaXogPyAndG9wJyA6ICdsZWZ0JztcbiAgY29uc3Qgc2Vjb25kYXJ5U2lkZSA9IGlzSG9yaXogPyAnbGVmdCcgOiAndG9wJztcbiAgY29uc3QgbWVhc3VyZW1lbnQgPSBpc0hvcml6ID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICBjb25zdCBzZWNvbmRhcnlNZWFzdXJlbWVudCA9ICFpc0hvcml6ID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICh0YXJnZXRPZmZzZXRzIGFzIGFueSlbbWFpblNpZGVdID1cbiAgICBob3N0T2Zmc2V0c1ttYWluU2lkZV0gK1xuICAgIGhvc3RPZmZzZXRzW21lYXN1cmVtZW50XSAvIDIgLVxuICAgIHRhcmdldFJlY3RbbWVhc3VyZW1lbnRdIC8gMjtcblxuICAodGFyZ2V0T2Zmc2V0cyBhcyBhbnkpW3NlY29uZGFyeVNpZGVdID0gcGxhY2VtZW50ID09PSBzZWNvbmRhcnlTaWRlXG4gICAgPyBob3N0T2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSAtIHRhcmdldFJlY3Rbc2Vjb25kYXJ5TWVhc3VyZW1lbnRdXG4gICAgOiAoaG9zdE9mZnNldHMgYXMgYW55KVtnZXRPcHBvc2l0ZVBsYWNlbWVudChzZWNvbmRhcnlTaWRlKV07XG5cbiAgcmV0dXJuIHRhcmdldE9mZnNldHM7XG59XG4iXX0=