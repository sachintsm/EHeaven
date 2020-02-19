/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getBoundaries, isModifierEnabled } from '../utils/index';
/**
 * @param {?} data
 * @return {?}
 */
export function preventOverflow(data) {
    if (!isModifierEnabled(data.options, 'preventOverflow')) {
        return data;
    }
    // NOTE: DOM access here
    // resets the targetOffsets's position so that the document size can be calculated excluding
    // the size of the targetOffsets element itself
    /** @type {?} */
    const transformProp = 'transform';
    /** @type {?} */
    const targetStyles = data.instance.target.style;
    // assignment to help minification
    const { top, left, [transformProp]: transform } = targetStyles;
    targetStyles.top = '';
    targetStyles.left = '';
    targetStyles[transformProp] = '';
    /** @type {?} */
    const boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
    'scrollParent', false // positionFixed
    );
    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    targetStyles.top = top;
    targetStyles.left = left;
    targetStyles[transformProp] = transform;
    /** @type {?} */
    const order = ['left', 'right', 'top', 'bottom'];
    /** @type {?} */
    const check = {
        /**
         * @param {?} placement
         * @return {?}
         */
        primary(placement) {
            /** @type {?} */
            let value = ((/** @type {?} */ (data))).offsets.target[placement];
            if (((/** @type {?} */ (data))).offsets.target[placement] < boundaries[placement] &&
                !false // options.escapeWithReference
            ) {
                value = Math.max(((/** @type {?} */ (data))).offsets.target[placement], boundaries[placement]);
            }
            return { [placement]: value };
        },
        /**
         * @param {?} placement
         * @return {?}
         */
        secondary(placement) {
            /** @type {?} */
            const mainSide = placement === 'right' ? 'left' : 'top';
            /** @type {?} */
            let value = data.offsets.target[mainSide];
            if (((/** @type {?} */ (data))).offsets.target[placement] > boundaries[placement] &&
                !false // escapeWithReference
            ) {
                value = Math.min(data.offsets.target[mainSide], boundaries[placement] -
                    (placement === 'right' ? data.offsets.target.width : data.offsets.target.height));
            }
            return { [mainSide]: value };
        }
    };
    /** @type {?} */
    let side;
    order.forEach((/**
     * @param {?} placement
     * @return {?}
     */
    placement => {
        side = ['left', 'top']
            .indexOf(placement) !== -1
            ? 'primary'
            : 'secondary';
        data.offsets.target = Object.assign({}, data.offsets.target, ((/** @type {?} */ (check)))[side](placement));
    }));
    return data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmVudE92ZXJmbG93LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ib290c3RyYXAtbWQvIiwic291cmNlcyI6WyJsaWIvZnJlZS91dGlscy9wb3NpdGlvbmluZy9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBR2xFLE1BQU0sVUFBVSxlQUFlLENBQUMsSUFBVTtJQUV4QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxFQUFFO1FBQ3ZELE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7O1VBS0ssYUFBYSxHQUFHLFdBQVc7O1VBQzNCLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLOztVQUN6QyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxZQUFZO0lBQzlELFlBQVksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLFlBQVksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLFlBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7O1VBRTNCLFVBQVUsR0FBRyxhQUFhLENBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFDbEIsQ0FBQyxFQUFFLFVBQVU7SUFDYixjQUFjLEVBQ2QsS0FBSyxDQUFDLGdCQUFnQjtLQUN2QjtJQUVELHdCQUF3QjtJQUN4Qiw4RUFBOEU7SUFDOUUsWUFBWSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDdkIsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDekIsWUFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLFNBQVMsQ0FBQzs7VUFFbEMsS0FBSyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDOztVQUUxQyxLQUFLLEdBQUc7Ozs7O1FBQ1osT0FBTyxDQUFDLFNBQWlCOztnQkFDbkIsS0FBSyxHQUFHLENBQUMsbUJBQUEsSUFBSSxFQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNuRCxJQUNFLENBQUMsbUJBQUEsSUFBSSxFQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7Z0JBQy9ELENBQUMsS0FBSyxDQUFDLDhCQUE4QjtjQUNyQztnQkFDQSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLG1CQUFBLElBQUksRUFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUNsRjtZQUVELE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ2hDLENBQUM7Ozs7O1FBQ0QsU0FBUyxDQUFDLFNBQWlCOztrQkFDbkIsUUFBUSxHQUFHLFNBQVMsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSzs7Z0JBQ25ELEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDekMsSUFDRSxDQUFDLG1CQUFBLElBQUksRUFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO2dCQUMvRCxDQUFDLEtBQUssQ0FBQyxzQkFBc0I7Y0FDN0I7Z0JBQ0EsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQzdCLFVBQVUsQ0FBQyxTQUFTLENBQUM7b0JBQ3JCLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FDakYsQ0FBQzthQUNIO1lBRUQsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDL0IsQ0FBQztLQUNGOztRQUVHLElBQVk7SUFFaEIsS0FBSyxDQUFDLE9BQU87Ozs7SUFBQyxTQUFTLENBQUMsRUFBRTtRQUN4QixJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO2FBQ25CLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFDLFNBQVM7WUFDWCxDQUFDLENBQUMsV0FBVyxDQUFDO1FBRWhCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxxQkFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBSyxDQUFDLG1CQUFBLEtBQUssRUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUUsQ0FBQztJQUV2RixDQUFDLEVBQUMsQ0FBQztJQUVILE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEJvdW5kYXJpZXMsIGlzTW9kaWZpZXJFbmFibGVkIH0gZnJvbSAnLi4vdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL21vZGVscy9pbmRleCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmV2ZW50T3ZlcmZsb3coZGF0YTogRGF0YSkge1xuXG4gIGlmICghaXNNb2RpZmllckVuYWJsZWQoZGF0YS5vcHRpb25zLCAncHJldmVudE92ZXJmbG93JykpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8vIE5PVEU6IERPTSBhY2Nlc3MgaGVyZVxuICAvLyByZXNldHMgdGhlIHRhcmdldE9mZnNldHMncyBwb3NpdGlvbiBzbyB0aGF0IHRoZSBkb2N1bWVudCBzaXplIGNhbiBiZSBjYWxjdWxhdGVkIGV4Y2x1ZGluZ1xuICAvLyB0aGUgc2l6ZSBvZiB0aGUgdGFyZ2V0T2Zmc2V0cyBlbGVtZW50IGl0c2VsZlxuICBjb25zdCB0cmFuc2Zvcm1Qcm9wID0gJ3RyYW5zZm9ybSc7XG4gIGNvbnN0IHRhcmdldFN0eWxlcyA9IGRhdGEuaW5zdGFuY2UudGFyZ2V0LnN0eWxlOyAvLyBhc3NpZ25tZW50IHRvIGhlbHAgbWluaWZpY2F0aW9uXG4gIGNvbnN0IHsgdG9wLCBsZWZ0LCBbdHJhbnNmb3JtUHJvcF06IHRyYW5zZm9ybSB9ID0gdGFyZ2V0U3R5bGVzO1xuICB0YXJnZXRTdHlsZXMudG9wID0gJyc7XG4gIHRhcmdldFN0eWxlcy5sZWZ0ID0gJyc7XG4gIHRhcmdldFN0eWxlc1t0cmFuc2Zvcm1Qcm9wXSA9ICcnO1xuXG4gIGNvbnN0IGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKFxuICAgIGRhdGEuaW5zdGFuY2UudGFyZ2V0LFxuICAgIGRhdGEuaW5zdGFuY2UuaG9zdCxcbiAgICAwLCAvLyBwYWRkaW5nXG4gICAgJ3Njcm9sbFBhcmVudCcsXG4gICAgZmFsc2UgLy8gcG9zaXRpb25GaXhlZFxuICApO1xuXG4gIC8vIE5PVEU6IERPTSBhY2Nlc3MgaGVyZVxuICAvLyByZXN0b3JlcyB0aGUgb3JpZ2luYWwgc3R5bGUgcHJvcGVydGllcyBhZnRlciB0aGUgb2Zmc2V0cyBoYXZlIGJlZW4gY29tcHV0ZWRcbiAgdGFyZ2V0U3R5bGVzLnRvcCA9IHRvcDtcbiAgdGFyZ2V0U3R5bGVzLmxlZnQgPSBsZWZ0O1xuICB0YXJnZXRTdHlsZXNbdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm07XG5cbiAgY29uc3Qgb3JkZXIgPSBbJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ2JvdHRvbSddO1xuXG4gIGNvbnN0IGNoZWNrID0ge1xuICAgIHByaW1hcnkocGxhY2VtZW50OiBzdHJpbmcpIHtcbiAgICAgIGxldCB2YWx1ZSA9IChkYXRhIGFzIGFueSkub2Zmc2V0cy50YXJnZXRbcGxhY2VtZW50XTtcbiAgICAgIGlmIChcbiAgICAgICAgKGRhdGEgYXMgYW55KS5vZmZzZXRzLnRhcmdldFtwbGFjZW1lbnRdIDwgYm91bmRhcmllc1twbGFjZW1lbnRdICYmXG4gICAgICAgICFmYWxzZSAvLyBvcHRpb25zLmVzY2FwZVdpdGhSZWZlcmVuY2VcbiAgICAgICkge1xuICAgICAgICB2YWx1ZSA9IE1hdGgubWF4KChkYXRhIGFzIGFueSkub2Zmc2V0cy50YXJnZXRbcGxhY2VtZW50XSwgYm91bmRhcmllc1twbGFjZW1lbnRdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgW3BsYWNlbWVudF06IHZhbHVlIH07XG4gICAgfSxcbiAgICBzZWNvbmRhcnkocGxhY2VtZW50OiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IG1haW5TaWRlID0gcGxhY2VtZW50ID09PSAncmlnaHQnID8gJ2xlZnQnIDogJ3RvcCc7XG4gICAgICBsZXQgdmFsdWUgPSBkYXRhLm9mZnNldHMudGFyZ2V0W21haW5TaWRlXTtcbiAgICAgIGlmIChcbiAgICAgICAgKGRhdGEgYXMgYW55KS5vZmZzZXRzLnRhcmdldFtwbGFjZW1lbnRdID4gYm91bmRhcmllc1twbGFjZW1lbnRdICYmXG4gICAgICAgICFmYWxzZSAvLyBlc2NhcGVXaXRoUmVmZXJlbmNlXG4gICAgICApIHtcbiAgICAgICAgdmFsdWUgPSBNYXRoLm1pbihcbiAgICAgICAgICBkYXRhLm9mZnNldHMudGFyZ2V0W21haW5TaWRlXSxcbiAgICAgICAgICBib3VuZGFyaWVzW3BsYWNlbWVudF0gLVxuICAgICAgICAgIChwbGFjZW1lbnQgPT09ICdyaWdodCcgPyBkYXRhLm9mZnNldHMudGFyZ2V0LndpZHRoIDogZGF0YS5vZmZzZXRzLnRhcmdldC5oZWlnaHQpXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IFttYWluU2lkZV06IHZhbHVlIH07XG4gICAgfVxuICB9O1xuXG4gIGxldCBzaWRlOiBzdHJpbmc7XG5cbiAgb3JkZXIuZm9yRWFjaChwbGFjZW1lbnQgPT4ge1xuICAgIHNpZGUgPSBbJ2xlZnQnLCAndG9wJ11cbiAgICAgIC5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xXG4gICAgICA/ICdwcmltYXJ5J1xuICAgICAgOiAnc2Vjb25kYXJ5JztcblxuICAgIGRhdGEub2Zmc2V0cy50YXJnZXQgPSB7IC4uLmRhdGEub2Zmc2V0cy50YXJnZXQsIC4uLihjaGVjayBhcyBhbnkpW3NpZGVdKHBsYWNlbWVudCkgfTtcblxuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn1cbiJdfQ==