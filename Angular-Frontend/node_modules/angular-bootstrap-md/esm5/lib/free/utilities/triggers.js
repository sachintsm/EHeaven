/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Trigger } from './trigger.class';
/**
 * @record
 */
export function ListenOptions() { }
if (false) {
    /** @type {?|undefined} */
    ListenOptions.prototype.target;
    /** @type {?|undefined} */
    ListenOptions.prototype.targets;
    /** @type {?|undefined} */
    ListenOptions.prototype.triggers;
    /** @type {?|undefined} */
    ListenOptions.prototype.outsideClick;
    /** @type {?|undefined} */
    ListenOptions.prototype.outsideEsc;
    /** @type {?|undefined} */
    ListenOptions.prototype.show;
    /** @type {?|undefined} */
    ListenOptions.prototype.hide;
    /** @type {?|undefined} */
    ListenOptions.prototype.toggle;
}
/** @type {?} */
var DEFAULT_ALIASES = {
    hover: ['mouseover', 'mouseout'],
    focus: ['focusin', 'focusout']
};
/* tslint:disable-next-line: no-any */
/**
 * @param {?} triggers
 * @param {?=} aliases
 * @return {?}
 */
export function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    /** @type {?} */
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    /** @type {?} */
    var parsedTriggers = trimmedTriggers
        .split(/\s+/)
        .map((/**
     * @param {?} trigger
     * @return {?}
     */
    function (trigger) { return trigger.split(':'); }))
        .map((/**
     * @param {?} triggerPair
     * @return {?}
     */
    function (triggerPair) {
        /** @type {?} */
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    }));
    /** @type {?} */
    var manualTriggers = parsedTriggers.filter((/**
     * @param {?} triggerPair
     * @return {?}
     */
    function (triggerPair) {
        return triggerPair.isManual();
    }));
    if (manualTriggers.length > 1) {
        throw new Error('Triggers parse error: only one manual trigger is allowed');
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
    }
    return parsedTriggers;
}
/**
 * @param {?} renderer
 * @param {?} target
 * @param {?} triggers
 * @param {?} showFn
 * @param {?} hideFn
 * @param {?} toggleFn
 * @return {?}
 */
export function listenToTriggers(renderer, 
/* tslint:disable-next-line: no-any */
target, triggers, showFn, hideFn, toggleFn) {
    /** @type {?} */
    var parsedTriggers = parseTriggers(triggers);
    /* tslint:disable-next-line: no-any */
    /** @type {?} */
    var listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    parsedTriggers.forEach((/**
     * @param {?} trigger
     * @return {?}
     */
    function (trigger) {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
    }));
    return (/**
     * @return {?}
     */
    function () {
        listeners.forEach((/**
         * @param {?} unsubscribeFn
         * @return {?}
         */
        function (unsubscribeFn) { return unsubscribeFn(); }));
    });
}
/**
 * @param {?} renderer
 * @param {?} options
 * @return {?}
 */
export function listenToTriggersV2(renderer, options) {
    /** @type {?} */
    var parsedTriggers = parseTriggers(options.triggers);
    /** @type {?} */
    var target = options.target;
    // do nothing
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    // all listeners
    /* tslint:disable-next-line: no-any */
    /** @type {?} */
    var listeners = [];
    // lazy listeners registration
    /** @type {?} */
    var _registerHide = [];
    /** @type {?} */
    var registerHide = (/**
     * @return {?}
     */
    function () {
        // add hide listeners to unregister array
        _registerHide.forEach((/**
         * @param {?} fn
         * @return {?}
         */
        function (fn) { return listeners.push(fn()); }));
        // register hide events only once
        _registerHide.length = 0;
    });
    // register open\close\toggle listeners
    parsedTriggers.forEach((/**
     * @param {?} trigger
     * @return {?}
     */
    function (trigger) {
        /** @type {?} */
        var useToggle = trigger.open === trigger.close;
        /** @type {?} */
        var showFn = useToggle ? options.toggle : options.show;
        if (!useToggle) {
            _registerHide.push((/**
             * @return {?}
             */
            function () {
                return renderer.listen(target, trigger.close, options.hide);
            }));
        }
        listeners.push(renderer.listen(target, trigger.open, (/**
         * @return {?}
         */
        function () { return showFn(registerHide); })));
    }));
    return (/**
     * @return {?}
     */
    function () {
        listeners.forEach((/**
         * @param {?} unsubscribeFn
         * @return {?}
         */
        function (unsubscribeFn) { return unsubscribeFn(); }));
    });
}
/**
 * @param {?} renderer
 * @param {?} options
 * @return {?}
 */
