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
export class DropdownModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: DropdownModule, providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsDropdownState,
                { provide: BsDropdownConfig, useValue: config ? config : { autoClose: true } }
            ]
        };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ib290c3RyYXAtbWQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRTVGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXJELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQWdCbkQsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBQ2xCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBWTtRQUNoQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUU7Z0JBQ3JDLHNCQUFzQjtnQkFDdEIsa0JBQWtCO2dCQUNsQixlQUFlO2dCQUNmLEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLEVBQUM7YUFDekU7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBeEJGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ2QsdUJBQXVCO29CQUN2Qix5QkFBeUI7b0JBQ3pCLDRCQUE0QjtvQkFDNUIsbUJBQW1CO2lCQUNsQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1QsdUJBQXVCO29CQUN2Qix5QkFBeUI7b0JBQ3pCLG1CQUFtQjtpQkFDbEI7Z0JBQ0QsZUFBZSxFQUFFLENBQUMsNEJBQTRCLENBQUM7YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJy4uL3V0aWxzL2NvbXBvbmVudC1sb2FkZXIvY29tcG9uZW50LWxvYWRlci5mYWN0b3J5JztcblxuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnLi4vdXRpbHMvcG9zaXRpb25pbmcvcG9zaXRpb25pbmcuc2VydmljZSc7XG5pbXBvcnQgeyBCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJzRHJvcGRvd25NZW51RGlyZWN0aXZlIH0gZnJvbSAnLi9kcm9wZG93bi1tZW51LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCc0Ryb3Bkb3duVG9nZ2xlRGlyZWN0aXZlIH0gZnJvbSAnLi9kcm9wZG93bi10b2dnbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEJzRHJvcGRvd25Db25maWcgfSBmcm9tICcuL2Ryb3Bkb3duLmNvbmZpZyc7XG5cbmltcG9ydCB7IEJzRHJvcGRvd25EaXJlY3RpdmUgfSBmcm9tICcuL2Ryb3Bkb3duLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCc0Ryb3Bkb3duU3RhdGUgfSBmcm9tICcuL2Ryb3Bkb3duLnN0YXRlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gIEJzRHJvcGRvd25NZW51RGlyZWN0aXZlLFxuICBCc0Ryb3Bkb3duVG9nZ2xlRGlyZWN0aXZlLFxuICBCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50LFxuICBCc0Ryb3Bkb3duRGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgQnNEcm9wZG93bk1lbnVEaXJlY3RpdmUsXG4gIEJzRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUsXG4gIEJzRHJvcGRvd25EaXJlY3RpdmVcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbQnNEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Nb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnPzogYW55KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEcm9wZG93bk1vZHVsZSwgcHJvdmlkZXJzOiBbXG4gICAgICBDb21wb25lbnRMb2FkZXJGYWN0b3J5LFxuICAgICAgUG9zaXRpb25pbmdTZXJ2aWNlLFxuICAgICAgQnNEcm9wZG93blN0YXRlLFxuICAgICAge3Byb3ZpZGU6IEJzRHJvcGRvd25Db25maWcsIHVzZVZhbHVlOiBjb25maWcgPyBjb25maWcgOiB7YXV0b0Nsb3NlOiB0cnVlfX1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=