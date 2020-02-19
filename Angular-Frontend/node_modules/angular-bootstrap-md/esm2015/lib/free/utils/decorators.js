/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*tslint:disable:no-invalid-this */
/**
 * @return {?}
 */
export function OnChange() {
    /** @type {?} */
    const sufix = 'Change';
    return (/**
     * @param {?} target
     * @param {?} propertyKey
     * @return {?}
     */
    function OnChangeHandler(target, propertyKey) {
        /** @type {?} */
        const _key = ` __${propertyKey}Value`;
        Object.defineProperty(target, propertyKey, {
            /**
             * @return {?}
             */
            get() { return this[_key]; },
            /**
             * @param {?} value
             * @return {?}
             */
            set(value) {
                /** @type {?} */
                const prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYm9vdHN0cmFwLW1kLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdXRpbHMvZGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBLE1BQU0sVUFBVSxRQUFROztVQUNoQixLQUFLLEdBQUcsUUFBUTtJQUN0Qjs7Ozs7SUFBTyxTQUFTLGVBQWUsQ0FBQyxNQUFXLEVBQUUsV0FBbUI7O2NBQ3hELElBQUksR0FBRyxNQUFNLFdBQVcsT0FBTztRQUNyQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUU7Ozs7WUFDekMsR0FBRyxLQUFVLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7WUFDakMsR0FBRyxDQUFDLEtBQVU7O3NCQUNOLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixJQUFJLFNBQVMsS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsRUFBRTtvQkFDcEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3ZDO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUMsRUFBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKnRzbGludDpkaXNhYmxlOm5vLWludmFsaWQtdGhpcyAqL1xuZXhwb3J0IGZ1bmN0aW9uIE9uQ2hhbmdlKCk6IGFueSB7XG4gIGNvbnN0IHN1Zml4ID0gJ0NoYW5nZSc7XG4gIHJldHVybiBmdW5jdGlvbiBPbkNoYW5nZUhhbmRsZXIodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBfa2V5ID0gYCBfXyR7cHJvcGVydHlLZXl9VmFsdWVgO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCB7XG4gICAgICBnZXQoKTogYW55IHsgcmV0dXJuIHRoaXNbX2tleV07IH0sXG4gICAgICBzZXQodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICBjb25zdCBwcmV2VmFsdWUgPSB0aGlzW19rZXldO1xuICAgICAgICB0aGlzW19rZXldID0gdmFsdWU7XG4gICAgICAgIGlmIChwcmV2VmFsdWUgIT09IHZhbHVlICYmIHRoaXNbcHJvcGVydHlLZXkgKyBzdWZpeF0pIHtcbiAgICAgICAgICB0aGlzW3Byb3BlcnR5S2V5ICsgc3VmaXhdLmVtaXQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59XG4vKiB0c2xpbnQ6ZW5hYmxlICovXG4iXX0=