<template>
  <main>
    <div class="wrapper">
      <h1 class="headline">
        We will prepare a recipe for you, choose what you want
      </h1>

      <nav>
        <ul class="menu">
          <li>
            <RouterLink to="/breakfast">Breakfast</RouterLink>
          </li>
          <li>
            <RouterLink to="/dinner">Dinner</RouterLink>
          </li>
          <li>
            <RouterLink to="/something-sweet">Something sweet</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </main>
</template>

<style>
.menu {
  display: flex;
  flex-direction: row;
  list-style-type: none;
}

.menu li {
  margin: 0 8px;
}

.menu li a {
  text-decoration: none;
  color: #000;
  padding: 8px 16px;
  border-radius: 8px;
  background: #a2cfd9;
  color: #111;
  text-transform: uppercase;
}
</style>
