function showForm(formId) {
    document.getElementById('forms').style.display = 'block';
    document.querySelectorAll('.form-container').forEach(form => {
        form.style.display = 'none';
    });
    document.getElementById(formId).style.display = 'block';
}

function showLandingPage() {
    document.getElementById('initial').style.display = 'none';
    document.getElementById('landing-page').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.animated-text').classList.add('hidden');
        document.querySelector('.about-myself').style.display = 'block';
    }, 2000);
}

function showInitialPage() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('initial').style.display = 'block';
    document.getElementById('forms').style.display = 'none';
    document.querySelector('.about-myself').style.display = 'none';
    document.querySelector('.animated-text').classList.remove('hidden');
}
