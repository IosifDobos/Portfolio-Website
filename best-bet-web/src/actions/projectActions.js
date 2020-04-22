const createProject = project => (dispatch, getState, {getFirestore}) => {
    
    // make asynch call to firebase database
    const firestore = getFirestore();
    const {profile} = getState().firebase;
    const authorId = getState().firebase.auth.uid;

    firestore
    .collection('projects')
    .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId,
        createdAt: new Date()
    })
    .then(()=> {
        dispatch({type: 'CREATE_PROJECT', project});
    })
    .catch((err) => {
        dispatch({type: 'CREATE_PROJECT_ERROR', err});
    });  

};
export default createProject;

const deleteProject =  project => (dispatch, getState, {getFirestore}) => {
    console.log(project);
    const firestore = getFirestore();

    firestore
    .collection('projects')
    .doc(project.id)
    .delete()
    .then( () => {
        dispatch({type: 'DELETE_PROJECT', project});
    })
    .catch( (err) =>{
        dispatch({type: "DELETE_PROJECT_ERROR", err});
    });
}