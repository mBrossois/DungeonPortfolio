<template>
    <svg width="105" height="105" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_34_332)">
            <g class="origin-left animate-leaf">
                <path d="M67.1789 13.7954C67.1789 13.7954 57.2963 25.334 50.39 26.6312C43.4838 27.9283 35.9014 20.5569 35.9014 20.5569C35.9014 20.5569 39.5308 10.5659 46.5873 9.04046C53.6438 7.51498 67.1789 13.7954 67.1789 13.7954Z" fill="#FFD057"/>
                <line x1="30.9416" y1="20.5034" x2="47.9416" y2="18.5034" stroke="#7D5C29"/>
            </g>
            <g class="origin-bottom animate-leaf">
                <path  d="M66.793 26.4993C66.793 26.4993 68.7029 41.571 65.0249 47.5586C61.3469 53.5462 50.793 54.2121 50.793 54.2121C50.793 54.2121 45.8293 44.8124 49.439 38.5601C53.0488 32.3078 66.793 26.4993 66.793 26.4993Z" fill="#FFD057"/>
                <line x1="48.377" y1="59.6748" x2="55.9315" y2="44.3149" stroke="#7D5C29"/>
            </g>
            <g class="origin-bottom animate-leaf">
                <path  d="M91.1161 31.8944C91.1161 31.8944 100.306 43.992 100.115 51.0164C99.9232 58.0408 91.1161 63.8944 91.1161 63.8944C91.1161 63.8944 82.1176 58.2359 82.1176 51.0164C82.1176 43.7969 91.1161 31.8944 91.1161 31.8944Z" fill="#FFD057"/>
                <line x1="90.9517" y1="69.2134" x2="91.6035" y2="52.1086" stroke="#7D5C29"/>
            </g>
            <g class="origin-top animate-leaf">
                <path  d="M39.7955 95.2135C39.7955 95.2135 37.8856 80.1417 41.5636 74.1542C45.2416 68.1666 55.7955 67.5007 55.7955 67.5007C55.7955 67.5007 60.7592 76.9004 57.1495 83.1527C53.5397 89.405 39.7955 95.2135 39.7955 95.2135Z" fill="#FFD057"/>
                <line x1="49.5513" y1="79.1393" x2="57.1059" y2="63.7793" stroke="#7D5C29"/>
            </g>
            <g class="origin-top animate-leaf">
                <path  d="M82.0015 104C82.0015 104 72.8115 91.9024 73.0029 84.8781C73.1944 77.8537 82.0015 72 82.0015 72C82.0015 72 91 77.6585 91 84.878C91 92.0976 82.0015 104 82.0015 104Z" fill="#FFD057"/>
                <line x1="81.5004" y1="85.0858" x2="82.1523" y2="67.981" stroke="#7D5C29"/>
            </g>
            <g class="origin-top animate-leaf">
                <path  d="M13.5233 75.5C13.5233 75.5 15.5793 60.4474 20.6817 55.6158C25.784 50.7842 36.1507 52.8726 36.1507 52.8726C36.1507 52.8726 38.5125 63.2367 33.4075 68.3417C28.3025 73.4466 13.5233 75.5 13.5233 75.5Z" fill="#FFD057"/>
                <line x1="27.6455" y1="61.7841" x2="39.7161" y2="49.6474" stroke="#7D5C29"/>
            </g>
            <g class="origin-top animate-leaf">
                <path  d="M1.36499 42.9924C1.36499 42.9924 3.42095 27.9399 8.52333 23.1083C13.6257 18.2766 23.9924 20.365 23.9924 20.365C23.9924 20.365 26.3541 30.7291 21.2492 35.8341C16.1442 40.9391 1.36499 42.9924 1.36499 42.9924Z" fill="#FFD057"/>
                <line x1="17.6416" y1="26.921" x2="29.5771" y2="14.6514" stroke="#7D5C29"/>
            </g>
            <path d="M30.1782 -10C30.1782 -10 23.3201 33.8489 42.8201 53.3489C62.3201 72.8489 105.178 67 105.178 67" stroke="#7D5C29" stroke-width="4"/>
        </g>
    </svg>

</template>

<style>
    .animate-leaf {
        transform-box: fill-box;
        transform-origin: center;
        animation: blowing-wind 2s ease-in-out infinite alternate;
    }

    .origin-bottom {
        --animation-degree: 10deg;
        transform-origin: bottom;
    }
    .origin-top {
        --animation-degree: -10deg;
        transform-origin: top;
    }
    .origin-left {
        --animation-degree: 4deg;
        transform-origin: left;
    }
    
    @keyframes blowing-wind {
        from {
            transform: rotate( 0deg);
        } to {
            transform: rotate( var(--animation-degree) );
        }
        
    }

</style>