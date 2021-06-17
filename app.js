const thingsYoavShouldntEat = [
  "בורקס פטריות",
  "בורקס גבינה",
  "פיצה בחמש שקל",
  "טוסט ברכבת",
];

const thingsYoavShouldntDrink = [
  "קפה בחמש שקל",
  "קפה ליד הרכבת בדרך למשכן ברנר",
  "אייס קפה בקופיקס",
];

const mergedList = [...thingsYoavShouldntDrink, ...thingsYoavShouldntEat];

const newArray = mergedList.filter((itemInList) => {
  isBurekas = itemInList.includes("קפה");
  return isBurekas;
});

console.log(newArray);
