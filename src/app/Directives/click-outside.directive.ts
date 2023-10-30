import {AfterViewInit, Directive, ElementRef, EventEmitter, Inject, OnDestroy, Output} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import { fromEvent, Subscription} from "rxjs";
import {filter} from "rxjs/operators";

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective implements AfterViewInit, OnDestroy{
  /*      This Directive is for the PopUp Filter DropDown (present above the table Component)
     It will detect if anyone clicked outside the popup filter
     and automatically closes that popup filter */

  @Output() clickOutside = new EventEmitter<void >()

  documentClickSubscription: Subscription | undefined;

  constructor(private element : ElementRef, @Inject(DOCUMENT) private document: Document) {

  }

  ngAfterViewInit() {
    this.documentClickSubscription = fromEvent(this.document, 'click').pipe(
      filter((event:Event)=>{
        return !this.isInside(event.target as HTMLElement);
      })
    ).subscribe(()=>{
      this.clickOutside.emit();
    })
  }
  ngOnDestroy() {
    this.documentClickSubscription?.unsubscribe();
  }

  isInside(elementToCheck : HTMLElement):boolean {
    return (elementToCheck === this.element.nativeElement || this.element.nativeElement.contains(elementToCheck));
  }
}
