const ham = document.querySelector('.ham');
const mid = document.querySelector('.mid');
const image_caption = document.querySelector('.image-caption');
const toggles = document.querySelectorAll('.toggle');
const nav_links = document.querySelectorAll('.nav-link');
const top_nav = document.querySelector('.nav');
const our_history_button = document.getElementById('our-history');
const lottie_container = document.getElementById('lottie-container').children[0];
const action = document.querySelector('.action');

let coercialIndex = 0;

const coercions = [
    {
        h_1: 'Security',
        p: 'Night security and Patrol',
        a: 'Contact Us',
        href: ''
    },
    {
        h_1: 'Service',
        p: 'Highly trained teams with endurance',
        a: 'Contact Us',
        href: ''
    },
    {
        h_1: 'Reputable',
        p: 'Professional and reliable Legions',
        a: 'Contact Us',
        href: ''
    },
    {
        h_1: 'Care',
        p: 'VIP Principal escort',
        a: 'Contact Us',
        href: ''
    },
    {
        h_1: 'Robust',
        p: 'Around the clock security',
        a: 'Contact Us',
        href: ''
    },
    {
        h_1: 'Vigilant',
        p: 'Close protection services',
        a: 'Contact Us',
        href: ''
    },
    {
        h_1: 'Skilled',
        p: 'Hand to Hand Combat Trained',
        a: 'Contact Us',
        href: ''
    },
    {
        h_1: 'Trained',
        p: 'Highly trained teams with endurance',
        a: 'Contact Us',
        href: ''
    },
    {
        h_1: 'Strapped',
        p: 'Well Equipped Protectors',
        a: 'Contact Us',
        href: ''
    }
];

nav_links.forEach((link) => {
    link.addEventListener('click', () => {
        mid.classList.toggle('active');
        ham.classList.toggle('active');
    });
});


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
    var whatsapp_url = "whatsapp://send?phone=254112657222&text=" + sMsg;
    window.location.href = whatsapp_url;
}

function sendEmail() {
    var name = document.getElementById('username').value;
    var email = document.getElementById('email').value;

    if (name == "") {
        name = email.split("@")[0];
    }

    var msg = document.getElementById('message').value;
    var sMsg = encodeURIComponent("I am " + name + " \n\n" + msg);

    emailjs.send("service_vrjl64h", "template_11e0jpm", {
        from_name: name,
        from_email: email,
        message: sMsg
    }).then(function (response) {
        console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
        alert("Message sent successfully");
    }, function (err) {
        alert("Message failed to send \n" + err);
    });
}

function showText() {
    toggles.forEach((element) => {
        element.classList.toggle('active');
    });
}

window.addEventListener('scroll', () => {
    let vh = window.innerHeight
    
    if (window.scrollY > 0.8 * vh) {
        top_nav.style.height = '60px';
        our_history_button.parentElement.style.transform = 'scale(0.8)';
        lottie_container.style.transform = 'scale(0.8)';
        action.style.gap = '0';
    } else {
        top_nav.style.height = '12vh';
        our_history_button.parentElement.style.transform = 'scale(1)';
        lottie_container.style.transform = 'scale(1)';
        action.style.gap = '1rem';
    }
});

setInterval(() => {
    if (coercialIndex < coercions.length - 1) {
        coercialIndex++;
    } else {
        coercialIndex = 0;
    }
    displayCoercions();
}, 3000);

displayCoercions();
