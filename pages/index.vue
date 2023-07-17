<template>
  <div class="container">
    <div class="inner-container">
      <div class="content">
        <Dropdown />
        <div class="task-list">
          <div class="todo">
            <AssignmentTitle1 />
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
            </div>
          </div>
          <div class="todo">
            <AssignmentTitle2 />

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
            </div>
          </div>
          <div class="todo">
            <AssignmentTitle3 />

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
            <AssignmentTitle4 />

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
import AssignmentTitle1 from "../components/AssignmentTitle1.vue";
import AssignmentTitle2 from "../components/AssignmentTitle2.vue";
import AssignmentTitle3 from "../components/AssignmentTitle3.vue";
import AssignmentTitle4 from "../components/AssignmentTitle4.vue";
export default {
  data() {
    return {
      items: [
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
          id: 3,
          title: "タスクの追加機能 1.3",
          list: 1,
        },
        {
          id: 4,
          title: "タスクの追加機能 1.4",
          list: 1,
        },
        {
          id: 5,
          title: "タスクの追加機能 1.5",
          list: 1,
        },
        {
          id: 6,
          title: "タスクの追加機能 1.6",
          list: 1,
        },
        {
          id: 7,
          title: "タスクの追加機能 1.7",
          list: 1,
        },
        {
          id: 8,
          title: "タスクの追加機能 1.8",
          list: 1,
        },
        {
          id: 9,
          title: "タスクの追加機能 1.9",
          list: 1,
        },
        {
          id: 10,
          title: "タスクの追加機能 1.10",
          list: 1,
        },
        {
          id: 11,
          title: "タスクの追加機能 2.1",
          list: 2,
        },
        {
          id: 12,
          title: "タスクの追加機能 3.1",
          list: 3,
        },
        {
          id: 13,
          title: "タスクの追加機能 3.2",
          list: 3,
        },
        {
          id: 14,
          title: "タスクの追加機能 4.1",
          list: 4,
        },
        {
          id: 15,
          title: "タスクの追加機能 4.2",
          list: 4,
        },
        {
          id: 16,
          title: "タスクの追加機能 4.3",
          list: 4,
        },
      ],
    };
  },
  methods: {
    getList(list) {
      return this.items.filter((item) => item.list === list);
    },
    startDrag(event, item) {
      console.log(item);
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("itemID", item.id);
    },
    onDrop(event, list) {
      const itemID = event.dataTransfer.getData("itemID");
      const item = this.items.find((item) => item.id === Number(itemID));
      item.list = list;
    },
  },
};
</script>

<style scoped>
.task-list {
  display: flex;
  align-items: center;
  width: 100%;
}
/* .todo {
  margin-right: 40px;
} */
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
</style>
