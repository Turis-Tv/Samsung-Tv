class Utils {
	static clickEventClassActions(toElement, className, operationType, selectorElement = toElement ) {
		const clonedElement = typeof toElement === 'string' ? document.querySelector(toElement) : toElement;
		const clonedSelectorElement =  typeof selectorElement === 'string' ? document.querySelector(selectorElement) : selectorElement;
		clonedElement.addEventListener('click', () => {
			switch (operationType) {
				case 'add':
					clonedSelectorElement.classList.add(className)
					break;
				case 'remove':
					clonedSelectorElement.classList.remove(className)
					break;
				case 'toggle':
					clonedSelectorElement.classList.toggle(className)
					break;
				default: 
					console.log('Please enter a valid operation type.');
					break;
			}
		})
	}
	getIdValue(element) { 
		return document.getElementById(element).value ?? null;
	}
}

Utils.clickEventClassActions('.header__menu', 'item-hidden-offscreen','remove', '.overlay' );
Utils.clickEventClassActions('.overlay__header--action', 'item-hidden-offscreen', 'add', '.overlay' );
Utils.clickEventClassActions('.header__user--top', 'toggled', 'toggle', '.header__user--name');
Utils.clickEventClassActions('.header__search--type', 'toggled', 'toggle', '.header__search--type');
Utils.clickEventClassActions('.header__user--top', 'item-hidden-offscreen', 'toggle', '.header__user--dropdown');
Utils.clickEventClassActions('.header__search--type', 'item-hidden-offscreen', 'toggle', '.header__search--dropdown');