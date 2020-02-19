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
const DEFAULT_ALIASES = {
    hover: ['mouseover', 'mouseout'],
    focus: ['focusin', 'focusout']
};
/* tslint:disable-next-line: no-any */
/**
 * @param {?} triggers
 * @param {?=} aliases
 * @return {?}
 */
export function parseTriggers(triggers, aliases = DEFAULT_ALIASES) {
    /** @type {?} */
    const trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    /** @type {?} */
    const parsedTriggers = trimmedTriggers
        .split(/\s+/)
        .map((/**
     * @param {?} trigger
     * @return {?}
     */
    (trigger) => trigger.split(':')))
        .map((/**
     * @param {?} triggerPair
     * @return {?}
     */
    (triggerPair) => {
        /** @type {?} */
        const alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    }));
    /** @type {?} */
    const manualTriggers = parsedTriggers.filter((/**
     * @param {?} triggerPair
     * @return {?}
     */
    (triggerPair) => triggerPair.isManual()));
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
    const parsedTriggers = parseTriggers(triggers);
    /* tslint:disable-next-line: no-any */
    /** @type {?} */
    const listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    parsedTriggers.forEach((/**
     * @param {?} trigger
     * @return {?}
     */
    (trigger) => {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
    }));
    return (/**
     * @return {?}
     */
    () => {
        listeners.forEach((/**
         * @param {?} unsubscribeFn
         * @return {?}
         */
        (unsubscribeFn) => unsubscribeFn()));
    });
}
/**
 * @param {?} renderer
 * @param {?} options
 * @return {?}
 */
