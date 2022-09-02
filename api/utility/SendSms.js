import axios from 'axios';


// Send Sms
export const sendSms = async (number, message ) => {

    try {
        await axios.get(`https://bulksmsbd.net/api/smsapi?api_key=67ZGC1UitFLLkYBOerur&type=text&number=${number}&senderid=03590002777&message={message}`);
        
    } catch (error) {
        console.log(error);
        
    }

} 