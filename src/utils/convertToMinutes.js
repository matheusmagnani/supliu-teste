function convertToMinutes (seconds){
    const minutes = seconds / 60;
    return String(minutes).replace('.', ':')
}
export {convertToMinutes}