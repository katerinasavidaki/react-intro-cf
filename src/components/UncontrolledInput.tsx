import {useRef} from "react";

const UncontrolledInput = () => {
    // const [name, setName] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        alert(` Value: ${inputRef.current?.value}`)
    }

    return(
        <>
            <div className="text-center mt-8 space-x-4">
                <input
                    ref={inputRef}
                    className="border rounded px-4 py-2"
                    type="text"
                />
                <button
                    onClick={handleClick}
                    className="bg-cf-dark-red text-white px-4 py-2 rounded"
                >
                    Show Value
                </button>
            </div>
        </>
    )
}

export default UncontrolledInput;