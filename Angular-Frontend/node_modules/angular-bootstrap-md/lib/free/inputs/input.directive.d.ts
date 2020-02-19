import { ElementRef, Renderer2, AfterViewInit, AfterViewChecked } from '@angular/core';
export declare class MdbInput implements AfterViewChecked, AfterViewInit {
    private el;
    private _renderer;
    elLabel: ElementRef | any;
    elIcon: Element | any;
    element: any;
    focusCheckbox: boolean;
    focusRadio: boolean;
    isBrowser: any;
    isClicked: boolean;
    constructor(el: ElementRef, _renderer: Renderer2, platformId: string);
    onfocus(): void;
    onblur(): void;
    onchange(): void;
    oniput(): void;
    onkeydown(event: any): void;
    oncut(): void;
    onpaste(): void;
    ondrop(): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    resize(): void;
    delayedResize(): void;
    initComponent(): void;
    private checkValue;
}
