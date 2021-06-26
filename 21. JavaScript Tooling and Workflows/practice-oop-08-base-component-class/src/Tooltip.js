import { Component } from "./Component.js"

export class Tooltip extends Component {
    constructor(closeNotifierFunction, tooltipText, hostElementId) {
      super(hostElementId);
      this.closeNotifier = closeNotifierFunction;
      this.tooltipText = tooltipText;
      this.create();
    }
  
    closeTooltip = () => {
      this.detach();
      this.closeNotifier();
    };
  
    create() {
      const tooltipElement = document.createElement("div");
      tooltipElement.className = "card";
      tooltipElement.textContent = this.tooltipText;
      const left = this.hostElement.offsetLeft;
      const top = this.hostElement.offsetTop;
      const height = this.hostElement.clientHeight;
      const scroll = this.hostElement.parentElement.scrollTop;
      const x = left + 20;
      const y = top -10 - scroll + height;
  
      tooltipElement.style.position = 'absolute';
      tooltipElement.style.left = x + 'px';
      tooltipElement.style.top = y + 'px';
      tooltipElement.addEventListener("click", this.closeTooltip);
      this.element = tooltipElement;
    }
  }