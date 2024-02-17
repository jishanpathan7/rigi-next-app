export const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    
    let formattedTime = '';
  
    if (hours > 0) {
      formattedTime += hours.toString().padStart(2, '0') + ':';
    }
  
    formattedTime += minutes.toString().padStart(2, '0') + ':';
    formattedTime += seconds.toString().padStart(2, '0');
  
    return formattedTime;
  };