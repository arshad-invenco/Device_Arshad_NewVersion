import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'textarea[autoGrow]'
})
export class AutoGrowDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('input', ['$event.target'])
  onInput(textArea: HTMLTextAreaElement): void {
    this.adjust();
  }

  ngAfterViewInit(): void {
    // Adjust the textarea initially
    this.adjust();
  }

  adjust(): void {
    const textArea = this.elementRef.nativeElement as HTMLTextAreaElement;
    textArea.style.overflow = 'hidden';
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';
  }
}
