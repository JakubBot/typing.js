function Typing(target, sentences, textOptions = {}) {
    const DEFAULT_OPTIONS = {
        line: true,
        once: false,
        hideLetters: true,
        delayShow: 800,
        speedShowing: 150,
        delayHide: 1000,
        speedHiding: 50,
      };
      const auxiliaryVariables = {
        count: 0,
        particularSentance: "",
        number: 0,
        changeState: false,
        verticalLine: "",
      };
     const TARGET = document.querySelector(target);

     for (const property in DEFAULT_OPTIONS)
     {
         if (typeof textOptions[property] === "undefined")
         textOptions[property] = DEFAULT_OPTIONS[property];
     }

  //min height,no collapse if there is no text
  setHeight(TARGET);
  setTimeout(()=> {
    showLetters(auxiliaryVariables, sentences, TARGET, textOptions);
  }, textOptions.delayShow);
}

function showLetters(auxiliaryVariables, sentences, TARGET, textOptions) {
  let napis = "";

  textOptions.line === true ? (auxiliaryVariables.verticalLine = "|") : (auxiliaryVariables.verticalLine = "");
  auxiliaryVariables.changeState = false;

  for (let i = 0; i <= auxiliaryVariables.count; ++i) {
    if (
      auxiliaryVariables.count < sentences[auxiliaryVariables.number].length
    ) {
      napis += sentences[auxiliaryVariables.number].charAt(i);

      TARGET.innerHTML = napis + auxiliaryVariables.verticalLine;
    } else {
      napis += sentences[auxiliaryVariables.number].charAt(i);
      auxiliaryVariables.changeState = true;
    }
  }

  auxiliaryVariables.count++;

  if (auxiliaryVariables.changeState === false) {
    setTimeout(()=> {
      showLetters(auxiliaryVariables, sentences, TARGET, textOptions);
    }, textOptions.speedShowing);
  } else {
    auxiliaryVariables.count = 0;
    auxiliaryVariables.particularSentance =
      sentences[auxiliaryVariables.number];
    if (textOptions.hideLetters === true)
      setTimeout(()=> {
        hideLetters(auxiliaryVariables, sentences, TARGET, textOptions);
      }, textOptions.delayHide);
  }
}

function hideLetters(auxiliaryVariables, sentences, TARGET, textOptions) {
  textOptions.line === true ? (auxiliaryVariables.verticalLine = "|") : (auxiliaryVariables.verticalLine = "");
  auxiliaryVariables.changeState = false;
  if (auxiliaryVariables.count < sentences[auxiliaryVariables.number].length) {
    auxiliaryVariables.particularSentance = auxiliaryVariables.particularSentance.slice(0,-1);
    TARGET.innerHTML = auxiliaryVariables.particularSentance + auxiliaryVariables.verticalLine;
  } else {
    TARGET.innerHTML = auxiliaryVariables.verticalLine;
    auxiliaryVariables.changeState = true;
  }
  auxiliaryVariables.count++;
  if (auxiliaryVariables.changeState === false)
    setTimeout(()=> {
      hideLetters(auxiliaryVariables, sentences, TARGET, textOptions);
    }, textOptions.speedHiding);
  if (auxiliaryVariables.changeState === true) {
    auxiliaryVariables.count = 0;
    auxiliaryVariables.number++;
    if (auxiliaryVariables.number > sentences.length - 1) {
      auxiliaryVariables.number = 0;
      if (textOptions.once === true) return;
    }
    setTimeout(()=> {
      showLetters(auxiliaryVariables, sentences, TARGET, textOptions);
    }, textOptions.delayShow);
  }
}

function setHeight(TARGET, textOptions) {
  let style = window
    .getComputedStyle(TARGET, null)
    .getPropertyValue("font-size");
  let fontSize = parseFloat(style);
  fontSize > 38 ? (TARGET.style.minHeight = fontSize + 15 + "px") : (TARGET.style.minHeight = fontSize + 10 + "px");
}
