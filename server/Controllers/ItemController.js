const pool = require('../dbConfig');
const itemQueries = require('../itemModule/searchItemModule/filterItemQueries'); // Adjust path if needed
const getAllItems = (req, res) => {
  pool.query(itemQueries.getAllItems, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Error fetching users' });
    } else {
      res.json(results);
    }
  });
};

const getItemByMainCat = (req, res) => {
    const cat = req.params.cat; 
    var param = ""
    if(cat==="fhd"){
        param = "Furniture & Home Decor"
    } else if(cat==="eha"){
        param = "Electronics & Home Appliances"
    } else if(cat==="fb"){
        param = "Fashion & Beauty"
    } else if(cat==="bhs"){
        param = "Books, Hobbies & Sports"
    }else if(cat==="k"){
        param = "Kids"
    }
    pool.query(itemQueries.getItemsByMainCategory,[param], (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Error fetching users' });
      } else {
        res.json(results);
      }
    });
  };


  
const getItemBySubCat = (req, res) => {
    const main = req.params.main; 
    const cat  = req.params.cat; 

    console.log("main<<",main, "cat...",cat)
    var param1 = ""
    var param2 = ""
   
    if (main === "fhd") {
        param1 = "Furniture & Home Decor";
        if (cat === "sc") {
            param2 = "Sofa & Chairs";
        } else if (cat === "bw") {
            param2 = "Beds & Wardrobes";
        } else if (cat === "hd") {
            param2 = "Home Decoration";
        } else if (cat === "td") {
            param2 = "Tables & Dining";
        } else if (cat === "of") {
            param2 = "Office Furniture";
        } else if (cat === "go") {
            param2 = "Garden & Outdoor";
        } else if (cat === "cb") {
            param2 = "Curtains & Blinds";
        } else if (cat === "rc") {
            param2 = "Rugs & Carpets";
        }
    }
    
    else if(main==="eha"){
        param1 = "Electronics & Home Appliances"
    } else if(main==="fb"){
        param1 = "Fashion & Beauty"
    } else if(main==="bhs"){
        param1 = "Books, Hobbies & Sports"
    }else if(main==="k"){
        param1 = "Kids"
    }

    console.log(param1,param2)
    pool.query(itemQueries.getItemsBySubCategory,[param1, param2], (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Error fetching users' });
      } else {
        res.json(results);
      }
    });
  };

module.exports = {
    getAllItems,
    getItemByMainCat,
    getItemBySubCat
   
  };
  