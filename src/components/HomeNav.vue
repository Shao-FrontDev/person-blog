<template>
  <div class="homeNav">
    <div class="figureBox" @click="openSupportModal">
      <div class="square">
        <Support class="support-icon" />
      </div>
      <figcaption>点赞</figcaption>
    </div>
    <div class="figureBox" @click="openBriefModal">
      <div class="square">
        <Bulb />
      </div>
      <figcaption>说明</figcaption>
    </div>
    <div class="figureBox" @click="openMessageModal">
      <div class="square">
        <Message class="message-icon" />
      </div>
      <figcaption>留言</figcaption>
    </div>
    <div class="figureBox" @click="openSettingModal">
      <div class="square">
        <Setting />
      </div>
      <figcaption>设置</figcaption>
    </div>
    <Modal
      height="300"
      width="250"
      :backgroundColor="SupportModalBGCOLOR"
      :visiability="SupportModalStatus"
      @close="closeSupportModal"
    >
      <template v-slot:title>
        <div>点赞</div>
      </template>
      <p>Hello world</p>
    </Modal>
    <Modal
      height="250"
      width="250"
      :backgroundColor="SettingModalBGCOLOR"
      :visiability="SettingModalStatus"
      @close="closeSettingModal"
    >
      <template v-slot:title>
        <div>设置</div>
      </template>
      <BgColorPicker />
    </Modal>
    <Modal
      height="580"
      width="540"
      :backgroundColor="MessageModalBGCOLOR"
      :visiability="MessageModalStatus"
      @close="closeMessageModal"
      class="messageModal"
    >
      <template v-slot:title>
        <div>留言</div>
      </template>
      <MessageList />
      <template v-slot:messageInput>
        <MessageInput class="messageInput" />
      </template>
    </Modal>
    <Modal
      height="300"
      width="250"
      :backgroundColor="SupportModalBGCOLOR"
      :visiability="BriefModalStatus"
      @close="closeBriefModal"
    >
      <template v-slot:title>
        <div>说明</div>
      </template>
    </Modal>
  </div>
</template>

<script>
import MessageInput from "./MessageInput.vue";
import Modal from "./Modal.vue";
import BgColorPicker from "./BgColorPicker.vue";
import MessageList from "./MessageList";

import Support from "../assets/Icons/support.svg";
import Bulb from "../assets/Icons/dengpao.svg";
import Message from "../assets/Icons/liuyan.svg";
import Setting from "../assets/Icons/setting.svg";
export default {
  components: {
    Support,
    Bulb,
    Message,
    Setting,
    Modal,
    BgColorPicker,
    MessageList,
    MessageInput,
  },

  data() {
    return {
      SupportModalStatus: false,
      SettingModalStatus: false,
      MessageModalStatus: false,
      BriefModalStatus: false,
    };
  },

  computed: {
    SupportModalBGCOLOR() {
      return "#3EB595";
    },
    SettingModalBGCOLOR() {
      return "#fad41b";
    },
    MessageModalBGCOLOR() {
      return "#2fd2db";
    },
  },

  methods: {
    openSupportModal() {
      /*     SettingModalStatus: false,
      MessageModalStatus: false,
      BriefModalStatus: false, */
      this.SupportModalStatus = true;
      this.SettingModalStatus = false;
      this.MessageModalStatus = false;
      this.BriefModalStatus = false;
    },
    closeSupportModal() {
      this.SupportModalStatus = false;
    },
    openSettingModal() {
      this.SupportModalStatus = false;
      this.SettingModalStatus = true;
      this.MessageModalStatus = false;
      this.BriefModalStatus = false;
    },
    closeSettingModal() {
      this.SettingModalStatus = false;
    },
    openMessageModal() {
      this.SupportModalStatus = false;
      this.SettingModalStatus = true;
      this.MessageModalStatus = true;
      this.BriefModalStatus = false;
    },
    closeMessageModal() {
      this.MessageModalStatus = false;
    },
    openBriefModal() {
      this.SupportModalStatus = false;
      this.SettingModalStatus = false;
      this.MessageModalStatus = false;
      this.BriefModalStatus = true;
    },
    closeBriefModal() {
      this.BriefModalStatus = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.homeNav {
  position: absolute;
  right: 0;
  top: 0;
}

.figureBox {
  margin: 30px 0;
  cursor: pointer;
}

.figureBox:hover {
  animation: figure-animate 0.5s ease;
}

.square {
  width: 50px;
  height: 50px;
}

figcaption {
  color: #f2f2f2;
}

@keyframes figure-animate {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-6px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-4px);
  }
  100% {
    transform: translateY(0);
  }
}

.icon {
  width: 35px;
  height: 35px;
}
</style>
