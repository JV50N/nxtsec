// server routes

module.exports = (router) => {
    // render the homepage
    router.get('/', (req, res, next) => {
        res.render('home', {layout: 'default', template: 'home-template'});
    });

    // render about me page
    router.get('/about', (req, res, next) => {
        res.render('about', {layout: 'default', template: 'about-template'});
    });

    // render the contact page
    router.get('/contact', (req, res, next) => {
        res.render('contact', {layout: 'default', template: 'contact-template'})
    })
}