import { FacebookProvider, CustomChat } from "react-facebook";

const ChatBot = () => {
  return (
    <div>
      <FacebookProvider appId="343983168091005" chatSupport>
        <CustomChat pageId="134574553077769" minimized={false} />
      </FacebookProvider>
    </div>
  );
};

export default ChatBot;
