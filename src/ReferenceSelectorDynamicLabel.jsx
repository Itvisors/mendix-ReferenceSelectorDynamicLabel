import "./ui/ReferenceSelectorDynamicLabel.css";
import { Alert } from "./components/Alert";
import { Dropdown } from "./components/Dropdown";
import { createElement } from "react";

export function ReferenceSelectorDynamicLabel(props) {
    const validationFeedback = props.reference.validation;
    return (
        <div
            style={props.style}
            className={"referenceSelectorDynamicLabel mx-compound-control " + (props.class ? props.class : "")}
            data-focusindex={props.tabIndex}
        >
            <Dropdown
                objectsDatasource={props.objectsDatasource}
                reference={props.reference}
                label={props.label}
                emptyCaption={props.emptyCaption}
                onChangeAction={props.onChangeAction}
            ></Dropdown>
            <Alert>{validationFeedback}</Alert>
        </div>
    );
}
