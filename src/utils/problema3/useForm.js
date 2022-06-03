import { useState, useEffect } from "react";

const useForm = (validate) => {
    const [values, setValues] = useState('')
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        setValues(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values))
        setIsSubmitting(true)
        console.log(values)
    }

    return {handleChange, values, handleSubmit, errors}
};

export default useForm;