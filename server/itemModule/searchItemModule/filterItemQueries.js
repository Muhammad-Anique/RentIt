const getAllItems = `
SELECT items.*, 
       itemcategories.mainCategory, 
       itemcategories.subCategory, 
       itemcategories.type,
       itemkeywords.itemKeyWord1,
       itemkeywords.itemKeyWord2,
       itemkeywords.itemKeyWord3,
       itemkeywords.itemKeyWord4,
       itemkeywords.itemKeyWord5,
       itemkeywords.itemKeyWord6,
       itemkeywords.itemKeyWord7
FROM items
JOIN itemcategories ON items.itemCategory = itemcategories.categoryID
JOIN itemkeywords ON items.itemId = itemkeywords.itemId
`;

const getItemsByMainCategory = `
SELECT items.*, 
       itemcategories.mainCategory, 
       itemcategories.subCategory, 
       itemcategories.type,
       itemkeywords.itemKeyWord1,
       itemkeywords.itemKeyWord2,
       itemkeywords.itemKeyWord3,
       itemkeywords.itemKeyWord4,
       itemkeywords.itemKeyWord5,
       itemkeywords.itemKeyWord6,
       itemkeywords.itemKeyWord7
FROM items
JOIN itemcategories ON items.itemCategory = itemcategories.categoryID
JOIN itemkeywords ON items.itemId = itemkeywords.itemId
WHERE itemcategories.mainCategory LIKE ?
`;


const getItemsBySubCategory = `
SELECT items.*, 
       itemcategories.mainCategory, 
       itemcategories.subCategory, 
       itemcategories.type,
       itemkeywords.itemKeyWord1,
       itemkeywords.itemKeyWord2,
       itemkeywords.itemKeyWord3,
       itemkeywords.itemKeyWord4,
       itemkeywords.itemKeyWord5,
       itemkeywords.itemKeyWord6,
       itemkeywords.itemKeyWord7
FROM items
JOIN itemcategories ON items.itemCategory = itemcategories.categoryID
JOIN itemkeywords ON items.itemId = itemkeywords.itemId
WHERE itemcategories.mainCategory LIKE ? AND itemcategories.subCategory LIKE ?
`;


const getItemsByLocation= `
SELECT items.*, 
       itemcategories.mainCategory, 
       itemcategories.subCategory, 
       itemcategories.type,
       itemkeywords.itemKeyWord1,
       itemkeywords.itemKeyWord2,
       itemkeywords.itemKeyWord3,
       itemkeywords.itemKeyWord4,
       itemkeywords.itemKeyWord5,
       itemkeywords.itemKeyWord6,
       itemkeywords.itemKeyWord7
FROM items
JOIN itemcategories ON items.itemCategory = itemcategories.categoryID
JOIN itemkeywords ON items.itemId = itemkeywords.itemId
WHERE items.location LIKE ?
`;




const getItemsByQuery= `
SELECT items.*, 
       itemcategories.mainCategory, 
       itemcategories.subCategory, 
       itemcategories.type,
       itemkeywords.itemKeyWord1,
       itemkeywords.itemKeyWord2,
       itemkeywords.itemKeyWord3,
       itemkeywords.itemKeyWord4,
       itemkeywords.itemKeyWord5,
       itemkeywords.itemKeyWord6,
       itemkeywords.itemKeyWord7
FROM items
JOIN itemcategories ON items.itemCategory = itemcategories.categoryID
JOIN itemkeywords ON items.itemId = itemkeywords.itemId
WHERE items.name LIKE ?
`;


module.exports = {
 getItemsBySubCategory,
 getItemsByMainCategory,
 getAllItems,
 getItemsByLocation,
 getItemsByQuery
};
