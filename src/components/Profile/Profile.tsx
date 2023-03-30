import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostType} from "../redux/State";

export type ProfileProps = {
    posts:PostType[]
    addPost:(postMessage: string) =>void
}

const Profile = (props:ProfileProps) => {

    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts} addPost={props.addPost}/>
    </div>

};

export default Profile;