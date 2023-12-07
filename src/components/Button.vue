<template>
    <button tabindex="0">
        <slot name="title"></slot>
        <slot name="icon" class="icon"></slot>
    </button>
</template>

<style scoped>
button {
    width: 8.125rem;
    height: 8.125rem;

    background-color: #D9D9D9;
    padding: .5rem;
    padding-bottom: .28rem;
    border: none;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

button:hover {
    cursor: pointer;
    outline: 2px solid black;
}

.icon {
    height: 5.625rem;
    width: 5.625rem;
}
</style>