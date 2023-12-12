<template>
    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
            <path class="wrench icon-stroke" fill-rule="evenodd" clip-rule="evenodd" d="M1.09492 14.8172C1.0322 15.3844 1 15.9608 1 16.5447C1 25.1299 7.96152 32.0896 16.549 32.0896C18.9575 32.0896 21.2381 31.5421 23.2731 30.5649L59.8098 67.0922C58.9372 69.0343 58.4518 71.188 58.4518 73.455C58.4518 82.0403 65.4133 89 74.0008 89C75.2146 89 76.396 88.8609 77.5298 88.5979L66.3142 77.3852L78.9861 64.7165L89.4549 75.1825C89.5176 74.6153 89.5498 74.0389 89.5498 73.455C89.5498 64.8698 82.5883 57.9101 74.0008 57.9101C72.0298 57.9101 70.1444 58.2767 68.4092 58.9455L31.2046 21.7506C31.7831 20.123 32.098 18.3706 32.098 16.5447C32.098 7.95941 25.1365 0.999695 16.549 0.999695C15.3351 0.999695 14.1538 1.13875 13.02 1.4018L24.2356 12.6145L11.5637 25.2832L1.09492 14.8172Z" fill="#9C8F7C"/>
            <g class="pencil">
                <rect class="icon-stroke" width="84.7009" height="15.4574" transform="matrix(-0.704458 0.709746 -0.704458 -0.709746 78.0713 24.167)" fill="#60584C"/>
                <rect class="icon-stroke" width="5.38383" height="15.4574" transform="matrix(-0.704458 0.709746 -0.704458 -0.709746 81.5371 20.7687)" fill="#898989"/>
                <rect class="icon-stroke" width="12.5466" height="15.4574" transform="matrix(-0.704458 0.709746 -0.704458 -0.709746 90 12.2424)" fill="#FF8F5F"/>
                <path class="icon-stroke" d="M3.11902 88.642L7.62035 73.0944L18.5507 84.1068L3.11902 88.642Z" fill="#7D5C29"/>
                <path class="icon-stroke" d="M3.11958 88.6419L4.23796 84.7791L6.95367 87.5152L3.11958 88.6419Z" fill="#898989"/>
            </g>
        </g>
    </svg>

</template>

<style scoped>
    svg {
        overflow: visible;
    }

    .wrench, .pencil {
        transform-origin: center;
        transform-box: fill-box;
        transition: transform 200ms ease-in-out;
    }

    button:hover svg g > .wrench {
        transform: rotate(10deg);

    }

    button:hover svg g > .pencil {
        transform: rotate(-10deg);

    }
</style>