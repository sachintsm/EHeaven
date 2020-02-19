import { ElementRef, OnInit, Renderer2 } from '@angular/core';
export declare class MdbIconComponent implements OnInit {
    private _el;
    private _renderer;
    icon: string;
    size: string;
    class: string;
    classInside: string;
    fab: boolean;
    far: boolean;
    fal: boolean;
    fas: boolean;
    sizeClass: string;
    constructor(_el: ElementRef, _renderer: Renderer2);
    ngOnInit(): void;
    private _getClosestEl;
}
