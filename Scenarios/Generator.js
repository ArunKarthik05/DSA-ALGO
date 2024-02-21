function* task() {
    let count =1;
    console.log("Task 1 started");
    yield count;
    count++;
    console.log("Task 1 resumed");
    yield count;
    count++;
    console.log("Task 1 finished");
}

function* scheduler() {
    yield* task();
    console.log("Scheduler finished");
}

const schedule = scheduler();
console.log(schedule.next());
console.log(schedule.next());
console.log(schedule.next());

/*
Use cases:
Generators in JavaScript are powerful tools for controlling the flow of asynchronous code execution and handling data streams. Here are some real-time use cases where generators can be beneficial:

1. **Asynchronous Iteration**:
   - Generators can be used for asynchronous iteration over data streams, such as fetching data from a server or processing large datasets asynchronously. This allows you to iterate over data in a non-blocking manner and handle data as it becomes available.
   
2. **Pagination**:
   - When dealing with paginated data from APIs, generators can be used to lazily fetch data pages as needed. Each iteration of the generator can make an asynchronous API call to fetch the next page of data, simplifying pagination logic and reducing memory usage.

3. **Concurrency Control**:
   - Generators can be used to implement cooperative multitasking and control concurrency in applications. By yielding control back to the event loop at strategic points, generators can prevent blocking operations and ensure that CPU-intensive tasks do not monopolize the event loop.

4. **Data Processing Pipelines**:
   - Generators can be used to create data processing pipelines where each stage of the pipeline is represented by a generator function. Data flows through the pipeline asynchronously, and each stage of the pipeline can perform transformations or filter data as needed.

5. **Event Handling**:
   - Generators can be used to handle asynchronous events in a sequential and synchronous-looking manner. For example, you can use generators with libraries like Redux Saga or Koa.js to handle asynchronous actions or middleware in a readable and maintainable way.

6. **Testing**:
   - Generators can be used in testing frameworks to generate test data lazily and on-demand. This can be especially useful for generating large datasets or testing scenarios where data needs to be generated dynamically based on specific conditions.

7. **Stream Processing**:
   - Generators can be used to process streams of data, such as reading from files or network sockets. Each iteration of the generator can read a chunk of data from the stream and yield it for processing, allowing you to work with streams in a more intuitive and synchronous-like manner.

8. **Resource Management**:
   - Generators can be used to manage resources such as database connections or file handles in a resource-efficient manner. By encapsulating resource acquisition and release logic within generator functions, you can ensure that resources are properly cleaned up after use.

Overall, generators provide a versatile and powerful mechanism for controlling asynchronous code execution and handling data streams in JavaScript applications, making them valuable tools in a wide range of real-time scenarios.
*/