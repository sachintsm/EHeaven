import { OnInit, ElementRef, Renderer2, OnDestroy } from '@angular/core';
export declare class MdbErrorDirective implements OnInit, OnDestroy {
    private el;
    private renderer;
    id: string;
    errorMsg: boolean;
    messageId: string;
    textareaListenFunction: Function;
    constructor(el: ElementRef, renderer: Renderer2);
    private _getClosestEl;
    private _calculateMarginTop;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
