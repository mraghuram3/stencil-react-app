/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CollapsiblePanel {
        "isOpen"?: string;
        "title": string;
    }
    interface KfAccordian {
    }
    interface KfButton {
    }
    interface KfIcon {
        "icon": string;
        "size": string;
        "type": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLCollapsiblePanelElement extends Components.CollapsiblePanel, HTMLStencilElement {
    }
    var HTMLCollapsiblePanelElement: {
        prototype: HTMLCollapsiblePanelElement;
        new (): HTMLCollapsiblePanelElement;
    };
    interface HTMLKfAccordianElement extends Components.KfAccordian, HTMLStencilElement {
    }
    var HTMLKfAccordianElement: {
        prototype: HTMLKfAccordianElement;
        new (): HTMLKfAccordianElement;
    };
    interface HTMLKfButtonElement extends Components.KfButton, HTMLStencilElement {
    }
    var HTMLKfButtonElement: {
        prototype: HTMLKfButtonElement;
        new (): HTMLKfButtonElement;
    };
    interface HTMLKfIconElement extends Components.KfIcon, HTMLStencilElement {
    }
    var HTMLKfIconElement: {
        prototype: HTMLKfIconElement;
        new (): HTMLKfIconElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "collapsible-panel": HTMLCollapsiblePanelElement;
        "kf-accordian": HTMLKfAccordianElement;
        "kf-button": HTMLKfButtonElement;
        "kf-icon": HTMLKfIconElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface CollapsiblePanel {
        "isOpen"?: string;
        "title"?: string;
    }
    interface KfAccordian {
    }
    interface KfButton {
    }
    interface KfIcon {
        "icon"?: string;
        "size"?: string;
        "type"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "collapsible-panel": CollapsiblePanel;
        "kf-accordian": KfAccordian;
        "kf-button": KfButton;
        "kf-icon": KfIcon;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "collapsible-panel": LocalJSX.CollapsiblePanel & JSXBase.HTMLAttributes<HTMLCollapsiblePanelElement>;
            "kf-accordian": LocalJSX.KfAccordian & JSXBase.HTMLAttributes<HTMLKfAccordianElement>;
            "kf-button": LocalJSX.KfButton & JSXBase.HTMLAttributes<HTMLKfButtonElement>;
            "kf-icon": LocalJSX.KfIcon & JSXBase.HTMLAttributes<HTMLKfIconElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
