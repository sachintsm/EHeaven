const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.schema;

const userSchema = mongoose.Schema({
    usertype: { type: String, require: true },
    userid: { type: String, require: true, index: true, unique: true },
    selectclass: { type: String, require: true },
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    birthday: { type: String, require: true },
    mobilenumber: { type: String, require: true },
    homenumber: { type: String, require: true },
    gender: { type: String, require: true },
    nationality: { type: String, require: true },
    nicnumber: { type: String, require: true },
    father: { type: String, require: true },
    mother: { type: String, require: true },
    address: { type: String, require: true },
    filepath: { type: String, require: true }
});



const Users = module.exports = mongoose.model("Users", userSchema);


module.exports.saveUser = function (newUser, callback) {

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
            console.log(hash);
            newUser.password = hash;

            if (err) {
                throw err;
            }
            else {
                newUser.save(callback);
            }
        });
    });
};

module.exports.findByUserid = function (userid, callback) {
    const query = { userid: userid };

    Users.findOne(query, callback);
};

module.exports.passwordCheck = function (plainpassword, hash, callback) {
    bcrypt.compare(plainpassword, hash, function (err, res) {
        if (err) throw err;

        if (res) {
            callback(null, res);
        } else {
            callback(err, false);
        }
    });
}

module.exports.findUserById = function (id, callback) {
    Users.findOne(id, callback);
}
