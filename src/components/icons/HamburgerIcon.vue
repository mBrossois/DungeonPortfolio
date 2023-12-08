<template>
    <svg width="46" height="57" viewBox="0 0 46 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_43_77)">
            <rect y="1.52588e-05" width="46" height="13.7544" rx="2" fill="#60584C"/>
            <rect y="20.6316" width="46" height="13.7544" rx="2" fill="#60584C"/>
            <rect y="43.2281" width="46" height="13.7544" rx="2" fill="#60584C"/>
        </g>
        <defs>
            <clipPath id="clip0_43_77">
                <rect width="46" height="56.9825" fill="white"/>
            </clipPath>
        </defs>
    </svg>

</template>

<style scoped>
    svg {
        cursor: pointer;
    }

    rect {
        transition: transform 200ms ease-in;
    }

    g > rect:nth-child(1) {
        transition: transform 300ms ease-in;
    }

    svg:hover > g > rect:nth-child(1) {
        transform: translateY(16px);
    }

    svg:hover > g > rect:nth-child(2) {
        transform: translateY(9px);
    }

</style>