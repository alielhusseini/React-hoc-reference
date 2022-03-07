import { useRef } from "react";
import Header from "./Header";

export function withHeaderBtns(Component) {

    return props => {

        const componentRef = useRef(null);

        const outerHandleSave = () => {
            componentRef.current.innerHandleSave();
        }

        return <>
            <Header outerHandleSave={outerHandleSave} />
            <Component  {...props} outerRef={componentRef} />
        </>
    }
}
