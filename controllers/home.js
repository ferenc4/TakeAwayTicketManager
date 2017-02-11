/**
 * GET /
 * Home page.
 */
exports.home = function (req, res) {
    res.render('home', {
        title: 'Home'
    });
};

exports.notFound = function (req, res) {
};
