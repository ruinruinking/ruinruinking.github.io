<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Chicken Fact</title>
    <style>
        body {
            background-image: url('chicken_background.jpg'); /* Replace 'chicken_background.jpg' with your actual image file */
            background-size: cover;
            background-repeat: no-repeat;
            color: white;
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: rgba(0, 0, 0, 0.5);
            padding: 20px;
            border-radius: 10px;
        }
        h1 {
            text-align: center;
        }
        p {
            font-size: 18px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Random Chicken Fact</h1>
        <p id="chickenFact"></p>
    </div>

    <script>
        // Array of chicken facts
        var chickenFacts = [
            "Chickens can recognize over 100 different faces of people or animals.",
            "Chickens have full-color vision and are able to see a broader spectrum than humans.",
            "Chickens have a complex communication system, including over 24 different vocalizations.",
            "Chickens are descended from dinosaurs and are the closest living relatives to the Tyrannosaurus rex.",
            "Chickens dream while they sleep.",
            "Chickens have been domesticated for thousands of years, with the oldest known chicken bones found in Israel dating back to around 4000 BC."
        ];

        // Function to display a random chicken fact
        function displayRandomFact() {
            var randomIndex = Math.floor(Math.random() * chickenFacts.length);
            document.getElementById("chickenFact").textContent = chickenFacts[randomIndex];
        }

        // Display a random chicken fact when the page loads
        displayRandomFact();
    </script>
</body>
</html>

            "C

