	(function () {
		var root = document.getElementById('feasibility-form');
		var bporEl = document.getElementById('bpor-count');
		var jdrEl = document.getElementById('jdr-count');
		var bporSection = document.getElementById('bpor-criteria');
		var jdrSection = document.getElementById('jdr-criteria');

		function controlsIn(container) {
			return Array.prototype.slice.call(
				container.querySelectorAll('input, select, textarea')
			);
		}

		// A control counts as a filter if it is checked or has a value.
		// Search boxes only filter the list, so they are ignored.
		function isActive(el) {
			if (el.type === 'checkbox' || el.type === 'radio') return el.checked;
			if (el.type === 'search' || el.type === 'submit' || el.type === 'button') return false;
			return el.value.trim() !== '';
		}

		function countActive(controls) {
			return controls.filter(isActive).length;
		}

		// More filters = a lower possible maximum, always 4 digits or fewer
		function fakeCount(filters) {
			var max = Math.max(50, Math.round(9999 / (1 + filters * 0.4)));
			return Math.floor(Math.random() * max) + 1;
		}

		function runCheck() {
			// Fields outside both sections (registration, location, demographics) apply to both
			var shared = controlsIn(root).filter(function (el) {
				return !el.closest('#bpor-criteria, #jdr-criteria');
			});
			var sharedCount = countActive(shared);

			bporEl.textContent = fakeCount(sharedCount + countActive(controlsIn(bporSection)));
			jdrEl.textContent = fakeCount(sharedCount + countActive(controlsIn(jdrSection)));
		}

		function clearFilters() {
			controlsIn(root).forEach(function (el) {
				var changed = false;

				if (el.type === 'checkbox' || el.type === 'radio') {
					changed = el.checked;
					el.checked = false;
				} else if (el.tagName === 'SELECT') {
					changed = el.selectedIndex !== 0;
					el.selectedIndex = 0;
				} else if (el.type !== 'submit' && el.type !== 'button') {
					changed = el.value !== '';
					el.value = '';
				}

				// Lets the multi-select search component refresh its "selected" list
				if (changed) el.dispatchEvent(new Event('change', { bubbles: true }));
			});

			bporEl.textContent = 'N/A';
			jdrEl.textContent = 'N/A';
		}

		document.getElementById('run-feasibility').addEventListener('click', runCheck);
		document.getElementById('clear-filters').addEventListener('click', clearFilters);
	})();