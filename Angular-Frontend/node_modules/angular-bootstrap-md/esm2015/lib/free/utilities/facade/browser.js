/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 * @type {?}
 */
const win = (typeof window !== 'undefined' && window) || (/** @type {?} */ ({}));
export { win as window };
/** @type {?} */
export const document = win.document;
/** @type {?} */
export const location = win.location;
/** @type {?} */
export const gc = win.gc ? (/**
 * @return {?}
 */
() => win.gc()) : (/**
 * @return {?}
 */
() => null);
/** @type {?} */
export const performance = win.performance ? win.performance : null;
/** @type {?} */
export const Event = win.Event;
/** @type {?} */
export const MouseEvent = win.MouseEvent;
/** @type {?} */
export const KeyboardEvent = win.KeyboardEvent;
/** @type {?} */
export const EventTarget = win.EventTarget;
/** @type {?} */
export const History = win.History;
/** @type {?} */
export const Location = win.Location;
/** @type {?} */
export const EventListener = win.EventListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYm9vdHN0cmFwLW1kLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdXRpbGl0aWVzL2ZhY2FkZS9icm93c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztNQVdNLEdBQUcsR0FBRyxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsSUFBSSxtQkFBQSxFQUFFLEVBQU87QUFFbEUsT0FBTyxFQUFFLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQzs7QUFDekIsTUFBTSxPQUFPLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUTs7QUFDcEMsTUFBTSxPQUFPLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUTs7QUFDcEMsTUFBTSxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7OztBQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBQyxDQUFDOzs7QUFBQyxHQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUE7O0FBQzNELE1BQU0sT0FBTyxXQUFXLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSTs7QUFDbkUsTUFBTSxPQUFPLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSzs7QUFDOUIsTUFBTSxPQUFPLFVBQVUsR0FBRyxHQUFHLENBQUMsVUFBVTs7QUFDeEMsTUFBTSxPQUFPLGFBQWEsR0FBRyxHQUFHLENBQUMsYUFBYTs7QUFDOUMsTUFBTSxPQUFPLFdBQVcsR0FBRyxHQUFHLENBQUMsV0FBVzs7QUFDMUMsTUFBTSxPQUFPLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTzs7QUFDbEMsTUFBTSxPQUFPLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUTs7QUFDcEMsTUFBTSxPQUFPLGFBQWEsR0FBRyxHQUFHLENBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBKUyB2ZXJzaW9uIG9mIGJyb3dzZXIgQVBJcy4gVGhpcyBsaWJyYXJ5IGNhbiBvbmx5IHJ1biBpbiB0aGUgYnJvd3Nlci5cbiAqL1xuY29uc3Qgd2luID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdykgfHwge30gYXMgYW55O1xuXG5leHBvcnQgeyB3aW4gYXMgd2luZG93IH07XG5leHBvcnQgY29uc3QgZG9jdW1lbnQgPSB3aW4uZG9jdW1lbnQ7XG5leHBvcnQgY29uc3QgbG9jYXRpb24gPSB3aW4ubG9jYXRpb247XG5leHBvcnQgY29uc3QgZ2MgPSB3aW4uZ2MgPyAoKSA9PiB3aW4uZ2MoKSA6ICgpOiBhbnkgPT4gbnVsbDtcbmV4cG9ydCBjb25zdCBwZXJmb3JtYW5jZSA9IHdpbi5wZXJmb3JtYW5jZSA/IHdpbi5wZXJmb3JtYW5jZSA6IG51bGw7XG5leHBvcnQgY29uc3QgRXZlbnQgPSB3aW4uRXZlbnQ7XG5leHBvcnQgY29uc3QgTW91c2VFdmVudCA9IHdpbi5Nb3VzZUV2ZW50O1xuZXhwb3J0IGNvbnN0IEtleWJvYXJkRXZlbnQgPSB3aW4uS2V5Ym9hcmRFdmVudDtcbmV4cG9ydCBjb25zdCBFdmVudFRhcmdldCA9IHdpbi5FdmVudFRhcmdldDtcbmV4cG9ydCBjb25zdCBIaXN0b3J5ID0gd2luLkhpc3Rvcnk7XG5leHBvcnQgY29uc3QgTG9jYXRpb24gPSB3aW4uTG9jYXRpb247XG5leHBvcnQgY29uc3QgRXZlbnRMaXN0ZW5lciA9IHdpbi5FdmVudExpc3RlbmVyO1xuIl19