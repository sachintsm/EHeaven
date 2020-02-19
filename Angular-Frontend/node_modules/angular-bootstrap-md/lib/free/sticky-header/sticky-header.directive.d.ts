import { AfterViewInit, ElementRef, EventEmitter, Renderer2 } from '@angular/core';
export declare class StickyHeaderDirective implements AfterViewInit {
    private _renderer;
    private _el;
    animationDuration: number;
    transitionEnd: EventEmitter<{
        state: string;
    }>;
    private scrollDown$;
    private scrollUp$;
    constructor(_renderer: Renderer2, _el: ElementRef);
    ngAfterViewInit(): void;
}
