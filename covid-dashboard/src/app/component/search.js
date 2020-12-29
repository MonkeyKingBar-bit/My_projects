const seacher = document.querySelector('.seacher');

seacher.addEventListener('focus', () => {
    seacher.addEventListener('keydown', (e) => {

        console.log(e.target.value);

        console.log(api.getMatchesCountryList(e.target.value))
        let arr = api.getMatchesCountryList(e.target.value);
        if(arr !== undefined || arr.length === 0) {
            let body = document.querySelector('.finder');
            body.innerHTML = '';
            arr.forEach((currentValue, index, array) => {

                    create('tr', '',
                        create('td', '', currentValue), body);
            })
        }

    });
});