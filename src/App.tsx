// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";

// import Layout from "./components/Layout.tsx";
// import Todo from "./components/Todo/Todo.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";
// import CounterWithReducer from "./components/CounterWithReducer.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import {useEffect} from "react";
// import OnlineStatus from "./components/OnlineStatus.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";


import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
// import Layout from "./components/Layout.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
import UserPage from "./pages/UserPage.tsx";
import RouterLayout from "./components/RouterLayout.tsx";

function App() {

    // useEffect(() => {
    //     const id: number = setInterval(() => console.log("tick"), 1000)
    //
    //     return () => clearInterval(id);
    // }, []);

  return (
    <>
        {/*<Layout>*/}
            {/*<ClassComponent />*/}
            {/*<FunctionalComponent />*/}
            {/*<ArrowFunctionalComponent />*/}
            {/*<ArrowFunctionalComponentWithProps title="Is an Arrow Functional Component With Props"/>*/}
            {/*<ArrowFunctionalComponentWithPropsType*/}
            {/*    title="Is an Arrow Functional Component With Props"*/}
            {/*    description="this is a description"/>*/}

            {/*<ClassComponentWithState/>*/}
            {/*<FunctionalComponentWithState/>*/}

            {/*<Counter/>*/}
            {/*<NameChanger/>*/}
            {/*<CounterWithMoreStates/>*/}
            {/*<CounterAdvanced/>*/}
            {/*<CounterWithCustomHook/>*/}
            {/*<CounterAdvancedWithCustomHook/>*/}
            {/*<CounterWithReducer/>*/}
            {/*<Todo/>*/}
            {/*<OnlineStatus/>*/}
        {/*</Layout>*/}

        <BrowserRouter>
            {/*<Layout>*/}
                <Routes>
                    {/*<Route path="/" element={<HomePage/>}/>*/}
                    <Route element={<RouterLayout/>}>
                        <Route index element={<HomePage/>}/>
                    </Route>

                    <Route path="name-changer" element={<NameChangerPage/>}/>
                    <Route path="examples?">
                        <Route path="name-changer" element={<NameChangerPage/>}/>
                        <Route path="online-status" element={<OnlineStatusPage/>}/>
                    </Route>
                    <Route path="users/:userId" element={<UserPage/>}/>
                    <Route path="users" element={<UserPage/>}/>
                    {/*<Route path="files/*" element={<FilePage/>}/>*/}

                </Routes>
            {/*</Layout>*/}
        </BrowserRouter>
    </>
  )
}

export default App
