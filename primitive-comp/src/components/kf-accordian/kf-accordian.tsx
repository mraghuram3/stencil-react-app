import { Component, Host, h, Element, State } from '@stencil/core';

@Component({
  tag: 'kf-accordian',
  styleUrl: 'kf-accordian.css',
  scoped: true,
})
export class KfAccordian {

  @Element() host: HTMLElement;

  @State() childrenData: any = {};


  componentDidLoad() {
    let slotted = this.host.children;
    this.childrenData = { hasChildren: slotted && slotted.length > 0, numberOfChildren: slotted && slotted.length };
    console.log(this.childrenData, slotted);
  }

  render() {
    return (
      <Host>
        accordian content
        <slot></slot>
        accordian content
      </Host>
    );
  }

}
