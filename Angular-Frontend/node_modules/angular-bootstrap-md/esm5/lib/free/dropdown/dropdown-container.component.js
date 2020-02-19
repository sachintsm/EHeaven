/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { BsDropdownState } from './dropdown.state';
var BsDropdownContainerComponent = /** @class */ (function () {
    function BsDropdownContainerComponent(_state) {
        var _this = this;
        this._state = _state;
        this.isOpen = false;
        this.display = 'block';
        this.position = 'absolute';
        this._subscription = _state.isOpenChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.isOpen = value;
        }));
    }
    Object.defineProperty(BsDropdownContainerComponent.prototype, "direction", {
        get: /**
         * @return {?}
         */
        function () {
            return this._state.direction;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDropdownContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    BsDropdownContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-dropdown-container',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <div\n      [class.dropup]=\"direction === 'up'\"\n      [class.dropdown]=\"direction === 'down'\"\n      [class.show]=\"isOpen\"\n      [class.open]=\"isOpen\"\n    >\n      <ng-content></ng-content>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    BsDropdownContainerComponent.ctorParameters = function () { return [
        { type: BsDropdownState }
    ]; };
    BsDropdownContainerComponent.propDecorators = {
        display: [{ type: HostBinding, args: ['style.display',] }],
        position: [{ type: HostBinding, args: ['style.position',] }]
    };
    return BsDropdownContainerComponent;
}());
export { BsDropdownContainerComponent };
if (false) {
    /** @type {?} */
    BsDropdownContainerComponent.prototype.isOpen;
    /** @type {?} */
    BsDropdownContainerComponent.prototype.display;
    /** @type {?} */
    BsDropdownContainerComponent.prototype.position;
    /**
     * @type {?}
     * @private
     */
    BsDropdownContainerComponent.prototype._subscription;
    /**
     * @type {?}
     * @private
     */
    BsDropdownContainerComponent.prototype._state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYm9vdHN0cmFwLW1kLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvZHJvcGRvd24vZHJvcGRvd24tY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRW5EO0lBMEJFLHNDQUFvQixNQUF1QjtRQUEzQyxpQkFJQztRQUptQixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQVgzQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWUsWUFBTyxHQUFHLE9BQU8sQ0FBQztRQUNqQixhQUFRLEdBQUcsVUFBVSxDQUFDO1FBU25ELElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFjO1lBQ2hFLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQVZELHNCQUFJLG1EQUFTOzs7O1FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQy9CLENBQUM7OztPQUFBOzs7O0lBVUQsa0RBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuQyxDQUFDOztnQkFsQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsZ09BU1Q7aUJBQ0Y7Ozs7Z0JBZlEsZUFBZTs7OzBCQW1CckIsV0FBVyxTQUFDLGVBQWU7MkJBQzNCLFdBQVcsU0FBQyxnQkFBZ0I7O0lBaUIvQixtQ0FBQztDQUFBLEFBbkNELElBbUNDO1NBckJZLDRCQUE0Qjs7O0lBQ3ZDLDhDQUFlOztJQUVmLCtDQUFnRDs7SUFDaEQsZ0RBQXFEOzs7OztJQU1yRCxxREFBMkI7Ozs7O0lBRWYsOENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25EZXN0cm95LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNEcm9wZG93blN0YXRlIH0gZnJvbSAnLi9kcm9wZG93bi5zdGF0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1kcm9wZG93bi1jb250YWluZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICBbY2xhc3MuZHJvcHVwXT1cImRpcmVjdGlvbiA9PT0gJ3VwJ1wiXG4gICAgICBbY2xhc3MuZHJvcGRvd25dPVwiZGlyZWN0aW9uID09PSAnZG93bidcIlxuICAgICAgW2NsYXNzLnNob3ddPVwiaXNPcGVuXCJcbiAgICAgIFtjbGFzcy5vcGVuXT1cImlzT3BlblwiXG4gICAgPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgaXNPcGVuID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JykgZGlzcGxheSA9ICdibG9jayc7XG4gIEBIb3N0QmluZGluZygnc3R5bGUucG9zaXRpb24nKSBwb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cbiAgZ2V0IGRpcmVjdGlvbigpOiAnZG93bicgfCAndXAnIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuZGlyZWN0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RhdGU6IEJzRHJvcGRvd25TdGF0ZSkge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IF9zdGF0ZS5pc09wZW5DaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5pc09wZW4gPSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=