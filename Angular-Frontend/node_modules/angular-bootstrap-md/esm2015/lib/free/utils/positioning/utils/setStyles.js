/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isNumeric } from './isNumeric';
/**
 * @param {?} element
 * @param {?} styles
 * @param {?=} renderer
 * @return {?}
 */
export function setStyles(element, styles, renderer) {
    Object.keys(styles).forEach((/**
     * @param {?} prop
     * @return {?}
     */
    (prop) => {
        /** @type {?} */
        let unit = '';
        // add unit if the value is numeric and is one of the following
        if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 &&
            isNumeric(styles[prop])) {
            unit = 'px';
        }
        if (renderer) {
            renderer.setStyle(element, prop, `${String(styles[prop])}${unit}`);
            return;
        }
        element.style[prop] = String(styles[prop]) + unit;
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0U3R5bGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ib290c3RyYXAtbWQvIiwic291cmNlcyI6WyJsaWIvZnJlZS91dGlscy9wb3NpdGlvbmluZy91dGlscy9zZXRTdHlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7QUFFeEMsTUFBTSxVQUFVLFNBQVMsQ0FBQyxPQUFvQixFQUFFLE1BQVcsRUFBRSxRQUFvQjtJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU87Ozs7SUFBQyxDQUFDLElBQVMsRUFBRSxFQUFFOztZQUNwQyxJQUFJLEdBQUcsRUFBRTtRQUNiLCtEQUErRDtRQUMvRCxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVFLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUN6QixJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBRW5FLE9BQU87U0FDUjtRQUVELE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNwRCxDQUFDLEVBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNldCB0aGUgc3R5bGUgdG8gdGhlIGdpdmVuIHBvcHBlclxuICovXG5pbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaXNOdW1lcmljIH0gZnJvbSAnLi9pc051bWVyaWMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0U3R5bGVzKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzdHlsZXM6IGFueSwgcmVuZGVyZXI/OiBSZW5kZXJlcjIpIHtcbiAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKChwcm9wOiBhbnkpID0+IHtcbiAgICBsZXQgdW5pdCA9ICcnO1xuICAgIC8vIGFkZCB1bml0IGlmIHRoZSB2YWx1ZSBpcyBudW1lcmljIGFuZCBpcyBvbmUgb2YgdGhlIGZvbGxvd2luZ1xuICAgIGlmIChbJ3dpZHRoJywgJ2hlaWdodCcsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXS5pbmRleE9mKHByb3ApICE9PSAtMSAmJlxuICAgICAgaXNOdW1lcmljKHN0eWxlc1twcm9wXSkpIHtcbiAgICAgIHVuaXQgPSAncHgnO1xuICAgIH1cblxuICAgIGlmIChyZW5kZXJlcikge1xuICAgICAgcmVuZGVyZXIuc2V0U3R5bGUoZWxlbWVudCwgcHJvcCwgYCR7U3RyaW5nKHN0eWxlc1twcm9wXSl9JHt1bml0fWApO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5zdHlsZVtwcm9wXSA9IFN0cmluZyhzdHlsZXNbcHJvcF0pICsgdW5pdDtcbiAgfSk7XG59XG4iXX0=