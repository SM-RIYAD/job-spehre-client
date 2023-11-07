import React from 'react';
import PageTitle from '../../Components/PageTitle';

const Blogs = () => {
    return (
        <div>
            <PageTitle title={"Blogs"}></PageTitle>
            <div className='max-w-6xl p-2 flex flex-col gap-5 mx-auto spacey-y-5'>
            <div className="card w-full bg-base-100 shadow-xl image-full">

  <div className="card-body">
    <h2 className="card-title">What is an access token and refresh token?</h2>
    <p>
An access token is a time-limited credential granted to an application upon user authorization. It allows the application to access specific resources on behalf of the user.
<br></br>
On the other hand, refresh token is a long-lived credential that can be used to obtain new access tokens without user interaction. It is used to maintain user authentication and extend access beyond the lifespan of an access token.</p>
   
  </div>
</div>

<div className="card w-full bg-base-100 shadow-xl image-full">

  <div className="card-body">
    <h2 className="card-title">How do they work?</h2>
    <p>
    Access Token: Upon user authentication, the server issues an access token to the client application. This token is sent with API requests to access specific resources on behalf of the user. Access tokens are short-lived for security reasons.
<br /> <br />
Refresh Token: Alongside the access token, the server may provide a refresh token. When the access token expires, the client can use the refresh token to obtain a new access token without user interaction. Refresh tokens are long-lived and should be kept secure.</p>
   
  </div>
</div>

<div className="card w-full bg-base-100 shadow-xl image-full">

  <div className="card-body">
    <h2 className="card-title">Where to Store Them on the Client Side?</h2>
    <p>
    Access Token: Store access tokens securely, using methods like HTTP-only cookies, browser Web Storage, or in-memory storage within the client application. Each method has trade-offs in terms of security and usability, so choose based on your application requirements and potential threats.
<br /> <br />
Refresh Token: Refresh tokens should be stored securely, ideally on a secure server, not on the client side. The client sends a secure request to the server to obtain a new access token using the refresh token. Storing refresh tokens on the client side poses a security risk and should be avoided.</p>
   
  </div>
</div>

<div className="card w-full bg-base-100 shadow-xl image-full">

  <div className="card-body">
    <h2 className="card-title">What is express js and NestJS?</h2>
    <p>
    Express.js is a popular and lightweight web application framework for Node.js. It simplifies the process of building robust and scalable web applications and APIs by providing a minimal and flexible set of features. Express.js is known for its simplicity and ease of use, allowing developers to create powerful web servers with minimal code. It provides a robust set of HTTP utility methods and middleware, making it ideal for building single-page applications, multipage websites, and RESTful APIs. <br /> <br />

NestJS:

NestJS is a progressive and versatile Node.js framework for building efficient, scalable, and maintainable server-side applications. It uses TypeScript, a superset of JavaScript, which adds static types to the language, enhancing code quality and developer productivity. NestJS is built with modularity in mind, allowing developers to create highly testable, loosely coupled, and easily maintainable applications. It follows architectural patterns inspired by Angular, making it familiar to developers who have experience with frontend frameworks.</p>
   
  </div>
</div>
<div className="card w-full bg-base-100 shadow-xl image-full">
 
  <div className="card-body">
    <h2 className="card-title">About My Code</h2>
    <p>
I have used javascript based Library React in this Project. I structured all the components in logical folder system. While coding I always paid extra attention to the formatting.</p>
   
  </div>
</div>

            </div>
        </div>
    );
};

export default Blogs;