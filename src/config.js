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
            handler: (actionProvider) => actionProvider.handleClassTips(),
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "courseDetailOptions",
      widgetFunc: (props) => <Options {...props} />,
      props: {
        options: [
          {
            text: "2학년",
            handler: (actionProvider) =>
              actionProvider.handleCourseSchedule("2/18(화) 10:00~16:00"),
            id: 1,
          },
          {
            text: "3학년",
            handler: (actionProvider) =>
              actionProvider.handleCourseSchedule("2/19(수) 10:00~16:00"),
            id: 2,
          },
          {
            text: "4학년",
            handler: (actionProvider) =>
              actionProvider.handleCourseSchedule("2/20(목) 10:00~16:00"),
            id: 3,
          },
          {
            text: "타 학과/복수·다전공",
            handler: (actionProvider) =>
              actionProvider.handleCourseSchedule("2/20(목) 10:00~16:00"),
            id: 4,
          },
          {
            text: "신입생/복학생",
            handler: (actionProvider) =>
              actionProvider.handleCourseSchedule("2/21(금) 10:00~16:00"), // 옆에 우니가 떠다니면서 팁 : 당일 오전 12시에 미리 접속해서 세팅해두세요! 뜨게 하기
            id: 5,
          },
          {
            text: "편입학생",
            handler: (actionProvider) =>
              actionProvider.handleCourseSchedule("2/21(금) 10:00~16:00"),
            id: 6,
          },
          {
            text: "수강정정",
            handler: (actionProvider) =>
              actionProvider.handleCourseSchedule("3/11(화)~3/13(목) 10:00~16:00"),
            id: 7,
          },
          {
            text: "수강포기",
            handler: (actionProvider) =>
              actionProvider.handleCourseSchedule("3/19(수)~3/21(금) 09:00~17:00"),
            id: 8,
          },
        ],
      },
    },
  ],
};

export default config;





