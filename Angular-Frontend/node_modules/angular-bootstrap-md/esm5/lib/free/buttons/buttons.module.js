/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { MdbBtnDirective } from './buttons.directive';
import { NgModule } from '@angular/core';
import { ButtonCheckboxDirective } from './checkbox.directive';
import { ButtonRadioDirective } from './radio.directive';
import { FixedButtonCaptionDirective } from './fixed-caption.directive';
var ButtonsModule = /** @class */ (function () {
    function ButtonsModule() {
    }
    /**
     * @return {?}
     */
    ButtonsModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: ButtonsModule, providers: [] };
    };
    ButtonsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ButtonCheckboxDirective,
                        ButtonRadioDirective,
                        MdbBtnDirective,
                        FixedButtonCaptionDirective,
                    ],
                    exports: [
                        ButtonCheckboxDirective,
                        ButtonRadioDirective,
                        MdbBtnDirective,
                        FixedButtonCaptionDirective,
                    ],
                },] }
    ];
    return ButtonsModule;
}());
export { ButtonsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9ucy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL2J1dHRvbnMvYnV0dG9ucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV4RTtJQUFBO0lBa0JBLENBQUM7Ozs7SUFIZSxxQkFBTzs7O0lBQXJCO1FBQ0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ3BELENBQUM7O2dCQWpCRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHVCQUF1Qjt3QkFDdkIsb0JBQW9CO3dCQUNwQixlQUFlO3dCQUNmLDJCQUEyQjtxQkFDNUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHVCQUF1Qjt3QkFDdkIsb0JBQW9CO3dCQUNwQixlQUFlO3dCQUNmLDJCQUEyQjtxQkFDNUI7aUJBQ0Y7O0lBS0Qsb0JBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQUpZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZGJCdG5EaXJlY3RpdmUgfSBmcm9tICcuL2J1dHRvbnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJ1dHRvbkNoZWNrYm94RGlyZWN0aXZlIH0gZnJvbSAnLi9jaGVja2JveC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQnV0dG9uUmFkaW9EaXJlY3RpdmUgfSBmcm9tICcuL3JhZGlvLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGaXhlZEJ1dHRvbkNhcHRpb25EaXJlY3RpdmUgfSBmcm9tICcuL2ZpeGVkLWNhcHRpb24uZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQnV0dG9uQ2hlY2tib3hEaXJlY3RpdmUsXG4gICAgQnV0dG9uUmFkaW9EaXJlY3RpdmUsXG4gICAgTWRiQnRuRGlyZWN0aXZlLFxuICAgIEZpeGVkQnV0dG9uQ2FwdGlvbkRpcmVjdGl2ZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEJ1dHRvbkNoZWNrYm94RGlyZWN0aXZlLFxuICAgIEJ1dHRvblJhZGlvRGlyZWN0aXZlLFxuICAgIE1kYkJ0bkRpcmVjdGl2ZSxcbiAgICBGaXhlZEJ1dHRvbkNhcHRpb25EaXJlY3RpdmUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbnNNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IEJ1dHRvbnNNb2R1bGUsIHByb3ZpZGVyczogW10gfTtcbiAgfVxufVxuIl19