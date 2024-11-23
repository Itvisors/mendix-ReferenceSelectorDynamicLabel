import classNames from "classnames";
import { createElement } from "react";

export const Alert = ({ alertStyle, className, children }) =>
    children ? (
        <div className={classNames(`alert alert-${alertStyle} mx-validation-message`, className)}>{children}</div>
    ) : null;
Alert.displayName = "Alert";
Alert.defaultProps = { alertStyle: "danger" };
