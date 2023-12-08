<template>
    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g class="wrench">
                <rect width="56.2682" height="11.8412" transform="matrix(0.707199 0.707015 -0.707199 0.707015 29.4032 19.9498)" fill="#9C8F7C"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.09492 14.8172C1.0322 15.3844 1 15.9608 1 16.5447C1 25.1299 7.96152 32.0896 16.549 32.0896C25.1365 32.0896 32.098 25.1299 32.098 16.5447C32.098 7.95941 25.1365 0.999695 16.549 0.999695C15.3351 0.999695 14.1538 1.13875 13.02 1.4018L24.2356 12.6145L11.5637 25.2832L1.09492 14.8172Z" fill="#9C8F7C"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M89.4552 75.1825C89.518 74.6153 89.5502 74.0389 89.5502 73.455C89.5502 64.8698 82.5887 57.9101 74.0012 57.9101C65.4137 57.9101 58.4522 64.8698 58.4522 73.455C58.4522 82.0403 65.4137 89 74.0012 89C75.215 89 76.3964 88.8609 77.5302 88.5979L66.3145 77.3852L78.9865 64.7165L89.4552 75.1825Z" fill="#9C8F7C"/>
            </g>
            <g class="pencil">
                <rect width="84.7009" height="15.4574" transform="matrix(-0.704458 0.709746 -0.704458 -0.709746 78.071 24.167)" fill="#60584C"/>
                <rect width="5.38383" height="15.4574" transform="matrix(-0.704458 0.709746 -0.704458 -0.709746 81.5372 20.7687)" fill="#898989"/>
                <rect width="12.5466" height="15.4574" transform="matrix(-0.704458 0.709746 -0.704458 -0.709746 90 12.2424)" fill="#FF8F5F"/>
                <path d="M3.11927 88.642L7.62059 73.0944L18.551 84.1068L3.11927 88.642Z" fill="#7D5C29"/>
                <path d="M3.11922 88.6419L4.23759 84.7791L6.9533 87.5152L3.11922 88.6419Z" fill="#898989"/>
            </g>
        <defs>
            <clipPath id="clip0_45_38">
                <rect width="90" height="90" fill="white"/>
            </clipPath>
        </defs>
    </svg>
</template>

<style>
    .wrench, .pencil {
        transform-origin: center;
        transform-box: fill-box;
        transition: transform 200ms ease-in-out;
    }

    button:hover svg > .wrench {
        transform: rotate(10deg);

    }

    button:hover svg > .pencil {
        transform: rotate(-10deg);

    }
</style>