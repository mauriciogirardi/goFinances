const formatDate = (date: Date): string => {
  return new Date(date).toLocaleString('BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
};

export default formatDate;
