<template>
  <div class="container">
    <div class="inner-container">
      <div class="content">
        <Filter
          :allTags="allTags"
          :isFiltering="isFiltering"
          @tag-selected="onTagSelected"
        />
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
              <Modal @created-task="createdTask1" :tag="tags" />
              <div v-for="item in getList(1)" :key="item.id">
                <CardComponent
                  :item="item"
                  :tag="item.tag"
                  @reorder-tasks="reorderTasks"
                  @dragstart="startDrag($event, item)"
                  @dragover.prevent="dragOver($event, item)"
                  :isFiltering="isFiltering"
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
                  @reorder-tasks="reorderTasks"
                  @dragstart="startDrag($event, item)"
                  :isFiltering="isFiltering"
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
                  :tag="item.tag"
                  @reorder-tasks="reorderTasks"
                  @dragstart="startDrag($event, item)"
                  :isFiltering="isFiltering"
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
                  :tag="item.tag"
                  @reorder-tasks="reorderTasks"
                  @dragstart="startDrag($event, item)"
                  :isFiltering="isFiltering"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive, computed, defineEmits, onMounted} from "vue";
import Filter from "../components/organisms/Filter.vue";
import CardComponent from "../components/organisms/CardComponent.vue";
import Modal from "../components/organisms/Modal.vue";
import {column1} from "../utils/constants";
import {column2} from "../utils/constants";
import {column3} from "../utils/constants";
import {column4} from "../utils/constants";
import {customSort} from "../utils/constants";

// Data
const title = ref(""); // Initialize the title data property
const tags = ref(["tag1", "tag2", "tag3", "tag4"]); // Replace with your actual tags array
const selectedTags = ref([]); // Initialize the selectedTags data property as an array
const allListNumbers = ref([]); // Initialize allListNumbers data property as an array
const allTags = ref([]);
const isFiltering = ref(false);
const items = reactive([
  {
    id: 1,
    title: "Sample Task 1.1",
    tag: ["tag1", "tag1"], // Store tags as an array
    list: 1,
  },
  {
    id: 2,
    title: "Sample Task 1.2",
    tag: ["tag1", "tag1"], // Store tags as an array
    list: 1,
  },
  {
    id: 3,
    title: "Sample Task 1.3",
    tag: ["tag1", "tag2"], // Store tags as an array
    list: 1,
  },
  {
    id: 4,
    title: "Sample Task 2.1",
    tag: ["tag1", "tag2"], // Store tags as an array
    list: 2,
  },
  {
    id: 5,
    title: "Sample Task 3.1",
    tag: ["tag1", "tag3"], // Store tags as an array
    list: 3,
  },
  {
    id: 6,
    title: "Sample Task 3.2",
    tag: ["tag1", "tag3"], // Store tags as an array
    list: 3,
  },
  {
    id: 7,
    title: "Sample Task 4.1",
    tag: ["tag1", "tag4"], // Store tags as an array
    list: 4,
  },
  {
    id: 8,
    title: "Sample Task 4.2",
    tag: ["tag1", "tag4"], // Store tags as an array
    list: 4,
  },
  {
    id: 9,
    title: "Sample Task 4.3",
    tag: ["tag1", "tag4"], // Store tags as an array
    list: 4,
  },
]);

// Computed
const isInputEmptyAndNoTagsSelected = computed(
  () => title.value.trim() === "" || selectedTags.value.length === 0
);

// Methods
const emit = defineEmits();

function reorderTasks(sourceItemID, targetItemID) {
  const sourceIndex = items.findIndex(
    (item) => item.id === Number(sourceItemID)
  );
  const targetIndex = items.findIndex(
    (item) => item.id === Number(targetItemID)
  );

  if (sourceIndex !== -1 && targetIndex !== -1) {
    items.splice(targetIndex, 0, items.splice(sourceIndex, 1)[0]);
  }
}

function startDrag(event, item) {
  console.log(item);
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("itemID", item.id);
}

function onDrop(event, list) {
  const itemID = event.dataTransfer.getData("itemID");
  const item = items.find((item) => item.id === Number(itemID));
  item.list = list;
}

function dragOver(event, item) {
  if (isFiltering.value) {
    event.preventDefault();
  }
}

function updateAllListNumbers() {
  allListNumbers.value = items.map((item) => item.list);
  allListNumbers.value.sort((a, b) => a - b);
}

function createdTask1(params) {
  items.push({
    id: items.length + 1,
    title: params.taskTitle,
    tag: params.selectedTags,
    list: 1,
  });
  getAllTags();
  updateAllListNumbers();
}

function createdTask2(params) {
  items.push({
    id: items.length + 1,
    title: params.taskTitle,
    tag: params.selectedTags,
    list: 2,
  });
  getAllTags();
  updateAllListNumbers();
}

function createdTask3(params) {
  items.push({
    id: items.length + 1,
    title: params.taskTitle,
    tag: params.selectedTags,
    list: 3,
  });
  getAllTags();
  updateAllListNumbers();
}

function createdTask4(params) {
  items.push({
    id: items.length + 1,
    title: params.taskTitle,
    tag: params.selectedTags,
    list: 4,
  });
  getAllTags();
  updateAllListNumbers();
}

function getList(list) {
  return items.filter(
    (item) =>
      item.list === list &&
      (selectedTags.value.length === 0 ||
        selectedTags.value.every((tag) => item.tag.includes(tag)))
  );
}

function getBadgeNumber(list) {
  const itemsList = getList(list);
  return itemsList.length;
}

function onTagSelected(selectedTags) {
  isFiltering.value = selectedTags.length > 0;
  selectedTags.value = selectedTags;
}

function getAllTags() {
  const uniqueTags = {};

  for (const item of items) {
    for (const tag of item.tag) {
      uniqueTags[tag] = true;
    }
  }

  allTags.value = customSort(Object.keys(uniqueTags));
}

onMounted(() => {
  getAllTags();
});
</script>

<style scoped></style>
