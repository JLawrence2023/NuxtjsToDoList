<template>
  <div class="container">
    <div class="inner-container">
      <div class="content">
        <!-- <Dropdown /> -->
        <Filter />
        <div class="task-list">
          <div class="todo">
            <div class="assignment-title">
              <div class="ellipse pink"></div>
              <div class="text-title">未対応</div>
              <div class="badge-number">{{ getBadgeNumber(column1) }}</div>
            </div>
            <div
              class="rectangle"
              @drop="onDrop($event, 1)"
              @dragenter.prevent
              @dragover.prevent
            >
              <Modal @created-task="createdTask" :tag="tags" />
              <div v-for="item in getList(1)" :key="item.id">
                <CardComponent
                  :item="item"
                  :tag="item.tag"
                  draggable="true"
                  @dragstart="startDrag($event, item)"
                />
              </div>
            </div>
          </div>

          <div class="todo">
            <div class="assignment-title">
              <div class="ellipse blue"></div>
              <div class="text-title">処理中</div>
              <div class="badge-number">{{ getBadgeNumber(column2) }}</div>
            </div>
            <div
              class="rectangle"
              @drop="onDrop($event, 2)"
              @dragenter.prevent
              @dragover.prevent
            >
              <Modal @created-task="createdTask2" :tag="tags" />
              <div v-for="item in getList(2)" :key="item.id">
                <CardComponent
                  :item="item"
                  :tag="item.tag"
                  draggable="true"
                  @dragstart="startDrag($event, item)"
                />
              </div>
            </div>
          </div>
          <div class="todo">
            <div class="assignment-title">
              <div class="ellipse green"></div>
              <div class="text-title">レビュー中</div>
              <div class="badge-number">{{ getBadgeNumber(column3) }}</div>
            </div>

            <div
              class="rectangle"
              @drop="onDrop($event, 3)"
              @dragenter.prevent
              @dragover.prevent
            >
              <Modal @created-task="createdTask3" :tag="tags" />

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
              <div class="badge-number">{{ getBadgeNumber(column4) }}</div>
            </div>
            <div
              class="rectangle"
              @drop="onDrop($event, 4)"
              @dragenter.prevent
              @dragover.prevent
            >
              <Modal @created-task="createdTask4" :tag="tags" />

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
// import Dropdown from "../components/Dropdown.vue";
import Filter from "../components/Filter.vue";
import CardComponent from "../components/CardComponent.vue";
import Modal from "../components/Modal.vue";
import {column1} from "../utils/constants";
import {column2} from "../utils/constants";
import {column3} from "../utils/constants";
import {column4} from "../utils/constants";
export default {
  data() {
    return {
      title: "", // Initialize the title data property
      tags: ["tag1", "tag2", "tag3"], // Replace with your actual tags array
      selectedTags: [], // Initialize the selectedTags data property as an array
      items: [
        {
          id: 1,
          title: "Sample Task 1",
          tag: ["tag1", "tag3"], // Store tags as an array
          list: 1,
        },
      ],
    };
  },

  methods: {
    createdTask(params) {
      // Handle the emitted event from Modal.vue and add the task to items
      this.items.push({
        id: this.items.length + 1,
        title: params.taskTitle,
        tag: params.selectedTags, // Store selected tags as an array
        list: 1, // Replace with the appropriate list ID
      });
    },
    createdTask2(params) {
      // Handle the emitted event from Modal.vue and add the task to items
      this.items.push({
        id: this.items.length + 1,
        title: params.taskTitle,
        tag: params.selectedTags, // Store selected tags as an array
        list: 2, // Replace with the appropriate list ID
      });
    },
    createdTask3(params) {
      // Handle the emitted event from Modal.vue and add the task to items
      this.items.push({
        id: this.items.length + 1,
        title: params.taskTitle,
        tag: params.selectedTags, // Store selected tags as an array
        list: 3, // Replace with the appropriate list ID
      });
    },
    createdTask4(params) {
      // Handle the emitted event from Modal.vue and add the task to items
      this.items.push({
        id: this.items.length + 1,
        title: params.taskTitle,
        tag: params.selectedTags, // Store selected tags as an array
        list: 4, // Replace with the appropriate list ID
      });
    },

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
    submitModal() {
      // Push the new task into the items array
      this.items.push({
        id: this.items.length + 1,
        title: this.title,
        tag: this.selectedTags, // Store the selected tags
        list: 1, // Replace with the appropriate list ID
      });

      // Reset the input and selected tags after submission
      this.title = "";
      this.selectedTags = [];
    },
    getBadgeNumber(list) {
      const itemsList = this.getList(list);
      return itemsList.length;
    },
  },

  components: {
    Modal,
    CardComponent,
  },
};
</script>

<style scoped></style>
