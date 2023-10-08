import { useState } from "react";

export const useForm = (initialState) => {
    const [values, setValues] = useState(initialState);
    return [
        values, //values object
        e => {
            setValues(
                {
                    ...values, //spread val obj
                    [e.target.name]: e.target.values, //val assing
                }
            );
        },
    ];
};