import titleize from 'titleize';

const rentalType = (isShared) => isShared ? 'shared' : 'entire';

const toUpperCase = value => value ? titleize(value) : '';