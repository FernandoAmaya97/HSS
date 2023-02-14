const indexCntrl = {};

indexCntrl.renderIndex = (req, res) => {
    res.render('index')
};

indexCntrl.renderAbout = (req, res) => {
    res.render('about')
};

indexCntrl.renderLogin = (req, res) => {
    res.render('login')
};

module.exports =  indexCntrl;