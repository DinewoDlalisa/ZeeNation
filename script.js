let envelopeOpen = false;

function toggleEnvelope() {
    if (envelopeOpen) {
        closeEnvelope();
    } else {
        openEnvelope();
    }
}

function openEnvelope() {
    document.querySelector('.flap').style.transform = 'rotateX(-180deg)';
    document.querySelector('.heart').style.opacity = '0';
    document.querySelector('.message').style.opacity = '1';
    setTimeout(() => {
        document.querySelector('.angel').style.right = '20px';
        document.querySelector('.angel').style.opacity = '1';
    }, 1000);
    envelopeOpen = true;
}

function closeEnvelope() {
    document.querySelector('.flap').style.transform = 'rotateX(0deg)';
    document.querySelector('.heart').style.opacity = '1';
    document.querySelector('.message').style.opacity = '0';
    document.querySelector('.angel').style.right = '-100px';
    document.querySelector('.angel').style.opacity = '0';
    envelopeOpen = false;
}

function createHearts() {
    const heartsContainer = document.createElement('div');
    heartsContainer.classList.add('background-hearts');
    document.body.appendChild(heartsContainer);

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDelay = `${Math.random() * 2}s`;
        heartsContainer.appendChild(heart);
    }
}

createHearts();
