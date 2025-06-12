// 1. What is the difference between cookies, local storage, session storage in the browser
// ChatGPT response to this question: https://chatgpt.com/share/684761f6-7fac-800d-ba6a-0e3365457670
// Cookies
// --Cookies have a limit of storage of abou -4K
// --Cookies are server and client side which means that whenever you make an http request you send the cookies too. This is why they are great for authorization, especially if they are https protected. You can share things like tokens between server and client, and you can share the state asyncronously between client and browser

// Local Storage
// -Local Storage limit is
// Chrome: 5MB for origin extensions and can be unlimited with a special permission
// Firefox:  2GB for desktop and 5MB initially for mobile, with limits applying to IndexedDB databases.
// Safari: 1GB per origin, but can be variable.
// persist forever, as opposed to cookies that have an expiration date
// great for storing application state if you want to persist any of your state
// if you close the browser, the state will persist, like if you have a light or dark theme

// Session storage:
// This gets deleted when the tab or browser window is closed
// This can be used to store form input on checkout pages so if the user refreshes browser the user does not lose the information typed into the form
// Since it gets automatically deleted when the user closes the tab or browser window you do not need to worry about cleanup

// 2. If you are setting up a frontend application what are some of the optimizations that can be put in place to make it more performant?
// ChatGPT answer: https://chatgpt.com/share/68477167-8318-800d-8c2d-e6e75090eaa0
// For example a React application that is client-side rendered:
// Bundle the app in a bundler

// 2a. polyfill: they work by looking for different language features in code like promises or the spread operator. Then you check your browsers like the newest version of Chrome and figure out if this particular browser supports this JavaScript feature and if it doesn't, then replace it with some function written in JavaScript that the browser supports. So it is like adding new code to your codebase to support or replace features that maybe your target browser does not support

// 2b. Bundle it together and APPLY COMPRESSION The compressed zip fill wil be decompressed by the browser. This can decrease about 70 percent of the payload over the network. We can do this with
// --uglify and --minification: This gets rid of code spacing and long variable names that are replaced by very small one letter variables.
// --implement source maps: Files that will map the source code to the code we actually distribute
// source maps help you debug in production. The source map helps the developer debug the minfied and uglified code in production. Most of this optimization comes out of the box with Webpack and even when using Vite

// 2c. Code Splitting: Only ship the JavaScript necessary for the initial load and we can lazy load or defer the JavaScript that is not strictly needed for the intial load

// These are all part of the module bundler so once the bundle is already built you can add more optimizations like CDN, optimizing fonts and images

// Image optimizations
// --Size ship minimum/ Dimension: minimum
// --Compression & Image optimization
// --Always use the WebP format
// CDN: You can put all the images in a CDN so you have all the cadhing policies on them
// Lazy Loading images that do not need to be visible on the intiial load but can be loaded on scroll. THIS COULD EFFECT SEO put in general it is Okay to do lazy loading. Specify width and height of lazy loading
// srcSet attribute. Ship different images depending on the device/viewport
// usually modern CDNs offer srcSet out of the box
// So the image is as small as possible taking into consideration both the pixel density of the device (physical resolution / logical resolution or css pixels )

// How would you manage code quality in a large scale front end application?
// 1. for code quality start with a linter like prettier or eslint. For typescript have the tslint set up
// 2. unit test/ ete test
// 3. dependency scan to tell us how vulnerable our node modules are to attacks
// 4. scan for a a11y which stands for accessibility
// 5. lighthouse sentry will tell you how your core web vitals change, or web performance changes over time. Big images or fonts may change the web performance and we can detect this immediately.

// Waht is a XSS attack
// ChatGPT Link for Cross Site Scripting Attack: https://chatgpt.com/share/684751a9-0e14-800d-8597-55f865e7c985
//
// Cross Site Scripting Attack
// The attacker is persisting some sort of JavaScript code into our database. Our users, because they fetch things from the database may run the malicious script.
// Example in 2006 someone was writing comments on famous posts as JavaScript. Whenever you would load that post you'd render that comment, you would actually run that JavaScript on your machine. You could send over the network the JavaScript a fetch with a post, and send your password and credentials over the network to yourself for example
// (also look up php sql injections)
// HOW IN THE HECK DO WE PREVENT THIS!
// 1. We want to sanitize input: This means that the attacker cannot persist JavaScript code into our database as comments or text inputs. We can detect the malicious JS and remove it. We don't want to add JavaScript to the database
// 2. If the malicious script does get in the database, we can make sure we never render html / js from the user
// - __dangerouslySetHTML: This means you are giving code that you do not know what it does to the browser to render to your user browser
// -- essentially avoid directly rendering JS or HTML that you receive from the backend to the frontend

// Explain how a CDN works:
// ChatGPT for CDN https://chatgpt.com/share/6847594d-cb50-800d-b2da-0ebacfed8fe9
// What are some disadvantages and advantages of having a CDN
// It's a network of servers that will replicate your website
// Whenever someone is accessing it from a geographical location rather than getting the assets from our server like the HTML, JavaScript and CSS they would get them from an edge location of the CDN
// CDN: There are a network of servers that will replicate the website. Whenever someone
// is accessing it from a geopraphic location rather than getting the assets from the main
// server like the HTML, CSS, JavaScript they will get them from and edge location of the CDN
// The CDN distribution is in yellow and can
// be all ovear the globe. A DNS table will determine
// latency and the user will get the info from the location
// that is closer to them.  So the circle represents the user
// and the user will get the datta from they yellow CDN
// and not the green place where the maiin server is.
// A popular CDN is AWS Cloud Front. Cloudfare is also very good for a CDN

// What are Micro Frontends and when would you use this kind of frontend architecture
// ChatGPT for Micro frontends https://chatgpt.com/share/68476082-2e3c-800d-979e-dd1d6dc21610
// You have an application and break the application into different parts and each part has its own domain. You might do this because you have so many different people working on different parts of the website. The main the main part of the application is the shell. This part of the application puts all the different "micro" parts together. It is responsible for authentication and shared state. You can now deploy all the different parts of the application independently.
// This way you can separate development teams and make development faster
// You need very complex tooling to make Micro frontends happen.
// What is criteria to consider breaking down a monolitic front end into Microservers?
// Micro frontends are good when you want to split your organization
// So you want to split people into teams and they want to work separately
// You may have things that are very hard to do like sharing state
// The only good reason to do this is that you have so many people working on the front end that you start having issues with the deployment pipeline and for example it may take very long to deploy the application because several teams block each other.
// So you need the deployment to be faster and you must have the technology to work in parallel
