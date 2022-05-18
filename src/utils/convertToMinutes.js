function convertToMinutes (seconds){
    const minutes = seconds / 60;
    return String(minutes.toFixed(2)).replace('.', ':')
}

function convertToSeconds(minutes){
    
    const seconds = Number(minutes.replace(':', '.')) * 60;
    return Math.round(seconds)
}

export {convertToMinutes, convertToSeconds}