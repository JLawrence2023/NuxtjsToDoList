<template>
  <div
    class="Component2"
    style="width: 230px; height: 70px; position: relative; margin-bottom: 6px"
  >
    <div
      class="Rectangle94"
      style="
        width: 230px;
        height: 70px;
        left: 0px;
        top: 0px;
        position: absolute;
        background: white;
        border-radius: 2px;
        border: 0.5px #c1c1c1 solid;
      "
    ></div>
    <div
      class="Rectangle97"
      style="
        width: 230px;
        height: 70px;
        left: 0px;
        top: 0px;
        position: absolute;
        background: white;
        border-radius: 2px;
        border: 0.5px #c1c1c1 solid;
      "
    ></div>
    <div
      style="
        width: 210px;
        height: 35px;
        left: 11px;
        top: 7px;
        position: absolute;
        color: black;
        font-size: 12px;
        font-family: Inter;
        font-weight: 400;
        word-wrap: break-word;
      "
    >
      {{ item.title }}
    </div>
    <div
      class="Rectangle95"
      style="
        width: 35px;
        height: 15px;
        left: 11px;
        top: 48px;
        position: absolute;
        background: #a1af2f;
        border-radius: 10px;
      "
    ></div>
    <div
      class="Rectangle96"
      style="
        width: 35px;
        height: 15px;
        left: 50px;
        top: 48px;
        position: absolute;
        background: #a1af2f;
        border-radius: 10px;
      "
    ></div>
    <div
      class="Tag1"
      style="
        width: 35px;
        height: 15px;
        left: 11px;
        top: 48px;
        position: absolute;
        text-align: center;
        color: white;
        font-size: 10px;
        font-family: Inter;
        font-weight: 700;
        word-wrap: break-word;
      "
    >
      tag1
    </div>
    <div
      class="Tag1"
      style="
        width: 35px;
        height: 15px;
        left: 50px;
        top: 48px;
        position: absolute;
        text-align: center;
        color: white;
        font-size: 10px;
        font-family: Inter;
        font-weight: 700;
        word-wrap: break-word;
      "
    >
      tag1
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.Component2 {
  cursor: pointer;
}
</style>
