import{j as n,a as t,F as r,S as s,s as a}from"./Select.stories-63536c00.js";import{M as c,C as h}from"./index-492c8ac7.js";import{u as l}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./isNativeReflectConstruct-a221c5d1.js";import"./index-d3ea75b5.js";import"./iframe-55482934.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";function o(i){const e=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",strong:"strong",code:"code"},l(),i.components);return t(r,{children:[n(c,{of:s}),`
`,n(e.h1,{id:"select",children:"Select"}),`
`,t(e.p,{children:[n("b",{children:"bymax React Select"})," is a component created using the ",n(e.a,{href:"https://react-select.com",target:"_blank",rel:"nofollow noopener noreferrer",children:"react-select"}),` component, a flexible and beautiful select input control for ReactJS
with multiselect, singleselect and search system.`]}),`
`,t(e.p,{children:[`Customized to facilitate its use, it has an animation feature with its placeholder text which can be used as the title of the component and properties that help
in integration with the `,n(e.a,{href:"https://formik.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"formik"})," forms component."]}),`
`,t(e.p,{children:["The ",n("b",{children:"bymax React Select"})," component was designed for use in forms that work with cryptocurrencies, but it was also developed to work with any type of data."]}),`
`,n(e.h2,{id:"parameters",children:"Parameters"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.strong,{children:"id"}),": Identifier"]}),`
`,t(e.li,{children:[n(e.strong,{children:"value"}),": Current value, must be an object as follows: ",n(e.code,{children:"{ id: '', value: '', label: '', image: '', base: '', quote: '' }"})]}),`
`,t(e.li,{children:[n(e.strong,{children:"inputValue"}),": Controlled input value for the search input (optional). When provided, controls the value of the internal search input"]}),`
`,t(e.li,{children:[n(e.strong,{children:"isMulti"}),": Allows you to choose several options (true: Multi Selection | false: Single selection)"]}),`
`,t(e.li,{children:[n(e.strong,{children:"isInvalid"}),": Data verification status (true: Changes the component's border color to red | false: Maintains the component's border color respecting the applied style)"]}),`
`,t(e.li,{children:[n(e.strong,{children:"isLocked"}),": Shows the value and blocks the component, preventing it from changing its value (true: enable | false: disable)"]}),`
`,t(e.li,{children:[n(e.strong,{children:"isDisabled"}),': Changes the value to empty ("") and blocks the component, not allowing it to change its value (true: enable | false: disable)']}),`
`,t(e.li,{children:[n(e.strong,{children:"isClearable"}),": Allows you to delete the content of the component in value by clicking on the X icon (true: enable | false: disable)"]}),`
`,t(e.li,{children:[n(e.strong,{children:"options"}),": Items that are shown by the component, must be an object as follows: ",n(e.code,{children:"{ id: '', value: '', label: '', image: '', base: '', quote: '' }"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.strong,{children:"id"}),": Value identifier (Required)"]}),`
`,t(e.li,{children:[n(e.strong,{children:"value"}),": Value of the item (Required)"]}),`
`,t(e.li,{children:[n(e.strong,{children:"label"}),": Text shown by the component. If the base AND quote is entered, the base/quote will be shown as text, otherwise only the label (Required)"]}),`
`,t(e.li,{children:[n(e.strong,{children:"image"}),": Icon that will be shown next to the text (Optional)"]}),`
`,t(e.li,{children:[n(e.strong,{children:"base"}),": Base currency (Optional)"]}),`
`,t(e.li,{children:[n(e.strong,{children:"quote"}),": Quote currency (Optional)"]}),`
`]}),`
`]}),`
`,t(e.li,{children:[n(e.strong,{children:"placeholder"}),": Component title"]}),`
`,t(e.li,{children:[n(e.strong,{children:"placeholderSearch"}),": Search input placeholder text when search is enabled"]}),`
`,t(e.li,{children:[n(e.strong,{children:"moveSelectedToTop"}),": Moves selected option to top of dropdown options list when true."]}),`
`,t(e.li,{children:[n(e.strong,{children:"noOptionsMessage"}),": Message shown when there is no search result"]}),`
`,t(e.li,{children:[n(e.strong,{children:"isLoading"}),": Controls the display of the loading indicator"]}),`
`,t(e.li,{children:[n(e.strong,{children:"loadingMessage"}),": Message shown during loading"]}),`
`,t(e.li,{children:[n(e.strong,{children:"menuPortalTarget"}),": HTMLElement where the menu will be rendered"]}),`
`,t(e.li,{children:[n(e.strong,{children:"styles"}),": Define custom CSS styles"]}),`
`,t(e.li,{children:[n(e.strong,{children:"onChange"}),": Function that returns every time the component's value is changed (Returns the complete object chosen in options)"]}),`
`,t(e.li,{children:[n(e.strong,{children:"onFormikChange"}),": Function for integration with the Formik component, triggered every time the component's value changes"]}),`
`,t(e.li,{children:[n(e.strong,{children:"onFormikBlur"}),": Function for integration with the Formik component, triggered every time the component loses focus"]}),`
`,t(e.li,{children:[n(e.strong,{children:"onInputChange"}),": Function called when the input value changes (optional). Receives the new input value and action metadata. Useful for implementing async search functionality"]}),`
`,t(e.li,{children:[n(e.strong,{children:"onKeyDown"}),": Function called when a key is pressed in the input (optional). Receives the keyboard event. Useful for triggering search on Enter key press"]}),`
`,t(e.li,{children:[n(e.strong,{children:"onKeyUp"}),": Function called when a key is released in the input (optional). Receives the keyboard event. Useful for handling key release events"]}),`
`]}),`
`,n(h,{of:a})]})}function M(i={}){const{wrapper:e}=Object.assign({},l(),i.components);return e?n(e,Object.assign({},i,{children:n(o,i)})):o(i)}export{M as default};
