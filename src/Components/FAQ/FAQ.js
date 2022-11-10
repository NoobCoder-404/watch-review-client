import React from 'react';

const FAQ = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            <div>
              <h3 className="font-semibold">What is JSX?</h3>
              <p className="mt-1 dark:text-gray-400">
                JSX is a syntax extension of JavaScript. It is used with React to describe what the
                user interface should look like. By using JSX, we can write HTML structures in the
                same file that contains JavaScript code.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">What is the virtual DOM?</h3>
              <p className="mt-1 dark:text-gray-400">
                DOM stands for Document Object Model. The DOM represents an HTML document with a
                logical tree structure. Each branch of the tree ends in a node, and each node
                contains objects.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">What is an event in React?</h3>
              <p className="mt-1 dark:text-gray-400">
                An event is an action that a user or system may trigger, such as pressing a key, a
                mouse click, etc.
                <br />
                React events are named using camelCase, rather than lowercase in HTML.
                <br />
                With JSX, you pass a function as the event handler, rather than a string in HTML.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">What is a state in React?</h3>
              <p className="mt-1 dark:text-gray-400">
                The state is a built-in React object that is used to contain data or information
                about the component. The state in a component can change over time, and whenever it
                changes, the component re-renders. The change in state can happen as a response to
                user action or system-generated events. It determines the behavior of the component
                and how it will render.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
