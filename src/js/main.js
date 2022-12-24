const ham = document.querySelector('.ham');
const mid = document.querySelector('.mid');
const image_caption = document.querySelector('.image-caption');
let coercialIndex = 0;

const coercions = [
    {
        h_1: 'Security',
        p: 'Your security is our top priority',
        a: 'Get Assuarance',
        href: ''
    },
    {
        h_1: 'Service',
        p: 'Get the number one service',
        a: 'Get Served',
        href: ''
    },
    {
        h_1: 'Reputable',
        p: 'We have a great reputations',
        a: 'Get Reliability',
        href: ''
    },
    {
        h_1: 'Care',
        p: 'We care for more than just your property',
        a: 'Our Values',
        href: ''
    },
    {
        h_1: 'Robust',
        p: 'Our personel are robust and well trained',
        a: 'Our Team',
        href: ''
    }
];


let displayCoercions = () => {
    image_caption.innerHTML = `
        <div class="col">
            <h1>${coercions[coercialIndex].h_1}</h1>
            <p>${coercions[coercialIndex].p}</p>
        </div>
        <a href="${coercions[coercialIndex].href}" role="button" class="call-to-action">${coercions[coercialIndex].a}</a>
    `;
};


ham.addEventListener('click', () => {
    mid.classList.toggle('active');
    ham.classList.toggle('active');
});


function openWhatsApp() {
    var name = document.getElementById('username').value;
    var msg = document.getElementById('message').value;
    var sMsg = encodeURIComponent("I am " + name + " \n\n" + msg);
    var whatsapp_url = "whatsapp://send?phone=2547720105825&text=" + sMsg;
    window.location.href = whatsapp_url;
}

window.onload = displayCoercions;

setInterval(() => {
    if (coercialIndex < coercions.length - 1) {
        coercialIndex++;
    } else {
        coercialIndex = 0;
    }
    displayCoercions();
}, 3300);