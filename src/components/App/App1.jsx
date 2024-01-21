import { Reader } from "../Reader";
import articles from "/src/articles.json";

export const App1 = () => {
  return (
    <div>
      <Reader items={articles} />
    </div>
  );
};
