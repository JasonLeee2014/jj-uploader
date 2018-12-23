//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
    name:'JjUploader',
    props:{
        url:String,
        timeout:{type:Number,default:0},
    },
    data: function data(){
        return {
            file:'',
            previewDataUrl:'',
            isShowPreviewer:false,
            isShowProgress:true,
            progress:0,
        }
    },
    methods:{
        fileDropedIn: function fileDropedIn(event){
            this.file = event.dataTransfer.files[0];

        },
        uploadFile: function uploadFile(){
            var self = this;
            var fileReader = new FileReader();
            fileReader.onload = function(event) {
                //on load exec after on error 
                self.isShowProgress = self.isShowPreviewer = self.file == ''? false:true;
                self.previewDataUrl = event.target.result;

            };
            fileReader.readAsDataURL(this.file);

            var formData = new FormData();
            formData.append(this.file.name,this.file);

            var xhr = new XMLHttpRequest();
            xhr.timeout = this.timeout;
            xhr.open('POST',this.url);
            xhr.upload.onprogress = function(event){
                if (event.lengthComputable) {
                    self.progress = event.loaded / event.total;
                    self.isShowProgress = self.progress = self.progress == 1 ? 0:self.progress;
                }
            };
            xhr.upload.onerror = function(event){
                // setTimeout(() => {
                //     self.deleteFile()
                //     self.$emit('error',event)
                // }, 0);
                self.deleteFile();
                self.$emit('error',event);
            };

            xhr.upload.ontimeout = function(event){
                self.deleteFile();
                self.$emit('error',event);
            };

            xhr.upload.onabort = function(event){
                self.deleteFile();
                self.$emit('error',event);
            };

            xhr.onload = function(event){
                if(event.target.status == 200 && event.target.readyState == 4){
                    self.$emit('success',event.target.response);
                }else {
                    self.deleteFile();
                    self.$emit('error',event);
                }
            };
            xhr.send(formData);
        },
        deleteFile: function deleteFile(){
            this.file = '';
        }
    },
    watch:{
        file: function file(){
            if(this.file != ''){
                this.uploadFile();
            }else {
                this.isShowPreviewer = false;
                this.isShowProgress = false;
            }
        }
    }
};

