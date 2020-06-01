## Overview
 **Project Title: PrepNChef**
 **Description:** PrepNChef is a React App that will provide users with access to various meal options that they can use to meal prep for a set time period. Users will be able to serach recipes and receive cooking directions as well as ingridient lists and nutrient information.

 ## WireFrames
 **Adobe XD link:** https://xd.adobe.com/view/6b9d9a89-6f29-4f4c-42ee-c95085834a69-1dac/

## MVP
**Goals**
--Create Search feature where users are able to lookup receipes according to input keywords
--Develop a 'Create Meal Plan' feature that allows users to select an amount of days and then save receipes for that amount fo days - feature should return receipes along with nutrient information and a list of all the ingridents neccessary for their entire meal plan
--Develop a single receipe view page that gives user inforamtion about selected receipe including: ingridients, cooking instructions, nutrient info, and equipment needed 
--Use media queries to create implement responsive design 

## Data
**API:** Spoonacular API
**Sample Query:** https://api.spoonacular.com/recipes/findByIngredients?apiKey=897a667132264dbbb46d81ce62011dff&ingredients=chicken,+rice,+beans

**Data Sample**
``
[
    {
        "id": 779916,
        "title": "Pressure Cooker Chicken and Rice",
        "image": "https://spoonacular.com/recipeImages/779916-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 2,
        "missedIngredientCount": 1,
        "missedIngredients": [
            {
                "id": 1032027,
                "amount": 2.0,
                "unit": "Tbsp",
                "unitLong": "Tbsps",
                "unitShort": "Tbsp",
                "aisle": "Spices and Seasonings",
                "name": "seasoning blend",
                "original": "2 Tbsp (approx.) seasoning blend* $0.60",
                "originalString": "2 Tbsp (approx.) seasoning blend* $0.60",
                "originalName": "(approx.) seasoning blend* $0.60",
                "metaInformation": [
                    "(approx.)"
                ],
                "meta": [
                    "(approx.)"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/seasoning.png"
            }
        ],
        "usedIngredients": [
            {
                "id": 5006,
                "amount": 1.0,
                "unit": "",
                "unitLong": "",
                "unitShort": "",
                "aisle": "Meat",
                "name": "chicken",
                "original": "1 whole split chicken (3-4 lbs total) $10.79",
                "originalString": "1 whole split chicken (3-4 lbs total) $10.79",
                "originalName": "whole split chicken (3-4 lbs total) $10.79",
                "metaInformation": [
                    "whole",
                    "split",
                    "(3-4 lbs total)"
                ],
                "meta": [
                    "whole",
                    "split",
                    "(3-4 lbs total)"
                ],
                "extendedName": "split whole chicken",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/whole-chicken.jpg"
            },
            {
                "id": 20444,
                "amount": 1.5,
                "unit": "cups",
                "unitLong": "cups",
                "unitShort": "cup",
                "aisle": "Pasta and Rice",
                "name": "rice",
                "original": "1.5 cups long grain white rice $0.72",
                "originalString": "1.5 cups long grain white rice $0.72",
                "originalName": "long grain white rice $0.72",
                "metaInformation": [
                    "long grain",
                    "white"
                ],
                "meta": [
                    "long grain",
                    "white"
                ],
                "extendedName": "white long grain rice",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/uncooked-white-rice.png"
            }
        ],
        "unusedIngredients": [
            {
                "id": 16409,
                "amount": 1.0,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Canned and Jarred;Frozen",
                "name": "beans",
                "original": "beans",
                "originalString": "beans",
                "originalName": "beans",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/soy-beans.png"
            }
        ],
        "likes": 423
    }
]``

## Post MVP
-- Incorporate reviews on individual receipe component so users can gauge how a receipe was recieved
-- Add functionality that allows user to enter personal body metrics and tracks macros against health standards

