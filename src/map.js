var MP_CEN = {
    lng: 120.219375416,
    lat: 30.2592444615
};

let startZoomIndex = 5;

var HZ_GTC = { lng: 120.219375416, lat: 30.2592444615 };
var CX_GTC = { lng: 121.305658, lat: 30.195986 };
var zoomIndex = startZoomIndex;
var nowPositionFn = drawHz;

function initMap() {
    window.map = new BMap.Map("container");
    // 创建地图实例  
    window.point = new BMap.Point(HZ_GTC.lng, HZ_GTC.lat);
    // 创建点坐标  
    map.centerAndZoom(point, zoomIndex);
    map.disableDragging();
    map.disableDoubleClickZoom();

    map.setMapType(BMAP_NORMAL_MAP);

    // // MUSIC.play();
    panZoom_GTC();
}

function panZoom_GTC() {
    // map.panTo(new BMap.Point(HZ_GTC.lng, HZ_GTC.lat));
    setTimeout(function() {
        map.setZoom(zoomIndex);
        if (zoomIndex > 10) {
            // stop
            setTimeout(nowPositionFn, 1000);
            zoomIndex = startZoomIndex;
            // marker.setAnimation(BMAP_ANIMATION_BOUNCE);
            // setTimeout(panZoom_JYU, 1000);
        } else {
            zoomIndex++;
            setTimeout(panZoom_GTC, 1000);
        }
    }, 800);
}

function drawHz() {
    var myIcon = new BMap.Icon("http://img.souche.com/f2e/2954c5a5f6fd9f2cb61d23e41fa46f45.jpg", new BMap.Size(64, 64), {
        anchor: new BMap.Size(10, 0),
    });
    // 创建标注对象并添加到地图   
    var marker = new BMap.Marker(point, { icon: myIcon });
    map.addOverlay(marker);

    var opts = {
        width: 100, // 信息窗口宽度    
        height: 50, // 信息窗口高度    
        title: "我是薇薇" // 信息窗口标题   
    }
    var infoWindow = new BMap.InfoWindow("", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, map.getCenter());
    setTimeout(function() {
        map.clearOverlays();
        map.reset();
        map.panTo(new BMap.Point(CX_GTC.lng, CX_GTC.lat));
        panZoom_GTC();
        nowPositionFn = drawCX;
    }, 2500);
}

function drawCX() {
    var myIcon = new BMap.Icon("http://img.souche.com/f2e/e0e367e32dd824dc71656c45d7a1b8f4.jpeg", new BMap.Size(64, 64), {
        anchor: new BMap.Size(10, 0),
    });
    // 创建标注对象并添加到地图   
    var marker = new BMap.Marker(new BMap.Point(CX_GTC.lng, CX_GTC.lat), { icon: myIcon });
    map.addOverlay(marker);

    var opts = {
        width: 100, // 信息窗口宽度    
        height: 50, // 信息窗口高度    
        title: "我是丝丝" // 信息窗口标题   
    };
    var infoWindow = new BMap.InfoWindow("", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, map.getCenter());
    setTimeout(function() {
        map.clearOverlays();
        fl.moveSectionDown();
    }, 2500);
}