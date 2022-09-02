import {toast} from 'react-toastify';

  //create a toash
  export const createToast = (msg) => {
    return toast.error(msg);
}
