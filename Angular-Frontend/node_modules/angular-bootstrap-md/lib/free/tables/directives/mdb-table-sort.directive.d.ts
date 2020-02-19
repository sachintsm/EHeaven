import { EventEmitter, ElementRef, Renderer2, OnInit } from '@angular/core';
export declare class MdbTableSortDirective implements OnInit {
    private el;
    private renderer;
    sorted: boolean;
    dataSource: Array<any>;
    sortBy: string;
    sortEnd: EventEmitter<any[]>;
    constructor(el: ElementRef, renderer: Renderer2);
    onclick(): void;
    trimWhiteSigns(headElement: any): string;
    moveArrayItem(arr: any, oldIndex: number, newIndex: number): any;
    sortDataBy(key: string | any): void;
    ngOnInit(): void;
}
