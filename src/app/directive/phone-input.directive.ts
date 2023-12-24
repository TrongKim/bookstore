import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
    selector: '[d-input-phone]',
    standalone: true
})
export class InputPhoneDirective {
    @Input() placeholder: string = '';

    constructor(
        private element: ElementRef<any>,
    ) { }

    ngOnInit(): void {
        const input_element = this.element.nativeElement as HTMLInputElement;
        input_element.addEventListener('keydown', event => this.keyDownEventInputPhoneNumber(event));
    }

    //==========================DOM EVENT FUNCTION==========================

    pasteEventPastePhoneNumber(event: ClipboardEvent): void {
        if (isNaN(Number(event.clipboardData?.getData('text')))) {
            event.preventDefault();
        }
    }

    keyDownEventInputPhoneNumber(event: KeyboardEvent): void {
        if (this.isMoveKey(event)) return;
        const input_element = event.target as HTMLInputElement;
        if (event.key === 'Space' || event.key === ' ') {
            event.preventDefault();
            return;
        }
        if (event.key === 'Tab') return;
        if (event.key === 'Enter') return;
        if (event.ctrlKey) return;
        if (!this.isValidKeydownPhone(event)) {
            event.preventDefault();
            return;
        }
        if (input_element?.value?.length >= 11) {
            if (event.key !== 'Backspace' && !event.shiftKey) {
                event.preventDefault();
            }
        }
    }

    //============================SUPPORT FUNCTION============================

    isValidKeydownPhone(event: KeyboardEvent): boolean {
        return !isNaN(Number(event.key)) && event.key != '-' || (this.isBackSpaceAndMovePressButton(event.key) || event.ctrlKey);
    }

    isBackSpaceAndMovePressButton(key: string): boolean {
        if (key == 'Backspace' || key == 'ArrowRight' || key == 'ArrowLeft') return true;
        return false;
    }

    isMoveKey(event: KeyboardEvent): boolean {
        return event.key === 'ArrowRight' || event.key === 'ArrowLeft';
    }

    isSelectSomeText(event: KeyboardEvent): boolean {
        const element = event.target as HTMLInputElement;
        return (element.selectionEnd || 0) - (element.selectionStart || 0) != 0;
    }

}
