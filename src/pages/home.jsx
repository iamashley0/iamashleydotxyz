import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";

/**
* The Home function defines the content that makes up the main content of the Home page
* This component is attached to the /about path in router.jsx
* The function in app.jsx defines the page wrapper that this appears in along with the footer
*/

export default function Home() {
  return (
   <>
  &gt;
  
  <style
    dangerouslySetInnerHTML={{
      __html:
        "html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}body{-webkit-text-size-adjust:none}mark{background-color:transparent;color:inherit}input::-moz-focus-inner{border:0;padding:0}input[type=\"text\"],input[type=\"email\"],select,textarea{-moz-appearance:none;-webkit-appearance:none;-ms-appearance:none;appearance:none}*, *:before, *:after {box-sizing: border-box;}body {min-width: 320px;min-height: var(--viewport-height);line-height: 1.0;word-wrap: break-word;overflow-x: hidden;}body:before {content: '';display: block;position: fixed;top: 0;left: 0;width: 100vw;height: var(--background-height);z-index: 0;pointer-events: none;transform: scale(1);background-attachment: scroll;background-image: linear-gradient(45deg, #131430 0%, rgba(35,19,48,0.941) 100%), url('assets/images/bg.svg?v=5463f5ed');background-position: 0% 0%, bottom;background-repeat: repeat, no-repeat;background-size: cover, cover;background-color: #000000;}body:after {display: block;content: '';position: fixed;top: 0;left: 0;width: 100%;height: 100%;background-color: #1B1330;z-index: 1;opacity: 0;visibility: hidden;transition: opacity 1s ease-in-out 0s, visibility 1s 0s;transform: scale(1);}body.is-loading:after {opacity: 1;visibility: visible;}:root {--site-language-direction: ltr;--site-language-alignment: left;--viewport-height: 100vh;--background-height: 100vh;}html {font-size: 18pt;}u {text-decoration: underline;}strong {color: inherit;font-weight: bolder;}em {font-style: italic;}code {font-family: 'Lucida Console', 'Courier New', monospace;font-weight: normal;text-indent: 0;letter-spacing: 0;font-size: 0.9em;margin: 0 0.25em;padding: 0.25em 0.5em;background-color: rgba(144,144,144,0.25);border-radius: 0.25em;}mark {background-color: rgba(144,144,144,0.25);}s {text-decoration: line-through;}a {color: inherit;text-decoration: underline;transition: color 0.25s ease;}#wrapper {-webkit-overflow-scrolling: touch;display: flex;flex-direction: column;align-items: center;justify-content: center;min-height: var(--viewport-height);position: relative;z-index: 2;overflow: hidden;padding: 2rem 2rem 2rem 2rem;}#main {display: flex;position: relative;max-width: 100%;z-index: 1;align-items: center;justify-content: center;flex-grow: 0;flex-shrink: 0;text-align: center;background-color: transparent;border-radius: 2rem 2rem 2rem 2rem;transition: opacity 1s ease 0s,transform 1s ease 0s;}#main > .inner {position: relative;z-index: 1;border-radius: inherit;padding: 2rem 2rem;max-width: 100%;width: 30rem;}#main > .inner > * {margin-top: 0rem;margin-bottom: 0rem;}#main > .inner > :first-child {margin-top: 0 !important;}#main > .inner > :last-child {margin-bottom: 0 !important;}#main > .inner > .full {margin-left: calc(-2rem);width: calc(100% + 4rem + 0.4725px);max-width: calc(100% + 4rem + 0.4725px);}#main > .inner > .full:first-child {margin-top: -2rem !important;border-top-left-radius: inherit;border-top-right-radius: inherit;}#main > .inner > .full:last-child {margin-bottom: -2rem !important;border-bottom-left-radius: inherit;border-bottom-right-radius: inherit;}#main > .inner > .full.screen {width: 100vw;max-width: 100vw;position: relative;border-radius: 0 !important;left: 50%;right: auto;margin-left: -50vw;}body.is-loading #main {opacity: 0;transform: translateY(0.6375rem);}body.is-instant #main, body.is-instant #main > .inner > *,body.is-instant #main > .inner > section > * {transition: none !important;}body.is-instant:after {display: none !important;transition: none !important;}.image {position: relative;max-width: 100%;display: block;}.image .frame {width: 100%;max-width: 100%;display: inline-block;vertical-align: top;overflow: hidden;-webkit-backface-visibility: hidden;-webkit-transform: translate3d(0, 0, 0);}.image .frame img {width: inherit;max-width: 100%;vertical-align: top;border-radius: 0 !important;}.image.full .frame {display: block;}.image.full:first-child .frame {border-top-left-radius: inherit;border-top-right-radius: inherit;}.image.full:last-child .frame {border-bottom-left-radius: inherit;border-bottom-right-radius: inherit;}.image.style1:not(:first-child) {margin-top: 1.875rem !important;}.image.style1:not(:last-child) {margin-bottom: 1.875rem !important;}.image.style1 .frame {width: 9rem;border-radius: 100%;border-style: solid;border-color: #6C69FF;border-width: 5px;box-shadow: 0rem 1.75rem 1.375rem 0rem rgba(29,18,45,0.29);transition: none;}.image.style1 img {padding: 0rem;border-radius: inherit !important;}.image.style1 .frame img {transition: none;}h1, h2, h3, p {direction: var(--site-language-direction);}h1 br + br, h2 br + br, h3 br + br, p br + br {display: block;content: ' ';}h1 .li, h2 .li, h3 .li, p .li {display: list-item;padding-left: 0.5em;margin: 0.75em 0 0 1em;}#text01 br + br {margin-top: 0.825rem;}#text01 {color: #FFFFFF;font-family: 'Manrope', sans-serif;font-size: 2.5em;line-height: 1.375;font-weight: 500;}#text01 a {text-decoration: none;}#text01 a:hover {text-decoration: underline;}#text01 mark {color: #A1A1A1;background-color: transparent;}h1.style3, h2.style3, h3.style3, p.style3 br + br {margin-top: 1.05rem;}h1.style3, h2.style3, h3.style3, p.style3 {color: #8284AB;font-family: 'Inter', sans-serif;font-size: 1em;line-height: 1.75;font-weight: 200;}h1.style3 a, h2.style3 a, h3.style3 a, p.style3 a {text-decoration: none;}h1.style3 a:hover, h2.style3 a:hover, h3.style3 a:hover, p.style3 a:hover {text-decoration: underline;}h1.style3 mark, h2.style3 mark, h3.style3 mark, p.style3 mark {color: #5F3FBA;background-color: transparent;}.buttons {cursor: default;padding: 0;letter-spacing: 0;}.buttons li a {align-items: center;justify-content: center;max-width: 100%;text-align: center;text-decoration: none;vertical-align: middle;white-space: nowrap;}.buttons.style1 {width: 100%;padding: 0.625rem 0;}.buttons.style1 li {display: block;margin: 1.25rem 0;}.buttons.style1 li:first-child {margin-top: 0;}.buttons.style1 li:last-child {margin-bottom: 0;}.buttons.style1 li a {display: inline-flex;width: 30rem;height: 4rem;line-height: 4rem;vertical-align: middle;padding: 0 2rem;font-size: 1.125em;font-family: 'Inter', sans-serif;font-weight: 400;border-radius: 0.75rem;justify-content: flex-end;flex-direction: row-reverse;transition: transform 0.25s ease, color 0.25s ease, background-color 0.25s ease, border-color 0.25s ease;}.buttons.style1 li a svg {display: block;width: 1.75em;min-width: 16px;height: 100%;fill: #FFFFFF;flex-grow: 0;flex-shrink: 0;margin-right: calc(-0.125em + 0rem);margin-left: 0.5em;transition: fill 0.25s ease;}.buttons.style1 li a .label {direction: var(--site-language-direction);flex-grow: 1;flex-shrink: 1;width: 100%;text-align: left;}.buttons.style1 .button {background-color: rgba(255,255,255,0.051);color: #FFFFFF;background-image: linear-gradient(300deg, rgba(255,255,255,0.039) 0%, transparent 100%);background-position: 0% 0%;background-repeat: repeat;background-size: cover;}.buttons.style1 li a:hover {transform: scale(1.0425);}#buttons02 .n01 {background-color: #6E7DFB;background-image: linear-gradient(300deg, #3957F7 0%, rgba(110,125,251,0.008) 100%);}.container {position: relative;}.container > .wrapper {vertical-align: top;position: relative;max-width: 100%;border-radius: inherit;}.container > .wrapper > .inner {vertical-align: top;position: relative;max-width: 100%;border-radius: inherit;}#main .container.full:first-child > .wrapper {border-top-left-radius: inherit;border-top-right-radius: inherit;}#main .container.full:last-child > .wrapper {border-bottom-left-radius: inherit;border-bottom-right-radius: inherit;}#main .container.full:first-child > .wrapper > .inner {border-top-left-radius: inherit;border-top-right-radius: inherit;}#main .container.full:last-child > .wrapper > .inner {border-bottom-left-radius: inherit;border-bottom-right-radius: inherit;}.container.style2 > .wrapper > .inner {text-align: center;padding: 3.25rem 3.25rem;}.container.style2 {display: flex;width: 100%;align-items: center;justify-content: center;background-color: rgba(66,57,110,0.361);}.container.style2 > .wrapper {width: 100%;max-width: 100%;}.container.style2.default > .wrapper > .inner > * {margin-top: 1.5rem;margin-bottom: 1.5rem;}.container.style2.default > .wrapper > .inner > *:first-child {margin-top: 0 !important;}.container.style2.default > .wrapper > .inner > *:last-child {margin-bottom: 0 !important;}.container.style2.columns > .wrapper > .inner {flex-wrap: wrap;display: flex;align-items: center;}.container.style2.columns > .wrapper > .inner > * {flex-shrink: 0;flex-grow: 0;max-width: 100%;padding: 0 0 0 3rem;}.container.style2.columns > .wrapper > .inner > * > * {margin-top: 1.5rem;margin-bottom: 1.5rem;}.container.style2.columns > .wrapper > .inner > * > *:first-child {margin-top: 0 !important;}.container.style2.columns > .wrapper > .inner > * > *:last-child {margin-bottom: 0 !important;}.container.style2.columns > .wrapper > .inner > *:first-child {margin-left: -3rem;}.container.style2.default > .wrapper > .inner > .full {margin-left: calc(-3.25rem);width: calc(100% + 6.5rem + 0.4725px);max-width: none;}.container.style2.default > .wrapper > .inner > .full:first-child {margin-top: -3.25rem !important;border-top-left-radius: inherit;border-top-right-radius: inherit;}.container.style2.default > .wrapper > .inner > .full:last-child {margin-bottom: -3.25rem !important;border-bottom-left-radius: inherit;border-bottom-right-radius: inherit;}.container.style2.columns > .wrapper > .inner > div > .full {margin-left: calc(-1.5rem);width: calc(100% + 3rem + 0.4725px);max-width: none;}.container.style2.columns > .wrapper > .inner > div:first-child > .full {margin-left: calc(-3.25rem);width: calc(100% + 4.75rem + 0.4725px);}.container.style2.columns > .wrapper > .inner > div:last-child > .full {width: calc(100% + 4.75rem + 0.4725px);}.container.style2.columns > .wrapper > .inner > div > .full:first-child {margin-top: calc(-3.25rem) !important;}.container.style2.columns > .wrapper > .inner > div > .full:last-child {margin-bottom: calc(-3.25rem) !important;}.container.style2.columns > .wrapper > .inner > .full {align-self: stretch;}.container.style2.columns > .wrapper > .inner > .full:first-child {border-top-left-radius: inherit;border-bottom-left-radius: inherit;}.container.style2.columns > .wrapper > .inner > .full:last-child {border-top-right-radius: inherit;border-bottom-right-radius: inherit;}.container.style2.columns > .wrapper > .inner > .full > .full:first-child:last-child {height: calc(100% + 6.5rem);border-radius: inherit;}.container.style2.columns > .wrapper > .inner > .full > .full:first-child:last-child > * {position: absolute;width: 100%;height: 100%;border-radius: inherit;}.container.style2.columns > .wrapper > .inner > .full > .full:first-child:last-child > * > * {height: 100%;border-radius: inherit;}.container.style1 > .wrapper > .inner {text-align: center;padding: 2.5rem 2.5rem;}.container.style1 {display: flex;width: 100%;align-items: center;justify-content: center;background-color: #241F40;}.container.style1 > .wrapper {width: 100%;max-width: 100%;}.container.style1.default > .wrapper > .inner > * {margin-top: 0.25rem;margin-bottom: 0.25rem;}.container.style1.default > .wrapper > .inner > *:first-child {margin-top: 0 !important;}.container.style1.default > .wrapper > .inner > *:last-child {margin-bottom: 0 !important;}.container.style1.columns > .wrapper > .inner {flex-wrap: wrap;display: flex;align-items: center;}.container.style1.columns > .wrapper > .inner > * {flex-shrink: 0;flex-grow: 0;max-width: 100%;padding: 0 0 0 1rem;}.container.style1.columns > .wrapper > .inner > * > * {margin-top: 0.25rem;margin-bottom: 0.25rem;}.container.style1.columns > .wrapper > .inner > * > *:first-child {margin-top: 0 !important;}.container.style1.columns > .wrapper > .inner > * > *:last-child {margin-bottom: 0 !important;}.container.style1.columns > .wrapper > .inner > *:first-child {margin-left: -1rem;}.container.style1.default > .wrapper > .inner > .full {margin-left: calc(-2.5rem);width: calc(100% + 5rem + 0.4725px);max-width: none;}.container.style1.default > .wrapper > .inner > .full:first-child {margin-top: -2.5rem !important;border-top-left-radius: inherit;border-top-right-radius: inherit;}.container.style1.default > .wrapper > .inner > .full:last-child {margin-bottom: -2.5rem !important;border-bottom-left-radius: inherit;border-bottom-right-radius: inherit;}.container.style1.columns > .wrapper > .inner > div > .full {margin-left: calc(-0.5rem);width: calc(100% + 1rem + 0.4725px);max-width: none;}.container.style1.columns > .wrapper > .inner > div:first-child > .full {margin-left: calc(-2.5rem);width: calc(100% + 3rem + 0.4725px);}.container.style1.columns > .wrapper > .inner > div:last-child > .full {width: calc(100% + 3rem + 0.4725px);}.container.style1.columns > .wrapper > .inner > div > .full:first-child {margin-top: calc(-2.5rem) !important;}.container.style1.columns > .wrapper > .inner > div > .full:last-child {margin-bottom: calc(-2.5rem) !important;}.container.style1.columns > .wrapper > .inner > .full {align-self: stretch;}.container.style1.columns > .wrapper > .inner > .full:first-child {border-top-left-radius: inherit;border-bottom-left-radius: inherit;}.container.style1.columns > .wrapper > .inner > .full:last-child {border-top-right-radius: inherit;border-bottom-right-radius: inherit;}.container.style1.columns > .wrapper > .inner > .full > .full:first-child:last-child {height: calc(100% + 5rem);border-radius: inherit;}.container.style1.columns > .wrapper > .inner > .full > .full:first-child:last-child > * {position: absolute;width: 100%;height: 100%;border-radius: inherit;}.container.style1.columns > .wrapper > .inner > .full > .full:first-child:last-child > * > * {height: 100%;border-radius: inherit;}#container02 > .wrapper > .inner > :nth-child(1) {width: calc(33.33333% + 0.33rem);}#container02 > .wrapper > .inner > :nth-child(2) {width: calc(33.33333% + 0.33rem);}#container02 > .wrapper > .inner > :nth-child(3) {width: calc(33.33333% + 0.33rem);}.icons {cursor: default;padding: 0;letter-spacing: 0;}.icons li {display: inline-block;vertical-align: middle;position: relative;z-index: 1;}.icons li a {display: flex;align-items: center;justify-content: center;}.icons li a svg {display: block;position: relative;}.icons li a + svg {display: block;position: absolute;top: 0;left: 0;width: 100%;height: 100%;z-index: -1;pointer-events: none;}.icons li a .label {display: none;}.icons.style1 {font-size: 2.5em;width: calc(100% + 1.625rem);margin-left: -0.8125rem;}.icons.style1 li {margin: 0.8125rem;}.icons.style1 li a {border-radius: 100%;width: 2em;height: 2em;transition: transform 0.25s ease, color 0.25s ease, background-color 0.25s ease, border-color 0.25s ease;}.icons.style1 li a svg {width: 60%;height: 60%;transition: fill 0.25s ease;}.icons.style1 a {background-color: rgba(255,255,255,0.051);background-image: linear-gradient(37deg, rgba(255,255,255,0.039) 0%, transparent 100%);background-position: 0% 0%;background-repeat: repeat;background-size: cover;}.icons.style1 a svg {fill: #FFFFFF;}.icons.style1 li a + svg {transition: transform 0.25s ease, fill 0.25s ease, stroke 0.25s ease;}.icons.style1 li a:hover {transform: translateY(-7.75%);}.icons.style1 li a:hover + svg {transform: translateY(-7.75%);}#icons01 .n01 {background-color: #000000;background-image: linear-gradient(37deg, #4A3838 0%, rgba(0,0,0,0.008) 100%);}#icons02 .n01 {background-color: #2C9EFA;background-image: linear-gradient(37deg, #2C66FA 0%, rgba(44,158,250,0.008) 100%);}#icons03 .n01 {background-color: #C060FB;background-image: linear-gradient(37deg, #6038FF 0%, rgba(192,96,251,0.008) 100%);}.icc-credits {display: block;position: relative;transition-delay: 0s !important;opacity: 1 !important;}.icc-credits span {border-radius: 24px;cursor: pointer;display: inline-block;font-family: Arial, sans-serif;font-size: 12px;letter-spacing: 0;line-height: 1;position: relative;text-decoration: none;width: auto;}.icc-credits span a {display: inline-block;padding: 0.5em 0.375em;position: relative;text-decoration: none;transition: color 0.25s ease, transform 0.25s ease;z-index: 1;}.icc-credits span a:before {transition: opacity 0.25s ease;opacity: 1;content: '( ';}.icc-credits span a:after {transition: opacity 0.25s ease;opacity: 1;content: ' )';}.icc-credits span::after {transition: opacity 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;content: '';display: block;position: absolute;top: -1px;left: -1px;width: calc(100% + 2px);height: calc(100% + 2px);background-image: linear-gradient(30deg, #A464A1 15%, #3B5DAD 85%);opacity: 0;pointer-events: none;border-radius: inherit;box-shadow: 0 0.25em 1.25em 0 rgba(0,0,0,0.25);}.icc-credits span:hover {text-transform: none !important;}.icc-credits span:hover a {color: #ffffff !important;transform: scale(1.1) translateY(-0.05rem);}.icc-credits span:hover a:before {opacity: 0;}.icc-credits span:hover a:after {opacity: 0;}.icc-credits span:hover::after {opacity: 1;transform: scale(1.1) translateY(-0.05rem);}#credits span {background-color: rgba(80,80,80,0.5);color: rgba(224,224,224,0.75);margin-top: 1.5rem !important;}#credits span a:before {opacity: 0;}#credits span a:after {opacity: 0;}#main > .inner > .full:nth-last-child(2) {border-bottom-left-radius: inherit;border-bottom-right-radius: inherit;}@media (max-width: 1680px) {html {font-size: 13pt;}}@media (max-width: 1280px) {html {font-size: 13pt;}}@media (max-width: 980px) {html {font-size: 11pt;}}@media (max-width: 736px) {html {font-size: 12pt;}#wrapper {padding: 0rem 0rem 0rem 0rem;}#main {border-radius: 0;}#main > .inner {padding: 2rem 2rem;}#main > .inner > * {margin-top: 0rem;margin-bottom: 0rem;}#main > .inner > .full {margin-left: calc(-2rem);width: calc(100% + 4rem + 0.4725px);max-width: calc(100% + 4rem + 0.4725px);}#main > .inner > .full:first-child {margin-top: -2rem !important;}#main > .inner > .full:last-child {margin-bottom: -2rem !important;}#main > .inner > .full.screen {margin-left: -50vw;}.image.style1:not(:first-child) {margin-top: 1.40625rem !important;}.image.style1:not(:last-child) {margin-bottom: 1.40625rem !important;}.image.style1 .frame {width: 8rem;}#text01 {letter-spacing: 0rem;width: 100%;font-size: 2.25em;line-height: 1.375;}h1.style3, h2.style3, h3.style3, p.style3 {letter-spacing: 0rem;width: 100%;font-size: 1em;line-height: 1.75;}.buttons.style1 li a {font-size: 1.125em;letter-spacing: 0rem;}.buttons.style1 li a svg {width: 1.75em;}.container.style2 > .wrapper > .inner {padding: 2rem 2rem;}.container.style2 > .wrapper {max-width: 100%;}.container.style2.default > .wrapper > .inner > * {margin-top: 1.5rem;margin-bottom: 1.5rem;}.container.style2.columns > .wrapper > .inner {flex-direction: column !important;flex-wrap: nowrap !important;}.container.style2.columns > .wrapper > .inner > span {display: none;}.container.style2.columns > .wrapper > .inner > * > * {margin-top: 1.5rem;margin-bottom: 1.5rem;}.container.style2.columns > .wrapper > .inner > * {padding: 1.5rem 0 !important;}.container.style2.columns > .wrapper > .inner > *:first-child {margin-left: 0 !important;padding-top: 0 !important;}.container.style2.columns > .wrapper > .inner > *:last-child {padding-bottom: 0 !important;}.container.style2.columns > .wrapper > .inner > div.after-spacer {padding-top: 0 !important;}.container.style2.columns > .wrapper > .inner > div.before-spacer {padding-bottom: 0 !important;}.container.style2.default > .wrapper > .inner > .full {margin-left: calc(-2rem);width: calc(100% + 4rem + 0.4725px);}.container.style2.default > .wrapper > .inner > .full:first-child {margin-top: -2rem !important;}.container.style2.default > .wrapper > .inner > .full:last-child {margin-bottom: -2rem !important;}.container.style2.columns > .wrapper > .inner > div > .full {margin-left: calc(-2rem);width: calc(100% + 4rem + 0.4725px);}.container.style2.columns > .wrapper > .inner > div:first-of-type > .full {margin-left: calc(-2rem);width: calc(100% + 4rem + 0.4725px);}.container.style2.columns > .wrapper > .inner > div:last-of-type > .full {margin-left: calc(-2rem);width: calc(100% + 4rem + 0.4725px);}.container.style2.columns > .wrapper > .inner > div > .full:first-child {margin-top: -1.5rem !important;}.container.style2.columns > .wrapper > .inner > div > .full:last-child {margin-bottom: -1.5rem !important;}.container.style2.columns > .wrapper > .inner > div:first-of-type > .full:first-child {margin-top: calc(-2rem) !important;}.container.style2.columns > .wrapper > .inner > div:last-of-type > .full:last-child {margin-bottom: calc(-2rem) !important;}.container.style2.columns > .wrapper > .inner > div:first-of-type, .container.style2.columns > .wrapper > .inner > div:first-of-type > .full:first-child {border-top-left-radius: inherit;border-top-right-radius: inherit;}.container.style2.columns > .wrapper > .inner > div:last-of-type, .container.style2.columns > .wrapper > .inner > div:last-of-type > .full:last-child {border-bottom-left-radius: inherit;border-bottom-right-radius: inherit;}.container.style2.columns > .wrapper > .inner > div:first-of-type, .container.style2.columns > .wrapper > .inner > div:first-of-type > .full:last-child {border-bottom-left-radius: 0 !important;}.container.style2.columns > .wrapper > .inner > div:last-of-type, .container.style2.columns > .wrapper > .inner > div:last-of-type > .full:first-child {border-top-right-radius: 0 !important;}.container.style2.columns > .wrapper > .inner > .full > .full:first-child:last-child {height: auto;}.container.style2.columns > .wrapper > .inner > .full > .full:first-child:last-child > * {position: relative;width: 100%;height: auto;}.container.style2.columns > .wrapper > .inner > .full > .full:first-child:last-child > * > * {height: auto;}.container.style2.columns > .wrapper > .inner > .full > .full:first-child:last-child > * > iframe {height: 100%;}.container.style1 > .wrapper > .inner {text-align: center !important;padding: 2rem 1.75rem;}.container.style1 > .wrapper > .inner h1, .container.style1 > .wrapper > .inner h2, .container.style1 > .wrapper > .inner h3, .container.style1 > .wrapper > .inner p {text-align: inherit !important;}.container.style1 > .wrapper {max-width: 100%;}.container.style1.default > .wrapper > .inner > * {margin-top: 0.25rem;margin-bottom: 0.25rem;}.container.style1.columns > .wrapper > .inner > * > * {margin-top: 0.25rem;margin-bottom: 0.25rem;}.container.style1.columns > .wrapper > .inner > * {padding: 0 0 0 1rem;}.container.style1.columns > .wrapper > .inner > *:first-child {margin-left: -1rem;}.container.style1.default > .wrapper > .inner > .full {margin-left: calc(-1.75rem);width: calc(100% + 3.5rem + 0.4725px);}.container.style1.default > .wrapper > .inner > .full:first-child {margin-top: -2rem !important;}.container.style1.default > .wrapper > .inner > .full:last-child {margin-bottom: -2rem !important;}.container.style1.columns > .wrapper > .inner > div > .full {margin-left: calc(-0.5rem);width: calc(100% + 1rem + 0.4725px);}.container.style1.columns > .wrapper > .inner > div:first-child > .full {margin-left: calc(-1.75rem);width: calc(100% + 2.25rem + 0.4725px);}.container.style1.columns > .wrapper > .inner > div:last-child > .full {width: calc(100% + 2.25rem + 0.4725px);}.container.style1.columns > .wrapper > .inner > div > .full:first-child {margin-top: calc(-2rem) !important;}.container.style1.columns > .wrapper > .inner > div > .full:last-child {margin-bottom: calc(-2rem) !important;}.container.style1.columns > .wrapper > .inner > .full > .full:first-child:last-child {height: calc(100% + 4rem);}#container02 > .wrapper > .inner > :nth-child(1) {width: calc(33.33333% + 0.33rem);}#container02 > .wrapper > .inner > :nth-child(2) {width: calc(33.33333% + 0.33rem);}#container02 > .wrapper > .inner > :nth-child(3) {width: calc(33.33333% + 0.33rem);}.icons.style1 {font-size: 1.75em;width: calc(100% + 1.625rem);margin-left: -0.8125rem;}.icons.style1 li {margin: 0.8125rem;}}@media (max-width: 480px) {#wrapper {padding: 0rem 0rem 0rem 0rem;}#main > .inner > * {margin-top: 0rem;margin-bottom: 0rem;}.buttons.style1 li a {width: 100%;max-width: 32rem;}.container.style2.default > .wrapper > .inner > * {margin-top: 1.3125rem;margin-bottom: 1.3125rem;}.container.style2.columns > .wrapper > .inner > * > * {margin-top: 1.3125rem;margin-bottom: 1.3125rem;}.container.style1.default > .wrapper > .inner > * {margin-top: 0.21875rem;margin-bottom: 0.21875rem;}.container.style1.columns > .wrapper > .inner > * > * {margin-top: 0.21875rem;margin-bottom: 0.21875rem;}}@media (max-width: 360px) {#wrapper {padding: 0rem 0rem 0rem 0rem;}#main > .inner {padding: 1.5rem 1.5rem;}#main > .inner > * {margin-top: 0rem;margin-bottom: 0rem;}#main > .inner > .full {margin-left: calc(-1.5rem);width: calc(100% + 3rem + 0.4725px);max-width: calc(100% + 3rem + 0.4725px);}#main > .inner > .full:first-child {margin-top: -1.5rem !important;}#main > .inner > .full:last-child {margin-bottom: -1.5rem !important;}#main > .inner > .full.screen {margin-left: -50vw;}#text01 {font-size: 2.25em;}h1.style3, h2.style3, h3.style3, p.style3 {font-size: 1em;}.buttons.style1 {padding: 0.46875rem 0;}.buttons.style1 li {margin: 0.9375rem 0;}.container.style2 > .wrapper > .inner {padding: 1.5rem 1.5rem;}.container.style2.default > .wrapper > .inner > * {margin-top: 1.125rem;margin-bottom: 1.125rem;}.container.style2.columns > .wrapper > .inner > * > * {margin-top: 1.125rem;margin-bottom: 1.125rem;}.container.style2.default > .wrapper > .inner > .full {margin-left: calc(-1.5rem);width: calc(100% + 3rem + 0.4725px);}.container.style2.default > .wrapper > .inner > .full:first-child {margin-top: -1.5rem !important;}.container.style2.default > .wrapper > .inner > .full:last-child {margin-bottom: -1.5rem !important;}.container.style2.columns > .wrapper > .inner > div > .full {margin-left: calc(-1.5rem);width: calc(100% + 3rem + 0.4725px);}.container.style2.columns > .wrapper > .inner > div:first-of-type > .full {margin-left: calc(-1.5rem);width: calc(100% + 3rem + 0.4725px);}.container.style2.columns > .wrapper > .inner > div:last-of-type > .full {margin-left: calc(-1.5rem);width: calc(100% + 3rem + 0.4725px);}.container.style2.columns > .wrapper > .inner > div > .full:first-child {margin-top: -1.5rem !important;}.container.style2.columns > .wrapper > .inner > div > .full:last-child {margin-bottom: -1.5rem !important;}.container.style2.columns > .wrapper > .inner > div:first-of-type > .full:first-child {margin-top: calc(-1.5rem) !important;}.container.style2.columns > .wrapper > .inner > div:last-of-type > .full:last-child {margin-bottom: calc(-1.5rem) !important;}.container.style1 > .wrapper > .inner {padding: 1.5rem 1.3125rem;}.container.style1.default > .wrapper > .inner > * {margin-top: 0.1875rem;margin-bottom: 0.1875rem;}.container.style1.columns > .wrapper > .inner > * > * {margin-top: 0.1875rem;margin-bottom: 0.1875rem;}.container.style1.default > .wrapper > .inner > .full {margin-left: calc(-1.3125rem);width: calc(100% + 2.625rem + 0.4725px);}.container.style1.default > .wrapper > .inner > .full:first-child {margin-top: -1.5rem !important;}.container.style1.default > .wrapper > .inner > .full:last-child {margin-bottom: -1.5rem !important;}.container.style1.columns > .wrapper > .inner > div > .full {margin-left: calc(-0.5rem);width: calc(100% + 1rem + 0.4725px);}.container.style1.columns > .wrapper > .inner > div:first-child > .full {margin-left: calc(-1.3125rem);width: calc(100% + 1.8125rem + 0.4725px);}.container.style1.columns > .wrapper > .inner > div:last-child > .full {width: calc(100% + 1.8125rem + 0.4725px);}.container.style1.columns > .wrapper > .inner > div > .full:first-child {margin-top: calc(-1.5rem) !important;}.container.style1.columns > .wrapper > .inner > div > .full:last-child {margin-bottom: calc(-1.5rem) !important;}.container.style1.columns > .wrapper > .inner > .full > .full:first-child:last-child {height: calc(100% + 3rem);}.icons.style1 {width: calc(100% + 1.21875rem);margin-left: -0.609375rem;}.icons.style1 li {margin: 0.609375rem;}}"
    }}
  />
  <noscript>
    &lt;style&gt;body {"{"}overflow: auto !important;{"}"}body:after {"{"}
    display: none !important;{"}"}#main &gt; .inner {"{"}opacity: 1.0
    !important;{"}"}#main {"{"}opacity: 1.0 !important;transform: none
    !important;transition: none !important;filter: none !important;{"}"}
    &lt;/style&gt;
  </noscript>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 40 40"
    display="none"
    width={0}
    height={0}
  >
    <symbol id="icon-901" viewBox="0 0 40 40">
      <path d="M34.9,30.5V15.6c-0.4,0.4-0.8,0.9-1.4,1.2c-3.4,2.7-6.2,4.8-8.2,6.6c-0.6,0.5-1.1,0.9-1.6,1.2c-0.4,0.3-0.9,0.6-1.7,0.9 c-0.7,0.3-1.4,0.5-2,0.5l0,0c-0.6,0-1.2-0.2-2-0.5c-0.7-0.3-1.2-0.6-1.7-0.9c-0.4-0.3-0.9-0.7-1.6-1.2c-2.1-1.7-4.8-3.8-8.2-6.6 c-0.5-0.4-0.9-0.8-1.4-1.2v14.9c0,0.2,0.1,0.3,0.2,0.4C5.7,31,5.9,31.1,6,31.1h28.4c0.2,0,0.3-0.1,0.4-0.2 C34.8,30.8,34.9,30.7,34.9,30.5L34.9,30.5z M34.9,10.2V9.7c0,0,0-0.1,0-0.2c0-0.1,0-0.2-0.1-0.2c-0.1,0-0.1,0-0.1-0.2 c0-0.1-0.1-0.2-0.2-0.1c-0.1,0-0.2,0-0.3,0H5.8C5.6,8.9,5.4,9,5.3,9.1C5.2,9.2,5.1,9.3,5.1,9.5c0,2.2,0.9,4,2.8,5.5 c2.5,2,5.1,4,7.7,6.1c0.1,0.1,0.3,0.2,0.7,0.5c0.4,0.3,0.6,0.5,0.9,0.7c0.2,0.2,0.5,0.4,0.8,0.6c0.3,0.2,0.7,0.4,0.9,0.5 c0.3,0.1,0.6,0.2,0.8,0.2l0,0c0.2,0,0.5-0.1,0.8-0.2c0.3-0.1,0.6-0.3,0.9-0.5c0.3-0.2,0.6-0.4,0.8-0.6c0.2-0.2,0.5-0.4,0.9-0.7 c0.4-0.3,0.6-0.5,0.6-0.5c2.7-2.1,5.3-4.2,7.7-6.1c0.7-0.5,1.4-1.2,2-2.2C34.6,11.8,34.9,11,34.9,10.2L34.9,10.2z M37.3,9.5v21 c0,0.8-0.3,1.6-0.9,2.2s-1.4,0.9-2.2,0.9H5.8c-0.8,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.4-0.9-2.2v-21c0-0.8,0.3-1.6,0.9-2.2 s1.4-0.9,2.2-0.9h28.4c0.8,0,1.6,0.3,2.2,0.9S37.3,8.7,37.3,9.5z" />
    </symbol>
    <symbol id="icon-93f" viewBox="0 0 40 40">
      <path d="M33.2,8.3c-2.5-1.1-5.1-1.9-7.9-2.4c-0.3,0.6-0.7,1.4-1,2c-2.9-0.4-5.8-0.4-8.7,0c-0.3-0.6-0.7-1.4-1-2 c-2.8,0.5-5.4,1.3-7.9,2.4c-5,7.2-6.3,14.2-5.6,21.1c3.3,2.3,6.5,3.8,9.6,4.7c0.8-1,1.5-2.1,2.1-3.3c-1.1-0.4-2.2-0.9-3.2-1.5 c0.3-0.2,0.5-0.4,0.8-0.6c6.3,2.8,13,2.8,19.2,0c0.3,0.2,0.5,0.4,0.8,0.6c-1,0.6-2.1,1.1-3.2,1.5c0.6,1.1,1.3,2.2,2.1,3.3 c3.1-0.9,6.3-2.4,9.6-4.7C39.7,21.4,37.5,14.4,33.2,8.3z M13.7,25.1c-1.9,0-3.4-1.7-3.4-3.7s1.5-3.7,3.4-3.7c1.9,0,3.5,1.7,3.4,3.7 C17.1,23.4,15.6,25.1,13.7,25.1z M26.3,25.1c-1.9,0-3.4-1.7-3.4-3.7s1.5-3.7,3.4-3.7c1.9,0,3.5,1.7,3.4,3.7 C29.7,23.4,28.2,25.1,26.3,25.1z" />
    </symbol>
    <symbol id="icon-907" viewBox="0 0 40 40">
      <path d="M36,20.3c0,3.5-1,6.6-3.1,9.4c-2,2.8-4.7,4.7-7.9,5.8c-0.4,0.1-0.6,0-0.8-0.1c-0.2-0.2-0.3-0.4-0.3-0.6v-4.4 c0-1.3-0.4-2.3-1.1-3c0.8-0.1,1.5-0.2,2.1-0.4c0.6-0.2,1.3-0.4,2-0.8c0.7-0.4,1.2-0.8,1.7-1.4c0.5-0.5,0.8-1.3,1.1-2.2 s0.4-2,0.4-3.1c0-1.7-0.5-3.1-1.6-4.3c0.5-1.3,0.5-2.7-0.2-4.2c-0.4-0.1-1,0-1.7,0.2c-0.7,0.3-1.4,0.6-1.9,0.9L24,12.5 c-1.3-0.4-2.6-0.5-4-0.5s-2.7,0.2-4,0.5c-0.2-0.2-0.5-0.3-0.9-0.6c-0.4-0.2-0.9-0.5-1.7-0.8c-0.8-0.3-1.4-0.4-1.8-0.3 c-0.6,1.6-0.7,3-0.1,4.2c-1.1,1.2-1.6,2.6-1.6,4.3c0,1.2,0.1,2.2,0.4,3.1s0.6,1.6,1.1,2.2s1,1,1.7,1.4c0.7,0.4,1.3,0.6,2,0.8 c0.6,0.2,1.3,0.3,2.1,0.4c-0.6,0.5-0.9,1.2-1,2.1c-0.3,0.1-0.6,0.2-0.9,0.3c-0.3,0.1-0.7,0.1-1.2,0.1c-0.5,0-0.9-0.1-1.4-0.4 c-0.5-0.3-0.8-0.7-1.2-1.3c-0.3-0.4-0.6-0.8-1-1.1c-0.4-0.3-0.8-0.4-1-0.5L9,26.5c-0.3,0-0.5,0-0.6,0.1c-0.1,0.1-0.1,0.1-0.1,0.2 c0,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.2,0.2,0.3,0.2l0.1,0.1c0.3,0.1,0.6,0.4,0.9,0.8s0.5,0.7,0.7,1.1l0.2,0.5c0.2,0.5,0.5,1,0.9,1.3 c0.4,0.3,0.9,0.5,1.4,0.6c0.5,0.1,1,0.1,1.4,0.1c0.5,0,0.9,0,1.2-0.1l0.5-0.1c0,0.5,0,1.1,0,1.9c0,0.7,0,1.1,0,1.1 c0,0.2-0.1,0.5-0.3,0.6c-0.2,0.2-0.5,0.2-0.8,0.1c-3.2-1.1-5.8-3-7.9-5.8S4,23.8,4,20.3c0-2.9,0.7-5.6,2.1-8S9.5,7.8,12,6.4 s5.1-2.1,8-2.1s5.6,0.7,8,2.1s4.4,3.4,5.8,5.8S36,17.4,36,20.3L36,20.3z" />
    </symbol>
    <symbol id="icon-93c" viewBox="0 0 40 40">
      <path d="M37.3,18.9c0,0.7-0.2,1.4-0.6,2c-0.4,0.6-0.9,1.1-1.5,1.4c0.2,0.6,0.2,1.2,0.2,1.9c0,2-0.7,3.8-2.1,5.5 c-1.4,1.7-3.2,3-5.6,4s-4.9,1.5-7.7,1.5c-2.8,0-5.4-0.5-7.7-1.5s-4.2-2.3-5.6-4c-1.4-1.7-2.1-3.6-2.1-5.5c0-0.6,0.1-1.2,0.2-1.8 c-0.7-0.3-1.2-0.8-1.6-1.4c-0.4-0.6-0.6-1.3-0.6-2.1c0-1.1,0.4-2,1.1-2.7c0.7-0.8,1.7-1.1,2.7-1.1c1.1,0,2,0.4,2.8,1.2 c2.8-2,6.1-3,10-3.1l2.2-10.1c0-0.2,0.1-0.3,0.3-0.4c0.2-0.1,0.3-0.1,0.5-0.1l7.1,1.6c0.2-0.5,0.6-0.9,1-1.2c0.5-0.3,1-0.4,1.5-0.4 c0.8,0,1.5,0.3,2,0.8c0.6,0.6,0.9,1.2,0.9,2c0,0.8-0.3,1.5-0.9,2c-0.6,0.6-1.3,0.9-2,0.9c-0.8,0-1.5-0.3-2-0.8s-0.8-1.2-0.8-2 L22.7,4l-2,9.1c3.9,0.1,7.2,1.1,10,3.1c0.7-0.8,1.7-1.2,2.8-1.2c1.1,0,2,0.4,2.7,1.1C36.9,16.9,37.3,17.9,37.3,18.9L37.3,18.9z M10.7,22.8c0,0.8,0.3,1.5,0.8,2c0.6,0.6,1.2,0.9,2,0.9c0.8,0,1.5-0.3,2-0.9c0.6-0.6,0.9-1.3,0.9-2c0-0.8-0.3-1.5-0.9-2 c-0.6-0.6-1.3-0.8-2-0.8c-0.8,0-1.5,0.3-2,0.9C11,21.3,10.7,22,10.7,22.8z M26.4,29.6c0.1-0.1,0.2-0.3,0.2-0.5 c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.3-0.2-0.5-0.2c-0.2,0-0.4,0.1-0.5,0.2c-0.5,0.5-1.3,0.9-2.3,1.2c-1,0.3-2.1,0.4-3.1,0.4 c-1,0-2.1-0.1-3.1-0.4c-1-0.3-1.8-0.7-2.3-1.2c-0.1-0.1-0.3-0.2-0.5-0.2c-0.2,0-0.4,0.1-0.5,0.2c-0.1,0.1-0.2,0.3-0.2,0.5 c0,0.2,0.1,0.4,0.2,0.5c0.6,0.6,1.3,1,2.3,1.3c1,0.3,1.8,0.5,2.4,0.6c0.6,0.1,1.2,0.1,1.8,0.1s1.2,0,1.8-0.1 c0.6-0.1,1.4-0.2,2.4-0.6C25.1,30.6,25.8,30.2,26.4,29.6L26.4,29.6z M26.3,25.7c0.8,0,1.5-0.3,2-0.9c0.6-0.6,0.8-1.3,0.8-2 c0-0.8-0.3-1.5-0.9-2c-0.6-0.6-1.2-0.9-2-0.9c-0.8,0-1.5,0.3-2,0.8s-0.9,1.2-0.9,2c0,0.8,0.3,1.5,0.9,2 C24.9,25.4,25.5,25.7,26.3,25.7z" />
    </symbol>
  </svg>
  <div id="wrapper">
    <div id="main">
      <div className="inner">
        <div id="container03" className="style2 container default full">
          <div className="wrapper">
            <div className="inner">
              <div id="image01" className="style1 image">
                <span className="frame">
                  <img src="https://cdn.glitch.me/92605e1f-dc5c-4bc1-b02f-3a158cfa7e03/fbef5733-9b3d-4806-8973-f6eebb1aa4d6.image.png" alt />
                </span>
              </div>
              <h1 id="text01">Ashley</h1>
              <p id="text07" className="style3">
                <span>An trans developer from der türkei</span>
                <br /> <span>she/her</span>
                <br /> <span>🇨🇭/🇹🇷</span>
              </p>
              <ul id="buttons02" className="style1 buttons">
                <li>
                  <a
                    href="mailto:%69%61%6d%61%73%68%6c%65%79%40%64%75%63%6b%2e%63%6f%6d"
                    className="button n01"
                  >
                    <svg>
                      <use xlinkHref="#icon-901" />
                    </svg>
                    <span className="label">Email</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="container02" className="style1 container columns full">
          <div className="wrapper">
            <div className="inner">
              <div>
                <ul id="icons01" className="style1 icons">
                  <li>
                    <a className="n01" href="https://github.com/iamashley0">
                      <svg>
                        <use xlinkHref="#icon-907" />
                      </svg>
                      <span className="label">GitHub</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul id="icons02" className="style1 icons">
                  <li>
                    <a
                      className="n01"
                      href="https://discord.com/users/396571938081865741"
                    >
                      <svg>
                        <use xlinkHref="#icon-93f" />
                      </svg>
                      <span className="label">Discord</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul id="icons03" className="style1 icons">
                  <li>
                    <a
                      className="n01"
                      href="https://www.reddit.com/user/Ash_Potter"
                    >
                      <svg>
                        <use xlinkHref="#icon-93c" />
                      </svg>
                      <span className="label">Reddit</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="credits" className="icc-credits">
          <span>
           </span>
        </div>
      </div>
    </div>
  </div>
  
</>

);
    
}
