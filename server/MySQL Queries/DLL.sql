CREATE TABLE Items (
    itemId INT PRIMARY KEY,
    itemName VARCHAR(255),
    itemDescription TEXT,
    isAvailable BOOLEAN,
    itemCondition VARCHAR(50),
    OwnerId INT,
    itemLikes INT,
    dateCreated DATE,
    itemRent DECIMAL(10, 2),
    itemLocation VARCHAR(100),
    itemTermsConditions VARCHAR(255),
	itemUsageDetails VARCHAR(255)
);

CREATE TABLE ItemKeyWords (
    itemID INT PRIMARY KEY,
	itemKeyWord1 VARCHAR(255),
    itemKeyWord2 VARCHAR(255),
    itemKeyWord3 VARCHAR(255),
    itemKeyWord4 VARCHAR(255),
    itemKeyWord5 VARCHAR(255),
    itemKeyWord6 VARCHAR(255),
	itemKeyWord7 VARCHAR(255)
);

CREATE TABLE ImageSet
 (
    itemID INT PRIMARY KEY,
	Image1 longblob,
    Image2 longblob,
    Image3 longblob,
    Image4 longblob,
    Image5 longblob
);



CREATE TABLE ItemTypeDescription (
    itemID INT PRIMARY KEY,
    itemType INT,
    itemCategoryId INT,
    isFragile BOOLEAN,
    FOREIGN KEY (itemType) REFERENCES ItemType(itemTypeId),
    FOREIGN KEY (itemCategoryId) REFERENCES ItemCategories(categoryId)
);


Create TABLE ItemType(
    itemTypeId INT PRIMARY KEY,
    categoryId INT,
	itemType VARCHAR(255),
	FOREIGN KEY (categoryId) REFERENCES ItemCategories(categoryID)
);


Create TABLE ItemCategories(
    categoryID INT PRIMARY KEY,
	mainCategory VARCHAR(255),
    subCategory VARCHAR(255)
);
