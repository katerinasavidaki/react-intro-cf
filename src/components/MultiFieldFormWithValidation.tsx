import {useState} from "react";

type FormValues = {
    name: string;
    email: string;
    message: string;
};

type FormErrors = {
    name?: string;
    email?: string;
    message?: string;
};

const initialValues = {
    name: "",
    email: "",
    message: ""
}

const MultiFieldFormWithValidation = () => {
    const [values, setValues] = useState<FormValues>(initialValues);
    const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
    const [errors, setErrors] = useState<FormErrors | null>(null);

    const validateForm = (values: FormValues): FormErrors => {
        const errors: FormErrors = {};

        if (!values.name.trim()) {
            errors.name = "Name is required";
        }
        if (!values.email.trim() ||
            !/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(values.email.trim())) {
            errors.email = "Email is required";
        }
        if (values.message.length < 5) {
            errors.message = "Message is required";
        }

        return errors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;

        setValues((prev) => ({
                ...prev,
                [name]: value
            }));

        setErrors((prev) => ({
            ...prev,
            [name]: undefined
            }));
    };

    const handleClear = () => {
        setValues(initialValues);
        setErrors(null);
        setSubmittedData(null);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validationErrors = validateForm(values);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSubmittedData(null);
            return;
        }

        setSubmittedData(values);
        setValues(initialValues);
        setErrors(null);

    };

    return(
        <>
            <div className="flex mx-auto max-w-sm mt-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            placeholder="Name"
                            type="text"
                            value={values.name}
                            name="name"
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded border"
                        />
                        {errors?.name && (
                            <p className="text-cf-dark-red">{errors.name}</p>
                        )}
                    </div>
                    <div>
                        <input
                            onChange={handleChange}
                            placeholder="Email"
                            type="text"
                            value={values.email}
                            name="email"
                            className="w-full px-4 py-2 rounded border"
                        />
                        {errors?.email && (
                            <p className="text-cf-dark-red">{errors.email}</p>
                        )}
                    </div>
                    <div>
                        <textarea
                            onChange={handleChange}
                            placeholder="Type your message"
                            name="message"
                            value={values.message}
                            className="px-4 py-2 rounded border w-full"
                            minLength={5}
                        >
                        </textarea>
                        {errors?.message && (
                            <p className="text-cf-dark-red">{errors.message}</p>
                        )}
                    </div>
                    <div className="flex gap-4">
                        <button
                            type="submit"
                            className="bg-cf-dark-red text-white px-4 py-2 rounded"
                        >
                            Submit
                        </button>
                        <button
                            onClick={handleClear}
                            type="button"
                            className="bg-gray-200 text-cf-gray px-4 py-2 rounded"
                        >
                            Clear
                        </button>
                    </div>

                    {submittedData &&
                    <div className="mt-6 border-t pt-4 space-y-2">
                        <h2 className="font-semibold">Submitted Data</h2>
                        <p><strong>Name:</strong> {submittedData.name}</p>
                        <p><strong>Email:</strong> {submittedData.email}</p>
                        <p><strong>Message:</strong> {submittedData.message}</p>
                    </div>
                    }

                </form>
            </div>
        </>
    )
}

export default MultiFieldFormWithValidation;