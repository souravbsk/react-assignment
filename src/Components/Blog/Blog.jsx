import React, { useRef } from "react";
import Banner from "../Banner/Banner";

const Blog = () => {
  return (
    <div>
      <Banner>Blogs</Banner>
      <div className="container space-y-5 mt-8 md:mt-32">
        <div className="space-y-2">
          <h2 className="font-semibold text-2xl">
            When should you use context API? ?
          </h2>
          <p>
            context api is react build in power full function . we can use it to
            pass value without any props drilling. why we can easily manage our
            state using context api to pass value. if we have data which shared
            between multiple component that are not directly connected each
            other. we can use context api to pass data very easily . also
            avoiding props drilling. if we want to props pass down to deeply
            multiple nested component . we can easily manage this using context
            api without manually props drilling,
            <br />
            first we need a to import createContext(). must be this hook call
            with a default value outside function component . and store it in a
            variable finally export the variable. after export we need to access
            this. for access this data we Want to import another hook which is
            useContext() pass the parameter createContext variableName . like
            useContext(varibaleName); for pass data we want to set a provider .
            parent component all jsx element wrap with variableName.provider and
            pass the value inside value property.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="font-semibold text-2xl">What is a custom hook?</h2>
          <p>
            Custom hook is a reusable function . where we can write some js code
            which is use multiple components. it is like react build-in hook..
            but we write to create this custom hook . if we need same
            functionality and also return same output .. we can create a js file
            . and write the functionality code. and finally where we need to
            use. we can import this custom hook inside component and use it.
            it's actually using for avoiding repeated code.
            <br />
            custom hooks start with the prefix "use" and follow the some rules
            as react's built-in hook, such as useState or useEffect. example:
            <strong>useCustomHook()</strong>
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="font-semibold text-2xl">What is useRef?</h2>
          <p>
            useRef is an another react build in hook .. we can use it to get our
            node element value. react not allow to manipulate dom element . but
            if we need to get dom element value or text and manipulate it. we
            can do this using useRef.
            <br />
            first we need to import useRef from react and store in a variable.
            for get value or text we need to link up between useRef and target
            element. useRef hook have a attribute which is ref. we use this ref
            attribute to link up target element and useRef. after link up we can
            get element value text..and easily manipulate it.
            <strong>
              if you really need to manipulate dom then use useRef other wish
              must be avoid this hook.. because react can't allow to directly
              manipulate dom
            </strong>
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="font-semibold text-2xl">What is useMemo?</h2>
          <p>
            useMemo is an another build in react hook .. we can use it to
            optimize performance our web site. if we write a which is
            need to calculate high time... our website is waiting for render
            after calculate done; it was a bad experience for user .. website
            loading time is increase for this calculate.
            we can apply this code inside useMemo to stop the loading time. then no worry for lazy render;
          
            if we want to avoid unnecessary re-render component we can use this hook.
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
