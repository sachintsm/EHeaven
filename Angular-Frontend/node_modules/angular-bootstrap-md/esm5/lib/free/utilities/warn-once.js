/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isDevMode } from '@angular/core';
/** @type {?} */
var _messagesHash = {};
/** @type {?} */
var _hideMsg = typeof console === 'undefined' || !('warn' in console);
/**
 * @param {?} msg
 * @return {?}
 */
export function warnOnce(msg) {
    if (!isDevMode() || _hideMsg || msg in _messagesHash) {
        return;
    }
    _messagesHash[msg] = true;
    /*tslint:disable-next-line*/
    console.warn(msg);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Fybi1vbmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ib290c3RyYXAtbWQvIiwic291cmNlcyI6WyJsaWIvZnJlZS91dGlsaXRpZXMvd2Fybi1vbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQUNwQyxhQUFhLEdBQStCLEVBQUU7O0lBQzlDLFFBQVEsR0FBRyxPQUFPLE9BQU8sS0FBSyxXQUFXLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUM7Ozs7O0FBRXZFLE1BQU0sVUFBVSxRQUFRLENBQUMsR0FBVztJQUNsQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksUUFBUSxJQUFJLEdBQUcsSUFBSSxhQUFhLEVBQUU7UUFDcEQsT0FBTztLQUNSO0lBRUQsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUMxQiw0QkFBNEI7SUFDNUIsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5jb25zdCBfbWVzc2FnZXNIYXNoOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuY29uc3QgX2hpZGVNc2cgPSB0eXBlb2YgY29uc29sZSA9PT0gJ3VuZGVmaW5lZCcgfHwgISgnd2FybicgaW4gY29uc29sZSk7XG5cbmV4cG9ydCBmdW5jdGlvbiB3YXJuT25jZShtc2c6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoIWlzRGV2TW9kZSgpIHx8IF9oaWRlTXNnIHx8IG1zZyBpbiBfbWVzc2FnZXNIYXNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgX21lc3NhZ2VzSGFzaFttc2ddID0gdHJ1ZTtcbiAgLyp0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUqL1xuICBjb25zb2xlLndhcm4obXNnKTtcbn1cbiJdfQ==