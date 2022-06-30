import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[appStyle]'
})
export class StyleDirective {
    constructor(private elRef: ElementRef) {
    }

    @HostListener('mouseenter') onEnter() {
        this.elRef.nativeElement.style.color = 'red';
    }
}