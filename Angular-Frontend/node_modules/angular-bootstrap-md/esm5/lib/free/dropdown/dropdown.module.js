/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ComponentLoaderFactory } from '../utils/component-loader/component-loader.factory';
import { PositioningService } from '../utils/positioning/positioning.service';
import { BsDropdownContainerComponent } from './dropdown-container.component';
import { BsDropdownMenuDirective } from './dropdown-menu.directive';
import { BsDropdownToggleDirective } from './dropdown-toggle.directive';
import { BsDropdownConfig } from './dropdown.config';
import { BsDropdownDirective } from './dropdown.directive';
import { BsDropdownState } from './dropdown.state';
var DropdownModule = /** @class */ (function () {
    function DropdownModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    DropdownModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: DropdownModule, providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsDropdownState,
                { provide: BsDropdownConfig, useValue: config ? config : { autoClose: true } }
            ]
        };
    };
    DropdownModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        BsDropdownMenuDirective,
                        BsDropdownToggleDirective,
                        BsDropdownContainerComponent,
                        BsDropdownDirective
                    ],
                    exports: [
                        BsDropdownMenuDirective,
                        BsDropdownToggleDirective,
                        BsDropdownDirective
                    ],
                    entryComponents: [BsDropdownContainerComponent]
                },] }
    ];
    return DropdownModule;
}());
export { DropdownModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ib290c3RyYXAtbWQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRTVGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXJELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVuRDtJQUFBO0lBeUJBLENBQUM7Ozs7O0lBVmUsc0JBQU87Ozs7SUFBckIsVUFBc0IsTUFBWTtRQUNoQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUU7Z0JBQ3JDLHNCQUFzQjtnQkFDdEIsa0JBQWtCO2dCQUNsQixlQUFlO2dCQUNmLEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLEVBQUM7YUFDekU7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBeEJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ2QsdUJBQXVCO3dCQUN2Qix5QkFBeUI7d0JBQ3pCLDRCQUE0Qjt3QkFDNUIsbUJBQW1CO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1QsdUJBQXVCO3dCQUN2Qix5QkFBeUI7d0JBQ3pCLG1CQUFtQjtxQkFDbEI7b0JBQ0QsZUFBZSxFQUFFLENBQUMsNEJBQTRCLENBQUM7aUJBQ2hEOztJQVlELHFCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0FYWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICcuLi91dGlscy9jb21wb25lbnQtbG9hZGVyL2NvbXBvbmVudC1sb2FkZXIuZmFjdG9yeSc7XG5cbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJy4uL3V0aWxzL3Bvc2l0aW9uaW5nL3Bvc2l0aW9uaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQnNEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZHJvcGRvd24tY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0Ryb3Bkb3duTWVudURpcmVjdGl2ZSB9IGZyb20gJy4vZHJvcGRvd24tbWVudS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQnNEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4vZHJvcGRvd24tdG9nZ2xlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCc0Ryb3Bkb3duQ29uZmlnIH0gZnJvbSAnLi9kcm9wZG93bi5jb25maWcnO1xuXG5pbXBvcnQgeyBCc0Ryb3Bkb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9kcm9wZG93bi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQnNEcm9wZG93blN0YXRlIH0gZnJvbSAnLi9kcm9wZG93bi5zdGF0ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICBCc0Ryb3Bkb3duTWVudURpcmVjdGl2ZSxcbiAgQnNEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSxcbiAgQnNEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudCxcbiAgQnNEcm9wZG93bkRpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gIEJzRHJvcGRvd25NZW51RGlyZWN0aXZlLFxuICBCc0Ryb3Bkb3duVG9nZ2xlRGlyZWN0aXZlLFxuICBCc0Ryb3Bkb3duRGlyZWN0aXZlXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0JzRHJvcGRvd25Db250YWluZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duTW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRHJvcGRvd25Nb2R1bGUsIHByb3ZpZGVyczogW1xuICAgICAgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSxcbiAgICAgIFBvc2l0aW9uaW5nU2VydmljZSxcbiAgICAgIEJzRHJvcGRvd25TdGF0ZSxcbiAgICAgIHtwcm92aWRlOiBCc0Ryb3Bkb3duQ29uZmlnLCB1c2VWYWx1ZTogY29uZmlnID8gY29uZmlnIDoge2F1dG9DbG9zZTogdHJ1ZX19XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19