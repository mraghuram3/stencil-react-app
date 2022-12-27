import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'kf-button',
  styleUrl: 'kf-button.css',
  shadow: true,
})
export class KfButton {

  render() {
    return (
      <Host>
        <slot></slot>
        Button
      </Host>
    );
  }

}
