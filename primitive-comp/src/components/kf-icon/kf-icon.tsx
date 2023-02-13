import { Component, Host, h, State, Prop, Watch } from '@stencil/core';

import DOMPurify from 'dompurify';


const ICON_SIZE = {
  16: "16-x-16",
  20: "20-x-20",
  24: "24-x-24",
  28: "28-x-28",
}

const ICON_TYPE = {
  "1px": "1-px",
  "1.25px": "1-25-px",
  "1.5px": "1-5-px",
  "2px": "2-px",
  "bold": "bold"
}


@Component({
  tag: 'kf-icon',
  styleUrl: 'kf-icon.css',
  shadow: true,
})
export class KfIcon {

  @State() iconData;

  @State() meta;

  // @Prop() iconName: string;

  @Prop() icon: string;

  @Prop() size: string;

  @Prop() type: string;

  @Watch('icon')
  iconDataChange(newValue, oldValue) {
    console.log(newValue, oldValue);
    if (newValue.trim() === '') {
      console.log(newValue, oldValue);
    }
  }


  componentWillLoad() {
    let iconInfo;
    console.log(this.icon)
    let _meta = localStorage.getItem("iconmeta");
    _meta = JSON.parse(_meta);
    if (_meta) {
      this.meta = _meta;
      iconInfo = _meta[this.icon] || this.meta;
    } else {
      let iconmeta = 'https://pegasicdn2.zingworks.com/icons/dev/6/icons.json';
      fetch(iconmeta).then(response => {
        response.json().then(json => {
          this.meta = json;
          console.log("icon", json);
          localStorage.setItem("iconmeta", JSON.stringify(json));
          iconInfo = json[this.icon] || this.meta;
        });
      });
    }
    console.log(iconInfo);
    let icon_size_type = `${this.size ? ICON_SIZE[this.size] : ICON_SIZE[16]}-${this.type ? ICON_TYPE[this.type] : ICON_TYPE["1px"]}`;
    console.log(icon_size_type);
    let url = `https://pegasicdn2.zingworks.com/icons/dev/6/${iconInfo.fragment}/${iconInfo.subFolder}/${icon_size_type}.svg`;
    fetch(url).then(response => {
      response.text().then(svgData => {
        this.iconData = DOMPurify.sanitize(svgData);
        console.log("icon", svgData);
      });
    });
  }


  render() {
    return (
      <Host>
        <span innerHTML={this.iconData}></span>
      </Host>
    );
  }

}
