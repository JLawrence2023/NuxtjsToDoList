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
            <div
              class="rectangle"
              @drop="onDrop($event, 1)"
              @dragenter.prevent
              @dragover.prevent
            >
              <div class="assignment-text">
                <div class="plus">➕</div>
                <div class="add-assignment">課題の追加...</div>
              </div>

              <div v-for="item in getList(1)" :key="item.id">
                <CardComponent
                  :item="item"
                  draggable="true"
                  @dragstart="startDrag($event, item)"
                />
              </div>

              <!-- <draggable v-model="cards1" :options="{group: 'cardsGroup'}">
                <CardComponent
                  :data="card"
                  v-for="(card, index) in cards1"
                  :key="index"
                  draggable="true"
                />
              </draggable> -->
            </div>
          </div>
          <div class="todo">
            <div class="assignment-title">
              <div class="ellipse blue"></div>
              <div class="text-title">処理中</div>
              <div class="badge-number">1</div>
            </div>
            <div
              class="rectangle"
              @drop="onDrop($event, 2)"
              @dragenter.prevent
              @dragover.prevent
            >
              <div class="assignment-text">
                <div class="plus">➕</div>
                <div class="add-assignment">課題の追加...</div>
              </div>
              <div v-for="item in getList(2)" :key="item.id">
                <CardComponent
                  :item="item"
                  draggable="true"
                  @dragstart="startDrag($event, item)"
                />
              </div>

              <!-- <draggable v-model="cards2" :options="{group: 'cardsGroup'}">
                <CardComponent
                  :data="card"
                  v-for="(card, index) in cards2"
                  :key="index"
                  draggable="true"
                />
              </draggable> -->
            </div>
          </div>
          <div class="todo">
            <div class="assignment-title">
              <div class="ellipse green"></div>
              <div class="text-title">レビュー中</div>
              <div class="badge-number">2</div>
            </div>
            <div
              class="rectangle"
              @drop="onDrop($event, 3)"
              @dragenter.prevent
              @dragover.prevent
            >
              <div class="assignment-text">
                <div class="plus">➕</div>
                <div class="add-assignment">課題の追加...</div>
              </div>

              <div v-for="item in getList(3)" :key="item.id">
                <CardComponent
                  :item="item"
                  draggable="true"
                  @dragstart="startDrag($event, item)"
                />
              </div>
            </div>
          </div>
          <div class="todo">
            <div class="assignment-title">
              <div class="ellipse yellow"></div>
              <div class="text-title">完了</div>
              <div class="badge-number">3</div>
            </div>
            <div
              class="rectangle"
              @drop="onDrop($event, 4)"
              @dragenter.prevent
              @dragover.prevent
            >
              <div class="assignment-text">
                <div class="plus">➕</div>
                <div class="add-assignment">課題の追加...</div>
              </div>

              <div v-for="item in getList(4)" :key="item.id">
                <CardComponent
                  :item="item"
                  draggable="true"
                  @dragstart="startDrag($event, item)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from "../components/Dropdown.vue";
import CardComponent from "../components/CardComponent.vue";
import {ref} from "vue";
export default {
  setup() {
    const items = ref([
      {
        id: 1,
        title: "タスクの追加機能 1.1",
        list: 1,
      },
      {
        id: 2,
        title: "タスクの追加機能 1.2",
        list: 1,
      },
      {
        id: 2,
        title: "タスクの追加機能 1.3",
        list: 1,
      },
      {
        id: 3,
        title: "タスクの追加機能 1.4",
        list: 1,
      },
      {
        id: 4,
        title: "タスクの追加機能 1.5",
        list: 1,
      },
      {
        id: 5,
        title: "タスクの追加機能 1.6",
        list: 1,
      },
      {
        id: 6,
        title: "タスクの追加機能 1.7",
        list: 1,
      },
      {
        id: 7,
        title: "タスクの追加機能 1.8",
        list: 1,
      },
      {
        id: 8,
        title: "タスクの追加機能 1.9",
        list: 1,
      },
      {
        id: 9,
        title: "タスクの追加機能 1.10",
        list: 1,
      },
      {
        id: 10,
        title: "タスクの追加機能 2.1",
        list: 2,
      },
      {
        id: 11,
        title: "タスクの追加機能 3.1",
        list: 3,
      },
      {
        id: 12,
        title: "タスクの追加機能 3.2",
        list: 3,
      },
      {
        id: 13,
        title: "タスクの追加機能 4.1",
        list: 4,
      },
      {
        id: 14,
        title: "タスクの追加機能 4.2",
        list: 4,
      },
      {
        id: 15,
        title: "タスクの追加機能 4.3",
        list: 4,
      },
    ]);
    const getList = (list) => {
      return items.value.filter((item) => item.list == list);
    };

    const startDrag = (event, item) => {
      console.log(item);
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("itemID", item.id);
    };

    const onDrop = (event, list) => {
      const itemID = event.dataTransfer.getData("itemID");
      const item = items.value.find((item) => item.id == itemID);
      item.list = list;
    };

    return {getList, startDrag, onDrop};
  },
};
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
  overflow-x: hidden;
  overflow-y: auto;
  min-width: 250px;
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
  height: 25px;
  color: black;
  font-size: 16px;
  margin-left: 7px;
  font-weight: 700;
  word-wrap: break-word;
  margin-right: 8px;
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
