const topicNumber = Math.floor(Math.random() * 86+1);
const url = "https://alquranbd.com/api/hadith/bukhari/" + topicNumber;
fetch(url)
    .then(data => data.json())
    .then(hadithData => {
        const numberofItems = Object.keys(hadithData).length;
        const itemNumber = Math.floor(Math.random() * numberofItems+0)

        const topicElementText = hadithData[itemNumber].topicName;
        const topicElement = document.getElementById('topicElement');

        const hadithBanglaElementText = hadithData[itemNumber].hadithBengali;
        const hadithBanglaElement = document.getElementById('hadithBanglaElement');

        const hadithArabicElementText = hadithData[itemNumber].hadithArabic;
        const hadithArabicElement = document.getElementById('hadithArabicElement');

        const hadithEnglishElementText = hadithData[itemNumber].hadithEnglish;
        const hadithEnglishElement = document.getElementById('hadithEnglishElement');

        topicElement.innerHTML = topicElementText;
        hadithBanglaElement.innerHTML= hadithBanglaElementText;
        hadithArabicElement.innerHTML = hadithArabicElementText;
        hadithEnglishElement.innerHTML = hadithEnglishElementText;

    })