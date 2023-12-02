import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[d-number-validate]',
    standalone: true
})
export class NumberValidateDirective {
    constructor(
        private element: ElementRef<any>,
    ) { }

    ngOnInit(): void {
        const input_element = this.element.nativeElement as HTMLInputElement;
        input_element.addEventListener('keydown', event => this.keyDownEventInputFieldNumber(event));
        input_element.addEventListener('blur', event => this.blurEventFieldNumber(event));
    }

    ngOnDestroy(): void {
        const input_element = this.element.nativeElement as HTMLInputElement;
        input_element.removeEventListener('keydown', event => this.keyDownEventInputFieldNumber(event));
        input_element.removeEventListener('blur', event => this.blurEventFieldNumber(event));
    }

    //==========================DOM EVENT FUNCTION==========================

    blurEventFieldNumber(event: Event): void {
        const input_element = event.target as HTMLDivElement;
        if (!(input_element?.textContent?.length)) {
            input_element.textContent = '1';
        }
    }
    
    pasteEventPasteFieldNumber(event: ClipboardEvent): void {
        if(isNaN(Number(event.clipboardData?.getData('text')))) {
            event.preventDefault();
        }
    }

    keyDownEventInputFieldNumber(event: KeyboardEvent): void {
        if (this.isMoveKey(event)) return;
        if(event.key === 'Tab') return;
        if(event.key === 'Enter') return;
        if(event.ctrlKey) return;
        const input_element = event.target as HTMLDivElement;
        if (!this.isValidKeydownPhone(event)) {
            event.preventDefault();
            return;
        }
        if ((input_element?.textContent?.length) || 0 < 2) return;
        if (event.key !== 'Backspace' && !event.shiftKey) {
            event.preventDefault();
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
