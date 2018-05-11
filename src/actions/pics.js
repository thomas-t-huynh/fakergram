import database from '../firebase/firebase';

const addPics = ( pics ) => ({
    type: 'ADD_PICS',
    pics
});

export const startAddPics = (picsData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            uri = '',
            details = ''
        } = picsData;

        const pics = { uri, details };
        
        return database.ref(`users/${uid}/profile/pics`).push(pics).then((ref) => {
            dispatch(addPics({
                id: ref.key,
                ...pics
            }));
        });
    };
};

const removePics = ({idToReove} = {}) => ({
    type: 'REMOVE_PICS',
    idToRemove
})

export const startRemovePics = ({id}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;    
        return database.ref(`users/${uid}/profile/pics/${id}`).remove().then(() => {
            dispatch(removePics({id}));
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
                })
            })
            dispatch(setPics(pics));
        });
    };
};