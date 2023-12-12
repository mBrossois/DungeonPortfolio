<template>
    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_45_99)">
            <path class="envelope-top icon-stroke" d="M30.78 76.2588C31.4511 76.7076 32.3264 76.7089 32.9988 76.262L62.4844 56.6657C64.1337 55.5696 63.3577 53 61.3774 53H2.58842C0.611085 53 -0.167042 55.5633 1.47663 56.6625L30.78 76.2588Z" fill="#9C8F7C"/>
            <path class="icon-stroke" d="M30.78 76.2588C31.4511 76.7076 32.3264 76.7089 32.9988 76.262L62.4844 56.6657C64.1337 55.5696 63.3577 53 61.3774 53H2.58842C0.611085 53 -0.167042 55.5633 1.47663 56.6625L30.78 76.2588Z" fill="#9C8F7C"/>
            <path class="icon-stroke" d="M33.2602 70.3238C32.6049 70.7021 32.5909 71.6428 33.2346 72.0405L60.4399 88.8488C61.1061 89.2604 61.9655 88.7812 61.9655 87.998L61.9655 55.4828C61.9655 54.713 61.1322 54.2319 60.4655 54.6168L33.2602 70.3238Z" fill="#898989"/>
            <path class="icon-stroke" d="M30.3295 72.0473C30.9889 71.6526 30.9751 70.6926 30.3047 70.317L2.23065 54.5851C1.56407 54.2116 0.741803 54.6934 0.741803 55.4575L0.741802 87.9952C0.741802 88.7721 1.58889 89.2522 2.25543 88.8532L30.3295 72.0473Z" fill="#898989"/>
            <path class="icon-stroke" d="M31.8104 66.8964L60.7661 88.8273H1.96008L31.8104 66.8964Z" fill="#60584C"/>
            <rect class="icon-stroke" x="49" y="1" width="39.9375" height="71" rx="2" fill="#FFD057"/>
            <rect x="52.3281" y="4.32812" width="33.2812" height="54.3594" rx="2" fill="#60584C"/>
            <circle cx="68.9688" cy="65.3438" r="3.32812" fill="#60584C"/>
        </g>
    </svg>
</template>

<style scoped>
    .envelope-top {
        transform-box: fill-box;
        transform-origin: top;
        transition: transform 300ms ease-in-out;
        transform: rotateX(90deg) translateY(-1px);

    }

    button:hover svg g > .envelope-top {
        transform: rotateX(180deg) translateY(-2px);
    }
</style>