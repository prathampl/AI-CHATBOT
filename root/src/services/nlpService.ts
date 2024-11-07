export const classifyIntent = async (message: string): Promise<string> => {
    if (message.toLowerCase().includes('hello')) {
      return 'greeting';
    } else if (message.toLowerCase().includes('bye')) {
      return 'farewell';
    } else {
      return 'unknown';
    }
  };
  
  export const extractEntities = (message: string): Record<string, string> => {
    const entities: Record<string, string> = {};
    if (message.toLowerCase().includes('price')) {
      entities['topic'] = 'pricing';
    }
    return entities;
  };
  