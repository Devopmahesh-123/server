import mongoose from "mongoose";

const AccessCode = mongoose.Schema({
            access_code:{
                type:String
            }
},{
    versionKey: false,
    collation: { locale: 'en' },
    timestamps: { currentTime: () => Date.now() }
})

const Code = mongoose.model('code',AccessCode,'code');
export default Code;