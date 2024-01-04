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
    
    else if (main === "eha") {
      param1 = "Electronics & Home Appliances";
      if (cat === "ka") {
        param2 = "Kitchen Appliances";
      } else if (cat === "ca") {
        param2 = "Computers Accessories";
      } else if (cat === "va") {
        param2 = "Video-Audios";
      } else if (cat === "ha") {
        param2 = "Home Appliances";
      } else if (cat === "ps") {
        param2 = "Power Solutions";
      } else if (cat === "caa") {
        param2 = "Cameras & Accessories";
      } else if (cat === "ge") {
        param2 = "Games & Entertainment";
      } else if (cat === "rf") {
        param2 = "Refrigerators & Freezers";
      } else if (cat === "ac") {
        param2 = "AC & Coolers";
      } else if (cat === "ta") {
        param2 = "Televisions & Accessories";
      } else if (cat === "wm") {
        param2 = "Washing Machines";
      } else if (cat === "hg") {
        param2 = "Heaters & Geysers";
      } else if (cat === "mo") {
        param2 = "Microwaves & Ovens";
      } else if (cat === "f") {
        param2 = "Fans";
      } else if (cat === "sm") {
        param2 = "Sewing Machines";
      } else if (cat === "wd") {
        param2 = "Water Dispensers";
      } else if (cat === "is") {
        param2 = "Irons & Steamers";
      }
    } else if (main === "fb") {
      param1 = "Fashion & Beauty";
      if (cat === "cc") {
        param2 = "Clothes & Coats";
      } else if (cat === "wd") {
        param2 = "Wedding Dresses";
      } else if (cat === "wb") {
        param2 = "Watches & Braclets";
      } else if (cat === "fw") {
        param2 = "Footwear";
      } else if (cat === "ja") {
        param2 = "Jewellery & Accessories";
      } else if (cat === "bc") {
        param2 = "Bags & Clutches";
      } else if (cat === "fa") {
        param2 = "Fashion Accessories";
      }
    }
     else if (main === "bhs") {
      param1 = "Books, Hobbies & Sports";
      if (cat === "b") {
        param2 = "Books";
      } else if (cat === "m") {
        param2 = "Magazines";
      } else if (cat === "se") {
        param2 = "Sports Equipment";
      } else if (cat === "te") {
        param2 = "Travel Equipment";
      } else if (cat === "gf") {
        param2 = "Gym & Fitness";
      } else if (cat === "mi") {
        param2 = "Musical Instruments";
      } else if (cat === "ge") {
        param2 = "Gardening Equipment";
      } else if (cat === "og") {
        param2 = "Outdoor Gear";
      }
    }
    else if (main === "k") {
      param1 = "Kids";
      if (cat === "kt") {
        param2 = "Kids Toys";
      } else if (cat === "kv") {
        param2 = "Kids Vehicles";
      } else if (cat === "ka") {
        param2 = "Kids Accessories";
      } else if (cat === "kf") {
        param2 = "Kids Furniture";
      } else if (cat === "bg") {
        param2 = "Baby Gear";
      } else if (cat === "kc") {
        param2 = "Kids Clothing";
      } else if (cat === "ss") {
        param2 = "Swings & Slides";
      }
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



  
const getTypeIdAndType= (req, res) => {
  const subCate = req.params.subcat; 
  console.log(subCate)
  const param = subCate.replace(/-/g, ' ');
  console.log(param)
  pool.query(itemQueries.getTypeIdAndType,[param], (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Error fetching users' });
    } else {
      console.log(results)
      res.json(results);
    }
  });
};



const addItemWithDetails = (req, res) => {
  // const {
  //   itemName,
  //   itemDescription,
  //   isAvailable,
  //   itemCondition,
  //   OwnerId,
  //   itemLikes,
  //   itemRent,
  //   itemLocation,
  //   itemTermsConditions,
  //   itemUsageDetails,
  //   itemCategory,
  //   itemKeyWords,
  //   itemImages,
  // } = req.body;

  pool.getConnection((error, connection) => {

    if (error) {
      console.error('Error acquiring connection:', error);
      res.status(500).json({ error: 'Error acquiring connection' });
    } else {
      // Start transaction
      connection.beginTransaction((err) => {
        if (err) {
          console.error('Error beginning transaction:', err);
          res.status(500).json({ error: 'Error beginning transaction' });
        } else {
          
          connection.query('SELECT MAX(itemId) + 1 AS nextId FROM items;', (error, results) => {
            if (error) {
              console.error('Error retrieving next itemId:', error);
            } else {
              const nextItemId = results[0].nextId;
              console.log('Next available itemId:', nextItemId);
               // // Insert into items table
                connection.query(
                  queries.insertItem,
                  [
                    nextItemId,
                    itemName,
                    itemDescription,
                    isAvailable,
                    itemCondition,
                    OwnerId,
                    itemLikes,
                    itemRent,
                    itemLocation,
                    itemTermsConditions,
                    itemUsageDetails,
                    itemCategory,
                  ],
                  (insertError, results) => {
                    if (insertError) {
                      connection.rollback(() => {
                        console.error('Error inserting item:', insertError);
                        res.status(500).json({ error: 'Error inserting item' });
                      });
                    } else {
                      const itemId = results.insertId; // Get the inserted itemId
                      res.status(200).json({"Id": nextItemId})
                      // // Insert into itemkeywords table
                      // connection.query(
                      //   queries.insertKeywords,
                      //   [itemId, ...itemKeyWords],
                      //   (keywordError) => {
                      //     if (keywordError) {
                      //       connection.rollback(() => {
                      //         console.error('Error inserting keywords:', keywordError);
                      //         res.status(500).json({ error: 'Error inserting keywords' });
                      //       });
                      //     } else {
                      //       // Insert into imageset table
                      //       connection.query(
                      //         queries.insertImages,
                      //         [itemId, ...itemImages],
                      //         (imageError) => {
                      //           if (imageError) {
                      //             connection.rollback(() => {
                      //               console.error('Error inserting images:', imageError);
                      //               res.status(500).json({ error: 'Error inserting images' });
                      //             });
                      //           } else {
                      //             // Commit the transaction if all queries succeed
                      //             connection.commit((commitError) => {
                      //               if (commitError) {
                      //                 connection.rollback(() => {
                      //                   console.error('Error committing transaction:', commitError);
                      //                   res.status(500).json({ error: 'Error committing transaction' });
                      //                 });
                      //               } else {
                      //                 // All queries succeeded
                      //                 res.json({ message: 'Item added successfully' });
                      //               }
                      //             });
                      //           }
                      //         }
                      //       );
                      //     }
                      //   }
                      // );
                    }
                  }
                );




             
            }
          });
          
        }
      });
      // Release the connection
      connection.release();
    }
  });
};



module.exports = {
    getAllItems,
    getItemByMainCat,
    getItemBySubCat,
    getTypeIdAndType,
    addItemWithDetails,
   
  };
  













 