import moment from 'moment';

export const formatDate = (timestamp) => moment(timestamp).format('D/MM/YYYY HH:mm');