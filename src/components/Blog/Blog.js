import React from 'react';

const Blog = () => {
    return (
        <div className='w-[80%] mx-auto my-12'>
            <h1 className='text-4xl font-bold mb-8 text-center text-violet-800'>Blogs</h1>
            {/* FAQ-1 */}
            <div tabIndex={0} className="collapse my-4 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                     What is the purpose of react router?
                </div>
                <div className="collapse-content"> 
                    <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL</p>
                </div>
            </div>
            {/* FAQ-2 */}
            <div tabIndex={0} className="collapse my-4 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does context api work?
                </div>
                <div className="collapse-content"> 
                    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
            </div>
            {/* FAQ-3 */}
            <div tabIndex={0} className="collapse my-4 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Details of React useRef Hook?
                </div>
                <div className="collapse-content"> 
                    <p>The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.</p> <br/>
                    <p><strong>Does Not Cause Re-renders:</strong><br />
                        If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;