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

    var one, two;
    if (firstHighest[0] === 'a') {
        one = 'Vatta';
    }
    else if (firstHighest[0] === 'b') {
        one = 'Pitta';
    }
    else if (firstHighest[0] === 'c') {
        one = 'Kapha';
    }

    if (secondHighest[0] === 'a') {
        two = 'Vatta';
    }
    else if (secondHighest[0] === 'b') {
        two = 'Pitta';
    }
    else if (secondHighest[0] === 'c') {
        two = 'Kapha';
    }

    // Display result based on the logic
    var resultContainer = document.getElementById("result-container");
    if (secondHighest && secondHighest[1] > 5) {
        if ((firstHighest[0] === 'a' && secondHighest[0] === 'b') || (firstHighest[0] === 'b' && secondHighest[0] === 'a')) {
            resultContainer.innerHTML = `
                <h1>Your body type is : ${one}-${two}.</h1>
                <br>
                <p>Vata consists mostly of the two elements air and space (also known as ether) and is generally described as cold, light, dry, rough, flowing, and spacious. Autumn represents vata for its cool, crisp days. Known for being associated with a tenacious personality, the pitta dosha is based on fire and water. It’s commonly described as hot, light, sharp, oily, liquid, and mobile. Summer is known as pitta season for its sunny, hot days.</p>
                <br>
                <p>Those with the vata dosha are usually described as slim, energetic, and creative. They’re known for thinking outside the box but can become easily distracted. What’s more, their mood is highly dependent on the weather, people around them, and foods they eat. People with pitta are said to usually have a muscular build, be very athletic, and serve as strong leaders. They’re highly motivated, goal-oriented, and competitive. Still, their aggressive and tenacious nature can be off-putting to some people, which can lead to conflict.</p>
                <br>
                <p>Strengths: learn quickly, highly creative, multitasker, kind-hearted, flexible, “on the go,” naturally slim, intelligent, purposeful, learns quickly, self-determined, masters skills easily, strong desire for success, strong, natural leaders, quick metabolism, good circulation, healthy skin and hair</p>
                <br>
                <p>Weaknesses: forgetful, anxious, unstable mood, can get overwhelmed easily, highly sensitive to the cold, has trouble sleeping, irregular appetite and eating patterns, prone to digestive issues and gas, poor circulation (cold hands and feet), impatient, prone to conflict, always hungry, mood swings when hungry, prone to acne and inflammation, sensitive to hot temperatures</p>
                <br>
                <p>According to Ayurveda, for optimal health, a vata-dominant person should follow a regular daily routine, manage stress through meditation and other calming activities, and maintain a warm body temperature by avoiding cold weather and consuming warm foods and drinks. Those with a pitta-dominant dosha should focus on work-life balance and avoid extreme heat (e.g., weather, spicy food)</p>
                <br>
                <h3>• Balancing Tastes</h3>
                <p>Sweet, Bitter, Salty and Astringent</p>
                <br>
                <h3>• Fruits</h3>
                <p>All sweet and astringent fruits(sour fruits are not good except Amla and Lemon), Dates, Figs, Apple, Banana, Pomegranates, Mango, Avocado, Raisins and Melons.</p>
                <br>
                <h3>• Vegetables</h3>
                <p>Sweet and Bitter Vegetables, Cooked Vegetables, Asparagus, Sweet Potatoes, Artichoke, Pumpkin, Cabbage, Onion, Cauliflower, Less of leafy vegetables, Sprouts, Zutccini, Beans(less if any large beans like kidney, gram and pea).</p>
                <br>
                <h3>• Grains</h3>
                <p>Rice, Wheat, Oats(less)</p>
                <br>
                <h3>• Legumes</h3>
                <p>Lentils, Soya, Moong and all other beans in moderation.</p>
                <br>
                <h3>• Dairy</h3>
                <p>Milk, Fresh Cheese, Fresh Buttermilk, Butter, Ghee, Cream, Fresh Curd, Sour cream.</p>
                <br>
                <h3>• Oils</h3>
                <p>Sesame, Olive, Sunflower, Coconut, Peanut.</p>
                <br>
                <h3>• Spices</h3>
                <p>Black Pepper, Cinnamon, Ginger, Fennel, Coriander, Cardamom, Garam Masala, Turmeric, Mint, Clove, Asafoetida, Cumin, Garlic.</p>
                <br>
                <h3>• Nuts</h3>
                <p>Nuts to be taken soaked in water in moderate amounts, Pumpkin Seeds, Coconut, Sesame Seeds.</p>
                <br>
                <h3>• Avoid</h3>
                <p>Hot or spicy Food, Dried Food, Junk Food, Chillies, Cold Food, Deep Fried Food, Frozen Food, Sour Food, less if any large beans like Kidney, Gram and Pea, Less Baked and Fermented Food, Extreme Hot and Extreme Cold weather, too much travelling, insufficient sleep, stress, anger, too much talking, worry and fasting.</p>
                <br>
            `;
        }
        else if ((firstHighest[0] === 'a' && secondHighest[0] === 'c') || (firstHighest[0] === 'c' && secondHighest[0] === 'a')) {
            resultContainer.innerHTML = `
                <h1>Your body type is : ${one}-${two}.</h1>
                <br>
                <p>Vata consists mostly of the two elements air and space (also known as ether) and is generally described as cold, light, dry, rough, flowing, and spacious. Autumn represents vata for its cool, crisp days. Kapha (pronounced “kuffa”) is based on earth and water. It can be described as steady, stable, heavy, slow, cold, and soft. Spring is known as kapha season, as many parts of the world slowly exit hibernation.</p>
                <br>
                <p>Those with the vata dosha are usually described as slim, energetic, and creative. They’re known for thinking outside the box but can become easily distracted. What’s more, their mood is highly dependent on the weather, people around them, and foods they eat. People with this dosha are described as strong, thick-boned, and caring. They’re known for keeping things together and being a support system for others. Kapha-dominant people rarely get upset, think before acting, and go through life in a slow, deliberate manner.</p>
                <br>
                <p>Strengths: learn quickly, highly creative, multitasker, kind-hearted, flexible, “on the go,” naturally slim, empathetic, caring, trusting, patient, calm, wise, happy, romantic, strong bones and joints, healthy immune system</p>
                <br>
                <p>Weaknesses: forgetful, anxious, unstable mood, can get overwhelmed easily, highly sensitive to the cold, has trouble sleeping, irregular appetite and eating patterns, prone to digestive issues and gas, poor circulation (cold hands and feet), prone to weight gain, slow metabolism, sluggishness, over-sleeping, breathing issues (i.e., asthma, allergies), higher risk of heart disease, mucus buildup, susceptible to depression, needs regular motivation and encouragement.</p>
                <br>
                <p>According to Ayurveda, for optimal health, a vata-dominant person should follow a regular daily routine, manage stress through meditation and other calming activities, and maintain a warm body temperature by avoiding cold weather and consuming warm foods and drinks. For good health, a kapha-dominant person should focus on regular exercise, a healthy diet, maintain a warm body temperature (e.g., by sitting in a sauna or eating warm food), and establish a regular sleep routine.</p>
                <br>
                <h3>• Balancing Tastes</h3>
                <p>Pungent, Bitter, Sour, Salty and Astringent</p>
                <br>
                <h3>• Fruits</h3>
                <p>In small amount all fruits, Fresh Dates, Figs, Banana, Mango and Raisins, Sweet Apple.</p>
                <br>
                <h3>• Vegetables</h3>
                <p>Cooked Vegetables, Asparagus, Cabbage, Pumpkin, Cauliflower, Radish, Onion, Less of green leafy vegetables, Pea, Beans, Wheat Grass, Okra, Sweet Potatoes.</p>
                <br>
                <h3>• Grains</h3>
                <p>Barley, Ragi, Rice, Wheat, Corn, Oatmeal, Millet.</p>
                <br>
                <h3>• Legumes</h3>
                <p>Lentils, Moong Beans(less if any large beans like Kidney, Gram and Pea), Soya.</p>
                <br>
                <h3>• Dairy</h3>
                <p>Buttermilk, Milk, Goat Milk</p>
                <br>
                <h3>• Oils</h3>
                <p>Sesame, Less Olive Oil, Sunflower Oil, Mustard Oil, Peanut.</p>
                <br>
                <h3>• Spices</h3>
                <p>Ajwain, Pepper(specially Black Pepper), Asafoetida, Clove, Garlic, Turmeric, Coriander, Curry leaves, Cumin, Ginger, Basil, Garam Masala, Pippali, Fen ugreek.</p>
                <br>
                <h3>• Nuts</h3>
                <p>Nuts to be taken soaked in water in very small or moderate amount, Sesame Seeds, Flax Seeds, Pumpkin Seeds, Sunflower Seeds.</p>
                <br>
                <h3>• Avoid</h3>
                <p>Junk Food, Cake, Chocolates, Pastries, Cold Drinks, Dried Food, Cold Food, Frozen Food, less if any large beans like Kidney, Gram and Pea, Milk Products(except Buttermilk and Milk), Sweets. Oily Food that are high in Trans Fat. Cold places and weather, moist places, too much travelling, sedentary lifestyle, insufficient sleep, sleeping during the day, stress, overeating and too much talking.</p>
                <br>
            
            `;
        }
        else if ((firstHighest[0] === 'b' && secondHighest[0] === 'c') || (firstHighest[0] === 'c' && secondHighest[0] === 'b')) {
            resultContainer.innerHTML = `
                <h1>Your body type is : ${one}-${two}.</h1>
                <br>
                <p>Known for being associated with a tenacious personality, the pitta dosha is based on fire and water. It’s commonly described as hot, light, sharp, oily, liquid, and mobile. Summer is known as pitta season for its sunny, hot days. Kapha (pronounced “kuffa”) is based on earth and water. It can be described as steady, stable, heavy, slow, cold, and soft. Spring is known as kapha season, as many parts of the world slowly exit hibernation.</p>
                <br>
                <p>People with pitta are said to usually have a muscular build, be very athletic, and serve as strong leaders. They’re highly motivated, goal-oriented, and competitive. Still, their aggressive and tenacious nature can be off-putting to some people, which can lead to conflict. People with this dosha are described as strong, thick-boned, and caring. They’re known for keeping things together and being a support system for others. Kapha-dominant people rarely get upset, think before acting, and go through life in a slow, deliberate manner.</p>
                <br>
                <p>Strengths: intelligent, purposeful, learns quickly, self-determined, masters skills easily, strong desire for success, strong, natural leaders, quick metabolism, good circulation, healthy skin and hair, empathetic, caring, trusting, patient, calm, wise, happy, romantic, strong bones and joints, healthy immune system.                </p>
                <br>
                <p>Weaknesses: impatient, prone to conflict, always hungry, mood swings when hungry, prone to acne and inflammation, sensitive to hot temperatures, prone to weight gain, slow metabolism, sluggishness, over-sleeping, breathing issues (i.e., asthma, allergies), higher risk of heart disease, mucus buildup, susceptible to depression, needs regular motivation and encouragement.</p>
                <br>
                <p>Those with a pitta-dominant dosha should focus on work-life balance and avoid extreme heat (e.g., weather, spicy food). For good health, a kapha-dominant person should focus on regular exercise, a healthy diet, maintain a warm body temperature (e.g., by sitting in a sauna or eating warm food), and establish a regular sleep routine.</p>
                <br>
                <h3>• Balancing Tastes</h3>
                <p>Bitter, Astringent, Pungent.</p>
                <br>
                <h3>• Fruits</h3>
                <p>In small amount all sweet and astringent fruits, Apple, Figs, Dates, Pomegranates, Avocado, Melon, avoid sour fruits(except Amla and Lemon).</p>
                <br>
                <h3>• Vegetables</h3>
                <p>Sweet and Bitter Vegetables, All Green Leafy Vegetables, Asparagus, Cabbage, Cauliflower, Radish, Sweet Potatoes, Pea, Pumpkin, Wheat Grass, Sprouts, Okra, Zutccini.</p>
                <br>
                <h3>• Grains</h3>
                <p>Barley, Ragi, Rice, Wheat, Corn, Oatmeal(less), Millet.</p>
                <br>
                <h3>• Legumes</h3>
                <p>All kind of Beans in moderation, Lentils and Soya.</p>
                <br>
                <h3>• Dairy</h3>
                <p>Fresh Buttermilk, Milk and Goat Milk</p>
                <br>
                <h3>• Oils</h3>
                <p>Sesame, Mustard, Less Olive Oil, Sunflower, Coconut.</p>
                <br>
                <h3>• Spices</h3>
                <p>Ajwain, Cinnamon, Asafoetida, Fennel, Basil, Clove, Cumin, Mint, Coriander, Curry Leaves, Cardamom, Ginger, Fen ugreek, Garlic, pepper, Pippali, Turmeric.</p>
                <br>
                <h3>• Nuts</h3>
                <p>Very small amount of Nuts(2-3) which are soaked in water, Coconut, Sunflower, Flax Seeds.</p>
                <br>
                <h3>• Avoid</h3>
                <p>Sweets, Hot or Spicy Food, Chillies, Junk Food, Milk Products(except Buttermilk and Milk), Cake, Chocolates, Deep Fried Food, Sour Food, Pastries, Cold Drinks, Less Baked or Fermented Food. Oily Food that are high in Trans fat. Cold, moist places, Hot climate, sedentary lifestyle, anger, worry, sleeping during the day, fasting and overeating.</p>
                <br>
            
            `;
        }
        
    } else if (firstHighest[1] === secondHighest[1]) {
        resultContainer.innerHTML = `
            <h1>Your body type is : Vatta-Pitta-Kapha</h1>
            <br>
            <p>Vata consists mostly of the two elements air and space (also known as ether) and is generally described as cold, light, dry, rough, flowing, and spacious. Autumn represents vata for its cool, crisp days. Known for being associated with a tenacious personality, the pitta dosha is based on fire and water. It’s commonly described as hot, light, sharp, oily, liquid, and mobile. Summer is known as pitta season for its sunny, hot days. Kapha (pronounced “kuffa”) is based on earth and water. It can be described as steady, stable, heavy, slow, cold, and soft. Spring is known as kapha season, as many parts of the world slowly exit hibernation.</p>
            <br>
            <p>Those with the vata dosha are usually described as slim, energetic, and creative. They’re known for thinking outside the box but can become easily distracted. What’s more, their mood is highly dependent on the weather, people around them, and foods they eat. People with pitta are said to usually have a muscular build, be very athletic, and serve as strong leaders. They’re highly motivated, goal-oriented, and competitive. Still, their aggressive and tenacious nature can be off-putting to some people, which can lead to conflict. People with this dosha are described as strong, thick-boned, and caring. They’re known for keeping things together and being a support system for others. Kapha-dominant people rarely get upset, think before acting, and go through life in a slow, deliberate manner.</p>
            <br>
            <p>Strengths: learn quickly, highly creative, multitasker, kind-hearted, flexible, “on the go,” naturally slim, intelligent, purposeful, learns quickly, self-determined, masters skills easily, strong desire for success, strong, natural leaders, quick metabolism, good circulation, healthy skin and hair, empathetic, caring, trusting, patient, calm, wise, happy, romantic, strong bones and joints, healthy immune system.</p>
            <br>
            <p>Weaknesses: forgetful, anxious, unstable mood, can get overwhelmed easily, highly sensitive to the cold, has trouble sleeping, irregular appetite and eating patterns, prone to digestive issues and gas, poor circulation (cold hands and feet), impatient, prone to conflict, always hungry, mood swings when hungry, prone to acne and inflammation, sensitive to hot temperatures, prone to weight gain, slow metabolism, sluggishness, over-sleeping, breathing issues (i.e., asthma, allergies), higher risk of heart disease, mucus buildup, susceptible to depression, needs regular motivation and encouragement.            </p>
            <br>
            <p>According to Ayurveda, for optimal health, a vata-dominant person should follow a regular daily routine, manage stress through meditation and other calming activities, and maintain a warm body temperature by avoiding cold weather and consuming warm foods and drinks. Those with a pitta-dominant dosha should focus on work-life balance and avoid extreme heat (e.g., weather, spicy food). For good health, a kapha-dominant person should focus on regular exercise, a healthy diet, maintain a warm body temperature (e.g., by sitting in a sauna or eating warm food), and establish a regular sleep routine.</p>
            <br>
            <h3>• Balancing Tastes</h3>
            <p>Bitter, Astringent, Pungent and Salty</p>
            <br>
            <h3>• Fruits</h3>
            <p>In small amount all sweet and astringent fruits, Apple, Figs, Dates, Banana, Mango, Pomegranates, Raisins, Avocado, Melon.</p>
            <br>
            <h3>• Vegetables</h3>
            <p>Asparagus, Cabbage, Cauliflower, Pumpkin, Sprouts, Radish, Sweet Potato, Onion, Beans, Pea, Wheat Grass, Okra, All green leafy vegetables in less amount, Artichoke, Zutccini, Sweet and Bitter Vegetables. Try to eat well-cooked vegetables.</p>
            <br>
            <h3>• Grains</h3>
            <p>Rice, Wheat, Oatmeal (less), Barley, Ragi, Corn, Millet.</p>
            <br>
            <h3>• Legumes</h3>
            <p>Lentils, Soya, All Beans in moderation (Moong Beans is more preferred, less if any large beans like Kidney, Gram and Pea).</p>
            <br>
            <h3>• Dairy</h3>
            <p>Fresh Buttermilk, Milk and Goat Milk, all other dairy products should be consumed in moderation or avoided completely based on the condition.</p>
            <br>
            <h3>• Oils</h3>
            <p>Olive Oil in moderation, Sesame Oil, Sunflower Oil, Mustard Oil, Peanut, Coconut.</p>
            <br>
            <h3>• Spices</h3>
            <p>Turmeric, Pepper (specially Black Pepper), Ginger, Coriander, Garlic, Clove, Asafoetida, Garam Masala, Cinnamon, Fennel, Cardamom, Cumin, Mint, Ajwain, Basil, Curry Leaves, Fen ugreek, Pippali.</p>
            <br>
            <h3>• Nuts</h3>
            <p>Nuts to be taken in very small to moderate amounts which are soaked in water, Pumpkin Seeds, Sesame Seeds, Coconut, Sunflower and Flax Seeds.</p>
            <br>
            <h3>• Avoid</h3>
            <p>Sweets, Cake, Chocolates, Pastries and Cold Drinks. Dried Food, Junk Food, Cold Food, Frozen Food, Milk Products (except Buttermilk and Milk), Hot or Spicy Food, Chillies, Deep Fried Food, Sour Food, Less Baked and Fermented Food, less if any large beans like Kidney, Gram and Pea, Oily Food that are high in Trans Fat. Cold places and weather, Hot climate, Moist Places, too much traveling, insufficient sleep, stress, anger, worry, sedentary lifestyle, sleeping during the day, overeating, too much talking and fasting.</p>
            <br>
        `;
    } else {
        if (firstHighest[0] === 'a') {
            resultContainer.innerHTML = `
                <h1>Your body type is : Vatta</h1>
                <br>
                <p>Vata consists mostly of the two elements air and space (also known as ether) and is generally described as cold, light, dry, rough, flowing, and spacious. Autumn represents vata for its cool, crisp days.</p>
                <br>
                <p>Those with the vata dosha are usually described as slim, energetic, and creative. They’re known for thinking outside the box but can become easily distracted. What’s more, their mood is highly dependent on the weather, people around them, and foods they eat.</p>
                <br>
                <p>Strengths: learn quickly, highly creative, multitasker, kind-hearted, flexible, “on the go,” naturally slim.</p>
                <br>
                <p>Weaknesses: forgetful, anxious, unstable mood, can get overwhelmed easily, highly sensitive to the cold, has trouble sleeping, irregular appetite and eating patterns, prone to digestive issues and gas, poor circulation (cold hands and feet)</p>
                <br>
                <p>According to Ayurveda, for optimal health, a vata-dominant person should follow a regular daily routine, manage stress through meditation and other calming activities, and maintain a warm body temperature by avoiding cold weather and consuming warm foods and drinks</p>
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
        else if (firstHighest[0] === 'b') {
            resultContainer.innerHTML = `
                <h1>Your body type is : Pitta</h1>
                <br>
                <p>Known for being associated with a tenacious personality, the pitta dosha is based on fire and water. It’s commonly described as hot, light, sharp, oily, liquid, and mobile. Summer is known as pitta season for its sunny, hot days.</p>
                <br>
                <p>People with pitta are said to usually have a muscular build, be very athletic, and serve as strong leaders. They’re highly motivated, goal-oriented, and competitive. Still, their aggressive and tenacious nature can be off-putting to some people, which can lead to conflict.</p>
                <br>
                <p>Strengths: intelligent, purposeful, learns quickly, self-determined, masters skills easily, strong desire for success, strong, natural leaders, quick metabolism, good circulation, healthy skin and hair.                </p>
                <br>
                <p>Weaknesses: impatient, prone to conflict, always hungry, mood swings when hungry, prone to acne and inflammation, sensitive to hot temperatures.</p>
                <br>
                <p>Those with a pitta-dominant dosha should focus on work-life balance and avoid extreme heat (e.g., weather, spicy food).</p>
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
        else if (firstHighest[0] === 'c') {
            resultContainer.innerHTML = `
                <h1>Your body type is : Kapha</h1>
                <br>
                <p>Kapha (pronounced “kuffa”) is based on earth and water. It can be described as steady, stable, heavy, slow, cold, and soft. Spring is known as kapha season, as many parts of the world slowly exit hibernation.</p>
                <br>
                <p>People with this dosha are described as strong, thick-boned, and caring. They’re known for keeping things together and being a support system for others. Kapha-dominant people rarely get upset, think before acting, and go through life in a slow, deliberate manner.</p>
                <br>
                <p>Strengths: empathetic, caring, trusting, patient, calm, wise, happy, romantic, strong bones and joints, healthy immune system</p>
                <br>
                <p>Weaknesses: prone to weight gain, slow metabolism, sluggishness, over-sleeping, breathing issues (i.e., asthma, allergies), higher risk of heart disease, mucus buildup, susceptible to depression, needs regular motivation and encouragement</p>
                <br>
                <p>For good health, a kapha-dominant person should focus on regular exercise, a healthy diet, maintain a warm body temperature (e.g., by sitting in a sauna or eating warm food), and establish a regular sleep routine</p>
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