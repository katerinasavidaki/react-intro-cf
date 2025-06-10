import {NavLink} from "react-router";

const ExamplesSection = () => {

    return(
        <>
            <div className="bg-gray-200 py-24">
                <ul className="container mx-auto flex justify-center space-x-4">
                    <li>
                        <NavLink
                            to="/examples/name-changer"
                            className={({isActive}) =>
                                isActive ? "text-cf-dark-red underline underline-offset-4" : "text-cf-gray"}
                        >
                            Name Changer
                        </NavLink>
                    </li>
                    <li>
                        {/*<Link to="/examples/online-status">Online Status</Link>*/}
                        <NavLink
                            to="/examples/online-status"
                            className={({isActive}) =>
                                isActive ? "text-cf-dark-red underline underline-offset-4" : "text-cf-gray"}
                        >
                            Online Status
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ExamplesSection;