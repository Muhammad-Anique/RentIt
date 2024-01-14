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
(?,?,?,?,?,?,?,CURDATE(),?,?,?,?,?,?,?,?,?,?,?);
`


const getId = `SELECT (MAX(itemId) + 1) as id FROM rentitschema.items;`








module.exports = {
   insertItem,
   getId,
};
   