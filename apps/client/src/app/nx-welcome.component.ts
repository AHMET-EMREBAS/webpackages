import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!--
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     This is a starter component and can be deleted.
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     Delete this file and get started with your project!
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     -->
    <style>
      html {
        -webkit-text-size-adjust: 100%;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
          'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
          'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
          'Noto Color Emoji';
        line-height: 1.5;
        tab-size: 4;
        scroll-behavior: smooth;
      }
      body {
        font-family: inherit;
        line-height: inherit;
        margin: 0;
      }
      h1,
      h2,
      p,
      pre {
        margin: 0;
      }
      *,
      ::before,
      ::after {
        box-sizing: border-box;
        border-width: 0;
        border-style: solid;
        border-color: currentColor;
      }
      h1,
      h2 {
        font-size: inherit;
        font-weight: inherit;
      }
      a {
        color: inherit;
        text-decoration: inherit;
      }
      pre {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
      }
      svg {
        display: block;
        vertical-align: middle;
      }
      svg {
        shape-rendering: auto;
        text-rendering: optimizeLegibility;
      }
      pre {
        background-color: rgba(55, 65, 81, 1);
        border-radius: 0.25rem;
        color: rgba(229, 231, 235, 1);
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        overflow: scroll;
        padding: 0.5rem 0.75rem;
      }
      .shadow {
        box-shadow: 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }
      .rounded {
        border-radius: 1.5rem;
      }
      .wrapper {
        width: 100%;
      }
      .container {
        margin-left: auto;
        margin-right: auto;
        max-width: 768px;
        padding-bottom: 3rem;
        padding-left: 1rem;
        padding-right: 1rem;
        color: rgba(55, 65, 81, 1);
        width: 100%;
      }
      #welcome {
        margin-top: 2.5rem;
      }
      #welcome h1 {
        font-size: 3rem;
        font-weight: 500;
        letter-spacing: -0.025em;
        line-height: 1;
      }
      #welcome span {
        display: block;
        font-size: 1.875rem;
        font-weight: 300;
        line-height: 2.25rem;
        margin-bottom: 0.5rem;
      }
      #hero {
        align-items: center;
        /* background-color: hsla(214, 62%, 21%, 1);
        background-color: ; */
        border: none;
        box-sizing: border-box;
        color: rgba(55, 65, 81, 1);
        display: grid;
        grid-template-columns: 1fr;
        margin-top: 3.5rem;
      }
      #hero .text-container {
        color: rgba(255, 255, 255, 1);
        padding: 3rem 2rem;
      }
      #hero .text-container h2 {
        font-size: 1.5rem;
        line-height: 2rem;
        position: relative;
      }
      #hero .text-container h2 svg {
        color: hsla(162, 47%, 50%, 1);
        height: 2rem;
        left: -0.25rem;
        position: absolute;
        top: 0;
        width: 2rem;
      }
      #hero .text-container h2 span {
        margin-left: 2.5rem;
      }
      #hero .text-container a {
        background-color: rgba(255, 255, 255, 1);
        border-radius: 0.75rem;
        color: rgba(55, 65, 81, 1);
        display: inline-block;
        margin-top: 1.5rem;
        padding: 1rem 2rem;
        text-decoration: inherit;
      }
      #hero .logo-container {
        display: none;
        justify-content: center;
        padding-left: 2rem;
        padding-right: 2rem;
      }
      #hero .logo-container svg {
        color: rgba(255, 255, 255, 1);
        width: 66.666667%;
      }
      #middle-content {
        align-items: flex-start;
        display: grid;
        gap: 4rem;
        grid-template-columns: 1fr;
        margin-top: 3.5rem;
      }
      #learning-materials {
        padding: 2.5rem 2rem;
      }
      #learning-materials h2 {
        font-weight: 500;
        font-size: 1.25rem;
        letter-spacing: -0.025em;
        line-height: 1.75rem;
        padding-left: 1rem;
        padding-right: 1rem;
      }
      .list-item-link {
        align-items: center;
        border-radius: 0.75rem;
        display: flex;
        margin-top: 1rem;
        padding: 1rem;
        transition-property: background-color, border-color, color, fill, stroke,
          opacity, box-shadow, transform, filter, backdrop-filter,
          -webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        width: 100%;
      }
      .list-item-link svg:first-child {
        margin-right: 1rem;
        height: 1.5rem;
        transition-property: background-color, border-color, color, fill, stroke,
          opacity, box-shadow, transform, filter, backdrop-filter,
          -webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        width: 1.5rem;
      }
      .list-item-link > span {
        flex-grow: 1;
        font-weight: 400;
        transition-property: background-color, border-color, color, fill, stroke,
          opacity, box-shadow, transform, filter, backdrop-filter,
          -webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
      }
      .list-item-link > span > span {
        color: rgba(107, 114, 128, 1);
        display: block;
        flex-grow: 1;
        font-size: 0.75rem;
        font-weight: 300;
        line-height: 1rem;
        transition-property: background-color, border-color, color, fill, stroke,
          opacity, box-shadow, transform, filter, backdrop-filter,
          -webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
      }
      .list-item-link svg:last-child {
        height: 1rem;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        width: 1rem;
      }
      .list-item-link:hover {
        color: rgba(255, 255, 255, 1);
        background-color: hsla(162, 47%, 50%, 1);
      }
      .list-item-link:hover > span {
      }
      .list-item-link:hover > span > span {
        color: rgba(243, 244, 246, 1);
      }
      .list-item-link:hover svg:last-child {
        transform: translateX(0.25rem);
      }
      #other-links {
      }
      .button-pill {
        padding: 1.5rem 2rem;
        margin-bottom: 2rem;
        transition-duration: 300ms;
        transition-property: background-color, border-color, color, fill, stroke,
          opacity, box-shadow, transform, filter, backdrop-filter,
          -webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        align-items: center;
        display: flex;
      }
      .button-pill svg {
        transition-property: background-color, border-color, color, fill, stroke,
          opacity, box-shadow, transform, filter, backdrop-filter,
          -webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        flex-shrink: 0;
        width: 3rem;
      }
      .button-pill > span {
        letter-spacing: -0.025em;
        font-weight: 400;
        font-size: 1.125rem;
        line-height: 1.75rem;
        padding-left: 1rem;
        padding-right: 1rem;
      }
      .button-pill span span {
        display: block;
        font-size: 0.875rem;
        font-weight: 300;
        line-height: 1.25rem;
      }
      .button-pill:hover svg,
      .button-pill:hover {
        color: rgba(255, 255, 255, 1) !important;
      }
      .nx-console:hover {
        background-color: rgba(0, 122, 204, 1);
      }
      .nx-console svg {
        color: rgba(0, 122, 204, 1);
      }
      .nx-console-jetbrains {
        margin-top: 2rem;
      }
      .nx-console-jetbrains:hover {
        background-color: rgba(255, 49, 140, 1);
      }
      .nx-console-jetbrains svg {
        color: rgba(255, 49, 140, 1);
      }
      #nx-repo:hover {
        background-color: rgba(24, 23, 23, 1);
      }
      #nx-repo svg {
        color: rgba(24, 23, 23, 1);
      }
      #nx-cloud {
        margin-bottom: 2rem;
        margin-top: 2rem;
        padding: 2.5rem 2rem;
      }
      #nx-cloud > div {
        align-items: center;
        display: flex;
      }
      #nx-cloud > div svg {
        border-radius: 0.375rem;
        flex-shrink: 0;
        width: 3rem;
      }
      #nx-cloud > div h2 {
        font-size: 1.125rem;
        font-weight: 400;
        letter-spacing: -0.025em;
        line-height: 1.75rem;
        padding-left: 1rem;
        padding-right: 1rem;
      }
      #nx-cloud > div h2 span {
        display: block;
        font-size: 0.875rem;
        font-weight: 300;
        line-height: 1.25rem;
      }
      #nx-cloud p {
        font-size: 1rem;
        line-height: 1.5rem;
        margin-top: 1rem;
      }
      #nx-cloud pre {
        margin-top: 1rem;
      }
      #nx-cloud a {
        color: rgba(107, 114, 128, 1);
        display: block;
        font-size: 0.875rem;
        line-height: 1.25rem;
        margin-top: 1.5rem;
        text-align: right;
      }
      #nx-cloud a:hover {
        text-decoration: underline;
      }
      #commands {
        padding: 2.5rem 2rem;
        margin-top: 3.5rem;
      }
      #commands h2 {
        font-size: 1.25rem;
        font-weight: 400;
        letter-spacing: -0.025em;
        line-height: 1.75rem;
        padding-left: 1rem;
        padding-right: 1rem;
      }
      #commands p {
        font-size: 1rem;
        font-weight: 300;
        line-height: 1.5rem;
        margin-top: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
      }
      details {
        align-items: center;
        display: flex;
        margin-top: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        width: 100%;
      }
      details pre > span {
        color: rgba(181, 181, 181, 1);
      }
      summary {
        border-radius: 0.5rem;
        display: flex;
        font-weight: 400;
        padding: 0.5rem;
        cursor: pointer;
        transition-property: background-color, border-color, color, fill, stroke,
          opacity, box-shadow, transform, filter, backdrop-filter,
          -webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
      }
      summary:hover {
        background-color: rgba(243, 244, 246, 1);
      }
      summary svg {
        height: 1.5rem;
        margin-right: 1rem;
        width: 1.5rem;
      }
      #love {
        color: rgba(107, 114, 128, 1);
        font-size: 0.875rem;
        line-height: 1.25rem;
        margin-top: 3.5rem;
        opacity: 0.6;
        text-align: center;
      }
      #love svg {
        color: rgba(252, 165, 165, 1);
        width: 1.25rem;
        height: 1.25rem;
        display: inline;
        margin-top: -0.25rem;
      }
      @media screen and (min-width: 768px) {
        #hero {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        #hero .logo-container {
          display: flex;
        }
        #middle-content {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }
    </style>
    <div class="wrapper">
      <div class="container">
        <!--  WELCOME  -->
        <div id="welcome">
          <h1 class="text-gray-600">
            <span> Hello there, Welcome 👋</span>
          </h1>
          <span
            class="text-gray-500 font-extralight border-b-4 border-b-slate-400 pb-6 "
          >
            Business Management Suite
          </span>
        </div>
        <!--  HERO  -->
        <div id="hero" class="rounded bg-slate-700">
          <div class="text-container">
            <h2>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <span>You&apos;re up and running</span>
            </h2>

            <a [routerLink]="['auth', 'login']"> Login </a>
          </div>
          <div class="logo-container">
            <!-- <svg
              fill="currentColor"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.987 14.138l-3.132 4.923-5.193-8.427-.012 8.822H0V4.544h3.691l5.247 8.833.005-3.998 3.044 4.759zm.601-5.761c.024-.048 0-3.784.008-3.833h-3.65c.002.059-.005 3.776-.003 3.833h3.645zm5.634 4.134a2.061 2.061 0 0 0-1.969 1.336 1.963 1.963 0 0 1 2.343-.739c.396.161.917.422 1.33.283a2.1 2.1 0 0 0-1.704-.88zm3.39 1.061c-.375-.13-.8-.277-1.109-.681-.06-.08-.116-.17-.176-.265a2.143 2.143 0 0 0-.533-.642c-.294-.216-.68-.322-1.18-.322a2.482 2.482 0 0 0-2.294 1.536 2.325 2.325 0 0 1 4.002.388.75.75 0 0 0 .836.334c.493-.105.46.36 1.203.518v-.133c-.003-.446-.246-.55-.75-.733zm2.024 1.266a.723.723 0 0 0 .347-.638c-.01-2.957-2.41-5.487-5.37-5.487a5.364 5.364 0 0 0-4.487 2.418c-.01-.026-1.522-2.39-1.538-2.418H8.943l3.463 5.423-3.379 5.32h3.54l1.54-2.366 1.568 2.366h3.541l-3.21-5.052a.7.7 0 0 1-.084-.32 2.69 2.69 0 0 1 2.69-2.691h.001c1.488 0 1.736.89 2.057 1.308.634.826 1.9.464 1.9 1.541a.707.707 0 0 0 1.066.596zm.35.133c-.173.372-.56.338-.755.639-.176.271.114.412.114.412s.337.156.538-.311c.104-.231.14-.488.103-.74z"
              />
            </svg> -->

            <img src="/icons/icon-384x384.png" alt="App Logo" />
          </div>
        </div>
        <!--  MIDDLE CONTENT  -->
        <div id="middle-content">
          <div id="learning-materials" class="rounded shadow">
            <h2>Learning materials</h2>
            <a
              [routerLink]="['documentation']"
              target="_blank"
              rel="noreferrer"
              class="list-item-link"
            >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span>
                Documentation
                <span> Everything is in there </span>
              </span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <a [routerLink]="['blogs']" rel="noreferrer" class="list-item-link">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              <span>
                Blog
                <span> Changelog, features & events </span>
              </span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@midtronix/videos?utm_source=nx-project&sub_confirmation=1"
              target="_blank"
              rel="noreferrer"
              class="list-item-link"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>YouTube</title>
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                />
              </svg>
              <span>
                YouTube channel
                <span> MidTronix Show, talks & tutorials </span>
              </span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <a
              [routerLink]="['interactive-tutorial']"
              target="_blank"
              rel="noreferrer"
              class="list-item-link"
            >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              </svg>
              <span>
                Interactive tutorials
                <span> Create an app, step-by-step </span>
              </span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <a
              [routerLink]="['video-tutorial']"
              target="_blank"
              rel="noreferrer"
              class="list-item-link"
            >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <span>
                Video courses
                <span> Nx custom courses </span>
              </span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
          <div id="other-links">
            <a
              class="button-pill rounded shadow nx-console"
              [routerLink]="['install-application']"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./icons/icon-72x72.png" alt="App Logo" />
              <!-- <svg
                fill="currentColor"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Visual Studio Code</title>
                <path
                  d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"
                />
              </svg> -->
              <span>
                Install Application
                <span>Business Management Suite</span>
              </span>
            </a>
            <!-- <a
              class="button-pill rounded shadow nx-console-jetbrains"
              href="https://plugins.jetbrains.com/plugin/21060-nx-console"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                height="48"
                width="48"
                viewBox="20 20 60 60"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m22.5 22.5h60v60h-60z" />
                <g fill="#fff">
                  <path d="m29.03 71.25h22.5v3.75h-22.5z" />
                  <path
                    d="m28.09 38 1.67-1.58a1.88 1.88 0 0 0 1.47.87c.64 0 1.06-.44 1.06-1.31v-5.98h2.58v6a3.48 3.48 0 0 1 -.87 2.6 3.56 3.56 0 0 1 -2.57.95 3.84 3.84 0 0 1 -3.34-1.55z"
                  />
                  <path
                    d="m36 30h7.53v2.19h-5v1.44h4.49v2h-4.42v1.49h5v2.21h-7.6z"
                  />
                  <path d="m47.23 32.29h-2.8v-2.29h8.21v2.27h-2.81v7.1h-2.6z" />
                  <path
                    d="m29.13 43.08h4.42a3.53 3.53 0 0 1 2.55.83 2.09 2.09 0 0 1 .6 1.53 2.16 2.16 0 0 1 -1.44 2.09 2.27 2.27 0 0 1 1.86 2.29c0 1.61-1.31 2.59-3.55 2.59h-4.44zm5 2.89c0-.52-.42-.8-1.18-.8h-1.29v1.64h1.24c.79 0 1.25-.26 1.25-.81zm-.9 2.66h-1.57v1.73h1.62c.8 0 1.24-.31 1.24-.86 0-.5-.4-.87-1.27-.87z"
                  />
                  <path
                    d="m38 43.08h4.1a4.19 4.19 0 0 1 3 1 2.93 2.93 0 0 1 .9 2.19 3 3 0 0 1 -1.93 2.89l2.24 3.27h-3l-1.88-2.84h-.87v2.84h-2.56zm4 4.5c.87 0 1.39-.43 1.39-1.11 0-.75-.54-1.12-1.4-1.12h-1.44v2.26z"
                  />
                  <path
                    d="m49.59 43h2.5l4 9.44h-2.79l-.67-1.69h-3.63l-.67 1.69h-2.71zm2.27 5.73-1-2.65-1.06 2.65z"
                  />
                  <path d="m56.46 43.05h2.6v9.37h-2.6z" />
                  <path
                    d="m60.06 43.05h2.42l3.37 5v-5h2.57v9.37h-2.26l-3.53-5.14v5.14h-2.57z"
                  />
                  <path
                    d="m68.86 51 1.45-1.73a4.84 4.84 0 0 0 3 1.13c.71 0 1.08-.24 1.08-.65 0-.4-.31-.6-1.59-.91-2-.46-3.53-1-3.53-2.93 0-1.74 1.37-3 3.62-3a5.89 5.89 0 0 1 3.86 1.25l-1.26 1.84a4.63 4.63 0 0 0 -2.62-.92c-.63 0-.94.25-.94.6 0 .42.32.61 1.63.91 2.14.46 3.44 1.16 3.44 2.91 0 1.91-1.51 3-3.79 3a6.58 6.58 0 0 1 -4.35-1.5z"
                  />
                </g>
              </svg>
              <span>
                Install Nx Console for JetBrains
                <span
                  >Available for WebStorm, Intellij IDEA Ultimate and
                  more!</span
                >
              </span>
            </a> -->
            <!-- <div id="nx-cloud" class="rounded shadow">
              <div>
                <svg
                  id="nx-cloud-logo"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  fill="transparent"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-width="2"
                    d="M23 3.75V6.5c-3.036 0-5.5 2.464-5.5 5.5s-2.464 5.5-5.5 5.5-5.5 2.464-5.5 5.5H3.75C2.232 23 1 21.768 1 20.25V3.75C1 2.232 2.232 1 3.75 1h16.5C21.768 1 23 2.232 23 3.75Z"
                  />
                  <path
                    stroke-width="2"
                    d="M23 6v14.1667C23 21.7307 21.7307 23 20.1667 23H6c0-3.128 2.53867-5.6667 5.6667-5.6667 3.128 0 5.6666-2.5386 5.6666-5.6666C17.3333 8.53867 19.872 6 23 6Z"
                  />
                </svg>
                <h2>
                  Nx Cloud
                  <span> Enable faster CI & better DX </span>
                </h2>
              </div>
              <p>
                You can activate distributed tasks executions and caching by
                running:
              </p>
              <pre>nx connect</pre>
              <a
                href="https://nx.app/?utm_source=nx-project"
                target="_blank"
                rel="noreferrer"
              >
                What is Nx Cloud?
              </a>
            </div> -->
            <a
              id="nx-repo"
              class="button-pill rounded shadow"
              href="https://github.com/midtronix/midtronix"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                fill="currentColor"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
              <span>
                Open Source Projects
                <span> Sharing is caring </span>
              </span>
            </a>
          </div>
        </div>
        <!--  COMMANDS  -->
        <div id="commands" class="rounded shadow">
          <h2>Applications</h2>
          <p>Here are some things you can manage with BMS</p>
          <details>
            <summary>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Inventory Management
            </summary>
            <pre><span># Generate UI lib</span>
