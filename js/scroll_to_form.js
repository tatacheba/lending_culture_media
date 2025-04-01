function DoScrolling(element, duration) {
    var startingY = window.pageYOffset;
    var elementY = window.pageYOffset + element.getBoundingClientRect().top;
    var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY;
    var diff = targetY - startingY;
    if (!diff) return;
    var easing = function (t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 };
    var start;
    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        var time = timestamp - start;
        var percent = easing(Math.min(time / duration, 1));
        window.scrollTo(0, startingY + diff * percent);
        if (time < duration) {
            window.requestAnimationFrame(step);
        }
    })
}

function EnableScroll(element) {
    var a_tags = document.getElementsByTagName('a');
    for (let a of a_tags) {
        if (a.classList.contains('ignore-scroll'))
            continue;
        a.removeAttribute('target');
        a.removeAttribute('onclick');
        a.href = "";
        a.addEventListener('click', function (event) {
            event.preventDefault();
            DoScrolling(element, 1000);
        });
    }
}

function InitScrollToForm(delay = 100) {
    setTimeout(() => {
        var script = document.querySelector('script[src$="scroll_to_form.min.js"]');
        if (!script)
            script = document.querySelector('script[src$="scroll_to_form.js"]')
        if (script.hasAttribute('form_id')) {
            var form = document.getElementById(script.getAttribute('form_id'));
            if (form)
                return EnableScroll(form);
            console.warn('Invalid form id');
        }
        var forms = document.getElementsByTagName('form');
        for (var i = forms.length - 1; i >= 0; i--) {
            if (forms[i].querySelector('[name="phone"]')) {
                return EnableScroll(forms[i]);
            }
        }
        console.warn('Form not found');
    }, delay);
}

document.addEventListener("DOMContentLoaded", InitScrollToForm);
if (document.readyState === "complete") InitScrollToForm(700);
