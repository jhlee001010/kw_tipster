import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: "대학생활 도우미",
  initialMessages: [createChatBotMessage("안녕하세요! 대학 생활에 대해 어떤 도움이 필요하신가요?")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
};

export default config;
