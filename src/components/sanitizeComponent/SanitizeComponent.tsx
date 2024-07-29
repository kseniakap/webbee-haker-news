import { FC } from 'react';
import DOMPurify from 'dompurify';

type SanitizedContentProps = {
  content: string;
};

const SanitizedContent: FC<SanitizedContentProps> = ({ content }) => {
  const treatedContent = DOMPurify.sanitize(content);
  const createMarkup = (htmlString: string) => ({ __html: htmlString });

  return <p dangerouslySetInnerHTML={createMarkup(treatedContent)} />;
};

export default SanitizedContent;
