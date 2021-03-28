import multer from 'multer';

export default {
  storage: multer.diskStorage({
    destination: function (request, file, callback) {
      callback(null, '../uploads');
    },

    filename: function (request, file, callback) {
      callback(null, Date.now() + file.originalname);
    }
  })
};