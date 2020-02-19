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
function () { return win['gc'](); }) : (/**
 * @return {?}
 */
function () { return null; });
/** @type {?} */
export var performance = win['performance'] ? win['performance'] : null;
/** @type {?} */
export var Event = win['Event'];
/** @type {?} */
export var MouseEvent = win['MouseEvent'];
/** @type {?} */
export var KeyboardEvent = win['KeyboardEvent'];
/** @type {?} */
export var EventTarget = win['EventTarget'];
/** @type {?} */
export var History = win['History'];
/** @type {?} */
export var Location = win['Location'];
/** @type {?} */
export var EventListener = win['EventListener'];
/** @type {?} */
export var navigator = win['navigator'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYm9vdHN0cmFwLW1kLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdXRpbHMvZmFjYWRlL2Jyb3dzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztJQVlJLEdBQUcsR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxJQUFJLG1CQUFLLEVBQUUsRUFBQTtBQUU1RCxPQUFPLEVBQUMsR0FBRyxJQUFJLE1BQU0sRUFBQyxDQUFDOztBQUN2QixNQUFNLEtBQUssUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFROztBQUNsQyxNQUFNLEtBQUssUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFROztBQUNsQyxNQUFNLEtBQUssRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7QUFBQyxjQUFNLE9BQUEsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQVgsQ0FBVyxFQUFDLENBQUM7OztBQUFDLGNBQVcsT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFBOztBQUMvRCxNQUFNLEtBQUssV0FBVyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJOztBQUN2RSxNQUFNLEtBQU8sS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7O0FBQ2pDLE1BQU0sS0FBTyxVQUFVLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQzs7QUFDM0MsTUFBTSxLQUFPLGFBQWEsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDOztBQUNqRCxNQUFNLEtBQU8sV0FBVyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7O0FBQzdDLE1BQU0sS0FBTyxPQUFPLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQzs7QUFDckMsTUFBTSxLQUFPLFFBQVEsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDOztBQUN2QyxNQUFNLEtBQU8sYUFBYSxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUM7O0FBQ2pELE1BQU0sS0FBTyxTQUFTLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qdHNsaW50OmRpc2FibGUgKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBKUyB2ZXJzaW9uIG9mIGJyb3dzZXIgQVBJcy4gVGhpcyBsaWJyYXJ5IGNhbiBvbmx5IHJ1biBpbiB0aGUgYnJvd3Nlci5cbiAqL1xudmFyIHdpbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdyB8fCA8YW55Pnt9O1xuXG5leHBvcnQge3dpbiBhcyB3aW5kb3d9O1xuZXhwb3J0IHZhciBkb2N1bWVudCA9IHdpbi5kb2N1bWVudDtcbmV4cG9ydCB2YXIgbG9jYXRpb24gPSB3aW4ubG9jYXRpb247XG5leHBvcnQgdmFyIGdjID0gd2luWydnYyddID8gKCkgPT4gd2luWydnYyddKCkgOiAoKTogYW55ID0+IG51bGw7XG5leHBvcnQgdmFyIHBlcmZvcm1hbmNlID0gd2luWydwZXJmb3JtYW5jZSddID8gd2luWydwZXJmb3JtYW5jZSddIDogbnVsbDtcbmV4cG9ydCBjb25zdCBFdmVudCA9IHdpblsnRXZlbnQnXTtcbmV4cG9ydCBjb25zdCBNb3VzZUV2ZW50ID0gd2luWydNb3VzZUV2ZW50J107XG5leHBvcnQgY29uc3QgS2V5Ym9hcmRFdmVudCA9IHdpblsnS2V5Ym9hcmRFdmVudCddO1xuZXhwb3J0IGNvbnN0IEV2ZW50VGFyZ2V0ID0gd2luWydFdmVudFRhcmdldCddO1xuZXhwb3J0IGNvbnN0IEhpc3RvcnkgPSB3aW5bJ0hpc3RvcnknXTtcbmV4cG9ydCBjb25zdCBMb2NhdGlvbiA9IHdpblsnTG9jYXRpb24nXTtcbmV4cG9ydCBjb25zdCBFdmVudExpc3RlbmVyID0gd2luWydFdmVudExpc3RlbmVyJ107XG5leHBvcnQgY29uc3QgbmF2aWdhdG9yID0gd2luWyduYXZpZ2F0b3InXTtcbiJdfQ==