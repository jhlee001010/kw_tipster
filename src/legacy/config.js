import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./Options";

const config = {
  botName: "대학생활 도우미",
  initialMessages: [
    createChatBotMessage("안녕하세요! 대학 생활에 대해 어떤 도움이 필요하신가요?", {
      widget: "mainOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#8A1601",
    },
    chatButton: {
      backgroundColor: "#8A1601",
    },
  },
  widgets: [
    // 메인 옵션
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
            text: "시간표",
            handler: (actionProvider) => actionProvider.handleTimetableAction(),
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

    // FAQ 옵션
    {
      widgetName: "faqOptions",
      widgetFunc: (props) => <Options {...props} />,
      props: {
        options: [
          {
            text: "수강신청 실패 시 추가로 기회가 있나요?",
            handler: (actionProvider) =>
              actionProvider.handleFaqResponse("수강신청 실패 시 추가로 기회가 제공됩니다. 추가 수강신청 기간을 확인하세요."),
            id: 1,
          },
          {
            text: "수강신청 후 강의를 변경하려면 어떻게 하나요?",
            handler: (actionProvider) =>
              actionProvider.handleFaqResponse("수강신청 후 강의를 변경하려면 수강정정 기간에 변경 가능합니다."),
            id: 2,
          },
          {
            text: "교양 과목은 몇 학점까지 신청할 수 있나요?",
            handler: (actionProvider) =>
              actionProvider.handleFaqResponse("교양 과목은 최대 학점 규정을 확인하여 신청할 수 있습니다."),
            id: 3,
          },
        ],
      },
    },

    // 수강신청 옵션
    {
      widgetName: "courseDetailOptions",
      widgetFunc: (props) => <Options {...props} />,
      props: {
        options: [
          { text: "2학년", handler: (actionProvider) => actionProvider.handleCourseSchedule("2/18(화) 10:00~16:00"), id: 1 },
          { text: "3학년", handler: (actionProvider) => actionProvider.handleCourseSchedule("2/19(수) 10:00~16:00"), id: 2 },
          { text: "4학년", handler: (actionProvider) => actionProvider.handleCourseSchedule("2/20(목) 10:00~16:00"), id: 3 },
          { text: "타 학과/복수·다전공", handler: (actionProvider) => actionProvider.handleCourseSchedule("2/20(목) 10:00~16:00"), id: 4 },
          { text: "신입생/복학생", handler: (actionProvider) => actionProvider.handleCourseSchedule("2/21(금) 10:00~16:00"), id: 5 },
          { text: "편입학생", handler: (actionProvider) => actionProvider.handleCourseSchedule("2/21(금) 10:00~16:00"), id: 6 },
          { text: "수강정정", handler: (actionProvider) => actionProvider.handleCourseSchedule("3/11(화)~3/13(목) 10:00~16:00"), id: 7 },
          { text: "수강포기", handler: (actionProvider) => actionProvider.handleCourseSchedule("3/19(수)~3/21(금) 09:00~17:00"), id: 8 },
        ],
      },
    },

    // 시간표 옵션
    {
      widgetName: "timetableOptions",
      widgetFunc: (props) => <Options {...props} />,
      props: {
        options: [
          { text: "전공", handler: (actionProvider) => actionProvider.handleMajorSelection(), id: 1 },
          { text: "교양", handler: (actionProvider) => actionProvider.handleTimetableAction(), id: 2 },
        ],
      },
    },

    // 단과대 옵션
    {
      widgetName: "collegeOptions",
      widgetFunc: (props) => <Options {...props} />,
      props: {
        options: [
          { text: "전자정보공과대학", handler: (actionProvider) => actionProvider.handleCollegeSelected("전자정보공과대학"), id: 1 },
          { text: "인공지능융합대학", handler: (actionProvider) => actionProvider.handleCollegeSelected("인공지능융합대학"), id: 2 },
          { text: "공과대학", handler: (actionProvider) => actionProvider.handleCollegeSelected("공과대학"), id: 3 },
          { text: "자연과학대학", handler: (actionProvider) => actionProvider.handleCollegeSelected("자연과학대학"), id: 4 },
          { text: "인문사회과학대학", handler: (actionProvider) => actionProvider.handleCollegeSelected("인문사회과학대학"), id: 5 },
          { text: "정책법학대학", handler: (actionProvider) => actionProvider.handleCollegeSelected("정책법학대학"), id: 6 },
          { text: "경영대학", handler: (actionProvider) => actionProvider.handleCollegeSelected("경영대학"), id: 7 },
          { text: "참빛인재대학", handler: (actionProvider) => actionProvider.handleCollegeSelected("참빛인재대학"), id: 8 },
        ],
      },
    },

    // 전자정보공과대학 학과
    {
      widgetName: "departments_전자정보공과대학",
      widgetFunc: (props) => <Options {...props} />,
      props: {
        options: [
          { text: "전자공학과", handler: (actionProvider) => actionProvider.handleDepartmentSelected("전자공학과"), id: 1 },
          { text: "전자통신공학과", handler: (actionProvider) => actionProvider.handleDepartmentSelected("전자통신공학과"), id: 2 },
          { text: "전자융합공학과", handler: (actionProvider) => actionProvider.handleDepartmentSelected("전자융합공학과"), id: 3 },
          { text: "전기공학과", handler: (actionProvider) => actionProvider.handleDepartmentSelected("전기공학과"), id: 4 },
          { text: "전자재료공학과", handler: (actionProvider) => actionProvider.handleDepartmentSelected("전자재료공학과"), id: 5 },
          { text: "반도체시스템공학부", handler: (actionProvider) => actionProvider.handleDepartmentSelected("반도체시스템공학부"), id: 6 },
        ],
      },
    },

    // 인공지능융합대학 학과
    {
      widgetName: "departments_인공지능융합대학",
      widgetFunc: (props) => <Options {...props} />,
      props: {
        options: [
          { text: "컴퓨터정보공학부", handler: (actionProvider) => actionProvider.handleDepartmentSelected("컴퓨터정보공학부"), id: 1 },
          { text: "소프트웨어학부", handler: (actionProvider) => actionProvider.handleDepartmentSelected("소프트웨어학부"), id: 2 },
          { text: "정보융합학부", handler: (actionProvider) => actionProvider.handleDepartmentSelected("정보융합학부"), id: 3 },
          { text: "로봇학부", handler: (actionProvider) => actionProvider.handleDepartmentSelected("로봇학부"), id: 4 },
          { text: "지능형로봇학과", handler: (actionProvider) => actionProvider.handleDepartmentSelected("지능형로봇학과"), id: 5 },
        ],
      },
    },

    // 공과대학 학과
    {
      widgetName: "departments_공과대학",
      widgetFunc: (props) => <Options {...props} />,
      props: {
        options: [
          { text: "건축공학과", handler: (actionProvider) => actionProvider.handleDepartmentSelected("건축공학과"), id: 1 },
          { text: "화학공학과", handler: (actionProvider) => actionProvider.handleDepartmentSelected("화학공학과"), id: 2 },
          { text: "환경공학과", handler: (actionProvider) => actionProvider.handleDepartmentSelected("환경공학과"), id: 3 },
          { text: "건축학과", handler: (actionProvider) => actionProvider.handleDepartmentSelected("건축학과"), id: 4 },
        ],
      },
    },

    {
      widgetName: "departments_자연과학대학",
      widgetFunc: (props) => <Options {...props} />,
      props: {
        options: [
          { text: "수학과", handler: (actionProvider) => actionProvider.handleDepartmentSelected("수학과"), id: 1 },
          { text: "전자바이오물리학과", handler: (actionProvider) => actionProvider.handleDepartmentSelected("전자바이오물리학과"), id: 2 },
          { text: "화학과", handler: (actionProvider) => actionProvider.handleDepartmentSelected("화학과"), id: 3 },
          { text: "스포츠융합과학과", handler: (actionProvider) => actionProvider.handleDepartmentSelected("스포츠융합과학과"), id: 4 },
          { text: "정보콘텐츠학과(야)", handler: (actionProvider) => actionProvider.handleDepartmentSelected("정보콘텐츠학과(야)"), id: 5 },
        ],
      },
    },
    {
      widgetName: "departments_인문사회과학대학",
      widgetFunc: (props) => <Options {...props} />,
      props: {
        options: [
          { text: "국어국문학과", handler: (actionProvider) => actionProvider.handleDepartmentSelected("국어국문학과"), id: 1 },
          { text: "영어산업학과", handler: (actionProvider) => actionProvider.handleDepartmentSelected("영어산업학과"), id: 2 },
          { text: "미디어커뮤니케이션학부", handler: (actionProvider) => actionProvider.handleDepartmentSelected("미디어커뮤니케이션학부"), id: 3 },
          { text: "산업심리학과", handler: (actionProvider) => actionProvider.handleDepartmentSelected("산업심리학과"), id: 4 },
          { text: "동북아문화산업학부", handler: (actionProvider) => actionProvider.handleDepartmentSelected("동북아문화산업학부"), id: 5 },
        ],
      },
    },
    {
      widgetName: "departments_정책법학대학",
      widgetFunc: (props) => <Options {...props} />,
      props: {
        options: [
          { text: "행정학과", handler: (actionProvider) => actionProvider.handleDepartmentSelected("행정학과"), id: 1 },
          { text: "법학부", handler: (actionProvider) => actionProvider.handleDepartmentSelected("법학부"), id: 2 },
          { text: "국제학부", handler: (actionProvider) => actionProvider.handleDepartmentSelected("국제학부"), id: 3 },
          { text: "자산관리학과", handler: (actionProvider) => actionProvider.handleDepartmentSelected("자산관리학과"), id: 4 },
        ],
      },
    },
    {
      widgetName: "departments_경영대학",
      widgetFunc: (props) => <Options {...props} />,
      props: {
        options: [
          { text: "경영학부", handler: (actionProvider) => actionProvider.handleDepartmentSelected("경영학부"), id: 1 },
          { text: "국제통상학부", handler: (actionProvider) => actionProvider.handleDepartmentSelected("국제통상학부"), id: 2 },
        ],
      },
    },
    {
      widgetName: "departments_참빛인재대학",
      widgetFunc: (props) => <Options {...props} />,
      props: {
        options: [
          { text: "금융부동산법무학과", handler: (actionProvider) => actionProvider.handleDepartmentSelected("금융부동산법무학과"), id: 1 },
          { text: "게임콘텐츠학과", handler: (actionProvider) => actionProvider.handleDepartmentSelected("게임콘텐츠학과"), id: 2 },
          { text: "스마트전기전자학과", handler: (actionProvider) => actionProvider.handleDepartmentSelected("스마트전기전자학과"), id: 3 },
          { text: "스포츠상담재활학과", handler: (actionProvider) => actionProvider.handleDepartmentSelected("스포츠상담재활학과"), id: 4 },
        ],
      },
    },    
  ],
};

export default config;
