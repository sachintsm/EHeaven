/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { computeAutoPlacement, getBoundaries, getClientRect, getOppositeVariation, getTargetOffsets, isModifierEnabled } from '../utils/index';
/**
 * @param {?} data
 * @return {?}
 */
export function flip(data) {
    data.offsets.target = getClientRect(data.offsets.target);
    if (!isModifierEnabled(data.options, 'flip')) {
        data.offsets.target = Object.assign({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        return data;
    }
    /** @type {?} */
    const boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
    'viewport', false // positionFixed
    );
    /** @type {?} */
    let placement = data.placement.split(' ')[0];
    /** @type {?} */
    let variation = data.placement.split(' ')[1] || '';
    /** @type {?} */
    const offsetsHost = data.offsets.host;
    /** @type {?} */
    const target = data.instance.target;
    /** @type {?} */
    const host = data.instance.host;
    /** @type {?} */
    const adaptivePosition = variation
        ? computeAutoPlacement('auto', offsetsHost, target, host, ['top', 'bottom'])
        : computeAutoPlacement('auto', offsetsHost, target, host);
    /** @type {?} */
    const flipOrder = [placement, adaptivePosition];
    /* tslint:disable-next-line: cyclomatic-complexity */
    flipOrder.forEach((/**
     * @param {?} step
     * @param {?} index
     * @return {?}
     */
    (step, index) => {
        if (placement !== step || flipOrder.length === index + 1) {
            return data;
        }
        placement = data.placement.split(' ')[0];
        // using floor because the host offsets may contain decimals we are not going to consider here
        /** @type {?} */
        const overlapsRef = (placement === 'left' &&
            Math.floor(data.offsets.target.right) > Math.floor(data.offsets.host.left)) ||
            (placement === 'right' &&
                Math.floor(data.offsets.target.left) < Math.floor(data.offsets.host.right)) ||
            (placement === 'top' &&
                Math.floor(data.offsets.target.bottom) > Math.floor(data.offsets.host.top)) ||
            (placement === 'bottom' &&
                Math.floor(data.offsets.target.top) < Math.floor(data.offsets.host.bottom));
        /** @type {?} */
        const overflowsLeft = Math.floor(data.offsets.target.left) < Math.floor(boundaries.left);
        /** @type {?} */
        const overflowsRight = Math.floor(data.offsets.target.right) > Math.floor(boundaries.right);
        /** @type {?} */
        const overflowsTop = Math.floor(data.offsets.target.top) < Math.floor(boundaries.top);
        /** @type {?} */
        const overflowsBottom = Math.floor(data.offsets.target.bottom) > Math.floor(boundaries.bottom);
        /** @type {?} */
        const overflowsBoundaries = (placement === 'left' && overflowsLeft) ||
            (placement === 'right' && overflowsRight) ||
            (placement === 'top' && overflowsTop) ||
            (placement === 'bottom' && overflowsBottom);
        // flip the variation if required
        /** @type {?} */
        const isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
        /** @type {?} */
        const flippedVariation = ((isVertical && variation === 'left' && overflowsLeft) ||
            (isVertical && variation === 'right' && overflowsRight) ||
            (!isVertical && variation === 'left' && overflowsTop) ||
            (!isVertical && variation === 'right' && overflowsBottom));
        if (overlapsRef || overflowsBoundaries || flippedVariation) {
            if (overlapsRef || overflowsBoundaries) {
                placement = flipOrder[index + 1];
            }
            if (flippedVariation) {
                variation = getOppositeVariation(variation);
            }
            data.placement = placement + (variation ? ` ${variation}` : '');
            data.offsets.target = Object.assign({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        }
    }));
    return data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYm9vdHN0cmFwLW1kLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdXRpbHMvcG9zaXRpb25pbmcvbW9kaWZpZXJzL2ZsaXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsYUFBYSxFQUNiLGFBQWEsRUFDYixvQkFBb0IsRUFDcEIsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNsQixNQUFNLGdCQUFnQixDQUFDOzs7OztBQUl4QixNQUFNLFVBQVUsSUFBSSxDQUFDLElBQVU7SUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFekQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFFNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLHFCQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUNuQixnQkFBZ0IsQ0FDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUNqQixJQUFJLENBQUMsU0FBUyxDQUNmLENBQ0YsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDO0tBQ2I7O1VBRUssVUFBVSxHQUFHLGFBQWEsQ0FDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUNsQixDQUFDLEVBQUUsVUFBVTtJQUNiLFVBQVUsRUFDVixLQUFLLENBQUMsZ0JBQWdCO0tBQ3ZCOztRQUVHLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O1FBQ3hDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFOztVQUU1QyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJOztVQUMvQixNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNOztVQUM3QixJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJOztVQUV6QixnQkFBZ0IsR0FBRyxTQUFTO1FBQ2hDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDNUUsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQzs7VUFFckQsU0FBUyxHQUFHLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDO0lBRS9DLHFEQUFxRDtJQUNyRCxTQUFTLENBQUMsT0FBTzs7Ozs7SUFBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNoQyxJQUFJLFNBQVMsS0FBSyxJQUFJLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ3hELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7OztjQUduQyxXQUFXLEdBQ2YsQ0FBQyxTQUFTLEtBQUssTUFBTTtZQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0UsQ0FBQyxTQUFTLEtBQUssT0FBTztnQkFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdFLENBQUMsU0FBUyxLQUFLLEtBQUs7Z0JBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3RSxDQUFDLFNBQVMsS0FBSyxRQUFRO2dCQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7O2NBRXpFLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQzs7Y0FDbEYsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDOztjQUNyRixZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7O2NBQy9FLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQzs7Y0FFeEYsbUJBQW1CLEdBQ3ZCLENBQUMsU0FBUyxLQUFLLE1BQU0sSUFBSSxhQUFhLENBQUM7WUFDdkMsQ0FBQyxTQUFTLEtBQUssT0FBTyxJQUFJLGNBQWMsQ0FBQztZQUN6QyxDQUFDLFNBQVMsS0FBSyxLQUFLLElBQUksWUFBWSxDQUFDO1lBQ3JDLENBQUMsU0FBUyxLQUFLLFFBQVEsSUFBSSxlQUFlLENBQUM7OztjQUd2QyxVQUFVLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Y0FDeEQsZ0JBQWdCLEdBQ3BCLENBQUMsQ0FBQyxVQUFVLElBQUksU0FBUyxLQUFLLE1BQU0sSUFBSSxhQUFhLENBQUM7WUFDcEQsQ0FBQyxVQUFVLElBQUksU0FBUyxLQUFLLE9BQU8sSUFBSSxjQUFjLENBQUM7WUFDdkQsQ0FBQyxDQUFDLFVBQVUsSUFBSSxTQUFTLEtBQUssTUFBTSxJQUFJLFlBQVksQ0FBQztZQUNyRCxDQUFDLENBQUMsVUFBVSxJQUFJLFNBQVMsS0FBSyxPQUFPLElBQUksZUFBZSxDQUFDLENBQUM7UUFFOUQsSUFBSSxXQUFXLElBQUksbUJBQW1CLElBQUksZ0JBQWdCLEVBQUU7WUFDMUQsSUFBSSxXQUFXLElBQUksbUJBQW1CLEVBQUU7Z0JBQ3RDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ2xDO1lBRUQsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDcEIsU0FBUyxHQUFHLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzdDO1lBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRWhFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxxQkFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFDbkIsZ0JBQWdCLENBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FDZixDQUNGLENBQUM7U0FDSDtJQUNILENBQUMsRUFBQyxDQUFDO0lBRUgsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY29tcHV0ZUF1dG9QbGFjZW1lbnQsXG4gIGdldEJvdW5kYXJpZXMsXG4gIGdldENsaWVudFJlY3QsXG4gIGdldE9wcG9zaXRlVmFyaWF0aW9uLFxuICBnZXRUYXJnZXRPZmZzZXRzLFxuICBpc01vZGlmaWVyRW5hYmxlZFxufSBmcm9tICcuLi91dGlscy9pbmRleCc7XG5cbmltcG9ydCB7IERhdGEgfSBmcm9tICcuLi9tb2RlbHMvaW5kZXgnO1xuXG5leHBvcnQgZnVuY3Rpb24gZmxpcChkYXRhOiBEYXRhKTogRGF0YSB7XG4gIGRhdGEub2Zmc2V0cy50YXJnZXQgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy50YXJnZXQpO1xuXG4gIGlmICghaXNNb2RpZmllckVuYWJsZWQoZGF0YS5vcHRpb25zLCAnZmxpcCcpKSB7XG5cbiAgICBkYXRhLm9mZnNldHMudGFyZ2V0ID0ge1xuICAgICAgLi4uZGF0YS5vZmZzZXRzLnRhcmdldCxcbiAgICAgIC4uLmdldFRhcmdldE9mZnNldHMoXG4gICAgICAgIGRhdGEuaW5zdGFuY2UudGFyZ2V0LFxuICAgICAgICBkYXRhLm9mZnNldHMuaG9zdCxcbiAgICAgICAgZGF0YS5wbGFjZW1lbnRcbiAgICAgIClcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBjb25zdCBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhcbiAgICBkYXRhLmluc3RhbmNlLnRhcmdldCxcbiAgICBkYXRhLmluc3RhbmNlLmhvc3QsXG4gICAgMCwgLy8gcGFkZGluZ1xuICAgICd2aWV3cG9ydCcsXG4gICAgZmFsc2UgLy8gcG9zaXRpb25GaXhlZFxuICApO1xuXG4gIGxldCBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnICcpWzBdO1xuICBsZXQgdmFyaWF0aW9uID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJyAnKVsxXSB8fCAnJztcblxuICBjb25zdCBvZmZzZXRzSG9zdCA9IGRhdGEub2Zmc2V0cy5ob3N0O1xuICBjb25zdCB0YXJnZXQgPSBkYXRhLmluc3RhbmNlLnRhcmdldDtcbiAgY29uc3QgaG9zdCA9IGRhdGEuaW5zdGFuY2UuaG9zdDtcblxuICBjb25zdCBhZGFwdGl2ZVBvc2l0aW9uID0gdmFyaWF0aW9uXG4gICAgPyBjb21wdXRlQXV0b1BsYWNlbWVudCgnYXV0bycsIG9mZnNldHNIb3N0LCB0YXJnZXQsIGhvc3QsIFsndG9wJywgJ2JvdHRvbSddKVxuICAgIDogY29tcHV0ZUF1dG9QbGFjZW1lbnQoJ2F1dG8nLCBvZmZzZXRzSG9zdCwgdGFyZ2V0LCBob3N0KTtcblxuICBjb25zdCBmbGlwT3JkZXIgPSBbcGxhY2VtZW50LCBhZGFwdGl2ZVBvc2l0aW9uXTtcblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGN5Y2xvbWF0aWMtY29tcGxleGl0eSAqL1xuICBmbGlwT3JkZXIuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcbiAgICBpZiAocGxhY2VtZW50ICE9PSBzdGVwIHx8IGZsaXBPcmRlci5sZW5ndGggPT09IGluZGV4ICsgMSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJyAnKVswXTtcblxuICAgIC8vIHVzaW5nIGZsb29yIGJlY2F1c2UgdGhlIGhvc3Qgb2Zmc2V0cyBtYXkgY29udGFpbiBkZWNpbWFscyB3ZSBhcmUgbm90IGdvaW5nIHRvIGNvbnNpZGVyIGhlcmVcbiAgICBjb25zdCBvdmVybGFwc1JlZiA9XG4gICAgICAocGxhY2VtZW50ID09PSAnbGVmdCcgJiZcbiAgICAgICAgTWF0aC5mbG9vcihkYXRhLm9mZnNldHMudGFyZ2V0LnJpZ2h0KSA+IE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLmhvc3QubGVmdCkpIHx8XG4gICAgICAocGxhY2VtZW50ID09PSAncmlnaHQnICYmXG4gICAgICAgIE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLnRhcmdldC5sZWZ0KSA8IE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLmhvc3QucmlnaHQpKSB8fFxuICAgICAgKHBsYWNlbWVudCA9PT0gJ3RvcCcgJiZcbiAgICAgICAgTWF0aC5mbG9vcihkYXRhLm9mZnNldHMudGFyZ2V0LmJvdHRvbSkgPiBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy5ob3N0LnRvcCkpIHx8XG4gICAgICAocGxhY2VtZW50ID09PSAnYm90dG9tJyAmJlxuICAgICAgICBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy50YXJnZXQudG9wKSA8IE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLmhvc3QuYm90dG9tKSk7XG5cbiAgICBjb25zdCBvdmVyZmxvd3NMZWZ0ID0gTWF0aC5mbG9vcihkYXRhLm9mZnNldHMudGFyZ2V0LmxlZnQpIDwgTWF0aC5mbG9vcihib3VuZGFyaWVzLmxlZnQpO1xuICAgIGNvbnN0IG92ZXJmbG93c1JpZ2h0ID0gTWF0aC5mbG9vcihkYXRhLm9mZnNldHMudGFyZ2V0LnJpZ2h0KSA+IE1hdGguZmxvb3IoYm91bmRhcmllcy5yaWdodCk7XG4gICAgY29uc3Qgb3ZlcmZsb3dzVG9wID0gTWF0aC5mbG9vcihkYXRhLm9mZnNldHMudGFyZ2V0LnRvcCkgPCBNYXRoLmZsb29yKGJvdW5kYXJpZXMudG9wKTtcbiAgICBjb25zdCBvdmVyZmxvd3NCb3R0b20gPSBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy50YXJnZXQuYm90dG9tKSA+IE1hdGguZmxvb3IoYm91bmRhcmllcy5ib3R0b20pO1xuXG4gICAgY29uc3Qgb3ZlcmZsb3dzQm91bmRhcmllcyA9XG4gICAgICAocGxhY2VtZW50ID09PSAnbGVmdCcgJiYgb3ZlcmZsb3dzTGVmdCkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICdyaWdodCcgJiYgb3ZlcmZsb3dzUmlnaHQpIHx8XG4gICAgICAocGxhY2VtZW50ID09PSAndG9wJyAmJiBvdmVyZmxvd3NUb3ApIHx8XG4gICAgICAocGxhY2VtZW50ID09PSAnYm90dG9tJyAmJiBvdmVyZmxvd3NCb3R0b20pO1xuXG4gICAgLy8gZmxpcCB0aGUgdmFyaWF0aW9uIGlmIHJlcXVpcmVkXG4gICAgY29uc3QgaXNWZXJ0aWNhbCA9IFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG4gICAgY29uc3QgZmxpcHBlZFZhcmlhdGlvbiA9XG4gICAgICAoKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnbGVmdCcgJiYgb3ZlcmZsb3dzTGVmdCkgfHxcbiAgICAgICAgKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAncmlnaHQnICYmIG92ZXJmbG93c1JpZ2h0KSB8fFxuICAgICAgICAoIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnbGVmdCcgJiYgb3ZlcmZsb3dzVG9wKSB8fFxuICAgICAgICAoIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAncmlnaHQnICYmIG92ZXJmbG93c0JvdHRvbSkpO1xuXG4gICAgaWYgKG92ZXJsYXBzUmVmIHx8IG92ZXJmbG93c0JvdW5kYXJpZXMgfHwgZmxpcHBlZFZhcmlhdGlvbikge1xuICAgICAgaWYgKG92ZXJsYXBzUmVmIHx8IG92ZXJmbG93c0JvdW5kYXJpZXMpIHtcbiAgICAgICAgcGxhY2VtZW50ID0gZmxpcE9yZGVyW2luZGV4ICsgMV07XG4gICAgICB9XG5cbiAgICAgIGlmIChmbGlwcGVkVmFyaWF0aW9uKSB7XG4gICAgICAgIHZhcmlhdGlvbiA9IGdldE9wcG9zaXRlVmFyaWF0aW9uKHZhcmlhdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGRhdGEucGxhY2VtZW50ID0gcGxhY2VtZW50ICsgKHZhcmlhdGlvbiA/IGAgJHt2YXJpYXRpb259YCA6ICcnKTtcblxuICAgICAgZGF0YS5vZmZzZXRzLnRhcmdldCA9IHtcbiAgICAgICAgLi4uZGF0YS5vZmZzZXRzLnRhcmdldCxcbiAgICAgICAgLi4uZ2V0VGFyZ2V0T2Zmc2V0cyhcbiAgICAgICAgICBkYXRhLmluc3RhbmNlLnRhcmdldCxcbiAgICAgICAgICBkYXRhLm9mZnNldHMuaG9zdCxcbiAgICAgICAgICBkYXRhLnBsYWNlbWVudFxuICAgICAgICApXG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iXX0=