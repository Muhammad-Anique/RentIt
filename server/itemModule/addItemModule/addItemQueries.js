const insertItem = `
INSERT INTO rentitschema.items
(
itemId,
itemName,
itemDescription,
isAvailable,

itemCondition,
OwnerId,
itemLikes,

dateCreated,
itemRent,
itemLocation,

itemTermsConditions,
itemUsageDetails,
itemCategory,

image1,
image2,
image3, 

image4,
image5,
keywords

)
VALUES
(?,?,?,?,?,?,?,CURDATE(),?,?,?,?,?, ?,?,?,?,? ,?);
`


const getId = `SELECT (MAX(itemId) + 1) as id FROM rentitschema.items;`




const updateImage1 = `
  UPDATE items
  SET image1 = ?
  WHERE itemId = ?;
`;


const updateImage2 = `
  UPDATE items
  SET image2 = ?
  WHERE itemId = ?;
`;


const updateImage3 = `
  UPDATE items
  SET image3 = ?
  WHERE itemId = ?;
`;


const updateImage4 = `
  UPDATE items
  SET image4 = ?
  WHERE itemId = ?;
`;


const updateImage5 = `
  UPDATE items
  SET image5 = ?
  WHERE itemId = ?;
`;


module.exports = {
   insertItem,
   getId,
   updateImage1,
   updateImage2,
   updateImage3,
   updateImage4,
   updateImage5
   
};
   