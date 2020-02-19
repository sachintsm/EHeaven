/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { window } from './facade/browser';
/** @type {?} */
let guessedVersion;
/**
 * @return {?}
 */
function _guessBsVersion() {
    if (typeof document === 'undefined') {
        return null;
    }
    /** @type {?} */
    const spanEl = document.createElement('span');
    spanEl.innerText = 'test bs version';
    document.body.appendChild(spanEl);
    spanEl.classList.add('d-none');
    /** @type {?} */
    const rect = spanEl.getBoundingClientRect();
    document.body.removeChild(spanEl);
    if (!rect) {
        return 'bs3';
    }
    return rect.top === 0 ? 'bs4' : 'bs3';
}
/**
 * @param {?} theme
 * @return {?}
 */
export function setTheme(theme) {
    guessedVersion = theme;
}
// todo: in ngx-bootstrap, bs4 will became a default one
/**
 * @return {?}
 */
export function isBs3() {
    if (typeof window === 'undefined') {
        return true;
    }
    if (typeof window.__theme === 'undefined') {
        if (guessedVersion) {
            return guessedVersion === 'bs3';
        }
        guessedVersion = _guessBsVersion();
        return guessedVersion === 'bs3';
    }
    return window.__theme !== 'bs4';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtcHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxpdGllcy90aGVtZS1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGtCQUFrQixDQUFDOztJQUV0QyxjQUFvQzs7OztBQUV4QyxTQUFTLGVBQWU7SUFDdEIsSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXLEVBQUU7UUFDbkMsT0FBTyxJQUFJLENBQUM7S0FDYjs7VUFDSyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDN0MsTUFBTSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQztJQUNyQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7VUFDekIsSUFBSSxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRTtJQUMzQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1QsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE9BQU8sSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ3hDLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFvQjtJQUMzQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0FBQ3pCLENBQUM7Ozs7O0FBR0QsTUFBTSxVQUFVLEtBQUs7SUFDbkIsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7UUFDakMsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELElBQUksT0FBTyxNQUFNLENBQUMsT0FBTyxLQUFLLFdBQVcsRUFBRTtRQUN6QyxJQUFJLGNBQWMsRUFBRTtZQUNsQixPQUFPLGNBQWMsS0FBSyxLQUFLLENBQUM7U0FDakM7UUFDRCxjQUFjLEdBQUcsZUFBZSxFQUFFLENBQUM7UUFFbkMsT0FBTyxjQUFjLEtBQUssS0FBSyxDQUFDO0tBQ2pDO0lBRUQsT0FBTyxNQUFNLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQztBQUNsQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2luZG93IH0gZnJvbSAnLi9mYWNhZGUvYnJvd3Nlcic7XG5cbmxldCBndWVzc2VkVmVyc2lvbjogJ2JzMycgfCAnYnM0JyB8IG51bGw7XG5cbmZ1bmN0aW9uIF9ndWVzc0JzVmVyc2lvbigpOiAnYnMzJyB8ICdiczQnIHwgbnVsbCB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3Qgc3BhbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuRWwuaW5uZXJUZXh0ID0gJ3Rlc3QgYnMgdmVyc2lvbic7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3BhbkVsKTtcbiAgc3BhbkVsLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICBjb25zdCByZWN0ID0gc3BhbkVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNwYW5FbCk7XG4gIGlmICghcmVjdCkge1xuICAgIHJldHVybiAnYnMzJztcbiAgfVxuXG4gIHJldHVybiByZWN0LnRvcCA9PT0gMCA/ICdiczQnIDogJ2JzMyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUaGVtZSh0aGVtZTogJ2JzMycgfCAnYnM0Jyk6IHZvaWQge1xuICBndWVzc2VkVmVyc2lvbiA9IHRoZW1lO1xufVxuXG4vLyB0b2RvOiBpbiBuZ3gtYm9vdHN0cmFwLCBiczQgd2lsbCBiZWNhbWUgYSBkZWZhdWx0IG9uZVxuZXhwb3J0IGZ1bmN0aW9uIGlzQnMzKCk6IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygd2luZG93Ll9fdGhlbWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKGd1ZXNzZWRWZXJzaW9uKSB7XG4gICAgICByZXR1cm4gZ3Vlc3NlZFZlcnNpb24gPT09ICdiczMnO1xuICAgIH1cbiAgICBndWVzc2VkVmVyc2lvbiA9IF9ndWVzc0JzVmVyc2lvbigpO1xuXG4gICAgcmV0dXJuIGd1ZXNzZWRWZXJzaW9uID09PSAnYnMzJztcbiAgfVxuXG4gIHJldHVybiB3aW5kb3cuX190aGVtZSAhPT0gJ2JzNCc7XG59XG4iXX0=