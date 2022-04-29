const fs = require('fs');
const path = require('path');

const portsFilePath = path.join(__dirname, '../data/productsDataBase.json');


const portfolio = {
    price: function(Stock, date){
        return Stock.getPrice(date);
    },
    
    getDifference: function(date1, date2) {  
        date1 = new Date(date1);
        date2 = new Date(date2);

        const date1utc = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
        const date2utc = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
        day = 1000*60*60*24;
        return(date2utc - date1utc)/day
    },

    getProfit: (req, res) => {

        console.log(res);
        return res.render('index');

    },

};

module.exports = portfolio; 