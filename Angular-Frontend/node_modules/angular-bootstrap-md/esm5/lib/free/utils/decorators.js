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
    var sufix = 'Change';
    return (/**
     * @param {?} target
     * @param {?} propertyKey
     * @return {?}
     */
    function OnChangeHandler(target, propertyKey) {
        /** @type {?} */
        var _key = " __" + propertyKey + "Value";
        Object.defineProperty(target, propertyKey, {
            get: /**
             * @return {?}
             */
            function () { return this[_key]; },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                /** @type {?} */
                var prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYm9vdHN0cmFwLW1kLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdXRpbHMvZGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBLE1BQU0sVUFBVSxRQUFROztRQUNoQixLQUFLLEdBQUcsUUFBUTtJQUN0Qjs7Ozs7SUFBTyxTQUFTLGVBQWUsQ0FBQyxNQUFXLEVBQUUsV0FBbUI7O1lBQ3hELElBQUksR0FBRyxRQUFNLFdBQVcsVUFBTztRQUNyQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUU7WUFDekMsR0FBRzs7O1lBQUgsY0FBYSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsR0FBRzs7OztZQUFILFVBQUksS0FBVTs7b0JBQ04sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQ25CLElBQUksU0FBUyxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxFQUFFO29CQUNwRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDdkM7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qdHNsaW50OmRpc2FibGU6bm8taW52YWxpZC10aGlzICovXG5leHBvcnQgZnVuY3Rpb24gT25DaGFuZ2UoKTogYW55IHtcbiAgY29uc3Qgc3VmaXggPSAnQ2hhbmdlJztcbiAgcmV0dXJuIGZ1bmN0aW9uIE9uQ2hhbmdlSGFuZGxlcih0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IF9rZXkgPSBgIF9fJHtwcm9wZXJ0eUtleX1WYWx1ZWA7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXksIHtcbiAgICAgIGdldCgpOiBhbnkgeyByZXR1cm4gdGhpc1tfa2V5XTsgfSxcbiAgICAgIHNldCh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHByZXZWYWx1ZSA9IHRoaXNbX2tleV07XG4gICAgICAgIHRoaXNbX2tleV0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKHByZXZWYWx1ZSAhPT0gdmFsdWUgJiYgdGhpc1twcm9wZXJ0eUtleSArIHN1Zml4XSkge1xuICAgICAgICAgIHRoaXNbcHJvcGVydHlLZXkgKyBzdWZpeF0uZW1pdCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cbi8qIHRzbGludDplbmFibGUgKi9cbiJdfQ==