import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective {

  private currentRole: string = '';

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  @Input() set appHasRole(role: string) {
    this.currentRole = role;
    this.updateView();
  }

  private updateView(): void {
    // console.log('Role received:', this.currentRole);
    if (this.currentRole === 'admin') {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
