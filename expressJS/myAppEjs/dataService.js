exports.checkSession = function (request) {
    var sess = request.session;
    if (sess.email) {
        return true;
    }
    else {
        return false;
    }