import { useState } from "react";

export const useForm = (initialState) => {
    const [values, setValues] = useState(initialState);

    const handleSubmit = () => {
        console.log(values);
    }

    return [
        values, //values object
        e => {
            setValues(
                {
                    ...values, //spread val obj
                    [e.target.name]: e.target.value, //val assing
                }
            );
        },

        handleSubmit, //return handleSubmit 
    ];
};