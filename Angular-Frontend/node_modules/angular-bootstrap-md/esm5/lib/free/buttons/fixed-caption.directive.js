/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
var FixedButtonCaptionDirective = /** @class */ (function () {
    function FixedButtonCaptionDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * @return {?}
     */
    FixedButtonCaptionDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.createCaptionElement();
    };
    /**
     * @return {?}
     */
    FixedButtonCaptionDirective.prototype.createCaptionElement = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var paragraph = this.renderer.createElement('p');
        /** @type {?} */
        var text = this.renderer.createText(this.caption);
        this.renderer.appendChild(paragraph, text);
        this.renderer.appendChild(this.el.nativeElement, paragraph);
        this.paragraphEl = paragraph;
    };
    /**
     * @return {?}
     */
    FixedButtonCaptionDirective.prototype.showCaption = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.paragraphEl, 'fixed-button-caption');
        this.renderer.setStyle(this.paragraphEl, 'position', 'absolute');
        this.renderer.setStyle(this.paragraphEl, 'right', "60px");
        this.renderer.setStyle(this.paragraphEl, 'top', '10px');
        this.renderer.setStyle(this.el.nativeElement, 'overflow', 'visible');
    };
    FixedButtonCaptionDirective.decorators = [
        { type: Directive, args: [{ selector: '[mdbFixedCaption]' },] }
    ];
    /** @nocollapse */
    FixedButtonCaptionDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    FixedButtonCaptionDirective.propDecorators = {
        caption: [{ type: Input, args: ['mdbFixedCaption',] }],
        collapseButtonActivator: [{ type: Input, args: ['collapseButton',] }]
    };
    return FixedButtonCaptionDirective;
}());
export { FixedButtonCaptionDirective };
if (false) {
    /** @type {?} */
    FixedButtonCaptionDirective.prototype.caption;
    /** @type {?} */
    FixedButtonCaptionDirective.prototype.collapseButtonActivator;
    /**
     * @type {?}
     * @private
     */
    FixedButtonCaptionDirective.prototype.paragraphEl;
    /**
     * @type {?}
     * @private
     */
    FixedButtonCaptionDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    FixedButtonCaptionDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml4ZWQtY2FwdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL2J1dHRvbnMvZml4ZWQtY2FwdGlvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEY7SUFNRSxxQ0FBb0IsUUFBbUIsRUFBVSxFQUFjO1FBQTNDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQUcsQ0FBQzs7OztJQUVuRSw4Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsMERBQW9COzs7SUFBcEI7O1lBQ1EsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQzs7WUFDNUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxpREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7O2dCQTFCRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUU7Ozs7Z0JBRkcsU0FBUztnQkFBcEMsVUFBVTs7OzBCQUkzQixLQUFLLFNBQUMsaUJBQWlCOzBDQUV2QixLQUFLLFNBQUMsZ0JBQWdCOztJQXVCekIsa0NBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQTFCWSwyQkFBMkI7OztJQUN0Qyw4Q0FBMEM7O0lBRTFDLDhEQUFzRDs7Ozs7SUFDdEQsa0RBQXlCOzs7OztJQUNiLCtDQUEyQjs7Ozs7SUFBRSx5Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbWRiRml4ZWRDYXB0aW9uXScgfSlcbmV4cG9ydCBjbGFzcyBGaXhlZEJ1dHRvbkNhcHRpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ21kYkZpeGVkQ2FwdGlvbicpIGNhcHRpb246IHN0cmluZztcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ2NvbGxhcHNlQnV0dG9uJykgY29sbGFwc2VCdXR0b25BY3RpdmF0b3I6IGFueTtcbiAgcHJpdmF0ZSBwYXJhZ3JhcGhFbDogYW55O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jcmVhdGVDYXB0aW9uRWxlbWVudCgpO1xuICB9XG5cbiAgY3JlYXRlQ2FwdGlvbkVsZW1lbnQoKSB7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgdGV4dCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dCh0aGlzLmNhcHRpb24pO1xuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQocGFyYWdyYXBoLCB0ZXh0KTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgcGFyYWdyYXBoKTtcbiAgICB0aGlzLnBhcmFncmFwaEVsID0gcGFyYWdyYXBoO1xuICB9XG5cbiAgc2hvd0NhcHRpb24oKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnBhcmFncmFwaEVsLCAnZml4ZWQtYnV0dG9uLWNhcHRpb24nKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMucGFyYWdyYXBoRWwsICdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5wYXJhZ3JhcGhFbCwgJ3JpZ2h0JywgYDYwcHhgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMucGFyYWdyYXBoRWwsICd0b3AnLCAnMTBweCcpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnb3ZlcmZsb3cnLCAndmlzaWJsZScpO1xuICB9XG59XG4iXX0=