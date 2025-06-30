import React, { Children, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

/* <div>
    <div>
        <h1>Hello I m in London.</h1>
    </div>
</div> */

// let parent = React.createElement('div',
//     {id:'parent'},
//     React.createElement('div', {id: 'child'},
//         [React.createElement('h1',{id:'greeting'}, 'Hello I m in London.😒'),
//         React.createElement('h2', {id:'subheading'}, 'I am learning React.'),]
//     )
// );
//     const elem = ReactDOM.createRoot(document.getElementById('root'));
//     elem.render(parent);

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// //         root.render(React.createElement(
// //             'h1',
// //             {id: 'greeting'},
// //             'Hello React!'
// // ));

// let parent1 = React.createElement(
//     'div',
//     {id:'parent'},
//     React.createElement('div',{id: 'child'},
//         [React.createElement('h1', {id:'heading'}, 'Hello i m in Singapore .😊'),
//         React.createElement('h2', {id:'subheading'}, 'I am learning React.'),]
//     )
// );

// console.log(parent1);

// const Child = () =><h1>Hello</h1>;

// const Heading =() =>{
//     return <h1 className='heading'>Hello I m in Singapore.😊</h1>;
// }

// //const heading1 = () => <h1>Hello I m in Singapore.😊</h1>;

// const root1 = ReactDOM.createRoot(document.getElementById('root1'));
// // root1.render(child);
// root1.render(<Heading />);

// const elem = <span>React element</span>

// const Title = () =>{
//     return(
//         <>
//         <h1 className='title'>Hello I m in Singapore.{elem}😒</h1>
//         </>
//     )
// };

// const number = 10000;

// const Heading = () =>{
//     return(
//         <>
//             <Title />
//             <h2>{number}</h2>
//             <h2 className='heading'>I am learning React.</h2>
//         </>
//     )
// }

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <div className="pt-25">
          <Outlet />
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
