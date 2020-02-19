/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Determines if the browser is Internet Explorer
 */
import { isBrowser } from './isBrowser';
/** @type {?} */
const isIE11 = isBrowser && !!(((/** @type {?} */ (window))).MSInputMethodContext && ((/** @type {?} */ (document))).documentMode);
/** @type {?} */
const isIE10 = isBrowser && !!(((/** @type {?} */ (window))).MSInputMethodContext && /MSIE 10/.test(((/** @type {?} */ (navigator))).userAgent));
/**
 * @param {?=} version
 * @return {?}
 */
export function isIE(version) {
    if (version === 11) {
        return isIE11;
    }
    if (version === 10) {
        return isIE10;
    }
    return isIE11 || isIE10;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNJRS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYm9vdHN0cmFwLW1kLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdXRpbHMvcG9zaXRpb25pbmcvdXRpbHMvaXNJRS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7TUFFbEMsTUFBTSxHQUFHLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsb0JBQW9CLElBQUksQ0FBQyxtQkFBQSxRQUFRLEVBQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQzs7TUFDaEcsTUFBTSxHQUFHLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsb0JBQW9CLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLG1CQUFBLFNBQVMsRUFBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7Ozs7O0FBRXBILE1BQU0sVUFBVSxJQUFJLENBQUMsT0FBZ0I7SUFDbkMsSUFBSSxPQUFPLEtBQUssRUFBRSxFQUFFO1FBQ2xCLE9BQU8sTUFBTSxDQUFDO0tBQ2Y7SUFDRCxJQUFJLE9BQU8sS0FBSyxFQUFFLEVBQUU7UUFDbEIsT0FBTyxNQUFNLENBQUM7S0FDZjtJQUVELE9BQU8sTUFBTSxJQUFJLE1BQU0sQ0FBQztBQUMxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBicm93c2VyIGlzIEludGVybmV0IEV4cGxvcmVyXG4gKi9cbmltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJy4vaXNCcm93c2VyJztcblxuY29uc3QgaXNJRTExID0gaXNCcm93c2VyICYmICEhKCh3aW5kb3cgYXMgYW55KS5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpO1xuY29uc3QgaXNJRTEwID0gaXNCcm93c2VyICYmICEhKCh3aW5kb3cgYXMgYW55KS5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAvTVNJRSAxMC8udGVzdCgobmF2aWdhdG9yIGFzIGFueSkudXNlckFnZW50KSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0lFKHZlcnNpb24/OiBudW1iZXIpIHtcbiAgaWYgKHZlcnNpb24gPT09IDExKSB7XG4gICAgcmV0dXJuIGlzSUUxMTtcbiAgfVxuICBpZiAodmVyc2lvbiA9PT0gMTApIHtcbiAgICByZXR1cm4gaXNJRTEwO1xuICB9XG5cbiAgcmV0dXJuIGlzSUUxMSB8fCBpc0lFMTA7XG59XG4iXX0=