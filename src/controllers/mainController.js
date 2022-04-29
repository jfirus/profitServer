const controller = {
    root: (req, res) => {

        return res.render('index');

    },
    getProfit: (req, res) => {

        console.log(res);
        return res.render('index');

    },

};

module.exports = controller; 