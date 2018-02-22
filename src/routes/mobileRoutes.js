import {
    addNewMobile,
    getMobiles,
    getMobileByCode,
    updateMobile,
    deleteMobile,
    getMobileById
} from '../controllers/mobileController';

const routes = (app) => {

    //mobile
    app.route('/mobile')
        .get(getMobiles)//l
        .post(addNewMobile);//c

    app.route('/mobile/:mobileId')
        .get(getMobileById)//r
        .put(updateMobile)//u
        .delete(deleteMobile);//d

}

export default routes