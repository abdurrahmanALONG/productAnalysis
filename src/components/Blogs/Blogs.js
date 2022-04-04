import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blog'>
            <h3>This is my blog page</h3>
            <div>
                <h5>What is Context API?</h5>
                <p>The Context API is a component that provided by the React framework, which enables us to share specific forms of data across all levels of the app. Context API is a new way for a React application to effectively make global variables. This is the alternative to "prop drilling" or using props from grandparent to child to parent, and so on. Context API is a one kind of new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.</p>
            </div>
            <div>
                <h5>What is Semantics TAG?</h5>
                <p>The core characteristic of a semantic element is that it clearly communicated its meaning to both the developer and the browser. These elements clearly define its content.
                    The are several advantages of using semantics tags in HTML:

                    The semantic HTML tags help the search engines and other user devices to determine the importance and context of web pages.
                    The pages made with semantic elements are much easier to read.
                    It has greater accessibility. It offers a better user experience.
                </p>
                <p>The semantic elements added in HTML5 are:{`<article>,<aside>,<details>,<figcaption>,<figure>,<footer>,<header>,<main>,<mark>,<nav>,<section>,<summary>,<time>`}</p>
            </div>
            <div>
                <h5>What is the difference between inline and inline-block elements?</h5>
                <p>Every HTML element is a block in the shape of a rectangle or a square and owns a display property. Unless explicitly specified, all of them have either inline, inline-block or block.Example:{`<a>,<span>,<img>,<strong>`}
                </p>
                <p>Inline: When you use inline elements, You cannot apply specific height or width and margin-top or margin-bottom properties.Example:{`<input>,<button>,<select>,<textarea>`} </p>
                <p>Inline-block
                    : Inline blocks are very similar in nature as inline elements. They can do everything that inline does but can also be set some widths, heights and vertical margins.</p>
                <p>Block: The block elements always start on a new line. They will also take space of an entire row or width. It means that there can be no other HTML elements that can stand side by side with block level elements. You are also able to give set width/height and vertical margins.Example:{`<p>,<h1>,<div>,<header>`}</p>

            </div>
        </div>
    );
};

export default Blogs;