# Challenge: Dynamic Cards

> The learning objective for this challenge is to practice event listeners for click events. You will also practice adding elements to the DOM, and removing elements from the DOM with the `removeChild()` method. You will even need to use the `split()` method on a string.

### Setup

These commands are a helpful quick start. You may choose to ignore them completely and create your own directory structure. If you choose to use this recommendation, just copy the commands below and paste. It doesn't matter what directory you are currently in.

```bash
mkdir -p ~/workspace/exercises/javascript/cards && cd $_
touch index.html
touch cards.js
touch cards.css
```

### Requirements

1. Create an HTML page that contains a text area and a button labeled *Create*.
1. When the user enters in text into the text area and then clicks the create button, use a factory function that creates a new DOM component that has a border, and includes it's own delete button.
1. Insert that new component into the DOM.
1. When the user clicks the *Delete* button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually [removed](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) from the DOM.

> **Pro tip:** The card's `id` attribute, and the button's `id` attribute should share some common value. Then, when the button is clicked, find the corresponding parent DOM component. Remember the `split()` method on a string? That will be helpful.

```html
<article class="card" id="card--1">
    <div>Hey, I entered some text</div>
    <div>
        <button id="delete--1">Delete This Card</button>
    </div>
</article>
<article class="card" id="card--2">
    <div>Hey, I entered some text</div>
    <div>
        <button id="delete--2">Delete This Card</button>
    </div>
</article>
```