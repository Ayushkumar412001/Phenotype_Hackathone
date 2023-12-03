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
        
</div>