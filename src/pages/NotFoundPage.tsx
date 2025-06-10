import {useEffect} from "react";
import {Link} from "react-router";

const NotFoundPage = () => {

    useEffect(() => {
        document.title = "Error 404: Page Not Found";
    }, []);

    return(
        <>
            <div className="text-center py-36 space-y-6">
                <h1 className="text-9xl font-bold text-cf-dark-red">404</h1>
                <p className="text-4xl text-dark-gray">Page not found</p>
                <p className="text-lg text-cf-gray">The page you are looking for does not exist.</p>
                <Link to="/" className="bg-cf-dark-red text-white px-4 py-2 rounded">
                    Go back to Home
                </Link>
            </div>
        </>
    )
}

export default NotFoundPage;