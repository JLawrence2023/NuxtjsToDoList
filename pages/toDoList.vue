<template>
  <div class="container">
    <div class="inner-container">
      <div class="content">
        <Dropdown />
        <div class="task-list">
          <div class="todo">
            <div class="assignment-title">
              <div class="ellipse pink"></div>
              <div class="text-title">未対応</div>
              <div class="badge-number">10</div>
            </div>
            <div class="rectangle">
              <div class="assignment-text">
                <div class="plus">➕</div>
                <div class="add-assignment">課題の追加...</div>
              </div>
              <div>
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
              </div>
            </div>
          </div>
          <div class="todo">
            <div class="assignment-title">
              <div class="ellipse blue"></div>
              <div class="text-title">処理中</div>
              <div class="badge-number">1</div>
            </div>
            <div class="rectangle">
              <div class="assignment-text">
                <div class="plus">➕</div>
                <div class="add-assignment">課題の追加...</div>
              </div>

              <div>
                <CardComponent />
              </div>
            </div>
          </div>
          <div class="todo">
            <div class="assignment-title">
              <div class="ellipse green"></div>
              <div class="text-title">レビ</div>
              <div class="badge-number">2</div>
            </div>
            <div class="rectangle">
              <div class="assignment-text">
                <div class="plus">➕</div>
                <div class="add-assignment">課題の追加...</div>
              </div>

              <div>
                <CardComponent />
                <CardComponent />
              </div>
            </div>
          </div>
          <div class="todo">
            <div class="assignment-title">
              <div class="ellipse yellow"></div>
              <div class="text-title">完了</div>
              <div class="badge-number">3</div>
            </div>
            <div class="rectangle">
              <div class="assignment-text">
                <div class="plus">➕</div>
                <div class="add-assignment">課題の追加...</div>
              </div>

              <div>
                <CardComponent />
                <CardComponent />
                <CardComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Dropdown from "../components/Dropdown.vue";
import Component2 from "../components/CardComponent.vue";
</script>

<style scoped>
.task-list {
  display: flex;
  align-items: center;
  width: 100%;
}
.todo {
  margin-right: 40px;
}
.add-assignment {
  display: flex;
  width: 70px;
  height: 20px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #02836b;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.plus {
  display: flex;
  width: 13px;
  height: 12px;
  margin-left: 3px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #808080;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 5px;
}
.assignment-text {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.rectangle {
  width: 100%;
  height: 574px;
  background: white;
  border-radius: 3px;
  padding: 10px;
  overflow-y: auto;

  white-space: nowrap;
}
.container {
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
}
.inner-container {
  padding: 41px;
  padding-top: 58px;
}
.content {
  display: inline-block;
}
.text-title {
  width: 57px;
  height: 25px;
  color: black;
  font-size: 16px;
  margin-left: 7px;
  font-family: Inter;
  font-weight: 700;
  word-wrap: break-word;
}
.badge-number {
  width: 34px;
  height: 21px;
  text-align: center;
  color: black;
  font-size: 14px;
  font-family: Inter;
  font-weight: 700;
  word-wrap: break-word;
  background-color: #d9d9d9;
  border-radius: 15px;
}
.assignment-title {
  display: flex;
  align-items: center;
  margin-bottom: 11px;
}
</style>