nx g &#64;nx/angular:lib ui
<span># Add a component</span>
nx g &#64;nx/angular:component ui/src/lib/button</pre>
          </details>
          <details>
            <summary>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              View project details
            </summary>
            <pre>nx show project client --web</pre>
          </details>
          <details>
            <summary>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              View interactive project graph
            </summary>
            <pre>nx graph</pre>
          </details>
          <details>
            <summary>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Run affected commands
            </summary>
            <pre><span># see what&apos;s been affected by changes</span>
nx affected:graph
<span># run tests for current changes</span>
nx affected:test
<span># run e2e tests for current changes</span>
nx affected:e2e</pre>
          </details>
        </div>

        <div
          class="rounded shadow opacity-80 hover:bg-slate-700 mt-11 cursor-pointer transition-colors"
        >
          <svg
            width="722px"
            height="83px"
            viewBox="0 0 722 83"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                gradientUnits="objectBoundingBox"
                x1="0"
                y1="0.5"
                x2="0.99999994"
                y2="0.5"
                id="gradient_1"
              >
                <stop offset="0%" stop-color="#0D61A9" />
                <stop offset="100%" stop-color="#16528C" />
              </linearGradient>
              <linearGradient
                gradientUnits="objectBoundingBox"
                x1="0.32779005"
                y1="-0.06843781"
                x2="0.80208623"
                y2="1.090878"
                id="gradient_2"
              >
                <stop offset="0%" stop-color="#F09701" />
                <stop offset="100%" stop-color="#E36001" />
              </linearGradient>
              <linearGradient
                gradientUnits="objectBoundingBox"
                x1="0.4999919"
                y1="-0.007848829"
                x2="0.4999919"
                y2="1.0121732"
                id="gradient_3"
              >
                <stop offset="0%" stop-color="#C391F7" />
                <stop offset="100%" stop-color="#B579F4" />
              </linearGradient>
              <linearGradient
                gradientUnits="objectBoundingBox"
                x1="0.019933343"
                y1="1.0682704"
                x2="1.1306667"
                y2="0.017020166"
                id="gradient_4"
              >
                <stop offset="1.9%" stop-color="#742FB6" />
                <stop offset="32%" stop-color="#702DB5" />
                <stop offset="36.399998%" stop-color="#5D2596" />
                <stop offset="38%" stop-color="#5D2596" />
                <stop offset="48%" stop-color="#5D2596" />
                <stop offset="48.5%" stop-color="#60279A" />
                <stop offset="51.7%" stop-color="#6F2DAB" />
                <stop offset="55.6%" stop-color="#7932B6" />
                <stop offset="61%" stop-color="#7E34BD" />
                <stop offset="76.200005%" stop-color="#8035BF" />
                <stop offset="80.6%" stop-color="#7D34BB" />
                <stop offset="85.1%" stop-color="#7530AE" />
                <stop offset="89.700005%" stop-color="#66299A" />
                <stop offset="94.3%" stop-color="#52207D" />
                <stop offset="96.3%" stop-color="#481B6E" />
              </linearGradient>
              <linearGradient
                gradientUnits="objectBoundingBox"
                x1="0.013500005"
                y1="0.42334202"
                x2="1.0628668"
                y2="0.5716522"
                id="gradient_5"
              >
                <stop offset="0.2%" stop-color="#9C55D4" />
                <stop offset="0.3%" stop-color="#9C55D4" />
                <stop offset="33.7%" stop-color="#9751D2" />
                <stop offset="73.69999%" stop-color="#8847CB" />
                <stop offset="84.799995%" stop-color="#8343C8" />
                <stop offset="89%" stop-color="#8042C3" />
                <stop offset="93.8%" stop-color="#773DB6" />
                <stop offset="98.79999%" stop-color="#68369F" />
                <stop offset="100%" stop-color="#643499" />
              </linearGradient>
              <linearGradient
                gradientUnits="objectBoundingBox"
                x1="0.50000006"
                y1="1.0237606"
                x2="0.50000006"
                y2="0.021003902"
                id="gradient_6"
              >
                <stop offset="0%" stop-color="#5C1D9C" />
                <stop offset="100%" stop-color="#561B90" />
              </linearGradient>
              <path d="M50 0L50 0L50 50L0 50L0 0L50 0Z" id="path_1" />
              <path d="M48 0L48 0L48 48L0 48L0 0L48 0Z" id="path_2" />
              <clipPath id="clip_1">
                <use
                  xlink:href="#path_1"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                />
              </clipPath>
              <clipPath id="clip_2">
                <use
                  xlink:href="#path_2"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                />
              </clipPath>
            </defs>
            <g id="Group-2">
              <path
                d="M714 0C718.419 0 722 3.58112 722 8L722 75C722 79.4189 718.419 83 714 83L8 83C3.58112 83 0 79.4189 0 75L0 8C0 3.58112 3.58112 0 8 0L714 0Z"
                id="Rectangle"
                fill="#E2E2E2"
                fill-opacity="0"
                stroke="none"
              />
              <g id="Group" transform="translate(15 16)">
                <g id="Git">
                  <path
                    d="M50 0L50 0L50 50L0 50L0 0L50 0Z"
                    id="Git"
                    fill="none"
                    stroke="none"
                  />
                  <path
                    d="M46.793 22.0898L27.9102 3.20703C27.1094 2.40234 26.0547 2 25 2C23.9453 2 22.8906 2.40234 22.0898 3.20703L18.3555 6.94141L22.9766 11.5625C24.5117 10.6602 26.5117 10.8555 27.8281 12.1719C29.1445 13.4883 29.3359 15.4883 28.4336 17.0195L32.9766 21.5625C34.5117 20.6602 36.5117 20.8555 37.8281 22.1719C39.3906 23.7344 39.3906 26.2656 37.8281 27.8281C36.2656 29.3906 33.7344 29.3906 32.1719 27.8281C30.8555 26.5117 30.6602 24.5117 31.5625 22.9766L27.0195 18.4336C26.6953 18.625 26.3555 18.7656 26 18.8555L26 31.1406C27.7227 31.5859 29 33.1367 29 35C29 37.2109 27.2109 39 25 39C22.7891 39 21 37.2109 21 35C21 33.1367 22.2773 31.5859 24 31.1406L24 18.8555C23.332 18.6836 22.6953 18.3516 22.1719 17.8281C20.8555 16.5117 20.6641 14.5117 21.5664 12.9805L16.9414 8.35547L3.20703 22.0898C1.59766 23.6953 1.59766 26.3047 3.20703 27.9102L22.0898 46.793C22.8906 47.5977 23.9453 48 25 48C26.0547 48 27.1094 47.5977 27.9102 46.793L46.793 27.9102C48.4023 26.3047 48.4023 23.6953 46.793 22.0898L46.793 22.0898Z"
                    id="Shape"
                    fill="#000000"
                    stroke="none"
                    clip-path="url(#clip_1)"
                  />
                </g>
                <g id="Angularjs">
                  <path
                    d="M48 0L48 0L48 48L0 48L0 0L48 0Z"
                    id="Angularjs"
                    fill="none"
                    stroke="none"
                    transform="translate(74 1)"
                  />
                  <path
                    d="M23.933 2L3 9.285L6.308 36.408L23.955 46L41.693 36.278L45 9.156L23.933 2Z"
                    id="Shape"
                    fill="#BDBDBD"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(74 1)"
                  />
                  <path
                    d="M42.818 10.527L24 4.135L24 43.695L39.832 35.017L42.818 10.527Z"
                    id="Shape"
                    fill="#B71C1C"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(74 1)"
                  />
                  <path
                    d="M23.941 4.115L5.181 10.644L8.168 35.143L23.951 43.721L24 43.695L24 4.135L23.941 4.115Z"
                    id="Shape"
                    fill="#DD2C00"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(74 1)"
                  />
                  <path
                    d="M24 5.996L24 15.504L32.578 34L36.987 34L24 5.996Z"
                    id="Shape"
                    fill="#BDBDBD"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(74 1)"
                  />
                  <path
                    d="M11.013 34L15.422 34L24 15.504L24 5.996L11.013 34Z"
                    id="Shape"
                    fill="#EEEEEE"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(74 1)"
                  />
                  <path
                    d="M24 24L30 24L30 28L24 28L24 24Z"
                    id="Shape"
                    fill="#BDBDBD"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(74 1)"
                  />
                  <path
                    d="M18 24L24 24L24 28L18 28L18 24Z"
                    id="Shape"
                    fill="#EEEEEE"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(74 1)"
                  />
                </g>
                <g id="Nestjs">
                  <path
                    d="M48 0L48 0L48 48L0 48L0 0L48 0Z"
                    id="Nestjs"
                    fill="none"
                    stroke="none"
                    transform="translate(146 1)"
                  />
                  <path
                    d="M24.58 32.88C24.58 32.88 24.53 32.84 24.48 32.76C24.58 32.84 24.58 32.88 24.58 32.88L24.58 32.88Z"
                    id="Shape"
                    fill="#F50057"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(146 1)"
                  />
                  <path
                    d="M27.375 8.625C27.375 8.625 27 7.25 27.5 6.125C28 5 28 4.25 27 3.125C29 3 29.75 4.375 29.75 4.375L29.775 4.534C29.893 5.3 29.497 6.028 28.829 6.422C28.219 6.781 27.563 7.437 27.375 8.625L27.375 8.625Z"
                    id="Shape"
                    fill="#F50057"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(146 1)"
                  />
                  <path
                    d="M41.63 36.24C41.65 36.03 41.97 33.2 41.25 31.88C39.75 36.12 38.25 40 33.88 42.75C34.5 41.5 35.5 39.5 36.5 36.5C33.5 40.5 27.5 44.5 23 44.75C26.04 43.07 27.75 40.91 28.5 39.5C28.5 39.5 26.75 40 24.62 40.25C27.5 38.5 29.5 35.38 28.5 30.5C26.5 36.75 23.75 38.75 20.12 39.12C16.5 39.5 13.25 37.62 13.25 37.62L14.5 37.5C14.5 37.5 11.25 35 12.38 31.75C12.43 31.59 12.49 31.44 12.56 31.3C13.38 29.48 16.17 30.4 15.88 32.37L15.88 32.38C15.88 32.38 16.75 34.75 19.12 34.12C19.88 32.88 20.38 31.62 20.38 31.62L20.75 33.25C20.75 33.25 22.5 32.5 22.5 31.12C24 31.69 24.38 32.4 24.47 32.71C24.21 31.31 21.95 21.68 9.98 21.82L7.89 23.76C7.75 23.89 7.53 23.78 7.55 23.6L7.71 22L7.85 21.86C7.81 21.87 7.76 21.86 7.72 21.86L7.71 22L6.89 22.76C6.75 22.89 6.53 22.78 6.55 22.6L6.65 21.58C4.91 20.84 4.75 18.88 4.75 18.88C4.75 18.88 2.58 18.27 3.5 15.5C4 14 5.2 13.85 5.71 13.97C6.36 14.12 7.03 14.13 7.65 13.88C8.55 13.52 9.7 12.83 10.5 11.5C12 9 14.25 8 19.12 8C25.57 8 28.17 9.98 28.47 10.22C28.29 10.01 27.2 8.56 29.5 6.38C31.77 4.22 31.36 3.71 31.27 3.63C31.61 3.73 36.02 5.23 36.5 11C37 17 30 18.25 30 18.25C30 18.25 39 20 39.12 11.5C40.88 12.5 44.5 16.25 45 24.38C45.49 32.26 41.84 36.03 41.63 36.24L41.63 36.24Z"
                    id="Shape"
                    fill="#F50057"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(146 1)"
                  />
                  <path
                    d="M7.85 21.86L7.71 22L7.72 21.86C7.76 21.86 7.81 21.87 7.85 21.86L7.85 21.86Z"
                    id="Shape"
                    fill="#F50057"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(146 1)"
                  />
                  <path
                    d="M7.85 21.86L7.71 22L7.72 21.86C7.76 21.86 7.81 21.87 7.85 21.86L7.85 21.86Z"
                    id="Shape"
                    fill="#F50057"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(146 1)"
                  />
                </g>
                <g id="Typescript">
                  <path
                    d="M48 0L48 0L48 48L0 48L0 0L48 0Z"
                    id="Typescript"
                    fill="none"
                    stroke="none"
                    transform="translate(218 1)"
                  />
                  <path
                    d="M40 6L8 6C6.895 6 6 6.895 6 8L6 40C6 41.105 6.895 42 8 42L40 42C41.105 42 42 41.105 42 40L42 8C42 6.895 41.105 6 40 6L40 6Z"
                    id="Shape"
                    fill="url(#gradient_1)"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(218 1)"
                  />
                  <path
                    d="M38.819 30.606C38.005 29.541 36.92 28.923 35.868 28.415C35.549 28.261 35.229 28.11 34.909 27.959C34.244 27.646 33.556 27.322 32.907 26.976C32.422 26.717 32.525 26.467 32.58 26.332C32.632 26.205 32.844 26.116 33.096 26.116C33.171 26.116 33.248 26.124 33.324 26.138C33.608 26.191 34.14 26.645 34.418 27.071L34.69 27.487L34.961 27.903L35.379 27.634L35.797 27.365C35.879 27.312 37.822 26.063 38.556 25.531L38.86 25.311L39.164 25.091L39.038 24.738L38.912 24.385C38.863 24.247 37.648 21.005 32.691 21.005L32.685 21.005C31.074 21.047 29.713 21.608 28.619 22.674C28.389 22.899 28.185 23.15 28.002 23.419L28.002 22L28.002 21.5L28.002 21L27.502 21L27 21L14 21L13.5 21L13 21L13 21.5L13 22L13 25.034L13 25.534L13 26.034L13.5 26.034L14 26.034L17.972 26.034L17.972 38.972L17.972 39.472L17.972 39.972L18.472 39.972L18.972 39.972L21.965 39.972L22.463 39.972L22.961 39.972L22.963 39.474L22.965 38.976L23.014 26.034L27 26.034L27.074 26.034C27.051 26.272 27.036 26.513 27.041 26.757C27.072 28.33 27.705 29.786 28.778 30.751C29.504 31.404 30.343 31.865 31.155 32.311L31.369 32.429C31.91 32.728 32.465 32.99 33.001 33.244C33.427 33.446 33.842 33.642 34.248 33.855C34.399 33.934 34.459 34.038 34.453 34.213C34.446 34.449 34.354 34.578 34.127 34.674C33.779 34.821 33.44 34.895 33.118 34.895C32.634 34.895 32.164 34.724 31.719 34.386C31.481 34.205 31.248 33.931 31 33.64C30.859 33.475 30.716 33.308 30.564 33.143L30.291 32.849L30.018 32.555L29.672 32.757L29.326 32.959C28.457 33.466 26.482 34.655 26.482 34.655L26.06 34.909L25.638 35.163L25.886 35.589L26.134 36.015C26.847 37.238 27.845 38.302 28.805 38.863C30.136 39.641 31.59 40.035 33.127 40.035C33.964 40.035 34.842 39.917 35.737 39.685C37.669 39.184 39.069 37.934 39.679 36.165C40.321 34.311 39.983 32.128 38.819 30.606L38.819 30.606Z"
                    id="Shape"
                    fill="#000000"
                    fill-opacity="0.05"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(218 1)"
                  />
                  <path
                    d="M32.69 21.505L32.684 21.505L32.677 21.505C31.216 21.543 29.968 22.057 28.967 23.032C28.033 23.943 27.513 25.296 27.542 26.747C27.571 28.183 28.143 29.507 29.113 30.38C29.796 30.994 30.61 31.442 31.397 31.874L31.611 31.992C32.139 32.283 32.686 32.543 33.216 32.794C33.641 32.995 34.066 33.196 34.481 33.414C34.802 33.582 34.966 33.865 34.954 34.231C34.94 34.661 34.728 34.966 34.323 35.137C33.913 35.31 33.509 35.397 33.12 35.397C32.525 35.397 31.952 35.191 31.418 34.786C31.137 34.573 30.886 34.278 30.621 33.966C30.485 33.807 30.347 33.644 30.199 33.485L29.926 33.191L29.58 33.393C28.713 33.899 26.742 35.086 26.742 35.086L26.32 35.34L26.568 35.766C27.239 36.918 28.17 37.915 29.059 38.434C30.313 39.166 31.682 39.538 33.129 39.538C33.924 39.538 34.759 39.426 35.613 39.204C37.377 38.746 38.654 37.61 39.208 36.005C39.795 34.303 39.487 32.304 38.422 30.911C37.672 29.929 36.647 29.348 35.651 28.866C35.334 28.713 35.015 28.562 34.696 28.412C34.025 28.096 33.331 27.769 32.671 27.417C32.101 27.113 31.904 26.661 32.116 26.143C32.249 25.818 32.624 25.616 33.095 25.616C33.2 25.616 33.308 25.626 33.416 25.647C33.887 25.735 34.52 26.314 34.836 26.799L35.107 27.215L35.525 26.946C35.607 26.893 37.544 25.647 38.262 25.128L38.566 24.908L38.44 24.555C38.396 24.429 37.299 21.505 32.69 21.505L32.69 21.505L32.69 21.505Z"
                    id="Shape"
                    fill="#000000"
                    fill-opacity="0.05"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(218 1)"
                  />
                  <path
                    d="M27.5 21.5L27 21.5L14 21.5L13.5 21.5L13.5 22L13.5 25.034L13.5 25.534L14 25.534L18.472 25.534L18.472 38.972L18.472 39.472L18.972 39.472L21.965 39.472L22.463 39.472L22.465 38.974L22.516 25.534L27 25.534L27.5 25.534L27.5 25.034L27.5 22L27.5 21.5L27.5 21.5L27.5 21.5Z"
                    id="Shape"
                    fill="#000000"
                    fill-opacity="0.05"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(218 1)"
                  />
                  <path
                    d="M29.832 33.824C30.282 34.309 30.641 34.822 31.116 35.183C32.147 35.967 33.313 36.104 34.517 35.596C35.096 35.352 35.434 34.88 35.454 34.246C35.472 33.686 35.202 33.227 34.713 32.97C33.771 32.476 32.783 32.067 31.852 31.553C31.018 31.093 30.147 30.637 29.447 30.007C27.592 28.337 27.596 25.065 29.315 23.39C30.25 22.479 31.379 22.039 32.689 22.005C36.999 22.005 37.968 24.721 37.968 24.721C37.253 25.238 35.254 26.524 35.254 26.524C34.896 25.975 34.164 25.278 33.507 25.154C32.681 24.999 31.914 25.313 31.652 25.952C31.35 26.689 31.612 27.418 32.434 27.857C33.413 28.379 34.431 28.83 35.431 29.314C36.411 29.788 37.349 30.332 38.023 31.213C39.727 33.442 39.388 37.707 35.486 38.719C33.353 39.272 31.268 39.146 29.309 38.001C28.386 37.462 27.526 36.42 26.998 35.513C27 35.513 28.967 34.329 29.832 33.824L29.832 33.824Z"
                    id="Shape"
                    fill="#FFFFFF"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(218 1)"
                  />
                  <path
                    d="M14 22C14 22 14 25.034 14 25.034C14 25.034 18.972 25.034 18.972 25.034C18.972 25.034 18.972 38.972 18.972 38.972C18.972 38.972 21.965 38.972 21.965 38.972C21.965 38.972 22.018 25.034 22.018 25.034C22.018 25.034 27 25.034 27 25.034C27 25.034 27 22 27 22C27 22 14 22 14 22Z"
                    id="Polygon"
                    fill="#FFFFFF"
                    fill-rule="evenodd"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(218 1)"
                  />
                </g>
                <g id="Javascript">
                  <path
                    d="M48 0L48 0L48 48L0 48L0 0L48 0Z"
                    id="Javascript"
                    fill="none"
                    stroke="none"
                    transform="translate(290 1)"
                  />
                  <path
                    d="M0 42L0 6L36 6L36 42L0 42L0 42Z"
                    id="Shape"
                    fill="#F7DF1E"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(290 1)"
                  />
                  <path
                    d="M23.538 32.947C24.23 34.071 24.982 35.148 26.575 35.148C27.913 35.148 28.615 34.483 28.615 33.563C28.615 32.462 27.889 32.071 26.417 31.43L25.61 31.086C23.281 30.098 21.732 28.86 21.732 26.245C21.732 23.835 23.577 22.001 26.46 22.001C28.513 22.001 29.988 22.712 31.052 24.574L28.538 26.181C27.985 25.193 27.387 24.804 26.46 24.804C25.514 24.804 24.915 25.401 24.915 26.181C24.915 27.145 25.515 27.535 26.9 28.132L27.707 28.476C30.452 29.645 32 30.839 32 33.523C32 36.415 29.716 38 26.65 38C23.651 38 21.948 36.495 21 34.632L23.538 32.947L23.538 32.947ZM11.952 33.029C12.458 33.935 13.227 34.632 14.333 34.632C15.391 34.632 16 34.214 16 32.589L16 22L19.333 22L19.333 33.101C19.333 36.468 17.38 38 14.528 38C11.951 38 10.091 36.254 9.33301 34.632L11.952 33.029L11.952 33.029Z"
                    id="Shape"
                    fill="#000001"
                    fill-rule="evenodd"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(290 1)"
                  />
                </g>
                <g id="CSS3">
                  <path
                    d="M48 0L48 0L48 48L0 48L0 0L48 0Z"
                    id="CSS3"
                    fill="none"
                    stroke="none"
                    transform="translate(362 1)"
                  />
                  <path
                    d="M41 5L7 5L10 39L24 43L38 39L41 5L41 5L41 5Z"
                    id="Shape"
                    fill="#0277BD"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(362 1)"
                  />
                  <path
                    d="M24 8L24 39.9L35.2 36.7L37.7 8L24 8Z"
                    id="Shape"
                    fill="#039BE5"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(362 1)"
                  />
                  <path
                    d="M33.1 13L24 13L24 17L28.9 17L28.6 21L24 21L24 25L28.4 25L28.1 29.5L24 30.9L24 35.1L31.9 32.5L32.6 21L32.6 21L33.1 13Z"
                    id="Shape"
                    fill="#FFFFFF"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(362 1)"
                  />
                  <path
                    d="M24 13L24 17L15.1 17L14.8 13L24 13L24 13ZM19.4 21L19.6 25L24 25L24 21L19.4 21L19.4 21ZM19.8 27L15.8 27L16.1 32.5L24 35.1L24 30.9L19.9 29.5L19.8 27L19.8 27Z"
                    id="Shape"
                    fill="#EEEEEE"
                    fill-rule="evenodd"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(362 1)"
                  />
                </g>
                <g id="Sass Avatar">
                  <path
                    d="M48 0L48 0L48 48L0 48L0 0L48 0Z"
                    id="Sass-Avatar"
                    fill="none"
                    stroke="none"
                    transform="translate(434 1)"
                  />
                  <path
                    d="M24.042 4.032C35.065 4.032 44 12.967 44 23.99C44 35.012 35.065 43.948 24.042 43.948C13.02 43.948 4.084 35.013 4.084 23.99C4.085 12.967 13.02 4.032 24.042 4.032L24.042 4.032L24.042 4.032Z"
                    id="Shape"
                    fill="#F06292"
                    fill-rule="evenodd"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(434 1)"
                  />
                  <path
                    d="M36.561 12.574C35.657 9.029 29.78 7.864 24.218 9.84C20.908 11.016 17.324 12.862 14.747 15.272C11.683 18.138 11.195 20.632 11.396 21.674C12.106 25.351 17.145 27.755 19.216 29.539L19.216 29.55C18.605 29.851 14.135 32.113 13.089 34.426C11.985 36.866 13.265 38.617 14.112 38.853C16.737 39.583 19.43 38.27 20.878 36.111C22.275 34.027 22.159 31.337 21.552 29.998C22.389 29.777 23.366 29.678 24.606 29.823C28.107 30.232 28.794 32.418 28.662 33.333C28.531 34.248 27.796 34.751 27.551 34.903C27.305 35.055 27.231 35.108 27.251 35.22C27.281 35.384 27.394 35.378 27.604 35.343C27.892 35.294 29.442 34.599 29.509 32.91C29.593 30.766 27.539 28.368 23.901 28.43C22.403 28.456 21.461 28.598 20.78 28.852C20.73 28.795 20.678 28.738 20.626 28.681C18.377 26.281 14.219 24.584 14.395 21.358C14.459 20.185 14.867 17.097 22.384 13.351C28.542 10.282 33.472 11.127 34.324 12.998C35.541 15.672 31.689 20.641 25.294 21.358C22.857 21.631 21.574 20.687 21.255 20.335C20.919 19.965 20.869 19.948 20.744 20.018C20.54 20.131 20.669 20.458 20.744 20.653C20.935 21.15 21.719 22.031 23.054 22.47C24.229 22.856 27.09 23.067 30.55 21.729C34.424 20.229 37.45 16.059 36.561 12.574L36.561 12.574ZM20.076 30.638C20.366 31.712 20.334 32.714 20.035 33.621C20.002 33.722 19.965 33.821 19.925 33.92C19.885 34.018 19.842 34.116 19.796 34.212C19.565 34.692 19.254 35.141 18.874 35.556C17.714 36.821 16.094 37.299 15.4 36.896C14.65 36.461 15.026 34.678 16.37 33.256C17.816 31.727 19.897 30.744 19.897 30.744L19.894 30.738C19.954 30.705 20.015 30.672 20.076 30.638L20.076 30.638Z"
                    id="Shape"
                    fill="#FFFFFF"
                    fill-rule="evenodd"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(434 1)"
                  />
                </g>
                <g id="Html 5">
                  <path
                    d="M48 0L48 0L48 48L0 48L0 0L48 0Z"
                    id="Html-5"
                    fill="none"
                    stroke="none"
                    transform="translate(506 1)"
                  />
                  <path
                    d="M7.192 7.176L9.819 36.946C9.928 38.183 10.789 39.226 11.983 39.567L22.626 42.608C23.524 42.865 24.475 42.865 25.373 42.608L36.016 39.567C37.21 39.226 38.071 38.184 38.18 36.946L40.807 7.176C40.911 6.006 39.99 5 38.816 5L9.184 5C8.01 5 7.089 6.006 7.192 7.176L7.192 7.176Z"
                    id="Shape"
                    fill="url(#gradient_2)"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(506 1)"
                  />
                  <path
                    d="M24 8L24 39.9L33.876 37.078C34.673 36.85 35.247 36.154 35.319 35.329L37.605 9.087C37.656 8.502 37.196 8 36.609 8L24 8L24 8Z"
                    id="Shape"
                    fill="#F09601"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(506 1)"
                  />
                  <path
                    d="M24 25L24 21L32.6 21L31.9 32.5L24 35.1L24 30.9L28.1 29.5L28.4 25L24 25L24 25ZM32.9 17L33.2 13L24 13L24 17L32.9 17L32.9 17Z"
                    id="Shape"
                    fill="#FFFFFF"
                    fill-rule="evenodd"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(506 1)"
                  />
                  <path
                    d="M24 30.9L24 35.1L16.1 32.5L15.7 27L19.7 27L19.9 29.5L24 30.9L24 30.9ZM19.1 17L24 17L24 13L14.9 13L15.6 25L24 25L24 21L19.4 21L19.1 17L19.1 17Z"
                    id="Shape"
                    fill="#D6E0E9"
                    fill-rule="evenodd"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(506 1)"
                  />
                  <path
                    d="M33.2 13L32.9 17L24 17L19.1 17L19.4 21L24 21L32.6 21L31.9 32.5L24 35.1L16.1 32.5L15.7 27L19.7 27L19.9 29.5L24 30.9L28.1 29.5L28.4 25L24 25L15.6 25L14.9 13L24 13L33.2 13M34.278 12L33.2 12L24 12L14.9 12L13.84 12L13.902 13.058L14.602 25.058L14.657 26L14.625 26L14.703 27.073L15.103 32.573L15.152 33.241L15.788 33.45L23.688 36.05L24 36.153L24.313 36.05L32.213 33.45L32.857 33.238L32.898 32.561L33.598 21.061L33.663 20L32.6 20L24 20L20.328 20L20.178 18L24 18L32.9 18L33.828 18L33.897 17.075L34.197 13.075L34.278 12L34.278 12L34.278 12ZM20.623 26L24 26L27.331 26L27.146 28.769L24 29.843L20.844 28.766L20.696 26.92L20.623 26L20.623 26L20.623 26Z"
                    id="Shape"
                    fill="#000000"
                    fill-opacity="0.05"
                    fill-rule="evenodd"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(506 1)"
                  />
                  <path
                    d="M33.2 13L32.9 17L24 17L19.1 17L19.4 21L24 21L32.6 21L31.9 32.5L24 35.1L16.1 32.5L15.7 27L19.7 27L19.9 29.5L24 30.9L28.1 29.5L28.4 25L24 25L15.6 25L14.9 13L24 13L33.2 13M33.739 12.5L33.2 12.5L24 12.5L14.9 12.5L14.37 12.5L14.401 13.029L15.101 25.029L15.128 25.5L15.6 25.5L24 25.5L27.866 25.5L27.624 29.134L24 30.372L20.372 29.133L20.198 26.96L20.161 26.5L19.7 26.5L15.7 26.5L15.162 26.5L15.201 27.036L15.601 32.536L15.625 32.87L15.943 32.975L23.843 35.575L24 35.626L24.156 35.575L32.056 32.975L32.378 32.869L32.399 32.53L33.099 21.03L33.131 20.5L32.6 20.5L24 20.5L19.864 20.5L19.639 17.5L24 17.5L32.9 17.5L33.364 17.5L33.399 17.037L33.699 13.037L33.739 12.5L33.739 12.5L33.739 12.5Z"
                    id="Shape"
                    fill="#000000"
                    fill-opacity="0.07"
                    fill-rule="evenodd"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(506 1)"
                  />
                </g>
                <g id="Graphql">
                  <path
                    d="M48 0L48 0L48 48L0 48L0 0L48 0Z"
                    id="Graphql"
                    fill="none"
                    stroke="none"
                    transform="translate(578 1)"
                  />
                  <path
                    d="M24.5 44.661L7 34.32L7 13.68L24.5 3.339L42 13.68L42 34.32L24.5 44.661L24.5 44.661ZM9 33.18L24.5 42.339L40 33.18L40 14.82L24.5 5.661L9 14.82L9 33.18L9 33.18Z"
                    id="Shape"
                    fill="#E8457C"
                    fill-rule="evenodd"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(578 1)"
                  />
                  <path
                    d="M20.5 5C20.5 2.79086 22.2909 1 24.5 1C26.7091 1 28.5 2.79086 28.5 5C28.5 7.20914 26.7091 9 24.5 9C22.2909 9 20.5 7.20914 20.5 5Z"
                    id="Circle"
                    fill="#E8457C"
                    fill-rule="evenodd"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(578 1)"
                  />
                  <path
                    d="M20.5 43C20.5 40.7909 22.2909 39 24.5 39C26.7091 39 28.5 40.7909 28.5 43C28.5 45.2091 26.7091 47 24.5 47C22.2909 47 20.5 45.2091 20.5 43Z"
                    id="Circle"
                    fill="#E8457C"
                    fill-rule="evenodd"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(578 1)"
                  />
                  <path
                    d="M4.5 33C4.5 30.7909 6.29086 29 8.5 29C10.7091 29 12.5 30.7909 12.5 33C12.5 35.2091 10.7091 37 8.5 37C6.29086 37 4.5 35.2091 4.5 33Z"
                    id="Circle"
                    fill="#E8457C"
                    fill-rule="evenodd"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(578 1)"
                  />
                  <path
                    d="M36.5 33C36.5 30.7909 38.2909 29 40.5 29C42.7091 29 44.5 30.7909 44.5 33C44.5 35.2091 42.7091 37 40.5 37C38.2909 37 36.5 35.2091 36.5 33Z"
                    id="Circle"
                    fill="#E8457C"
                    fill-rule="evenodd"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(578 1)"
                  />
                  <path
                    d="M4.5 15C4.5 12.7909 6.29086 11 8.5 11C10.7091 11 12.5 12.7909 12.5 15C12.5 17.2091 10.7091 19 8.5 19C6.29086 19 4.5 17.2091 4.5 15Z"
                    id="Circle"
                    fill="#E8457C"
                    fill-rule="evenodd"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(578 1)"
                  />
                  <path
                    d="M36.5 15C36.5 12.7909 38.2909 11 40.5 11C42.7091 11 44.5 12.7909 44.5 15C44.5 17.2091 42.7091 19 40.5 19C38.2909 19 36.5 17.2091 36.5 15Z"
                    id="Circle"
                    fill="#E8457C"
                    fill-rule="evenodd"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(578 1)"
                  />
                  <path
                    d="M42.72 34.5L6.28 34.5L24.5 2.478L42.72 34.5L42.72 34.5ZM9.72 32.5L39.28 32.5L24.5 6.522L9.72 32.5L9.72 32.5Z"
                    id="Shape"
                    fill="#E8457C"
                    fill-rule="evenodd"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(578 1)"
                  />
                </g>
                <g id="Visual Studio">
                  <path
                    d="M48 0L48 0L48 48L0 48L0 0L48 0Z"
                    id="Visual-Studio"
                    fill="none"
                    stroke="none"
                    transform="translate(645 1)"
                  />
                  <path
                    d="M44 10.781L44 37.184C44 38.331 43.347 39.377 42.316 39.88C39.968 41.024 35.924 42.993 35.266 43.293C34.33 43.721 33.742 44 33.007 44C32.272 44 31.786 43.521 31.448 43.164C31.11 42.806 34 33 34 33L34 6.23C34 6.23 30.818 5.564 31.42 4.893C32.023 4.222 32.527 3.994 33.156 3.994C33.881 3.994 34.467 4.317 35.127 4.635C35.595 4.86 39.859 6.906 42.301 8.078C43.342 8.577 44 9.627 44 10.781L44 10.781Z"
                    id="Shape"
                    fill="url(#gradient_3)"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(645 1)"
                  />
                  <path
                    d="M4 32C4 33.928 4.261 34.214 6.134 35.028C7.59 35.661 8.17 36 8.559 36C9.028 36 9.469 35.677 9.886 35.336C10.303 34.995 34 15.525 34 15.525L34 5.546C34 4.348 32.326 3.87 31.533 4.768C31.533 4.768 6.742 32.299 6 33.012C5.258 33.725 5.767 31.119 4 32L4 32Z"
                    id="Shape"
                    fill="url(#gradient_4)"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(645 1)"
                  />
                  <path
                    d="M4.62 13.681C4.937 13.529 7.554 12.359 7.876 12.218C8.254 12.053 8.39 12 8.669 12C8.977 12 9.187 12.117 9.67 12.514C10.345 13.068 34 32.483 34 32.483L34 42.242C34 43.917 32.256 44.089 31.272 42.983C30.574 42.199 6.389 15.434 6.389 15.434C6.389 15.434 4 16.641 4 15.587C4 14.166 4.276 13.847 4.62 13.681L4.62 13.681Z"
                    id="Shape"
                    fill="url(#gradient_5)"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(645 1)"
                  />
                  <path
                    d="M9 18.323L9 29.735C9 29.735 6.27 32.734 5.66 33.394C5.118 33.981 4 33.797 4 32.148L4 15.428C4 14.177 5.131 14.05 6.098 15.105C6.273 15.296 9 18.323 9 18.323L9 18.323Z"
                    id="Shape"
                    fill="url(#gradient_6)"
                    stroke="none"
                    clip-path="url(#clip_2)"
                    transform="translate(645 1)"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>

        <p id="love">
          Carefully crafted with
          <svg
            fill="currentColor"
            stroke="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </p>
      </div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
