import {useState} from "react";
import {z} from "zod";

const formSchema = z.object({
    name: z.string().trim().nonempty("Name is required"),
    email: z
        .string()
        .trim()
        .nonempty("Email is required")
        .email("Invalid email address"),
    message: z.string()
        .trim()
        .nonempty("Message is required")
        .min(5, "Message must be at least 5 characters long")
        .max(20, "Message must be at most 20 characters long")
});

type FormValues = z.infer<typeof formSchema>

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

const MultiFieldFormWithZodValidation = () => {
    const [values, setValues] = useState<FormValues>(initialValues);
    const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
    const [errors, setErrors] = useState<FormErrors>({});

    const validateForm = () => {

        const result = formSchema.safeParse(values);
        // {success: true, data: validatedData}
        // {success: false, error: errors}

        if (!result.success) {
            const newErrors: FormErrors = {};

            result.error.issues.forEach((issue) => {
                const fieldName = issue.path[0] as keyof FormValues;
                newErrors[fieldName] = issue.message;
            });

            setErrors(newErrors);
            return false;
        }

        setErrors({});
        return true;
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
        setErrors({});
        setSubmittedData(null);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isValid = validateForm();

        if (isValid) {
            setSubmittedData(values);
            setValues(initialValues);
        }

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
                            autoComplete="off"
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
                            autoComplete="off"
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
                            autoComplete="off"
                            className="px-4 py-2 rounded border w-full"
                        >
                        </textarea>
                        {errors?.message && (
                            <p className="text-cf-dark-red">{errors.message}</p>
                        )}
                    </div>
                    <div className="flex gap-4">
                        <button
                            type="submit"
                            className="bg-cf-dark-red text-white px-4 py-2 rounded cursor-pointer"
                        >
                            Submit
                        </button>
                        <button
                            onClick={handleClear}
                            type="button"
                            className="bg-gray-200 text-cf-gray px-4 py-2 rounded cursor-pointer"
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

export default MultiFieldFormWithZodValidation;