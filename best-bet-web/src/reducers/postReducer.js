const initState = {
    posts: [
        {id: '1', title: 'Post block 1', body: 'gibrish text'},
        {id: '2', title: 'Post block 2', body: 'gibrish text'},
        {id: '3', title: 'Post block 3', body: 'gibrish text'}
    ]
}

const postReducer = (state=initState, action) => {
    switch (action.type){
        case 'CREATE_POST':
            console.log('post created successfully', action.post);
            return state;
        case 'CREATED_POST_ERROR':
            console.log('add new post error', action.type);
            return state;
        case 'DELETE_POST':
            let newPosts = state.posts.filter(post => {
                return action.id !== post.id
            });
            return {
                ...state,
                posts: newPosts
            };
        default:
            return state;
    }
    // if(action.type === "DELETE_POST") {
    //     let newPosts = state.posts.filter(post => {
    //         return action.id !== post.id
    //     });
    //     return {
    //         ...state,
    //         posts: newPosts
    //     }
    // }

    // return state;

}
export default postReducer;