// I learned this part from chatgpt, but I typed it, and did not copy/paste!

document.addEventListener('DOMContentLoaded', function() {
    var coll = document.querySelector('.collapsible');
    var content = document.querySelector('.content');
    
    // My collapsable was only working on the second click, chatgpt said something
    // about the display status, so I tried setting it to none here. (it worked!)
    content.style.display = 'none';

    coll.addEventListener('click', function () {
        content.style.display = (content.style.display == 'none') ? 'block' : 'none';
    });
});