import{o as t,c as a,a as e}from"./app.e9f7bbae.js";const n='{"title":"Echart 图表组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"用法","slug":"用法"},{"level":2,"title":"Echart 属性","slug":"echart-属性"}],"relativePath":"components/echart.md","lastUpdated":1660354807683}',s={},o=e('<h1 id="echart-图表组件"><a class="header-anchor" href="#echart-图表组件" aria-hidden="true">#</a> Echart 图表组件</h1><p>对 <code>echarts</code> 进行封装，自适应窗口大小。</p><p>Echart 组件位于 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Echart" target="_blank" rel="noopener noreferrer">src/components/Echart</a> 内</p><h2 id="用法"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><p>只需传入对应的 <code>options</code> 和 <code>height</code> 即可展示图表。</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Echart</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pieOptions<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>300<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="echart-属性"><a class="header-anchor" href="#echart-属性" aria-hidden="true">#</a> Echart 属性</h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>options</td><td>echart 对应的配置项，<a href="https://echarts.apache.org/zh/option.html#title" target="_blank" rel="noopener noreferrer">详见</a></td><td><code>EChartsOption</code></td><td>-</td><td>[]</td></tr><tr><td>width</td><td>图表宽度</td><td><code>string</code>/<code>number</code></td><td>-</td><td>-</td></tr><tr><td>height</td><td>图表高度</td><td><code>string</code>/<code>number</code></td><td>-</td><td>500</td></tr></tbody></table>',8);s.render=function(e,n,s,p,c,r){return t(),a("div",null,[o])};export default s;export{n as __pageData};
