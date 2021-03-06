import React from 'react';
import {Link} from 'react-router-dom';
import PostSummary from './PostSummary';

const PostList = ({posts}) => {
    return (
        <div className="project-list section">
            {posts && posts.map(post => {
                return (
                    <Link to={'/post/' + post.id}  key={post.id}>
                        <PostSummary post={post} />
                    </Link>
                )
            })}            
        </div>
    );
}
export default PostList;