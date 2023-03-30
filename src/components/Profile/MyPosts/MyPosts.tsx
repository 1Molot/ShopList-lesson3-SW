import React from 'react';
import s from './MyPosts.module.css';
import {PostType} from "../../redux/State";

export type MyPostsProps = {
    posts:PostType[]
    addPost:(postMessage: string) =>void
    // updateText:string
}

const MyPosts = (props:MyPostsProps) => {

    let newTextElement;                // надо получить текущее значение в textarea



    let postsElements;              // надо отрисовать посты





    const addPost = (props:MyPostsProps) => {

                            // добавляем новый пост

    }

    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea ref={newTextElement} onChange={()=>{}} ></textarea>
            </div>
            <div>
                {/*<button onClick={addPost}>Add post</button>*/}
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>

};

export default MyPosts;