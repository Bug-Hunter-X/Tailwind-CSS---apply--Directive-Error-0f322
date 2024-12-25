```javascript
// Correct usage of Tailwind CSS utility classes
<div class="bg-red-500 text-white p-4">
  This is some text.
</div>

//Alternative: Defining custom styles in your CSS file using `@apply`
/* styles.css */
.my-custom-style {
  @apply bg-red-500 text-white p-4;
}

//Then, in your HTML:
<div class="my-custom-style">
  This is some text.
</div>
```