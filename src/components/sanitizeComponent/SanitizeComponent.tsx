import DOMPurify from 'dompurify';

type SanitizedContentProps = {
  content: string;
};

const SanitizedContent = ({ content }: SanitizedContentProps) => {
  const treatedContent = DOMPurify.sanitize(content);
  const createMarkup = (htmlString: string) => ({ __html: htmlString });

  return <p dangerouslySetInnerHTML={createMarkup(treatedContent)} />;
};

export default SanitizedContent;
