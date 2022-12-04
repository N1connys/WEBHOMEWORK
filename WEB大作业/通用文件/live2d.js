 
 L2Dwidget.init({
        // 引用的模型
        "model": {
            jsonPath: "https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json",
            "scale": 1
        },
        // 模型的样式，可以自行更改
        "display": {
            "position": "right",
            "width": 100,
            "height": 150,
            "hOffset": 10,
            "vOffset": -10
        },
        "mobile": {
            "show": true,
            "scale": 0.5
        },
        "react": {
            "opacityDefault": 1,
            "opacityOnHover": 0.6
        }
    });