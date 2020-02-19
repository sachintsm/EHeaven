/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Helper to detect borders of a given element
 */
/**
 * @param {?} styles
 * @param {?} axis
 * @return {?}
 */
export function getBordersSize(styles, axis) {
    /** @type {?} */
    var sideA = axis === 'x' ? 'Left' : 'Top';
    /** @type {?} */
    var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
    return (parseFloat(styles[(/** @type {?} */ ("border" + sideA + "Width"))]) +
        parseFloat(styles[(/** @type {?} */ ("border" + sideB + "Width"))]));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Qm9yZGVyc1NpemUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL3Bvc2l0aW9uaW5nL3V0aWxzL2dldEJvcmRlcnNTaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUlBLE1BQU0sVUFBVSxjQUFjLENBQUMsTUFBMkIsRUFBRSxJQUFZOztRQUNoRSxLQUFLLEdBQUcsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLOztRQUNyQyxLQUFLLEdBQUcsS0FBSyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRO0lBRW5ELE9BQU8sQ0FDTCxVQUFVLENBQUMsTUFBTSxDQUFDLG1CQUFBLFdBQVMsS0FBSyxVQUFPLEVBQU8sQ0FBQyxDQUFDO1FBQ2hELFVBQVUsQ0FBQyxNQUFNLENBQUMsbUJBQUEsV0FBUyxLQUFLLFVBQU8sRUFBTyxDQUFDLENBQUMsQ0FDakQsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEhlbHBlciB0byBkZXRlY3QgYm9yZGVycyBvZiBhIGdpdmVuIGVsZW1lbnRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzOiBDU1NTdHlsZURlY2xhcmF0aW9uLCBheGlzOiBzdHJpbmcpIHtcbiAgY29uc3Qgc2lkZUEgPSBheGlzID09PSAneCcgPyAnTGVmdCcgOiAnVG9wJztcbiAgY29uc3Qgc2lkZUIgPSBzaWRlQSA9PT0gJ0xlZnQnID8gJ1JpZ2h0JyA6ICdCb3R0b20nO1xuXG4gIHJldHVybiAoXG4gICAgcGFyc2VGbG9hdChzdHlsZXNbYGJvcmRlciR7c2lkZUF9V2lkdGhgIGFzIGFueV0pICtcbiAgICBwYXJzZUZsb2F0KHN0eWxlc1tgYm9yZGVyJHtzaWRlQn1XaWR0aGAgYXMgYW55XSlcbiAgKTtcbn1cbiJdfQ==