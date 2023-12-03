function calculateRecommendation() {
    // Get selected options
    var selectedOptions = document.querySelectorAll('input[type="radio"]:checked');

    // Check if all questions are answered
    if (selectedOptions.length < 15) {
        alert("Please answer all questions before submitting.");
        return;
    }

    // Initialize variables
    var counts = { a: 0, b: 0, c: 0 };

    // Increment the corresponding variable for each question
    selectedOptions.forEach(function (option) {
        counts[option.value]++;
    });

    // Find the first and second highest counts
    var sortedCounts = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    var firstHighest = sortedCounts[0];
    var secondHighest = sortedCounts[1];

    // Display result based on the logic
    var resultContainer = document.getElementById("result-container");
    if (secondHighest && secondHighest[1] > 5) {
        resultContainer.innerHTML = `<p>Based on your choices, we recommend food and lifestyle for ${firstHighest[0]}-${secondHighest[0]}.</p>`;
    } else if (firstHighest[1] === secondHighest[1]) {
        resultContainer.innerHTML = `<p>Based on your choices, we recommend food and lifestyle for A-B-C.</p>`;
    } else {
        if (firstHighest[0] === 'a') {
            resultContainer.innerHTML = `
                <h1>Your body type is : Vatta</h1>
                <br>
                <h3>• Balancing Tastes</h3>
                <p>Sweet, Sour and Salty</p>
                <br>
                <h3>• Fruits</h3>
                <p>All sweet fruits, Fresh Dates, Figs, Sweet Apple, Banana. Mango and Raisins</p>
                <br>
                <h3>• Vegetables</h3>
                <p>Cooked Vegetables, Asparagus, Sweet Potatoes, Pumpkin, Onion, Less of Leafy Vegetables, Beans, Sprouts</p>
                <br>
                <h3>• Grains</h3>
                <p>Rice, Wheat</p>
                <br>
                <h3>• Legumes</h3>
                <p>Lentils, Moong Beans, Soya</p>
                <br>
                <h3>• Dairy</h3>
                <p>Milk, Fresh Cheese, Butter, Ghee, Cream, Sour cream</p>
                <br>
                <h3>• Oils</h3>
                <p>Sesame, Olive, Sunflower, Peanut</p>
                <br>
                <h3>• Spices</h3>
                <p>Black Pepper, Ginger, Coriander, Garam Masala, Turmeric, Clove Asafoetida, Garlic</p>
                <br>
                <h3>• Nuts</h3>
                <p>Nuts to be taken soaked in water in moderate amounts, Pumpkin Seeds, Sesame Seeds</p>
                <br>
                <h3>• Avoid</h3>
                <p>Dried Food, Junk Food, Cold Food, Frozen Food, less if any large beans like kidney, Gram and Pea. Cold places and wheather too much travelling, insufficient sleep, stress and too much talking</p>
                <br>
            `;
        }
        else if (firstHighest[0] == 'b') {
            resultContainer.innerHTML = `
                <h1>Your body type is : Pitta</h1>
                <br>
                <h3>• Balancing Tastes</h3>
                <p>Sweet, Bitter and Astringent</p>
                <br>
                <h3>• Fruits</h3>
                <p>All sweet and astringent fruits (sour fruits are not good except Amla and Lemon), Apple, Figs, Dates, Pomegranates, Avocado, Melon</p>
                <br>
                <h3>• Vegetables</h3>
                <p>Sweet and Bitter Vegetables, Asparagus, Artichoke, Cabbage, Cauliflower, Leafy Greens, Sweet Potatoes, Pumpkin, Sprouts, Zutccini</p>
                <br>
                <h3>• Grains</h3>
                <p>Rice, Wheat, Oats(less)</p>
                <br>
                <h3>• Legumes</h3>
                <p>All Beans in Moderation</p>
                <br>
                <h3>• Dairy</h3>
                <p>Fresh Buttermilk, Milk, Ghee, Fresh Curd</p>
                <br>
                <h3>• Oils</h3>
                <p>Sunflower, Olive, Coconut</p>
                <br>
                <h3>• Spices</h3>
                <p>Cinnamon, Fennel, Cardamom, Ginger, Mint, Coriander, Turmeric, Cumin</p>
                <br>
                <h3>• Nuts</h3>
                <p>Nuts which are soaked in water, Coconut</p>
                <br>
                <h3>• Avoid</h3>
                <p>Hot or Spicy Food, Chillies, Junk Food, Deep Fried Food, Sour Food, Less Baked and Fermented Food, Hot climate, anger, worry and fasting</p>
                <br>
            `;
        }
        else if (firstHighest[0] == 'c') {
            resultContainer.innerHTML = `
                <h1>Your body type is : Kapha</h1>
                <br>
                <h3>• Balancing Tastes</h3>
                <p>Pungent, Bitter and Astringent</p>
                <br>
                <h3>• Fruits</h3>
                <p>All fruits can be eaten in small amounts</p>
                <br>
                <h3>• Vegetables</h3>
                <p>All Green Leafy Vegetables, Cabbage, Cauliflower, Radish, Pea, Wheat Grass, Okra, Sprouts</p>
                <br>
                <h3>• Grains</h3>
                <p>Barley, Ragi, Corn, Oatmeal, Millet</p>
                <br>
                <h3>• Legumes</h3>
                <p>All kinds of Beans, Lentils, Soya</p>
                <br>
                <h3>• Dairy</h3>
                <p>Buttermilk, Goat Milk</p>
                <br>
                <h3>• Oils</h3>
                <p>Sesame, Mustard Oil, Less Olive Oil</p>
                <br>
                <h3>• Spices</h3>
                <p>Ajwain, Asafoetida, Basil, Clove Cumin, Curry Leaves, Fen ugreek, Garlic, Pepper, Pippali, Turmeric</p>
                <br>
                <h3>• Nuts</h3>
                <p>Very small amounts of Nuts(2-3), Sunflower and Flax Seeds</p>
                <br>
                <h3>• Avoid</h3>
                <p>Sweets, Milk Products(except Buttermilk and Milk), Cake, Chocolates, Pastries and Cold Drinks. Cold, moist places, sedentary lifestyle, sleeping during the day and overeating.</p>
                <br>
            `;
        }
    }

}