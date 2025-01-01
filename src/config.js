import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./Options"; // Options 컴포넌트 가져오기

const config = {
  botName: "대학생활 도우미",
  initialMessages: [
    createChatBotMessage("안녕하세요! 대학 생활에 대해 어떤 도움이 필요하신가요?", {
      widget: "mainOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#8A1601", // 광운대 컬러
    },
    chatButton: {
      backgroundColor: "#8A1601",
    },
  },
  widgets: [
    {
      widgetName: "mainOptions",
      widgetFunc: (props) => <Options {...props} />,
      props: {
        options: [
          {
            text: "수강신청",
            handler: (actionProvider) => actionProvider.handleCourseRegistrationAction(),
            id: 1,
          },
          {
            text: "수업 팁",
            handler: (actionProvider) => actionProvider.handleClassTips(),
            id: 2,
          },
          {
            text: "FAQ",
            handler: (actionProvider) => actionProvider.handleCourseTips(),
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "courseRegistrationOptions",
      widgetFunc: (props) => <Options {...props} />,
      props: {
        options: [
          {
            text: "수강신청 일정",
            handler: (actionProvider) => actionProvider.handleCourseSchedule(),
            id: 1,
          },
          {
            text: "수강신청 방법",
            handler: (actionProvider) => actionProvider.handleCourseMethods(),
            id: 2,
          },
          {
            text: "수강신청 팁",
            handler: (actionProvider) => actionProvider.handleCourseTips(),
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;


