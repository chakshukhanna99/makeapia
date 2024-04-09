
const Product = require('../models/product');
const getAllProducts = async (req, res) => {
    const {company,name,featured,sort,select} = req.query;
    const queryObject={};
    if(company){
        queryObject.company=company;
    }
    let apiData = Product.find(queryObject);
    if(featured){
        queryObject.featured=featured;
    }
    if(name){
        queryObject.name={$regex:name,$options:'i'}
    }
    if(sort){
        let sortfix = sort.replaceAll(","," ");
        // queryObject.sort=sortfix;
       apiData= apiData.sort(sortfix);
    }
    let page = Number(req.query.page)||1;
    let limit=Number(req.query.limit)||10;
    let  skip=(page-1)*limit;
    apiData = apiData.skip(skip).limit(limit);
    if(select){
        let selectfix = select.replaceAll(","," ");
        // queryObject.sort=sortfix;
       apiData= apiData.select(selectfix);
    }
    console.log(queryObject);
    const myData = await apiData;
    console.log(req.query);
    res.status(200).json({myData,nbHits:myData.length});
};
const getAllProductsTesting = async (req, res) => {
    const myData = await Product.find({});
    res.status(200).json({myData});
};

module.exports = {getAllProducts,getAllProductsTesting};