/* script */
            var __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "uploader",
      on: {
        drop: function($event) {
          $event.stopPropagation();
          $event.preventDefault();
          _vm.fileDropedIn($event);
        },
        dragenter: function($event) {
          $event.stopPropagation();
          $event.preventDefault();
        },
        dragover: function($event) {
          $event.stopPropagation();
          $event.preventDefault();
        }
      }
    },
    [
      _c("div", { staticClass: "info" }, [
        _c("div", { staticClass: "upload-icon" }, [
          _c("svg", { attrs: { viewBox: "0 0 60 60" } }, [
            _c("path", {
              attrs: {
                d:
                  "M50.975,20.694c-0.527-9-7.946-16.194-16.891-16.194c-5.43,0-10.688,2.663-13.946,7.008\n        c-0.074-0.039-0.153-0.065-0.228-0.102c-0.198-0.096-0.399-0.188-0.605-0.269c-0.115-0.045-0.23-0.086-0.346-0.127\n        c-0.202-0.071-0.406-0.133-0.615-0.19c-0.116-0.031-0.231-0.063-0.349-0.09c-0.224-0.051-0.452-0.09-0.683-0.124\n        c-0.102-0.015-0.202-0.035-0.305-0.047C16.677,10.523,16.341,10.5,16,10.5c-4.962,0-9,4.037-9,9c0,0.129,0.007,0.255,0.016,0.381\n        C2.857,22.148,0,26.899,0,31.654C0,38.737,5.762,44.5,12.845,44.5H18c0.552,0,1-0.447,1-1s-0.448-1-1-1h-5.155\n        C6.865,42.5,2,37.635,2,31.654c0-4.154,2.705-8.466,6.432-10.253L9,21.13V20.5c0-0.123,0.008-0.249,0.015-0.375l0.009-0.175\n        l-0.012-0.188C9.007,19.675,9,19.588,9,19.5c0-3.859,3.14-7,7-7c0.309,0,0.614,0.027,0.917,0.067\n        c0.078,0.01,0.155,0.023,0.232,0.036c0.268,0.044,0.532,0.102,0.792,0.177c0.034,0.01,0.069,0.016,0.102,0.026\n        c0.286,0.087,0.565,0.198,0.838,0.322c0.069,0.031,0.137,0.065,0.205,0.099c0.242,0.119,0.479,0.251,0.707,0.399\n        C21.72,14.875,23,17.039,23,19.5c0,0.553,0.448,1,1,1s1-0.447,1-1c0-2.754-1.246-5.219-3.2-6.871\n        C24.666,8.879,29.388,6.5,34.084,6.5c7.744,0,14.178,6.135,14.848,13.887c-1.022-0.072-2.553-0.109-4.083,0.125\n        c-0.546,0.083-0.921,0.593-0.838,1.139c0.075,0.495,0.501,0.85,0.987,0.85c0.05,0,0.101-0.004,0.152-0.012\n        c2.224-0.336,4.543-0.021,4.684-0.002C54.49,23.372,58,27.661,58,32.472C58,38.001,53.501,42.5,47.972,42.5H44\n        c-0.552,0-1,0.447-1,1s0.448,1,1,1h3.972C54.604,44.5,60,39.104,60,32.472C60,26.983,56.173,22.06,50.975,20.694z"
              }
            }),
            _vm._v(" "),
            _c("path", {
              attrs: {
                d:
                  "M31.708,30.794c-0.092-0.093-0.203-0.166-0.326-0.217c-0.244-0.101-0.52-0.101-0.764,0\n        c-0.123,0.051-0.233,0.124-0.326,0.217l-7.999,7.999c-0.391,0.391-0.391,1.023,0,1.414C22.488,40.402,22.744,40.5,23,40.5\n        s0.512-0.098,0.707-0.293L30,33.914V54.5c0,0.553,0.448,1,1,1s1-0.447,1-1V33.914l6.293,6.293C38.488,40.402,38.744,40.5,39,40.5\n        s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L31.708,30.794z"
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "info-label" }, [_vm._v("请将文件拖入上传")])
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "previewer" } }, [
        _vm.isShowPreviewer
          ? _c("div", { staticClass: "previewer" }, [
              _c("div", { staticClass: "interaction" }, [
                _c("div", { on: { click: _vm.deleteFile } }, [
                  _c(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        preserveAspectRatio: "none",
                        height: "50px",
                        viewBox: "-40 0 427 427.00131",
                        width: "50px"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0",
                          fill: "#FFFFFF"
                        }
                      }),
                      _c("path", {
                        attrs: {
                          d:
                            "m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0",
                          fill: "#FFFFFF"
                        }
                      }),
                      _c("path", {
                        attrs: {
                          d:
                            "m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0",
                          fill: "#FFFFFF"
                        }
                      }),
                      _c("path", {
                        attrs: {
                          d:
                            "m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0",
                          fill: "#FFFFFF"
                        }
                      })
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("img", { attrs: { src: _vm.previewDataUrl, alt: "preview" } })
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm.isShowProgress
        ? _c("div", {
            staticClass: "progress",
            style: { bottom: _vm.progress * 100 + "%" }
          })
        : _vm._e()
    ],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-772cde76_0", { source: "\n.uploader[data-v-772cde76] {\n    position: relative;\n    min-width: 200px;\n    min-height: 200px;\n    border: 0.5px solid gainsboro;\n    border-radius: 2px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n}\n.uploader[data-v-772cde76]:hover {\n    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n}\n.uploader .info[data-v-772cde76] {\n    position: absolute;\n    width: 200px;\n    height: 150px;\n    left: 50%;\n    top: 50%;\n    transform: translateX(-50%) translateY(-50%);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.uploader .info > .upload-icon svg[data-v-772cde76] {\n    width: 100px;\n    height: 100px;\n    fill: gainsboro;\n}\n.uploader .info > .info-label[data-v-772cde76] {\n    color: gainsboro;\n    font-family: 'Courier New', Courier, monospace;\n}\n.uploader > .previewer[data-v-772cde76] {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    background-color: black;\n}\n.uploader > .previewer > img[data-v-772cde76] {\n    max-height: 100%;\n    max-width: 100%;\n    align-self: center;\n    border-radius: 2px;\n}\n.uploader > .previewer > .interaction[data-v-772cde76] {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background-color: black;\n    opacity: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: opacity 0.2s ease-in;\n}\n.uploader > .previewer > .interaction[data-v-772cde76]:hover {\n    opacity: 0.5;\n}\n.previewer-enter[data-v-772cde76] {\n    opacity: 0;\n}\n.previewer-enter-active[data-v-772cde76] {\n    transition: all 0.2s ease-in-out;\n}\n.uploader > .progress[data-v-772cde76] {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    opacity: 0.5;\n    background-color: white;\n    transition: bottom 1s ease;\n}\n\n", map: {"version":3,"sources":["/Users/zaka/Desktop/vue/public/jj-uploader/src/jj-uploader.vue"],"names":[],"mappings":";AAoIA;IACA,mBAAA;IACA,iBAAA;IACA,kBAAA;IACA,8BAAA;IACA,mBAAA;IACA,mEAAA;IACA,gDAAA;CACA;AAEA;IACA,qEAAA;CACA;AAEA;IACA,mBAAA;IACA,aAAA;IACA,cAAA;IACA,UAAA;IACA,SAAA;IACA,6CAAA;IACA,cAAA;IACA,uBAAA;IACA,oBAAA;CACA;AAGA;IACA,aAAA;IACA,cAAA;IACA,gBAAA;CACA;AAEA;IACA,iBAAA;IACA,+CAAA;CAEA;AAEA;IACA,mBAAA;IACA,QAAA;IACA,SAAA;IACA,OAAA;IACA,UAAA;IACA,iBAAA;IACA,cAAA;IACA,wBAAA;IACA,wBAAA;CACA;AAEA;IACA,iBAAA;IACA,gBAAA;IACA,mBAAA;IACA,mBAAA;CACA;AAEA;IACA,mBAAA;IACA,QAAA;IACA,SAAA;IACA,OAAA;IACA,UAAA;IACA,wBAAA;IACA,WAAA;IACA,cAAA;IACA,wBAAA;IACA,oBAAA;IACA,iCAAA;CACA;AAEA;IACA,aAAA;CACA;AAEA;IACA,WAAA;CACA;AAEA;IACA,iCAAA;CACA;AAEA;IACA,mBAAA;IACA,QAAA;IACA,SAAA;IACA,OAAA;IACA,UAAA;IACA,aAAA;IACA,wBAAA;IACA,2BAAA;CACA","file":"jj-uploader.vue","sourcesContent":["<template>\n    <div class=\"uploader\" @drop.stop.prevent=\"fileDropedIn($event)\" @dragenter.stop.prevent @dragover.stop.prevent>\n        <div class=\"info\">\n            <div class=\"upload-icon\">\n                <svg viewBox=\"0 0 60 60\">\n                    <path d=\"M50.975,20.694c-0.527-9-7.946-16.194-16.891-16.194c-5.43,0-10.688,2.663-13.946,7.008\n            c-0.074-0.039-0.153-0.065-0.228-0.102c-0.198-0.096-0.399-0.188-0.605-0.269c-0.115-0.045-0.23-0.086-0.346-0.127\n            c-0.202-0.071-0.406-0.133-0.615-0.19c-0.116-0.031-0.231-0.063-0.349-0.09c-0.224-0.051-0.452-0.09-0.683-0.124\n            c-0.102-0.015-0.202-0.035-0.305-0.047C16.677,10.523,16.341,10.5,16,10.5c-4.962,0-9,4.037-9,9c0,0.129,0.007,0.255,0.016,0.381\n            C2.857,22.148,0,26.899,0,31.654C0,38.737,5.762,44.5,12.845,44.5H18c0.552,0,1-0.447,1-1s-0.448-1-1-1h-5.155\n            C6.865,42.5,2,37.635,2,31.654c0-4.154,2.705-8.466,6.432-10.253L9,21.13V20.5c0-0.123,0.008-0.249,0.015-0.375l0.009-0.175\n            l-0.012-0.188C9.007,19.675,9,19.588,9,19.5c0-3.859,3.14-7,7-7c0.309,0,0.614,0.027,0.917,0.067\n            c0.078,0.01,0.155,0.023,0.232,0.036c0.268,0.044,0.532,0.102,0.792,0.177c0.034,0.01,0.069,0.016,0.102,0.026\n            c0.286,0.087,0.565,0.198,0.838,0.322c0.069,0.031,0.137,0.065,0.205,0.099c0.242,0.119,0.479,0.251,0.707,0.399\n            C21.72,14.875,23,17.039,23,19.5c0,0.553,0.448,1,1,1s1-0.447,1-1c0-2.754-1.246-5.219-3.2-6.871\n            C24.666,8.879,29.388,6.5,34.084,6.5c7.744,0,14.178,6.135,14.848,13.887c-1.022-0.072-2.553-0.109-4.083,0.125\n            c-0.546,0.083-0.921,0.593-0.838,1.139c0.075,0.495,0.501,0.85,0.987,0.85c0.05,0,0.101-0.004,0.152-0.012\n            c2.224-0.336,4.543-0.021,4.684-0.002C54.49,23.372,58,27.661,58,32.472C58,38.001,53.501,42.5,47.972,42.5H44\n            c-0.552,0-1,0.447-1,1s0.448,1,1,1h3.972C54.604,44.5,60,39.104,60,32.472C60,26.983,56.173,22.06,50.975,20.694z\"/>\n                    <path d=\"M31.708,30.794c-0.092-0.093-0.203-0.166-0.326-0.217c-0.244-0.101-0.52-0.101-0.764,0\n            c-0.123,0.051-0.233,0.124-0.326,0.217l-7.999,7.999c-0.391,0.391-0.391,1.023,0,1.414C22.488,40.402,22.744,40.5,23,40.5\n            s0.512-0.098,0.707-0.293L30,33.914V54.5c0,0.553,0.448,1,1,1s1-0.447,1-1V33.914l6.293,6.293C38.488,40.402,38.744,40.5,39,40.5\n            s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L31.708,30.794z\"/>\n                </svg>\n            </div>\n            <span class=\"info-label\">请将文件拖入上传</span>\n        </div>\n        <transition name=\"previewer\">\n            <div v-if=\"isShowPreviewer\" class=\"previewer\">\n                <div class=\"interaction\">\n                    <div @click=\"deleteFile\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\" height=\"50px\" viewBox=\"-40 0 427 427.00131\" width=\"50px\"><path d=\"m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\" fill=\"#FFFFFF\"/><path d=\"m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\" fill=\"#FFFFFF\"/><path d=\"m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0\" fill=\"#FFFFFF\"/><path d=\"m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\" fill=\"#FFFFFF\"/></svg>\n                    </div>\n                </div>\n                <img :src=\"previewDataUrl\" alt=\"preview\">\n            </div>\n        </transition>\n        <div v-if=\"isShowProgress\" class=\"progress\" :style=\"{bottom:progress*100+'%'}\"></div>\n    </div>\n</template>\n\n<script>\nexport default {\n    name:'JjUploader',\n    props:{\n        url:String,\n        timeout:{type:Number,default:0},\n    },\n    data(){\n        return {\n            file:'',\n            previewDataUrl:'',\n            isShowPreviewer:false,\n            isShowProgress:true,\n            progress:0,\n        }\n    },\n    methods:{\n        fileDropedIn(event){\n            this.file = event.dataTransfer.files[0]\n\n        },\n        uploadFile(){\n            let self = this\n            let fileReader = new FileReader()\n            fileReader.onload = function(event) {\n                //on load exec after on error \n                self.isShowProgress = self.isShowPreviewer = self.file == ''? false:true\n                self.previewDataUrl = event.target.result\n\n            }\n            fileReader.readAsDataURL(this.file)\n\n            let formData = new FormData()\n            formData.append(this.file.name,this.file)\n\n            let xhr = new XMLHttpRequest()\n            xhr.timeout = this.timeout\n            xhr.open('POST',this.url)\n            xhr.upload.onprogress = function(event){\n                if (event.lengthComputable) {\n                    self.progress = event.loaded / event.total;\n                    self.isShowProgress = self.progress = self.progress == 1 ? 0:self.progress;\n                }\n            }\n            xhr.upload.onerror = function(event){\n                // setTimeout(() => {\n                //     self.deleteFile()\n                //     self.$emit('error',event)\n                // }, 0);\n                self.deleteFile()\n                self.$emit('error',event)\n            }\n\n            xhr.upload.ontimeout = function(event){\n                self.deleteFile()\n                self.$emit('error',event)\n            }\n\n            xhr.upload.onabort = function(event){\n                self.deleteFile()\n                self.$emit('error',event)\n            }\n\n            xhr.onload = function(event){\n                if(event.target.status == 200 && event.target.readyState == 4){\n                    self.$emit('success',event.target.response)\n                }else {\n                    self.deleteFile()\n                    self.$emit('error',event)\n                }\n            }\n            xhr.send(formData)\n        },\n        deleteFile(){\n            this.file = ''\n        }\n    },\n    watch:{\n        file(){\n            if(this.file != ''){\n                this.uploadFile()\n            }else {\n                this.isShowPreviewer = false\n                this.isShowProgress = false\n            }\n        }\n    }\n}\n</script>\n\n<style scoped>\n.uploader {\n    position: relative;\n    min-width: 200px;\n    min-height: 200px;\n    border: 0.5px solid gainsboro;\n    border-radius: 2px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n}\n\n.uploader:hover {\n    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n}\n\n.uploader .info {\n    position: absolute;\n    width: 200px;\n    height: 150px;\n    left: 50%;\n    top: 50%;\n    transform: translateX(-50%) translateY(-50%);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n\n.uploader .info > .upload-icon svg {\n    width: 100px;\n    height: 100px;\n    fill: gainsboro;\n}\n\n.uploader .info > .info-label {\n    color: gainsboro;\n    font-family: 'Courier New', Courier, monospace;\n\n}\n\n.uploader > .previewer {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    background-color: black;\n}\n\n.uploader > .previewer > img {\n    max-height: 100%;\n    max-width: 100%;\n    align-self: center;\n    border-radius: 2px;\n}\n\n.uploader > .previewer > .interaction {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background-color: black;\n    opacity: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: opacity 0.2s ease-in;\n}\n\n.uploader > .previewer > .interaction:hover {\n    opacity: 0.5;\n}\n\n.previewer-enter {\n    opacity: 0;\n}\n\n.previewer-enter-active {\n    transition: all 0.2s ease-in-out;\n}\n\n.uploader > .progress {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    opacity: 0.5;\n    background-color: white;\n    transition: bottom 1s ease;\n}\n\n</style>\n\n\n"]}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = "data-v-772cde76";
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zaka/Desktop/vue/public/jj-uploader/src/jj-uploader.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    {
      var hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var component = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

// Import vue component

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) { return; }
  install.installed = true;
  Vue.component('JjUploader', component);
}

// Create module definition for Vue.use()
var plugin = {
  install: install,
};

// To auto-install when vue is found
/* global window global */
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default component;
