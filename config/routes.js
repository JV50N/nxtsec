// server routes

module.exports = (router) => {
    // render the homepage
    router.get('/', (req, res, next) => {
        res.render('home', {layout: 'default', template: 'home-template'});
    });
}