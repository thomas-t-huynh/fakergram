import database from '../firebase/firebase';

const addPic = ( pics ) => ({
    type: 'ADD_PIC',
    pics
});

export const startAddPic = (picData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            uri = ''
        } = picData;

        const pics = { uri };
        
        return database.ref(`users/${uid}/profile/pics`).push(pics).then((ref) => {
            dispatch(addPic({
                id: ref.key,
                pics
            }));
        });
    };
};

const removePic = ({ id }) => ({
    type: 'REMOVE_PIC',
    id
});

export const startRemovePic = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/profile/pics/${id}`).remove().then(() => {
            dispatch(removePic({ id }))
        })
    }
}



const setPics = (pics) => ({
    type: 'SET_PICS',
    pics
});

export const startGetPics = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/profile/pics`).once('value').then((snapshot) => {
            const pics = [];
            snapshot.forEach((cSnapshot) => {
                pics.push({
                    id: cSnapshot.key,
                    ...cSnapshot.val()
                });
            });
            dispatch(setPics(pics));
        });
    };
};