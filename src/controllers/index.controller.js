const indexCntrl = {};

indexCntrl.renderIndex = (req, res) => {
    res.render('index')
};

indexCntrl.renderAbout = (req, res) => {
    res.render('about')
};

module.exports =  indexCntrl;