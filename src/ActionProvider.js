class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleClassTips = () => {
    const message = this.createChatBotMessage(
      "수업 팁: 1. 수업 전 예습하기 2. 질문 적극적으로 하기 3. 노트 정리 습관 들이기"
    );
    this.updateChatbotState(message);
  };

  handleCourseRegistrationAction = () => {
    const userMessage = this.createChatBotMessage("수강신청");
    const followUpMessage = this.createChatBotMessage(
      "아래에서 선택해주세요:",
      {
        widget: "courseRegistrationOptions", // 세부 선택지 위젯 연결
      }
    );

    this.updateChatbotState(userMessage);
    this.updateChatbotState(followUpMessage);
  };

  handleCourseSchedule = () => {
    const message = this.createChatBotMessage("수강신청 일정 정보입니다.");
    this.updateChatbotState(message);
  };

  handleCourseMethods = () => {
    const message = this.createChatBotMessage("수강신청 방법 안내입니다.");
    this.updateChatbotState(message);
  };

  handleCourseTips = () => {
    const message = this.createChatBotMessage("수강신청 팁입니다: 1. 빠르게 2. 우선순위 설정 3. 시간표 미리 준비.");
    this.updateChatbotState(message);
  };

  updateChatbotState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
