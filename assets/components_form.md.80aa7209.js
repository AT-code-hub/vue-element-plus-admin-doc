import{o as t,c as a,a as n}from"./app.044db66b.js";const s='{"title":"Form 表单组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"用法","slug":"用法"},{"level":3,"title":"refForm","slug":"refform"},{"level":3,"title":"useForm","slug":"useform"},{"level":2,"title":"Form 属性","slug":"form-属性"},{"level":3,"title":"Schema","slug":"schema"},{"level":3,"title":"ComponentProps","slug":"componentprops"},{"level":3,"title":"FormItemProps","slug":"formitemprops"},{"level":2,"title":"Form 方法","slug":"form-方法"},{"level":2,"title":"Form 插槽","slug":"form-插槽"},{"level":2,"title":"如何新增表单子组件","slug":"如何新增表单子组件"}],"relativePath":"components/form.md","lastUpdated":1660354773457}',e={},o=n('<h1 id="form-表单组件"><a class="header-anchor" href="#form-表单组件" aria-hidden="true">#</a> Form 表单组件</h1><p>对 <code>element-plus</code> 的 <code>Form</code> 组件进行封装，支持 <code>element-plus</code> 的所有表单组件，并额外扩展了一些功能。</p><p>Form 组件位于 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Form" target="_blank" rel="noopener noreferrer">src/components/Form</a> 内</p><h2 id="用法"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><h3 id="refform"><a class="header-anchor" href="#refform" aria-hidden="true">#</a> refForm</h3><p>refForm 的简单用法，如果想看更复杂点的例子，请<a href="https://element-plus-admin.cn/#/components/form/ref-form" target="_blank" rel="noopener noreferrer">在线预览</a></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Form <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/Form&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n\n<span class="token keyword">const</span> schema <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>FormSchema<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;field1&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>\n    component<span class="token operator">:</span> <span class="token string">&#39;Input&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span> <span class="token attr-name">:schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>schema<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h3 id="useform"><a class="header-anchor" href="#useform" aria-hidden="true">#</a> useForm</h3><p>除了使用 <code>refFrom</code> 的方式外，还可以使用 <code>useForm</code> 进行渲染，如果想看更复杂点的例子，请<a href="https://element-plus-admin.cn/#/components/form/use-form" target="_blank" rel="noopener noreferrer">在线预览</a></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Form <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/Form&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/web/useForm&#39;</span>\n\n<span class="token keyword">const</span> schema <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>FormSchema<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;field1&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>\n    component<span class="token operator">:</span> <span class="token string">&#39;Input&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> register <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  schema\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h4 id="参数介绍"><a class="header-anchor" href="#参数介绍" aria-hidden="true">#</a> 参数介绍</h4><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> register<span class="token punctuation">,</span> elFormRef<span class="token punctuation">,</span> methods <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useForm</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>\n</code></pre></div><p><strong>props</strong></p><p><a href="#Form">详见</a></p><p><strong>register</strong></p><p><code>register</code> 用于注册 <code>useForm</code>，如果需要使用 <code>useForm</code> 提供的 <code>api</code>，必须将 <code>register</code> 传入组件的 <code>onRegister</code></p><p><strong>elFormRef</strong></p><p>当前 <code>elForm</code> 实例，可使用所有 <code>elForm</code> 实例方法。</p><p><strong>methods</strong></p><table><thead><tr><th>方法名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>setValues</td><td>用于设置表单值</td><td>(data: Recordable) =&gt; void</td></tr><tr><td>setProps</td><td>用于设置表单属性</td><td>(props: Recordable) =&gt; void</td></tr><tr><td>delSchema</td><td>用于删除表单结构</td><td>(field: string) =&gt; void</td></tr><tr><td>addSchema</td><td>用于新增表单结构</td><td>(formSchema: FormSchema, index?: number) =&gt; void</td></tr><tr><td>setSchema</td><td>用于编辑表单结构</td><td>(schemaProps: FormSetPropsType[]) =&gt; void</td></tr><tr><td>getFormData</td><td>用于获取表单数据</td><td><code>&lt;T = Recordable&gt;() =&gt; Promise&lt;T&gt;</code></td></tr></tbody></table><h2 id="form-属性"><a class="header-anchor" href="#form-属性" aria-hidden="true">#</a> Form 属性<span id="Form"></span></h2><p>除以下参数外，还支持 <code>element-plus</code> 的 <code>Form</code> 所有属性，<a href="https://element-plus.org/zh-CN/component/form.html#form-%E5%B1%9E%E6%80%A7" target="_blank" rel="noopener noreferrer">详见</a></p><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>schema</td><td>生成 Form 的布局结构数组，<a href="#Schema">详见</a></td><td><code>FormSchema</code></td><td>-</td><td>[]</td></tr><tr><td>isCol</td><td>是否需要栅格布局</td><td><code>boolean</code></td><td>-</td><td>true</td></tr><tr><td>model</td><td>表单数据对象</td><td><code>Recordable</code></td><td>-</td><td>{}</td></tr><tr><td>autoSetPlaceholder</td><td>是否自动设置 placeholder</td><td><code>boolean</code></td><td>-</td><td>true</td></tr><tr><td>isCustom</td><td>是否自定义内容</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>labelWidth</td><td>表单 label 宽度</td><td><code>string</code>/<code>number</code></td><td>-</td><td>auto</td></tr></tbody></table><h3 id="schema"><a class="header-anchor" href="#schema" aria-hidden="true">#</a> Schema<span id="Schema"></span></h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>field</td><td>唯一值，必填项</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>label</td><td>标题</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>labelMessage (1.1.7新增)</td><td>表单项说明</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>colProps</td><td>element-plus 的 col 组件属性</td><td><code>ColProps</code></td><td>-</td><td>-</td></tr><tr><td>componentProps</td><td>表单组件子属性，<a href="#ComponentProps">详见</a></td><td><code>{ slots?: Recordable } &amp; ComponentProps</code></td><td>-</td><td>-</td></tr><tr><td>formItemProps</td><td>element-plus 的 form-item 组件属性，<a href="#FormItemProps">详见</a></td><td><code>FormItemProps</code></td><td>-</td><td>-</td></tr><tr><td>component</td><td>需要渲染的表单子组件</td><td><code>ComponentName</code></td><td>-</td><td>-</td></tr><tr><td>value</td><td>表单子组件初始值</td><td><code>FormValueType</code></td><td>-</td><td>-</td></tr><tr><td>hidden</td><td>表单子组件是否隐藏</td><td><code>boolean</code></td><td>-</td><td>-</td></tr><tr><td>api</td><td>加载 options 方法，只在 <code>useCrudSchema</code> 有效</td><td><code>&lt;T = any&gt;() =&gt; AxiosPromise&lt;T&gt;</code></td><td>-</td><td>-</td></tr></tbody></table><h3 id="componentprops"><a class="header-anchor" href="#componentprops" aria-hidden="true">#</a> ComponentProps<span id="ComponentProps"></span></h3><p>除以下属性外，还支持 <code>component</code> 对应的组件所有属性。</p><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>optionsAlias</td><td>options 别名</td><td><code>ComponentOptionsAlias</code></td><td>-</td><td>-</td></tr><tr><td>options</td><td>options 数据</td><td><code>ComponentOptions</code></td><td>-</td><td>-</td></tr><tr><td>optionsSlot</td><td>options 插槽</td><td><code>boolean</code></td><td>-</td><td>-</td></tr></tbody></table><h3 id="formitemprops"><a class="header-anchor" href="#formitemprops" aria-hidden="true">#</a> FormItemProps<span id="FormItemProps"></span></h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>labelWidth</td><td>标题的宽度</td><td><code>string</code>/<code>number</code></td><td>-</td><td>-</td></tr><tr><td>required</td><td>是否必填</td><td><code>boolean</code></td><td>-</td><td>-</td></tr><tr><td>rules</td><td>自定义表单验证</td><td><code>Recordable</code></td><td>-</td><td>-</td></tr><tr><td>error</td><td>验证不通过展示的提示</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>showMessage</td><td>验证不通过是否展示提示</td><td><code>boolean</code></td><td>-</td><td>-</td></tr><tr><td>inlineMessage</td><td>是否以行内形式展示验证提示</td><td><code>boolean</code></td><td>-</td><td>-</td></tr><tr><td>style</td><td>子表单项的样式</td><td><code>CSSProperties</code></td><td>-</td><td>-</td></tr></tbody></table><h2 id="form-方法"><a class="header-anchor" href="#form-方法" aria-hidden="true">#</a> Form 方法</h2><table><thead><tr><th>方法名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>setValues</td><td>用于设置表单值</td><td>(data: Recordable) =&gt; void</td></tr><tr><td>setProps</td><td>用于设置表单属性</td><td>(props: Recordable) =&gt; void</td></tr><tr><td>delSchema</td><td>用于删除表单结构</td><td>(field: string) =&gt; void</td></tr><tr><td>addSchema</td><td>用于新增表单结构</td><td>(formSchema: FormSchema, index?: number) =&gt; void</td></tr><tr><td>setSchema</td><td>用于编辑表单结构</td><td>(schemaProps: FormSetPropsType[]) =&gt; void</td></tr><tr><td>getElFormRef</td><td>用于获取 <code>element-plus</code> 的 <code>Form</code> 组件实例</td><td><code>() =&gt; ComponentRef&lt;typeof ElForm&gt;</code></td></tr></tbody></table><h2 id="form-插槽"><a class="header-anchor" href="#form-插槽" aria-hidden="true">#</a> Form 插槽</h2><table><thead><tr><th>插槽名</th><th>说明</th><th>子标签</th></tr></thead><tbody><tr><td>-</td><td>存放所有的 form-item 内容，或者其他标签内容</td><td>FormItem</td></tr><tr><td>${field}</td><td>form-item 的内容，可用于自定义表单项组件内容</td><td>-</td></tr><tr><td>${field}-label</td><td>form-item 标题上显示的自定义内容。</td><td>-</td></tr><tr><td>${field}-error</td><td>form-item 自定义内容以显示验证消息。</td><td>-</td></tr></tbody></table><h2 id="如何新增表单子组件"><a class="header-anchor" href="#如何新增表单子组件" aria-hidden="true">#</a> 如何新增表单子组件</h2><p>当项目中内置的表单组件不满足需求时，可以自行添加组件进去。</p><ol><li>在 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/types/componentType/form.d.ts" target="_blank" rel="noopener noreferrer">src/types/componentType/form.d.ts</a> 的 <code>ComponentName</code> 添加你组件名称。</li><li>在 <a href="https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/components/Form/src/componentMap.ts" target="_blank" rel="noopener noreferrer">src/components/Form/src/componentMap.ts</a> 引入你自己的组件，并在 <code>componentMap</code> 对象中添加键值对即可。</li></ol>',37);e.render=function(n,s,e,d,p,r){return t(),a("div",null,[o])};export default e;export{s as __pageData};
