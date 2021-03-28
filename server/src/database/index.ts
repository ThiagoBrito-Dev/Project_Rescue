import mongoose from 'mongoose';

 mongoose.connect('mongodb://localhost:27017/project_rescue', {
   useNewUrlParser: true,
   useUnifiedTopology: true
  });

  export { mongoose };