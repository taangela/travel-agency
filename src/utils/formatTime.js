export const formatTime = (a) => {
  if (a === undefined || typeof a === 'string' || typeof a === 'function' || a < 0) {
    return null;
  }else{
    const seconds = Math.floor(a % 60).toString();
    const minutes = Math.floor((a / 60) % 60).toString();
    const hours = Math.floor(a / 3600).toString();
        
    return hours.padStart(2, '0') + ':' + minutes.padStart(2,'0') + ':' + seconds.padStart(2, '0');
  } 
};  

export default formatTime;