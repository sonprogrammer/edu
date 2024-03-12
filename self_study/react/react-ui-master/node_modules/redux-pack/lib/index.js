var _constants=require('./constants');
var _middleware=require('./middleware');var _middleware2=_interopRequireDefault(_middleware);
var _handle=require('./handle');var _handle2=_interopRequireDefault(_handle);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

module.exports={
middleware:_middleware2.default,
handle:_handle2.default,
KEY:_constants.KEY,
LIFECYCLE:_constants.LIFECYCLE};