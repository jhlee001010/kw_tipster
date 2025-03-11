class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // 시간표 버튼에 대한 처리
  handleTimetableAction = () => {
    const message = this.createChatBotMessage("전공과 교양 중 하나를 선택해주세요.", {
      widget: "timetableOptions",
    });
    this.updateChatbotState(message);
  };

  // 전공 버튼 클릭 시 단과대 옵션으로 이동
  handleMajorSelection = () => {
    const message = this.createChatBotMessage("단과대를 선택해주세요.", {
      widget: "collegeOptions",
    });
    this.updateChatbotState(message);
  };

  // 단과대 선택 처리
  handleCollegeSelected = (collegeName) => {
    const departmentMessage = this.createChatBotMessage(`${collegeName} 학과를 선택해주세요.`, {
      widget: `departments_${collegeName}`,
    });
    this.updateChatbotState(departmentMessage);
  };

  // 학과 선택 처리
  handleDepartmentSelected = (departmentName) => {
    const message = this.createChatBotMessage(`${departmentName} 정보를 제공합니다.`);
    this.updateChatbotState(message);
  };

  // 수강신청 처리
  handleCourseRegistrationAction = () => {
    const followUpMessage = this.createChatBotMessage(
      "2025 1학기 수강신청 일정입니다. 아래에서 선택해주세요:",
      {
        widget: "courseDetailOptions",
      }
    );

    this.updateChatbotState(followUpMessage);
  };

  // 수강신청 일정 처리
  handleCourseSchedule = (schedule) => {
    const message = this.createChatBotMessage(schedule);
    this.updateChatbotState(message);
  };

  // FAQ 버튼 처리
  handleCourseTips = () => {
    const optionsMessage = this.createChatBotMessage("", {
      widget: "faqOptions",
    });
    this.updateChatbotState(optionsMessage);
  };

  // FAQ 세부 질문 처리
  handleFaqResponse = (response) => {
    const message = this.createChatBotMessage(response);
    this.updateChatbotState(message);
  };

  // 상태 업데이트
  updateChatbotState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
