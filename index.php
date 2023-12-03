<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" 
    integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/index.css">
    <title>Phenotype</title>
</head>
<body>
    <div class="nevbar" id="nevbar">
        <div class="logo">
            <a href="index.php" id="logo"><h1><span>PHENO</span>TYPE</h1></a>
        </div>
        <div class="menu" id="menu">
            <ul>
                <li><a id="home" href="index.php">Home</a></li>
                <li><a href="#explore">Explore</a></li>
                <li><a href="#service">Assessment</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        <div class="menuicon">
            <i id="menuicon" onclick="togglemenu()" class="fas fa-chevron-circle-down"> <span>MENU</span></i>
        </div>
    </div>

    <div class="cover">

        <div class="information">
            <h1>-</h1>
            <h3>Raising Hope</h3>
            <h2>The key to Know Your Self Better</h2>
            <h1> <span>FUTURE</span> </h1>
            <h3> <span>Gateways 2023</span> </h3>
            <h1>-</h1>
            <a href="#explore"><button>EXPLORE</button></a>
            <a href="https://rzp.io/l/oPJb73G7Fl" target="blank"><button>ASSESSMENT</button></a>
        </div>

    </div>

    <div class="explore" id="explore"></div>

    <div class="about">
        <div class="imgcontanner">
            <div class="aboutimg">
                <img src="images/phenotype1.jpg">
            </div>
        </div>
        <div class="aboutcontent">
            <h5>_</h5>
            <h1>What's your Prakriti?</h1>
            <p>A phenotype refers to the observable characteristics or traits of an organism, resulting from the interaction between its genetic makeup (genotype) and the environment. These traits can include physical features, behavior, and other observable attributes.</p>
            <p>knowing your phenotype is a powerful tool for personalized health management, allowing individuals to make informed decisions about their lifestyle, medical treatments, and overall well-being.</p>
            <a href="https://rzp.io/l/oPJb73G7Fl" target="black">ASSESSMENT</a>
            <br>
            <br>
            <h5>_</h5>

        </div>
    </div>

    

    <div id="form-container">
        <h2>Food and Lifestyle Recommender</h2>
        <form id="recommendation-form">
            <div class="question">
                <label> 1. Memory.</label>
                <label><input type="radio" name="q1" value="a"> Quick to learn but quick to forget. Short term memory is good.</label>
                <label><input type="radio" name="q1" value="b"> Average speed of learning. But once learnt, never forgets.</label>
                <label><input type="radio" name="q1" value="c"> Slow to learn but remembers for a long time. Long term memory is good.</label>
            </div>

            <div class="question">
                <label>2. Mind.</label>
                <label><input type="radio" name="q2" value="a"> Mind tends to get restless easily.</label>
                <label><input type="radio" name="q2" value="b"> Mind gets impatient or aggressive easily.</label>
                <label><input type="radio" name="q2" value="c"> Mind remain cool and calm. Mostly, unruffled.</label>
            </div>

            <div class="question">
                <label>3. Mind on actions.</label>
                <label><input type="radio" name="q3" value="a"> Over thinking.</label>
                <label><input type="radio" name="q3" value="b"> Quick Implementation.</label>
                <label><input type="radio" name="q3" value="c"> Lazy Implementation. Has a tendency to procrastinate.</label>
            </div>

            <div class="question">
                <label>4. Sleep quality.</label>
                <label><input type="radio" name="q4" value="a"> Light and disturbed sleep. I wake up easily in the morning.</label>
                <label><input type="radio" name="q4" value="b"> Moderate but regular. I can go back to sleep easily.</label>
                <label><input type="radio" name="q4" value="c"> Deep and heavy. I can't easily wake up in morning.</label>
            </div>

            <div class="question">
                <label>5. Emotional nature.</label>
                <label><input type="radio" name="q5" value="a"> I worry a lot. Often feel nervous and anxious.</label>
                <label><input type="radio" name="q5" value="b">  I often get irritable, angry and impatient.</label>
                <label><input type="radio" name="q5" value="c"> Loving and caring. It takes a lot to make me angry.</label>
            </div>

            <div class="question">
                <label>6. body frame.</label>
                <label><input type="radio" name="q6" value="a"> Thin, bony and small framed. Hardly gain weight.</label>
                <label><input type="radio" name="q6" value="b"> Medium built Can gain or lose weight easily.</label>
                <label><input type="radio" name="q6" value="c"> Large built Gain weight easily but difficult to lose.</label>
            </div>

            <div class="question">
                <label>7. Walk and Talk.</label>
                <label><input type="radio" name="q7" value="a"> Fast walk and talk.</label>
                <label><input type="radio" name="q7" value="b"> Moderate and determined walk.</label>
                <label><input type="radio" name="q7" value="c"> Slow and steady walk.</label>
            </div>

            <div class="question">
                <label>8. Weather.</label>
                <label><input type="radio" name="q8" value="a"> Enjoy warm climate but feel uncomfortable in cool weather.</label>
                <label><input type="radio" name="q8" value="b"> Enjoy cool weather and dislike warm climate.</label>
                <label><input type="radio" name="q8" value="c"> Comfortable for most of the year but prefer summer and dislike dampness.</label>
            </div>

            <div class="question">
                <label>9. Sweating.</label>
                <label><input type="radio" name="q9" value="a"> Sweat little but not much. Have minimal body odour.</label>
                <label><input type="radio" name="q9" value="b"> Sweat a lot. Have medium body odour.</label>
                <label><input type="radio" name="q9" value="c"> Sweat moderately but sweat a lot when working hard.</label>
            </div>

            <div class="question">
                <label>10. Appetite.</label>
                <label><input type="radio" name="q10" value="a"> Irregular. Sometimes I feel hungry sometimes I don't.</label>
                <label><input type="radio" name="q10" value="b"> Strong and sharp. Always feel hungry.</label>
                <label><input type="radio" name="q10" value="c"> Decent appetite. Have tendecy to eat for comfort and taste.</label>
            </div>

            <div class="question">
                <label>11. Skin.</label>
                <label><input type="radio" name="q11" value="a"> Normal to dry, rough, thin and cool. Skin issues like dryness, dullness and wrinkly.</label>
                <label><input type="radio" name="q11" value="b"> Normal to oily, soft, reddish, sensitive and warm. Skin issues like inflammation.</label>
                <label><input type="radio" name="q11" value="c"> Normal to oily, soft, thick and cool Skin issues like excessive oily, itching, fungal infections.</label>
            </div>

            <div class="question">
                <label>12. Hair.</label>
                <label><input type="radio" name="q12" value="a"> Rough, dry and wavy. I get split ends easily.</label>
                <label><input type="radio" name="q12" value="b"> Normal, straight, thin and brownish.</label>
                <label><input type="radio" name="q12" value="c"> Thick, curly and oily. Hair colour tends to be on darker side.</label>
            </div>

            <div class="question">
                <label>13. Lips & Teeth.</label>
                <label><input type="radio" name="q13" value="a">  Have thin lips that tend to get dry. Teeth can be somewhat uneven.</label>
                <label><input type="radio" name="q13" value="b"> Medium sized soft lips. Teeth tend to suffer from cavities.</label>
                <label><input type="radio" name="q13" value="c"> Large and smooth lips. Teeth are well formed and aligned.</label>
            </div>

            <div class="question">
                <label>14. Eyes.</label>
                <label><input type="radio" name="q14" value="a"> Small in size. Feel dry and sleepy eyes often.I blink a lot.</label>
                <label><input type="radio" name="q14" value="b"> Medium in size. I often get reddish eyes.</label>
                <label><input type="radio" name="q14" value="c"> Big and attractive. I have thick eye lashes.</label>
            </div>

            <div class="question">
                <label>15. General signs.</label>
                <label><input type="radio" name="q15" value="a">  Cracking sound in joints. Small forehead.</label>
                <label><input type="radio" name="q15" value="b"> Black moles on body. Medium forehead.</label>
                <label><input type="radio" name="q15" value="c"> Disproportionate body. Large forehead.</label>
            </div>



            <button type="button" onclick="calculateRecommendation()"><a href="#result-container"> Submit </a> </button>
            <button type="reset" >Reset</button>
        </form>
    <div id="result-container">
        
    </div>

    

