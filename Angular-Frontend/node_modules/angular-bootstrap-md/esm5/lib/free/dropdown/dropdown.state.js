/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
var BsDropdownState = /** @class */ (function () {
    function BsDropdownState() {
        var _this = this;
        this.direction = 'down';
        this.isOpenChange = new EventEmitter();
        this.isDisabledChange = new EventEmitter();
        this.toggleClick = new EventEmitter();
        this.dropdownMenu = new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            _this.resolveDropdownMenu = resolve;
        }));
    }
    BsDropdownState.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BsDropdownState.ctorParameters = function () { return []; };
    return BsDropdownState;
}());
export { BsDropdownState };
if (false) {
    /** @type {?} */
    BsDropdownState.prototype.direction;
    /** @type {?} */
    BsDropdownState.prototype.autoClose;
    /** @type {?} */
    BsDropdownState.prototype.isOpenChange;
    /** @type {?} */
    BsDropdownState.prototype.isDisabledChange;
    /** @type {?} */
    BsDropdownState.prototype.toggleClick;
    /**
     * Content to be displayed as popover.
     * @type {?}
     */
    BsDropdownState.prototype.dropdownMenu;
    /** @type {?} */
    BsDropdownState.prototype.resolveDropdownMenu;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uc3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL2Ryb3Bkb3duL2Ryb3Bkb3duLnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd6RDtJQWNHO1FBQUEsaUJBSUM7UUFoQkYsY0FBUyxHQUFrQixNQUFNLENBQUM7UUFFbEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQzNDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDL0MsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBU3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxPQUFPOzs7O1FBQUMsVUFBQyxPQUFPO1lBQ3RDLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxPQUFPLENBQUM7UUFDckMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkFsQkgsVUFBVTs7OztJQW1CVixzQkFBQztDQUFBLEFBbkJGLElBbUJFO1NBbEJXLGVBQWU7OztJQUMxQixvQ0FBa0M7O0lBQ2xDLG9DQUFtQjs7SUFDbkIsdUNBQTJDOztJQUMzQywyQ0FBK0M7O0lBQy9DLHNDQUEwQzs7Ozs7SUFLekMsdUNBQTJDOztJQUMzQyw4Q0FBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzQ29tcG9uZW50UmVmIH0gZnJvbSAnLi4vdXRpbHMvY29tcG9uZW50LWxvYWRlci9icy1jb21wb25lbnQtcmVmLmNsYXNzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25TdGF0ZSB7XG4gIGRpcmVjdGlvbjogJ2Rvd24nIHwgJ3VwJyA9ICdkb3duJztcbiAgYXV0b0Nsb3NlOiBib29sZWFuO1xuICBpc09wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIGlzRGlzYWJsZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIHRvZ2dsZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBDb250ZW50IHRvIGJlIGRpc3BsYXllZCBhcyBwb3BvdmVyLlxuICAgKi9cbiAgIGRyb3Bkb3duTWVudTogUHJvbWlzZTxCc0NvbXBvbmVudFJlZjxhbnk+PjtcbiAgIHJlc29sdmVEcm9wZG93bk1lbnU6IChjb21wb25lbnRSZWY6IEJzQ29tcG9uZW50UmVmPGFueT4pID0+IHZvaWQ7XG5cbiAgIGNvbnN0cnVjdG9yKCkge1xuICAgICB0aGlzLmRyb3Bkb3duTWVudSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgdGhpcy5yZXNvbHZlRHJvcGRvd25NZW51ID0gcmVzb2x2ZTtcbiAgICAgfSk7XG4gICB9XG4gfVxuIl19