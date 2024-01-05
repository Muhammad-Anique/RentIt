const getAllItems = `
SELECT items.*, 
       itemcategories.mainCategory, 
       itemcategories.subCategory, 
       itemcategories.type

FROM items
JOIN itemcategories ON items.itemCategory = itemcategories.categoryID
`;

const getItemsByMainCategory = `
SELECT items.*, 
       itemcategories.mainCategory, 
       itemcategories.subCategory, 
       itemcategories.type
FROM items
JOIN itemcategories ON items.itemCategory = itemcategories.categoryID
WHERE itemcategories.mainCategory LIKE ?
`;


const getItemsBySubCategory = `
SELECT items.*, 
       itemcategories.mainCategory, 
       itemcategories.subCategory, 
       itemcategories.type
FROM items
JOIN itemcategories ON items.itemCategory = itemcategories.categoryID
WHERE itemcategories.mainCategory LIKE ? AND itemcategories.subCategory LIKE ?
`;


const getItemsByLocation= `
SELECT items.*, 
       itemcategories.mainCategory, 
       itemcategories.subCategory, 
       itemcategories.type
FROM items
JOIN itemcategories ON items.itemCategory = itemcategories.categoryID
WHERE items.location LIKE ?
`;




const getItemsByQuery= `
SELECT items.*, 
       itemcategories.mainCategory, 
       itemcategories.subCategory, 
       itemcategories.type
 ]
FROM items
JOIN itemcategories ON items.itemCategory = itemcategories.categoryID
JOIN itemkeywords ON items.itemId = itemkeywords.itemId
WHERE items.name LIKE ?
`;





const getTypeIdAndType= `
SELECT itemcategories.categoryID, 
       itemcategories.type
FROM itemcategories
WHERE itemcategories.subCategory  LIKE ?
`;


const getItemById = `

SELECT *
FROM items
JOIN users ON items.OwnerId = users.userId
WHERE items.itemId = ?
LIMIT 1;


`


module.exports = {
 getItemsBySubCategory,
 getItemsByMainCategory,
 getAllItems,
 getItemsByLocation,
 getItemsByQuery,
 getTypeIdAndType,
 getItemById
};
