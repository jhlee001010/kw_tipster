import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./Options"; // Options 컴포넌트 가져오기

const config = {
  botName: "대학생활 도우미",
  initialMessages: [
    createChatBotMessage("안녕하세요! 대학 생활에 대해 어떤 도움이 필요하신가요?", {
      widget: "options", // 초기 메시지에 위젯 연결
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
      props: {
        options: [
          { text: "수업 팁", handler: (actionProvider) => actionProvider.handleClassTips(), id: 1 },
          { text: "동아리 팁", handler: (actionProvider) => actionProvider.handleClubTips(), id: 2 },
          { text: "시간관리 팁", handler: (actionProvider) => actionProvider.handleTimeManagementTips(), id: 3 },
        ],
      },
    },
  ],
};

export default config;
