import { FC } from 'react';
import DOMPurify from 'dompurify';
import st from './SanitizeComponent.module.scss';

type SanitizedContentProps = {
  content: string;
};

const SanitizedContent: FC<SanitizedContentProps> = ({ content }) => {
  const treatedContent = DOMPurify.sanitize(content);
  const createMarkup = (htmlString: string) => ({ __html: htmlString });

  return <p className={st.content} dangerouslySetInnerHTML={createMarkup(treatedContent)} />;
};

export default SanitizedContent;
