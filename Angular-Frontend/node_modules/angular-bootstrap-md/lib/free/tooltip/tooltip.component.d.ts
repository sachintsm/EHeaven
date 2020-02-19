import { AfterViewInit, ElementRef } from '@angular/core';
import { TooltipConfig } from './tooltip.service';
export declare class TooltipContainerComponent implements AfterViewInit {
    classMap: any;
    placement: string;
    popupClass: string;
    animation: boolean;
    el: ElementRef;
    containerClass: string;
    tooltipInner: ElementRef;
    tooltipArrow: ElementRef;
    show: boolean;
    readonly tooltipClasses: string;
    readonly isBs3: boolean;
    constructor(config: TooltipConfig, elem: ElementRef);
    ngAfterViewInit(): void;
}
