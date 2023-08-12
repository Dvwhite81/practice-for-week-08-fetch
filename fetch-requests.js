/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

// Your code here
fetch("/products").then((res) => {
  console.log(res.status);
});

/* ====== 2. Print true if the status of the response was successful ====== */

// Your code here
fetch("/products").then((res) => {
  console.log(res.ok);
});

/* =================== 3. Print the Content-Type Header =================== */

// Your code here
fetch("/products").then((res) => {
  console.log(res.headers.get("Content-Type"));
});

/* ============== 4. Print the body of the response as text =============== */

// Your code here
fetch("/products")
  .then((res) => res.text())
  .then((data) => {
    console.log(data);
  });


// Additional practice

// Status code
fetch("/products/new")
  .then((res) => console.log(res.status));

// Content-Type header
fetch("/products/new")
  .then((res) => console.log(res.headers.get("Content-Type")));

// Body of response
fetch("/products/best-selling")
  .then((res) => res.text())
  .then((data) => console.log(data));

// Print true if status of response was successful
fetch("/products/1")
  .then((res) => console.log(res.ok));
