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
    const userMessage = this.createChatBotMessage("수강신청", {
      delay: 500,
      withAvatar: false,
    });

    const followUpMessage = this.createChatBotMessage(
      "2025 1학기 수강신청 일정입니다.",
      {
        widget: "courseDetailOptions",
        delay: 1000,
      }
    );

    this.updateChatbotState(userMessage);
    this.updateChatbotState(followUpMessage);
  };

  handleCourseSchedule = (messageText) => {
    const message = this.createChatBotMessage(messageText);
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


