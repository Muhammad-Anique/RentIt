const insertItem = `
INSERT INTO rentitschema.items
(itemId,
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
itemCategory)
VALUES
(?,?,?,?,?,?,?,CURDATE(),?,?,?,?,?);
`


const getId = `SELECT MAX(itemId) + 1 FROM rentitschema.items;`

const insertKeywords  =`
INSERT INTO rentitschema.itemkeywords
(itemID,
itemKeyWord1,
itemKeyWord2,
itemKeyWord3,
itemKeyWord4,
itemKeyWord5,
itemKeyWord6,
itemKeyWord7)
VALUES
(?,?,?,?,?,?,?,?);
`


const insertImages = `INSERT INTO rentitschema.imageset
(itemID,
Image1,
Image2,
Image3,
Image4,
Image5)
VALUES
(?,?,?,?,?,?)
`

module.exports = {
   insertItem,
   getId,
   insertKeywords,
   insertImages
   
   
   };
   