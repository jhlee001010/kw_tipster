class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
      
      if (lowerCaseMessage.includes("수업")) {
        this.actionProvider.handleClassTips();
      } else if (lowerCaseMessage.includes("동아리")) {
        this.actionProvider.handleClubTips();
      } else if (lowerCaseMessage.includes("시간관리")) {
        this.actionProvider.handleTimeManagementTips();
      } else if (lowerCaseMessage.includes("옵션") || lowerCaseMessage.includes("선택")) {
        this.actionProvider.handleOptions();
      } else {
        this.actionProvider.handleDefault();
      }
    }
  }
  
  export default MessageParser;
  