export interface FoodItem {
    id: number;
    name: string;
    price: number;
    description: string;
}

export const foodItems: FoodItem[] = [
    { id: 1, name: "Pizza", price: 12.99, description: "Delicious Italian pizza with assorted toppings." },
    { id: 2, name: "Burger", price: 8.99, description: "Classic beef burger with lettuce, tomato, and cheese." },
    { id: 3, name: "Sushi", price: 15.99, description: "Assorted sushi rolls with fresh fish and rice." },
    { id: 4, name: "Salad", price: 6.99, description: "Fresh garden salad with mixed greens and vinaigrette dressing." },
    { id: 5, name: "Taco", price: 9.99, description: "Mexican style tacos with seasoned meat, salsa, and guacamole." },
    { id: 6, name: "Pasta", price: 11.99, description: "Spaghetti pasta with marinara sauce and meatballs." },
    { id: 7, name: "Steak", price: 19.99, description: "Grilled ribeye steak cooked to perfection." },
    { id: 8, name: "Sushi Burrito", price: 13.99, description: "Large sushi roll wrapped in seaweed with rice and assorted fillings." },
    { id: 9, name: "Soup", price: 5.99, description: "Homemade chicken noodle soup with vegetables." },
    { id: 10, name: "Sandwich", price: 7.99, description: "Classic turkey and cheese sandwich with lettuce and mayo." }
];

