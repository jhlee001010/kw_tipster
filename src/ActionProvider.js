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

  handleClubTips = () => {
    const message = this.createChatBotMessage(
      "동아리 팁: 1. 관심사에 맞는 동아리 찾기 2. 새로운 분야에 도전해보기 3. 선배들과 네트워킹하기"
    );
    this.updateChatbotState(message);
  };

  handleTimeManagementTips = () => {
    const message = this.createChatBotMessage(
      "시간관리 팁: 1. 우선순위 정하기 2. 플래너 사용하기 3. 집중력 향상을 위해 포모도로 기법 활용하기"
    );
    this.updateChatbotState(message);
  };

  handleOptions = () => {
    const message = this.createChatBotMessage(
      "아래에서 선택해주세요:",
      {
        widget: "options", // 옵션 버튼 위젯 연결
      }
    );
    this.updateChatbotState(message);
  };

  handleDefault = () => {
    const message = this.createChatBotMessage(
      "죄송합니다. 이해하지 못했어요. '수업', '동아리', '시간관리' 중 하나에 대해 물어보세요."
    );
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


  