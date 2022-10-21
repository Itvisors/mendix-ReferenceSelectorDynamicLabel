import { createElement } from "react";

import { Alert } from "./components/Alert";
import { Dropdown } from "./components/Dropdown";

import "./ui/ReferenceSelectorDynamicLabel.css";

export function ReferenceSelectorDynamicLabel(props) {

    /* todo
    plaatje
    readme
    refresh opties als in mendix veranderd
    styling placeholder
    demo project
    */
    const validationFeedback = props.reference.validation;
    return (<div style={props.style}
        className={'mx-compound-control ' + (props.class ? props.class : '')}
        tabIndex={props.tabIndex}>
        <Dropdown
            objectsDatasource={props.objectsDatasource}
            reference={props.reference}
            label={props.label}
            emptyCaption={props.emptyCaption}
            onChangeAction = {props.onChangeAction}>
        </Dropdown>
        <Alert>{validationFeedback}</Alert>
    </div>);
}

