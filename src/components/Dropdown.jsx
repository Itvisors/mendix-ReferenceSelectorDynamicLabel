import { createElement } from "react";
import classNames from "classnames";

export function Dropdown({objectsDatasource, reference, label, emptyCaption, onChangeAction}) {

    const onChange = (e) => {
        let target = undefined;
        if (e.target.value !== "placeholder") {
            target = objectsDatasource.items[e.target.value];
        }
        reference.setValue(target);
        if (onChangeAction && onChangeAction.canExecute) {
            onChangeAction.execute();
        }
    }

    if (objectsDatasource.status === 'available') {
        let optionList = objectsDatasource.items.map((object, index) => {
            let isSelected = false;
            if (reference.value && object.id === reference.value.id) {
                isSelected = true;
            }
            return <option value={index} selected={isSelected}>{label.get(object).value}</option>
        });
        let className = 'form-control';
        if (reference.value === undefined) {
            className += ' emptyOptionSelected'
        }
        return <select className={className}
            onChange={(e) => onChange(e)}>
            <option value="placeholder"
                className="emptyOption">
                {emptyCaption.value}
            </option>
            {optionList}
        </select>;
    } else {
        return '';
    }
}
