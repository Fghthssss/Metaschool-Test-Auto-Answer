# Metaschool-auto-solver-test
A browser console script that automatically selects correct answers on Metaschool test pages.
Usage
Open the test page (e.g., https://metaschool.ru/pub/test/index.php?testId=21)

Open browser console (F12 → Console tab)

Copy and paste the script

Press Enter

Code

```
document.querySelectorAll('input[type="hidden"][name^="inputCorrectAnswerId"]').forEach(input => {
    const n = input.name.match(/inputCorrectAnswerId(\d+)/)[1];
    const correctId = input.value;
    const radio = document.querySelector(`input[name="inputAnswerId${n}"][value="${correctId}"]`);
    if (radio) radio.checked = true;
});
```

Note
For educational purposes only.
