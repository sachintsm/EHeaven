/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter, Renderer2, ElementRef, ViewContainerRef, HostListener, } from '@angular/core';
import { PopoverConfig } from './popover.config';
import { ComponentLoaderFactory } from '../utils/component-loader/component-loader.factory';
import { PopoverContainerComponent } from './popover-container.component';
import { PositioningService } from '../utils/positioning/positioning.service';
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
var PopoverDirective = /** @class */ (function () {
    function PopoverDirective(_elementRef, _renderer, _viewContainerRef, _config, cis, _positionService) {
        this._positionService = _positionService;
        this.dynamicPosition = true;
        this.outsideClick = false;
        this._popover = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: PopoverConfig, useValue: _config });
        Object.assign(this, _config);
        this.onShown = this._popover.onShown;
        this.shown = this._popover.onShown;
        this.onHidden = this._popover.onHidden;
        this.hidden = this._popover.onHidden;
    }
    Object.defineProperty(PopoverDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: /**
         * Returns whether or not the popover is currently being shown
         * @return {?}
         */
        function () {
            return this._popover.isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    PopoverDirective.prototype.show = /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        if (this._popover.isShown) {
            return;
        }
        this._positionService.setOptions({
            modifiers: {
                flip: {
                    enabled: this.dynamicPosition,
                },
                preventOverflow: {
                    enabled: this.dynamicPosition,
                },
            },
        });
        this._popover
            .attach(PopoverContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({
            content: this.mdbPopover,
            placement: this.placement,
            title: this.mdbPopoverHeader || this.popoverTitle,
            containerClass: this.containerClass ? this.containerClass : '',
            bodyClass: this.bodyClass ? this.bodyClass : '',
            headerClass: this.headerClass ? this.headerClass : '',
        });
        this.isOpen = true;
        if (!this.dynamicPosition) {
            this._positionService.calcPosition();
            this._positionService.deletePositionElement(this._popover._componentRef.location);
        }
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    PopoverDirective.prototype.hide = /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            this._popover.hide();
            this.isOpen = false;
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    PopoverDirective.prototype.toggle = /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PopoverDirective.prototype.onclick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.triggers.toString().includes('focus')) {
            event.stopPropagation();
            this.show();
        }
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.onblur = /**
     * @return {?}
     */
    function () {
        if (this.triggers.toString().includes('focus') && this.isOpen) {
            this.hide();
        }
    };
    // fix(popover): popover with outsideClick='true' will now close after clicking in document on iPad Safari
    // fix(popover): popover with outsideClick='true' will now close after clicking in document on iPad Safari
    /**
     * @param {?} event
     * @return {?}
     */
    PopoverDirective.prototype.onTouchStart = 
    // fix(popover): popover with outsideClick='true' will now close after clicking in document on iPad Safari
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.outsideClick && !event.target.classList.contains('popover-body')) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._popover.listen({
            triggers: this.triggers,
            outsideClick: this.outsideClick,
            show: (/**
             * @return {?}
             */
            function () { return _this.show(); }),
        });
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.dispose = /**
     * @return {?}
     */
    function () {
        this._popover.dispose();
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._popover.dispose();
    };
    PopoverDirective.decorators = [
        { type: Directive, args: [{ selector: '[mdbPopover]', exportAs: 'bs-mdbPopover' },] }
    ];
    /** @nocollapse */
    PopoverDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ViewContainerRef },
        { type: PopoverConfig },
        { type: ComponentLoaderFactory },
        { type: PositioningService }
    ]; };
    PopoverDirective.propDecorators = {
        containerClass: [{ type: Input }],
        bodyClass: [{ type: Input }],
        headerClass: [{ type: Input }],
        mdbPopover: [{ type: Input }],
        mdbPopoverHeader: [{ type: Input }],
        popoverTitle: [{ type: Input }],
        placement: [{ type: Input }],
        triggers: [{ type: Input }],
        container: [{ type: Input }],
        isOpen: [{ type: Input }],
        dynamicPosition: [{ type: Input }],
        outsideClick: [{ type: Input }],
        onShown: [{ type: Output }],
        shown: [{ type: Output }],
        onHidden: [{ type: Output }],
        hidden: [{ type: Output }],
        onclick: [{ type: HostListener, args: ['click', ['$event'],] }],
        onblur: [{ type: HostListener, args: ['window:click',] }],
        onTouchStart: [{ type: HostListener, args: ['document:touchstart', ['$event'],] }]
    };
    return PopoverDirective;
}());
export { PopoverDirective };
if (false) {
    /** @type {?} */
    PopoverDirective.prototype.containerClass;
    /** @type {?} */
    PopoverDirective.prototype.bodyClass;
    /** @type {?} */
    PopoverDirective.prototype.headerClass;
    /**
     * Content to be displayed as popover.
     * @type {?}
     */
    PopoverDirective.prototype.mdbPopover;
    /**
     * Title of a popover.
     * @type {?}
     */
    PopoverDirective.prototype.mdbPopoverHeader;
    /** @type {?} */
    PopoverDirective.prototype.popoverTitle;
    /**
     * Placement of a popover. Accepts: "top", "bottom", "left", "right"
     * @type {?}
     */
    PopoverDirective.prototype.placement;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     * @type {?}
     */
    PopoverDirective.prototype.triggers;
    /**
     * A selector specifying the element the popover should be appended to.
     * Currently only supports "body".
     * @type {?}
     */
    PopoverDirective.prototype.container;
    /** @type {?} */
    PopoverDirective.prototype.dynamicPosition;
    /** @type {?} */
    PopoverDirective.prototype.outsideClick;
    /**
     * Emits an event when the popover is shown
     * @type {?}
     */
    PopoverDirective.prototype.onShown;
    /** @type {?} */
    PopoverDirective.prototype.shown;
    /**
     * Emits an event when the popover is hidden
     * @type {?}
     */
    PopoverDirective.prototype.onHidden;
    /** @type {?} */
    PopoverDirective.prototype.hidden;
    /**
     * @type {?}
     * @private
     */
    PopoverDirective.prototype._popover;
    /**
     * @type {?}
     * @private
     */
    PopoverDirective.prototype._positionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3BvcG92ZXIvcG9wb3Zlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBR1osU0FBUyxFQUNULFVBQVUsRUFFVixnQkFBZ0IsRUFDaEIsWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUU1RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7OztBQUs5RTtJQThERSwwQkFDRSxXQUF1QixFQUN2QixTQUFvQixFQUNwQixpQkFBbUMsRUFDbkMsT0FBc0IsRUFDdEIsR0FBMkIsRUFDbkIsZ0JBQW9DO1FBQXBDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBb0I7UUF2QnJDLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBd0I1QixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUc7YUFDaEIsWUFBWSxDQUE0QixXQUFXLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxDQUFDO2FBQ2xGLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNyQyxJQUFJ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QVM7Z0JBR1QsZ0JBQWdCO2dCQUdULGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUd0QixrQkFBa0I7OztpQ0FPeEIsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUs7NkJBSUwsS0FBSzttQ0FJTCxLQUFLOytCQUNMLEtBQUs7NEJBSUwsS0FBSzsyQkFLTCxLQUFLOzRCQUtMLEtBQUs7eUJBS0wsS0FBSztrQ0FhTCxLQUFLOytCQUNMLEtBQUs7MEJBS0wsTUFBTTt3QkFDTixNQUFNOzJCQUtOLE1BQU07eUJBQ04sTUFBTTswQkFxRk4sWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzt5QkFPaEMsWUFBWSxTQUFDLGNBQWM7K0JBTzNCLFlBQVksU0FBQyxxQkFBcUIsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFxQmpELHVCQUFDO0NBQUEsQUFsTEQsSUFrTEM7U0FqTFksZ0JBQWdCOzs7SUFDM0IsMENBQXVDOztJQUN2QyxxQ0FBa0M7O0lBQ2xDLHVDQUFvQzs7Ozs7SUFJcEMsc0NBQXNEOzs7OztJQUl0RCw0Q0FBeUM7O0lBQ3pDLHdDQUFxQzs7Ozs7SUFJckMscUNBQStEOzs7Ozs7SUFLL0Qsb0NBQWlDOzs7Ozs7SUFLakMscUNBQWtDOztJQWtCbEMsMkNBQWdDOztJQUNoQyx3Q0FBOEI7Ozs7O0lBSzlCLG1DQUE0Qzs7SUFDNUMsaUNBQTBDOzs7OztJQUsxQyxvQ0FBNkM7O0lBQzdDLGtDQUEyQzs7Ozs7SUFFM0Msb0NBQTZEOzs7OztJQVEzRCw0Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb3BvdmVyQ29uZmlnIH0gZnJvbSAnLi9wb3BvdmVyLmNvbmZpZyc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnLi4vdXRpbHMvY29tcG9uZW50LWxvYWRlci9jb21wb25lbnQtbG9hZGVyLmZhY3RvcnknO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyIH0gZnJvbSAnLi4vdXRpbHMvY29tcG9uZW50LWxvYWRlci9jb21wb25lbnQtbG9hZGVyLmNsYXNzJztcbmltcG9ydCB7IFBvcG92ZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3BvcG92ZXItY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UgfSBmcm9tICcuLi91dGlscy9wb3NpdGlvbmluZy9wb3NpdGlvbmluZy5zZXJ2aWNlJztcblxuLyoqXG4gKiBBIGxpZ2h0d2VpZ2h0LCBleHRlbnNpYmxlIGRpcmVjdGl2ZSBmb3IgZmFuY3kgcG9wb3ZlciBjcmVhdGlvbi5cbiAqL1xuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW21kYlBvcG92ZXJdJywgZXhwb3J0QXM6ICdicy1tZGJQb3BvdmVyJyB9KVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHB1YmxpYyBjb250YWluZXJDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgYm9keUNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJDbGFzczogc3RyaW5nO1xuICAvKipcbiAgICogQ29udGVudCB0byBiZSBkaXNwbGF5ZWQgYXMgcG9wb3Zlci5cbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBtZGJQb3BvdmVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKipcbiAgICogVGl0bGUgb2YgYSBwb3BvdmVyLlxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIG1kYlBvcG92ZXJIZWFkZXI6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIHBvcG92ZXJUaXRsZTogc3RyaW5nO1xuICAvKipcbiAgICogUGxhY2VtZW50IG9mIGEgcG9wb3Zlci4gQWNjZXB0czogXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIlxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIHBsYWNlbWVudDogJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgZXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIuIFN1cHBvcnRzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2ZcbiAgICogZXZlbnQgbmFtZXMuXG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgdHJpZ2dlcnM6IHN0cmluZztcbiAgLyoqXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgcG9wb3ZlciBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIFwiYm9keVwiLlxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIGNvbnRhaW5lcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBwb3BvdmVyIGlzIGN1cnJlbnRseSBiZWluZyBzaG93blxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGdldCBpc09wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcG92ZXIuaXNTaG93bjtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KCkgZHluYW1pY1Bvc2l0aW9uID0gdHJ1ZTtcbiAgQElucHV0KCkgb3V0c2lkZUNsaWNrID0gZmFsc2U7XG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBwb3BvdmVyIGlzIHNob3duXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW9uLXByZWZpeFxuICBAT3V0cHV0KCkgcHVibGljIG9uU2hvd246IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBAT3V0cHV0KCkgcHVibGljIHNob3duOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHBvcG92ZXIgaXMgaGlkZGVuXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW9uLXByZWZpeFxuICBAT3V0cHV0KCkgcHVibGljIG9uSGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQE91dHB1dCgpIHB1YmxpYyBoaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gIHByaXZhdGUgX3BvcG92ZXI6IENvbXBvbmVudExvYWRlcjxQb3BvdmVyQ29udGFpbmVyQ29tcG9uZW50PjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgX2NvbmZpZzogUG9wb3ZlckNvbmZpZyxcbiAgICBjaXM6IENvbXBvbmVudExvYWRlckZhY3RvcnksXG4gICAgcHJpdmF0ZSBfcG9zaXRpb25TZXJ2aWNlOiBQb3NpdGlvbmluZ1NlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5fcG9wb3ZlciA9IGNpc1xuICAgICAgLmNyZWF0ZUxvYWRlcjxQb3BvdmVyQ29udGFpbmVyQ29tcG9uZW50PihfZWxlbWVudFJlZiwgX3ZpZXdDb250YWluZXJSZWYsIF9yZW5kZXJlcilcbiAgICAgIC5wcm92aWRlKHsgcHJvdmlkZTogUG9wb3ZlckNvbmZpZywgdXNlVmFsdWU6IF9jb25maWcgfSk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBfY29uZmlnKTtcbiAgICB0aGlzLm9uU2hvd24gPSB0aGlzLl9wb3BvdmVyLm9uU2hvd247XG4gICAgdGhpcy5zaG93biA9IHRoaXMuX3BvcG92ZXIub25TaG93bjtcbiAgICB0aGlzLm9uSGlkZGVuID0gdGhpcy5fcG9wb3Zlci5vbkhpZGRlbjtcbiAgICB0aGlzLmhpZGRlbiA9IHRoaXMuX3BvcG92ZXIub25IaWRkZW47XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYW4gZWxlbWVudOKAmXMgcG9wb3Zlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIHBvcG92ZXIuXG4gICAqL1xuICBwdWJsaWMgc2hvdygpOiB2b2lkIHwgYW55IHtcbiAgICBpZiAodGhpcy5fcG9wb3Zlci5pc1Nob3duKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcG9zaXRpb25TZXJ2aWNlLnNldE9wdGlvbnMoe1xuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIGZsaXA6IHtcbiAgICAgICAgICBlbmFibGVkOiB0aGlzLmR5bmFtaWNQb3NpdGlvbixcbiAgICAgICAgfSxcbiAgICAgICAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgICAgICAgZW5hYmxlZDogdGhpcy5keW5hbWljUG9zaXRpb24sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgdGhpcy5fcG9wb3ZlclxuICAgICAgLmF0dGFjaChQb3BvdmVyQ29udGFpbmVyQ29tcG9uZW50KVxuICAgICAgLnRvKHRoaXMuY29udGFpbmVyKVxuICAgICAgLnBvc2l0aW9uKHsgYXR0YWNobWVudDogdGhpcy5wbGFjZW1lbnQgfSlcbiAgICAgIC5zaG93KHtcbiAgICAgICAgY29udGVudDogdGhpcy5tZGJQb3BvdmVyLFxuICAgICAgICBwbGFjZW1lbnQ6IHRoaXMucGxhY2VtZW50LFxuICAgICAgICB0aXRsZTogdGhpcy5tZGJQb3BvdmVySGVhZGVyIHx8IHRoaXMucG9wb3ZlclRpdGxlLFxuICAgICAgICBjb250YWluZXJDbGFzczogdGhpcy5jb250YWluZXJDbGFzcyA/IHRoaXMuY29udGFpbmVyQ2xhc3MgOiAnJyxcbiAgICAgICAgYm9keUNsYXNzOiB0aGlzLmJvZHlDbGFzcyA/IHRoaXMuYm9keUNsYXNzIDogJycsXG4gICAgICAgIGhlYWRlckNsYXNzOiB0aGlzLmhlYWRlckNsYXNzID8gdGhpcy5oZWFkZXJDbGFzcyA6ICcnLFxuICAgICAgfSk7XG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuXG4gICAgaWYgKCF0aGlzLmR5bmFtaWNQb3NpdGlvbikge1xuICAgICAgdGhpcy5fcG9zaXRpb25TZXJ2aWNlLmNhbGNQb3NpdGlvbigpO1xuICAgICAgdGhpcy5fcG9zaXRpb25TZXJ2aWNlLmRlbGV0ZVBvc2l0aW9uRWxlbWVudCh0aGlzLl9wb3BvdmVyLl9jb21wb25lbnRSZWYubG9jYXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgYW4gZWxlbWVudOKAmXMgcG9wb3Zlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIHBvcG92ZXIuXG4gICAqL1xuICBwdWJsaWMgaGlkZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuX3BvcG92ZXIuaGlkZSgpO1xuICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyBhbiBlbGVtZW504oCZcyBwb3BvdmVyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDigJxtYW51YWzigJ0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIHB1YmxpYyB0b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICByZXR1cm4gdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zaG93KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIG9uY2xpY2soZXZlbnQ6IGFueSkge1xuICAgIGlmICh0aGlzLnRyaWdnZXJzLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ2ZvY3VzJykpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmNsaWNrJykgb25ibHVyKCkge1xuICAgIGlmICh0aGlzLnRyaWdnZXJzLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ2ZvY3VzJykgJiYgdGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZpeChwb3BvdmVyKTogcG9wb3ZlciB3aXRoIG91dHNpZGVDbGljaz0ndHJ1ZScgd2lsbCBub3cgY2xvc2UgYWZ0ZXIgY2xpY2tpbmcgaW4gZG9jdW1lbnQgb24gaVBhZCBTYWZhcmlcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6dG91Y2hzdGFydCcsIFsnJGV2ZW50J10pIG9uVG91Y2hTdGFydChldmVudDogYW55KSB7XG4gICAgaWYgKHRoaXMub3V0c2lkZUNsaWNrICYmICFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3BvdmVyLWJvZHknKSkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IGFueSB7XG4gICAgdGhpcy5fcG9wb3Zlci5saXN0ZW4oe1xuICAgICAgdHJpZ2dlcnM6IHRoaXMudHJpZ2dlcnMsXG4gICAgICBvdXRzaWRlQ2xpY2s6IHRoaXMub3V0c2lkZUNsaWNrLFxuICAgICAgc2hvdzogKCkgPT4gdGhpcy5zaG93KCksXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl9wb3BvdmVyLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiBhbnkge1xuICAgIHRoaXMuX3BvcG92ZXIuZGlzcG9zZSgpO1xuICB9XG59XG4iXX0=