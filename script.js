// I learned this part from chatgpt, but I typed it, and did not copy/paste!
// I could not get my collapsible to work, hopefully this does it.

document.addEventListener('DOMContentLoaded', function() {
    var coll = document.querySelector('.collapsible');
    var content = document.querySelector('.content');
    
    content.style.display = 'none';

    coll.addEventListener('click', function () {
        content.style.display = (content.style.display == 'none') ? 'block' : 'none';
    });
});