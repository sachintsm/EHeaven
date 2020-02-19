/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Output, EventEmitter, ElementRef } from '@angular/core';
export class MdbTableRowDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.rowCreated = new EventEmitter();
        this.rowRemoved = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.rowCreated.emit({ created: true, el: this.el.nativeElement });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.rowRemoved.emit({ removed: true });
    }
}
MdbTableRowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbTableRow]'
            },] }
];
/** @nocollapse */
MdbTableRowDirective.ctorParameters = () => [
    { type: ElementRef }
];
MdbTableRowDirective.propDecorators = {
    rowCreated: [{ type: Output }],
    rowRemoved: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    MdbTableRowDirective.prototype.rowCreated;
    /** @type {?} */
    MdbTableRowDirective.prototype.rowRemoved;
    /**
     * @type {?}
     * @private
     */
    MdbTableRowDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLXJvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3RhYmxlcy9kaXJlY3RpdmVzL21kYi10YWJsZS1yb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQXFCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUsvRixNQUFNLE9BQU8sb0JBQW9COzs7O0lBSy9CLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBSHhCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3JDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBRy9DLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7YUFDMUI7Ozs7WUFKNEQsVUFBVTs7O3lCQU9wRSxNQUFNO3lCQUNOLE1BQU07Ozs7SUFEUCwwQ0FBK0M7O0lBQy9DLDBDQUErQzs7Ozs7SUFFbkMsa0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPbkRlc3Ryb3ksIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYlRhYmxlUm93XSdcbn0pXG5leHBvcnQgY2xhc3MgTWRiVGFibGVSb3dEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgQE91dHB1dCgpIHJvd0NyZWF0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHJvd1JlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJvd0NyZWF0ZWQuZW1pdCh7IGNyZWF0ZWQ6IHRydWUsIGVsOiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnJvd1JlbW92ZWQuZW1pdCh7IHJlbW92ZWQ6IHRydWUgfSk7XG4gIH1cblxufVxuIl19