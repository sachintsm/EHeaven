/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector, NgZone } from '@angular/core';
import { ComponentLoader } from './component-loader.class';
import { PositioningService } from './../positioning/positioning.service';
var ComponentLoaderFactory = /** @class */ (function () {
    function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
    }
    /**
     * @template T
     * @param {?} _elementRef
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @return {?}
     */
    ComponentLoaderFactory.prototype.createLoader = /**
     * @template T
     * @param {?} _elementRef
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @return {?}
     */
    function (_elementRef, _viewContainerRef, _renderer) {
        return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    };
    ComponentLoaderFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ComponentLoaderFactory.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: NgZone },
        { type: Injector },
        { type: PositioningService },
        { type: ApplicationRef }
    ]; };
    return ComponentLoaderFactory;
}());
export { ComponentLoaderFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ComponentLoaderFactory.prototype._componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    ComponentLoaderFactory.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    ComponentLoaderFactory.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    ComponentLoaderFactory.prototype._posService;
    /**
     * @type {?}
     * @private
     */
    ComponentLoaderFactory.prototype._applicationRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxvYWRlci5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ib290c3RyYXAtbWQvIiwic291cmNlcyI6WyJsaWIvZnJlZS91dGlscy9jb21wb25lbnQtbG9hZGVyL2NvbXBvbmVudC1sb2FkZXIuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGNBQWMsRUFBRSx3QkFBd0IsRUFBYyxVQUFVLEVBQUUsUUFBUSxFQUMxRSxNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTFFO0lBRUUsZ0NBQW9CLHlCQUFtRCxFQUNuRCxPQUFlLEVBQ2YsU0FBbUIsRUFDbkIsV0FBK0IsRUFDL0IsZUFBK0I7UUFKL0IsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEwQjtRQUNuRCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFDL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO0lBQUcsQ0FBQzs7Ozs7Ozs7SUFFdkQsNkNBQVk7Ozs7Ozs7SUFBWixVQUFnQixXQUF1QixFQUN2QixpQkFBbUMsRUFDbkMsU0FBb0I7UUFDbEMsT0FBTyxJQUFJLGVBQWUsQ0FDeEIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxXQUFXLEVBQ1gsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMseUJBQXlCLEVBQzlCLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLGVBQWUsRUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FDakIsQ0FBQztJQUNKLENBQUM7O2dCQXJCRixVQUFVOzs7O2dCQU5PLHdCQUF3QjtnQkFDeEMsTUFBTTtnQkFENEQsUUFBUTtnQkFJbkUsa0JBQWtCO2dCQUp6QixjQUFjOztJQTRCaEIsNkJBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQXJCWSxzQkFBc0I7Ozs7OztJQUNyQiwyREFBMkQ7Ozs7O0lBQzNELHlDQUF1Qjs7Ozs7SUFDdkIsMkNBQTJCOzs7OztJQUMzQiw2Q0FBdUM7Ozs7O0lBQ3ZDLGlEQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEVsZW1lbnRSZWYsIEluamVjdGFibGUsIEluamVjdG9yLFxuICBOZ1pvbmUsIFJlbmRlcmVyMiwgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlciB9IGZyb20gJy4vY29tcG9uZW50LWxvYWRlci5jbGFzcyc7XG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UgfSBmcm9tICcuLy4uL3Bvc2l0aW9uaW5nL3Bvc2l0aW9uaW5nLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgICAgICAgICAgICBwcml2YXRlIF9wb3NTZXJ2aWNlOiBQb3NpdGlvbmluZ1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2FwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZikge31cblxuICBjcmVhdGVMb2FkZXI8VD4oX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgICBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyKTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcbiAgICByZXR1cm4gbmV3IENvbXBvbmVudExvYWRlcjxUPihcbiAgICAgIF92aWV3Q29udGFpbmVyUmVmLFxuICAgICAgX3JlbmRlcmVyLFxuICAgICAgX2VsZW1lbnRSZWYsXG4gICAgICB0aGlzLl9pbmplY3RvcixcbiAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgIHRoaXMuX25nWm9uZSxcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVmLFxuICAgICAgdGhpcy5fcG9zU2VydmljZVxuICAgICk7XG4gIH1cbn1cbiJdfQ==