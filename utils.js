/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called 
 */
class Beat {
    constructor(AudioSrc) {
       this.audio = new Audio(AudioSrc);
    }
    
    /** 
     * To play Audio file 
     * Set the CurrentTime to the beginning of audio file then play
          */
    play = () => {
       this.audio.currentTime = 0;
       this.audio.play()
    }
}



/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, code){
       this.color = color;
       this.code = code;
       this.element = document.getElementById(code);
       this.setButtonColorInHTML();
       this.setATransitionEndListener();
    }
 
    // Solution 1 : remove style on keyup
    // Solution 2 : Wait a certain amount of time to remove
    // Solution 3 : React on transitionend event

    setATransitionEndListener = () => {
        this.element.addEventListener('transitionend', () => {
            this.deselect();
            console.log("transition ended");
        })

    }


    /**
     * Set the button color based on color specified
     */
    setButtonColorInHTML = () => {
        this.element.style.borderColor = this.color;
    }

    /**
     * Select function to set the background color and boxShadow
     */
    select = () => {
        this.element.style.backgroundColor = this.color;
        this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
    }

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
        this.element.style.backgroundColor = "transparent";
        this.element.style.boxShadow = "none";
    }
}