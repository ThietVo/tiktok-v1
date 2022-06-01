

export const convertNum = (num) => {
    if(num){
        const lengthNum = num.toString().length;

        if(lengthNum > 4 && lengthNum < 7) {
            return (num / 1000).toFixed(1) + 'K';
        }else if(lengthNum >= 7 && lengthNum < 10) {
            return (num / 1000000).toFixed(1) + 'M';
        }
        else if(lengthNum >= 10 ) {
            return (num / 1000000000).toFixed(1) + 'B';
        }else {
            return num;
        }
    }
}