</div>

    
    <!---------------------------- contact ------------------- -->
    
    <div class="contact" id="contact">
        <h1>CONTACT ME</h1>
        <br>
        <div class="contactcontanner">
            
            <div class="contanner">
                <div class="heading">
                    <div class="icon"><i class="far fa-map"></i></div>
                    <div class="info">
                        <p>Address : </p>
                        <p id="contactinfo">Jain (Deemed-to-be) University</p>
                    </div>
                </div>
                
                <div class="heading">
                    <div class="icon"><i class="fas fa-phone-alt"></i></div>
                    <div class="info">
                        <p>Phone : </p>
                        <p id="contactinfo">+65-84XX-XX90</p>
                    </div>
                </div>
                
                <div class="heading">
                    <div class="icon"><i class="far fa-envelope"></i></div>
                    <div class="info">
                        <p>Email : </p>
                        <p id="contactinfo">info@BeyondEarth.sg</p>
                    </div>
                </div>
            </div>
            
            <div class="messageform">
                <div class="form">
                    <form action="" method="POST">
                        
                        <style>
                            ::placeholder {color: rgba(255, 255, 255, 0.7);}
                        </style>
    
                        <input type="text" name="name" placeholder="NAME" required>
                        <input type="email" name="email" placeholder="EMAIL" required>
                        <input type="text" name="subject" placeholder="SUBJECT" required>
                        <textarea type="message" name="message" id="inputbox"  cols="30" rows="5" placeholder="MESSAGE" required></textarea>
                        <button type="submit">SEND MESSAGE</button>
    
                    </form>
                </div>
            </div>

        </div>          
    </div>

    

    <!-- <div class="topspace"></div> -->
    <footer>
        <p>&copy 2023 Made with ❤️ By <strong> CodeComet Crew </strong> | <strong> Gateways 2023 </strong></p>
    </footer>
    <!-- scripts  -->
    <script>
        // drop down menu script
        var menu = document.getElementById("menu");
        menu.style.maxHeight = "0px";
        function togglemenu() {
            if (menu.style.maxHeight == "0px") {
                menu.style.maxHeight = "390px";
            }
            else {
                menu.style.maxHeight = "0px";
            }
        }
    </script>


    <script>
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
                    resultContainer.innerHTML = `<p>Your body type is :  bbb.</p>`;
                }
                else if (firstHighest[0] == 'c') {
                    resultContainer.innerHTML = `<p>Your body type is :  ccc.</p>`;
                }
            }

        }

    </script>

</body>
</html>