export function listenToTriggersV2(renderer, options) {
    /** @type {?} */
    const parsedTriggers = parseTriggers(options.triggers);
    /** @type {?} */
    const target = options.target;
    // do nothing
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    // all listeners
    /* tslint:disable-next-line: no-any */
    /** @type {?} */
    const listeners = [];
    // lazy listeners registration
    /** @type {?} */
    const _registerHide = [];
    /** @type {?} */
    const registerHide = (/**
     * @return {?}
     */
    () => {
        // add hide listeners to unregister array
        _registerHide.forEach((/**
         * @param {?} fn
         * @return {?}
         */
        (fn) => listeners.push(fn())));
        // register hide events only once
        _registerHide.length = 0;
    });
    // register open\close\toggle listeners
    parsedTriggers.forEach((/**
     * @param {?} trigger
     * @return {?}
     */
    (trigger) => {
        /** @type {?} */
        const useToggle = trigger.open === trigger.close;
        /** @type {?} */
        const showFn = useToggle ? options.toggle : options.show;
        if (!useToggle) {
            _registerHide.push((/**
             * @return {?}
             */
            () => renderer.listen(target, trigger.close, options.hide)));
        }
        listeners.push(renderer.listen(target, trigger.open, (/**
         * @return {?}
         */
        () => showFn(registerHide))));
    }));
    return (/**
     * @return {?}
     */
    () => {
        listeners.forEach((/**
         * @param {?} unsubscribeFn
         * @return {?}
         */
        (unsubscribeFn) => unsubscribeFn()));
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
    (event) => {
        if (options.target && options.target.contains(event.target)) {
            return undefined;
        }
        if (options.targets &&
            options.targets.some((/**
             * @param {?} target
             * @return {?}
             */
            target => target.contains(event.target)))) {
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
    (event) => {
        if (options.target && options.target.contains(event.target)) {
            return undefined;
        }
        if (options.targets &&
            options.targets.some((/**
             * @param {?} target
             * @return {?}
             */
            target => target.contains(event.target)))) {
            return undefined;
        }
        options.hide();
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZ2dlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxpdGllcy90cmlnZ2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBSzFDLG1DQVNDOzs7SUFSQywrQkFBcUI7O0lBQ3JCLGdDQUF3Qjs7SUFDeEIsaUNBQWU7O0lBQ2YscUNBQXVCOztJQUN2QixtQ0FBcUI7O0lBQ3JCLDZCQUFXOztJQUNYLDZCQUFXOztJQUNYLCtCQUF5Qjs7O01BR3JCLGVBQWUsR0FBRztJQUN0QixLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDO0lBQ2hDLEtBQUssRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUM7Q0FDL0I7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsYUFBYSxDQUFDLFFBQWdCLEVBQUUsVUFBZSxlQUFlOztVQUN0RSxlQUFlLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFO0lBRS9DLElBQUksZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDaEMsT0FBTyxFQUFFLENBQUM7S0FDWDs7VUFFSyxjQUFjLEdBQUcsZUFBZTtTQUNuQyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQ1osR0FBRzs7OztJQUFDLENBQUMsT0FBZSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFDO1NBQzVDLEdBQUc7Ozs7SUFBQyxDQUFDLFdBQXFCLEVBQUUsRUFBRTs7Y0FDdkIsS0FBSyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxXQUFXO1FBRXBELE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFD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UUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBQyxFQUM3RDtZQUNBLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBRUQsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pCLENBQUMsRUFBQyxDQUFDO0FBQ0wsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUFDLFFBQW1CLEVBQ25CLE9BQXNCO0lBQ3JELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO1FBQ3ZCLE9BQU8sUUFBUSxDQUFDLFNBQVMsQ0FBQztLQUMzQjtJQUVELE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsV0FBVzs7OztJQUFFLENBQUMsS0FBVSxFQUFFLEVBQUU7UUFDN0QsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMzRCxPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUNELElBQ0UsT0FBTyxDQUFDLE9BQU87WUFDZixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUk7Ozs7WUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFDLEVBQzdEO1lBQ0EsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFFRCxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakIsQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAY29weXJpZ2h0IFZhbG9yIFNvZnR3YXJlXG4gKiBAY29weXJpZ2h0IEFuZ3VsYXIgbmctYm9vdHN0cmFwIHRlYW1cbiAqL1xuaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmlnZ2VyIH0gZnJvbSAnLi90cmlnZ2VyLmNsYXNzJztcblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbmV4cG9ydCB0eXBlIEJzRXZlbnRDYWxsYmFjayA9IChldmVudD86IGFueSkgPT4gYm9vbGVhbiB8IHZvaWQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlzdGVuT3B0aW9ucyB7XG4gIHRhcmdldD86IEhUTUxFbGVtZW50O1xuICB0YXJnZXRzPzogSFRNTEVsZW1lbnRbXTtcbiAgdHJpZ2dlcnM/OiBhbnk7XG4gIG91dHNpZGVDbGljaz86IGJvb2xlYW47XG4gIG91dHNpZGVFc2M/OiBib29sZWFuO1xuICBzaG93PzogYW55O1xuICBoaWRlPzogYW55O1xuICB0b2dnbGU/OiBCc0V2ZW50Q2FsbGJhY2s7XG59XG5cbmNvbnN0IERFRkFVTFRfQUxJQVNFUyA9IHtcbiAgaG92ZXI6IFsnbW91c2VvdmVyJywgJ21vdXNlb3V0J10sXG4gIGZvY3VzOiBbJ2ZvY3VzaW4nLCAnZm9jdXNvdXQnXVxufTtcblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRyaWdnZXJzKHRyaWdnZXJzOiBzdHJpbmcsIGFsaWFzZXM6IGFueSA9IERFRkFVTFRfQUxJQVNFUyk6IFRyaWdnZXJbXSB7XG4gIGNvbnN0IHRyaW1tZWRUcmlnZ2VycyA9ICh0cmlnZ2VycyB8fCAnJykudHJpbSgpO1xuXG4gIGlmICh0cmltbWVkVHJpZ2dlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3QgcGFyc2VkVHJpZ2dlcnMgPSB0cmltbWVkVHJpZ2dlcnNcbiAgICAuc3BsaXQoL1xccysvKVxuICAgIC5tYXAoKHRyaWdnZXI6IHN0cmluZykgPT4gdHJpZ2dlci5zcGxpdCgnOicpKVxuICAgIC5tYXAoKHRyaWdnZXJQYWlyOiBzdHJpbmdbXSkgPT4ge1xuICAgICAgY29uc3QgYWxpYXMgPSBhbGlhc2VzW3RyaWdnZXJQYWlyWzBdXSB8fCB0cmlnZ2VyUGFpcjtcblxuICAgICAgcmV0dXJuIG5ldyBUcmlnZ2VyKGFsaWFzWzBdLCBhbGlhc1sxXSk7XG4gICAgfSk7XG5cbiAgY29uc3QgbWFudWFsVHJpZ2dlcnMgPSBwYXJzZWRUcmlnZ2Vycy5maWx0ZXIoKHRyaWdnZXJQYWlyOiBUcmlnZ2VyKSA9PlxuICAgIHRyaWdnZXJQYWlyLmlzTWFudWFsKClcbiAgKTtcblxuICBpZiAobWFudWFsVHJpZ2dlcnMubGVuZ3RoID4gMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignVHJpZ2dlcnMgcGFyc2UgZXJyb3I6IG9ubHkgb25lIG1hbnVhbCB0cmlnZ2VyIGlzIGFsbG93ZWQnKTtcbiAgfVxuXG4gIGlmIChtYW51YWxUcmlnZ2Vycy5sZW5ndGggPT09IDEgJiYgcGFyc2VkVHJpZ2dlcnMubGVuZ3RoID4gMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignVHJpZ2dlcnMgcGFyc2UgZXJyb3I6IG1hbnVhbCB0cmlnZ2VyIGNhblxcJ3QgYmUgbWl4ZWQgd2l0aCBvdGhlciB0cmlnZ2VycycpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZFRyaWdnZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdGVuVG9UcmlnZ2VycyhyZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogYW55LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcnM6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dGbjogQnNFdmVudENhbGxiYWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUZuOiBCc0V2ZW50Q2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVGbjogQnNFdmVudENhbGxiYWNrKTogRnVuY3Rpb24ge1xuICBjb25zdCBwYXJzZWRUcmlnZ2VycyA9IHBhcnNlVHJpZ2dlcnModHJpZ2dlcnMpO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBjb25zdCBsaXN0ZW5lcnM6IGFueVtdID0gW107XG5cbiAgaWYgKHBhcnNlZFRyaWdnZXJzLmxlbmd0aCA9PT0gMSAmJiBwYXJzZWRUcmlnZ2Vyc1swXS5pc01hbnVhbCgpKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgfVxuXG4gIHBhcnNlZFRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXI6IFRyaWdnZXIpID0+IHtcbiAgICBpZiAodHJpZ2dlci5vcGVuID09PSB0cmlnZ2VyLmNsb3NlKSB7XG4gICAgICBsaXN0ZW5lcnMucHVzaChyZW5kZXJlci5saXN0ZW4odGFyZ2V0LCB0cmlnZ2VyLm9wZW4sIHRvZ2dsZUZuKSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMucHVzaChcbiAgICAgIHJlbmRlcmVyLmxpc3Rlbih0YXJnZXQsIHRyaWdnZXIub3Blbiwgc2hvd0ZuKSxcbiAgICAgIHJlbmRlcmVyLmxpc3Rlbih0YXJnZXQsIHRyaWdnZXIuY2xvc2UsIGhpZGVGbilcbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGxpc3RlbmVycy5mb3JFYWNoKCh1bnN1YnNjcmliZUZuOiBGdW5jdGlvbikgPT4gdW5zdWJzY3JpYmVGbigpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RlblRvVHJpZ2dlcnNWMihyZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBMaXN0ZW5PcHRpb25zKTogRnVuY3Rpb24ge1xuICBjb25zdCBwYXJzZWRUcmlnZ2VycyA9IHBhcnNlVHJpZ2dlcnMob3B0aW9ucy50cmlnZ2Vycyk7XG4gIGNvbnN0IHRhcmdldCA9IG9wdGlvbnMudGFyZ2V0O1xuICAvLyBkbyBub3RoaW5nXG4gIGlmIChwYXJzZWRUcmlnZ2Vycy5sZW5ndGggPT09IDEgJiYgcGFyc2VkVHJpZ2dlcnNbMF0uaXNNYW51YWwoKSkge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIH1cblxuICAvLyBhbGwgbGlzdGVuZXJzXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIGNvbnN0IGxpc3RlbmVyczogYW55W10gPSBbXTtcblxuICAvLyBsYXp5IGxpc3RlbmVycyByZWdpc3RyYXRpb25cbiAgY29uc3QgX3JlZ2lzdGVySGlkZTogRnVuY3Rpb25bXSA9IFtdO1xuICBjb25zdCByZWdpc3RlckhpZGUgPSAoKSA9PiB7XG4gICAgLy8gYWRkIGhpZGUgbGlzdGVuZXJzIHRvIHVucmVnaXN0ZXIgYXJyYXlcbiAgICBfcmVnaXN0ZXJIaWRlLmZvckVhY2goKGZuOiBGdW5jdGlvbikgPT4gbGlzdGVuZXJzLnB1c2goZm4oKSkpO1xuICAgIC8vIHJlZ2lzdGVyIGhpZGUgZXZlbnRzIG9ubHkgb25jZVxuICAgIF9yZWdpc3RlckhpZGUubGVuZ3RoID0gMDtcbiAgfTtcblxuICAvLyByZWdpc3RlciBvcGVuXFxjbG9zZVxcdG9nZ2xlIGxpc3RlbmVyc1xuICBwYXJzZWRUcmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyOiBUcmlnZ2VyKSA9PiB7XG4gICAgY29uc3QgdXNlVG9nZ2xlID0gdHJpZ2dlci5vcGVuID09PSB0cmlnZ2VyLmNsb3NlO1xuICAgIGNvbnN0IHNob3dGbiA9IHVzZVRvZ2dsZSA/IG9wdGlvbnMudG9nZ2xlIDogb3B0aW9ucy5zaG93O1xuXG4gICAgaWYgKCF1c2VUb2dnbGUpIHtcbiAgICAgIF9yZWdpc3RlckhpZGUucHVzaCgoKSA9PlxuICAgICAgICByZW5kZXJlci5saXN0ZW4odGFyZ2V0LCB0cmlnZ2VyLmNsb3NlLCBvcHRpb25zLmhpZGUpXG4gICAgICApO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5wdXNoKFxuICAgICAgcmVuZGVyZXIubGlzdGVuKHRhcmdldCwgdHJpZ2dlci5vcGVuLCAoKSA9PiBzaG93Rm4ocmVnaXN0ZXJIaWRlKSlcbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGxpc3RlbmVycy5mb3JFYWNoKCh1bnN1YnNjcmliZUZuOiBGdW5jdGlvbikgPT4gdW5zdWJzY3JpYmVGbigpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyT3V0c2lkZUNsaWNrKHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogTGlzdGVuT3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMub3V0c2lkZUNsaWNrKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIHJldHVybiByZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ2NsaWNrJywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICBpZiAob3B0aW9ucy50YXJnZXQgJiYgb3B0aW9ucy50YXJnZXQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgb3B0aW9ucy50YXJnZXRzICYmXG4gICAgICBvcHRpb25zLnRhcmdldHMuc29tZSh0YXJnZXQgPT4gdGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIG9wdGlvbnMuaGlkZSgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyRXNjQ2xpY2socmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IExpc3Rlbk9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zLm91dHNpZGVFc2MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlO1xuICB9XG5cbiAgcmV0dXJuIHJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAna2V5dXAuZXNjJywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICBpZiAob3B0aW9ucy50YXJnZXQgJiYgb3B0aW9ucy50YXJnZXQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgb3B0aW9ucy50YXJnZXRzICYmXG4gICAgICBvcHRpb25zLnRhcmdldHMuc29tZSh0YXJnZXQgPT4gdGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIG9wdGlvbnMuaGlkZSgpO1xuICB9KTtcbn1cbiJdfQ==