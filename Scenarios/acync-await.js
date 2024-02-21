(async ()=>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
        console.log(response.status==200)
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
})()