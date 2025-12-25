# Metaschool Test Auto Answer

A browser console script that automatically selects correct answers on Metaschool test pages.

## Usage

1. Open the test page (e.g., `https://metaschool.ru/pub/test/index.php?testId=21`)
2. Open browser developer console:
   - **F12** → Console tab
   - or **Ctrl+Shift+J** (Chrome, Edge)
   - or **Ctrl+Shift+K** (Firefox)
3. Copy and paste the script below
4. Press **Enter**

## Code

```javascript
document.querySelectorAll('input[type="hidden"][name^="inputCorrectAnswerId"]').forEach(input => {
    const n = input.name.match(/inputCorrectAnswerId(\d+)/)[1];
    const correctId = input.value;
    const radio = document.querySelector(`input[name="inputAnswerId${n}"][value="${correctId}"]`);
    if (radio) radio.checked = true;
});
