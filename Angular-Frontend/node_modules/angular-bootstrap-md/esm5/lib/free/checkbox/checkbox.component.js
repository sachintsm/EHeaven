/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, forwardRef, HostListener, Input, Output, ViewChild, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject, timer } from 'rxjs';
import { take } from 'rxjs/operators';
/** @type {?} */
export var CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line: no-use-before-declare
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return CheckboxComponent; })),
    multi: true,
};
/** @type {?} */
var defaultIdNumber = 0;
var MdbCheckboxChange = /** @class */ (function () {
    function MdbCheckboxChange() {
    }
    return MdbCheckboxChange;
}());
export { MdbCheckboxChange };
if (false) {
    /** @type {?} */
    MdbCheckboxChange.prototype.element;
    /** @type {?} */
    MdbCheckboxChange.prototype.checked;
}
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent(_cdRef) {
        this._cdRef = _cdRef;
        this.defaultId = "mdb-checkbox-" + ++defaultIdNumber;
        this.id = this.defaultId;
        this.checked = false;
        this.filledIn = false;
        this.indeterminate = false;
        this.rounded = false;
        this.checkboxPosition = 'left';
        this.default = false;
        this.inline = false;
        this.change = new EventEmitter();
        this.checkboxClicked = new Subject();
        // Control Value Accessor Methods
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    CheckboxComponent.prototype.onLabelClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.checkboxClicked.next(true);
    };
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.onDocumentClick = /**
     * @return {?}
     */
    function () {
        this.checkboxClicked.next(false);
    };
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.indeterminate && !this.filledIn && !this.rounded) {
            this.inputEl.indeterminate = true;
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CheckboxComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('checked')) {
            this.checked = changes.checked.currentValue;
        }
    };
    Object.defineProperty(CheckboxComponent.prototype, "changeEvent", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var newChangeEvent = new MdbCheckboxChange();
            newChangeEvent.element = this;
            newChangeEvent.checked = this.checked;
            return newChangeEvent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return;
        }
        this.checked = !this.checked;
        this.indeterminate = false;
        this.onChange(this.checked);
        this._cdRef.markForCheck();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CheckboxComponent.prototype.onCheckboxClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.toggle();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CheckboxComponent.prototype.onCheckboxChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        event.stopPropagation();
        timer(0).subscribe((/**
         * @return {?}
         */
        function () { return _this.change.emit(_this.changeEvent); }));
    };
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.checkboxClicked.pipe(take(1)).subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (!val) {
                _this.onTouched();
            }
        }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CheckboxComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.checked = !!value;
        this._cdRef.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CheckboxComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    CheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-checkbox',
                    template: "<div\n  [ngClass]=\"{\n  'custom-control custom-checkbox': default,\n  'form-check': !default,\n  'custom-control-inline': inline,\n  'form-check-inline': inline && !default }\">\n  <input\n    #input\n    type=\"checkbox\"\n    class=\"custom-control-input\"\n    [ngClass]=\"{\n      'filled-in': filledIn || rounded,\n      'custom-control-input': default,\n      'form-check-input': !default }\"\n    [id]=\"id\"\n    [checked]=\"checked\"\n    [disabled]=\"disabled\"\n    [required]=\"required\"\n    [indeterminate]=\"indeterminate\"\n    [attr.name]=\"name\"\n    [attr.value]=\"value\"\n    [tabIndex]=\"tabIndex\"\n    (blur)=\"onBlur()\"\n    (click)=\"onCheckboxClick($event)\"\n    (change)=\"onCheckboxChange($event)\">\n  <label\n    [ngClass]=\"{\n      'custom-control-label': default,\n      'form-check-label': !default,\n      'label-before': checkboxPosition === 'right',\n      'checkbox-rounded': rounded,\n      'disabled': disabled }\"\n    [attr.for]=\"id\">\n    <ng-content></ng-content>\n  </label>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    providers: [CHECKBOX_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".form-check-label.label-before:after,.form-check-label.label-before:before{top:0!important;right:0!important;left:auto!important}.custom-control-label.label-before:after,.custom-control-label.label-before:before{top:.25rem!important;right:0!important;left:auto!important}.custom-control-label.label-before{position:absolute}.custom-control-inline .label-before{position:relative}.form-check-label.label-before{padding-left:0!important;padding-right:35px}.custom-control-label.label-before{padding-left:0!important;padding-right:25px!important}.form-check-input[type=checkbox]:checked+.label-before:before,label.btn input[type=checkbox]:checked+.label-before:before{top:-4px!important;right:10px!important;left:auto!important}.form-check-input[type=checkbox]:indeterminate+.label-before:before,label.btn input[type=checkbox]:indeterminate+.label-before:before{top:-11px!important;right:16px!important;left:auto!important}.form-check-input[type=checkbox].filled-in+.label-before:before,.form-check-input[type=checkbox].filled-in:checked+.label-before:before,label.btn input[type=checkbox].filled-in+.label-before:before,label.btn input[type=checkbox].filled-in:checked+.label-before:before{top:0!important;right:10px!important;left:auto!important}.form-check-input[type=checkbox].filled-in+.label-before:after,label.btn input[type=checkbox].filled-in+.label-before:after{top:0!important;left:auto!important}.checkbox-rounded:after{border-radius:50%!important}mdb-checkbox .form-check{padding-left:0!important}"]
                }] }
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    CheckboxComponent.propDecorators = {
        inputEl: [{ type: ViewChild, args: ['input', { static: true },] }],
        class: [{ type: Input }],
        id: [{ type: Input }],
        required: [{ type: Input }],
        name: [{ type: Input }],
        value: [{ type: Input }],
        checked: [{ type: Input }],
        filledIn: [{ type: Input }],
        indeterminate: [{ type: Input }],
        disabled: [{ type: Input }],
        rounded: [{ type: Input }],
        checkboxPosition: [{ type: Input }],
        default: [{ type: Input }],
        inline: [{ type: Input }],
        tabIndex: [{ type: Input }],
        change: [{ type: Output }],
        onLabelClick: [{ type: HostListener, args: ['click', ['$event'],] }],
        onDocumentClick: [{ type: HostListener, args: ['document:click',] }]
    };
    return CheckboxComponent;
}());
export { CheckboxComponent };
if (false) {
    /** @type {?} */
    CheckboxComponent.prototype.inputEl;
    /**
     * @type {?}
     * @private
     */
    CheckboxComponent.prototype.defaultId;
    /** @type {?} */
    CheckboxComponent.prototype.class;
    /** @type {?} */
    CheckboxComponent.prototype.id;
    /** @type {?} */
    CheckboxComponent.prototype.required;
    /** @type {?} */
    CheckboxComponent.prototype.name;
    /** @type {?} */
    CheckboxComponent.prototype.value;
    /** @type {?} */
    CheckboxComponent.prototype.checked;
    /** @type {?} */
    CheckboxComponent.prototype.filledIn;
    /** @type {?} */
    CheckboxComponent.prototype.indeterminate;
    /** @type {?} */
    CheckboxComponent.prototype.disabled;
    /** @type {?} */
    CheckboxComponent.prototype.rounded;
    /** @type {?} */
    CheckboxComponent.prototype.checkboxPosition;
    /** @type {?} */
    CheckboxComponent.prototype.default;
    /** @type {?} */
    CheckboxComponent.prototype.inline;
    /** @type {?} */
    CheckboxComponent.prototype.tabIndex;
    /** @type {?} */
    CheckboxComponent.prototype.change;
    /**
     * @type {?}
     * @private
     */
    CheckboxComponent.prototype.checkboxClicked;
    /** @type {?} */
    CheckboxComponent.prototype.onChange;
    /** @type {?} */
    CheckboxComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    CheckboxComponent.prototype._cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ib290c3RyYXAtbWQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2QixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUV0QyxNQUFNLEtBQU8sdUJBQXVCLEdBQVE7SUFDMUMsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSxpQkFBaUIsRUFBakIsQ0FBaUIsRUFBQztJQUNoRCxLQUFLLEVBQUUsSUFBSTtDQUNaOztJQUVHLGVBQWUsR0FBRyxDQUFDO0FBRXZCO0lBQUE7SUFHQSxDQUFDO0lBQUQsd0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLG9DQUEyQjs7SUFDM0Isb0NBQWlCOztBQUduQjtJQWdDRSwyQkFBb0IsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFyQnJDLGNBQVMsR0FBRyxrQkFBZ0IsRUFBRSxlQUFpQixDQUFDO1FBRy9DLE9BQUUsR0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBSTVCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0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QUFtRDs7Ozs7SUFFbkQsc0NBQXdEOztJQUV4RCxrQ0FBdUI7O0lBQ3ZCLCtCQUFxQzs7SUFDckMscUNBQTJCOztJQUMzQixpQ0FBc0I7O0lBQ3RCLGtDQUF1Qjs7SUFDdkIsb0NBQXlCOztJQUN6QixxQ0FBMEI7O0lBQzFCLDBDQUErQjs7SUFDL0IscUNBQTJCOztJQUMzQixvQ0FBeUI7O0lBQ3pCLDZDQUFtQzs7SUFDbkMsb0NBQXlCOztJQUN6QixtQ0FBd0I7O0lBQ3hCLHFDQUEwQjs7SUFFMUIsbUNBQTBGOzs7OztJQUUxRiw0Q0FBaUQ7O0lBZ0VqRCxxQ0FBMEI7O0lBQzFCLHNDQUFxQjs7Ozs7SUEvRFQsbUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YmplY3QsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY29uc3QgQ0hFQ0tCT1hfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENoZWNrYm94Q29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5sZXQgZGVmYXVsdElkTnVtYmVyID0gMDtcblxuZXhwb3J0IGNsYXNzIE1kYkNoZWNrYm94Q2hhbmdlIHtcbiAgZWxlbWVudDogQ2hlY2tib3hDb21wb25lbnQ7XG4gIGNoZWNrZWQ6IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjaGVja2JveC1tb2R1bGUuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtDSEVDS0JPWF9WQUxVRV9BQ0NFU1NPUl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dEVsOiBhbnk7XG5cbiAgcHJpdmF0ZSBkZWZhdWx0SWQgPSBgbWRiLWNoZWNrYm94LSR7KytkZWZhdWx0SWROdW1iZXJ9YDtcblxuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBpZDogc3RyaW5nID0gdGhpcy5kZWZhdWx0SWQ7XG4gIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNoZWNrZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgZmlsbGVkSW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgcm91bmRlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBjaGVja2JveFBvc2l0aW9uID0gJ2xlZnQnO1xuICBASW5wdXQoKSBkZWZhdWx0ID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlubGluZSA9IGZhbHNlO1xuICBASW5wdXQoKSB0YWJJbmRleDogbnVtYmVyO1xuXG4gIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxNZGJDaGVja2JveENoYW5nZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE1kYkNoZWNrYm94Q2hhbmdlPigpO1xuXG4gIHByaXZhdGUgY2hlY2tib3hDbGlja2VkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBvbkxhYmVsQ2xpY2soZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuY2hlY2tib3hDbGlja2VkLm5leHQodHJ1ZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycpXG4gIG9uRG9jdW1lbnRDbGljaygpIHtcbiAgICB0aGlzLmNoZWNrYm94Q2xpY2tlZC5uZXh0KGZhbHNlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmluZGV0ZXJtaW5hdGUgJiYgIXRoaXMuZmlsbGVkSW4gJiYgIXRoaXMucm91bmRlZCkge1xuICAgICAgdGhpcy5pbnB1dEVsLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnY2hlY2tlZCcpKSB7XG4gICAgICB0aGlzLmNoZWNrZWQgPSBjaGFuZ2VzLmNoZWNrZWQuY3VycmVudFZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjaGFuZ2VFdmVudCgpIHtcbiAgICBjb25zdCBuZXdDaGFuZ2VFdmVudCA9IG5ldyBNZGJDaGVja2JveENoYW5nZSgpO1xuICAgIG5ld0NoYW5nZUV2ZW50LmVsZW1lbnQgPSB0aGlzO1xuICAgIG5ld0NoYW5nZUV2ZW50LmNoZWNrZWQgPSB0aGlzLmNoZWNrZWQ7XG4gICAgcmV0dXJuIG5ld0NoYW5nZUV2ZW50O1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG4gICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLmNoZWNrZWQpO1xuXG4gICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBvbkNoZWNrYm94Q2xpY2soZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMudG9nZ2xlKCk7XG4gIH1cblxuICBvbkNoZWNrYm94Q2hhbmdlKGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aW1lcigwKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLmNoYW5nZUV2ZW50KSk7XG4gIH1cblxuICBvbkJsdXIoKSB7XG4gICAgdGhpcy5jaGVja2JveENsaWNrZWQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUodmFsID0+IHtcbiAgICAgIGlmICghdmFsKSB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBDb250cm9sIFZhbHVlIEFjY2Vzc29yIE1ldGhvZHNcbiAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY2hlY2tlZCA9ICEhdmFsdWU7XG4gICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==