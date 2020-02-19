import { NavbarService } from './navbar.service';
import { AfterContentInit, ElementRef, QueryList, EventEmitter } from '@angular/core';
export declare class NavlinksComponent implements AfterContentInit {
    private _navbarService;
    links: QueryList<ElementRef>;
    linkClick: EventEmitter<any>;
    constructor(_navbarService: NavbarService);
    ngAfterContentInit(): void;
}
