<template>
    <div class="uploader" @drop.stop.prevent="fileDropedIn($event)" @dragenter.stop.prevent @dragover.stop.prevent>
        <div class="info">
            <div class="upload-icon">
                <svg viewBox="0 0 60 60">
                    <path d="M50.975,20.694c-0.527-9-7.946-16.194-16.891-16.194c-5.43,0-10.688,2.663-13.946,7.008
            c-0.074-0.039-0.153-0.065-0.228-0.102c-0.198-0.096-0.399-0.188-0.605-0.269c-0.115-0.045-0.23-0.086-0.346-0.127
            c-0.202-0.071-0.406-0.133-0.615-0.19c-0.116-0.031-0.231-0.063-0.349-0.09c-0.224-0.051-0.452-0.09-0.683-0.124
            c-0.102-0.015-0.202-0.035-0.305-0.047C16.677,10.523,16.341,10.5,16,10.5c-4.962,0-9,4.037-9,9c0,0.129,0.007,0.255,0.016,0.381
            C2.857,22.148,0,26.899,0,31.654C0,38.737,5.762,44.5,12.845,44.5H18c0.552,0,1-0.447,1-1s-0.448-1-1-1h-5.155
            C6.865,42.5,2,37.635,2,31.654c0-4.154,2.705-8.466,6.432-10.253L9,21.13V20.5c0-0.123,0.008-0.249,0.015-0.375l0.009-0.175
            l-0.012-0.188C9.007,19.675,9,19.588,9,19.5c0-3.859,3.14-7,7-7c0.309,0,0.614,0.027,0.917,0.067
            c0.078,0.01,0.155,0.023,0.232,0.036c0.268,0.044,0.532,0.102,0.792,0.177c0.034,0.01,0.069,0.016,0.102,0.026
            c0.286,0.087,0.565,0.198,0.838,0.322c0.069,0.031,0.137,0.065,0.205,0.099c0.242,0.119,0.479,0.251,0.707,0.399
            C21.72,14.875,23,17.039,23,19.5c0,0.553,0.448,1,1,1s1-0.447,1-1c0-2.754-1.246-5.219-3.2-6.871
            C24.666,8.879,29.388,6.5,34.084,6.5c7.744,0,14.178,6.135,14.848,13.887c-1.022-0.072-2.553-0.109-4.083,0.125
            c-0.546,0.083-0.921,0.593-0.838,1.139c0.075,0.495,0.501,0.85,0.987,0.85c0.05,0,0.101-0.004,0.152-0.012
            c2.224-0.336,4.543-0.021,4.684-0.002C54.49,23.372,58,27.661,58,32.472C58,38.001,53.501,42.5,47.972,42.5H44
            c-0.552,0-1,0.447-1,1s0.448,1,1,1h3.972C54.604,44.5,60,39.104,60,32.472C60,26.983,56.173,22.06,50.975,20.694z"/>
                    <path d="M31.708,30.794c-0.092-0.093-0.203-0.166-0.326-0.217c-0.244-0.101-0.52-0.101-0.764,0
            c-0.123,0.051-0.233,0.124-0.326,0.217l-7.999,7.999c-0.391,0.391-0.391,1.023,0,1.414C22.488,40.402,22.744,40.5,23,40.5
            s0.512-0.098,0.707-0.293L30,33.914V54.5c0,0.553,0.448,1,1,1s1-0.447,1-1V33.914l6.293,6.293C38.488,40.402,38.744,40.5,39,40.5
            s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L31.708,30.794z"/>
                </svg>
            </div>
            <span class="info-label">请将文件拖入上传</span>
        </div>
        <transition name="previewer">
            <div v-if="isShowPreviewer" class="previewer">
                <div class="interaction">
                    <div @click="deleteFile">
                        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" height="50px" viewBox="-40 0 427 427.00131" width="50px"><path d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" fill="#FFFFFF"/><path d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" fill="#FFFFFF"/><path d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0" fill="#FFFFFF"/><path d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" fill="#FFFFFF"/></svg>
                    </div>
                </div>
                <img :src="previewDataUrl" alt="preview">
            </div>
        </transition>
        <div v-if="isShowProgress" class="progress" :style="{bottom:progress*100+'%'}"></div>
    </div>
</template>

<script>
export default {
    name:'JjUploader',
    props:{
        url:String,
        timeout:{type:Number,default:0},
    },
    data(){
        return {
            file:'',
            previewDataUrl:'',
            isShowPreviewer:false,
            isShowProgress:true,
            progress:0,
        }
    },
    methods:{
        fileDropedIn(event){
            this.file = event.dataTransfer.files[0]

        },
        uploadFile(){
            let self = this
            let fileReader = new FileReader()
            fileReader.onload = function(event) {
                //on load exec after on error 
                self.isShowProgress = self.isShowPreviewer = self.file == ''? false:true
                self.previewDataUrl = event.target.result

            }
            fileReader.readAsDataURL(this.file)

            let formData = new FormData()
            formData.append(this.file.name,this.file)

            let xhr = new XMLHttpRequest()
            xhr.timeout = this.timeout
            xhr.open('POST',this.url)
            xhr.upload.onprogress = function(event){
                if (event.lengthComputable) {
                    self.progress = event.loaded / event.total;
                    self.isShowProgress = self.progress = self.progress == 1 ? 0:self.progress;
                }
            }
            xhr.upload.onerror = function(event){
                // setTimeout(() => {
                //     self.deleteFile()
                //     self.$emit('error',event)
                // }, 0);
                self.deleteFile()
                self.$emit('error',event)
            }

            xhr.upload.ontimeout = function(event){
                self.deleteFile()
                self.$emit('error',event)
            }

            xhr.upload.onabort = function(event){
                self.deleteFile()
                self.$emit('error',event)
            }

            xhr.onload = function(event){
                if(event.target.status == 200 && event.target.readyState == 4){
                    self.$emit('success',event.target.response)
                }else {
                    self.deleteFile()
                    self.$emit('error',event)
                }
            }
            xhr.send(formData)
        },
        deleteFile(){
            this.file = ''
        }
    },
    watch:{
        file(){
            if(this.file != ''){
                this.uploadFile()
            }else {
                this.isShowPreviewer = false
                this.isShowProgress = false
            }
        }
    }
}
</script>

<style scoped>
.uploader {
    position: relative;
    min-width: 200px;
    min-height: 200px;
    border: 0.5px solid gainsboro;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.uploader:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.uploader .info {
    position: absolute;
    width: 200px;
    height: 150px;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
}


.uploader .info > .upload-icon svg {
    width: 100px;
    height: 100px;
    fill: gainsboro;
}

.uploader .info > .info-label {
    color: gainsboro;
    font-family: 'Courier New', Courier, monospace;

}

.uploader > .previewer {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    background-color: black;
}

.uploader > .previewer > img {
    max-height: 100%;
    max-width: 100%;
    align-self: center;
    border-radius: 2px;
}

.uploader > .previewer > .interaction {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: black;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.2s ease-in;
}

.uploader > .previewer > .interaction:hover {
    opacity: 0.5;
}

.previewer-enter {
    opacity: 0;
}

.previewer-enter-active {
    transition: all 0.2s ease-in-out;
}

.uploader > .progress {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0.5;
    background-color: white;
    transition: bottom 1s ease;
}

</style>


