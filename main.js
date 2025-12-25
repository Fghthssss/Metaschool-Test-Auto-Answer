document.querySelectorAll('input[type="hidden"][name^="inputCorrectAnswerId"]').forEach(input => {
    const n = input.name.match(/inputCorrectAnswerId(\d+)/)[1];
    const correctId = input.value;
    const radio = document.querySelector(`input[name="inputAnswerId${n}"][value="${correctId}"]`);
    if (radio) radio.checked = true;
});
