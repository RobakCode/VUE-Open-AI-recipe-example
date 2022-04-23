<template>
  <RouterView />
</template>

<style>
body {
  margin: 0;
  background: #285059;
  font-family: Montserrat;
}

.wrapper {
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.headline {
  font-size: 3rem;
  color: #fff;
}
</style>
