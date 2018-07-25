/**
 * @author Rexhang(GuHang)
 * @date 2018/7/25 下午6:08
 * @Description: 请求微信配置接口
*/

import {GetUrlParams} from './util';

const wxConfig = function (
    _shareTitle = '警报！1000本精品绘本空投朋友圈',
    _shareDesc = '豪气的我们，这次买了家绘本馆给你们送书',
    _shareLink = window.location.href,
    _shareImgUrl = ''
    ) {

    const shareTitle = _shareTitle;

    const shareDesc = _shareDesc;

    const shareLink = _shareLink;

    const shareImgUrl = _shareImgUrl;

    window.Zepto.getJSON('/share?url='+encodeURIComponent(window.location.href), function(response){
        const data = response.data.sign;
        window.wx.error(function(res){
            console.log(res.errMsg);
        });
        window.wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: data.appId, // 必填，公众号的唯一标识
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature,// 必填，签名，见附录1
            jsApiList: data.config_list
        });
        window.wx.ready(function () {
            // 分享参数配置
            let shareConfig = {
                title: shareTitle, // 分享标题
                desc: shareDesc, // 分享描述
                link: shareLink, // 分享链接
                imgUrl: shareImgUrl,
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function (res) {
                },
                cancel: function (res) {
                }
            };
            // 分享到朋友圈
            window.wx.onMenuShareTimeline(shareConfig);
            // 分享给朋友
            window.wx.onMenuShareAppMessage(shareConfig);
            // 分享到QQ
            window.wx.onMenuShareQQ(shareConfig);
            // 分享到QQ空间
            window.wx.onMenuShareQZone(shareConfig);
            window.wx.hideMenuItems({
                menuList: [
                    "menuItem:favorite",
                    "menuItem:originPage"
                ]
            });
        });
    });
};


export default wxConfig;