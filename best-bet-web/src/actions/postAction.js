// import { useStore } from "react-redux";

const createPost = post => (dispatch, getState, {getFirestore}) => {
    // make asynch call to firebase database
    const firestore = getFirestore();
    const {profile} = getState().firebase;
    const authorId = getState().firebase.auth.uid;

    firestore
    .collection('posts')
    .add({
        ...post,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId,
        createdAt: new Date()
    })
    .then( () => {
        dispatch({type: 'CREATE_POST', post});
    })
    .catch( (err) => {
        dispatch({type: 'CREATE_POST_ERROR', err});
    });
};
export default createPost;


// export const deletePost = (id) => {
//     return {
//         type: "DELETE_POST",
//         id: id
//     }
// };