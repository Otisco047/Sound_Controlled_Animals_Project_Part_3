dog = document.getElementById("dog0");
cat = document.getElementById("cat1");
human = document.getElementById("human2");
cow = document.getElementById("cow3");




function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/oRq2H1eNq/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(e, r) {
    if (e) {
        console.error("error");
    } else {
        console.log(r);
        // document.getElementById("audio_name").innerHTML = "Detected Dog Barking - " + confidence[0].label;
        // document.getElementById("audio_name").innerHTML = "Detected Cat Meowing - " + confidence[0].label;
        // document.getElementById("audio_name").innerHTML = "Detected Human Roaring - " + confidence[0].label;
        // document.getElementById("audio_name").innerHTML = "Detected Cow Mooing - " + confidence[0].label;
        sound_name = r[0].label;
        if (sound_name == "Dogs Barking ") {
            document.getElementById("bob").src = "dog.gif";
            document.getElementById("audio_name").innerHTML = "Detected Dog Barking - ";

        } else if (sound_name == "Cats Meowing") {
            document.getElementById("bob").src = "cat.gif"
            document.getElementById("audio_name").innerHTML = "Detected Cat Meowing - ";
        } else if (sound_name == "Human Roaring") {
            document.getElementById("bob").src = "human.gif"
            document.getElementById("audio_name").innerHTML = "Detected Human Roaring - ";
        } else if (sound_name == "Cow Moing") {
            document.getElementById("bob").src = "cow.gif"
            document.getElementById("audio_name").innerHTML = "Detected Cow Mooing - ";
        }
    }
}