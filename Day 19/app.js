const listElement = document.querySelector('.posts');
const postTemplate =document.getElementById('single-post');
const xhr =new XMLHttpRequest();//create a new xmlhttprequest object
const form =document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const sendRequest = function(method,url,data)
{
    const promise =new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest();
        xhr.open(method,url);//first step towards configuring the request
        xhr.responseType ='json'//automatic parsing 
        xhr.onload =function(){//stringify helps to convert js->json and parse converts json->js
        //console.log(xhr.response);
        resolve(xhr.response);
        const listOfPosts = xhr.response;//so we store in array
        console.log(listOfPosts);
    //     for(const post of listOfPosts)
    //     {
    //         const postEl=document.importNode(postTemplate.content,true);
    //         postEl.querySelector('h2').textContent=post.title.toUpperCase();
    //         postEl.querySelector('p').textContent=post.body;
    //         listElement.append(postEl);
    //     }
     } 
    xhr.send(JSON.stringify(data));//send the requestpost
    });
    return promise;
}
async function fetchPosts(){
    const response = await sendRequest('GET','https://jsonplaceholder.typicode.com/posts');
    responseData =>{
        const listOfPosts = xhr.response;//so we store in array
    console.log(listOfPosts);
    for(const post of listOfPosts)
    {
        const postEl=document.importNode(postTemplate.content,true);
        postEl.querySelector('h2').textContent=post.title.toUpperCase();
        postEl.querySelector('p').textContent=post.body;
        listElement.append(postEl);
    }
}

    };

    
/* xhr.open('GET','https://jsonplaceholder.typicode.com/posts');//first step towards configuring the request
xhr.responseType ='json'//automatic parsing 
xhr.onload =function(){//stringify helps to convert js->json and parse converts json->js
    //console.log(xhr.response);
    const listOfPosts = xhr.response;//so we store in array
    console.log(listOfPosts);
    for(const post of listOfPosts)
    {
        const postEl=document.importNode(postTemplate.content,true);
        postEl.querySelector('h2').textContent=post.title.toUpperCase();
        postEl.querySelector('p').textContent=post.body;
        listElement.append(postEl);
    }
} */
//using post and send data to api
async function createPost(title,content)
{
    const userId =Math.random();
    const post={
        title:title,
        body:content,
        userId:userId
    };
    sendRequest('POST','https://jsonplaceholder.typicode.com/posts',post);
}
//fetchPosts();
//createPost('DUMMy','A dummy post!');
//------------------
//enable them from UI
fetchButton.addEventListener('click',fetchPosts);
form.addEventListener('submit',event=>{
    event.preventDefault();
    const enteredTitle =event.currentTarget.querySelector('#title').value;
    const enteredContent = event.currentTarget.querySelector('#content').value;
    createPost(enteredTitle,enteredContent);
})