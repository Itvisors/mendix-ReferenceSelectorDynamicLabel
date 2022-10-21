import { createElement } from "react";

import "./ui/ReferenceSelectorDynamicLabel.css";

export function ReferenceSelectorDynamicLabel(props) {

    const onChange = (e) => {
        console.warn(e.target.value);
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
                return <option value={index}>{props.label.get(object).value}</option>
            });
            return <select className={'form-control'}
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
    validation
    plaatje
    readme
    lees associatie
    verander als in mendix veranderd
    refresh opties als in mendix veranderd
    styling placeholder
    */
    return (<div style={props.style}
        className={'mx-compound-control ' + (props.class ? props.class : '')}
        tabIndex={props.tabIndex}> {getDropdown()}</div>);
}

