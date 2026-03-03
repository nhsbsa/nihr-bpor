(function () {
  document.documentElement.classList.add('js-enabled');

  var modules = document.querySelectorAll('[data-module="searchable-checkboxes"]');
  if (!modules.length) return;

  modules.forEach(function (container) {
    if (!(container instanceof HTMLElement)) return;

    var searchInputEl = container.querySelector('input[type="text"]');
    if (!(searchInputEl instanceof HTMLInputElement)) return;
    var searchInput = searchInputEl;

    var listElRaw = container.querySelector('[data-js-hidden]');
    if (!(listElRaw instanceof HTMLElement)) return;
    var listEl = listElRaw;

    var tagsId = container.getAttribute('data-tags-id');
    if (!tagsId) return;

    var tagsListEl = document.getElementById(tagsId);
    if (!(tagsListEl instanceof HTMLElement)) return;
    var tagsList = tagsListEl;

    var items = container.querySelectorAll('.searchable-item');

    /* ------------------------------
       SHOW / FILTER LIST
    ------------------------------ */
    searchInput.addEventListener('input', function () {
      var term = searchInput.value.trim().toLowerCase();

      if (term.length > 0) {
        listEl.classList.add('is-visible');
      } else {
        listEl.classList.remove('is-visible');
      }

      items.forEach(function (item) {
        if (!(item instanceof HTMLElement)) return;
        var label = item.dataset.label || '';
        item.style.display = label.indexOf(term) !== -1 ? '' : 'none';
      });
    });

    /* ------------------------------
       ✅ ESC KEY = EXIT LIST
    ------------------------------ */

    function closeListAndReturnFocus() {
      listEl.classList.remove('is-visible');

      // return focus to search so user is not trapped
      searchInput.focus();

      // optional: move cursor to end
      var val = searchInput.value;
      searchInput.value = '';
      searchInput.value = val;
    }

    // When focus is inside search
    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeListAndReturnFocus();
      }
    });

    // When focus is inside checkbox list
    listEl.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        closeListAndReturnFocus();
      }
    });

    /* ------------------------------
       RENDER TAGS + COUNT
    ------------------------------ */
    function renderTags() {
      tagsList.innerHTML = '';

      var checked = container.querySelectorAll('input[type="checkbox"]:checked');

      var countEl = document.getElementById(tagsId + '-count');
      if (countEl instanceof HTMLElement) {
        countEl.textContent = String(checked.length);
      }

      checked.forEach(function (checkbox) {
        if (!(checkbox instanceof HTMLInputElement)) return;

        var labelEl = container.querySelector('label[for="' + checkbox.id + '"]');
        if (!(labelEl instanceof HTMLLabelElement)) return;

        var li = document.createElement('li');
        li.className = 'nhsuk-tag';
        li.textContent = labelEl.textContent + ' ';

        var btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = '×';

        btn.addEventListener('click', function () {
          checkbox.checked = false;
          renderTags();
          searchInput.focus(); // accessibility improvement
        });

        li.appendChild(btn);
        tagsList.appendChild(li);
      });
    }

    /* ------------------------------
       CHECKBOX CHANGE
    ------------------------------ */
    var checkboxes = container.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (cb) {
      if (cb instanceof HTMLInputElement) {
        cb.addEventListener('change', renderTags);
      }
    });

    renderTags();
  });
})();
