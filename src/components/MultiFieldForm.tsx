import {useState} from "react";

type FormValues = {
    name: string;
    email: string;
    message: string;
}

const initialValues = {
    name: "",
    email: "",
    message: ""
}

const MultiFieldForm = () => {
    const [values, setValues] = useState<FormValues>(initialValues);
    const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;

        setValues((prev) => ({
                ...prev,
                [name]: value
            }))
    };

    const handleClear = () => {
        setValues(initialValues);
        setSubmittedData(null);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmittedData(values);
        console.log(values);
        setValues(initialValues);

    };

    return(
        <>
            <div className="flex mx-auto max-w-sm mt-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        placeholder="Name"
                        type="text"
                        value={values.name}
                        name="name"
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded border"
                        required
                    />
                    <input
                        onChange={handleChange}
                        placeholder="Email"
                        type="email"
                        value={values.email}
                        name="email"
                        className="w-full px-4 py-2 rounded border"
                        required
                    />
                    <textarea
                        onChange={handleChange}
                        placeholder="Type your message"
                        name="message"
                        value={values.message}
                        className="px-4 py-2 rounded border w-full"
                        required
                        minLength={5}
                    >
                    </textarea>
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

export default MultiFieldForm;