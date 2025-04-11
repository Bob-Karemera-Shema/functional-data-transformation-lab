# Reflection & Discussion
## What are the benefits of pure functions in real-world codebases?
- Pure functions are predictable as they always return the same output when given the same input and without side effects. This shifts focus on function behaviour and logic during development.
- Pure functions are easier to test as they do not depend on external state. This means that testing only focuses on inputs and outputs.
- Pure functions make codebases look cleaner, readable and easier to maintain because they tend to be small in size and focus on a single task.

## How does immutability prevent bugs?
Immutability prevents bugs by ensuring that once a value is initialised, it can not be changed. This prevents unexpected side effects that arise from unintended changes. These changes include change in shared state from interaction between different parts of the code or lack of proper synchronization of shared state.

## Compare compose() vs pipe()—which do you prefer and why?
Both compose and pipe are functions used to combine multiple functions into a single function. They take a series of functions as arguments and return them in a new function that, when exected, runs the original functions.
The main difference between them is the order of execution. Compose runs the functions from right to left while pipe runs functions from left to right.

I personally prefer pipe because it combines functions from left to right and it is more intuitive when thinking about the execution sequence. The execution flow matches the way I would think about the execution steps in my mind.

## In which functions did you struggle to maintain functional purity
I didn't have major struggles but the challenge was keeping functional purity in mind when checking for edge cases in the Array Transformations section. I did not want to make unnecessary one-line functions but I also did not want to overload my functions with extra functionalities.
The main takeaway is thinking about a function's main purpose and keeping that in mind during codewriting and introducing utility functions where needed.