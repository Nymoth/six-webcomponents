import{_ as a,o as e,c as s,X as n}from"./chunks/framework.f9831273.js";const y=JSON.parse('{"title":"Introduction","description":"","frontmatter":{},"headers":[],"relativePath":"guide/readme.md","filePath":"guide/readme.md"}'),o={name:"guide/readme.md"},t=n(`<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><p>The Web Components Library is an <strong>in-house open source</strong> project for developing modern web applications that follow the SIX corporate styling guidelines.</p><p>The technology stack is based on web standards and best practices. Moreover, we try to keep it as simple as possible for our developers. For those reasons we decided to use <a href="https://en.wikipedia.org/wiki/Web_Components" target="_blank" rel="noreferrer">Web Components</a>, which are supported by all modern browsers. The project fully supports <a href="https://www.typescriptlang.org" target="_blank" rel="noreferrer">TypeScript</a>.</p><h2 id="add-the-components-to-your-project" tabindex="-1">Add the Components to your Project <a class="header-anchor" href="#add-the-components-to-your-project" aria-label="Permalink to &quot;Add the Components to your Project&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@six-group/ui-library</span></span></code></pre></div><p>For detailed instructions tailored to specific frameworks, consult the respective guides:</p><ul><li><a href="./angular.html">Angular</a></li><li><a href="./react.html">React</a></li></ul><h2 id="contribute" tabindex="-1">Contribute <a class="header-anchor" href="#contribute" aria-label="Permalink to &quot;Contribute&quot;">​</a></h2><p>If you come across a bug or if something isn&#39;t functioning as expected, feel free to raise a <a href="https://github.com/six-group/six-webcomponents/issues" target="_blank" rel="noreferrer">Github Issue</a></p><h3 id="get-the-sources" tabindex="-1">Get the Sources <a class="header-anchor" href="#get-the-sources" aria-label="Permalink to &quot;Get the Sources&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/six-group/six-webcomponents.git</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">six-webcomponents</span></span></code></pre></div><h3 id="preview-changes" tabindex="-1">Preview Changes <a class="header-anchor" href="#preview-changes" aria-label="Permalink to &quot;Preview Changes&quot;">​</a></h3><p>Run the following in the cloned git repository:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span></span></code></pre></div><p>The last command will open a browser window at <a href="http://localhost:3333/" target="_blank" rel="noreferrer">http://localhost:3333/</a> with a preview of all components.</p><h3 id="preview-angular-demo" tabindex="-1">Preview Angular Demo <a class="header-anchor" href="#preview-angular-demo" aria-label="Permalink to &quot;Preview Angular Demo&quot;">​</a></h3><p>Run the following in the root of the cloned git repository:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">watch</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">watch:angular</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># wait a moment util the above are ready, then:</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">demo:angular</span></span></code></pre></div><p>The demo app at <a href="http://localhost:4200" target="_blank" rel="noreferrer">http://localhost:4200</a> automatically update whenever changes are made to the ui-library, the Angular library, or the demo code.</p><h3 id="preview-react-demo" tabindex="-1">Preview React Demo <a class="header-anchor" href="#preview-react-demo" aria-label="Permalink to &quot;Preview React Demo&quot;">​</a></h3><p>Run the following in the root of the cloned git repository:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">watch</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">watch:react</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># wait a moment util the above are ready, then:</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">demo:react</span></span></code></pre></div><p>The demo app at <a href="http://localhost:3000" target="_blank" rel="noreferrer">http://localhost:3000</a> automatically update whenever changes are made to the ui-library, the React library, or the demo code.</p>`,23),l=[t];function r(p,c,i,h,d,u){return e(),s("div",null,l)}const m=a(o,[["render",r]]);export{y as __pageData,m as default};