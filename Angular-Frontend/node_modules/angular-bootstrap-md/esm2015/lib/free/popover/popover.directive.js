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
export class PopoverDirective {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} _config
     * @param {?} cis
     * @param {?} _positionService
     */
    constructor(_elementRef, _renderer, _viewContainerRef, _config, cis, _positionService) {
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
    /**
     * Returns whether or not the popover is currently being shown
     * @return {?}
     */
    get isOpen() {
        return this._popover.isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    show() {
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
    }
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    hide() {
        if (this.isOpen) {
            this._popover.hide();
            this.isOpen = false;
        }
    }
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onclick(event) {
        if (this.triggers.toString().includes('focus')) {
            event.stopPropagation();
            this.show();
        }
    }
    /**
     * @return {?}
     */
    onblur() {
        if (this.triggers.toString().includes('focus') && this.isOpen) {
            this.hide();
        }
    }
    // fix(popover): popover with outsideClick='true' will now close after clicking in document on iPad Safari
    /**
     * @param {?} event
     * @return {?}
     */
    onTouchStart(event) {
        if (this.outsideClick && !event.target.classList.contains('popover-body')) {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._popover.listen({
            triggers: this.triggers,
            outsideClick: this.outsideClick,
            show: (/**
             * @return {?}
             */
            () => this.show()),
        });
    }
    /**
     * @return {?}
     */
    dispose() {
        this._popover.dispose();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._popover.dispose();
    }
}
PopoverDirective.decorators = [
    { type: Directive, args: [{ selector: '[mdbPopover]', exportAs: 'bs-mdbPopover' },] }
];
/** @nocollapse */
PopoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ViewContainerRef },
    { type: PopoverConfig },
    { type: ComponentLoaderFactory },
    { type: PositioningService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3BvcG92ZXIvcG9wb3Zlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBR1osU0FBUyxFQUNULFVBQVUsRUFFVixnQkFBZ0IsRUFDaEIsWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUU1RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7OztBQU05RSxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7Ozs7SUE2RDNCLFlBQ0UsV0FBdUIsRUFDdkIsU0FBb0IsRUFDcEIsaUJBQW1DLEVBQ25DLE9BQXNCLEVBQ3RCLEdBQTJCLEVBQ25CLGdCQUFvQztRQUFwQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW9CO1FBdkJyQyxvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQXdCNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHO2FBQ2hCLFlBQVksQ0FBNEIsV0FBVyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsQ0FBQzthQUNsRixPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUE5Q0QsSUFDVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELElBQVcsTUFBTSxDQUFDLEtBQWM7UUFDOUIsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDOzs7Ozs7SUF5Q00sSUFBSTtRQUNULElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDekIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztZQUMvQixTQUFTLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFO29CQUNKLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZTtpQkFDOUI7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZTtpQkFDOUI7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxRQUFRO2FBQ1YsTUFBTSxDQUFDLHlCQUF5QixDQUFDO2FBQ2pDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ2xCLFFBQVEsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDeEMsSUFBSSxDQUFDO1lBQ0osT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3hCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixLQUFLLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxZQUFZO1lBQ2pELGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzlELFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQy9DLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ3RELENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRW5CLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbkY7SUFDSCxDQUFDOzs7Ozs7SUFNTSxJQUFJO1FBQ1QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7OztJQU1NLE1BQU07UUFDWCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNwQjtRQUVELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7O0lBRWtDLE9BQU8sQ0FBQyxLQUFVO1FBQ25ELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDOUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQzs7OztJQUU2QixNQUFNO1FBQ2xDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUM3RCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7Ozs7OztJQUdnRCxZQUFZLENBQUMsS0FBVTtRQUN0RSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDekUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDOzs7O0lBRU0sUUFBUTtRQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ25CLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsSUFBSTs7O1lBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO1NBQ3hCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFTSxPQUFPO1FBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQWpMRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUU7Ozs7WUFkaEUsVUFBVTtZQURWLFNBQVM7WUFHVCxnQkFBZ0I7WUFHVCxhQUFhO1lBQ2Isc0JBQXNCO1lBR3RCLGtCQUFrQjs7OzZCQU94QixLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFJTCxLQUFLOytCQUlMLEtBQUs7MkJBQ0wsS0FBSzt3QkFJTCxLQUFLO3VCQUtMLEtBQUs7d0JBS0wsS0FBSztxQkFLTCxLQUFLOzhCQWFMLEtBQUs7MkJBQ0wsS0FBSztzQkFLTCxNQUFNO29CQUNOLE1BQU07dUJBS04sTUFBTTtxQkFDTixNQUFNO3NCQXFGTixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO3FCQU9oQyxZQUFZLFNBQUMsY0FBYzsyQkFPM0IsWUFBWSxTQUFDLHFCQUFxQixFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBM0ovQywwQ0FBdUM7O0lBQ3ZDLHFDQUFrQzs7SUFDbEMsdUNBQW9DOzs7OztJQUlwQyxzQ0FBc0Q7Ozs7O0lBSXRELDRDQUF5Qzs7SUFDekMsd0NBQXFDOzs7OztJQUlyQyxxQ0FBK0Q7Ozs7OztJQUsvRCxvQ0FBaUM7Ozs7OztJQUtqQyxxQ0FBa0M7O0lBa0JsQywyQ0FBZ0M7O0lBQ2hDLHdDQUE4Qjs7Ozs7SUFLOUIsbUNBQTRDOztJQUM1QyxpQ0FBMEM7Ozs7O0lBSzFDLG9DQUE2Qzs7SUFDN0Msa0NBQTJDOzs7OztJQUUzQyxvQ0FBNkQ7Ozs7O0lBUTNELDRDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgSG9zdExpc3RlbmVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvcG92ZXJDb25maWcgfSBmcm9tICcuL3BvcG92ZXIuY29uZmlnJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICcuLi91dGlscy9jb21wb25lbnQtbG9hZGVyL2NvbXBvbmVudC1sb2FkZXIuZmFjdG9yeSc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIgfSBmcm9tICcuLi91dGlscy9jb21wb25lbnQtbG9hZGVyL2NvbXBvbmVudC1sb2FkZXIuY2xhc3MnO1xuaW1wb3J0IHsgUG9wb3ZlckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vcG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJy4uL3V0aWxzL3Bvc2l0aW9uaW5nL3Bvc2l0aW9uaW5nLnNlcnZpY2UnO1xuXG4vKipcbiAqIEEgbGlnaHR3ZWlnaHQsIGV4dGVuc2libGUgZGlyZWN0aXZlIGZvciBmYW5jeSBwb3BvdmVyIGNyZWF0aW9uLlxuICovXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbWRiUG9wb3Zlcl0nLCBleHBvcnRBczogJ2JzLW1kYlBvcG92ZXInIH0pXG5leHBvcnQgY2xhc3MgUG9wb3ZlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcHVibGljIGNvbnRhaW5lckNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBib2R5Q2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIGhlYWRlckNsYXNzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBDb250ZW50IHRvIGJlIGRpc3BsYXllZCBhcyBwb3BvdmVyLlxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIG1kYlBvcG92ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG4gIC8qKlxuICAgKiBUaXRsZSBvZiBhIHBvcG92ZXIuXG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgbWRiUG9wb3ZlckhlYWRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgcG9wb3ZlclRpdGxlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBQbGFjZW1lbnQgb2YgYSBwb3BvdmVyLiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgcGxhY2VtZW50OiAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyBldmVudHMgdGhhdCBzaG91bGQgdHJpZ2dlci4gU3VwcG9ydHMgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZlxuICAgKiBldmVudCBuYW1lcy5cbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyB0cmlnZ2Vyczogc3RyaW5nO1xuICAvKipcbiAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSBwb3BvdmVyIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cbiAgICogQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgXCJib2R5XCIuXG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgY29udGFpbmVyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHBvcG92ZXIgaXMgY3VycmVudGx5IGJlaW5nIHNob3duXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZ2V0IGlzT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcG9wb3Zlci5pc1Nob3duO1xuICB9XG5cbiAgcHVibGljIHNldCBpc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKSBkeW5hbWljUG9zaXRpb24gPSB0cnVlO1xuICBASW5wdXQoKSBvdXRzaWRlQ2xpY2sgPSBmYWxzZTtcbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHBvcG92ZXIgaXMgc2hvd25cbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1vdXRwdXQtb24tcHJlZml4XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25TaG93bjogRXZlbnRFbWl0dGVyPGFueT47XG4gIEBPdXRwdXQoKSBwdWJsaWMgc2hvd246IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgcG9wb3ZlciBpcyBoaWRkZW5cbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1vdXRwdXQtb24tcHJlZml4XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25IaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBAT3V0cHV0KCkgcHVibGljIGhpZGRlbjogRXZlbnRFbWl0dGVyPGFueT47XG5cbiAgcHJpdmF0ZSBfcG9wb3ZlcjogQ29tcG9uZW50TG9hZGVyPFBvcG92ZXJDb250YWluZXJDb21wb25lbnQ+O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBfY29uZmlnOiBQb3BvdmVyQ29uZmlnLFxuICAgIGNpczogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSxcbiAgICBwcml2YXRlIF9wb3NpdGlvblNlcnZpY2U6IFBvc2l0aW9uaW5nU2VydmljZVxuICApIHtcbiAgICB0aGlzLl9wb3BvdmVyID0gY2lzXG4gICAgICAuY3JlYXRlTG9hZGVyPFBvcG92ZXJDb250YWluZXJDb21wb25lbnQ+KF9lbGVtZW50UmVmLCBfdmlld0NvbnRhaW5lclJlZiwgX3JlbmRlcmVyKVxuICAgICAgLnByb3ZpZGUoeyBwcm92aWRlOiBQb3BvdmVyQ29uZmlnLCB1c2VWYWx1ZTogX2NvbmZpZyB9KTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIF9jb25maWcpO1xuICAgIHRoaXMub25TaG93biA9IHRoaXMuX3BvcG92ZXIub25TaG93bjtcbiAgICB0aGlzLnNob3duID0gdGhpcy5fcG9wb3Zlci5vblNob3duO1xuICAgIHRoaXMub25IaWRkZW4gPSB0aGlzLl9wb3BvdmVyLm9uSGlkZGVuO1xuICAgIHRoaXMuaGlkZGVuID0gdGhpcy5fcG9wb3Zlci5vbkhpZGRlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBhbiBlbGVtZW504oCZcyBwb3BvdmVyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDigJxtYW51YWzigJ0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIHB1YmxpYyBzaG93KCk6IHZvaWQgfCBhbnkge1xuICAgIGlmICh0aGlzLl9wb3BvdmVyLmlzU2hvd24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9wb3NpdGlvblNlcnZpY2Uuc2V0T3B0aW9ucyh7XG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgZmxpcDoge1xuICAgICAgICAgIGVuYWJsZWQ6IHRoaXMuZHluYW1pY1Bvc2l0aW9uLFxuICAgICAgICB9LFxuICAgICAgICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAgICAgICBlbmFibGVkOiB0aGlzLmR5bmFtaWNQb3NpdGlvbixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0aGlzLl9wb3BvdmVyXG4gICAgICAuYXR0YWNoKFBvcG92ZXJDb250YWluZXJDb21wb25lbnQpXG4gICAgICAudG8odGhpcy5jb250YWluZXIpXG4gICAgICAucG9zaXRpb24oeyBhdHRhY2htZW50OiB0aGlzLnBsYWNlbWVudCB9KVxuICAgICAgLnNob3coe1xuICAgICAgICBjb250ZW50OiB0aGlzLm1kYlBvcG92ZXIsXG4gICAgICAgIHBsYWNlbWVudDogdGhpcy5wbGFjZW1lbnQsXG4gICAgICAgIHRpdGxlOiB0aGlzLm1kYlBvcG92ZXJIZWFkZXIgfHwgdGhpcy5wb3BvdmVyVGl0bGUsXG4gICAgICAgIGNvbnRhaW5lckNsYXNzOiB0aGlzLmNvbnRhaW5lckNsYXNzID8gdGhpcy5jb250YWluZXJDbGFzcyA6ICcnLFxuICAgICAgICBib2R5Q2xhc3M6IHRoaXMuYm9keUNsYXNzID8gdGhpcy5ib2R5Q2xhc3MgOiAnJyxcbiAgICAgICAgaGVhZGVyQ2xhc3M6IHRoaXMuaGVhZGVyQ2xhc3MgPyB0aGlzLmhlYWRlckNsYXNzIDogJycsXG4gICAgICB9KTtcbiAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG5cbiAgICBpZiAoIXRoaXMuZHluYW1pY1Bvc2l0aW9uKSB7XG4gICAgICB0aGlzLl9wb3NpdGlvblNlcnZpY2UuY2FsY1Bvc2l0aW9uKCk7XG4gICAgICB0aGlzLl9wb3NpdGlvblNlcnZpY2UuZGVsZXRlUG9zaXRpb25FbGVtZW50KHRoaXMuX3BvcG92ZXIuX2NvbXBvbmVudFJlZi5sb2NhdGlvbik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbiBlbGVtZW504oCZcyBwb3BvdmVyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDigJxtYW51YWzigJ0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIHB1YmxpYyBoaWRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgdGhpcy5fcG9wb3Zlci5oaWRlKCk7XG4gICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIGFuIGVsZW1lbnTigJlzIHBvcG92ZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIOKAnG1hbnVhbOKAnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSBwb3BvdmVyLlxuICAgKi9cbiAgcHVibGljIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNob3coKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgb25jbGljayhldmVudDogYW55KSB7XG4gICAgaWYgKHRoaXMudHJpZ2dlcnMudG9TdHJpbmcoKS5pbmNsdWRlcygnZm9jdXMnKSkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6Y2xpY2snKSBvbmJsdXIoKSB7XG4gICAgaWYgKHRoaXMudHJpZ2dlcnMudG9TdHJpbmcoKS5pbmNsdWRlcygnZm9jdXMnKSAmJiB0aGlzLmlzT3Blbikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gZml4KHBvcG92ZXIpOiBwb3BvdmVyIHdpdGggb3V0c2lkZUNsaWNrPSd0cnVlJyB3aWxsIG5vdyBjbG9zZSBhZnRlciBjbGlja2luZyBpbiBkb2N1bWVudCBvbiBpUGFkIFNhZmFyaVxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDp0b3VjaHN0YXJ0JywgWyckZXZlbnQnXSkgb25Ub3VjaFN0YXJ0KGV2ZW50OiBhbnkpIHtcbiAgICBpZiAodGhpcy5vdXRzaWRlQ2xpY2sgJiYgIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcG92ZXItYm9keScpKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogYW55IHtcbiAgICB0aGlzLl9wb3BvdmVyLmxpc3Rlbih7XG4gICAgICB0cmlnZ2VyczogdGhpcy50cmlnZ2VycyxcbiAgICAgIG91dHNpZGVDbGljazogdGhpcy5vdXRzaWRlQ2xpY2ssXG4gICAgICBzaG93OiAoKSA9PiB0aGlzLnNob3coKSxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNwb3NlKCkge1xuICAgIHRoaXMuX3BvcG92ZXIuZGlzcG9zZSgpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IGFueSB7XG4gICAgdGhpcy5fcG9wb3Zlci5kaXNwb3NlKCk7XG4gIH1cbn1cbiJdfQ==