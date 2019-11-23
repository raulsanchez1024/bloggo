---
title: React Interview Questions
date: "2019-11-23T22:12:03.284Z"
readingTime: "5 min"
---

## React Fundamentals

- What is React?
    - React is a font-end Javascript library.
    - It follows the component based UI approach. Reusability of components makes it very powerful.
- What is the Virtual DOM?
    - Lightweight JS object which originally is just a copy of the real DOM. It is a node tree that lists the elements.
    - React's render function creates a node tree out of the React Components. It then updates the tree in response to the mutation in the data model which is caused by various actions done by the user or by the system.
- Class v.s. Functional Components
    - Class - allow us to use additional features such as local state and lifecycle hooks.
    - Functional - are those that just receive props and renders them to the page, or a component with HTML only
- Is State and Props immutable or mutable?
    - State is mutable and Props are immutable
- State v.s. Props
    - State - a data structure (or object) that starts with default values when the component mounts. State is mutable
    - Props - are how components talk to each other. They are received from above components. Props are immutable
- What is create-react-app?
    - This is the official React CLI that generates projects with built in configuration.
- What is a PureComponent?
    - It is exactly the same as a Component except it handles the shouldComponentUpdate method for us. When props or state changes, PureComponent will do a comparison on both props and state.

## Redux

- What is Redux?
    - Redux is a JS library that allows us to keep the application state in one single store (or object). The only way to change the state is by firing ***actions*** from your application and then writing ***reducers*** for these actions that modify the state.
        - Actions - payloads of information that send data from our application to our store. They are the only source of information for the store. We send them to the store using store.dispatch().
        - Reducers - specify how the application's state changes in response to actions send to the store. Reducers determine how state will change to an action.
        - Store - The store is the object that brings Action and Reducer together. Holds application state, allows access to state via getState(), allows state to be updated via dispatch(action), registers listeners via subscribe, and handles unregistering of listeners via the function returned by subscribe(listener).
