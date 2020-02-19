/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostListener, Renderer2, HostBinding, ViewEncapsulation, } from '@angular/core';
import { ClassName, DISMISS_REASONS, ModalOptions, TransitionDurations } from './modal.options';
import { isBs3 } from '../utils/ng2-bootstrap-config';
import { Utils } from '../utils';
export class ModalContainerComponent {
    /**
     * @param {?} options
     * @param {?} _element
     * @param {?} _renderer
     */
    constructor(options, _element, _renderer) {
        // this.mdbModalService = msConfig.serviceInstance;
        this._renderer = _renderer;
        this.modalClass = 'modal';
        this.tabindex = -1;
        this.role = 'dialog';
        this.modal = true;
        this.isShown = false;
        this.isModalHiding = false;
        this.utils = new Utils();
        this._element = _element;
        this.config = Object.assign({}, options);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.mdbModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);
        this.hide();
    }
    /**
     * @return {?}
     */
    onEsc() {
        if (this.config.keyboard && this.level === this.mdbModalService.getModalsCount()) {
            this.mdbModalService.setDismissReason(DISMISS_REASONS.ESC);
            this.hide();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        this.utils.focusTrapModal(event, this._element);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.config.animated) {
            this._renderer.addClass(this._element.nativeElement, 'fade');
        }
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        if ((window &&
            window.navigator.userAgent.indexOf('Edge') !== -1 &&
            this.config &&
            this.config.toString().indexOf('side-modal') === -1) ||
            (window &&
                window.navigator.userAgent.indexOf('Edge') !== -1 &&
                this.config &&
                this.config.toString().indexOf('modal-full-height') === -1)) {
            this.isShown = true;
            this._renderer.addClass(this._element.nativeElement, isBs3() ? ClassName.IN : ClassName.SHOW);
            this._renderer.setStyle(this._element.nativeElement, 'transition', 'transform 0.3s ease-out');
            this._renderer.setStyle(this._element.nativeElement, 'transform', 'translate(0, 25px)');
        }
        else {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.isShown = true;
                this._renderer.addClass(this._element.nativeElement, isBs3() ? ClassName.IN : ClassName.SHOW);
            }), this.isAnimated ? TransitionDurations.BACKDROP : 0);
        }
        if (document && document.body) {
            if (this.mdbModalService.getModalsCount() === 1) {
                this.mdbModalService.checkScrollbar();
                this.mdbModalService.setScrollbar();
            }
            this._renderer.addClass(document.body, ClassName.OPEN);
        }
        if (this.config.containerClass) {
            this.updateContainerClass();
        }
        if (this.config.scroll) {
            this._renderer.setStyle(this._element.nativeElement, 'overflow-y', 'auto');
        }
    }
    /**
     * @return {?}
     */
    focusModalElement() {
        if (this.config.focus) {
            this._element.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    updateContainerClass() {
        if (this.config.containerClass) {
            /** @type {?} */
            const containerClasses = this.config.containerClass;
            /** @type {?} */
            const classArr = containerClasses.split(' ');
            for (let i = 0; i < classArr.length; i++) {
                this._renderer.addClass(this._element.nativeElement, classArr[i]);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.isShown) {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    hide() {
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        this.isModalHiding = true;
        this._renderer.removeClass(this._element.nativeElement, isBs3() ? ClassName.IN : ClassName.SHOW);
        // fix(modal): resolved problem with not pausing iframe/video when closing modal
        /** @type {?} */
        const iframeElements = Array.from(this._element.nativeElement.querySelectorAll('iframe'));
        /** @type {?} */
        const videoElements = Array.from(this._element.nativeElement.querySelectorAll('video'));
        iframeElements.forEach((/**
         * @param {?} iframe
         * @return {?}
         */
        (iframe) => {
            /** @type {?} */
            const srcAttribute = iframe.getAttribute('src');
            this._renderer.setAttribute(iframe, 'src', srcAttribute);
        }));
        videoElements.forEach((/**
         * @param {?} video
         * @return {?}
         */
        (video) => {
            video.pause();
        }));
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.isShown = false;
            if (document && document.body && this.mdbModalService.getModalsCount() === 1) {
                this._renderer.removeClass(document.body, ClassName.OPEN);
            }
            this.mdbModalService.hide(this.level);
            this.isModalHiding = false;
        }), this.isAnimated ? TransitionDurations.MODAL : 0);
    }
}
ModalContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-modal-container',
                template: "<div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n  <div class=\"modal-content modal-dynamic\"><ng-content></ng-content></div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".img-fluid,.modal-dialog.cascading-modal.modal-avatar .modal-header,.video-fluid{max-width:100%;height:auto}.flex-center{display:flex;justify-content:center;align-items:center;height:100%}.flex-center p{margin:0}.flex-center ul{text-align:center}.flex-center ul li{margin-bottom:1rem}.flex-center ul li:last-of-type{margin-bottom:0}.hr-light{border-top:1px solid #fff}.hr-dark{border-top:1px solid #666}.w-responsive{width:75%}@media (max-width:740px){.w-responsive{width:100%}}.collapsible-body{display:none}.jumbotron{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);border-radius:.125rem;background-color:#fff}.bg-primary{background-color:#4285f4!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#1266f1!important}.border-primary{border-color:#4285f4!important}.bg-danger{background-color:#ff3547!important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#ff0219!important}.border-danger{border-color:#ff3547!important}.bg-warning{background-color:#fb3!important}a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#fa0!important}.border-warning{border-color:#fb3!important}.bg-success{background-color:#00c851!important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#00953c!important}.border-success{border-color:#00c851!important}.bg-info{background-color:#33b5e5!important}a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#1a9bcb!important}.border-info{border-color:#33b5e5!important}.bg-default{background-color:#2bbbad!important}a.bg-default:focus,a.bg-default:hover,button.bg-default:focus,button.bg-default:hover{background-color:#219287!important}.border-default{border-color:#2bbbad!important}.bg-secondary{background-color:#a6c!important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#9540bf!important}.border-secondary{border-color:#a6c!important}.bg-dark{background-color:#212121!important}a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#080808!important}.border-dark{border-color:#212121!important}.bg-light{background-color:#e0e0e0!important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#c7c7c7!important}.border-light{border-color:#e0e0e0!important}.card-img-100{width:100px;height:100px}.card-img-64{width:64px;height:64px}.mml-1{margin-left:-.25rem!important}.flex-1{flex:1}body.modal-open{overflow:auto}.modal-dialog .modal-content .modal-header{border-top-left-radius:.125rem;border-top-right-radius:.125rem}.modal-dialog.cascading-modal .close{opacity:1;text-shadow:none;color:#fff;outline:0}.modal-dialog.cascading-modal .modal-header{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);border-radius:.125rem}.modal-dialog.cascading-modal .modal-header .title .fab,.modal-dialog.cascading-modal .modal-header .title .far,.modal-dialog.cascading-modal .modal-header .title .fas{margin-right:9px}.modal-dialog.cascading-modal .modal-c-tabs .md-tabs{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);display:flex}.modal-dialog.cascading-modal .modal-c-tabs .md-tabs li{flex:1}.modal-dialog.cascading-modal .modal-c-tabs .md-tabs li a{text-align:center}.modal-dialog.cascading-modal .modal-c-tabs .tab-content{box-shadow:unset;padding:1.7rem 0 0}.modal-dialog.cascading-modal.modal-avatar .modal-header img{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);margin-left:auto;margin-right:auto;width:130px}.modal-dialog.modal-notify.modal-primary .modal-header{background-color:#4285f4}.modal-dialog.modal-notify.modal-primary .fab,.modal-dialog.modal-notify.modal-primary .far,.modal-dialog.modal-notify.modal-primary .fas{color:#4285f4}.modal-dialog.modal-notify.modal-primary .badge{background-color:#4285f4}.modal-dialog.modal-notify.modal-primary .btn .fab,.modal-dialog.modal-notify.modal-primary .btn .far,.modal-dialog.modal-notify.modal-primary .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .fab,.modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .far,.modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .fas{color:#4285f4}.modal-dialog.modal-notify.modal-danger .fab,.modal-dialog.modal-notify.modal-danger .far,.modal-dialog.modal-notify.modal-danger .fas{color:#ff3547}.modal-dialog.modal-notify.modal-danger .btn .fab,.modal-dialog.modal-notify.modal-danger .btn .far,.modal-dialog.modal-notify.modal-danger .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .fab,.modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .far,.modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .fas{color:#ff3547}.modal-dialog.modal-notify.modal-warning .fab,.modal-dialog.modal-notify.modal-warning .far,.modal-dialog.modal-notify.modal-warning .fas{color:#fb3}.modal-dialog.modal-notify.modal-warning .btn .fab,.modal-dialog.modal-notify.modal-warning .btn .far,.modal-dialog.modal-notify.modal-warning .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .fab,.modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .far,.modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .fas{color:#fb3}.modal-dialog.modal-notify.modal-success .fab,.modal-dialog.modal-notify.modal-success .far,.modal-dialog.modal-notify.modal-success .fas{color:#00c851}.modal-dialog.modal-notify.modal-success .btn .fab,.modal-dialog.modal-notify.modal-success .btn .far,.modal-dialog.modal-notify.modal-success .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-success .btn.btn-outline-success .fab,.modal-dialog.modal-notify.modal-success .btn.btn-outline-success .far,.modal-dialog.modal-notify.modal-success .btn.btn-outline-success .fas{color:#00c851}.modal-dialog.modal-notify.modal-info .fab,.modal-dialog.modal-notify.modal-info .far,.modal-dialog.modal-notify.modal-info .fas{color:#33b5e5}.modal-dialog.modal-notify.modal-info .btn .fab,.modal-dialog.modal-notify.modal-info .btn .far,.modal-dialog.modal-notify.modal-info .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-info .btn.btn-outline-info .fab,.modal-dialog.modal-notify.modal-info .btn.btn-outline-info .far,.modal-dialog.modal-notify.modal-info .btn.btn-outline-info .fas{color:#33b5e5}@media (min-width:768px){.modal .modal-dialog.modal-top{top:0}.modal .modal-dialog.modal-left{left:0}.modal .modal-dialog.modal-right{right:0}.modal .modal-dialog.modal-bottom{bottom:0}.modal .modal-dialog.modal-top-left{top:10px;left:10px}.modal .modal-dialog.modal-top-right{top:10px;right:10px}.modal .modal-dialog.modal-bottom-left{bottom:10px;left:10px}.modal .modal-dialog.modal-bottom-right{bottom:10px;right:10px}}@media (min-width:992px){.modal.modal-scrolling{position:relative}.modal.modal-scrolling .modal-dialog{position:fixed;z-index:1050}.modal.modal-content-clickable{top:auto;bottom:auto}.modal.modal-content-clickable .modal-dialog{position:fixed}.modal .modal-fluid{width:100%;max-width:100%}.modal .modal-fluid .modal-content{width:100%}.modal .modal-frame{position:absolute;margin:0!important;width:100%;max-width:100%!important}.modal .modal-frame.modal-bottom{bottom:0}.modal .modal-frame.modal-dialog{height:inherit}.modal .modal-full-height{position:absolute;display:flex;margin:0;width:400px;min-height:100%;height:auto;min-height:100%;top:0;right:0}.modal .modal-full-height.modal-bottom,.modal .modal-full-height.modal-top{display:block;width:100%;max-width:100%;height:auto}.modal .modal-full-height.modal-top{bottom:auto}.modal .modal-full-height.modal-bottom{min-height:0;top:auto}.modal .modal-full-height .modal-content{width:100%}.modal .modal-full-height.modal-lg{width:90%;max-width:90%}.modal .modal-side{position:absolute;bottom:10px;right:10px;margin:0;width:400px}}@media (min-width:992px) and (min-width:992px){.modal .modal-full-height.modal-lg{width:800px;max-width:800px}}@media (min-width:992px) and (min-width:1200px){.modal .modal-full-height.modal-lg{width:1000px;max-width:1000px}}body.scrollable{overflow-y:auto}.modal-dialog .modal-content{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);border-radius:.125rem;border:0}.modal{padding-right:0!important}@media (min-width:768px){.modal .modal-dialog.modal-top{top:0;left:0;right:0}.modal .modal-dialog.modal-left{left:0}.modal .modal-dialog.modal-right{right:0}.modal .modal-dialog.modal-bottom>.modal-content{position:absolute;bottom:0}.modal .modal-dialog.modal-top-left{top:10px;left:10px}.modal .modal-dialog.modal-top-right{top:10px;right:10px}.modal .modal-dialog.modal-bottom-left{left:10px;bottom:10px}.modal .modal-dialog.modal-bottom-right{right:10px;bottom:10px}.modal-sm{max-width:300px}}.modal .modal-side.modal-top{top:0}.modal .modal-side.modal-left{left:0}.modal .modal-side.modal-right{right:0}.modal .modal-side.modal-bottom{bottom:0}.modal .modal-side.modal-top-left{top:10px;left:10px}.modal .modal-side.modal-top-right{top:10px;right:10px}.modal .modal-side.modal-bottom-left{left:10px;bottom:10px}.modal .modal-side.modal-bottom-right{right:10px;bottom:10px}.modal.fade.top:not(.show) .modal-dialog{-webkit-transform:translate3d(0,-25%,0);transform:translate3d(0,-25%,0)}.modal.fade.left:not(.show) .modal-dialog{-webkit-transform:translate3d(-25%,0,0);transform:translate3d(-25%,0,0)}.modal.fade.right:not(.show) .modal-dialog{-webkit-transform:translate3d(25%,0,0);transform:translate3d(25%,0,0)}.modal.fade.bottom:not(.show) .modal-dialog{-webkit-transform:translate3d(0,25%,0);transform:translate3d(0,25%,0)}.modal.fade.in{opacity:1}.modal.fade.in .modal-dialog{-webkit-transform:translate(0,0);transform:translate(0,0)}.modal.fade.in .modal-dialog .relative{display:inline-block}.modal.modal-scrolling{position:relative}.modal.modal-scrolling .modal-dialog{position:fixed;z-index:1050}.modal.modal-content-clickable{top:auto;bottom:auto}.modal.modal-content-clickable .modal-dialog{position:fixed}.modal .modal-fluid{max-width:100%}.modal .modal-fluid .modal-content{width:100%}.modal .modal-frame{position:absolute;max-width:100%;margin:0}@media (max-width:767px){.modal .modal-frame{padding:.5rem}}.modal .modal-frame.modal-bottom{bottom:0}.modal .modal-full-height{display:flex;position:absolute;width:400px;min-height:100%;margin:0;top:0;right:0}@media (max-width:576px){.modal .modal-full-height{width:100%;padding:.5rem}}@media (max-width:992px){.modal .modal-full-height{width:100%;height:unset;position:unset}.modal .modal-full-height.modal-left,.modal .modal-full-height.modal-right,.modal .modal-full-height.modal-top{margin:1.75rem auto;min-height:unset}.modal .modal-full-height.modal-bottom,.modal .modal-full-height.modal-left,.modal .modal-full-height.modal-right,.modal .modal-full-height.modal-top{margin-left:auto;margin-right:auto}}@media (min-width:768px) and (max-width:992px){.modal .modal-full-height.modal-bottom{margin-bottom:1.75rem}.modal .modal-full-height.modal-bottom .modal-content{bottom:1rem}}.modal .modal-full-height.modal-bottom,.modal .modal-full-height.modal-top{display:block;width:100%;height:auto}.modal .modal-full-height.modal-top{bottom:auto}.modal .modal-full-height.modal-bottom{bottom:0}.modal .modal-full-height .modal-content{width:100%}.modal .modal-full-height.modal-lg{max-width:90%;width:90%}@media (min-width:992px){.modal .modal-full-height.modal-lg{max-width:800px;width:800px}}@media (min-width:1200px){.modal .modal-full-height.modal-lg{max-width:1000px;width:1000px}}.modal .modal-side{position:absolute;right:10px;bottom:10px;margin:0;min-width:100px}@media (max-width:768px){.modal .modal-full-height.modal-bottom{margin-top:1.75rem}.modal .modal-side{padding-left:.5rem}}.modal-dialog.cascading-modal{margin-top:10%}.modal-dialog.cascading-modal .modal-header{text-align:center;margin:-2rem 1rem 1rem;padding:1.5rem;border:none;flex-direction:column}.modal-dialog.cascading-modal .modal-header .close{margin-right:2.5rem}.modal-dialog.cascading-modal .modal-header.white-text .close{color:#fff;opacity:1}.modal-dialog.cascading-modal .modal-header .title{width:100%;margin-bottom:0;font-size:1.25rem}.modal-dialog.cascading-modal .modal-header .title .fa{margin-right:9px}.modal-dialog.cascading-modal .modal-header .social-buttons{margin-top:1.5rem}.modal-dialog.cascading-modal .modal-header .social-buttons a{font-size:1rem}.modal-dialog.cascading-modal .modal-c-tabs .md-tabs{margin:-1.5rem 1rem 0}.modal-dialog.cascading-modal .modal-body,.modal-dialog.cascading-modal .modal-footer{color:#616161;padding-right:2rem;padding-left:2rem}.modal-dialog.cascading-modal .modal-body .additional-option,.modal-dialog.cascading-modal .modal-footer .additional-option{text-align:center;margin-top:1rem}.modal-dialog.cascading-modal.modal-avatar{margin-top:6rem}.modal-dialog.cascading-modal.modal-avatar .modal-header{box-shadow:none;margin:-6rem 2rem -1rem}.modal-dialog.modal-notify .heading{margin:0;padding:.3rem;color:#fff;font-size:1.15rem}.modal-dialog.modal-notify .modal-header{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);border:0}.modal-dialog.modal-notify .close{opacity:1}.modal-dialog.modal-notify .modal-body{padding:1.5rem;color:#616161}.modal-dialog.modal-notify .btn-outline-secondary-modal{background-color:transparent}.modal-dialog.modal-notify.modal-info .modal-header{background-color:#5394ff}.modal-dialog.modal-notify.modal-info .fa{color:#5394ff}.modal-dialog.modal-notify.modal-info .badge{background-color:#5394ff}.modal-dialog.modal-notify.modal-info .btn-primary-modal{background:#5394ff}.modal-dialog.modal-notify.modal-info .btn-primary-modal:active,.modal-dialog.modal-notify.modal-info .btn-primary-modal:focus,.modal-dialog.modal-notify.modal-info .btn-primary-modal:hover{background-color:#6da4ff!important}.modal-dialog.modal-notify.modal-info .btn-primary-modal.active{background-color:#0059ec!important}.modal-dialog.modal-notify.modal-info .btn-outline-secondary-modal{border:2px solid #5394ff;color:#5394ff!important}.modal-dialog.modal-notify.modal-warning .modal-header{background-color:#ff8e38}.modal-dialog.modal-notify.modal-warning .fa{color:#ff8e38}.modal-dialog.modal-notify.modal-warning .badge{background-color:#ff8e38}.modal-dialog.modal-notify.modal-warning .btn-primary-modal{background:#ff8e38}.modal-dialog.modal-notify.modal-warning .btn-primary-modal:active,.modal-dialog.modal-notify.modal-warning .btn-primary-modal:focus,.modal-dialog.modal-notify.modal-warning .btn-primary-modal:hover{background-color:#ff9c52!important}.modal-dialog.modal-notify.modal-warning .btn-primary-modal.active{background-color:#d15a00!important}.modal-dialog.modal-notify.modal-warning .btn-outline-secondary-modal{border:2px solid #ff8e38;color:#ff8e38!important}.modal-dialog.modal-notify.modal-success .modal-header{background-color:#01d36b}.modal-dialog.modal-notify.modal-success .fa{color:#01d36b}.modal-dialog.modal-notify.modal-success .badge{background-color:#01d36b}.modal-dialog.modal-notify.modal-success .btn-primary-modal{background:#01d36b}.modal-dialog.modal-notify.modal-success .btn-primary-modal:active,.modal-dialog.modal-notify.modal-success .btn-primary-modal:focus,.modal-dialog.modal-notify.modal-success .btn-primary-modal:hover{background-color:#01ec78!important}.modal-dialog.modal-notify.modal-success .btn-primary-modal.active{background-color:#016d38!important}.modal-dialog.modal-notify.modal-success .btn-outline-secondary-modal{border:2px solid #01d36b;color:#01d36b!important}.modal-dialog.modal-notify.modal-danger .modal-header{background-color:#ff4b4b}.modal-dialog.modal-notify.modal-danger .fa{color:#ff4b4b}.modal-dialog.modal-notify.modal-danger .badge{background-color:#ff4b4b}.modal-dialog.modal-notify.modal-danger .btn-primary-modal{background:#ff4b4b}.modal-dialog.modal-notify.modal-danger .btn-primary-modal:active,.modal-dialog.modal-notify.modal-danger .btn-primary-modal:focus,.modal-dialog.modal-notify.modal-danger .btn-primary-modal:hover{background-color:#ff6565!important}.modal-dialog.modal-notify.modal-danger .btn-primary-modal.active{background-color:#e40000!important}.modal-dialog.modal-notify.modal-danger .btn-outline-secondary-modal{border:2px solid #ff4b4b;color:#ff4b4b!important}.modal-sm .modal-content{margin:0 auto;max-width:300px}.modal .modal-fluid,.modal .modal-frame{width:100%;max-width:100%}.modal-ext .modal-content .modal-header{text-align:center}.modal-ext .modal-content .options{float:left}.modal-ext .modal-content .modal-body .text-xs-center fieldset{margin-top:20px}.modal-ext .modal-content .call{margin-top:1rem}.modal-ext .modal-content .modal-body{padding:2rem 2rem 1rem}.modal-content:not(.card-image) .close{position:absolute;right:15px}.modal-cart li p{margin:5px;font-weight:400}.modal-cart li p .badge{margin-left:10px;margin-top:3px;font-weight:400;position:absolute}.modal-cart li p .quantity{font-size:16px;margin-right:7px;font-weight:300}.modal-cart .cartPageLink{margin-left:10px}.modal-cart .cartPageLink a{text-decoration:underline;color:#666}.modal-cart .total{float:right;font-weight:400}.cf-phone{margin-left:7px}.side-modal{position:fixed;height:100%;width:100%;z-index:9999}.side-modal .modal-dialog{position:absolute;bottom:10px;right:10px;width:400px;margin:10px}@media (max-width:760px){.side-modal .modal-dialog{display:none}}.side-modal .modal-header{padding:1rem}.side-modal .modal-header .heading{margin:0;padding:0}.side-modal .modal-content{border:none}.modal-dynamic>:first-child{display:flex;flex-direction:column;height:100%}.side-modal.fade:not(.show) .modal-dialog{-webkit-transform:translate3d(25%,0,0);transform:translate3d(25%,0,0)}.transparent-bd{opacity:0!important}.modal-backdrop,.modal-backdrop.in{opacity:.5}#exampleModalScroll{overflow-x:hidden;overflow-y:auto}.modal-open .modal{overflow-x:hidden;overflow-y:hidden}.form-dark .card-image{background-size:100%}"]
            }] }
];
/** @nocollapse */
ModalContainerComponent.ctorParameters = () => [
    { type: ModalOptions },
    { type: ElementRef },
    { type: Renderer2 }
];
ModalContainerComponent.propDecorators = {
    tabindex: [{ type: HostBinding, args: ['tabindex',] }],
    role: [{ type: HostBinding, args: ['role',] }],
    modal: [{ type: HostBinding, args: ['class.modal',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onEsc: [{ type: HostListener, args: ['window:keydown.esc',] }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    ModalContainerComponent.prototype.modalClass;
    /** @type {?} */
    ModalContainerComponent.prototype.tabindex;
    /** @type {?} */
    ModalContainerComponent.prototype.role;
    /** @type {?} */
    ModalContainerComponent.prototype.modal;
    /**
     * @type {?}
     * @private
     */
    ModalContainerComponent.prototype.mdbModalService;
    /** @type {?} */
    ModalContainerComponent.prototype.config;
    /** @type {?} */
    ModalContainerComponent.prototype.isShown;
    /** @type {?} */
    ModalContainerComponent.prototype.level;
    /** @type {?} */
    ModalContainerComponent.prototype.isAnimated;
    /**
     * @type {?}
     * @protected
     */
    ModalContainerComponent.prototype._element;
    /**
     * @type {?}
     * @private
     */
    ModalContainerComponent.prototype.isModalHiding;
    /**
     * @type {?}
     * @private
     */
    ModalContainerComponent.prototype.utils;
    /**
     * @type {?}
     * @private
     */
    ModalContainerComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWxDb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ib290c3RyYXAtbWQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9tb2RhbHMvbW9kYWxDb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBR1osU0FBUyxFQUNULFdBQVcsRUFDWCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEcsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFTakMsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7O0lBMENsQyxZQUFtQixPQUFxQixFQUFFLFFBQW9CLEVBQVUsU0FBb0I7UUFDMUYsbURBQW1EO1FBRG1CLGNBQVMsR0FBVCxTQUFTLENBQVc7UUF6QzVGLGVBQVUsR0FBRyxPQUFPLENBQUM7UUFDSSxhQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEIsU0FBSSxHQUFHLFFBQVEsQ0FBQztRQUNULFVBQUssR0FBRyxJQUFJLENBQUM7UUFLbEMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUlmLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRXRCLFVBQUssR0FBVSxJQUFJLEtBQUssRUFBRSxDQUFDO1FBOEJqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBN0JNLE9BQU8sQ0FBQyxLQUFVO1FBQ3ZCLElBQ0UsSUFBSSxDQUFDLE1B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NEI7O0lBQzVCLDBDQUF1Qjs7SUFDdkIsd0NBQXFCOztJQUNyQiw2Q0FBMkI7Ozs7O0lBQzNCLDJDQUErQjs7Ozs7SUFDL0IsZ0RBQThCOzs7OztJQUU5Qix3Q0FBbUM7Ozs7O0lBMkI2Qiw0Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgSG9zdEJpbmRpbmcsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENsYXNzTmFtZSwgRElTTUlTU19SRUFTT05TLCBNb2RhbE9wdGlvbnMsIFRyYW5zaXRpb25EdXJhdGlvbnMgfSBmcm9tICcuL21vZGFsLm9wdGlvbnMnO1xuaW1wb3J0IHsgaXNCczMgfSBmcm9tICcuLi91dGlscy9uZzItYm9vdHN0cmFwLWNvbmZpZyc7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IE1EQk1vZGFsU2VydmljZSB9IGZyb20gJy4vbW9kYWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1tb2RhbC1jb250YWluZXInLFxuICB0ZW1wbGF0ZVVybDogJ21vZGFsQ29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbW9kYWxzLW1vZHVsZS5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBtb2RhbENsYXNzID0gJ21vZGFsJztcbiAgQEhvc3RCaW5kaW5nKCd0YWJpbmRleCcpIHRhYmluZGV4ID0gLTE7XG4gIEBIb3N0QmluZGluZygncm9sZScpIHJvbGUgPSAnZGlhbG9nJztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tb2RhbCcpIG1vZGFsID0gdHJ1ZTtcblxuICBwcml2YXRlIG1kYk1vZGFsU2VydmljZTogTURCTW9kYWxTZXJ2aWNlO1xuXG4gIHB1YmxpYyBjb25maWc6IE1vZGFsT3B0aW9ucztcbiAgcHVibGljIGlzU2hvd24gPSBmYWxzZTtcbiAgcHVibGljIGxldmVsOiBudW1iZXI7XG4gIHB1YmxpYyBpc0FuaW1hdGVkOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2VsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgaXNNb2RhbEhpZGluZyA9IGZhbHNlO1xuXG4gIHByaXZhdGUgdXRpbHM6IFV0aWxzID0gbmV3IFV0aWxzKCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25DbGljayhldmVudDogYW55KTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5jb25maWcuaWdub3JlQmFja2Ryb3BDbGljayB8fFxuICAgICAgdGhpcy5jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnIHx8XG4gICAgICBldmVudC50YXJnZXQgIT09IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm1kYk1vZGFsU2VydmljZS5zZXREaXNtaXNzUmVhc29uKERJU01JU1NfUkVBU09OUy5CQUNLUkRPUCk7XG4gICAgdGhpcy5oaWRlKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5ZG93bi5lc2MnKVxuICBwdWJsaWMgb25Fc2MoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmtleWJvYXJkICYmIHRoaXMubGV2ZWwgPT09IHRoaXMubWRiTW9kYWxTZXJ2aWNlLmdldE1vZGFsc0NvdW50KCkpIHtcbiAgICAgIHRoaXMubWRiTW9kYWxTZXJ2aWNlLnNldERpc21pc3NSZWFzb24oRElTTUlTU19SRUFTT05TLkVTQyk7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSkgb25LZXlEb3duKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnV0aWxzLmZvY3VzVHJhcE1vZGFsKGV2ZW50LCB0aGlzLl9lbGVtZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zOiBNb2RhbE9wdGlvbnMsIF9lbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgLy8gdGhpcy5tZGJNb2RhbFNlcnZpY2UgPSBtc0NvbmZpZy5zZXJ2aWNlSW5zdGFuY2U7XG5cbiAgICB0aGlzLl9lbGVtZW50ID0gX2VsZW1lbnQ7XG4gICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbmZpZy5hbmltYXRlZCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZmFkZScpO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgaWYgKFxuICAgICAgKHdpbmRvdyAmJlxuICAgICAgICB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdFZGdlJykgIT09IC0xICYmXG4gICAgICAgIHRoaXMuY29uZmlnICYmXG4gICAgICAgIHRoaXMuY29uZmlnLnRvU3RyaW5nKCkuaW5kZXhPZignc2lkZS1tb2RhbCcpID09PSAtMSkgfHxcbiAgICAgICh3aW5kb3cgJiZcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRWRnZScpICE9PSAtMSAmJlxuICAgICAgICB0aGlzLmNvbmZpZyAmJlxuICAgICAgICB0aGlzLmNvbmZpZy50b1N0cmluZygpLmluZGV4T2YoJ21vZGFsLWZ1bGwtaGVpZ2h0JykgPT09IC0xKVxuICAgICkge1xuICAgICAgdGhpcy5pc1Nob3duID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgaXNCczMoKSA/IENsYXNzTmFtZS5JTiA6IENsYXNzTmFtZS5TSE9XKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24nLCAndHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQnKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwgMjVweCknKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dChcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNTaG93biA9IHRydWU7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICBpc0JzMygpID8gQ2xhc3NOYW1lLklOIDogQ2xhc3NOYW1lLlNIT1dcbiAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICB0aGlzLmlzQW5pbWF0ZWQgPyBUcmFuc2l0aW9uRHVyYXRpb25zLkJBQ0tEUk9QIDogMFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYm9keSkge1xuICAgICAgaWYgKHRoaXMubWRiTW9kYWxTZXJ2aWNlLmdldE1vZGFsc0NvdW50KCkgPT09IDEpIHtcbiAgICAgICAgdGhpcy5tZGJNb2RhbFNlcnZpY2UuY2hlY2tTY3JvbGxiYXIoKTtcbiAgICAgICAgdGhpcy5tZGJNb2RhbFNlcnZpY2Uuc2V0U2Nyb2xsYmFyKCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhkb2N1bWVudC5ib2R5LCBDbGFzc05hbWUuT1BFTik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLmNvbnRhaW5lckNsYXNzKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRhaW5lckNsYXNzKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLnNjcm9sbCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnb3ZlcmZsb3cteScsICdhdXRvJyk7XG4gICAgfVxuICB9XG5cbiAgZm9jdXNNb2RhbEVsZW1lbnQoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmZvY3VzKSB7XG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVDb250YWluZXJDbGFzcygpIHtcbiAgICBpZiAodGhpcy5jb25maWcuY29udGFpbmVyQ2xhc3MpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lckNsYXNzZXMgPSB0aGlzLmNvbmZpZy5jb250YWluZXJDbGFzcztcbiAgICAgIGNvbnN0IGNsYXNzQXJyID0gY29udGFpbmVyQ2xhc3Nlcy5zcGxpdCgnICcpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgY2xhc3NBcnJbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzU2hvd24pIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNNb2RhbEhpZGluZyB8fCAhdGhpcy5pc1Nob3duKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaXNNb2RhbEhpZGluZyA9IHRydWU7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3MoXG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICBpc0JzMygpID8gQ2xhc3NOYW1lLklOIDogQ2xhc3NOYW1lLlNIT1dcbiAgICApO1xuXG4gICAgLy8gZml4KG1vZGFsKTogcmVzb2x2ZWQgcHJvYmxlbSB3aXRoIG5vdCBwYXVzaW5nIGlmcmFtZS92aWRlbyB3aGVuIGNsb3NpbmcgbW9kYWxcbiAgICBjb25zdCBpZnJhbWVFbGVtZW50cyA9IEFycmF5LmZyb20odGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lmcmFtZScpKTtcbiAgICBjb25zdCB2aWRlb0VsZW1lbnRzID0gQXJyYXkuZnJvbSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgndmlkZW8nKSk7XG5cbiAgICBpZnJhbWVFbGVtZW50cy5mb3JFYWNoKChpZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBzcmNBdHRyaWJ1dGU6IGFueSA9IGlmcmFtZS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKGlmcmFtZSwgJ3NyYycsIHNyY0F0dHJpYnV0ZSk7XG4gICAgfSk7XG5cbiAgICB2aWRlb0VsZW1lbnRzLmZvckVhY2goKHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50KSA9PiB7XG4gICAgICB2aWRlby5wYXVzZSgpO1xuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dChcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5pc1Nob3duID0gZmFsc2U7XG4gICAgICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5ib2R5ICYmIHRoaXMubWRiTW9kYWxTZXJ2aWNlLmdldE1vZGFsc0NvdW50KCkgPT09IDEpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBDbGFzc05hbWUuT1BFTik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tZGJNb2RhbFNlcnZpY2UuaGlkZSh0aGlzLmxldmVsKTtcbiAgICAgICAgdGhpcy5pc01vZGFsSGlkaW5nID0gZmFsc2U7XG4gICAgICB9LFxuICAgICAgdGhpcy5pc0FuaW1hdGVkID8gVHJhbnNpdGlvbkR1cmF0aW9ucy5NT0RBTCA6IDBcbiAgICApO1xuICB9XG59XG4iXX0=