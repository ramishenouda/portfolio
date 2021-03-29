const clientFeedBack = document.getElementById('client-feedback');
const clientName = document.getElementById('client-name');


function toggleOptions(id) {
    const options = document.getElementById(id);

    if (options.style.display === 'none' || options.style.display === '') {
        options.style.display = 'block';
    } else {
        options.style.display = 'none';
    }
}

function goToLink(href, id) {
    const options = document.getElementById(id);
    if (options.style.display === 'block') {
        window.open(href);
    }
}

function next(next) {
    document.getElementsByClassName('dot')[0].classList.remove('active-dot');
    document.getElementsByClassName('dot')[1].classList.remove('active-dot');
    document.getElementsByClassName('dot')[2].classList.remove('active-dot');

    if (next === 2) {
        clientFeedBack.innerHTML = `
            Rami helped me with everything, including explaining the differences between 
            my options and he helped me publish my website. 
            He also helped me choose a good server provider. 
            He is really experienced and knows what he is doing. 
            He is respectful and qualified.
        `
        clientName.innerHTML = "~Derya Dinc"
        clientName.setAttribute('href', 'https://www.deryadinc.com/')
        document.getElementsByClassName('dot')[2].classList.add('active-dot');
    } else if (next === 1) {
        clientFeedBack.innerHTML = `
        Rami have shown commitment, well-organized
        work, and support to his colleagues.
        Rami is a great asset to our team, he is
        encouraged to speak up to share his thoughts, to
        involve in the planned tasks.
        `
        clientName.innerHTML = "~Mohamed Hamdeen - founder of DrugCatcher"
        clientName.setAttribute('href', 'https://www.linkedin.com/in/ihamdeen/')
        document.getElementsByClassName('dot')[1].classList.add('active-dot');
    } else {
        clientFeedBack.innerHTML = `
            Thank you Rami for your good work! Rami does his best to complete the projects successfully and on time,
            even if the requirements are not well explained! Will hire Rami for my next projects again!
        `
        clientName.innerHTML = "~Arek Roczniewski - Roczniewski & Schwede GbR"
        clientName.setAttribute('href', 'https://codekiste.com/')
        document.getElementsByClassName('dot')[0].classList.add('active-dot');
    }
}