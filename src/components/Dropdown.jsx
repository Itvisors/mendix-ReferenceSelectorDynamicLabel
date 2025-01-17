import { createElement } from "react";

export function Dropdown({ objectsDatasource, reference, label, emptyCaption, onChangeAction }) {
    const onChange = e => {
        let target;
        // for placeholder, value can be undefined to clear it
        if (e.target.value !== "placeholder") {
            target = objectsDatasource.items[e.target.value];
        }
        reference.setValue(target);
        if (onChangeAction && onChangeAction.canExecute) {
            onChangeAction.execute();
        }
    };

    if (objectsDatasource.status === "available") {
        const optionList = objectsDatasource.items.map((object, index) => {
            // check if option is selected for default value or when datasource changes
            let isSelected = false;
            if (reference.value && object.id === reference.value.id) {
                isSelected = true;
            }
            return (
                <option key={index} value={index} selected={isSelected}>
                    {label.get(object).value}
                </option>
            );
        });
        const disabled = reference.readOnly;

        let className = "form-control";
        if (reference.value === undefined) {
            className += " emptyOptionSelected";
        }
        return (
            <select disabled={disabled} className={className} onChange={e => onChange(e)}>
                <option value="placeholder" className="emptyOption">
                    {emptyCaption.value}
                </option>
                {optionList}
            </select>
        );
    } else {
        return "";
    }
}
