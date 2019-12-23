import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[appInputUpperFormat]'
})
export class InputUpperFormatDirective {
    constructor(private ref: ElementRef) {
    }

    @HostListener('focus') onFocus() {
        console.log('focus');
    }

    @HostListener('blur') onBlur() {
        this.ref.nativeElement.value = this.ref.nativeElement.value.toUpperCase();
    }
}
