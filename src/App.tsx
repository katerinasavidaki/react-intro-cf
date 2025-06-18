// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Layout from "./components/Layout.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import { useEffect } from "react";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook";
// import CounterWithReducer from "./components/CounterWithReducer.tsx";
// import Todo from "./components/Todo/Todo.tsx";
// import OnlineStatus from "./components/OnlineStatus.tsx";
import {BrowserRouter, Routes, Route} from "react-router";
// import HomePage from "./pages/HomePage.tsx";
// import NameChangerPage from "./pages/NameChangerPage.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
// import UserPage from "./pages/UserPage.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
// import ExamplesPage from "./pages/ExamplesPage.tsx";
// import RouterExamplesLayout from "./components/RouterExamplesLayout";
// import AutoRedirectPage from "./pages/AutoRedirectPage.tsx";
// import NotFoundPage from "./pages/NotFoundPage.tsx";
// import FocusInput from "./components/FocusInput.tsx";
// import UncontrolledInput from "./components/UncontrolledInput.tsx";
// import ControlledInput from "./components/ControlledInput.tsx";
// import MultiFieldForm from "./components/MultiFieldForm.tsx";
// import ExamplesPage from "./pages/ExamplesPage.tsx";
// import MultiFieldFormWithValidation from "./components/MultiFieldFormWithValidation.tsx";
// import MultiFieldFormWithZodValidation from "./components/MultiFieldFormWithZodValidation.tsx";
// import MultiFieldFormWithReactHook from "./components/MultiFieldFormWithReactHook.tsx";
import ProductList from "@/pages/ProductList.tsx";
import Product from "@/pages/Product.tsx";

function App() {

    // useEffect(() => {
    //   const id: number = setInterval(() => console.log("tick"), 1000);
    //   return () => clearInterval(id);
    // }, []);

    return (
        <>
            {/*<Layout>*/}
            {/*<ClassComponent/>*/}
            {/*<FunctionalComponent/>*/}
            {/*<ArrowFunctionalComponent/>*/}
            {/*<ArrowFunctionalComponentWithProps title="Is a Arrow Functional Component with Props!"/>*/}
            {/*<ArrowFunctionalComponentWithPropsType*/}
            {/*  title="Is a Arrow Functional Component with Props!"*/}
            {/*  description="this is a description"*/}
            {/*/>*/}

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
                <Routes>
                    {/*<Route element={<RouterLayout />}>*/}
                    {/*<Route path="/" element={<HomePage />}/>*/}
                    {/*<Route index element={<HomePage />}/>*/}
                    {/*<Route index element={<MultiFieldForm/>}/>*/}
                    {/*<Route index element={<MultiFieldFormWithValidation/>}/>*/}
                    {/*<Route index element={<MultiFieldFormWithZodValidation/>}/>*/}
                    {/*  <Route index element={<MultiFieldFormWithReactHook/>}/>*/}
                    {/*  <Route path="users/:userId" element={<UserPage />}/>*/}
                    {/*  <Route path="users" element={<UserPage />}/>*/}
                    {/*</Route>*/}

                    {/*<Route path="examples?" >*/}
                    {/*<Route path="examples"  element={<RouterExamplesLayout/>}>*/}
                    {/*  <Route index element={<ExamplesPage/>}/>*/}
                    {/*  <Route path="name-changer" element={<NameChangerPage/>}/>*/}
                    {/*  <Route path="online-status" element={<OnlineStatusPage/>}/>*/}
                    {/*  <Route path="auto-redirect" element={<AutoRedirectPage/>}/>*/}
                    {/*  <Route path="controlled-input" element={<ControlledInput />}/>*/}
                    {/*  <Route path="uncontrolled-input" element={<UncontrolledInput />}/>*/}
                    {/*  <Route path="focus-input" element={<FocusInput />}/>*/}
                    {/*</Route>*/}

                    {/*<Route path="users/:userId" element={<UserPage />}/>*/}
                    {/*<Route path="users" element={<UserPage />}/>*/}
                    {/*<Route path="files/*" element={<FilePage/>}/>*/}
                    {/*<Route path="*"  element={<NotFoundPage/>}/>*/}

                    <Route path="products" element={<RouterLayout />}>
                        <Route index element={<ProductList />}/>
                        <Route path="new" element={<Product mode="create" />}/>
                        <Route path=":productId" element={<Product mode="edit" />}/>
                    </Route>

                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App