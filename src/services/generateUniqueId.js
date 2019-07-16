// @flow
import uuid from 'uuid';

const firstEightCharacters = 8;
const generateUniqueId = () : string => uuid.v1().substring(0, firstEightCharacters);

export default generateUniqueId;
