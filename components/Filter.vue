<template>
  <div>
    <div class="dropdown">
      <div
        class="text-wrapper"
        style="
          width: 117px;
          height: 25px;
          color: black;
          font-size: 14px;
          font-family: Inter;
          font-weight: 400;
          word-wrap: break-word;
          margin: 0;
        "
      >
        タグ
      </div>
      <div
        class="rectangle12"
        style="
          width: 150px;
          height: 30px;
          background: white;
          border-radius: 3px;
          border: 0.5px #bcbcbc solid;
          margin: 0;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        "
      >
        <div
          class="polygon"
          style="
            text-align: center;
            width: 15px;
            height: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 6px;
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
          >
            <path
              d="M6.5 8L0.00480926 0.499999L12.9952 0.499999L6.5 8Z"
              fill="#808080"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.dropdown {
  margin-bottom: 39px;
}
</style>