export function registerOutsideClick(renderer, options) {
    if (!options.outsideClick) {
        return Function.prototype;
    }
    /* tslint:disable-next-line: no-any */
    return renderer.listen('document', 'click', (/**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (options.target && options.target.contains(event.target)) {
            return undefined;
        }
        if (options.targets &&
            options.targets.some((/**
             * @param {?} target
             * @return {?}
             */
            function (target) { return target.contains(event.target); }))) {
            return undefined;
        }
        options.hide();
    }));
}
/**
 * @param {?} renderer
 * @param {?} options
 * @return {?}
 */
export function registerEscClick(renderer, options) {
    if (!options.outsideEsc) {
        return Function.prototype;
    }
    return renderer.listen('document', 'keyup.esc', (/**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (options.target && options.target.contains(event.target)) {
            return undefined;
        }
        if (options.targets &&
            options.targets.some((/**
             * @param {?} target
             * @return {?}
             */
            function (target) { return target.contains(event.target); }))) {
            return undefined;
        }
        options.hide();
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZ2dlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxpdGllcy90cmlnZ2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBSzFDLG1DQVNDOzs7SUFSQywrQkFBcUI7O0lBQ3JCLGdDQUF3Qjs7SUFDeEIsaUNBQWU7O0lBQ2YscUNBQXVCOztJQUN2QixtQ0FBcUI7O0lBQ3JCLDZCQUFXOztJQUNYLDZCQUFXOztJQUNYLCtCQUF5Qjs7O0lBR3JCLGVBQWUsR0FBRztJQUN0QixLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDO0lBQ2hDLEtBQUssRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUM7Q0FDL0I7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsYUFBYSxDQUFDLFFBQWdCLEVBQUUsT0FBOEI7SUFBOUIsd0JBQUEsRUFBQSx5QkFBOEI7O1FBQ3RFLGVBQWUsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUU7SUFFL0MsSUFBSSxlQUFlLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNoQyxPQUFPLEVBQUUsQ0FBQztLQUNYOztRQUVLLGNBQWMsR0FBRyxlQUFlO1NBQ25DLEtBQUssQ0FBQyxLQUFLLENBQUM7U0FDWixHQUFHOzs7O0lBQUMsVUFBQyxPQUFlLElBQUssT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixFQUFDO1NBQzVDLEdBQUc7Ozs7SUFBQyxVQUFDLFdBQXFCOztZQUNuQixLQUFLLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFdBQVc7UUFFcEQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENB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LENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUE3QixDQUE2QixFQUFDLEVBQzdEO1lBQ0EsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFFRCxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakIsQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsUUFBbUIsRUFDbkIsT0FBc0I7SUFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7UUFDdkIsT0FBTyxRQUFRLENBQUMsU0FBUyxDQUFDO0tBQzNCO0lBRUQsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxXQUFXOzs7O0lBQUUsVUFBQyxLQUFVO1FBQ3pELElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDM0QsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFDRCxJQUNFLE9BQU8sQ0FBQyxPQUFPO1lBQ2YsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBN0IsQ0FBNkIsRUFBQyxFQUM3RDtZQUNBLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBRUQsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pCLENBQUMsRUFBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGNvcHlyaWdodCBWYWxvciBTb2Z0d2FyZVxuICogQGNvcHlyaWdodCBBbmd1bGFyIG5nLWJvb3RzdHJhcCB0ZWFtXG4gKi9cbmltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJpZ2dlciB9IGZyb20gJy4vdHJpZ2dlci5jbGFzcyc7XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG5leHBvcnQgdHlwZSBCc0V2ZW50Q2FsbGJhY2sgPSAoZXZlbnQ/OiBhbnkpID0+IGJvb2xlYW4gfCB2b2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpc3Rlbk9wdGlvbnMge1xuICB0YXJnZXQ/OiBIVE1MRWxlbWVudDtcbiAgdGFyZ2V0cz86IEhUTUxFbGVtZW50W107XG4gIHRyaWdnZXJzPzogYW55O1xuICBvdXRzaWRlQ2xpY2s/OiBib29sZWFuO1xuICBvdXRzaWRlRXNjPzogYm9vbGVhbjtcbiAgc2hvdz86IGFueTtcbiAgaGlkZT86IGFueTtcbiAgdG9nZ2xlPzogQnNFdmVudENhbGxiYWNrO1xufVxuXG5jb25zdCBERUZBVUxUX0FMSUFTRVMgPSB7XG4gIGhvdmVyOiBbJ21vdXNlb3ZlcicsICdtb3VzZW91dCddLFxuICBmb2N1czogWydmb2N1c2luJywgJ2ZvY3Vzb3V0J11cbn07XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUcmlnZ2Vycyh0cmlnZ2Vyczogc3RyaW5nLCBhbGlhc2VzOiBhbnkgPSBERUZBVUxUX0FMSUFTRVMpOiBUcmlnZ2VyW10ge1xuICBjb25zdCB0cmltbWVkVHJpZ2dlcnMgPSAodHJpZ2dlcnMgfHwgJycpLnRyaW0oKTtcblxuICBpZiAodHJpbW1lZFRyaWdnZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IHBhcnNlZFRyaWdnZXJzID0gdHJpbW1lZFRyaWdnZXJzXG4gICAgLnNwbGl0KC9cXHMrLylcbiAgICAubWFwKCh0cmlnZ2VyOiBzdHJpbmcpID0+IHRyaWdnZXIuc3BsaXQoJzonKSlcbiAgICAubWFwKCh0cmlnZ2VyUGFpcjogc3RyaW5nW10pID0+IHtcbiAgICAgIGNvbnN0IGFsaWFzID0gYWxpYXNlc1t0cmlnZ2VyUGFpclswXV0gfHwgdHJpZ2dlclBhaXI7XG5cbiAgICAgIHJldHVybiBuZXcgVHJpZ2dlcihhbGlhc1swXSwgYWxpYXNbMV0pO1xuICAgIH0pO1xuXG4gIGNvbnN0IG1hbnVhbFRyaWdnZXJzID0gcGFyc2VkVHJpZ2dlcnMuZmlsdGVyKCh0cmlnZ2VyUGFpcjogVHJpZ2dlcikgPT5cbiAgICB0cmlnZ2VyUGFpci5pc01hbnVhbCgpXG4gICk7XG5cbiAgaWYgKG1hbnVhbFRyaWdnZXJzLmxlbmd0aCA+IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyaWdnZXJzIHBhcnNlIGVycm9yOiBvbmx5IG9uZSBtYW51YWwgdHJpZ2dlciBpcyBhbGxvd2VkJyk7XG4gIH1cblxuICBpZiAobWFudWFsVHJpZ2dlcnMubGVuZ3RoID09PSAxICYmIHBhcnNlZFRyaWdnZXJzLmxlbmd0aCA+IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyaWdnZXJzIHBhcnNlIGVycm9yOiBtYW51YWwgdHJpZ2dlciBjYW5cXCd0IGJlIG1peGVkIHdpdGggb3RoZXIgdHJpZ2dlcnMnKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWRUcmlnZ2Vycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RlblRvVHJpZ2dlcnMocmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGFueSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJzOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Rm46IEJzRXZlbnRDYWxsYmFjayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVGbjogQnNFdmVudENhbGxiYWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlRm46IEJzRXZlbnRDYWxsYmFjayk6IEZ1bmN0aW9uIHtcbiAgY29uc3QgcGFyc2VkVHJpZ2dlcnMgPSBwYXJzZVRyaWdnZXJzKHRyaWdnZXJzKTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgY29uc3QgbGlzdGVuZXJzOiBhbnlbXSA9IFtdO1xuXG4gIGlmIChwYXJzZWRUcmlnZ2Vycy5sZW5ndGggPT09IDEgJiYgcGFyc2VkVHJpZ2dlcnNbMF0uaXNNYW51YWwoKSkge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIH1cblxuICBwYXJzZWRUcmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyOiBUcmlnZ2VyKSA9PiB7XG4gICAgaWYgKHRyaWdnZXIub3BlbiA9PT0gdHJpZ2dlci5jbG9zZSkge1xuICAgICAgbGlzdGVuZXJzLnB1c2gocmVuZGVyZXIubGlzdGVuKHRhcmdldCwgdHJpZ2dlci5vcGVuLCB0b2dnbGVGbikpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLnB1c2goXG4gICAgICByZW5kZXJlci5saXN0ZW4odGFyZ2V0LCB0cmlnZ2VyLm9wZW4sIHNob3dGbiksXG4gICAgICByZW5kZXJlci5saXN0ZW4odGFyZ2V0LCB0cmlnZ2VyLmNsb3NlLCBoaWRlRm4pXG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgodW5zdWJzY3JpYmVGbjogRnVuY3Rpb24pID0+IHVuc3Vic2NyaWJlRm4oKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0ZW5Ub1RyaWdnZXJzVjIocmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogTGlzdGVuT3B0aW9ucyk6IEZ1bmN0aW9uIHtcbiAgY29uc3QgcGFyc2VkVHJpZ2dlcnMgPSBwYXJzZVRyaWdnZXJzKG9wdGlvbnMudHJpZ2dlcnMpO1xuICBjb25zdCB0YXJnZXQgPSBvcHRpb25zLnRhcmdldDtcbiAgLy8gZG8gbm90aGluZ1xuICBpZiAocGFyc2VkVHJpZ2dlcnMubGVuZ3RoID09PSAxICYmIHBhcnNlZFRyaWdnZXJzWzBdLmlzTWFudWFsKCkpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlO1xuICB9XG5cbiAgLy8gYWxsIGxpc3RlbmVyc1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBjb25zdCBsaXN0ZW5lcnM6IGFueVtdID0gW107XG5cbiAgLy8gbGF6eSBsaXN0ZW5lcnMgcmVnaXN0cmF0aW9uXG4gIGNvbnN0IF9yZWdpc3RlckhpZGU6IEZ1bmN0aW9uW10gPSBbXTtcbiAgY29uc3QgcmVnaXN0ZXJIaWRlID0gKCkgPT4ge1xuICAgIC8vIGFkZCBoaWRlIGxpc3RlbmVycyB0byB1bnJlZ2lzdGVyIGFycmF5XG4gICAgX3JlZ2lzdGVySGlkZS5mb3JFYWNoKChmbjogRnVuY3Rpb24pID0+IGxpc3RlbmVycy5wdXNoKGZuKCkpKTtcbiAgICAvLyByZWdpc3RlciBoaWRlIGV2ZW50cyBvbmx5IG9uY2VcbiAgICBfcmVnaXN0ZXJIaWRlLmxlbmd0aCA9IDA7XG4gIH07XG5cbiAgLy8gcmVnaXN0ZXIgb3BlblxcY2xvc2VcXHRvZ2dsZSBsaXN0ZW5lcnNcbiAgcGFyc2VkVHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcjogVHJpZ2dlcikgPT4ge1xuICAgIGNvbnN0IHVzZVRvZ2dsZSA9IHRyaWdnZXIub3BlbiA9PT0gdHJpZ2dlci5jbG9zZTtcbiAgICBjb25zdCBzaG93Rm4gPSB1c2VUb2dnbGUgPyBvcHRpb25zLnRvZ2dsZSA6IG9wdGlvbnMuc2hvdztcblxuICAgIGlmICghdXNlVG9nZ2xlKSB7XG4gICAgICBfcmVnaXN0ZXJIaWRlLnB1c2goKCkgPT5cbiAgICAgICAgcmVuZGVyZXIubGlzdGVuKHRhcmdldCwgdHJpZ2dlci5jbG9zZSwgb3B0aW9ucy5oaWRlKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMucHVzaChcbiAgICAgIHJlbmRlcmVyLmxpc3Rlbih0YXJnZXQsIHRyaWdnZXIub3BlbiwgKCkgPT4gc2hvd0ZuKHJlZ2lzdGVySGlkZSkpXG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgodW5zdWJzY3JpYmVGbjogRnVuY3Rpb24pID0+IHVuc3Vic2NyaWJlRm4oKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck91dHNpZGVDbGljayhyZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IExpc3Rlbk9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zLm91dHNpZGVDbGljaykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICByZXR1cm4gcmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdjbGljaycsIChldmVudDogYW55KSA9PiB7XG4gICAgaWYgKG9wdGlvbnMudGFyZ2V0ICYmIG9wdGlvbnMudGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIG9wdGlvbnMudGFyZ2V0cyAmJlxuICAgICAgb3B0aW9ucy50YXJnZXRzLnNvbWUodGFyZ2V0ID0+IHRhcmdldC5jb250YWlucyhldmVudC50YXJnZXQpKVxuICAgICkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBvcHRpb25zLmhpZGUoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckVzY0NsaWNrKHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBMaXN0ZW5PcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucy5vdXRzaWRlRXNjKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgfVxuXG4gIHJldHVybiByZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ2tleXVwLmVzYycsIChldmVudDogYW55KSA9PiB7XG4gICAgaWYgKG9wdGlvbnMudGFyZ2V0ICYmIG9wdGlvbnMudGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIG9wdGlvbnMudGFyZ2V0cyAmJlxuICAgICAgb3B0aW9ucy50YXJnZXRzLnNvbWUodGFyZ2V0ID0+IHRhcmdldC5jb250YWlucyhldmVudC50YXJnZXQpKVxuICAgICkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBvcHRpb25zLmhpZGUoKTtcbiAgfSk7XG59XG4iXX0=