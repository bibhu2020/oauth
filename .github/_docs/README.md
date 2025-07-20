# ESlint
**ESLint** is a linting tool for JavaScript and TypeScript that helps you catch and fix problems in your codebase. It performs **static code analysis (SCA)**—meaning it examines your code without running it—to enforce coding standards, prevent bugs, and improve code quality.

**Code Quality and Best Practices**: 

```javascript
const unused = 42; // ❌ "unused" is defined but never used

```

```javascript
return;
console.log('this will never run'); // ❌ unreachable

```

**Stylistic Rules**: 

```javascript
function foo() {
console.log('bad indent'); // ❌ Indentation and spacing:
}

```

**Bug-Prone Patterns**:
- Incorrect use of this
- Comparison against assignment: 
```js
if (x = 5) { ... } // ❌ assignment instead of comparison

```
- Shadowed variables (redeclaring a variable in a nested scope)

