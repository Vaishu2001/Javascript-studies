/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const listElement = document.querySelector('.posts');\r\nconst postTemplate =document.getElementById('single-post');\r\nconst xhr =new XMLHttpRequest();//create a new xmlhttprequest object\r\nconst form =document.querySelector('#new-post form');\r\nconst fetchButton = document.querySelector('#available-posts button');\r\nglobalThis.DEFAULT_VALUE='Max';\r\nconst sendRequest = function(method,url,data)\r\n{\r\n    // eslint-disable-next-line no-unused-vars\r\n    const promise =new Promise((resolve,_reject)=>{\r\n        const xhr=new XMLHttpRequest();\r\n        xhr.open(method,url);//first step towards configuring the request\r\n        xhr.responseType ='json'//automatic parsing \r\n        xhr.onload =function(){//stringify helps to convert js->json and parse converts json->js\r\n        //console.log(xhr.response);\r\n        resolve(xhr.response);\r\n        const listOfPosts = xhr.response;//so we store in array\r\n        console.log(listOfPosts);\r\n    //     for(const post of listOfPosts)\r\n    //     {\r\n    //         const postEl=document.importNode(postTemplate.content,true);\r\n    //         postEl.querySelector('h2').textContent=post.title.toUpperCase();\r\n    //         postEl.querySelector('p').textContent=post.body;\r\n    //         listElement.append(postEl);\r\n    //     }\r\n     } \r\n    xhr.send(JSON.stringify(data));//send the requestpost\r\n    });\r\n    return promise;\r\n}\r\nasync function fetchPosts(){\r\n    () =>{\r\n        const listOfPosts = xhr.response;//so we store in array\r\n    console.log(listOfPosts);\r\n    \r\n    for(const post of listOfPosts)\r\n    {\r\n        const postEl=document.importNode(postTemplate.content,true);\r\n        postEl.querySelector('h2').textContent=post.title.toUpperCase();\r\n        postEl.querySelector('p').textContent=post.body;\r\n        listElement.append(postEl);\r\n    }\r\n}\r\n\r\n    };\r\n\r\n    \r\n/* xhr.open('GET','https://jsonplaceholder.typicode.com/posts');//first step towards configuring the request\r\nxhr.responseType ='json'//automatic parsing \r\nxhr.onload =function(){//stringify helps to convert js->json and parse converts json->js\r\n    //console.log(xhr.response);\r\n    const listOfPosts = xhr.response;//so we store in array\r\n    console.log(listOfPosts);\r\n    for(const post of listOfPosts)\r\n    {\r\n        const postEl=document.importNode(postTemplate.content,true);\r\n        postEl.querySelector('h2').textContent=post.title.toUpperCase();\r\n        postEl.querySelector('p').textContent=post.body;\r\n        listElement.append(postEl);\r\n    }\r\n} */\r\n//using post and send data to api\r\nasync function createPost(title,content)\r\n{\r\n    const userId =Math.random();\r\n    const post={\r\n        title:title,\r\n        body:content,\r\n        userId:userId\r\n    };\r\n    sendRequest('POST','https://jsonplaceholder.typicode.com/posts',post);\r\n}\r\n//fetchPosts();\r\n//createPost('DUMMy','A dummy post!');\r\n//------------------\r\n//enable them from UI\r\nfetchButton.addEventListener('click',fetchPosts);\r\nform.addEventListener('submit',event=>{\r\n    event.preventDefault();\r\n    const enteredTitle =event.currentTarget.querySelector('#title').value;\r\n    const enteredContent = event.currentTarget.querySelector('#content').value;\r\n    createPost(enteredTitle,enteredContent);\r\n})\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });