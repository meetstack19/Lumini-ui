import { useEffect, useState } from 'react';

const ExecutiveSummary = () => {
  const [summaryData, setSummaryData] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/ai/ping?stream=true`
        );

        console.log('API DATA --- ', response);

        const reader = response.body?.getReader();
        const decoder = new TextDecoder();
        let result = ''; // Initialize as empty string

        if (reader) {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            result += decoder.decode(value, { stream: true });
          }
          setSummaryData(result);
        }
      } catch (error) {
        console.error('Error loading summary:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  if (isLoading) {
    return <div>Loading Executive Summary...</div>;
  }

  return (
    <div
      className="container--summary max-h-[200px]"
      dangerouslySetInnerHTML={{ __html: summaryData }}
    />
  );
};

export default ExecutiveSummary;
