const tabButtons = document.querySelectorAll('.design-list__item');
const tabDescriptions = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images');
const tabLeftImages = document.querySelectorAll('.feature__img');
const sectionTitles = document.querySelectorAll('.design__title');



const changeContent = (array, value) => {
    array.forEach((elem) => {
        if (elem.dataset.tabsField === value) {
            elem.classList.remove('hidden');
        } else {
            elem.classList.add('hidden');
        }
    })
}

const changeContentTitle = (array1, array2) => {

    array1.forEach((elem1) => {
        if (elem1 === event.target && !elem1.classList.contains('design-list__item_active')) {
            array2.forEach((elem2) => {
                if (elem2.classList.contains('hidden')) {
                    elem2.classList.remove('hidden');
                    document.title = elem2.textContent;
                } else {
                    elem2.classList.add('hidden');
                }
            })
        }
    })
}

tabButtons.forEach((tabButton) => {
    tabButton.addEventListener('click', (event) => {

        const dataValue = tabButton.dataset.tabsHandler;

        changeContent(tabImages, dataValue);
        changeContent(tabDescriptions, dataValue);
        changeContent(tabLeftImages, dataValue);
        changeContentTitle(tabButtons, sectionTitles);

        tabButtons.forEach((btn) => {
            if (btn === event.target) {
                btn.classList.add('design-list__item_active');
            } else {
                btn.classList.remove('design-list__item_active');
            }
        })
    })
}) 