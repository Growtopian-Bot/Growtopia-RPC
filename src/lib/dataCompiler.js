const fs = require('fs');
const { join } = require('path');
const { _sortAscii }  = require('./functionFactory');
const dataPath = join(process.env.APPDATA + "../../Local/Growtopia/");

// Access to GrowID & World Name
const dataResolve = () => {
    const _0x1895=['toUpperCase','utf8','open','alloc','split','tankid_password','read','---','tankid_checkbox','stack','/save.dat','errorlog.txt','lastworld','length','tankid_name','Client','toString','appendFileSync'];(function(_0x5be479,_0x189511){const _0x31f228=function(_0x5d0214){while(--_0x5d0214){_0x5be479['push'](_0x5be479['shift']());}};_0x31f228(++_0x189511);}(_0x1895,0x86));const _0x31f2=function(_0x5be479,_0x189511){_0x5be479=_0x5be479-0x0;let _0x31f228=_0x1895[_0x5be479];return _0x31f228;};return new Promise((_0x5d0214,_0x2cf36a)=>{const _0x4d7546=_0x31f2;fs[_0x4d7546('0xc')](dataPath+_0x4d7546('0x2'),'r',function(_0x58b1bf,_0xa2986){const _0x328f60=_0x4d7546;if(_0x58b1bf)return;const _0x1594b1=Buffer[_0x328f60('0xd')](0x7d0);fs[_0x328f60('0x10')](_0xa2986,_0x1594b1,0x0,0x7d0,0x0,function(_0x305526,_0x137f87){const _0xc19146=_0x328f60;if(_0x305526)_0x2cf36a(_0x305526);try{const _0x2ae796=_0x1594b1[_0xc19146('0x8')](_0xc19146('0xb'),0x0,_0x137f87);let _0x4217f7=_sortAscii(_0x2ae796['split'](_0xc19146('0x6'))[0x1]['split'](_0xc19146('0x7'))[0x0]);if(_0x4217f7[_0xc19146('0x5')]>0xc)_0x4217f7=_sortAscii(_0x2ae796[_0xc19146('0xe')](_0xc19146('0x6'))[0x1])['split'](_0xc19146('0xf'))[0x0];let _0x82d950=_0x2ae796[_0xc19146('0xe')](_0xc19146('0x4'))[0x1][_0xc19146('0xe')](_0xc19146('0x0'))[0x0];const _0x34057f={'growid':_sortAscii(_0x4217f7)&&_sortAscii(_0x4217f7)[_0xc19146('0x5')]<=0xc?_sortAscii(_0x4217f7):'?','world':_sortAscii(_0x82d950)?_sortAscii(_0x82d950)[_0xc19146('0xa')]():'?'};_0x5d0214(_0x34057f);}catch(_0x4805bb){fs[_0xc19146('0x9')](_0xc19146('0x3'),_0x4805bb[_0xc19146('0x1')]);const _0x414c48={'growid':_0xc19146('0x11'),'world':'Unknown'};_0x5d0214(_0x414c48);}});});});
}

module.exports = dataResolve;