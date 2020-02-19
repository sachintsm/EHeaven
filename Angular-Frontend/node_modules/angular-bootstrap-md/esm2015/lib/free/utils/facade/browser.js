/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*tslint:disable */
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
var win = typeof window !== 'undefined' && window || (/** @type {?} */ ({}));
export { win as window };
/** @type {?} */
export var document = win.document;
/** @type {?} */
export var location = win.location;
/** @type {?} */
export var gc = win['gc'] ? (/**
 * @return {?}
 */
() => win['gc']()) : (/**
 * @return {?}
 */
() => null);
/** @type {?} */
export var performance = win['performance'] ? win['performance'] : null;
/** @type {?} */
export const Event = win['Event'];
/** @type {?} */
export const MouseEvent = win['MouseEvent'];
/** @type {?} */
export const KeyboardEvent = win['KeyboardEvent'];
/** @type {?} */
export const EventTarget = win['EventTarget'];
/** @type {?} */
export const History = win['History'];
/** @type {?} */
export const Location = win['Location'];
/** @type {?} */
export const EventListener = win['EventListener'];
/** @type {?} */
export const navigator = win['navigator'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYm9vdHN0cmFwLW1kLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdXRpbHMvZmFjYWRlL2Jyb3dzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztJQVlJLEdBQUcsR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxJQUFJLG1CQUFLLEVBQUUsRUFBQTtBQUU1RCxPQUFPLEVBQUMsR0FBRyxJQUFJLE1BQU0sRUFBQyxDQUFDOztBQUN2QixNQUFNLEtBQUssUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFROztBQUNsQyxNQUFNLEtBQUssUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFROztBQUNsQyxNQUFNLEtBQUssRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7QUFBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxDQUFDOzs7QUFBQyxHQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUE7O0FBQy9ELE1BQU0sS0FBSyxXQUFXLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7O0FBQ3ZFLE1BQU0sT0FBTyxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQzs7QUFDakMsTUFBTSxPQUFPLFVBQVUsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDOztBQUMzQyxNQUFNLE9BQU8sYUFBYSxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUM7O0FBQ2pELE1BQU0sT0FBTyxXQUFXLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQzs7QUFDN0MsTUFBTSxPQUFPLE9BQU8sR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDOztBQUNyQyxNQUFNLE9BQU8sUUFBUSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7O0FBQ3ZDLE1BQU0sT0FBTyxhQUFhLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQzs7QUFDakQsTUFBTSxPQUFPLFNBQVMsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyp0c2xpbnQ6ZGlzYWJsZSAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEpTIHZlcnNpb24gb2YgYnJvd3NlciBBUElzLiBUaGlzIGxpYnJhcnkgY2FuIG9ubHkgcnVuIGluIHRoZSBicm93c2VyLlxuICovXG52YXIgd2luID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93IHx8IDxhbnk+e307XG5cbmV4cG9ydCB7d2luIGFzIHdpbmRvd307XG5leHBvcnQgdmFyIGRvY3VtZW50ID0gd2luLmRvY3VtZW50O1xuZXhwb3J0IHZhciBsb2NhdGlvbiA9IHdpbi5sb2NhdGlvbjtcbmV4cG9ydCB2YXIgZ2MgPSB3aW5bJ2djJ10gPyAoKSA9PiB3aW5bJ2djJ10oKSA6ICgpOiBhbnkgPT4gbnVsbDtcbmV4cG9ydCB2YXIgcGVyZm9ybWFuY2UgPSB3aW5bJ3BlcmZvcm1hbmNlJ10gPyB3aW5bJ3BlcmZvcm1hbmNlJ10gOiBudWxsO1xuZXhwb3J0IGNvbnN0IEV2ZW50ID0gd2luWydFdmVudCddO1xuZXhwb3J0IGNvbnN0IE1vdXNlRXZlbnQgPSB3aW5bJ01vdXNlRXZlbnQnXTtcbmV4cG9ydCBjb25zdCBLZXlib2FyZEV2ZW50ID0gd2luWydLZXlib2FyZEV2ZW50J107XG5leHBvcnQgY29uc3QgRXZlbnRUYXJnZXQgPSB3aW5bJ0V2ZW50VGFyZ2V0J107XG5leHBvcnQgY29uc3QgSGlzdG9yeSA9IHdpblsnSGlzdG9yeSddO1xuZXhwb3J0IGNvbnN0IExvY2F0aW9uID0gd2luWydMb2NhdGlvbiddO1xuZXhwb3J0IGNvbnN0IEV2ZW50TGlzdGVuZXIgPSB3aW5bJ0V2ZW50TGlzdGVuZXInXTtcbmV4cG9ydCBjb25zdCBuYXZpZ2F0b3IgPSB3aW5bJ25hdmlnYXRvciddO1xuIl19