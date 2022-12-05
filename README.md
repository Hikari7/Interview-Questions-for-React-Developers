# Interview Questions for React Developers

## What is React JS? What are the advantages compared to other JS frameworks?

React is an efficient, <b>declarative</b>, and flexible open-source front-end Javascript <b>library</b> for building simple, fast and scalable front-end applications. It is developed by Facebook in 2011.

- Use of Virtual DOM to improve efficiency
- Gentle learning curve
- SEO friendly (React-helmet)
- Reusable components
- Huge ecosystem of libraries

```bash
Short answer to React features
- It uses virtual DOM instead of the real DOM.
- It follow the component based approach which helps in building reusable components
- It is used for developing complex  and interactive web and mobile UI
- Even though it was open-sourced only in 2015, it has one of the largest community.
- It follow a uni-directional flow or data building.
```

## What is the Virtual DOM? How does React use the virtual DOM to render the UI?

Virtual DOM is a concept where a virtual representation of the real DOM is kept inside the memory and is synced with the real DOM by a library such as ReactDOM.

The Virtual DOM works in three simple steps:

1. Any underlying data changes, the entire UI is re-rendered in V-DOM representation.
2. The difference between the previous DOM representation and the new one is calculated.
3 Once the calculations are done, the real DOM will be updated with only the things that have actually changed.

## What are React components? What is a state in React?

"Components are the construction blocks of a React's application's UI"

"States are the heart of React components.", 
"States are the source of data and must be kept as simple as possible",
"States are the objects which determine components rendering and behavior"

## What are stateless components?

Stateless components are nothing more than pure functions that render DOM-based solely on the properties provided to them. They do not have the authority to change the state.

## What is JSX?

JSX stands for JavaScript XML.

It allows us to write HTML-like syntax/markup inside JavaScript and place them in the DOM without using functions like `appendChild()` or `createElement()`

## What do you understand by refs in React?

Refs are a way for you to get a handle back to the component you've created. It makes it possible to store a reference to a particular React element or component returned by the component `render()` configuration function.

## When do you need refs?

- Managing focus, text selection or media playback.
- Integrating with third-party DOM libraries (modal-package)
- Triggering imperative animations

## What are the different phases of React component's lifecycle?

```bash
> answer here...
```

## What is the difference between a Container and a Component?

```bash
> answer here...
```

---
---
<center>🤘🏼🤘🏼🤘🏼🤘🏼🤘🏼🤘🏼🤘🏼🤘🏼🤘🏼🤘🏼</center>
---
---
---
# Interview Challenges for React Developers

### A) Add and Delete Items From the List

In this challenge, the developer has to create an input field with a button.

When the button is clicked, the text in the input field should be added below in a list. Moreover, whenever any list item is clicked, it should be removed from the list. 

The motive of this challenge is to check how good the developer is with forms, state, and lists. 

### B) Displaying Data Coming From an API

In this coding challenge, you will be provided with an API that will return some data, maybe, an array of objects. You have to display the data in the UI.

The main motive here is to check how and where the API is called by the developer. In React, there are two ways to call APIs.

- Axios
- fetch API

You may use this API to fetch your data: <https://jsonplaceholder.typicode.com>

### C) Create a Higher-Order Component to reuse component logic

In this coding challenge, you might be asked to create three different components that have similar component logic. So you have to create a Higher-Order Component that will have the component logic and it will be reused by the other three components.

For this challenge, you have three components, each containing a button that increments the value in the state by a specific number. Suppose, three components are:

- “ComponentA” where the button increments the value by two.
- “ComponentB” where the button increments the value by twenty.
- “ComponentC” where the button increments the value by two hundred.

### D) Implementing and using Redux

In this coding challenge, the interviewer wants to check how you implement and use Redux. So, you might be provided with a basic React application with two components - one that will contain the buttons to increment and decrement the global state and another to display the value.

### E) **Share data among components without using props and Redux

In this coding challenge, the interview might give you a React application with multiple nested components like the following.

```bash
A ──► B ─────► C
      └─────►  D

ComponentA states: StringA = "", StringB = ""
ComponentC props/value = {StringA}
ComponentD props/value = {StringB}
```

Suppose there is an object or string values in component “A” and it is required in “C” and “D”.
Resolve this without drilling props through “B”.
