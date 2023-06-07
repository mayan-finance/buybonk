function wait(ms) {
    if (ms <= 0) {
        return Promise.resolve();
    }
    return new Promise(resolve => setTimeout(resolve, ms));
}
(function () {
    if (typeof $ === 'undefined') {
        return;
    }
    window.showBonkNotif = async function (text) {
        const root = $('#BONKNOTIF_ROOT');
        const image = $('#BONKNOTIF_IMAGE');
        const textElement = $('#BONKNOTIF_TEXT');
        const woof = document.getElementById('WOOF');
        let woofPlayed = false;
        woof.addEventListener('ended', () => {
            if (woofPlayed) {
                return;
            }
            woofPlayed = true;
            woof.play();
        });
        image.css({
           zoom: 1,
        });
        root.css({
            display: 'block',
        });
        textElement.html(text);
        root.animate({
            bottom: 25,
        }, 700);
        await wait(1000);
        woof.play();
        await wait(70);
        image.animate({
            zoom: 1.2,
        }, 200).animate({
            zoom: 1,
        }, 200);
        await wait(600);
        image.animate({
            zoom: 1.2,
        }, 200).animate({
            zoom: 1,
        }, 200);
        await wait(7000);
        root.animate({
            bottom: -150,
        }, 700).fadeOut(200);
        await wait(900);
        root.css({
            display: 'none',
        });
    }
})();