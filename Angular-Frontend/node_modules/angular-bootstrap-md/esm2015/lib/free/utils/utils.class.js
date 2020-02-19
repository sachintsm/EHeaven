/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { window, document } from './facade/browser';
export class Utils {
    constructor() {
    }
    /**
     * @param {?} element
     * @return {?}
     */
    static reflow(element) {
        ((/**
         * @param {?} bs
         * @return {?}
         */
        (bs) => bs))(element.offsetHeight);
    }
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    /**
     * @param {?} elem
     * @return {?}
     */
    static getStyles(elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        /** @type {?} */
        let view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = window;
        }
        return view.getComputedStyle(elem);
    }
    /**
     * @param {?} event
     * @param {?} el
     * @return {?}
     */
    focusTrapModal(event, el) {
        /** @type {?} */
        let focusableElements;
        /** @type {?} */
        let firstFocusableElement;
        /** @type {?} */
        let lastFocusableElement;
        /** @type {?} */
        const KEYCODE_TAB = 9;
        /*tslint:disable-next-line:max-line-length */
        focusableElements = el.nativeElement.querySelectorAll('a[href], button, textarea, input, select, form, mdb-select, mdb-auto-completer, mdb-checkbox, mdb-range-input');
        firstFocusableElement = focusableElements[0];
        lastFocusableElement = focusableElements[focusableElements.length - 1];
        if (event.key === 'Tab' || event.keyCode === KEYCODE_TAB) {
            if (event.shiftKey) {
                if (document && document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    event.preventDefault();
                }
            }
            else {
                if (document && document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    event.preventDefault();
                }
            }
        }
    }
    /**
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    getClosestEl(el, selector) {
        for (; el && el !== document; el = el.parentNode) {
            if (el.matches && el.matches(selector)) {
                return el;
            }
        }
        return null;
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    getCoords(elem) {
        /** @type {?} */
        const box = elem.getBoundingClientRect();
        /** @type {?} */
        const body = document.body;
        /** @type {?} */
        const docEl = document.documentElement;
        /** @type {?} */
        const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        /** @type {?} */
        const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
        /** @type {?} */
        const clientTop = docEl.clientTop || body.clientTop || 0;
        /** @type {?} */
        const clientLeft = docEl.clientLeft || body.clientLeft || 0;
        /** @type {?} */
        const top = box.top + scrollTop - clientTop;
        /** @type {?} */
        const left = box.left + scrollLeft - clientLeft;
        return { top: Math.round(top), left: Math.round(left) };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL3V0aWxzLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR3BELE1BQU0sT0FBTyxLQUFLO0lBQ2hCO0lBRUEsQ0FBQzs7Ozs7SUFDTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQVk7UUFDL0I7Ozs7UUFBQyxDQUFDLEVBQU8sRUFBUSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7OztJQUdNLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBUzs7Ozs7WUFJM0IsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVztRQUV6QyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN6QixJQUFJLEdBQUcsTUFBTSxDQUFDO1NBQ2Y7UUFFRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFTSxjQUFjLENBQUMsS0FBMEIsRUFBRSxFQUFjOztZQUMxRCxpQkFBc0I7O1lBQ3RCLHFCQUEwQjs7WUFDMUIsb0JBQXlCOztjQUV2QixXQUFXLEdBQUcsQ0FBQztRQUNyQiw2Q0FBNkM7UUFDN0MsaUJBQWlCLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQywrR0FBK0csQ0FBQyxDQUFDO1FBQ3ZLLHFCQUFxQixHQUFHLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLG9CQUFvQixHQUFHLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUV2RSxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssV0FBVyxFQUFFO1lBQ3hELElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLGFBQWEsS0FBSyxxQkFBcUIsRUFBRTtvQkFDaEUsb0JBQW9CLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzdCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztpQkFDeEI7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsYUFBYSxLQUFLLG9CQUFvQixFQUFFO29CQUMvRCxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDOUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2lCQUN4QjthQUNGO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7SUFFTSxZQUFZLENBQUMsRUFBTyxFQUFFLFFBQWdCO1FBQzNDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxRQUFRLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLEVBQUU7WUFDaEQsSUFBSSxFQUFFLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3RDLE9BQU8sRUFBRSxDQUFDO2FBQ1g7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFTSxTQUFTLENBQUMsSUFBUzs7Y0FDaEIsR0FBRyxHQUFlLElBQUksQ0FBQyxxQkFBcUIsRUFBRTs7Y0FDOUMsSUFBSSxHQUFRLFFBQVEsQ0FBQyxJQUFJOztjQUN6QixLQUFLLEdBQVEsUUFBUSxDQUFDLGVBQWU7O2NBRXJDLFNBQVMsR0FBVyxNQUFNLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVM7O2NBQzNFLFVBQVUsR0FBVyxNQUFNLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVU7O2NBRTlFLFNBQVMsR0FBVyxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQzs7Y0FDMUQsVUFBVSxHQUFXLEtBQUssQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDOztjQUU3RCxHQUFHLEdBQVcsR0FBRyxDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUcsU0FBUzs7Y0FDN0MsSUFBSSxHQUFXLEdBQUcsQ0FBQyxJQUFJLEdBQUcsVUFBVSxHQUFHLFVBQVU7UUFFdkQsT0FBTyxFQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUM7SUFDMUQsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2luZG93LCBkb2N1bWVudCB9IGZyb20gJy4vZmFjYWRlL2Jyb3dzZXInO1xuaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFV0aWxzIHtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuICBwdWJsaWMgc3RhdGljIHJlZmxvdyhlbGVtZW50OiBhbnkpOiB2b2lkIHtcbiAgICAoKGJzOiBhbnkpOiB2b2lkID0+IGJzKShlbGVtZW50Lm9mZnNldEhlaWdodCk7XG4gIH1cblxuICAvLyBzb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvanF1ZXJ5L2Jsb2IvbWFzdGVyL3NyYy9jc3MvdmFyL2dldFN0eWxlcy5qc1xuICBwdWJsaWMgc3RhdGljIGdldFN0eWxlcyhlbGVtOiBhbnkpOiBhbnkge1xuICAgIC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seSwgRmlyZWZveCA8PTMwICgjMTUwOTgsICMxNDE1MClcbiAgICAvLyBJRSB0aHJvd3Mgb24gZWxlbWVudHMgY3JlYXRlZCBpbiBwb3B1cHNcbiAgICAvLyBGRiBtZWFud2hpbGUgdGhyb3dzIG9uIGZyYW1lIGVsZW1lbnRzIHRocm91Z2ggXCJkZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlXCJcbiAgICBsZXQgdmlldyA9IGVsZW0ub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcblxuICAgIGlmICghdmlldyB8fCAhdmlldy5vcGVuZXIpIHtcbiAgICAgIHZpZXcgPSB3aW5kb3c7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBmb2N1c1RyYXBNb2RhbChldmVudDogS2V5Ym9hcmRFdmVudCB8IGFueSwgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICBsZXQgZm9jdXNhYmxlRWxlbWVudHM6IGFueTtcbiAgICBsZXQgZmlyc3RGb2N1c2FibGVFbGVtZW50OiBhbnk7XG4gICAgbGV0IGxhc3RGb2N1c2FibGVFbGVtZW50OiBhbnk7XG5cbiAgICBjb25zdCBLRVlDT0RFX1RBQiA9IDk7XG4gICAgLyp0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoICovXG4gICAgZm9jdXNhYmxlRWxlbWVudHMgPSBlbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl0sIGJ1dHRvbiwgdGV4dGFyZWEsIGlucHV0LCBzZWxlY3QsIGZvcm0sIG1kYi1zZWxlY3QsIG1kYi1hdXRvLWNvbXBsZXRlciwgbWRiLWNoZWNrYm94LCBtZGItcmFuZ2UtaW5wdXQnKTtcbiAgICBmaXJzdEZvY3VzYWJsZUVsZW1lbnQgPSBmb2N1c2FibGVFbGVtZW50c1swXTtcbiAgICBsYXN0Rm9jdXNhYmxlRWxlbWVudCA9IGZvY3VzYWJsZUVsZW1lbnRzW2ZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ1RhYicgfHwgZXZlbnQua2V5Q29kZSA9PT0gS0VZQ09ERV9UQUIpIHtcbiAgICAgIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZmlyc3RGb2N1c2FibGVFbGVtZW50KSB7XG4gICAgICAgICAgbGFzdEZvY3VzYWJsZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gbGFzdEZvY3VzYWJsZUVsZW1lbnQpIHtcbiAgICAgICAgICBmaXJzdEZvY3VzYWJsZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldENsb3Nlc3RFbChlbDogYW55LCBzZWxlY3Rvcjogc3RyaW5nKSB7XG4gICAgZm9yICg7IGVsICYmIGVsICE9PSBkb2N1bWVudDsgZWwgPSBlbC5wYXJlbnROb2RlKSB7XG4gICAgICBpZiAoZWwubWF0Y2hlcyAmJiBlbC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHVibGljIGdldENvb3JkcyhlbGVtOiBhbnkpOiBhbnkge1xuICAgICAgY29uc3QgYm94OiBDbGllbnRSZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGJvZHk6IGFueSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICBjb25zdCBkb2NFbDogYW55ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgICBjb25zdCBzY3JvbGxUb3A6IG51bWJlciA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2NFbC5zY3JvbGxUb3AgfHwgYm9keS5zY3JvbGxUb3A7XG4gICAgICBjb25zdCBzY3JvbGxMZWZ0OiBudW1iZXIgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsTGVmdCB8fCBib2R5LnNjcm9sbExlZnQ7XG5cbiAgICAgIGNvbnN0IGNsaWVudFRvcDogbnVtYmVyID0gZG9jRWwuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG4gICAgICBjb25zdCBjbGllbnRMZWZ0OiBudW1iZXIgPSBkb2NFbC5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuXG4gICAgICBjb25zdCB0b3A6IG51bWJlciA9IGJveC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3A7XG4gICAgICBjb25zdCBsZWZ0OiBudW1iZXIgPSBib3gubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0O1xuXG4gICAgICByZXR1cm4ge3RvcDogTWF0aC5yb3VuZCh0b3ApLCBsZWZ0OiBNYXRoLnJvdW5kKGxlZnQpfTtcbiAgfVxufVxuIl19