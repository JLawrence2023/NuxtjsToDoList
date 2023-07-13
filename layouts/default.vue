<template>
  <div class="DefaultLayout">
    <header class="shadow sm bg-white">
      <nav class="navbar">
        <div class="navbar-text-container">
          <div class="navbar-text">ToDo</div>
        </div>
      </nav>
    </header>
    <div>
      <slot />
    </div>
  </div>
</template>

<style>
.navbar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0;
  padding: 0;
}
.navbar-text-container {
  display: flex;
  width: 202px;
  height: 70px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
}
.navbar-text {
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
body {
  margin: 0;
  background-color: #f0f0f0;
}
</style>
