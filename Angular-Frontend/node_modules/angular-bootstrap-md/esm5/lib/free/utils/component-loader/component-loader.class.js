/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:max-file-line-count
// todo: add delay support
// todo: merge events onShow, onShown, etc...
// todo: add global positioning configuration?
import { ElementRef, EventEmitter, Injector, TemplateRef } from '@angular/core';
import { listenToTriggersV2, registerEscClick, registerOutsideClick } from './../../utilities';
import { ContentRef } from './content-ref.class';
/**
 * @template T
 */
var /**
 * @template T
 */
ComponentLoader = /** @class */ (function () {
    /**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * @internal
     */
    // tslint:disable-next-line
    function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new EventEmitter();
        /* tslint:disable-next-line: no-any*/
        this.onShown = new EventEmitter();
        /* tslint:disable-next-line: no-any*/
        this.onBeforeHide = new EventEmitter();
        this.onHidden = new EventEmitter();
        this.shown = new EventEmitter();
        this.hidden = new EventEmitter();
        this._providers = [];
        this._isHiding = false;
        /**
         * A selector used if container element was not found
         */
        this.containerDefaultSelector = 'body';
        this._listenOpts = {};
        this._globalListener = Function.prototype;
    }
    Object.defineProperty(ComponentLoader.prototype, "isShown", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._isHiding) {
                return false;
            }
            return !!this._componentRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} compType
     * @return {?}
     */
    ComponentLoader.prototype.attach = /**
     * @param {?} compType
     * @return {?}
     */
    function (compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    };
    // todo: add behaviour: to target element, `body`, custom element
    // todo: add behaviour: to target element, `body`, custom element
    /**
     * @param {?=} container
     * @return {?}
     */
    ComponentLoader.prototype.to = 
    // todo: add behaviour: to target element, `body`, custom element
    /**
     * @param {?=} container
     * @return {?}
     */
    function (container) {
        this.container = container || this.container;
        return this;
    };
    /**
     * @param {?=} opts
     * @return {?}
     */
    ComponentLoader.prototype.position = /**
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        this.attachment = opts.attachment || this.attachment;
        this._elementRef = ((/** @type {?} */ (opts.target))) || this._elementRef;
        return this;
    };
    /**
     * @param {?} provider
     * @return {?}
     */
    ComponentLoader.prototype.provide = /**
     * @param {?} provider
     * @return {?}
     */
    function (provider) {
        this._providers.push(provider);
        return this;
    };
    // todo: appendChild to element or document.querySelector(this.container)
    // todo: appendChild to element or document.querySelector(this.container)
    /**
     * @param {?=} opts
     * @return {?}
     */
    ComponentLoader.prototype.show = 
    // todo: appendChild to element or document.querySelector(this.container)
    /**
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
        this._subscribePositioning();
        this._innerComponent = null;
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content, opts.data);
            /** @type {?} */
            var injector = Injector.create({
                providers: this._providers,
                parent: this._injector
            });
            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
            this._applicationRef.attachView(this._componentRef.hostView);
            // this._componentRef = this._viewContainerRef
            //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container instanceof ElementRef) {
                this.container.nativeElement.appendChild(this._componentRef.location.nativeElement);
            }
            if (typeof this.container === 'string' && typeof document !== 'undefined') {
                /** @type {?} */
                var selectedElement = document.querySelector(this.container) ||
                    document.querySelector(this.containerDefaultSelector);
                if (selectedElement) {
                    selectedElement.appendChild(this._componentRef.location.nativeElement);
                }
            }
            if (!this.container &&
                this._elementRef &&
                this._elementRef.nativeElement.parentElement) {
                this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy
            if (this._contentRef.componentRef) {
                this._innerComponent = this._contentRef.componentRef.instance;
                this._contentRef.componentRef.changeDetectorRef.markForCheck();
                this._contentRef.componentRef.changeDetectorRef.detectChanges();
            }
            this._componentRef.changeDetectorRef.markForCheck();
            this._componentRef.changeDetectorRef.detectChanges();
            this.onShown.emit(this._componentRef.instance);
        }
        this._registerOutsideClick();
        return this._componentRef;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.hide = /**
     * @return {?}
     */
    function () {
        if (!this._componentRef) {
            return this;
        }
        this._posService.deletePositionElement(this._componentRef.location);
        this.onBeforeHide.emit(this._componentRef.instance);
        /** @type {?} */
        var componentEl = this._componentRef.location.nativeElement;
        componentEl.parentNode.removeChild(componentEl);
        if (this._contentRef.componentRef) {
            this._contentRef.componentRef.destroy();
        }
        this._componentRef.destroy();
        if (this._viewContainerRef && this._contentRef.viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        }
        if (this._contentRef.viewRef) {
            this._contentRef.viewRef.destroy();
        }
        this._contentRef = null;
        this._componentRef = null;
        this._removeGlobalListener();
        this.onHidden.emit();
        return this;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.dispose = /**
     * @return {?}
     */
    function () {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    };
    /**
     * @param {?} listenOpts
     * @return {?}
     */
    ComponentLoader.prototype.listen = /**
     * @param {?} listenOpts
     * @return {?}
     */
    function (listenOpts) {
        var _this = this;
        this.triggers = listenOpts.triggers || this.triggers;
        this._listenOpts.outsideClick = listenOpts.outsideClick;
        this._listenOpts.outsideEsc = listenOpts.outsideEsc;
        listenOpts.target = listenOpts.target || this._elementRef.nativeElement;
        /** @type {?} */
        var hide = (this._listenOpts.hide = (/**
         * @return {?}
         */
        function () {
            return listenOpts.hide ? listenOpts.hide() : void _this.hide();
        }));
        /** @type {?} */
        var show = (this._listenOpts.show = (/**
         * @param {?} registerHide
         * @return {?}
         */
        function (registerHide) {
            listenOpts.show ? listenOpts.show(registerHide) : _this.show(registerHide);
            registerHide();
        }));
        /** @type {?} */
        var toggle = (/**
         * @param {?} registerHide
         * @return {?}
         */
        function (registerHide) {
            _this.isShown ? hide() : show(registerHide);
        });
        this._unregisterListenersFn = listenToTriggersV2(this._renderer, {
            target: listenOpts.target,
            triggers: listenOpts.triggers,
            show: show,
            hide: hide,
            toggle: toggle
        });
        return this;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype._removeGlobalListener = /**
     * @return {?}
     */
    function () {
        if (this._globalListener) {
            this._globalListener();
            this._globalListener = null;
        }
    };
    /**
     * @param {?} vRef
     * @param {?} template
     * @return {?}
     */
    ComponentLoader.prototype.attachInline = /**
     * @param {?} vRef
     * @param {?} template
     * @return {?}
     */
    function (vRef, 
    /* tslint:disable-next-line: no-any*/
    template) {
        this._inlineViewRef = vRef.createEmbeddedView(template);
        return this;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype._registerOutsideClick = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._componentRef || !this._componentRef.location) {
            return;
        }
        // why: should run after first event bubble
        if (this._listenOpts && this._listenOpts.outsideClick) {
            /** @type {?} */
            var target_1 = this._componentRef.location.nativeElement;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._globalListener = registerOutsideClick(_this._renderer, {
                    targets: [target_1, _this._elementRef.nativeElement],
                    outsideClick: _this._listenOpts.outsideClick,
                    hide: (/**
                     * @return {?}
                     */
                    function () { return _this._listenOpts.hide(); })
                });
            }));
        }
        if (this._listenOpts.outsideEsc) {
            /** @type {?} */
            var target = this._componentRef.location.nativeElement;
            this._globalListener = registerEscClick(this._renderer, {
                targets: [target, this._elementRef.nativeElement],
                outsideEsc: this._listenOpts.outsideEsc,
                hide: (/**
                 * @return {?}
                 */
                function () { return _this._listenOpts.hide(); })
            });
        }
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.getInnerComponent = /**
     * @return {?}
     */
    function () {
        return this._innerComponent;
    };
    /**
     * @private
     * @return {?}
     */
    ComponentLoader.prototype._subscribePositioning = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this.onShown.subscribe((/**
         * @return {?}
         */
        function () {
            _this._posService.position({
                element: _this._componentRef.location,
                target: _this._elementRef,
                attachment: _this.attachment,
                appendToBody: _this.container === 'body'
            });
        }));
        this._zoneSubscription = this._ngZone.onStable.subscribe((/**
         * @return {?}
         */
        function () {
            if (!_this._componentRef) {
                return;
            }
            _this._posService.calcPosition();
        }));
    };
    /**
     * @private
     * @return {?}
     */
    ComponentLoader.prototype._unsubscribePositioning = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    };
    /**
     * @private
     * @param {?} content
     * @param {?=} data
     * @return {?}
     */
    ComponentLoader.prototype._getContentRef = /**
     * @private
     * @param {?} content
     * @param {?=} data
     * @return {?}
     */
    function (
    /* tslint:disable-next-line: no-any*/
    content, 
    /* tslint:disable-next-line: no-any*/
    data) {
        if (!content) {
            return new ContentRef([]);
        }
        if (content instanceof TemplateRef) {
            if (this._viewContainerRef) {
                /** @type {?} */
                var _viewRef = this._viewContainerRef
                    .createEmbeddedView(content);
                _viewRef.markForCheck();
                return new ContentRef([_viewRef.rootNodes], _viewRef);
            }
            /** @type {?} */
            var viewRef = content.createEmbeddedView({});
            this._applicationRef.attachView(viewRef);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        if (typeof content === 'function') {
            /** @type {?} */
            var contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            /** @type {?} */
            var modalContentInjector = Injector.create({
                providers: this._providers,
                parent: this._injector
            });
            /** @type {?} */
            var componentRef = contentCmptFactory.create(modalContentInjector);
            Object.assign(componentRef.instance, data);
            this._applicationRef.attachView(componentRef.hostView);
            return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
        return new ContentRef([[this._renderer.createText("" + content)]]);
    };
    return ComponentLoader;
}());
/**
 * @template T
 */
