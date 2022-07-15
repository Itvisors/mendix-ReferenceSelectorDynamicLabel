import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/ReferenceSelectorDynamicLabel.css";

export class ReferenceSelectorDynamicLabel extends Component {

    getDropdown () {
        if (this.props.objectsDatasource.status === 'available') {
            let optionList = this.props.objectsDatasource.items.map( object => {
                return <option>{this.props.label.get(object).value}</option>
            });
            return <select className={'form-control'}>{optionList}</select>;
        } else {
            return undefined;
        }
    }

    render() {

        return <div style={this.props.style}
        className={'mx-compound-control ' + (this.props.class ? this.props.class : '')}
        tabIndex={this.props.tabIndex}>{this.getDropdown()}</div>;
    }
}
