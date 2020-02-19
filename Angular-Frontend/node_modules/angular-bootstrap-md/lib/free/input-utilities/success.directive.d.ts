import { ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';
export declare class MdbSuccessDirective implements OnInit, OnDestroy {
    private el;
    private renderer;
    id: string;
    successMsg: boolean;
    messageId: string;
    textareaListenFunction: Function;
    constructor(el: ElementRef, renderer: Renderer2);
    private _getClosestEl;
    private _calculateMarginTop;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
