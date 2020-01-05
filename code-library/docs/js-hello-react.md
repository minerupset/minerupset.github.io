# JavaScript - Introduction to React

<hr>

## What is React and Why Bother?

<hr>
React is a front-end specific library (not framework) for creating responsive user interfaces (UIs). On the back end, it does this by creating a virtual DOM that it can quickly compare over time, and then update the real DOM. This is much cheaper from a CPU and memory perspective than trying to compare the full DOM over time; it's just not realistic.
<br><br>

## How React Operates

<hr>
React uses a component structure, where a core App component has a number of child components (much like the parent-child relationship in the HTML DOM). These components have two key features that drive them: **state{}** and **render()**.

A component's state is the data that component owns and controls. State can include simple properties, callbacks to methods, or even other React components. State is different than the properties (props) of a component, which are passed to it from a parent. With this structure, you often see **stateless functional components**. This means that the state is managed by a parent element, and the necessary values are passed down the component tree as props. This helps maintain code integrity, as more of the logic can be stored at a higher shared level.

Along with state and props, components have a render method. This is what actually generates the markup that will be passed along into the DOM. This is written in JSX (why React files have a .jsx extension) which is very similar to JavaScript, and has some additional elements that allow for an almost HTML like structure when defining pieces for the DOM.

So, state (and props) manage the data associated with a component, while the render method generates the HTML-like markup. React classes can have other methods associated with the state to generate different values and handle methods, but if a the state should be best managed at a parent level, then the React class can be changed to a React stateless component.
<br><br>

## React - A 'Hello World' Equivalent

<hr>

<br><br>

## React - Reminders to Myself

<hr>

- Use `create-react-app`. While it's good to understand how React is working in the background, using the out-of-the-box method really does help get things set up and rolling quickly, and you can always use `eject` later if you need to modify the way it's built.
- Don't be afraid to lift state (or push it down) if you're running into issues with the logic. Being able to quickly modify the structure is surprisingly easy in React, so long as you're passing functions correctly between different elements.
- When in doubt, use arrow functions; there are still weird elements within JavaScript where something may not be flowing through the way you'd expect (e.g. `this.setState()` suddenly isn't a function) but using arrow functions does seem to resolve that.
  <br><br>
