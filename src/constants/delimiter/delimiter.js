import deepFreeze from '../../utils/deepFreeze.js';

const DELIMITER = deepFreeze({
  comma: ',',
  dash: '-',
  space: ' ',
  open: '[',
  close: ']',
});

export default DELIMITER;
