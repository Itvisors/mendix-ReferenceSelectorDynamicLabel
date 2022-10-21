import { createElement } from "react";

import { Alert } from "./components/Alert";

import "./ui/ReferenceSelectorDynamicLabel.css";

export function ReferenceSelectorDynamicLabel(props) {

    const onChange = (e) => {
        let target = undefined;
        if (e.target.value !== "placeholder") {
            target = props.objectsDatasource.items[e.target.value];
        }
        props.reference.setValue(target);
        if (props.onChangeAction && props.onChangeAction.canExecute) {
            props.onChangeAction.execute();
        }
    }

    const getDropdown = () => {
        if (props.objectsDatasource.status === 'available') {
            let optionList = props.objectsDatasource.items.map((object, index) => {
                let isSelected = false;
                if (props.reference.value && object.id === props.reference.value.id) {
                    isSelected = true;
                }
                return <option value={index} selected = {isSelected}>{props.label.get(object).value}</option>
            });
            let className = 'form-control';
            if (props.reference.value === undefined) {
                className += ' emptyOptionSelected'
            }
            return <select className={className}
                onChange={(e) => onChange(e)}>
                <option value= "placeholder"
                    className="emptyOption">
                    {props.emptyCaption.value}
                </option>
                {optionList}
            </select>;
        } else {
            return undefined;
        }
    }
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
                tabIndex={props.tabIndex}> {getDropdown()}
                <Alert>{validationFeedback}</Alert>
            </div>);
}

