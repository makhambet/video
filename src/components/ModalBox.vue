<template>
    <div id="notes">
        <div class="note-item" :data-type="typeInfo" role="alert">
            <div class="note-item-text">{{boxText}}</div>
            <button class="note-item-btn" role="button" aria-label="Скрыть"></button>
        </div>
  </div>
</template>

<script>
    export default {
        props: {
            boxText: {
                type: String,
                required: true
            },
            typeInfo: {
                type: String,
                required: true
            }
        },
    }
</script>

<style scoped>
    #notes {
        position: fixed;
        top: 5%;
        left: 0;
        width: 100%;
        cursor: default;
        transition: height 0.45s ease-in-out;
        -webkit-transition: height 0.45s ease-in-out;
        pointer-events: none;
        z-index: 99;
        font-size: 20px;
        /* animation: down 1s 1; */
    }
    #notes .note-item {
        max-height: 100px;
        opacity: 1;
        will-change: opacity, transform;
        transition: all 0.2s linear;
        -webkit-transition: all 0.2s linear;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        -ms-backface-visibility: hidden;
        width: 300px;
        -webkit-touch-callout: none;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        z-index: 2;
        pointer-events: auto;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-content: flex-start;
        -ms-flex-line-pack: start;
        align-content: flex-start;
        -webkit-box-align: start;
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        -moz-align-items: flex-start;
        align-items: flex-start;
        -webkit-align-content: flex-start;
        -ms-flex-line-pack: start;
        align-content: flex-start;
        font: inherit;
        line-height: 1.25em;
        color: #fff;
        margin: 0 auto 1em auto;
        transform: translateZ(0);
        -moz-transform: translateZ(0);
        -ms-transform: translateZ(0);
        -webkit-transform: translateZ(0);
        padding: 0.75em 1em;
    }
    @media (max-width: 579) {
        #notes{
            font-size: 14px;
        }
        #notes .note-item {
            width: 75vw;
            max-width: none;
        }
    }
    #notes .note-item[data-show="false"] {
        pointer-events: none;
        opacity: 0 !important;
        max-height: 0 !important;
        margin-bottom: 0 !important;
    }
    #notes .note-item[data-type="info"] {
        background-color: rgba(55, 94, 151, 0.72);
    }
    #notes .note-item[data-type="warn"]{
        background-color: rgba(235, 172, 0, 0.72);
        animation: shake 0.9s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        -webkit-animation: shake 0.9s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    }
    #notes .note-item[data-type="error"] {
        background-color: rgba(251, 101, 66, 0.72);
        animation: shake 0.54s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        -webkit-animation: shake 0.54s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    }
    #notes .note-item[data-type="success"] {
        background-color: rgba(63, 104, 28, 0.72);
    }
    #notes .note-item .note-item-text {
        flex: auto;
        -webkit-flex: auto;
        -moz-flex: auto;
        -ms-flex: auto;
        padding-right: 0.5em;
        max-width: calc(100% - 1.25em);
        max-width: -webkit-calc(100% - 1.25em);
    }
    #notes .note-item .note-item-btn {
        width: 1.25em;
        height: 1.25em;
        cursor: pointer;
        background: inherit;
        border: none;
        background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTguMyw1LjcxTDE4LjMsNS43MWMtMC4zOS0wLjM5LTEuMDItMC4zOS0xLjQxLDBMMTIsMTAuNTlMNy4xMSw1LjdjLTAuMzktMC4zOS0xLjAyLTAuMzktMS40MSwwbDAsMCBjLTAuMzksMC4zOS0wLjM5LDEuMDIsMCwxLjQxTDEwLjU5LDEyTDUuNywxNi44OWMtMC4zOSwwLjM5LTAuMzksMS4wMiwwLDEuNDFoMGMwLjM5LDAuMzksMS4wMiwwLjM5LDEuNDEsMEwxMiwxMy40MWw0Ljg5LDQuODkgYzAuMzksMC4zOSwxLjAyLDAuMzksMS40MSwwbDAsMGMwLjM5LTAuMzksMC4zOS0xLjAyLDAtMS40MUwxMy40MSwxMmw0Ljg5LTQuODlDMTguNjgsNi43MywxOC42OCw2LjA5LDE4LjMsNS43MXoiLz48L3N2Zz4=)  no-repeat 0 0 / contain;
        transition: opacity 0.2s;
        -webkit-transition: opacity 0.2s;
        text-align: center;
    }
    #notes .note-item .note-item-btn:hover {
        opacity: 0.6;
    }
    @keyframes shake {
        10%, 90% {
            transform: translate3d(-1px, 0, 0);
            -webkit-transform: translate3d(-1px, 0, 0);
            -ms-transform: translate3d(-1px, 0, 0);
        }
        20%, 80% {
            transform: translate3d(2px, 0 0);
            -webkit-transform: translate3d(2px, 0, 0);
            -ms-transform: translate3d(2px, 0, 0);
        }
        30%, 50%, 70% {
            transform: translate3d(-4px, 0, 0);
            -webkit-transform: translate3d(-4px, 0, 0);
            -ms-transform: translate3d(-4px, 0, 0);
        }
        40%, 60% {
            transform: translate3d(4px, 0, 0);
            -webkit-transform: translate3d(4px, 0, 0);
            -ms-transform: translate3d(4px, 0, 0);
        }
    }
    @-webkit-keyframes shake {
        10%, 90% {
            -webkit-transform: translate3d(-1px, 0, 0);
        }
        20%, 80% {
            -webkit-transform: translate3d(2px, 0, 0);
        }
        30%, 50%, 70% {
            -webkit-transform: translate3d(-4px, 0, 0) t;
        }
        40%, 60% {
            -webkit-transform: translate3d(4px, 0, 0);
        }
    }
    @keyframes down{
        0%{
            top: 0%;
        }
        100%{
            top: 20%;
        }
    }

</style>