export { ComponentLoader };
if (false) {
    /** @type {?} */
    ComponentLoader.prototype.onBeforeShow;
    /** @type {?} */
    ComponentLoader.prototype.onShown;
    /** @type {?} */
    ComponentLoader.prototype.onBeforeHide;
    /** @type {?} */
    ComponentLoader.prototype.onHidden;
    /** @type {?} */
    ComponentLoader.prototype.shown;
    /** @type {?} */
    ComponentLoader.prototype.hidden;
    /** @type {?} */
    ComponentLoader.prototype.instance;
    /** @type {?} */
    ComponentLoader.prototype._componentRef;
    /** @type {?} */
    ComponentLoader.prototype._inlineViewRef;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._providers;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._componentFactory;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._zoneSubscription;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._contentRef;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._innerComponent;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._unregisterListenersFn;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._isHiding;
    /**
     * Placement of a component. Accepts: "top", "bottom", "left", "right"
     * @type {?}
     * @private
     */
    ComponentLoader.prototype.attachment;
    /**
     * A selector specifying the element the popover should be appended to.
     * @type {?}
     * @private
     */
    ComponentLoader.prototype.container;
    /**
     * A selector used if container element was not found
     * @type {?}
     * @private
     */
    ComponentLoader.prototype.containerDefaultSelector;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     * @type {?}
     * @private
     */
    ComponentLoader.prototype.triggers;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._listenOpts;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._globalListener;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._applicationRef;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._posService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxvYWRlci5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYm9vdHN0cmFwLW1kLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdXRpbHMvY29tcG9uZW50LWxvYWRlci9jb21wb25lbnQtbG9hZGVyLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUtMLFVBQVUsRUFFVixZQUFZLEVBQ1osUUFBUSxFQUlSLFdBQVcsRUFHWixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLGdCQUFnQixFQUNoQixvQkFBb0IsRUFDckIsTUFBTSxtQkFBbUIsQ0FBQztBQUUzQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFHakQ7Ozs7SUF5REU7Ozs7T0FJRztJQUNILDJCQUEyQjtJQUMzQix5QkFDVSxpQkFBbUMsRUFDbkMsU0FBb0IsRUFDcEIsV0FBdUIsRUFDdkIsU0FBbUIsRUFDbkIseUJBQW1ELEVBQ25ELE9BQWUsRUFDZixlQUErQixFQUMvQixXQUErQjtRQVAvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQiw4QkFBeUIsR0FBekIseUJBQXlCLENBQTBCO1FBQ25ELFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBdEV6QyxpQkFBWSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDOztRQUV0RCxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7O1FBRWhELGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckQsYUFBUSxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3JELFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFNdkMsZUFBVSxHQUFxQixFQUFFLENBQUM7UUFnQmxDLGNBQVMsR0FBRyxLQUFLLENBQUM7Ozs7UUFnQmxCLDZCQUF3QixHQUFHLE1BQU0sQ0FBQztRQVFsQyxnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUN0QixvQkFBZSxHQUFvQixRQUFRLENBQUMsU0FBUyxDQUFDO0lBaUIzRCxDQUFDO0lBbERKLHNCQUFJLG9DQUFPOzs7O1FBQVg7WUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFFRCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7OztPQUFBOzs7OztJQThDRCxnQ0FBTTs7OztJQUFOLFVBQU8sUUFBaUI7UUFDdEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyx5QkFBeUI7YUFDcEQsdUJBQXVCLENBQUksUUFBUSxDQUFDLENBQUM7UUFFeEMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsaUVBQWlFOzs7Ozs7SUFDakUsNEJBQUU7Ozs7OztJQUFGLFVBQUcsU0FBK0I7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUU3QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRUQsa0NBQVE7Ozs7SUFBUixVQUFTLElBQStCO1FBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxtQkFBQSxJQUFJLENBQUMsTUFBTSxFQUFjLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO1FBRW5FLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCxpQ0FBTzs7OztJQUFQLFVBQVEsUUFBd0I7UUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFL0IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQseUVBQXlFOzs7Ozs7SUFFekUsOEJBQUk7Ozs7OztJQUFKLFVBQUssSUFPQztRQVBELHFCQUFBLEVBQUEsU0FPQztRQUdKLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBRTVCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztnQkFFMUQsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQy9CLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVTtnQkFDMUIsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTO2FBQ3ZCLENBQUM7WUFFRixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFckYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3RCw4Q0FBOEM7WUFDOUMsbUZBQW1GO1lBQ25GLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFFNUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUVqRCxJQUFJLElBQUksQ0FBQyxTQUFTLFlBQVksVUFBVSxFQUFFO2dCQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FDMUMsQ0FBQzthQUNIO1lBRUQsSUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssUUFBUSxJQUFJLE9BQU8sUUFBUSxLQUFLLFdBQVcsRUFBRTs7b0JBQ25FLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ3RDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDO2dCQUU3RSxJQUFJLGVBQWUsRUFBRTtvQkFDbkIsZUFBZSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztpQkFDeEU7YUFDRjtZQUVELElBQ0UsQ0FBQyxJQUFJLENBQUMsU0FBUztnQkFDZixJQUFJLENBQUMsV0FBVztnQkFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUM1QztnQkFDQSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQzFDLENBQUM7YUFDSDtZQUVELHNFQUFzRTtZQUN0RSxNQUFNO1lBQ04sb0VBQW9FO1lBQ3BFLGtCQUFrQjtZQUNsQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQy9ELElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ2pFO1lBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEQ7UUFFRCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUU3QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELDhCQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFcEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7WUFFOUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGFBQWE7UUFDN0QsV0FBVyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRTtZQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QztRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUU7WUFDdEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUN6RCxDQUFDO1NBQ0g7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFO1lBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3BDO1FBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVyQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxnQ0FBTTs7O0lBQU47UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBRVosT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELGlDQUFPOzs7SUFBUDtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtRQUVELElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBRS9CLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQy9CLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxnQ0FBTTs7OztJQUFOLFVBQU8sVUFBK0I7UUFBdEMsaUJBMEJDO1FBekJDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JELElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDeEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUNwRCxVQUFVLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7O1lBRWxFLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSTs7O1FBQUc7WUFDcEMsT0FBQSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSSxDQUFDLElBQUksRUFBRTtRQUF0RCxDQUFzRCxDQUFBLENBQUM7O1lBQ25ELElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSTs7OztRQUFHLFVBQUMsWUFBc0I7WUFDM0QsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxRSxZQUFZLEVBQUUsQ0FBQztRQUNqQixDQUFDLENBQUEsQ0FBQzs7WUFFSSxNQUFNOzs7O1FBQUcsVUFBQyxZQUFzQjtZQUNwQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQTtRQUVELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQy9ELE1BQU0sRUFBRSxVQUFVLENBQUMsTUFBTTtZQUN6QixRQUFRLEVBQUUsVUFBVSxDQUFDLFFBQVE7WUFDN0IsSUFBSSxNQUFBO1lBQ0osSUFBSSxNQUFBO1lBQ0osTUFBTSxRQUFBO1NBQ1AsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsK0NBQXFCOzs7SUFBckI7UUFDRSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsc0NBQVk7Ozs7O0lBQVosVUFDRSxJQUFzQjtJQUN0QixxQ0FBcUM7SUFDckMsUUFBMEI7UUFFMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFeEQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsK0NBQXFCOzs7SUFBckI7UUFBQSxpQkF1QkM7UUF0QkMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRTtZQUN2RCxPQUFPO1NBQ1I7UUFDRCwyQ0FBMkM7UUFDM0MsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFOztnQkFDL0MsUUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGFBQWE7WUFDeEQsVUFBVTs7O1lBQUM7Z0JBQ1QsS0FBSSxDQUFDLGVBQWUsR0FBRyxvQkFBb0IsQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFO29CQUMxRCxPQUFPLEVBQUUsQ0FBQyxRQUFNLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7b0JBQ2pELFlBQVksRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLFlBQVk7b0JBQzNDLElBQUk7OztvQkFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBdkIsQ0FBdUIsQ0FBQTtpQkFDcEMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUU7O2dCQUN6QixNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsYUFBYTtZQUN4RCxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ3RELE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztnQkFDakQsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtnQkFDdkMsSUFBSTs7O2dCQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUF2QixDQUF1QixDQUFBO2FBQ3BDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUVELDJDQUFpQjs7O0lBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRU8sK0NBQXFCOzs7O0lBQTdCO1FBQUEsaUJBcUJDO1FBcEJDLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUM5QyxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7OztRQUFDO1lBQ3JCLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO2dCQUN4QixPQUFPLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRO2dCQUNwQyxNQUFNLEVBQUUsS0FBSSxDQUFDLFdBQVc7Z0JBQ3hCLFVBQVUsRUFBRSxLQUFJLENBQUMsVUFBVTtnQkFDM0IsWUFBWSxFQUFFLEtBQUksQ0FBQyxTQUFTLEtBQUssTUFBTTthQUN4QyxDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTOzs7UUFBQztZQUN2RCxJQUFJLENBQUMsS0FBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdkIsT0FBTzthQUNSO1lBRUQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNsQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8saURBQXVCOzs7O0lBQS9CO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMzQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDOzs7Ozs7O0lBRU8sd0NBQWM7Ozs7OztJQUF0QjtJQUNFLHFDQUFxQztJQUNyQyxPQUF3QztJQUN4QyxxQ0FBcUM7SUFDckMsSUFBVTtRQUdWLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixPQUFPLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzNCO1FBRUQsSUFBSSxPQUFPLFlBQVksV0FBVyxFQUFFO1lBQ2xDLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFOztvQkFDcEIsUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUI7cUJBQ3BDLGtCQUFrQixDQUFpQixPQUFPLENBQUM7Z0JBQzlDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFFeEIsT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUN2RDs7Z0JBQ0ssT0FBTyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUM7WUFDOUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFekMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNyRDtRQUVELElBQUksT0FBTyxPQUFPLEtBQUssVUFBVSxFQUFFOztnQkFDM0Isa0JBQWtCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLHVCQUF1QixDQUMvRSxPQUFPLENBQ1I7O2dCQUVLLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQzNDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVTtnQkFDMUIsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTO2FBQ3ZCLENBQUM7O2dCQUVJLFlBQVksR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUM7WUFDcEUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV2RCxPQUFPLElBQUksVUFBVSxDQUNuQixDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUN2QyxZQUFZLENBQUMsUUFBUSxFQUNyQixZQUFZLENBQ2IsQ0FBQztTQUNIO1FBRUQsT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBRyxPQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBbllELElBbVlDOzs7Ozs7O0lBbFlDLHVDQUFzRDs7SUFFdEQsa0NBQWdEOztJQUVoRCx1Q0FBcUQ7O0lBQ3JELG1DQUFxRDs7SUFDckQsZ0NBQThDOztJQUM5QyxpQ0FBK0M7O0lBRS9DLG1DQUFZOztJQUNaLHdDQUFxQzs7SUFDckMseUNBQW1DOzs7OztJQUVuQyxxQ0FBMEM7Ozs7O0lBQzFDLDRDQUErQzs7Ozs7SUFDL0MsNENBQStCOzs7OztJQUMvQixzQ0FBc0M7Ozs7O0lBQ3RDLDBDQUErQzs7Ozs7SUFFL0MsaURBQXlDOzs7OztJQVV6QyxvQ0FBMEI7Ozs7OztJQUsxQixxQ0FBMkI7Ozs7OztJQU0zQixvQ0FBNkM7Ozs7OztJQUs3QyxtREFBMEM7Ozs7Ozs7SUFNMUMsbUNBQXlCOzs7OztJQUV6QixzQ0FBOEI7Ozs7O0lBQzlCLDBDQUE4RDs7Ozs7SUFTNUQsNENBQTJDOzs7OztJQUMzQyxvQ0FBNEI7Ozs7O0lBQzVCLHNDQUErQjs7Ozs7SUFDL0Isb0NBQTJCOzs7OztJQUMzQixvREFBMkQ7Ozs7O0lBQzNELGtDQUF1Qjs7Ozs7SUFDdkIsMENBQXVDOzs7OztJQUN2QyxzQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtZmlsZS1saW5lLWNvdW50XG4vLyB0b2RvOiBhZGQgZGVsYXkgc3VwcG9ydFxuLy8gdG9kbzogbWVyZ2UgZXZlbnRzIG9uU2hvdywgb25TaG93biwgZXRjLi4uXG4vLyB0b2RvOiBhZGQgZ2xvYmFsIHBvc2l0aW9uaW5nIGNvbmZpZ3VyYXRpb24/XG5pbXBvcnQge1xuICBBcHBsaWNhdGlvblJlZixcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3RvcixcbiAgTmdab25lLFxuICBSZW5kZXJlcjIsXG4gIFN0YXRpY1Byb3ZpZGVyLFxuICBUZW1wbGF0ZVJlZixcbiAgVHlwZSxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUG9zaXRpb25pbmdPcHRpb25zLCBQb3NpdGlvbmluZ1NlcnZpY2V9IGZyb20gJy4vLi4vcG9zaXRpb25pbmcvcG9zaXRpb25pbmcuc2VydmljZSc7XG5cbmltcG9ydCB7XG4gIGxpc3RlblRvVHJpZ2dlcnNWMixcbiAgcmVnaXN0ZXJFc2NDbGljayxcbiAgcmVnaXN0ZXJPdXRzaWRlQ2xpY2tcbn0gZnJvbSAnLi8uLi8uLi91dGlsaXRpZXMnO1xuXG5pbXBvcnQgeyBDb250ZW50UmVmIH0gZnJvbSAnLi9jb250ZW50LXJlZi5jbGFzcyc7XG5pbXBvcnQgeyBMaXN0ZW5PcHRpb25zIH0gZnJvbSAnLi9saXN0ZW4tb3B0aW9ucy5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnRMb2FkZXI8VD4ge1xuICBvbkJlZm9yZVNob3c6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBvblNob3duOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBvbkJlZm9yZUhpZGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBvbkhpZGRlbjogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBzaG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGhpZGRlbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaW5zdGFuY2U6IFQ7XG4gIF9jb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUPiB8IGFueTtcbiAgX2lubGluZVZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjxUPjtcblxuICBwcml2YXRlIF9wcm92aWRlcnM6IFN0YXRpY1Byb3ZpZGVyW10gPSBbXTtcbiAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxUPjtcbiAgcHJpdmF0ZSBfem9uZVN1YnNjcmlwdGlvbjogYW55O1xuICBwcml2YXRlIF9jb250ZW50UmVmOiBDb250ZW50UmVmIHwgYW55O1xuICBwcml2YXRlIF9pbm5lckNvbXBvbmVudDogQ29tcG9uZW50UmVmPFQ+IHwgYW55O1xuXG4gIHByaXZhdGUgX3VucmVnaXN0ZXJMaXN0ZW5lcnNGbjogRnVuY3Rpb247XG5cbiAgZ2V0IGlzU2hvd24oKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX2lzSGlkaW5nKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICEhdGhpcy5fY29tcG9uZW50UmVmO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNIaWRpbmcgPSBmYWxzZTtcblxuICAvKipcbiAgICogUGxhY2VtZW50IG9mIGEgY29tcG9uZW50LiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXG4gICAqL1xuICBwcml2YXRlIGF0dGFjaG1lbnQ6IHN0cmluZztcblxuICAvKipcbiAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSBwb3BvdmVyIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgcHJpdmF0ZSBjb250YWluZXI6IHN0cmluZyB8IEVsZW1lbnRSZWYgfCBhbnk7XG5cbiAgLyoqXG4gICAqIEEgc2VsZWN0b3IgdXNlZCBpZiBjb250YWluZXIgZWxlbWVudCB3YXMgbm90IGZvdW5kXG4gICAqL1xuICBwcml2YXRlIGNvbnRhaW5lckRlZmF1bHRTZWxlY3RvciA9ICdib2R5JztcblxuICAvKipcbiAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyLiBTdXBwb3J0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mXG4gICAqIGV2ZW50IG5hbWVzLlxuICAgKi9cbiAgcHJpdmF0ZSB0cmlnZ2Vyczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2xpc3Rlbk9wdHM6IGFueSA9IHt9O1xuICBwcml2YXRlIF9nbG9iYWxMaXN0ZW5lcjogRnVuY3Rpb24gfCBudWxsID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIC8qKlxuICAgKiBEbyBub3QgdXNlIHRoaXMgZGlyZWN0bHksIGl0IHNob3VsZCBiZSBpbnN0YW5jZWQgdmlhXG4gICAqIGBDb21wb25lbnRMb2FkRmFjdG9yeS5hdHRhY2hgXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBfYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIHByaXZhdGUgX3Bvc1NlcnZpY2U6IFBvc2l0aW9uaW5nU2VydmljZVxuICApIHt9XG5cbiAgYXR0YWNoKGNvbXBUeXBlOiBUeXBlPFQ+KTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcbiAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG4gICAgICAucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8VD4oY29tcFR5cGUpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyB0b2RvOiBhZGQgYmVoYXZpb3VyOiB0byB0YXJnZXQgZWxlbWVudCwgYGJvZHlgLCBjdXN0b20gZWxlbWVudFxuICB0byhjb250YWluZXI/OiBzdHJpbmcgfCBFbGVtZW50UmVmKTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lciB8fCB0aGlzLmNvbnRhaW5lcjtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcG9zaXRpb24ob3B0cz86IFBvc2l0aW9uaW5nT3B0aW9ucyB8IGFueSk6IENvbXBvbmVudExvYWRlcjxUPiB7XG4gICAgdGhpcy5hdHRhY2htZW50ID0gb3B0cy5hdHRhY2htZW50IHx8IHRoaXMuYXR0YWNobWVudDtcbiAgICB0aGlzLl9lbGVtZW50UmVmID0gKG9wdHMudGFyZ2V0IGFzIEVsZW1lbnRSZWYpIHx8IHRoaXMuX2VsZW1lbnRSZWY7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByb3ZpZGUocHJvdmlkZXI6IFN0YXRpY1Byb3ZpZGVyKTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcbiAgICB0aGlzLl9wcm92aWRlcnMucHVzaChwcm92aWRlcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHRvZG86IGFwcGVuZENoaWxkIHRvIGVsZW1lbnQgb3IgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmNvbnRhaW5lcilcblxuICBzaG93KG9wdHM6IHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgY29udGVudD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGRhdGE/OiBhbnk7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfSA9IHt9XG4gICk6IENvbXBvbmVudFJlZjxUPiB7XG5cbiAgICB0aGlzLl9zdWJzY3JpYmVQb3NpdGlvbmluZygpO1xuICAgIHRoaXMuX2lubmVyQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIGlmICghdGhpcy5fY29tcG9uZW50UmVmKSB7XG4gICAgICB0aGlzLm9uQmVmb3JlU2hvdy5lbWl0KCk7XG4gICAgICB0aGlzLl9jb250ZW50UmVmID0gdGhpcy5fZ2V0Q29udGVudFJlZihvcHRzLmNvbnRlbnQsIG9wdHMuZGF0YSk7XG5cbiAgICAgIGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgICAgcHJvdmlkZXJzOiB0aGlzLl9wcm92aWRlcnMsXG4gICAgICAgIHBhcmVudDogdGhpcy5faW5qZWN0b3JcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9jb21wb25lbnRSZWYgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmNyZWF0ZShpbmplY3RvciwgdGhpcy5fY29udGVudFJlZi5ub2Rlcyk7XG5cbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcodGhpcy5fY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgICAgIC8vIHRoaXMuX2NvbXBvbmVudFJlZiA9IHRoaXMuX3ZpZXdDb250YWluZXJSZWZcbiAgICAgIC8vICAgLmNyZWF0ZUNvbXBvbmVudCh0aGlzLl9jb21wb25lbnRGYWN0b3J5LCAwLCBpbmplY3RvciwgdGhpcy5fY29udGVudFJlZi5ub2Rlcyk7XG4gICAgICB0aGlzLmluc3RhbmNlID0gdGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlO1xuXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZSwgb3B0cyk7XG5cbiAgICAgIGlmICh0aGlzLmNvbnRhaW5lciBpbnN0YW5jZW9mIEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuY29udGFpbmVyID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5jb250YWluZXIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5jb250YWluZXJEZWZhdWx0U2VsZWN0b3IpO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQpIHtcbiAgICAgICAgICBzZWxlY3RlZEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuY29udGFpbmVyICYmXG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYgJiZcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnRcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIG1hbnVhbGx5IGludm9rZSBjaGFuZ2UgZGV0ZWN0aW9uIHNpbmNlIGV2ZW50cyByZWdpc3RlcmVkXG4gICAgICAvLyB2aWFcbiAgICAgIC8vIFJlbmRlcmVyOjpsaXN0ZW4oKSBhcmUgbm90IHBpY2tlZCB1cCBieSBjaGFuZ2UgZGV0ZWN0aW9uIHdpdGggdGhlXG4gICAgICAvLyBPblB1c2ggc3RyYXRlZ3lcbiAgICAgIGlmICh0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZikge1xuICAgICAgICB0aGlzLl9pbm5lckNvbXBvbmVudCA9IHRoaXMuX2NvbnRlbnRSZWYuY29tcG9uZW50UmVmLmluc3RhbmNlO1xuICAgICAgICB0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgdGhpcy5fY29udGVudFJlZi5jb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMub25TaG93bi5lbWl0KHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fcmVnaXN0ZXJPdXRzaWRlQ2xpY2soKTtcblxuICAgIHJldHVybiB0aGlzLl9jb21wb25lbnRSZWY7XG4gIH1cblxuICBoaWRlKCk6IENvbXBvbmVudExvYWRlcjxUPiB7XG4gICAgaWYgKCF0aGlzLl9jb21wb25lbnRSZWYpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuX3Bvc1NlcnZpY2UuZGVsZXRlUG9zaXRpb25FbGVtZW50KHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbik7XG5cbiAgICB0aGlzLm9uQmVmb3JlSGlkZS5lbWl0KHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZSk7XG5cbiAgICBjb25zdCBjb21wb25lbnRFbCA9IHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgIGNvbXBvbmVudEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29tcG9uZW50RWwpO1xuICAgIGlmICh0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZikge1xuICAgICAgdGhpcy5fY29udGVudFJlZi5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLl9jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgIGlmICh0aGlzLl92aWV3Q29udGFpbmVyUmVmICYmIHRoaXMuX2NvbnRlbnRSZWYudmlld1JlZikge1xuICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5yZW1vdmUoXG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYuaW5kZXhPZih0aGlzLl9jb250ZW50UmVmLnZpZXdSZWYpXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29udGVudFJlZi52aWV3UmVmKSB7XG4gICAgICB0aGlzLl9jb250ZW50UmVmLnZpZXdSZWYuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuX2NvbnRlbnRSZWYgPSBudWxsO1xuICAgIHRoaXMuX2NvbXBvbmVudFJlZiA9IG51bGw7XG4gICAgdGhpcy5fcmVtb3ZlR2xvYmFsTGlzdGVuZXIoKTtcblxuICAgIHRoaXMub25IaWRkZW4uZW1pdCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNTaG93bikge1xuICAgICAgdGhpcy5oaWRlKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3coKTtcbiAgfVxuXG4gIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNTaG93bikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fdW5zdWJzY3JpYmVQb3NpdGlvbmluZygpO1xuXG4gICAgaWYgKHRoaXMuX3VucmVnaXN0ZXJMaXN0ZW5lcnNGbikge1xuICAgICAgdGhpcy5fdW5yZWdpc3Rlckxpc3RlbmVyc0ZuKCk7XG4gICAgfVxuICB9XG5cbiAgbGlzdGVuKGxpc3Rlbk9wdHM6IExpc3Rlbk9wdGlvbnMgfCBhbnkpOiBDb21wb25lbnRMb2FkZXI8VD4ge1xuICAgIHRoaXMudHJpZ2dlcnMgPSBsaXN0ZW5PcHRzLnRyaWdnZXJzIHx8IHRoaXMudHJpZ2dlcnM7XG4gICAgdGhpcy5fbGlzdGVuT3B0cy5vdXRzaWRlQ2xpY2sgPSBsaXN0ZW5PcHRzLm91dHNpZGVDbGljaztcbiAgICB0aGlzLl9saXN0ZW5PcHRzLm91dHNpZGVFc2MgPSBsaXN0ZW5PcHRzLm91dHNpZGVFc2M7XG4gICAgbGlzdGVuT3B0cy50YXJnZXQgPSBsaXN0ZW5PcHRzLnRhcmdldCB8fCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBjb25zdCBoaWRlID0gKHRoaXMuX2xpc3Rlbk9wdHMuaGlkZSA9ICgpID0+XG4gICAgICBsaXN0ZW5PcHRzLmhpZGUgPyBsaXN0ZW5PcHRzLmhpZGUoKSA6IHZvaWQgdGhpcy5oaWRlKCkpO1xuICAgIGNvbnN0IHNob3cgPSAodGhpcy5fbGlzdGVuT3B0cy5zaG93ID0gKHJlZ2lzdGVySGlkZTogRnVuY3Rpb24pID0+IHtcbiAgICAgIGxpc3Rlbk9wdHMuc2hvdyA/IGxpc3Rlbk9wdHMuc2hvdyhyZWdpc3RlckhpZGUpIDogdGhpcy5zaG93KHJlZ2lzdGVySGlkZSk7XG4gICAgICByZWdpc3RlckhpZGUoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRvZ2dsZSA9IChyZWdpc3RlckhpZGU6IEZ1bmN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmlzU2hvd24gPyBoaWRlKCkgOiBzaG93KHJlZ2lzdGVySGlkZSk7XG4gICAgfTtcblxuICAgIHRoaXMuX3VucmVnaXN0ZXJMaXN0ZW5lcnNGbiA9IGxpc3RlblRvVHJpZ2dlcnNWMih0aGlzLl9yZW5kZXJlciwge1xuICAgICAgdGFyZ2V0OiBsaXN0ZW5PcHRzLnRhcmdldCxcbiAgICAgIHRyaWdnZXJzOiBsaXN0ZW5PcHRzLnRyaWdnZXJzLFxuICAgICAgc2hvdyxcbiAgICAgIGhpZGUsXG4gICAgICB0b2dnbGVcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX3JlbW92ZUdsb2JhbExpc3RlbmVyKCkge1xuICAgIGlmICh0aGlzLl9nbG9iYWxMaXN0ZW5lcikge1xuICAgICAgdGhpcy5fZ2xvYmFsTGlzdGVuZXIoKTtcbiAgICAgIHRoaXMuX2dsb2JhbExpc3RlbmVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBhdHRhY2hJbmxpbmUoXG4gICAgdlJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT5cbiAgKTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcbiAgICB0aGlzLl9pbmxpbmVWaWV3UmVmID0gdlJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGUpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfcmVnaXN0ZXJPdXRzaWRlQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9jb21wb25lbnRSZWYgfHwgIXRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB3aHk6IHNob3VsZCBydW4gYWZ0ZXIgZmlyc3QgZXZlbnQgYnViYmxlXG4gICAgaWYgKHRoaXMuX2xpc3Rlbk9wdHMgJiYgdGhpcy5fbGlzdGVuT3B0cy5vdXRzaWRlQ2xpY2spIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2dsb2JhbExpc3RlbmVyID0gcmVnaXN0ZXJPdXRzaWRlQ2xpY2sodGhpcy5fcmVuZGVyZXIsIHtcbiAgICAgICAgICB0YXJnZXRzOiBbdGFyZ2V0LCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRdLFxuICAgICAgICAgIG91dHNpZGVDbGljazogdGhpcy5fbGlzdGVuT3B0cy5vdXRzaWRlQ2xpY2ssXG4gICAgICAgICAgaGlkZTogKCkgPT4gdGhpcy5fbGlzdGVuT3B0cy5oaWRlKClcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xpc3Rlbk9wdHMub3V0c2lkZUVzYykge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLl9nbG9iYWxMaXN0ZW5lciA9IHJlZ2lzdGVyRXNjQ2xpY2sodGhpcy5fcmVuZGVyZXIsIHtcbiAgICAgICAgdGFyZ2V0czogW3RhcmdldCwgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XSxcbiAgICAgICAgb3V0c2lkZUVzYzogdGhpcy5fbGlzdGVuT3B0cy5vdXRzaWRlRXNjLFxuICAgICAgICBoaWRlOiAoKSA9PiB0aGlzLl9saXN0ZW5PcHRzLmhpZGUoKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0SW5uZXJDb21wb25lbnQoKTogQ29tcG9uZW50UmVmPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5faW5uZXJDb21wb25lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9zdWJzY3JpYmVQb3NpdGlvbmluZygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fem9uZVN1YnNjcmlwdGlvbiB8fCAhdGhpcy5hdHRhY2htZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vblNob3duLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9wb3NTZXJ2aWNlLnBvc2l0aW9uKHtcbiAgICAgICAgZWxlbWVudDogdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLFxuICAgICAgICB0YXJnZXQ6IHRoaXMuX2VsZW1lbnRSZWYsXG4gICAgICAgIGF0dGFjaG1lbnQ6IHRoaXMuYXR0YWNobWVudCxcbiAgICAgICAgYXBwZW5kVG9Cb2R5OiB0aGlzLmNvbnRhaW5lciA9PT0gJ2JvZHknXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3pvbmVTdWJzY3JpcHRpb24gPSB0aGlzLl9uZ1pvbmUub25TdGFibGUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fY29tcG9uZW50UmVmKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcG9zU2VydmljZS5jYWxjUG9zaXRpb24oKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3Vuc3Vic2NyaWJlUG9zaXRpb25pbmcoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl96b25lU3Vic2NyaXB0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fem9uZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX3pvbmVTdWJzY3JpcHRpb24gPSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0Q29udGVudFJlZihcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiB8IGFueSxcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgZGF0YT86IGFueSxcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICk6IENvbnRlbnRSZWYge1xuICAgIGlmICghY29udGVudCkge1xuICAgICAgcmV0dXJuIG5ldyBDb250ZW50UmVmKFtdKTtcbiAgICB9XG5cbiAgICBpZiAoY29udGVudCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICBpZiAodGhpcy5fdmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICBjb25zdCBfdmlld1JlZiA9IHRoaXMuX3ZpZXdDb250YWluZXJSZWZcbiAgICAgICAgICAuY3JlYXRlRW1iZWRkZWRWaWV3PFRlbXBsYXRlUmVmPFQ+Pihjb250ZW50KTtcbiAgICAgICAgX3ZpZXdSZWYubWFya0ZvckNoZWNrKCk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBDb250ZW50UmVmKFtfdmlld1JlZi5yb290Tm9kZXNdLCBfdmlld1JlZik7XG4gICAgICB9XG4gICAgICBjb25zdCB2aWV3UmVmID0gY29udGVudC5jcmVhdGVFbWJlZGRlZFZpZXcoe30pO1xuICAgICAgdGhpcy5fYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyh2aWV3UmVmKTtcblxuICAgICAgcmV0dXJuIG5ldyBDb250ZW50UmVmKFt2aWV3UmVmLnJvb3ROb2Rlc10sIHZpZXdSZWYpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgY29udGVudENtcHRGYWN0b3J5ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgICBjb250ZW50XG4gICAgICApO1xuXG4gICAgICBjb25zdCBtb2RhbENvbnRlbnRJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG4gICAgICAgIHByb3ZpZGVyczogdGhpcy5fcHJvdmlkZXJzLFxuICAgICAgICBwYXJlbnQ6IHRoaXMuX2luamVjdG9yXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gY29udGVudENtcHRGYWN0b3J5LmNyZWF0ZShtb2RhbENvbnRlbnRJbmplY3Rvcik7XG4gICAgICBPYmplY3QuYXNzaWduKGNvbXBvbmVudFJlZi5pbnN0YW5jZSwgZGF0YSk7XG4gICAgICB0aGlzLl9hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG5cbiAgICAgIHJldHVybiBuZXcgQ29udGVudFJlZihcbiAgICAgICAgW1tjb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudF1dLFxuICAgICAgICBjb21wb25lbnRSZWYuaG9zdFZpZXcsXG4gICAgICAgIGNvbXBvbmVudFJlZlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IENvbnRlbnRSZWYoW1t0aGlzLl9yZW5kZXJlci5jcmVhdGVUZXh0KGAke2NvbnRlbnR9YCldXSk7XG4gIH1cbn1cbiJdfQ==