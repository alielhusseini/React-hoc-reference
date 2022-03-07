import { useImperativeHandle, useState } from "react";

export function Form(props) {

    const { outerRef } = props;
    const [form, setForm] = useState("");

    const innerHandleSave = () => {
        console.log("FORM STATE", form);
    };

    useImperativeHandle(outerRef, () => {
        return {
            innerHandleSave,
            form,
            setForm
        }
    });

    return <>
        <hr />
        <h1>This is the Form component</h1>
        <input type="text" value={form} onChange={e => {
            setForm(e.target.value);
        }} />
    </>
}