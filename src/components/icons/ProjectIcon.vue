<template>
    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="89" height="89" />
        <rect class="icon-stroke" x="17" y="4" width="55" height="78" rx="4" fill="white"/>
        <rect class="icon-stroke" x="32" width="24" height="9" rx="2" fill="#60584C"/>
        <path d="M33 19H60" stroke="black" stroke-width="2" stroke-linecap="round"/>
        <path d="M33 31H60" stroke="black" stroke-width="2" stroke-linecap="round"/>
        <path d="M33 43H60" stroke="black" stroke-width="2" stroke-linecap="round"/>
        <path d="M33 55H60" stroke="black" stroke-width="2" stroke-linecap="round"/>
        <path d="M33 67H60" stroke="black" stroke-width="2" stroke-linecap="round"/>
        <path d="M23 17.7539L24 18.7539L26.7539 16" stroke="black" stroke-width="2" stroke-linecap="round"/>
        <path d="M23 29.5078L24 30.5078L26.7539 27.7539" stroke="black" stroke-width="2" stroke-linecap="round"/>
        <path d="M23 41.2617L24 42.2617L26.7539 39.5078" stroke="black" stroke-width="2" stroke-linecap="round"/>
        <path d="M23 53.0156L24 54.0156L26.7539 51.2617" stroke="black" stroke-width="2" stroke-linecap="round"/>
        <path d="M23 64.7695L24 65.7695L26.7539 63.0156" stroke="black" stroke-width="2" stroke-linecap="round"/>
        <path class="clank icon-stroke" fill-rule="evenodd" clip-rule="evenodd" d="M67 48C66.4477 48 66 48.4477 66 49V51.2489C63.2649 51.7077 60.739 52.7834 58.5701 54.3279L56.9493 52.7071C56.5588 52.3166 55.9256 52.3166 55.5351 52.7071L52.7067 55.5355C52.3161 55.9261 52.3161 56.5592 52.7067 56.9497L54.3276 58.5707C52.7832 60.7394 51.7077 63.2651 51.2489 66H49C48.4477 66 48 66.4477 48 67V71C48 71.5523 48.4477 72 49 72H51.2489C51.7277 74.8539 52.878 77.48 54.5318 79.7104L52.7067 81.5355C52.3161 81.9261 52.3161 82.5592 52.7067 82.9497L55.5351 85.7782C55.9256 86.1687 56.5588 86.1687 56.9493 85.7782L58.856 83.8715C60.9598 85.3093 63.3842 86.3123 66 86.7511V89C66 89.5523 66.4477 90 67 90H71C71.5523 90 72 89.5523 72 89V86.7511C74.4886 86.3336 76.8041 85.4054 78.835 84.0781L80.5351 85.7782C80.9256 86.1687 81.5588 86.1687 81.9493 85.7782L84.7777 82.9497C85.1682 82.5592 85.1682 81.9261 84.7777 81.5355L83.246 80.0038C85.019 77.7117 86.2512 74.98 86.7511 72H89C89.5523 72 90 71.5523 90 71V67C90 66.4477 89.5523 66 89 66H86.7511C86.2711 63.1387 85.116 60.5063 83.4553 58.2722L84.7777 56.9497C85.1682 56.5592 85.1682 55.9261 84.7777 55.5355L81.9493 52.7071C81.5588 52.3166 80.9256 52.3166 80.5351 52.7071L79.126 54.1162C77.0264 52.685 74.6083 51.6865 72 51.2489V49C72 48.4477 71.5523 48 71 48H67ZM69 76C72.866 76 76 72.866 76 69C76 65.134 72.866 62 69 62C65.134 62 62 65.134 62 69C62 72.866 65.134 76 69 76Z" fill="#9A8470"/>
    </svg>
</template>

<style scoped>
    .clank {
        transform-box: fill-box;
        transform-origin: center;
        transform: rotate(0deg);
    }

    button:hover svg > .clank {
        animation: rotation 2s ease-in-out alternate infinite;
    }

    @keyframes rotation {
        0%, 35% {
            transform: rotate(0deg);
        } 65%, 100% {
            transform: rotate(180deg);
        }
    }
</style>