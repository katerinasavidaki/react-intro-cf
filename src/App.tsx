// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";

import Layout from "./components/Layout.tsx";
import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";


function App() {

  return (
    <>
        <Layout>
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
            <CounterAdvanced/>
        </Layout>

    </>
  )
}

export default App
