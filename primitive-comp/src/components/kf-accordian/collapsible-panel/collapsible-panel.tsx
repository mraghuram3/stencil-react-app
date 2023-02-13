import { Component, Host, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'collapsible-panel',
  styleUrl: 'collapsible-panel.css',
  shadow: true,
})
export class CollapsiblePanel {
  @Prop() title: string;

  @Prop() isOpen?: string;

  @State() isAccordianOpen: boolean = false;

  @Watch('isOpen')
  watchPropHandler(newValue: boolean) {
    this.isAccordianOpen = newValue
  }

  private togglePanel = () => {
    this.isAccordianOpen = !this.isAccordianOpen;
  };

  render() {
    return (
      <Host class={`panelContainer`}>
        <div class="panel" onClick={this.togglePanel}>
          {this.title ? this.title : <slot name="title"></slot>}
        </div>
        {this.isAccordianOpen && (
          <div class="content">
            <slot name="content"></slot>
          </div>
        )}
      </Host>
    );
  }
}

// slots cannot be used without shadow dom in conditionally rendering
// https://stackoverflow.com/questions/56483281/stencil-js-renders-slot-content-event-if-the-render-returns-null
// https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots
